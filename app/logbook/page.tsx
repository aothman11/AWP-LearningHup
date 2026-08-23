"use client";

import { useState, useMemo } from "react";
import { logbookEntries } from "@/data/qm-logbook";
import type { LogbookEntry, Module, AwpRelevance } from "@/types/logbook";
import { LogbookFilters } from "@/components/logbook/LogbookFilters";
import { LogbookSearch } from "@/components/logbook/LogbookSearch";
import { LogbookCard } from "@/components/logbook/LogbookCard";
import { EntryDrawer } from "@/components/logbook/EntryDrawer";

interface Filters {
  module: Module | "All";
  categories: string[];
  relevance: AwpRelevance | "All";
  activeTag: string;
}

const RELEVANCE_ORDER: Record<string, number> = { High: 0, Medium: 1, Low: 2, "Not Used": 3 };

export default function LogbookPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("module");
  const [filters, setFilters] = useState<Filters>({
    module: "All",
    categories: [],
    relevance: "All",
    activeTag: "",
  });
  const [selectedEntry, setSelectedEntry] = useState<LogbookEntry | null>(null);
  const [showAwpContext, setShowAwpContext] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // ── Filter + Search ────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let results = logbookEntries.filter((e) => {
      if (filters.module !== "All" && e.module !== filters.module) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(e.category)) return false;
      if (filters.relevance !== "All" && e.awpRelevance !== filters.relevance) return false;
      if (filters.activeTag && !e.tags.includes(filters.activeTag)) return false;
      if (q) {
        const hay = [
          e.transactionCode,
          e.title,
          e.titleAr,
          e.description,
          e.category,
          e.processArea,
          e.notes,
          ...e.tags,
          ...e.relatedTransactions,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    // Sort
    results = [...results].sort((a, b) => {
      if (sort === "module") return a.module.localeCompare(b.module);
      if (sort === "category") return a.category.localeCompare(b.category);
      if (sort === "transactionCode") return a.transactionCode.localeCompare(b.transactionCode);
      if (sort === "awpRelevance")
        return (RELEVANCE_ORDER[a.awpRelevance] ?? 9) - (RELEVANCE_ORDER[b.awpRelevance] ?? 9);
      return 0;
    });

    return results;
  }, [search, filters, sort]);

  function handleTcodeClick(code: string) {
    setSearch(code);
    setFilters((f) => ({ ...f, module: "All", categories: [], relevance: "All", activeTag: "" }));
  }

  function handleTagClick(tag: string) {
    setFilters((f) => ({ ...f, activeTag: f.activeTag === tag ? "" : tag }));
  }

  // Stats
  const stats = {
    pp: logbookEntries.filter((e) => e.module === "PP").length,
    qm: logbookEntries.filter((e) => e.module === "QM").length,
    ppqm: logbookEntries.filter((e) => e.module === "PP/QM").length,
    high: logbookEntries.filter((e) => e.awpRelevance === "High").length,
    pending: logbookEntries.filter((e) => !e.sapDocUrl).length,
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-200">
      {/* ── Top Nav ─────────────────────────────────────────────────────────── */}
      <header className="border-b border-slate-800 bg-[#0f1117]/90 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#047836]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#C49A1A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#D24918]" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-tight">
                SAP PP/QM Logbook
              </h1>
              <p
                className="text-xs text-slate-500"
                style={{ fontFamily: "'Sakkal Majalla', serif" }}
              >
                دليل وحدات الإنتاج وإدارة الجودة
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#047836] animate-pulse" />
              AWP COP · Internal Reference
            </span>
            {/* Print button */}
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Export PDF
            </button>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden text-xs text-slate-400 border border-slate-700 px-3 py-1.5 rounded-lg"
            >
              Filters
            </button>
          </div>
        </div>
      </header>

      {/* ── Stat Bar ────────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-800 bg-[#1a1f2e]/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex items-center gap-6 overflow-x-auto">
          <StatPill label="Total Entries" value={logbookEntries.length} color="text-slate-300" />
          <StatPill label="PP" value={stats.pp} color="text-[#34d068]" />
          <StatPill label="QM" value={stats.qm} color="text-[#e8bc30]" />
          <StatPill label="PP/QM" value={stats.ppqm} color="text-[#f07040]" />
          <StatPill label="High AWP Relevance" value={stats.high} color="text-[#34d068]" />
          <StatPill label="Doc Link Pending" value={stats.pending} color="text-[#C49A1A]" />
        </div>
      </div>

      {/* ── Main Layout ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar — Desktop */}
          <div className="hidden lg:block sticky top-[73px] self-start h-[calc(100vh-90px)] overflow-y-auto custom-scroll shrink-0 w-64 pb-6">
            <LogbookFilters
              entries={logbookEntries}
              filters={filters}
              onChange={setFilters}
              showAwpContext={showAwpContext}
              onToggleAwp={() => setShowAwpContext((v) => !v)}
            />
          </div>

          {/* Mobile Filter Panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#0f1117] border-r border-slate-700 p-5 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-white">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-slate-400">✕</button>
                </div>
                <LogbookFilters
                  entries={logbookEntries}
                  filters={filters}
                  onChange={setFilters}
                  showAwpContext={showAwpContext}
                  onToggleAwp={() => setShowAwpContext((v) => !v)}
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Search Bar */}
            <LogbookSearch
              value={search}
              onChange={setSearch}
              count={filtered.length}
              total={logbookEntries.length}
              sort={sort}
              onSortChange={setSort}
            />

            {/* Results */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-slate-500">
                <p className="text-2xl mb-2">🔍</p>
                <p className="text-sm">No entries match your search. Try adjusting filters or search terms.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {filtered.map((entry) => (
                  <LogbookCard
                    key={entry.id}
                    entry={entry}
                    onSelect={setSelectedEntry}
                    onTagClick={handleTagClick}
                    onTcodeClick={handleTcodeClick}
                    showAwpContext={showAwpContext}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Entry Drawer ────────────────────────────────────────────────────── */}
      <EntryDrawer
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onTcodeFilter={handleTcodeClick}
      />
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5 shrink-0">
      <span className={`text-sm font-bold font-mono ${color}`}>{value}</span>
      <span className="text-xs text-slate-600">{label}</span>
    </div>
  );
}
