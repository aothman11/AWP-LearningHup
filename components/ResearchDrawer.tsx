"use client";

import { useState } from "react";

interface ResearchItem {
  area: "PP" | "QM" | "Integration";
  title: string;
  summary: string;
  relevance: "high" | "medium";
}

const TOPICS = [
  "MRP & Demand Planning",
  "Production Orders",
  "Quality Inspection Lots",
  "S/4HANA Fiori Apps",
  "Batch Management",
  "QM Notifications",
];

const AREA_COLORS: Record<string, string> = {
  PP: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  QM: "bg-blue-900/60 text-blue-300 border border-blue-700",
  Integration: "bg-violet-900/60 text-violet-300 border border-violet-700",
};

export function ResearchDrawer() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ResearchItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  function toggleTopic(t: string) {
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  async function runSearch() {
    const topics = selected.length > 0 ? selected : TOPICS;
    setLoading(true);
    setError(null);
    setItems([]);
    try {
      const res = await fetch("/api/sap-research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topics }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unknown error");
      } else {
        setItems(data.items ?? []);
      }
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#047836" }}
        aria-label="Open latest SAP updates"
      >
        {/* Pulsing dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        Latest SAP updates
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-white">Latest SAP Updates</h2>
            <p className="mt-0.5 text-xs text-zinc-400">
              AI knowledge base · S/4HANA 2023–2025
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            aria-label="Close drawer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* Topic chips */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            Filter topics
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => toggleTopic(t)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  selected.includes(t)
                    ? "bg-emerald-700 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search button */}
          <button
            onClick={runSearch}
            disabled={loading}
            className="mb-6 w-full rounded-xl py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
            style={{ background: "#047836" }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Searching…
              </span>
            ) : (
              "Search now"
            )}
          </button>

          {/* Error */}
          {error && (
            <div className="mb-4 rounded-xl border border-red-800/60 bg-red-950/40 p-4 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Results */}
          {items.length > 0 && (
            <div className="space-y-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${AREA_COLORS[item.area] ?? AREA_COLORS.Integration}`}
                    >
                      {item.area}
                    </span>
                    {item.relevance === "high" && (
                      <span className="text-amber-400 text-xs" title="High relevance">★</span>
                    )}
                  </div>
                  <h3 className="mb-1.5 text-sm font-medium text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && items.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-3 text-4xl opacity-30">🔍</div>
              <p className="text-sm text-zinc-500">
                Select topics and press <span className="text-zinc-300">Search now</span> to fetch the latest SAP PP/QM updates.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 px-5 py-3">
          <p className="text-[10px] text-zinc-600 leading-relaxed">
            Results are generated by Llama 3.3 (Groq) from training knowledge. Always verify against official SAP release notes and help.sap.com.
          </p>
        </div>
      </div>
    </>
  );
}
