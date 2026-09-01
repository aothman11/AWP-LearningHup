"use client";

import { useState, useEffect, useMemo } from "react";

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

const MODULE_COLORS: Record<string, string> = {
  PP: "bg-green-100 text-green-800",
  MM: "bg-blue-100 text-blue-800",
  QM: "bg-purple-100 text-purple-800",
  PM: "bg-orange-100 text-orange-800",
  SD: "bg-pink-100 text-pink-800",
  TM: "bg-yellow-100 text-yellow-800",
  FICO: "bg-red-100 text-red-800",
  HCM: "bg-teal-100 text-teal-800",
  EHS: "bg-gray-100 text-gray-700",
};

// ─── Markdown renderer ────────────────────────────────────────────────────────

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={i}>{p.slice(2, -2)}</strong>;
    if (p.startsWith("`") && p.endsWith("`"))
      return (
        <code
          key={i}
          className="bg-[#1C3A2B]/10 text-[#1C3A2B] px-1 rounded text-xs font-mono"
        >
          {p.slice(1, -1)}
        </code>
      );
    return p;
  });
}

function MarkdownDoc({ content }: { content: string }) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty separator lines
    if (trimmed === "---" || trimmed === "") {
      i++;
      continue;
    }

    // Table — skip entirely (usually just metadata tables)
    if (trimmed.startsWith("|")) {
      while (i < lines.length && lines[i].trim().startsWith("|")) i++;
      continue;
    }

    // Headings
    const h3 = line.match(/^###\s+(.*)/);
    const h2 = line.match(/^##\s+(.*)/);
    const h1 = line.match(/^#\s+(.*)/);
    if (h3) {
      nodes.push(
        <h3 key={i} className="text-sm font-semibold text-[#1C3A2B] mt-4 mb-1">
          {renderInline(h3[1])}
        </h3>
      );
      i++;
      continue;
    }
    if (h2) {
      nodes.push(
        <h2 key={i} className="text-base font-bold text-[#1C3A2B] mt-5 mb-2 border-b border-[#1C3A2B]/10 pb-1">
          {renderInline(h2[1])}
        </h2>
      );
      i++;
      continue;
    }
    if (h1) {
      nodes.push(
        <h1 key={i} className="text-lg font-bold text-[#1C3A2B] mb-3">
          {renderInline(h1[1])}
        </h1>
      );
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+[\.\)]\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[\.\)]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[\.\)]\s/, ""));
        i++;
      }
      nodes.push(
        <ol key={`ol-${i}`} className="list-decimal list-outside ml-5 space-y-1 my-2">
          {items.map((it, j) => (
            <li key={j} className="text-sm text-gray-700 leading-relaxed">
              {renderInline(it)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Bullet list
    if (/^[-•]\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-•]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      nodes.push(
        <ul key={`ul-${i}`} className="list-disc list-outside ml-5 space-y-1 my-2">
          {items.map((it, j) => (
            <li key={j} className="text-sm text-gray-700 leading-relaxed">
              {renderInline(it)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph
    nodes.push(
      <p key={i} className="text-sm text-gray-700 leading-relaxed my-1">
        {renderInline(trimmed)}
      </p>
    );
    i++;
  }

  return <div className="space-y-0.5">{nodes}</div>;
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AssistantTab() {
  const [docs, setDocs] = useState<DocEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeModule, setActiveModule] = useState<string>("ALL");
  const [selected, setSelected] = useState<DocFull | null>(null);
  const [docLoading, setDocLoading] = useState(false);

  useEffect(() => {
    fetch("/api/bp-docs")
      .then((r) => r.json())
      .then((data) => setDocs(data.docs ?? []))
      .finally(() => setLoading(false));
  }, []);

  const modules = useMemo(() => {
    const seen = new Set<string>();
    docs.forEach((d) => seen.add(d.moduleShort));
    return ["ALL", ...Array.from(seen).sort()];
  }, [docs]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return docs.filter((d) => {
      const matchMod = activeModule === "ALL" || d.moduleShort === activeModule;
      const matchQ =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.filename.toLowerCase().includes(q) ||
        d.preview.toLowerCase().includes(q);
      return matchMod && matchQ;
    });
  }, [docs, search, activeModule]);

  async function openDoc(doc: DocEntry) {
    setDocLoading(true);
    setSelected(null);
    try {
      const res = await fetch(`/api/bp-docs?id=${doc.id}`);
      const full: DocFull = await res.json();
      setSelected(full);
    } finally {
      setDocLoading(false);
    }
  }

  // ── Document viewer ──────────────────────────────────────────────────────
  if (selected || docLoading) {
    return (
      <div className="flex flex-col h-full bg-[#F7F5F0]">
        {/* Toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-1.5 text-sm text-[#4E7862] hover:text-[#1C3A2B] font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Processes
          </button>
          {selected && (
            <>
              <span className="text-gray-300">|</span>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  MODULE_COLORS[selected.moduleShort] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {selected.moduleShort}
              </span>
              <span className="text-sm text-gray-500 truncate">{selected.title}</span>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
          {docLoading ? (
            <div className="flex items-center justify-center h-40">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[#4E7862] rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          ) : selected ? (
            <div className="max-w-3xl mx-auto">
              <MarkdownDoc content={selected.content} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // ── Process list ─────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full bg-[#F7F5F0]">
      {/* Search + filter */}
      <div className="px-4 pt-4 pb-2 bg-white border-b border-gray-200 space-y-3">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search processes… e.g. production order, goods receipt, corrective maintenance"
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862]"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {modules.map((mod) => (
            <button
              key={mod}
              onClick={() => setActiveModule(mod)}
              className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                activeModule === mod
                  ? "bg-[#1C3A2B] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {mod}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {loading ? (
          <div className="flex items-center justify-center h-32 text-sm text-gray-400">
            Loading processes…
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-sm text-gray-400">
            <span className="text-2xl mb-2">🔍</span>
            No processes found for &ldquo;{search}&rdquo;
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-3">
              {filtered.length} process{filtered.length !== 1 ? "es" : ""}
              {activeModule !== "ALL" ? ` in ${activeModule}` : ""}
              {search ? ` matching "${search}"` : ""}
            </p>
            <div className="grid gap-2">
              {filtered.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => openDoc(doc)}
                  className="text-left bg-white rounded-xl border border-gray-200 px-4 py-3 hover:border-[#4E7862] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`shrink-0 text-xs font-bold px-2 py-0.5 rounded-full mt-0.5 ${
                        MODULE_COLORS[doc.moduleShort] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {doc.moduleShort}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1C3A2B] group-hover:text-[#4E7862] leading-snug">
                        {doc.title}
                      </p>
                      {doc.preview && (
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                          {doc.preview}
                        </p>
                      )}
                    </div>
                    <svg
                      className="shrink-0 w-4 h-4 text-gray-300 group-hover:text-[#4E7862] mt-0.5 ml-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
