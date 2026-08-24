"use client";

import { type RefObject } from "react";
import { useT } from "@/lib/i18n";
import { useLang } from "@/context/LangContext";

interface Props {
  value: string;
  onChange: (v: string) => void;
  count: number;
  total: number;
  sort: string;
  onSortChange: (s: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  activeModule?: string;
  activeSearch?: string;
}

export function LogbookSearch({
  value,
  onChange,
  count,
  total,
  sort,
  onSortChange,
  inputRef,
  activeModule,
  activeSearch,
}: Props) {
  const t = useT();
  const { lang } = useLang();

  const SORT_OPTIONS = [
    { value: "module", label: t("search.sort.module") },
    { value: "category", label: t("search.sort.category") },
    { value: "transactionCode", label: t("search.sort.tcode") },
    { value: "awpRelevance", label: t("search.sort.relevance") },
  ];

  // Build result summary text
  const resultSummary = (() => {
    if (count === total) {
      return `${total} ${t("results.entries")}`;
    }
    const parts: string[] = [`${count} ${t("results.count")}`];
    if (activeModule && activeModule !== "All") parts.push(`· ${activeModule}`);
    if (activeSearch) parts.push(`${t("results.matching")} "${activeSearch}"`);
    return parts.join(" ");
  })();

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Search input */}
      <div className="relative flex-1 min-w-0">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7A6F]"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder={t("search.placeholder")}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={t("search.placeholder")}
          dir={lang === "AR" ? "rtl" : "ltr"}
          className="w-full bg-[#FAFAF8] border border-[#D9D4C8] rounded-full pl-10 pr-9 py-2.5 text-sm text-[#2A2E2B] placeholder:text-[#6B7A6F] focus:outline-none focus:border-[#4E7862] transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B7A6F] hover:text-[#2A2E2B] text-base leading-none"
          >
            ×
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-[#6B7A6F] whitespace-nowrap">{t("search.sortBy")}</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label={t("search.sortBy")}
          className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-full px-3 py-2 text-sm text-[#2A2E2B] focus:outline-none focus:border-[#4E7862] cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Result summary */}
      <div
        className="shrink-0 text-xs text-[#6B7A6F] whitespace-nowrap"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="text-[#1C3A2B] font-medium">{resultSummary}</span>
      </div>
    </div>
  );
}
