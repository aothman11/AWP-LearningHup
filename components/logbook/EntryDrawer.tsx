"use client";

import { useState, useEffect } from "react";
import type { LogbookEntry } from "@/types/logbook";

interface Props {
  entry: LogbookEntry | null;
  onClose: () => void;
  onTcodeFilter: (code: string) => void;
}

const MODULE_COLORS: Record<string, string> = {
  PP: "bg-[#047836] text-white",
  QM: "bg-[#C49A1A] text-black",
  "PP/QM": "bg-[#D24918] text-white",
};

const RELEVANCE_COLORS: Record<string, string> = {
  High: "text-[#34d068] bg-[#047836]/20 border-[#047836]/40",
  Medium: "text-[#e8bc30] bg-[#C49A1A]/20 border-[#C49A1A]/40",
  Low: "text-slate-400 bg-slate-700/50 border-slate-600",
  "Not Used": "text-red-400 bg-red-900/20 border-red-800/40",
};

export function EntryDrawer({ entry, onClose, onTcodeFilter }: Props) {
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync local notes with entry
  useEffect(() => {
    if (entry) {
      setNotes(entry.notes || "");
    }
  }, [entry?.id]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!entry) return null;

  function copyTcode() {
    navigator.clipboard.writeText(entry!.transactionCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const hasUrl = Boolean(entry.sapDocUrl);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[#0f1117] border-l border-slate-700 z-50 flex flex-col shadow-2xl overflow-hidden animate-slide-in">
        {/* Drawer Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-700/60 bg-[#1a1f2e]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${MODULE_COLORS[entry.module]}`}>
                  {entry.module}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full border ${RELEVANCE_COLORS[entry.awpRelevance]}`}
                >
                  AWP: {entry.awpRelevance}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <code className="text-[#C49A1A] font-mono font-bold text-lg">{entry.transactionCode}</code>
                <button
                  onClick={copyTcode}
                  title="Copy T-code"
                  className="text-xs text-slate-500 hover:text-slate-300 border border-slate-700 hover:border-slate-500 px-2 py-0.5 rounded transition-colors"
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <h2 className="text-white font-semibold text-base mt-1 leading-snug">{entry.title}</h2>
              {entry.titleAr && (
                <p
                  className="text-slate-400 text-sm mt-0.5 text-right"
                  style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
                >
                  {entry.titleAr}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white transition-colors shrink-0 mt-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 custom-scroll">
          {/* Description */}
          <section>
            <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Description</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{entry.description}</p>
          </section>

          {/* Meta */}
          <section>
            <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Details</h3>
            <div className="space-y-2">
              <Row label="Category" value={entry.category} />
              <Row label="Process Area" value={entry.processArea} />
              <Row label="Module" value={entry.module} />
            </div>
          </section>

          {/* Related Transactions */}
          {entry.relatedTransactions.length > 0 && (
            <section>
              <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Related Transactions</h3>
              <div className="flex flex-wrap gap-2">
                {entry.relatedTransactions.map((tc) => (
                  <button
                    key={tc}
                    onClick={() => {
                      onTcodeFilter(tc);
                      onClose();
                    }}
                    className="text-sm font-mono text-[#C49A1A] bg-[#C49A1A]/10 border border-[#C49A1A]/30 px-3 py-1 rounded-lg hover:bg-[#C49A1A]/20 hover:border-[#C49A1A]/60 transition-all"
                    title={`Filter to ${tc}`}
                  >
                    {tc} ↗
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Tags */}
          {entry.tags.length > 0 && (
            <section>
              <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tags</h3>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* SAP Documentation */}
          <section>
            <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Source</h3>
            <div className="flex items-center gap-2 bg-[#1a1f2e] border border-slate-700/60 rounded-lg p-3">
              <div className="flex-1">
                <p className="text-xs text-slate-400 mb-1">SAP Help Portal</p>
                {hasUrl ? (
                  <a
                    href={entry.sapDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#047836] hover:text-[#34d068] text-sm transition-colors flex items-center gap-1.5 break-all"
                  >
                    Open Official SAP Documentation ↗
                  </a>
                ) : (
                  <span className="text-[#C49A1A] text-sm flex items-center gap-1">
                    ⚠ Doc link pending verification
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-1.5">
              Last verified: {entry.lastVerified}
            </p>
          </section>

          {/* Notes — Editable */}
          <section>
            <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-2">
              AWP Notes
              <span className="ml-2 text-slate-600 font-normal normal-case tracking-normal">(local state)</span>
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Add AWP-specific notes or consultant observations…"
              className="w-full bg-[#1a1f2e] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-[#047836] focus:ring-1 focus:ring-[#047836]/30 transition-colors resize-none"
            />
            <p className="text-xs text-slate-600 mt-1">
              Notes are saved in local browser state — future version will persist to DB.
            </p>
          </section>
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-4 border-t border-slate-700/60 bg-[#1a1f2e] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {hasUrl && (
              <a
                href={entry.sapDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-[#047836] hover:bg-[#047836]/80 px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                SAP Docs ↗
              </a>
            )}
            <button
              onClick={copyTcode}
              className="text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition-colors"
            >
              {copied ? "✓ Copied T-code" : "Copy T-code"}
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-xs text-slate-500 w-24 shrink-0">{label}</span>
      <span className="text-sm text-slate-300">{value}</span>
    </div>
  );
}
