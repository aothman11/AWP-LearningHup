"use client";

import { useState, useMemo } from "react";
import { logbookEntries } from "@/data/qm-logbook";
import type { LogbookEntry, Module, AwpRelevance } from "@/types/logbook";
import { LogbookFilters } from "@/components/logbook/LogbookFilters";
import { LogbookSearch } from "@/components/logbook/LogbookSearch";
import { LogbookCard } from "@/components/logbook/LogbookCard";
import { EntryDrawer } from "@/components/logbook/EntryDrawer";
import { IntegrationMap } from "@/components/logbook/IntegrationMap";
import { TablesView } from "@/components/logbook/TablesView";

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [tab, setTab] = useState<"tcodes" | "integrations" | "tables">("tcodes");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let results = logbookEntries.filter((e) => {
      if (filters.module !== "All" && e.module !== filters.module) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(e.category)) return false;
      if (filters.relevance !== "All" && e.awpRelevance !== filters.relevance) return false;
      if (filters.activeTag && !e.tags.includes(filters.activeTag)) return false;
      if (q) {
        const hay = [
          e.transactionCode, e.title, e.titleAr, e.description,
          e.category, e.processArea, e.notes, ...e.tags, ...e.relatedTransactions,
        ].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    results = [...results].sort((a, b) => {
      if (sort === "module") return a.module.localeCompare(b.module);
      if (sort === "category") return a.category.localeCompare(b.category);
      if (sort === "transactionCode") return a.transactionCode.localeCompare(b.transactionCode);
      if (sort === "awpRelevance") return (RELEVANCE_ORDER[a.awpRelevance] ?? 9) - (RELEVANCE_ORDER[b.awpRelevance] ?? 9);
      return 0;
    });
    return results;
  }, [search, filters, sort]);

  function handleTcodeClick(code: string) {
    setSearch(code);
    setFilters({ module: "All", categories: [], relevance: "All", activeTag: "" });
  }
  function handleTagClick(tag: string) {
    setFilters((f) => ({ ...f, activeTag: f.activeTag === tag ? "" : tag }));
  }

  const stats = {
    pp:   logbookEntries.filter((e) => e.module === "PP").length,
    qm:   logbookEntries.filter((e) => e.module === "QM").length,
    ppqm: logbookEntries.filter((e) => e.module === "PP/QM").length,
    high: logbookEntries.filter((e) => e.awpRelevance === "High").length,
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl font-light text-[#1C3A2B] leading-none tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              PP<span className="text-[#4E7862]">/</span>QM Knowledge
            </h1>
            <p
              className="text-xs text-[#6B7A6F] mt-0.5"
              style={{ fontFamily: "'Sakkal Majalla', serif" }}
            >
              دليل وحدات الإنتاج وإدارة الجودة
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#F7F5F0] hover:bg-[#E8F0E4] px-3 py-1.5 rounded-full transition-colors"
            >
              Export PDF
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden text-xs text-[#6B7A6F] border border-[#D9D4C8] px-3 py-1.5 rounded-full"
            >
              Filters
            </button>
          </div>
        </div>
      </header>

      {/* ── Tab Bar ─────────────────────────────────────────────────────────── */}
      <div className="border-b border-[#D9D4C8] bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex gap-1">
          {(["tcodes", "integrations", "tables"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab === t
                  ? "border-[#1C3A2B] text-[#1C3A2B]"
                  : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B]"
              }`}
            >
              {t === "tcodes" ? "T-Code Reference" : t === "integrations" ? "PP Integrations" : "Database Tables"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Stat Bar ────────────────────────────────────────────────────────── */}
      <div className="border-b border-[#D9D4C8] bg-[#EDE9E1]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-6 overflow-x-auto">
          <StatPill label="Total Entries" value={logbookEntries.length} color="text-[#2A2E2B]" />
          <StatPill label="PP" value={stats.pp} color="text-[#1C3A2B]" />
          <StatPill label="QM" value={stats.qm} color="text-[#4E7862]" />
          <StatPill label="PP/QM" value={stats.ppqm} color="text-[#3D6B52]" />
          <StatPill label="High" value={stats.high} color="text-[#1C3A2B]" />
        </div>
      </div>

      {/* ── Main Layout ─────────────────────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* Integrations tab */}
        {tab === "integrations" && <IntegrationMap />}

        {/* Tables tab */}
        {tab === "tables" && <TablesView />}

        {tab === "tcodes" && <div className="flex gap-8">
          {/* Sidebar Desktop */}
          <div className="hidden lg:block sticky top-[77px] self-start h-[calc(100vh-94px)] overflow-y-auto custom-scroll shrink-0 w-64 pb-6">
            <LogbookFilters
              entries={logbookEntries}
              filters={filters}
              onChange={setFilters}
            />
          </div>

          {/* Mobile Filter Panel */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-40 lg:hidden">
              <div className="absolute inset-0 bg-[#1C3A2B]/20" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#FAFAF8] border-r border-[#D9D4C8] p-5 overflow-y-auto">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-[#6B7A6F] text-lg leading-none">×</button>
                </div>
                <LogbookFilters
                  entries={logbookEntries}
                  filters={filters}
                  onChange={setFilters}
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-5">
            <LogbookSearch
              value={search}
              onChange={setSearch}
              count={filtered.length}
              total={logbookEntries.length}
              sort={sort}
              onSortChange={setSort}
            />

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#6B7A6F]">
                <p className="text-4xl mb-3 font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>No results</p>
                <p className="text-sm">Try adjusting filters or search terms.</p>
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
                  />
                ))}
              </div>
            )}
          </div>
        </div>}
      </div>

      {/* ── Entry Drawer ─────────────────────────────────────────────────────── */}
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
      <span
        className={`text-sm font-light ${color}`}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
      >
        {value}
      </span>
      <span className="text-xs text-[#6B7A6F]">{label}</span>
    </div>
  );
}
