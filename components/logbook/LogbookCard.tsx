"use client";

import type { LogbookEntry } from "@/types/logbook";

interface Props {
  entry: LogbookEntry;
  onSelect: (entry: LogbookEntry) => void;
  onTagClick: (tag: string) => void;
  onTcodeClick: (code: string) => void;
}

const MODULE_STYLES: Record<string, string> = {
  PP:     "bg-[#1C3A2B] text-[#F7F5F0]",
  QM:     "bg-[#4E7862] text-[#F7F5F0]",
  "PP/QM":"bg-[#C8DFC5] text-[#1C3A2B]",
};

const RELEVANCE_STYLES: Record<string, string> = {
  High:     "bg-[#D4EFE0] text-[#1C3A2B] border border-[#C8DFC5]",
  Medium:   "bg-[#F8EBC5] text-[#7A5E0A] border border-[#e5d08a]",
  Low:      "bg-[#EDE9E1] text-[#6B7A6F] border border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border border-[#f5b8b8]",
};

export function LogbookCard({ entry, onSelect, onTagClick, onTcodeClick }: Props) {
  const hasUrl = Boolean(entry.sapDocUrl);

  return (
    <div
      className="group bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl overflow-hidden hover:bg-[#E8F0E4] hover:border-[#4E7862] transition-all duration-200 cursor-pointer flex flex-col"
      onClick={() => onSelect(entry)}
    >
      {/* Card Header */}
      <div className="px-5 pt-5 pb-4 border-b border-[#EDE9E1]">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${MODULE_STYLES[entry.module]}`}>
              {entry.module}
            </span>
            <span className="text-[10px] text-[#6B7A6F] bg-[#EDE9E1] px-2.5 py-1 rounded-full border border-[#D9D4C8]">
              {entry.category}
            </span>
          </div>
          <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${RELEVANCE_STYLES[entry.awpRelevance]}`}>
            {entry.awpRelevance} relevance
          </span>
        </div>

        {/* T-Code — editorial headline */}
        <div
          className="text-4xl font-light text-[#1C3A2B] leading-none tracking-wide mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {entry.transactionCode}
        </div>

        <h3 className="text-[#2A2E2B] font-medium text-sm leading-snug group-hover:text-[#1C3A2B] transition-colors">
          {entry.title}
        </h3>
        {entry.titleAr && (
          <p
            className="text-[#6B7A6F] text-xs mt-1 text-right leading-relaxed"
            style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
          >
            {entry.titleAr}
          </p>
        )}
      </div>

      {/* Card Body */}
      <div className="px-5 py-4 flex-1 space-y-3">
        <p className="text-[#6B7A6F] text-xs leading-relaxed line-clamp-3">{entry.description}</p>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {entry.tags.slice(0, 5).map((tag) => (
              <button
                key={tag}
                onClick={(e) => { e.stopPropagation(); onTagClick(tag); }}
                className="text-[10px] text-[#4E7862] bg-[#E8F0E4] border border-[#C8DFC5] px-2 py-0.5 rounded-full hover:bg-[#C8DFC5] hover:text-[#1C3A2B] transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Related */}
        {entry.relatedTransactions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[#6B7A6F] text-[10px]">Related:</span>
            {entry.relatedTransactions.slice(0, 4).map((tc) => (
              <button
                key={tc}
                onClick={(e) => { e.stopPropagation(); onTcodeClick(tc); }}
                className="text-[11px] font-light text-[#1C3A2B] bg-[#EDE9E1] border border-[#D9D4C8] px-2 py-0.5 rounded hover:bg-[#C8DFC5] hover:border-[#4E7862] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {tc}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Card Footer */}
      <div
        className="px-5 py-3 border-t border-[#EDE9E1] flex items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          {hasUrl ? (
            <a
              href={entry.sapDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#4E7862] hover:text-[#1C3A2B] border border-[#C8DFC5] hover:border-[#4E7862] bg-[#E8F0E4] px-2.5 py-1 rounded-full transition-colors"
            >
              SAP Docs ↗
            </a>
          ) : (
            <span className="text-xs text-[#7A5E0A] bg-[#F8EBC5] border border-[#e5d08a] px-2.5 py-1 rounded-full">
              ⚠ Doc pending
            </span>
          )}
        </div>
        <span className="text-[#D9D4C8] text-[10px] whitespace-nowrap">
          {entry.lastVerified}
        </span>
      </div>
    </div>
  );
}
