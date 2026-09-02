"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface BpDoc {
  id: string;
  title: string;
  module: string;
  slug?: string | null;
  viewUrl?: string | null;
}

const MODULE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PP:   { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5" },
  QM:   { bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585" },
  MM:   { bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8" },
  PM:   { bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8" },
  HCM:  { bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4" },
  FICO: { bg: "#E0F5EC", text: "#14532D", border: "#86EFAC" },
  SD:   { bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A" },
  TM:   { bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A" },
  EHS:  { bg: "#F0E0E8", text: "#6B1F40", border: "#E8A4C0" },
  General: { bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8" },
};

function moduleFromTitle(title: string): string {
  const t = title.toUpperCase();
  if (t.includes(" PP ") || t.startsWith("PP") || t.includes("PRODUCTION") || t.includes("MRP")) return "PP";
  if (t.includes(" QM ") || t.startsWith("QM") || t.includes("QUALITY")) return "QM";
  if (t.includes(" MM ") || t.startsWith("MM") || t.includes("MATERIAL") || t.includes("PROCUREMENT") || t.includes("INVENTORY")) return "MM";
  if (t.includes(" PM ") || t.startsWith("PM") || t.includes("MAINTENANCE")) return "PM";
  if (t.includes("HCM") || t.includes("HR ") || t.includes("PAYROLL") || t.includes("EMPLOYEE")) return "HCM";
  if (t.includes("FICO") || t.includes("FINANCE") || t.includes("ACCOUNT") || t.includes("COST")) return "FICO";
  if (t.includes(" SD ") || t.startsWith("SD") || t.includes("SALES") || t.includes("DELIVERY")) return "SD";
  if (t.includes(" TM ") || t.startsWith("TM") || t.includes("TRANSPORT")) return "TM";
  if (t.includes("EHS") || t.includes("SAFETY") || t.includes("ENVIRONMENT")) return "EHS";
  return "General";
}

const MODULE_FILTERS = ["All", "PP", "QM", "MM", "PM", "HCM", "FICO", "SD", "TM", "EHS", "General"];

export function BusinessProcessesTab() {
  const [docs, setDocs] = useState<BpDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modFilter, setModFilter] = useState("All");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/bp-docs")
      .then((r) => r.json())
      .then((data: BpDoc[]) => {
        const enriched = data.map((d) => ({
          ...d,
          module: d.module && d.module !== "General" ? d.module : moduleFromTitle(d.title),
        }));
        setDocs(enriched);
      })
      .catch(() => setError("Could not load business process documents."))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return docs.filter((d) => {
      const matchMod = modFilter === "All" || d.module === modFilter;
      const matchSearch = !q || d.title.toLowerCase().includes(q);
      return matchMod && matchSearch;
    });
  }, [docs, search, modFilter]);

  const countByMod = useMemo(() => {
    const map: Record<string, number> = { All: docs.length };
    docs.forEach((d) => { map[d.module] = (map[d.module] ?? 0) + 1; });
    return map;
  }, [docs]);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block w-6 h-6 border-2 border-[#C8DFC5] border-t-[#1C3A2B] rounded-full animate-spin mb-3" />
        <p className="text-sm text-[#6B7A6F]">Loading business processes…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-[#9B3030]">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Section header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">AWP Documentation</p>
          <h3 className="text-2xl font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Business Processes
          </h3>
          <p className="text-sm text-[#6B7A6F] mt-1">
            {docs.length} structured process documents — click any to read the full guide.
          </p>
        </div>
        {/* Search */}
        <div className="relative sm:w-64 shrink-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search processes…"
            className="w-full pl-8 pr-3 py-2 text-sm border border-[#D9D4C8] rounded-lg bg-[#FAFAF8] text-[#2A2E2B] placeholder:text-[#9BA89F] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
          />
        </div>
      </div>

      {/* Module filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {MODULE_FILTERS.map((mod) => {
          const count = countByMod[mod] ?? 0;
          if (mod !== "All" && count === 0) return null;
          const mc = mod !== "All" ? MODULE_COLORS[mod] : null;
          const active = modFilter === mod;
          return (
            <button
              key={mod}
              onClick={() => setModFilter(mod)}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors font-medium"
              style={
                active
                  ? mc
                    ? { background: mc.bg, color: mc.text, borderColor: mc.border }
                    : { background: "#1C3A2B", color: "#F7F5F0", borderColor: "#1C3A2B" }
                  : { background: "#FAFAF8", color: "#6B7A6F", borderColor: "#D9D4C8" }
              }
            >
              {mod} ({count})
            </button>
          );
        })}
      </div>

      {/* Process document cards */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[#6B7A6F] py-8 text-center">
          No documents match{search ? ` "${search}"` : " this filter"}.{" "}
          {search && (
            <button onClick={() => setSearch("")} className="underline hover:text-[#1C3A2B] transition-colors">Clear</button>
          )}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((doc) => {
            const mc = MODULE_COLORS[doc.module] ?? MODULE_COLORS.General;
            const isExternal = !!doc.viewUrl;

            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0"
                    style={{ background: mc.bg, color: mc.text }}
                  >
                    {doc.module}
                  </span>
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 flex items-center gap-0.5"
                    style={{ color: "#4E7862" }}>
                    {isExternal ? "Open ↗" : "Read →"}
                  </span>
                </div>
                <p className="text-sm text-[#2A2E2B] font-medium leading-snug">{doc.title}</p>
                {isExternal && (
                  <p className="text-[10px] text-[#6B7A6F] mt-auto">📄 Business Blueprint</p>
                )}
              </>
            );

            const cardClass = "group bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl p-4 hover:border-[#4E7862] hover:shadow-sm transition-all flex flex-col gap-2";

            if (isExternal) {
              return (
                <a
                  key={doc.id}
                  href={doc.viewUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={doc.id}
                href={`/learning/business-processes/${doc.slug ?? encodeURIComponent(doc.id)}`}
                className={cardClass}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
