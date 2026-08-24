"use client";

import { useState } from "react";
import type { Module, AwpRelevance } from "@/types/logbook";
import type { LogbookEntry } from "@/types/logbook";
import { useT } from "@/lib/i18n";

interface Filters {
  module: Module | "All";
  categories: string[];
  relevance: AwpRelevance | "All";
  activeTag: string;
  contentStatus: "all" | "detailed-guide" | "exclude-in-progress";
}

interface Props {
  entries: LogbookEntry[];
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const MODULES: Array<Module | "All"> = ["All", "PP", "QM", "PP/QM"];
const RELEVANCE_OPTIONS: Array<AwpRelevance | "All"> = ["All", "High", "Medium", "Low", "Not Used"];

const MODULE_ACTIVE: Record<string, string> = {
  PP:      "bg-[#1C3A2B] text-[#F7F5F0] border-[#1C3A2B]",
  QM:      "bg-[#4E7862] text-[#F7F5F0] border-[#4E7862]",
  "PP/QM": "bg-[#C8DFC5] text-[#1C3A2B] border-[#4E7862]",
  All:     "bg-[#EDE9E1] text-[#2A2E2B] border-[#D9D4C8]",
};

const RELEVANCE_ACTIVE: Record<string, string> = {
  High:      "bg-[#D4EFE0] text-[#1C3A2B] border-[#C8DFC5]",
  Medium:    "bg-[#F8EBC5] text-[#7A5E0A] border-[#e5d08a]",
  Low:       "bg-[#EDE9E1] text-[#6B7A6F] border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border-[#f5b8b8]",
  All:       "bg-[#EDE9E1] text-[#2A2E2B] border-[#D9D4C8]",
};

function SectionHeader({
  label,
  open,
  onToggle,
  badge,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  badge?: number;
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={open}
      className="w-full flex items-center justify-between group py-1"
    >
      <div className="flex items-center gap-2">
        <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest group-hover:text-[#2A2E2B] transition-colors">
          {label}
        </h3>
        {badge ? (
          <span className="text-[9px] font-semibold bg-[#1C3A2B] text-[#F7F5F0] px-1.5 py-0.5 rounded-full leading-none" aria-label={`${badge} active`}>
            {badge}
          </span>
        ) : null}
      </div>
      <span
        aria-hidden="true"
        className={`text-[#6B7A6F] text-[10px] transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
      >
        ▾
      </span>
    </button>
  );
}

export function LogbookFilters({ entries, filters, onChange }: Props) {
  const t = useT();
  const [open, setOpen] = useState({ module: true, category: true, relevance: true, tags: false, content: false });

  const allCategories = Array.from(new Set(entries.map((e) => e.category))).sort();
  const allTags = Array.from(new Set(entries.flatMap((e) => e.tags))).sort();

  function toggle(section: keyof typeof open) {
    setOpen((s) => ({ ...s, [section]: !s[section] }));
  }

  function setModule(m: Module | "All") { onChange({ ...filters, module: m }); }
  function toggleCategory(cat: string) {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onChange({ ...filters, categories: next });
  }
  function setRelevance(r: AwpRelevance | "All") { onChange({ ...filters, relevance: r }); }
  function setTag(tag: string) { onChange({ ...filters, activeTag: filters.activeTag === tag ? "" : tag }); }
  function setContentStatus(cs: Filters["contentStatus"]) { onChange({ ...filters, contentStatus: cs }); }
  function clearAll() { onChange({ module: "All", categories: [], relevance: "All", activeTag: "", contentStatus: "all" }); }

  const hasActiveFilters =
    filters.module !== "All" || filters.categories.length > 0 ||
    filters.relevance !== "All" || Boolean(filters.activeTag) ||
    filters.contentStatus !== "all";

  return (
    <aside className="w-64 shrink-0 space-y-1" aria-label={t("filters.title")}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest">
          {t("filters.title")}
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-[#9B3030] hover:text-[#7B2020] transition-colors"
            aria-label={t("filters.clearAll")}
          >
            {t("filters.clearAll")}
          </button>
        )}
      </div>

      {/* Module */}
      <div className="border-t border-[#EDE9E1] pt-3 pb-2">
        <SectionHeader
          label={t("filters.module")}
          open={open.module}
          onToggle={() => toggle("module")}
          badge={filters.module !== "All" ? 1 : undefined}
        />
        {open.module && (
          <div className="mt-2 space-y-1" role="group" aria-label={t("filters.module")}>
            {MODULES.map((m) => (
              <button
                key={m}
                onClick={() => setModule(m)}
                aria-pressed={filters.module === m}
                className={`w-full text-left text-sm px-3 py-2 rounded-xl border transition-all ${
                  filters.module === m
                    ? MODULE_ACTIVE[m]
                    : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
                }`}
              >
                {m === "All" ? t("filters.all") : m}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category */}
      <div className="border-t border-[#EDE9E1] pt-3 pb-2">
        <SectionHeader
          label={t("filters.category")}
          open={open.category}
          onToggle={() => toggle("category")}
          badge={filters.categories.length || undefined}
        />
        {open.category && (
          <div className="mt-2 space-y-0.5 max-h-52 overflow-y-auto pr-1 custom-scroll" role="group" aria-label={t("filters.category")}>
            {allCategories.map((cat) => {
              const active = filters.categories.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  aria-pressed={active}
                  className={`w-full text-left text-xs px-3 py-2 rounded-xl border transition-all flex items-center gap-2 ${
                    active
                      ? "border-[#C8DFC5] text-[#1C3A2B] bg-[#E8F0E4]"
                      : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
                  }`}
                >
                  <span aria-hidden="true" className={`w-3 h-3 rounded border flex-shrink-0 flex items-center justify-center ${active ? "bg-[#1C3A2B] border-[#1C3A2B]" : "border-[#D9D4C8]"}`}>
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
        )}
      </div>

      {/* Relevance */}
      <div className="border-t border-[#EDE9E1] pt-3 pb-2">
        <SectionHeader
          label={t("filters.relevance")}
          open={open.relevance}
          onToggle={() => toggle("relevance")}
          badge={filters.relevance !== "All" ? 1 : undefined}
        />
        {open.relevance && (
          <div className="mt-2 space-y-1" role="group" aria-label={t("filters.relevance")}>
            {RELEVANCE_OPTIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRelevance(r)}
                aria-pressed={filters.relevance === r}
                className={`w-full text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                  filters.relevance === r
                    ? RELEVANCE_ACTIVE[r]
                    : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
                }`}
              >
                {r === "All" ? t("filters.all") : r}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content Status */}
      <div className="border-t border-[#EDE9E1] pt-3 pb-2">
        <SectionHeader
          label={t("filters.contentStatus")}
          open={open.content}
          onToggle={() => toggle("content")}
          badge={filters.contentStatus !== "all" ? 1 : undefined}
        />
        {open.content && (
          <div className="mt-2 space-y-1" role="group" aria-label={t("filters.contentStatus")}>
            {(["all", "detailed-guide", "exclude-in-progress"] as const).map((cs) => {
              const labels: Record<string, string> = {
                "all": t("status.filter.all"),
                "detailed-guide": t("status.filter.detailedGuide"),
                "exclude-in-progress": t("status.filter.excludeInProgress"),
              };
              return (
                <button
                  key={cs}
                  onClick={() => setContentStatus(cs)}
                  aria-pressed={filters.contentStatus === cs}
                  className={`w-full text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                    filters.contentStatus === cs
                      ? "border-[#C8DFC5] text-[#1C3A2B] bg-[#E8F0E4]"
                      : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B] hover:bg-[#EDE9E1]"
                  }`}
                >
                  {labels[cs]}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Keywords — collapsed by default */}
      <div className="border-t border-[#EDE9E1] pt-3 pb-2">
        <SectionHeader
          label={t("filters.keywords")}
          open={open.tags}
          onToggle={() => toggle("tags")}
          badge={filters.activeTag ? 1 : undefined}
        />
        {open.tags && (
          <div className="mt-2 flex flex-wrap gap-1 max-h-40 overflow-y-auto custom-scroll pr-1" role="group" aria-label={t("filters.keywords")}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setTag(tag)}
                aria-pressed={filters.activeTag === tag}
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
        )}
      </div>
    </aside>
  );
}

// Export the Filters type for consumers
export type { Filters as LogbookFiltersState };
