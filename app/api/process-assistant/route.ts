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
  // Accept either env var name
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error("[process-assistant] No Gemini API key found (GEMINI_API_KEY or GOOGLE_GEMINI_API_KEY).");
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

    const systemInstruction = SYSTEM_PROMPT + contextHint + langHint;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: [{ text: message }] }],
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
      console.error("[process-assistant] Gemini error:", data.error?.message);
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
    console.error("[process-assistant] Unexpected error:", message);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 },
    );
  }
}
