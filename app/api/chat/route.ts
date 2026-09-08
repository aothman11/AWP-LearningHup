import { NextResponse } from "next/server";

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
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("[chat] GEMINI_API_KEY is not set.");
    return NextResponse.json(
      { error: "Assistant is not configured. Please contact the admin." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();

    // Support both callers: { messages, processContext } and legacy { prompt }
    const { messages, processContext, prompt } = body as {
      messages?: Array<{ role: "user" | "assistant"; content: string }>;
      processContext?: string;
      prompt?: string;
    };

    let userText: string;
    if (messages && Array.isArray(messages) && messages.length > 0) {
      const context = processContext
        ? `Here are the process flows currently loaded in the app:\n\n${processContext}\n\n`
        : "";
      const history = messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n\n");
      userText = context + history;
    } else if (prompt) {
      userText = prompt;
    } else {
      return NextResponse.json(
        { error: "messages array or prompt is required" },
        { status: 400 },
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: userText }] }],
      }),
    });

    const data = await geminiRes.json();

    if (geminiRes.status === 429) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again shortly." },
        { status: 429 },
      );
    }

    if (!geminiRes.ok) {
      console.error("[chat] Gemini API error:", data.error?.message);
      return NextResponse.json(
        { error: data.error?.message || "Gemini API error." },
        { status: geminiRes.status },
      );
    }

    const reply: string =
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response generated.";

    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[chat] Unexpected error:", message);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 },
    );
  }
}
