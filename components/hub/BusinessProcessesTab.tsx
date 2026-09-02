"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

interface BpDoc {
  id: string;
  title: string;
  module: string;
  slug?: string | null;
  driveId?: string | null;
}

const MODULE_META: Record<
  string,
  { label: string; bg: string; text: string; border: string; icon: string }
> = {
  PP:      { label: "Production Planning",    bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5", icon: "🏭" },
  QM:      { label: "Quality Management",     bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585", icon: "✅" },
  MM:      { label: "Materials Management",   bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8", icon: "📦" },
  PM:      { label: "Plant Maintenance",      bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8", icon: "🔧" },
  HCM:     { label: "Human Capital Mgmt",     bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4", icon: "👥" },
  FICO:    { label: "Finance & Controlling",  bg: "#E0F5EC", text: "#14532D", border: "#86EFAC", icon: "💰" },
  SD:      { label: "Sales & Distribution",   bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A", icon: "🛒" },
  TM:      { label: "Transportation Mgmt",    bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A", icon: "🚛" },
  EHS:     { label: "Environment, Health & Safety", bg: "#F0E0E8", text: "#6B1F40", border: "#E8A4C0", icon: "🦺" },
  General: { label: "General",               bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8", icon: "📄" },
};

const MODULE_ORDER = ["PP", "QM", "MM", "PM", "HCM", "FICO", "SD", "TM", "EHS", "General"];

export function BusinessProcessesTab() {
  const [docs, setDocs] = useState<BpDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/bp-docs")
      .then((r) => r.json())
      .then((data: BpDoc[]) => setDocs(data))
      .catch(() => setError("Could not load business process documents."))
      .finally(() => setLoading(false));
  }, []);

  const q = search.trim().toLowerCase();

  const grouped = useMemo(() => {
    const filtered = docs.filter((d) => {
      const modMatch = !activeModule || d.module === activeModule;
      const searchMatch = !q || d.title.toLowerCase().includes(q);
      return modMatch && searchMatch;
    });

    const map = new Map<string, BpDoc[]>();
    for (const mod of MODULE_ORDER) map.set(mod, []);
    for (const doc of filtered) {
      const mod = doc.module in MODULE_META ? doc.module : "General";
      map.get(mod)!.push(doc);
    }
    return map;
  }, [docs, q, activeModule]);

  const countByMod = useMemo(() => {
    const map: Record<string, number> = {};
    for (const d of docs) {
      map[d.module] = (map[d.module] ?? 0) + 1;
    }
    return map;
  }, [docs]);

  const totalFiltered = useMemo(
    () => Array.from(grouped.values()).reduce((s, a) => s + a.length, 0),
    [grouped]
  );

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
    <div className="flex flex-col lg:flex-row gap-6">
      {/* ── Left sidebar: module nav ─────────────────────────────────────── */}
      <aside className="lg:w-52 shrink-0">
        <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-3">
          Filter by Module
        </p>
        <nav className="flex lg:flex-col gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveModule(null)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left"
            style={
              !activeModule
                ? { background: "#1C3A2B", color: "#F7F5F0" }
                : { background: "#F0EDE8", color: "#4A5568" }
            }
          >
            <span>All Modules</span>
            <span className="text-xs opacity-60">{docs.length}</span>
          </button>

          {MODULE_ORDER.map((mod) => {
            const count = countByMod[mod] ?? 0;
            if (count === 0) return null;
            const meta = MODULE_META[mod];
            const isActive = activeModule === mod;
            return (
              <button
                key={mod}
                onClick={() => setActiveModule(isActive ? null : mod)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors text-left w-full lg:w-auto"
                style={
                  isActive
                    ? { background: meta.bg, color: meta.text, border: `1px solid ${meta.border}` }
                    : { background: "#F7F5F0", color: "#4A5568", border: "1px solid #E4DFD8" }
                }
              >
                <span className="flex items-center gap-1.5">
                  <span>{meta.icon}</span>
                  <span className="font-medium">{mod}</span>
                </span>
                <span className="text-xs opacity-60 ml-2">{count}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
        {/* Header + Search */}
        <div className="mb-5 flex flex-col sm:flex-row sm:items-end gap-4">
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
              AWP Documentation
            </p>
            <h3
              className="text-2xl font-light text-[#1C3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {activeModule ? MODULE_META[activeModule]?.label ?? activeModule : "Business Processes"}
            </h3>
            <p className="text-sm text-[#6B7A6F] mt-1">
              {totalFiltered} document{totalFiltered !== 1 ? "s" : ""} — click any to read the full guide.
            </p>
          </div>
          <div className="relative sm:w-64 shrink-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">
              🔍
            </span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search processes…"
              className="w-full pl-8 pr-3 py-2 text-sm border border-[#D9D4C8] rounded-lg bg-[#FAFAF8] text-[#2A2E2B] placeholder:text-[#9BA89F] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
            />
          </div>
        </div>

        {/* Module groups */}
        {totalFiltered === 0 ? (
          <p className="text-sm text-[#6B7A6F] py-8 text-center">
            No documents match{search ? ` "${search}"` : " this filter"}.{" "}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="underline hover:text-[#1C3A2B] transition-colors"
              >
                Clear
              </button>
            )}
          </p>
        ) : (
          <div className="space-y-8">
            {MODULE_ORDER.map((mod) => {
              const items = grouped.get(mod) ?? [];
              if (items.length === 0) return null;
              const meta = MODULE_META[mod];
              return (
                <section key={mod}>
                  {/* Module section header */}
                  <div
                    className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg"
                    style={{ background: meta.bg, borderLeft: `3px solid ${meta.border}` }}
                  >
                    <span>{meta.icon}</span>
                    <span className="font-semibold text-sm" style={{ color: meta.text }}>
                      {mod} — {meta.label}
                    </span>
                    <span
                      className="ml-auto text-xs font-medium px-1.5 py-0.5 rounded"
                      style={{ background: meta.border, color: meta.text }}
                    >
                      {items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {items.map((doc) => {
                      const isBlueprint = !!doc.driveId;
                      const href = isBlueprint
                        ? `/learning/bp/${doc.driveId}`
                        : `/learning/business-processes/${doc.slug ?? doc.id}`;

                      return (
                        <Link
                          key={doc.id}
                          href={href}
                          className="group bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl p-4 hover:border-[#4E7862] hover:shadow-sm transition-all flex flex-col gap-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className="text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0"
                              style={{ background: meta.bg, color: meta.text }}
                            >
                              {mod}
                            </span>
                            <span className="text-[10px] text-[#4E7862] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                              {isBlueprint ? "Open ↗" : "Read →"}
                            </span>
                          </div>
                          <p className="text-sm text-[#2A2E2B] font-medium leading-snug">
                            {doc.title}
                          </p>
                          {isBlueprint && (
                            <p className="text-[10px] text-[#6B7A6F] mt-auto">📋 Blueprint</p>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
