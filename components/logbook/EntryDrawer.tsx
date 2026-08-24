"use client";

import { useState, useEffect, useRef } from "react";
import type { LogbookEntry } from "@/types/logbook";
import { useT } from "@/lib/i18n";
import { deriveContentStatus } from "@/lib/content-status";
import { SavePopover } from "./SavePopover";
import type { CollectionsState } from "@/lib/collections-store";

interface Props {
  entry: LogbookEntry | null;
  onClose: () => void;
  onTcodeFilter: (code: string) => void;
  collectionsState?: CollectionsState;
  savedCollectionIds?: string[];
  onToggleCollection?: (collectionId: string, entryId: string, inCollection: boolean) => void;
  onCreateCollection?: (name: string) => void;
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

export function EntryDrawer({
  entry,
  onClose,
  onTcodeFilter,
  collectionsState,
  savedCollectionIds = [],
  onToggleCollection,
  onCreateCollection,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const t = useT();

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
  const status = deriveContentStatus(entry);
  const isSaved = savedCollectionIds.length > 0;

  const statusConfig = {
    "detailed-guide":  { label: t("status.detailedGuide"),  icon: "●", cls: "bg-[#D4EFE0] text-[#1C3A2B] border-[#C8DFC5]" },
    "quick-reference": { label: t("status.quickReference"), icon: "◐", cls: "bg-[#F8EBC5] text-[#7A5E0A] border-[#e5d08a]" },
    "in-progress":     { label: t("status.inProgress"),     icon: "○", cls: "bg-[#EDE9E1] text-[#6B7A6F] border-[#D9D4C8]" },
  }[status];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C3A2B]/20 backdrop-blur-[2px] z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${entry.transactionCode} – ${entry.title}`}
        className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[#F7F5F0] border-l border-[#D9D4C8] z-50 flex flex-col overflow-hidden"
        style={{ animation: "slideIn 0.2s ease-out" }}
      >
        {/* Drawer Header */}
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
                <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1 ${statusConfig.cls}`} aria-label={statusConfig.label}>
                  <span aria-hidden="true">{statusConfig.icon}</span> {statusConfig.label}
                </span>
              </div>

              <div
                className="text-5xl font-light text-[#1C3A2B] leading-none tracking-wide mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {entry.transactionCode}
              </div>
              <button
                onClick={copyTcode}
                aria-label={copied ? t("drawer.copied") : t("drawer.copyTcode")}
                className="text-[10px] text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#FAFAF8] hover:bg-[#C8DFC5] px-2.5 py-1 rounded-full transition-colors mt-1.5 inline-flex items-center gap-1"
              >
                {copied ? `✓ ${t("drawer.copied")}` : t("drawer.copyTcode")}
              </button>

              <h2 className="text-[#2A2E2B] font-medium text-base mt-3 leading-snug">{entry.title}</h2>
              {entry.titleAr && (
                <p
                  className="text-[#6B7A6F] text-sm mt-1 text-right leading-relaxed"
                  style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
                  lang="ar"
                >
                  {entry.titleAr}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label={t("drawer.close")}
              className="text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#FAFAF8] hover:bg-[#C8DFC5] w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 mt-0.5"
            >
              ×
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-6 custom-scroll">

          {/* Description */}
          <section aria-labelledby="desc-label">
            <SectionLabel id="desc-label">{t("drawer.description")}</SectionLabel>
            <p className="text-[#2A2E2B] text-sm leading-relaxed">{entry.description}</p>
          </section>

          {/* When to Use */}
          {entry.whenToUse && (
            <section aria-labelledby="when-label">
              <SectionLabel id="when-label">{t("drawer.whenToUse")}</SectionLabel>
              <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-4">
                <p className="text-sm text-[#1C3A2B] leading-relaxed">{entry.whenToUse}</p>
              </div>
            </section>
          )}

          {/* Prerequisites */}
          {entry.prerequisites && entry.prerequisites.length > 0 && (
            <section aria-labelledby="prereq-label">
              <SectionLabel id="prereq-label">{t("drawer.prerequisites")}</SectionLabel>
              <ul className="space-y-2">
                {entry.prerequisites.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#2A2E2B]">
                    <span aria-hidden="true" className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#4E7862] mt-2" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Steps */}
          {entry.steps && entry.steps.length > 0 && (
            <section aria-labelledby="steps-label">
              <SectionLabel id="steps-label">{t("drawer.howToUse")}</SectionLabel>
              <ol className="space-y-2">
                {entry.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#2A2E2B]">
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-5 h-5 rounded-full bg-[#1C3A2B] text-[#F7F5F0] text-[10px] font-semibold flex items-center justify-center mt-0.5"
                    >
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Key Fields */}
          {entry.keyFields && entry.keyFields.length > 0 && (
            <section aria-labelledby="fields-label">
              <SectionLabel id="fields-label">{t("drawer.keyFields")}</SectionLabel>
              <div className="space-y-2 bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-4">
                {entry.keyFields.map((kf, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 font-mono text-xs text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-2 py-0.5 rounded-lg self-start mt-0.5">
                      {kf.field.split(" ")[0]}
                    </span>
                    <span className="text-[#6B7A6F] text-xs leading-relaxed">{kf.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Output */}
          {entry.output && (
            <section aria-labelledby="output-label">
              <SectionLabel id="output-label">{t("drawer.output")}</SectionLabel>
              <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-4">
                <p className="text-sm text-[#1C3A2B] leading-relaxed">{entry.output}</p>
              </div>
            </section>
          )}

          {/* Common Mistakes */}
          {entry.commonMistakes && entry.commonMistakes.length > 0 && (
            <section aria-labelledby="mistakes-label">
              <SectionLabel id="mistakes-label">{t("drawer.commonMistakes")}</SectionLabel>
              <ul className="space-y-2 bg-[#FCDEDE]/30 border border-[#f5b8b8] rounded-2xl p-4">
                {entry.commonMistakes.map((m, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#2A2E2B]">
                    <span aria-hidden="true" className="shrink-0 text-[#9B3030] font-semibold text-xs mt-0.5">!</span>
                    <span className="leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* What Next */}
          {entry.whatNext && entry.whatNext.length > 0 && (
            <section aria-labelledby="next-label">
              <SectionLabel id="next-label">{t("drawer.whatNext")}</SectionLabel>
              <ul className="space-y-2">
                {entry.whatNext.map((n, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#2A2E2B]">
                    <span aria-hidden="true" className="shrink-0 text-[#4E7862] font-semibold text-xs mt-0.5">→</span>
                    <span className="leading-relaxed">{n}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Details */}
          <section aria-labelledby="details-label">
            <SectionLabel id="details-label">{t("drawer.details")}</SectionLabel>
            <div className="space-y-2 bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-4">
              <Row label={t("drawer.processArea")} value={entry.processArea} />
              <Row label={t("drawer.module")} value={entry.module} />
              <Row label={t("drawer.category")} value={entry.category} />
            </div>
          </section>

          {/* Related Transactions */}
          {entry.relatedTransactions.length > 0 && (
            <section aria-labelledby="related-label">
              <SectionLabel id="related-label">{t("drawer.relatedTcodes")}</SectionLabel>
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
            <section aria-labelledby="tags-label">
              <SectionLabel id="tags-label">{t("drawer.tags")}</SectionLabel>
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

          {/* Notes */}
          {entry.notes && (
            <section aria-labelledby="notes-label">
              <SectionLabel id="notes-label">{t("drawer.notes")}</SectionLabel>
              <p className="text-xs text-[#4E7862] italic leading-relaxed">{entry.notes}</p>
            </section>
          )}

          {/* Documentation */}
          <section aria-labelledby="docs-label">
            <SectionLabel id="docs-label">{t("drawer.sapDocumentation")}</SectionLabel>
            <div className="bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-4">
              <p className="text-[10px] text-[#6B7A6F] mb-2">{t("drawer.sapHelpPortal")}</p>
              {hasUrl ? (
                <a
                  href={entry.sapDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4E7862] hover:text-[#1C3A2B] text-sm transition-colors"
                >
                  {t("drawer.openDocs")} ↗
                </a>
              ) : (
                <span className="text-[#7A5E0A] text-sm">⚠ {t("drawer.docPending")}</span>
              )}
              <p className="text-[10px] text-[#D9D4C8] mt-2">{t("drawer.lastVerified")} {entry.lastVerified}</p>
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
                {t("general.sapDocs")} ↗
              </a>
            )}
            <button
              onClick={copyTcode}
              className="text-sm text-[#2A2E2B] bg-[#FAFAF8] hover:bg-[#C8DFC5] border border-[#D9D4C8] hover:border-[#4E7862] px-4 py-2 rounded-full transition-colors"
            >
              {copied ? `✓ ${t("drawer.copied")}` : t("drawer.copyTcode")}
            </button>

            {/* Save to workspace */}
            {collectionsState && onToggleCollection && onCreateCollection && (
              <div className="relative">
                <button
                  ref={saveButtonRef}
                  onClick={() => setSaveOpen((o) => !o)}
                  aria-label={t("drawer.saveToWorkspace")}
                  aria-expanded={saveOpen}
                  className={`text-sm border px-4 py-2 rounded-full transition-colors ${
                    isSaved
                      ? "bg-[#E8F0E4] text-[#1C3A2B] border-[#C8DFC5]"
                      : "bg-[#FAFAF8] text-[#6B7A6F] border-[#D9D4C8] hover:border-[#4E7862] hover:bg-[#E8F0E4]"
                  }`}
                >
                  {isSaved ? `✓ ${t("drawer.saveToWorkspace")}` : t("drawer.saveToWorkspace")}
                </button>
                {saveOpen && (
                  <SavePopover
                    entryId={entry.id}
                    collectionsState={collectionsState}
                    savedCollectionIds={savedCollectionIds}
                    onToggleCollection={onToggleCollection}
                    onCreateCollection={onCreateCollection}
                    onClose={() => setSaveOpen(false)}
                    triggerRef={saveButtonRef}
                  />
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-sm text-[#6B7A6F] hover:text-[#2A2E2B] transition-colors"
          >
            {t("drawer.close")}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

function SectionLabel({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3 id={id} className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-2.5">
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
