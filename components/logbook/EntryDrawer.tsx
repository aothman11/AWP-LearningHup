"use client";

import { useState, useEffect } from "react";
import type { LogbookEntry } from "@/types/logbook";

interface Props {
  entry: LogbookEntry | null;
  onClose: () => void;
  onTcodeFilter: (code: string) => void;
}

const MODULE_STYLES: Record<string, string> = {
  PP:     "bg-[#1C3A2B] text-[#F7F5F0]",
  QM:     "bg-[#4E7862] text-[#F7F5F0]",
  "PP/QM":"bg-[#C8DFC5] text-[#1C3A2B]",
};

const RELEVANCE_STYLES: Record<string, string> = {
  High:      "bg-[#D4EFE0] text-[#1C3A2B] border border-[#C8DFC5]",
  Medium:    "bg-[#F8EBC5] text-[#7A5E0A] border border-[#e5d08a]",
  Low:       "bg-[#EDE9E1] text-[#6B7A6F] border border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border border-[#f5b8b8]",
};

export function EntryDrawer({ entry, onClose, onTcodeFilter }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
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
        className="fixed inset-0 bg-[#1C3A2B]/20 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[#F7F5F0] border-l border-[#D9D4C8] z-50 flex flex-col overflow-hidden animate-slide-in">

        {/* Drawer Header — keylime bg */}
        <div className="px-7 pt-7 pb-5 border-b border-[#C8DFC5] bg-[#E8F0E4]">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${MODULE_STYLES[entry.module]}`}>
                  {entry.module}
                </span>
                <span className="text-[10px] text-[#6B7A6F] bg-[#FAFAF8] border border-[#D9D4C8] px-2.5 py-1 rounded-full">
                  {entry.category}
                </span>
                <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${RELEVANCE_STYLES[entry.awpRelevance]}`}>
                  {entry.awpRelevance}
                </span>
              </div>

              {/* T-Code — large display */}
              <div
                className="text-5xl font-light text-[#1C3A2B] leading-none tracking-wide mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {entry.transactionCode}
              </div>
              <button
                onClick={copyTcode}
                className="text-[10px] text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#FAFAF8] hover:bg-[#C8DFC5] px-2.5 py-1 rounded-full transition-colors mt-1.5 inline-flex items-center gap-1"
              >
                {copied ? "✓ Copied" : "Copy T-code"}
              </button>

              <h2 className="text-[#2A2E2B] font-medium text-base mt-3 leading-snug">{entry.title}</h2>
              {entry.titleAr && (
                <p
                  className="text-[#6B7A6F] text-sm mt-1 text-right leading-relaxed"
                  style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
                >
                  {entry.titleAr}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#FAFAF8] hover:bg-[#C8DFC5] w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 mt-0.5"
            >
              ×
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-6 custom-scroll">

          {/* Description */}
          <section>
            <SectionLabel>Description</SectionLabel>
            <p className="text-[#2A2E2B] text-sm leading-relaxed">{entry.description}</p>
          </section>

          {/* Details */}
          <section>
            <SectionLabel>Details</SectionLabel>
            <div className="space-y-2 bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-4">
              <Row label="Process Area" value={entry.processArea} />
              <Row label="Module" value={entry.module} />
              <Row label="Category" value={entry.category} />
            </div>
          </section>

          {/* Related Transactions */}
          {entry.relatedTransactions.length > 0 && (
            <section>
              <SectionLabel>Related T-Codes</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {entry.relatedTransactions.map((tc) => (
                  <button
                    key={tc}
                    onClick={() => { onTcodeFilter(tc); onClose(); }}
                    className="text-sm font-light text-[#1C3A2B] bg-[#EDE9E1] border border-[#D9D4C8] px-3 py-1.5 rounded-xl hover:bg-[#C8DFC5] hover:border-[#4E7862] transition-all"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "15px" }}
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
              <SectionLabel>Tags</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-[#4E7862] bg-[#E8F0E4] border border-[#C8DFC5] px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Documentation */}
          <section>
            <SectionLabel>SAP Documentation</SectionLabel>
            <div className="bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-4">
              <p className="text-[10px] text-[#6B7A6F] mb-2">SAP Help Portal</p>
              {hasUrl ? (
                <a
                  href={entry.sapDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4E7862] hover:text-[#1C3A2B] text-sm transition-colors"
                >
                  Open Official Documentation ↗
                </a>
              ) : (
                <span className="text-[#7A5E0A] text-sm">⚠ Doc link pending verification</span>
              )}
              <p className="text-[10px] text-[#D9D4C8] mt-2">Last verified: {entry.lastVerified}</p>
            </div>
          </section>

        </div>

        {/* Drawer Footer */}
        <div className="px-7 py-4 border-t border-[#D9D4C8] bg-[#EDE9E1] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {hasUrl && (
              <a
                href={entry.sapDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F7F5F0] bg-[#1C3A2B] hover:bg-[#3D6B52] px-4 py-2 rounded-full transition-colors"
              >
                SAP Docs ↗
              </a>
            )}
            <button
              onClick={copyTcode}
              className="text-sm text-[#2A2E2B] bg-[#FAFAF8] hover:bg-[#C8DFC5] border border-[#D9D4C8] hover:border-[#4E7862] px-4 py-2 rounded-full transition-colors"
            >
              {copied ? "✓ Copied" : "Copy T-code"}
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-[#6B7A6F] hover:text-[#2A2E2B] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-2.5">
      {children}
    </h3>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-[10px] text-[#6B7A6F] uppercase tracking-wide w-24 shrink-0">{label}</span>
      <span className="text-sm text-[#2A2E2B]">{value}</span>
    </div>
  );
}
