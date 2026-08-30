/**
 * Build-time parser for AWP_Business_Process_Documentation.md
 * Splits the document into typed ProcessSection objects and converts
 * each section's markdown to safe HTML for display.
 *
 * No external markdown library required — the document's structure is
 * well-defined and consistent across all 10 sections.
 */
import { readFileSync } from "fs";
import { join } from "path";

// ── Types ─────────────────────────────────────────────────────────────────

export interface ProcessSection {
  /** Numeric position in the document (1–10) */
  id: number;
  /** URL-safe slug: kebab-case derived from the section title */
  slug: string;
  /** Human-readable section title (e.g. "Poultry_Supply_Chain_Process") */
  title: string;
  /** Short display label (spaces instead of underscores) */
  label: string;
  /** Source PDF filename referenced in the section header */
  sourceFile: string;
  /** Diagram type description */
  diagramType: string;
  /** SAP T-Codes referenced in this section */
  tcodes: string[];
  /** Key topic tags extracted from headings */
  topics: string[];
  /** Raw markdown content (section body only) */
  markdown: string;
  /** HTML converted from markdown for browser rendering */
  htmlContent: string;
}

export interface QuizQuestion {
  id: string;
  mode: "sap-focus" | "process-flow";
  text: string;
  options: string[];
  answer: number;
  explanation: string;
  tcodeRef?: string;
}

export interface ProcessQuiz {
  slug: string;
  title: string;
  questions: QuizQuestion[];
}

// ── Constants ─────────────────────────────────────────────────────────────

const DOC_PATH = join(process.cwd(), "content/business-processes/AWP_Business_Process_Documentation.md");
const QUIZ_DIR = join(process.cwd(), "content/business-processes/quizzes");

// T-Code regex: 2–10 uppercase letters optionally followed by digits and optional letter
// Covers: CO01, CO11N, MF42N, MIGO_GR, COOIS, ZPPH3, ZPPHLWEEKLY, QA11, QA32 etc.
const TCODE_PATTERN = /\b([A-Z]{2,10}(?:\d{2,4}[A-Z]?|_[A-Z]{2,4})?)\b/g;

// Known valid T-Codes in the AWP document (to filter false positives)
const KNOWN_TCODES = new Set([
  "CO01", "CO02", "CO03", "CO11N", "COOIS",
  "MIGO", "MIGO_GR", "MIGO_GO",
  "MF42N", "MFBF",
  "QA11", "QA32",
  "ZPPH3", "ZPPHLWEEKLY",
]);

// ── Slugify ───────────────────────────────────────────────────────────────

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// ── Markdown → HTML Converter ─────────────────────────────────────────────

/**
 * Convert a markdown string to HTML.
 * Handles: headings (##, ###, ####), tables, bold, italic,
 * inline code, fenced code blocks, unordered lists, ordered lists,
 * blockquotes, horizontal rules, and paragraphs.
 *
 * This is intentionally scoped to the patterns present in the AWP doc.
 */
export function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let i = 0;

  const escHtml = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /** Apply inline formatting: bold, italic, inline code, links */
  function inlineFormat(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // fenced inline code (keep before bold/italic)
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      // bold-italic ***…***
      .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
      // bold **…**
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // italic *…*
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      // markdown link [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  }

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // ── Fenced code block ─────────────────────────────────────
    if (trimmed.startsWith("```")) {
      const lang = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(escHtml(lines[i]));
        i++;
      }
      out.push(
        `<pre class="awp-code-block"${lang ? ` data-lang="${escHtml(lang)}"` : ""}><code>${codeLines.join("\n")}</code></pre>`
      );
      i++;
      continue;
    }

    // ── Horizontal rule ───────────────────────────────────────
    if (/^---+$/.test(trimmed)) {
      out.push('<hr class="awp-rule">');
      i++;
      continue;
    }

    // ── Headings ──────────────────────────────────────────────
    if (trimmed.startsWith("#### ")) {
      out.push(`<h4 class="awp-h4">${inlineFormat(trimmed.slice(5))}</h4>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      out.push(`<h3 class="awp-h3">${inlineFormat(trimmed.slice(4))}</h3>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      out.push(`<h2 class="awp-h2">${inlineFormat(trimmed.slice(3))}</h2>`);
      i++;
      continue;
    }

    // ── Blockquote ────────────────────────────────────────────
    if (trimmed.startsWith("> ")) {
      const bqLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        bqLines.push(inlineFormat(lines[i].trim().slice(2)));
        i++;
      }
      out.push(`<blockquote class="awp-blockquote">${bqLines.join("<br>")}</blockquote>`);
      continue;
    }

    // ── Table ─────────────────────────────────────────────────
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableRows: string[] = [];
      let isHeader = true;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const row = lines[i].trim();
        // Skip separator rows (e.g. |---|---|)
        if (/^\|[-: |]+\|$/.test(row)) {
          isHeader = false;
          i++;
          continue;
        }
        const cells = row
          .slice(1, -1)
          .split("|")
          .map((c) => c.trim());
        const tag = isHeader ? "th" : "td";
        const rowHtml = `<tr>${cells.map((c) => `<${tag}>${inlineFormat(c)}</${tag}>`).join("")}</tr>`;
        tableRows.push(rowHtml);
        // After we've parsed the header and not yet seen the separator, isHeader stays true.
        // Once we hit separator (and set isHeader=false), remaining rows are td.
        i++;
      }
      out.push(
        `<div class="awp-table-wrap"><table class="awp-table">${tableRows.join("")}</table></div>`
      );
      continue;
    }

    // ── Unordered list ────────────────────────────────────────
    if (/^[-*] /.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i].trim())) {
        items.push(`<li>${inlineFormat(lines[i].trim().slice(2))}</li>`);
        i++;
      }
      out.push(`<ul class="awp-ul">${items.join("")}</ul>`);
      continue;
    }

    // ── Ordered list ──────────────────────────────────────────
    if (/^\d+\. /.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        items.push(`<li>${inlineFormat(lines[i].trim().replace(/^\d+\. /, ""))}</li>`);
        i++;
      }
      out.push(`<ol class="awp-ol">${items.join("")}</ol>`);
      continue;
    }

    // ── Empty line (paragraph break) ──────────────────────────
    if (trimmed === "") {
      i++;
      continue;
    }

    // ── Regular paragraph ─────────────────────────────────────
    const paraLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("|") && !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("---") && !lines[i].trim().startsWith("> ") &&
      !/^[-*] /.test(lines[i].trim()) && !/^\d+\. /.test(lines[i].trim())) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length) {
      out.push(`<p class="awp-p">${inlineFormat(paraLines.join(" "))}</p>`);
    }
  }

  return out.join("\n");
}

// ── T-Code extractor ──────────────────────────────────────────────────────

function extractTcodes(text: string): string[] {
  const found = new Set<string>();
  let match: RegExpExecArray | null;
  TCODE_PATTERN.lastIndex = 0;
  while ((match = TCODE_PATTERN.exec(text)) !== null) {
    if (KNOWN_TCODES.has(match[1])) {
      found.add(match[1]);
    }
  }
  return Array.from(found).sort();
}

// ── Topic extractor (from ### headings) ───────────────────────────────────

function extractTopics(md: string): string[] {
  const topics: string[] = [];
  const headingRe = /^###+ (.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = headingRe.exec(md)) !== null) {
    const topic = m[1].replace(/\*\*/g, "").trim();
    if (topic.length < 60 && !topics.includes(topic)) {
      topics.push(topic);
    }
  }
  return topics.slice(0, 8); // cap at 8 topics
}

// ── Main parser ───────────────────────────────────────────────────────────

let _cached: ProcessSection[] | null = null;

export function parseBusinessProcessDoc(): ProcessSection[] {
  if (_cached) return _cached;

  const raw = readFileSync(DOC_PATH, "utf-8");

  // Split on `\n## ` to isolate each top-level section.
  // First chunk is the document header + table of contents; skip it.
  const chunks = raw.split(/\n(?=## \d+\. )/);

  const sections: ProcessSection[] = [];

  for (const chunk of chunks) {
    // Must start with a numbered section heading: ## 1. Title
    const headingMatch = chunk.match(/^## (\d+)\. (.+)/);
    if (!headingMatch) continue;

    const id = parseInt(headingMatch[1], 10);
    if (isNaN(id) || id < 1 || id > 10) continue;

    const rawTitle = headingMatch[2].trim();
    const slug = slugify(rawTitle);
    const label = rawTitle.replace(/_/g, " ").replace(/-/g, " — ");

    // Extract source file and diagram type from the first lines of the body
    const bodyLines = chunk.split("\n").slice(1); // strip the ## heading line
    let sourceFile = "";
    let diagramType = "";

    for (const line of bodyLines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("**File:**")) {
        sourceFile = trimmed.replace("**File:**", "").replace(/`/g, "").trim();
      } else if (trimmed.startsWith("**Type:**")) {
        diagramType = trimmed.replace("**Type:**", "").trim();
      }
      if (sourceFile && diagramType) break;
    }

    // The section markdown is everything after the heading line
    const markdown = bodyLines.join("\n").trim();
    const htmlContent = markdownToHtml(markdown);
    const tcodes = extractTcodes(markdown);
    const topics = extractTopics(markdown);

    sections.push({
      id,
      slug,
      title: rawTitle,
      label,
      sourceFile,
      diagramType,
      tcodes,
      topics,
      markdown,
      htmlContent,
    });
  }

  // Sort by id to guarantee order
  sections.sort((a, b) => a.id - b.id);
  _cached = sections;
  return sections;
}

// ── Quiz loader ───────────────────────────────────────────────────────────

export function loadProcessQuiz(slug: string): ProcessQuiz | null {
  try {
    const filePath = join(QUIZ_DIR, `${slug}.json`);
    const raw = readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as ProcessQuiz;
  } catch {
    return null;
  }
}

// ── Static params helper ──────────────────────────────────────────────────

export function getAllProcessSlugs(): string[] {
  return parseBusinessProcessDoc().map((s) => s.slug);
}
