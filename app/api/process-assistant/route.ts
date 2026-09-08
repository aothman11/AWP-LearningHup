import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a process guide assistant for Al-Watania Poultry (AWP), a fully integrated Saudi poultry producer.

You help AWP employees understand SAP PP/QM processes step by step.

Your knowledge covers:
- SAP Production Planning (PP): production orders (CO01, CO11N, TECO), MRP (MD01, MD02, MD04, MD07), goods movements (MIGO), quota arrangements (MEQ1)
- SAP Quality Management (QM): inspection lots, results recording (QA32, QA33), usage decisions
- AWP context: processing plants (P1100, P1200, P1300), broiler farms, hatchery, feed mill, three poultry species (broilers, layer parents, commercial layers)
- T-codes: explain what each does, when to use it, what to expect on screen

Rules:
- If the user writes in Arabic, respond in Arabic
- If the user writes in English, respond in English
- Keep answers concise and practical — the user is on the shop floor or at their desk
- If you are not certain about something, say so clearly
- Never invent T-codes or SAP transaction paths that do not exist
- When referencing a T-code, always explain: what it does, how to navigate to it, what the user should see
- Format step-by-step answers as a numbered list`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    console.error("[process-assistant] GROQ_API_KEY is not set.");
    return NextResponse.json(
      { error: "Assistant is not configured. Please contact the admin." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();
    const { message, processId, language } = body as {
      message: string;
      processId?: string;
      language?: "en" | "ar";
    };

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "message is required" }, { status: 400 });
    }

    const contextHint = processId
      ? `\n\nThe user is currently viewing process: ${processId}. Tailor your answer to that process context where relevant.`
      : "";

    const langHint =
      language === "ar"
        ? "\n\nThe user's interface language is Arabic — prefer an Arabic response unless the user writes in English."
        : "";

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        messages: [
          { role: "system", content: SYSTEM_PROMPT + contextHint + langHint },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await groqRes.json();

    if (!groqRes.ok) {
      console.error("[process-assistant] Groq error:", data.error?.message);
      return NextResponse.json(
        { error: data.error?.message || "Groq API error." },
        { status: groqRes.status },
      );
    }

    const reply: string = data.choices?.[0]?.message?.content ?? "No response generated.";
    return NextResponse.json({ reply });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[process-assistant] Unexpected error:", message);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 },
    );
  }
}
