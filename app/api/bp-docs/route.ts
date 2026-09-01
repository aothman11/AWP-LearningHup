import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface DocEntry {
  id: string;
  module: string;
  moduleShort: string;
  filename: string;
  title: string;
  preview: string;
}

interface DocFull extends DocEntry {
  content: string;
}

const MODULE_SHORTS: Record<string, string> = {
  "SAP PP": "PP",
  "SAP MM": "MM",
  "SAP QM": "QM",
  "SAP PM": "PM",
  "SAP SD": "SD",
  "SAP TM": "TM",
  "SAP FICO": "FICO",
  "SAP HCM": "HCM",
  "SAP EHS": "EHS",
};

function extractTitle(content: string, filename: string): string {
  // First table cell with real text (the clean process name)
  const tableMatch = content.match(/^\|\s*\*?\*?([^|\-\n*]{3,}?)\*?\*?\s*\|/m);
  if (tableMatch) {
    const t = tableMatch[1].trim().replace(/\*+/g, "").trim();
    if (t && t !== "---" && t.length > 2) return t;
  }
  // Second # heading (first is usually the code)
  const headings = [...content.matchAll(/^#\s+(.+)$/gm)];
  if (headings.length >= 2) return headings[1][1].trim();
  if (headings.length === 1) return headings[0][1].trim();
  // Filename fallback
  return filename.replace(/\.md$/i, "").replace(/[-_V]\d+/g, "").replace(/[-_]/g, " ").trim();
}

function extractPreview(content: string): string {
  const lines = content.split("\n").filter(
    (l) => l.trim() && !l.startsWith("#") && !l.startsWith("|") && l.trim() !== "---"
  );
  return lines.slice(0, 2).join(" ").replace(/\*+/g, "").trim().slice(0, 180);
}

let _index: DocEntry[] | null = null;

function buildIndex(): DocEntry[] {
  if (_index) return _index;
  const basePath = path.join(process.cwd(), "data", "sap-bp");
  const entries: DocEntry[] = [];

  function walkDir(dir: string, module: string) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        walkDir(fullPath, module);
      } else if (item.name.endsWith(".md")) {
        try {
          const content = fs.readFileSync(fullPath, "utf-8");
          const relPath = path.relative(basePath, fullPath);
          const id = Buffer.from(relPath).toString("base64url");
          entries.push({
            id,
            module,
            moduleShort: MODULE_SHORTS[module] ?? module.replace("SAP ", ""),
            filename: item.name,
            title: extractTitle(content, item.name),
            preview: extractPreview(content),
          });
        } catch {}
      }
    }
  }

  try {
    const modules = fs
      .readdirSync(basePath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const mod of modules) {
      walkDir(path.join(basePath, mod), mod);
    }
  } catch {}

  _index = entries;
  return entries;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    // Return full content for one doc
    const index = buildIndex();
    const entry = index.find((e) => e.id === id);
    if (!entry) return NextResponse.json({ error: "Not found" }, { status: 404 });
    try {
      const relPath = Buffer.from(id, "base64url").toString("utf-8");
      const fullPath = path.join(process.cwd(), "data", "sap-bp", relPath);
      const content = fs.readFileSync(fullPath, "utf-8");
      const doc: DocFull = { ...entry, content };
      return NextResponse.json(doc);
    } catch {
      return NextResponse.json({ error: "Read error" }, { status: 500 });
    }
  }

  // Return full index
  const index = buildIndex();
  return NextResponse.json({ docs: index });
}
