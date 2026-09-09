import { NextResponse } from "next/server";
import { groqChat } from "@/lib/groq";

const SYSTEM_PROMPT = `You are a process guide assistant for Al-Watania Poultry (AWP).
You help end users and new employees understand SAP PP/QM processes at AWP.

When answering:
- Refer to the specific step number and step name from the flow when relevant
- Name the SAP T-code involved and what it does at that step
- Use simple, clear language suitable for a new employee
- If the user writes in Arabic, answer in Arabic
- If the user writes in English, answer in English
- If the answer is not covered by the loaded process flows, say so clearly — do not invent steps
- Never invent T-codes or SAP behavior not shown in the flows
- Be concise but complete — the user needs to act on your guidance immediately`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("[chat] GROQ_API_KEY is not set.");
    return NextResponse.json(
      { error: "Assistant is not configured. Please contact the admin." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();
    const { messages, processContext, prompt } = body as {
      messages?: Array<{ role: "user" | "assistant"; content: string }>;
      processContext?: string;
      prompt?: string;
    };

    // Build messages array for Groq
    const chatMessages: Array<{ role: string; content: string }> = [];

    let systemContent = SYSTEM_PROMPT;
    if (processContext) {
      systemContent += `\n\nHere are the process flows currently loaded in the app:\n\n${processContext}`;
    }
    chatMessages.push({ role: "system", content: systemContent });

    if (messages && Array.isArray(messages) && messages.length > 0) {
      for (const m of messages) {
        chatMessages.push({ role: m.role, content: m.content });
      }
    } else if (prompt) {
      chatMessages.push({ role: "user", content: prompt });
    } else {
      return NextResponse.json(
        { error: "messages array or prompt is required" },
        { status: 400 },
      );
    }

    const result = await groqChat(apiKey, chatMessages);

    if (!result.ok) {
      console.error("[chat] Groq error:", result.message);
      return NextResponse.json({ error: result.message }, { status: result.status });
    }

    return NextResponse.json({ reply: result.reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[chat] Unexpected error:", message);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 },
    );
  }
}
