import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY ?? "");

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

  if (!process.env.GOOGLE_API_KEY) {
    return NextResponse.json({ error: "GOOGLE_API_KEY is not configured" }, { status: 500 });
  }

  const prompt = `Search for the latest SAP PP/QM updates on these topics: ${topics.join("; ")}.
Focus on 2024–2025 S/4HANA releases, new Fiori apps, changed transactions, and integration improvements.

Respond ONLY with a valid JSON array — no markdown fences, no backticks, no prose before or after.
The array must have 4–6 items. Include only things actually found; do not invent content.

Each item must follow this exact shape:
[
  {
    "area": "PP" | "QM" | "Integration",
    "title": "short title of the update",
    "summary": "2–3 sentence summary of what changed and why it matters",
    "relevance": "high" | "medium"
  }
]`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      // Google Search grounding — searches the live web, same idea as Anthropic web_search
      tools: [{ googleSearchRetrieval: {} }],
    });

    const result = await model.generateContent(prompt);
    let raw = result.response.text().trim();

    // Strip accidental markdown fences
    raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) {
      return NextResponse.json({ error: "Could not parse JSON from response" }, { status: 502 });
    }

    const items: unknown = JSON.parse(match[0]);
    return NextResponse.json({ items });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
