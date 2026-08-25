import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  let topics: string[];
  try {
    const body = await req.json();
    topics = body.topics;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!Array.isArray(topics) || topics.length === 0) {
    return NextResponse.json({ error: "topics must be a non-empty array" }, { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json({ error: "GROQ_API_KEY is not configured" }, { status: 500 });
  }

  try {
    const response = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      temperature: 0.3,
      max_tokens: 1400,
      messages: [
        {
          role: "system",
          content: `You are an SAP PP/QM expert. Provide structured information about recent SAP S/4HANA updates (2023–2025) relevant to Production Planning (PP) and Quality Management (QM).

Respond ONLY with a valid JSON array — no markdown fences, no backticks, no prose before or after.
The array must have 4–6 items.

Each item must follow this exact shape:
[
  {
    "area": "PP" | "QM" | "Integration",
    "title": "short title of the update",
    "summary": "2–3 sentence summary of what changed and why it matters",
    "relevance": "high" | "medium"
  }
]`,
        },
        {
          role: "user",
          content: `Give me the most important SAP S/4HANA PP/QM updates and improvements covering these topics: ${topics.join("; ")}.
Focus on S/4HANA 2023–2025 releases, new or improved Fiori apps, changed transactions, process simplifications, and integration improvements between PP and QM.`,
        },
      ],
    });

    let raw = (response.choices[0].message.content ?? "").trim();

    // Strip accidental markdown fences
    raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) {
      return NextResponse.json({ error: "Could not parse response — please try again." }, { status: 502 });
    }

    const items: unknown = JSON.parse(match[0]);
    return NextResponse.json({ items });
  } catch (err) {
    const raw = err instanceof Error ? err.message : "Unknown error";

    if (raw.includes("429") || raw.toLowerCase().includes("rate limit")) {
      return NextResponse.json(
        { error: "Rate limit reached — please wait a moment and try again." },
        { status: 429 },
      );
    }

    return NextResponse.json({ error: raw }, { status: 500 });
  }
}
