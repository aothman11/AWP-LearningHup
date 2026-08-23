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

const MODULE_ACCENT: Record<string, string> = {
  PP: "border-[#047836] text-[#34d068] bg-[#047836]/20",
  QM: "border-[#C49A1A] text-[#e8bc30] bg-[#C49A1A]/20",
  "PP/QM": "border-[#D24918] text-[#f07040] bg-[#D24918]/20",
  All: "border-slate-500 text-slate-200 bg-slate-700/40",
};

const RELEVANCE_ACCENT: Record<string, string> = {
  High: "border-[#047836] text-[#34d068] bg-[#047836]/10",
  Medium: "border-[#C49A1A] text-[#e8bc30] bg-[#C49A1A]/10",
  Low: "border-slate-600 text-slate-400 bg-slate-800",
  "Not Used": "border-red-800 text-red-400 bg-red-900/10",
  All: "border-slate-600 text-slate-200 bg-slate-700/40",
};

export function LogbookFilters({ entries, filters, onChange, showAwpContext, onToggleAwp }: Props) {
  // Derive available categories from all entries
  const allCategories = Array.from(new Set(entries.map((e) => e.category))).sort();
  const allTags = Array.from(new Set(entries.flatMap((e) => e.tags))).sort();

  function setModule(m: Module | "All") {
    onChange({ ...filters, module: m });
  }

  function toggleCategory(cat: string) {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: next });
  }

  function setRelevance(r: AwpRelevance | "All") {
    onChange({ ...filters, relevance: r });
  }

  function setTag(tag: string) {
    onChange({ ...filters, activeTag: filters.activeTag === tag ? "" : tag });
  }

  function clearAll() {
    onChange({ module: "All", categories: [], relevance: "All", activeTag: "" });
  }

  const hasActiveFilters =
    filters.module !== "All" ||
    filters.categories.length > 0 ||
    filters.relevance !== "All" ||
    Boolean(filters.activeTag);

  return (
    <aside className="w-64 shrink-0 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-[#D24918] hover:text-[#f07040] transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* AWP Context Toggle */}
      <div className="bg-[#1a1f2e] border border-slate-700/60 rounded-lg p-3">
        <button
          onClick={onToggleAwp}
          className="flex items-center gap-2 w-full group"
        >
          <div
            className={`w-8 h-4 rounded-full transition-colors relative ${showAwpContext ? "bg-[#047836]" : "bg-slate-700"}`}
          >
            <div
              className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform ${showAwpContext ? "translate-x-4" : "translate-x-0.5"}`}
            />
          </div>
          <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
            AWP Context
          </span>
        </button>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
          Show AWP-specific usage notes on each card
        </p>
      </div>

      {/* Module Filter */}
      <div>
        <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Module</h3>
        <div className="space-y-1">
          {MODULES.map((m) => (
            <button
              key={m}
              onClick={() => setModule(m)}
              className={`w-full text-left text-sm px-3 py-1.5 rounded-lg border transition-all ${
                filters.module === m
                  ? MODULE_ACCENT[m]
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Category</h3>
        <div className="space-y-1 max-h-52 overflow-y-auto pr-1 custom-scroll">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`w-full text-left text-xs px-3 py-1.5 rounded border transition-all flex items-center gap-2 ${
                filters.categories.includes(cat)
                  ? "border-[#047836]/50 text-[#34d068] bg-[#047836]/10"
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-sm border flex-shrink-0 flex items-center justify-center ${
                  filters.categories.includes(cat)
                    ? "bg-[#047836] border-[#047836]"
                    : "border-slate-600"
                }`}
              >
                {filters.categories.includes(cat) && (
                  <svg viewBox="0 0 10 8" className="w-2 h-2 text-white fill-current">
                    <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* AWP Relevance Filter */}
      <div>
        <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">AWP Relevance</h3>
        <div className="space-y-1">
          {RELEVANCE_OPTIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRelevance(r)}
              className={`w-full text-left text-xs px-3 py-1.5 rounded-lg border transition-all ${
                filters.relevance === r
                  ? RELEVANCE_ACCENT[r]
                  : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Tag Cloud */}
      <div>
        <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Keywords</h3>
        <div className="flex flex-wrap gap-1 max-h-40 overflow-y-auto custom-scroll pr-1">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setTag(tag)}
              className={`text-xs px-2 py-0.5 rounded-full border transition-all ${
                filters.activeTag === tag
                  ? "border-[#047836] text-[#34d068] bg-[#047836]/10"
                  : "border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-500 bg-slate-800/40"
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
