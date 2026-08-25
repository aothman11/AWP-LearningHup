import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

  const userMessage = `Search for the latest SAP PP/QM updates on these topics: ${topics.join("; ")}.
Focus on 2024–2025 S/4HANA releases, new Fiori apps, changed transactions, and integration improvements.`;

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1200,
      system: `You are an SAP PP/QM expert research agent. Search the web for the latest SAP S/4HANA updates
relevant to Production Planning (PP) and Quality Management (QM) in 2024–2025.

After searching, respond ONLY with a valid JSON array — no markdown fences, no backticks, no prose before or after.
The array must have 4–6 items. Include only things actually found; do not invent content.

Each item must follow this exact shape:
[
  {
    "area": "PP" | "QM" | "Integration",
    "title": "short title of the update",
    "summary": "2–3 sentence summary of what changed and why it matters",
    "relevance": "high" | "medium"
  }
]`,
      tools: [
        {
          type: "web_search_20260209",
          name: "web_search",
        } as Parameters<typeof client.messages.create>[0]["tools"] extends Array<infer T> ? T : never,
      ],
      messages: [{ role: "user", content: userMessage }],
    });

    // Find the text block in the response
    const textBlock = response.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json({ error: "No text response from model" }, { status: 502 });
    }

    let raw = textBlock.text.trim();

    // Strip accidental markdown fences
    raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "").trim();

    // Extract the JSON array
    const match = raw.match(/\[[\s\S]*\]/);
    if (!match) {
      return NextResponse.json({ error: "Could not parse JSON from response" }, { status: 502 });
    }

    const items: unknown = JSON.parse(match[0]);
    return NextResponse.json({ items });
  } catch (err) {
    if (err instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: `Anthropic API error: ${err.message}` },
        { status: err.status ?? 502 },
      );
    }
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
