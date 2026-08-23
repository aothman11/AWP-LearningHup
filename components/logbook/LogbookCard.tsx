"use client";

import { useState } from "react";
import type { LogbookEntry } from "@/types/logbook";

interface Props {
  entry: LogbookEntry;
  onSelect: (entry: LogbookEntry) => void;
  onTagClick: (tag: string) => void;
  onTcodeClick: (code: string) => void;
  showAwpContext: boolean;
}

const MODULE_COLORS: Record<string, string> = {
  PP: "bg-[#047836] text-white",
  QM: "bg-[#C49A1A] text-black",
  "PP/QM": "bg-[#D24918] text-white",
};

const RELEVANCE_COLORS: Record<string, string> = {
  High: "bg-[#047836]/20 text-[#34d068] border border-[#047836]/40",
  Medium: "bg-[#C49A1A]/20 text-[#e8bc30] border border-[#C49A1A]/40",
  Low: "bg-slate-700/50 text-slate-400 border border-slate-600",
  "Not Used": "bg-red-900/20 text-red-400 border border-red-800/40",
};

export function LogbookCard({ entry, onSelect, onTagClick, onTcodeClick, showAwpContext }: Props) {
  const [notesOpen, setNotesOpen] = useState(false);
  const hasUrl = Boolean(entry.sapDocUrl);

  return (
    <div
      className="group bg-[#1a1f2e] border border-slate-700/60 rounded-xl overflow-hidden hover:border-[#047836]/60 transition-all duration-200 hover:shadow-lg hover:shadow-[#047836]/10 cursor-pointer flex flex-col"
      onClick={() => onSelect(entry)}
    >
      {/* Card Header */}
      <div className="px-4 pt-4 pb-3 border-b border-slate-700/40">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded font-mono tracking-wide ${MODULE_COLORS[entry.module]}`}
            >
              {entry.module}
            </span>
            <span className="text-sm font-mono font-semibold text-slate-200 bg-slate-800 px-2 py-0.5 rounded border border-slate-600">
              {entry.transactionCode}
            </span>
          </div>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${RELEVANCE_COLORS[entry.awpRelevance]}`}>
            {entry.awpRelevance}
          </span>
        </div>

        <div className="mt-2">
          <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#34d068] transition-colors">
            {entry.title}
          </h3>
          {entry.titleAr && (
            <p
              className="text-slate-400 text-xs mt-0.5 text-right"
              style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
            >
              {entry.titleAr}
            </p>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 py-3 flex-1 space-y-3">
        <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">{entry.description}</p>

        {/* Process Area */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 text-xs">Area:</span>
          <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
            {entry.processArea}
          </span>
        </div>

        {/* Tags */}
        {entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {entry.tags.slice(0, 5).map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  onTagClick(tag);
                }}
                className="text-xs bg-slate-800/60 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700/50 hover:bg-slate-700 hover:text-slate-200 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Related Transactions */}
        {entry.relatedTransactions.length > 0 && (
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-slate-500 text-xs">Related:</span>
            {entry.relatedTransactions.slice(0, 4).map((tc) => (
              <button
                key={tc}
                onClick={(e) => {
                  e.stopPropagation();
                  onTcodeClick(tc);
                }}
                className="text-xs font-mono text-[#C49A1A] bg-[#C49A1A]/10 border border-[#C49A1A]/30 px-1.5 py-0.5 rounded hover:bg-[#C49A1A]/20 transition-colors"
              >
                {tc}
              </button>
            ))}
          </div>
        )}

        {/* AWP Context */}
        {showAwpContext && entry.notes && (
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setNotesOpen(!notesOpen);
              }}
              className="text-xs text-[#047836] hover:text-[#34d068] transition-colors flex items-center gap-1"
            >
              <span>{notesOpen ? "▾" : "▸"}</span>
              AWP Notes
            </button>
            {notesOpen && (
              <p className="mt-1.5 text-xs text-slate-400 bg-slate-800/50 border border-slate-700/50 rounded p-2 leading-relaxed">
                {entry.notes}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div
        className="px-4 py-3 border-t border-slate-700/40 flex items-center justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          {hasUrl ? (
            <a
              href={entry.sapDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#047836] hover:text-[#34d068] border border-[#047836]/40 hover:border-[#047836] px-2 py-1 rounded transition-colors flex items-center gap-1"
            >
              SAP Docs ↗
            </a>
          ) : (
            <span className="text-xs text-[#C49A1A] bg-[#C49A1A]/10 border border-[#C49A1A]/30 px-2 py-1 rounded flex items-center gap-1">
              ⚠ Doc link pending
            </span>
          )}
          <span className="text-slate-600 text-xs hidden sm:block">
            Source: SAP Help Portal
          </span>
        </div>
        <span className="text-slate-600 text-xs whitespace-nowrap">
          ✓ {entry.lastVerified}
        </span>
      </div>
    </div>
  );
}
