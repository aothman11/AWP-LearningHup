import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, processContext } = body as {
      messages: Array<{ role: "user" | "assistant"; content: string }>;
      processContext?: string;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages array is required" }, { status: 400 });
    }

    const systemPrompt = `You are a process guide assistant for Al-Watania Poultry (AWP).
You help end users and new employees understand SAP PP/QM processes at AWP.

${processContext ? `Here are the process flows currently loaded in the app:\n\n${processContext}\n\n` : ""}

When answering:
- Refer to the specific step number and step name from the flow when relevant
- Name the SAP T-code involved and what it does at that step
- Use simple, clear language suitable for a new employee
- If the user writes in Arabic, answer in Arabic
- If the user writes in English, answer in English
- If the answer is not covered by the loaded process flows, say so clearly — do not invent steps
- Never invent T-codes or SAP behavior not shown in the flows
- Be concise but complete — the user needs to act on your guidance immediately`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      system: systemPrompt,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const text =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 }
    );
  }
}
