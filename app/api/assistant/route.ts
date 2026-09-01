import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

interface BpDocument {
  filename: string;
  module: string;
  content: string;
}

let _docs: BpDocument[] | null = null;

function loadDocuments(): BpDocument[] {
  if (_docs) return _docs;
  const basePath = path.join(process.cwd(), "data", "sap-bp");
  const docs: BpDocument[] = [];
  try {
    const modules = fs
      .readdirSync(basePath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const mod of modules) {
      const modPath = path.join(basePath, mod);
      const files = fs.readdirSync(modPath).filter((f) => f.endsWith(".md"));
      for (const file of files) {
        try {
          const content = fs.readFileSync(path.join(modPath, file), "utf-8");
          docs.push({ filename: file, module: mod, content });
        } catch {}
      }
    }
  } catch {}
  _docs = docs;
  return docs;
}

const STOP_WORDS = new Set([
  "the", "a", "an", "is", "in", "on", "of", "to", "and", "or", "for",
  "with", "how", "do", "i", "what", "does", "can", "my", "me", "this",
  "that", "it", "be", "at", "by", "from", "are", "was", "were", "will",
  "we", "you", "he", "she", "they", "their", "its", "our",
]);

function scoreDoc(doc: BpDocument, keywords: string[]): number {
  const lower = (doc.filename + " " + doc.module + " " + doc.content).toLowerCase();
  return keywords.reduce((score, kw) => {
    let count = 0;
    let pos = 0;
    while ((pos = lower.indexOf(kw, pos)) !== -1) {
      count++;
      pos += kw.length;
    }
    return score + Math.min(count, 20);
  }, 0);
}

function retrieveDocuments(query: string, topK = 6): BpDocument[] {
  const docs = loadDocuments();
  const keywords = query
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
  if (keywords.length === 0) return docs.slice(0, topK);
  const scored = docs
    .map((d) => ({ doc: d, score: scoreDoc(d, keywords) }))
    .sort((a, b) => b.score - a.score);
  return scored
    .slice(0, topK)
    .filter((x) => x.score > 0)
    .map((x) => x.doc);
}

const SYSTEM_PROMPT = `You are the AWP SAP Reference Assistant — an expert on Advanced Work Packaging (AWP) and SAP S/4HANA business processes at Al-Watania Poultry.

## Identity
You are a knowledgeable assistant specialising in SAP business processes as documented in the AWP Business Blueprint (BP) documents. You help users understand SAP processes, T-codes, configurations, and workflows.

## Language Rule
- Detect the language of the user's message automatically.
- Respond in the **same language** as the user's message.
- If the user writes in Arabic, respond fully in Arabic.
- If the user writes in English, respond fully in English.
- Never mix languages in a single response unless quoting a field/T-code name that only exists in one language.

## Source Rule
- Answer **only** from the AWP BP documents provided in this context.
- If a question cannot be answered from the provided documents, say so clearly and suggest the user consult the relevant SAP module team.
- Never fabricate T-codes, configuration paths, or process steps.
- Always cite your source: mention the document filename and module at the end of your answer.

## Response Format
- Use clear headings and bullet points where appropriate.
- For step-by-step processes, use numbered lists.
- Highlight T-codes in backticks e.g. \`CO01\`, \`MIGO\`, \`QA01\`.
- Keep responses concise and practical.
- End each response with a **Sources** section listing the document(s) used.

## Scope
You cover these SAP modules as documented in the AWP BP:
- **PP** — Production Planning
- **MM** — Materials Management
- **QM** — Quality Management
- **PM** — Plant Maintenance
- **SD** — Sales & Distribution
- **TM** — Transportation Management
- **FICO** — Finance & Controlling
- **HCM** — Human Capital Management
- **EHS** — Environment, Health & Safety
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history = [] } = body;

    if (!message?.trim()) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    const relevantDocs = retrieveDocuments(message);
    const docsContext =
      relevantDocs.length > 0
        ? "\n\n---\n\n## AWP BP Documents (relevant excerpts)\n\n" +
          relevantDocs
            .map(
              (d) =>
                `### Source: \`${d.filename}\` — ${d.module}\n\n${d.content}`
            )
            .join("\n\n---\n\n")
        : "\n\n---\n\n## AWP BP Documents\n\nNo directly relevant documents found for this query.";

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const messages: Anthropic.MessageParam[] = [
      ...history.map(
        (h: { role: "user" | "assistant"; content: string }) => ({
          role: h.role,
          content: h.content,
        })
      ),
      { role: "user", content: message },
    ];

    const stream = client.messages.stream({
      model: "claude-opus-5",
      max_tokens: 4096,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT + docsContext,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
