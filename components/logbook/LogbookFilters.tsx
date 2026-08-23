"use client";

import type { Module, AwpRelevance } from "@/types/logbook";
import type { LogbookEntry } from "@/types/logbook";

interface Filters {
  module: Module | "All";
  categories: string[];
  relevance: AwpRelevance | "All";
  activeTag: string;
}

interface Props {
  entries: LogbookEntry[];
  filters: Filters;
  onChange: (filters: Filters) => void;
  showAwpContext: boolean;
  onToggleAwp: () => void;
}

const MODULES: Array<Module | "All"> = ["All", "PP", "QM", "PP/QM"];
const RELEVANCE_OPTIONS: Array<AwpRelevance | "All"> = ["All", "High", "Medium", "Low", "Not Used"];

const MODULE_ACTIVE: Record<string, string> = {
  PP:     "bg-[#1C3A2B] text-[#F7F5F0] border-[#1C3A2B]",
  QM:     "bg-[#4E7862] text-[#F7F5F0] border-[#4E7862]",
  "PP/QM":"bg-[#C8DFC5] text-[#1C3A2B] border-[#4E7862]",
  All:    "bg-[#EDE9E1] text-[#2A2E2B] border-[#D9D4C8]",
};

const RELEVANCE_ACTIVE: Record<string, string> = {
  High:      "bg-[#D4EFE0] text-[#1C3A2B] border-[#C8DFC5]",
  Medium:    "bg-[#F8EBC5] text-[#7A5E0A] border-[#e5d08a]",
  Low:       "bg-[#EDE9E1] text-[#6B7A6F] border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border-[#f5b8b8]",
  All:       "bg-[#EDE9E1] text-[#2A2E2B] border-[#D9D4C8]",
};

export function LogbookFilters({ entries, filters, onChange, showAwpContext, onToggleAwp }: Props) {
  const allCategories = Array.from(new Set(entries.map((e) => e.category))).sort();
  const allTags = Array.from(new Set(entries.flatMap((e) => e.tags))).sort();

  function setModule(m: Module | "All") { onChange({ ...filters, module: m }); }
  function toggleCategory(cat: string) {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: next });
  }
  function setRelevance(r: AwpRelevance | "All") { onChange({ ...filters, relevance: r }); }
  function setTag(tag: string) { onChange({ ...filters, activeTag: filters.activeTag === tag ? "" : tag }); }
  function clearAll() { onChange({ module: "All", categories: [], relevance: "All", activeTag: "" }); }

  const hasActiveFilters =
    filters.module !== "All" || filters.categories.length > 0 ||
    filters.relevance !== "All" || Boolean(filters.activeTag);

  return (
    <aside className="w-64 shrink-0 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest"
        >
          Filters
        </h2>
        {hasActiveFilters && (
          <button onClick={clearAll} className="text-xs text-[#9B3030] hover:text-[#7B2020] transition-colors">
            Clear all
          </button>
        )}
      </div>

      {/* AWP Context Toggle */}
      <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-4">
        <button onClick={onToggleAwp} className="flex items-center gap-2.5 w-full group">
          <div className={`w-9 h-5 rounded-full transition-colors relative flex-shrink-0 ${showAwpContext ? "bg-[#1C3A2B]" : "bg-[#D9D4C8]"}`}>
            <div className={`absolute top-0.5 w-4 h-4 bg-[#F7F5F0] rounded-full shadow-sm transition-transform ${showAwpContext ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          <span className="text-xs font-medium text-[#2A2E2B]">AWP Context</span>
        </button>
        <p className="text-[10px] text-[#6B7A6F] mt-2 leading-relaxed">
          Show AWP-specific usage notes on each card
        </p>
      </div>

      {/* Module Filter */}
      <div>
        <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-2.5">Module</h3>
        <div className="space-y-1">
          {MODULES.map((m) => (
            <button
              key={m}
              onClick={() => setModule(m)}
              className={`w-full text-left text-sm px-3 py-2 rounded-xl border transition-all ${
                filters.module === m
                  ? MODULE_ACTIVE[m]
                  : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-2.5">Category</h3>
        <div className="space-y-0.5 max-h-52 overflow-y-auto pr-1 custom-scroll">
          {allCategories.map((cat) => {
            const active = filters.categories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`w-full text-left text-xs px-3 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                  active
                    ? "border-[#C8DFC5] text-[#1C3A2B] bg-[#E8F0E4]"
                    : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
                }`}
              >
                <span className={`w-3 h-3 rounded border flex-shrink-0 flex items-center justify-center ${active ? "bg-[#1C3A2B] border-[#1C3A2B]" : "border-[#D9D4C8]"}`}>
                  {active && (
                    <svg viewBox="0 0 10 8" className="w-2 h-2 text-[#F7F5F0] fill-current">
                      <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* AWP Relevance */}
      <div>
        <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-2.5">AWP Relevance</h3>
        <div className="space-y-1">
          {RELEVANCE_OPTIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRelevance(r)}
              className={`w-full text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                filters.relevance === r
                  ? RELEVANCE_ACTIVE[r]
                  : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-2.5">Keywords</h3>
        <div className="flex flex-wrap gap-1 max-h-40 overflow-y-auto custom-scroll pr-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTag(tag)}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-all ${
                filters.activeTag === tag
                  ? "border-[#4E7862] text-[#1C3A2B] bg-[#C8DFC5]"
                  : "border-[#D9D4C8] text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
