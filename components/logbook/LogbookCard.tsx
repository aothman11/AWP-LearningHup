"use client";

import { useRef, useState } from "react";
import type { LogbookEntry } from "@/types/logbook";
import { useLang } from "@/context/LangContext";
import { useT } from "@/lib/i18n";
import { deriveContentStatus } from "@/lib/content-status";
import { SavePopover } from "./SavePopover";
import type { CollectionsState } from "@/lib/collections-store";

interface Props {
  entry: LogbookEntry;
  onSelect: (entry: LogbookEntry) => void;
  onTagClick: (tag: string) => void;
  onTcodeClick: (code: string) => void;
  isFavorited?: boolean;
  onFavorite?: (id: string) => void;
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
  High:     "bg-[#D4EFE0] text-[#1C3A2B] border border-[#C8DFC5]",
  Medium:   "bg-[#F8EBC5] text-[#7A5E0A] border border-[#e5d08a]",
  Low:      "bg-[#EDE9E1] text-[#6B7A6F] border border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border border-[#f5b8b8]",
};

function ContentStatusBadge({ entry }: { entry: LogbookEntry }) {
  const t = useT();
  const status = deriveContentStatus(entry);

  const config = {
    "detailed-guide":  { label: t("status.detailedGuide"),  icon: "●", cls: "bg-[#D4EFE0] text-[#1C3A2B] border-[#C8DFC5]" },
    "quick-reference": { label: t("status.quickReference"), icon: "◐", cls: "bg-[#F8EBC5] text-[#7A5E0A] border-[#e5d08a]" },
    "in-progress":     { label: t("status.inProgress"),     icon: "○", cls: "bg-[#EDE9E1] text-[#6B7A6F] border-[#D9D4C8]" },
  }[status];

  return (
    <span
      className={`text-[9px] font-medium px-2 py-0.5 rounded-full border flex items-center gap-1 ${config.cls}`}
      title={config.label}
      aria-label={config.label}
    >
      <span aria-hidden="true">{config.icon}</span>
      {config.label}
    </span>
  );
}

export function LogbookCard({
  entry,
  onSelect,
  onTagClick,
  onTcodeClick,
  isFavorited = false,
  onFavorite,
  collectionsState,
  savedCollectionIds = [],
  onToggleCollection,
  onCreateCollection,
}: Props) {
  const { lang } = useLang();
  const t = useT();
  const hasUrl = Boolean(entry.sapDocUrl);
  const displayTitle = lang === "AR" && entry.titleAr ? entry.titleAr : entry.title;
  const [saveOpen, setSaveOpen] = useState(false);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const isSaved = savedCollectionIds.length > 0;

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
            <ContentStatusBadge entry={entry} />
          </div>
          <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${RELEVANCE_STYLES[entry.awpRelevance]}`}>
            {entry.awpRelevance}
          </span>
        </div>

        {/* T-Code — editorial headline */}
        <div
          className="text-4xl font-light text-[#1C3A2B] leading-none tracking-wide mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {entry.transactionCode}
        </div>

        <h3
          className="text-[#2A2E2B] font-medium text-sm leading-snug group-hover:text-[#1C3A2B] transition-colors"
          dir={lang === "AR" ? "rtl" : undefined}
          style={lang === "AR" ? { fontFamily: "'Sakkal Majalla', serif", textAlign: "right" } : undefined}
        >
          {displayTitle}
        </h3>
        {lang === "EN" && entry.titleAr && (
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
                aria-label={`Filter by tag: ${tag}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Related */}
        {entry.relatedTransactions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[#6B7A6F] text-[10px]">{t("card.related")}</span>
            {entry.relatedTransactions.slice(0, 4).map((tc) => (
              <button
                key={tc}
                onClick={(e) => { e.stopPropagation(); onTcodeClick(tc); }}
                className="text-[11px] font-light text-[#1C3A2B] bg-[#EDE9E1] border border-[#D9D4C8] px-2 py-0.5 rounded hover:bg-[#C8DFC5] hover:border-[#4E7862] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                aria-label={`Filter by ${tc}`}
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
              aria-label={`${t("card.sapDocs")} for ${entry.transactionCode}`}
            >
              {t("card.sapDocs")} ↗
            </a>
          ) : (
            <span className="text-xs text-[#7A5E0A] bg-[#F8EBC5] border border-[#e5d08a] px-2.5 py-1 rounded-full" aria-label={t("card.docPending")}>
              ⚠ {t("card.docPending")}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 relative">
          {/* Save to workspace */}
          {collectionsState && onToggleCollection && onCreateCollection && (
            <div className="relative">
              <button
                ref={saveButtonRef}
                onClick={() => setSaveOpen((o) => !o)}
                aria-label={t("drawer.saveToWorkspace")}
                aria-expanded={saveOpen}
                title={t("drawer.saveToWorkspace")}
                className={`text-base leading-none transition-colors ${isSaved ? "text-[#4E7862]" : "text-[#D9D4C8] hover:text-[#4E7862]"}`}
              >
                {isSaved ? "⊕" : "⊕"}
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

          {/* Favorite */}
          {onFavorite && (
            <button
              onClick={(e) => { e.stopPropagation(); onFavorite(entry.id); }}
              title={isFavorited ? t("favorites.remove") : t("favorites.add")}
              aria-label={isFavorited ? t("favorites.remove") : t("favorites.add")}
              aria-pressed={isFavorited}
              className={`text-base leading-none transition-colors ${isFavorited ? "text-[#4E7862]" : "text-[#D9D4C8] hover:text-[#4E7862]"}`}
            >
              {isFavorited ? "★" : "☆"}
            </button>
          )}
          <span className="text-[#D9D4C8] text-[10px] whitespace-nowrap">
            {entry.lastVerified}
          </span>
        </div>
      </div>
    </div>
  );
}
