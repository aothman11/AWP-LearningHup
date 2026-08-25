import { NextResponse } from "next/server";

interface RSSItem {
  area: "PP" | "QM" | "Integration";
  title: string;
  summary: string;
  url: string;
  date: string;
  relevance: "high" | "medium";
}

// Google News RSS — always free, no API key, returns current SAP news
const RSS_FEEDS = [
  "https://news.google.com/rss/search?q=SAP+S%2F4HANA+Production+Planning+Quality+Management&hl=en-US&gl=US&ceid=US:en",
  "https://news.google.com/rss/search?q=SAP+PP+QM+S4HANA+Fiori+2024+2025&hl=en-US&gl=US&ceid=US:en",
];

function detectArea(text: string): "PP" | "QM" | "Integration" {
  const t = text.toLowerCase();
  const qmScore = (t.match(/\b(qm|quality|inspection|lot|notification|certificate|defect)\b/g) ?? []).length;
  const ppScore = (t.match(/\b(pp|mrp|production order|planning|bom|routing|confirmation|backflush)\b/g) ?? []).length;
  if (qmScore > ppScore) return "QM";
  if (ppScore > 0) return "PP";
  return "Integration";
}

function detectRelevance(text: string): "high" | "medium" {
  const t = text.toLowerCase();
  const highKeywords = ["s/4hana", "s4hana", "fiori", "2024", "2025", "new feature", "simplified", "changed"];
  return highKeywords.some((k) => t.includes(k)) ? "high" : "medium";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRSS(xml: string, topics: string[]): RSSItem[] {
  const items: RSSItem[] = [];
  const itemBlocks = xml.match(/<item[\s\S]*?<\/item>/g) ?? [];

  for (const block of itemBlocks) {
    const title = stripHtml(block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ?? "");
    const link = block.match(/<link[^>]*>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? "";
    const pubDate = block.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? "";
    const descRaw = block.match(/<description[^>]*>([\s\S]*?)<\/description>/)?.[1] ?? "";
    const desc = stripHtml(descRaw).slice(0, 280);

    if (!title || !link) continue;

    const combined = (title + " " + desc).toLowerCase();

    // Keep only posts relevant to PP/QM/production/quality
    const relevant = ["production", "planning", "quality", "pp", "qm", "mrp", "inspection", "manufacturing", "s/4hana", "s4hana"]
      .some((k) => combined.includes(k));
    if (!relevant) continue;

    // If topics are selected, filter further
    if (topics.length > 0) {
      const topicKeywords: Record<string, string[]> = {
        "MRP & Demand Planning": ["mrp", "demand", "planning", "forecast", "ddmrp"],
        "Production Orders": ["production order", "confirmation", "backflush", "goods issue", "co11n"],
        "Quality Inspection Lots": ["inspection lot", "usage decision", "qe51", "qa11", "inspection"],
        "S/4HANA Fiori Apps": ["fiori", "app", "tile", "launchpad"],
        "Batch Management": ["batch", "traceability", "genealogy"],
        "QM Notifications": ["notification", "defect", "corrective", "capa"],
      };
      const selectedKeywords = topics.flatMap((t) => topicKeywords[t] ?? []);
      if (selectedKeywords.length > 0 && !selectedKeywords.some((k) => combined.includes(k))) continue;
    }

    const date = pubDate ? new Date(pubDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

    items.push({
      area: detectArea(title + " " + desc),
      title,
      summary: desc || "Read more on SAP Community.",
      url: link,
      date,
      relevance: detectRelevance(title + " " + desc),
    });

    if (items.length >= 8) break;
  }

  return items;
}

export async function POST(req: Request) {
  let topics: string[] = [];
  try {
    const body = await req.json();
    topics = Array.isArray(body.topics) ? body.topics : [];
  } catch {
    // ignore — topics optional
  }

  const results = await Promise.allSettled(
    RSS_FEEDS.map((url) =>
      fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; SAP-QM-Guide/1.0)" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next: { revalidate: 3600 } as any,
      }).then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${r.status}`))))
    )
  );

  const items: RSSItem[] = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      items.push(...parseRSS(result.value, topics));
    }
  }

  if (items.length === 0) {
    return NextResponse.json(
      { error: "Could not reach SAP Community RSS — check your network or try again." },
      { status: 502 }
    );
  }

  // Deduplicate by title, high-relevance first
  const seen = new Set<string>();
  const deduped = items
    .filter((i) => { if (seen.has(i.title)) return false; seen.add(i.title); return true; })
    .sort((a, b) => (a.relevance === b.relevance ? 0 : a.relevance === "high" ? -1 : 1))
    .slice(0, 8);

  return NextResponse.json({ items: deduped });
}
