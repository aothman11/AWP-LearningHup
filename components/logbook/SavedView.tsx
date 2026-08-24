"use client";

import { useState } from "react";
import type { CollectionsState } from "@/lib/collections-store";
import type { LogbookEntry } from "@/types/logbook";
import { useT } from "@/lib/i18n";

interface Props {
  collectionsState: CollectionsState;
  allEntries: LogbookEntry[];
  onSelectEntry: (entry: LogbookEntry) => void;
  onCreateCollection: (name: string) => void;
  onRenameCollection: (id: string, name: string) => void;
  onDeleteCollection: (id: string) => void;
  onRemoveFromCollection: (collectionId: string, entryId: string) => void;
}

export function SavedView({
  collectionsState,
  allEntries,
  onSelectEntry,
  onCreateCollection,
  onRenameCollection,
  onDeleteCollection,
  onRemoveFromCollection,
}: Props) {
  const t = useT();
  const [activeCollection, setActiveCollection] = useState<string>("default");
  const [renaming, setRenaming] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [newColName, setNewColName] = useState("");
  const [showNewCol, setShowNewCol] = useState(false);

  const { collections, memberships } = collectionsState;
  const currentCol = collections.find((c) => c.id === activeCollection) ?? collections[0];
  const memberIds = (currentCol ? memberships[currentCol.id] : []) ?? [];
  const memberEntries = memberIds
    .map((id) => allEntries.find((e) => e.id === id))
    .filter((e): e is LogbookEntry => Boolean(e));

  const totalSaved = new Set(Object.values(memberships).flat()).size;

  return (
    <div className="flex gap-6 min-h-[60vh]">
      {/* Sidebar — collection list */}
      <aside className="w-56 shrink-0 space-y-1" aria-label={t("saved.title")}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest">
            {t("saved.title")}
          </span>
          <span className="text-[10px] text-[#6B7A6F]">{totalSaved}</span>
        </div>

        {collections.map((col) => {
          const count = (memberships[col.id] ?? []).length;
          const isActive = activeCollection === col.id;
          return (
            <div key={col.id} className="group">
              {renaming === col.id ? (
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { onRenameCollection(col.id, renameValue); setRenaming(null); }
                      if (e.key === "Escape") setRenaming(null);
                    }}
                    autoFocus
                    className="flex-1 text-xs bg-[#F7F5F0] border border-[#4E7862] rounded-lg px-2 py-1 focus:outline-none"
                  />
                  <button
                    onClick={() => { onRenameCollection(col.id, renameValue); setRenaming(null); }}
                    className="text-xs text-[#1C3A2B] bg-[#E8F0E4] px-2 py-1 rounded-lg"
                  >
                    ✓
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setActiveCollection(col.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? "border-[#C8DFC5] bg-[#E8F0E4] text-[#1C3A2B]"
                      : "border-transparent text-[#6B7A6F] hover:bg-[#EDE9E1] hover:text-[#2A2E2B]"
                  }`}
                >
                  <span className="truncate flex-1 text-xs">{col.name}</span>
                  <span className="text-[10px] text-[#6B7A6F] shrink-0 ml-1">{count}</span>
                </button>
              )}

              {/* Rename / delete (only visible on hover, not for renaming state) */}
              {renaming !== col.id && isActive && (
                <div className="flex items-center gap-1 px-3 mt-0.5">
                  <button
                    onClick={() => { setRenaming(col.id); setRenameValue(col.name); }}
                    className="text-[9px] text-[#6B7A6F] hover:text-[#2A2E2B] transition-colors"
                  >
                    {t("saved.rename")}
                  </button>
                  {col.id !== "default" && (
                    <>
                      <span className="text-[#D9D4C8] text-[9px]">·</span>
                      <button
                        onClick={() => {
                          if (confirm(t("saved.confirmDelete"))) {
                            onDeleteCollection(col.id);
                            setActiveCollection("default");
                          }
                        }}
                        className="text-[9px] text-[#9B3030] hover:text-[#7B2020] transition-colors"
                      >
                        {t("saved.delete")}
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* New collection */}
        <div className="border-t border-[#EDE9E1] pt-2 mt-2">
          {showNewCol ? (
            <div className="flex gap-1">
              <input
                type="text"
                placeholder={t("saved.collectionName")}
                value={newColName}
                onChange={(e) => setNewColName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newColName.trim()) {
                    onCreateCollection(newColName.trim());
                    setNewColName("");
                    setShowNewCol(false);
                  }
                  if (e.key === "Escape") setShowNewCol(false);
                }}
                autoFocus
                className="flex-1 text-xs bg-[#F7F5F0] border border-[#D9D4C8] rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#4E7862]"
              />
              <button
                onClick={() => {
                  if (newColName.trim()) {
                    onCreateCollection(newColName.trim());
                    setNewColName("");
                    setShowNewCol(false);
                  }
                }}
                className="text-xs text-[#1C3A2B] bg-[#E8F0E4] px-2 py-1 rounded-lg"
              >
                {t("saved.create")}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowNewCol(true)}
              className="w-full text-xs text-[#4E7862] hover:text-[#1C3A2B] px-3 py-2 rounded-xl hover:bg-[#E8F0E4] transition-colors text-left flex items-center gap-1"
            >
              <span className="text-sm leading-none">+</span> {t("saved.newCollection")}
            </button>
          )}
        </div>
      </aside>

      {/* Main — entries in collection */}
      <div className="flex-1 min-w-0">
        {currentCol && (
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-base font-medium text-[#1C3A2B]">{currentCol.name}</h2>
            <span className="text-xs text-[#6B7A6F]">
              {memberEntries.length} {memberEntries.length === 1 ? t("saved.entry") : t("saved.entries")}
            </span>
          </div>
        )}

        {memberEntries.length === 0 ? (
          <div className="text-center py-20 text-[#6B7A6F]">
            <p className="text-3xl mb-3 font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              {t("saved.empty.title")}
            </p>
            <p className="text-sm">{t("saved.empty.body")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {memberEntries.map((entry) => (
              <SavedEntryCard
                key={entry.id}
                entry={entry}
                collectionId={currentCol?.id ?? "default"}
                onOpen={onSelectEntry}
                onRemove={onRemoveFromCollection}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SavedEntryCard({
  entry,
  collectionId,
  onOpen,
  onRemove,
}: {
  entry: LogbookEntry;
  collectionId: string;
  onOpen: (e: LogbookEntry) => void;
  onRemove: (colId: string, entryId: string) => void;
}) {
  const t = useT();

  const MODULE_STYLES: Record<string, string> = {
    PP:     "bg-[#1C3A2B] text-[#F7F5F0]",
    QM:     "bg-[#4E7862] text-[#F7F5F0]",
    "PP/QM":"bg-[#C8DFC5] text-[#1C3A2B]",
  };

  return (
    <div
      className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-5 flex flex-col gap-3 hover:bg-[#E8F0E4] hover:border-[#4E7862] transition-all cursor-pointer"
      onClick={() => onOpen(entry)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${MODULE_STYLES[entry.module]}`}>
            {entry.module}
          </span>
          <span
            className="text-2xl font-light text-[#1C3A2B]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {entry.transactionCode}
          </span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(collectionId, entry.id); }}
          aria-label={`${t("saved.remove")} ${entry.transactionCode}`}
          className="text-[#D9D4C8] hover:text-[#9B3030] text-sm leading-none transition-colors shrink-0 mt-0.5"
          title={t("saved.remove")}
        >
          ×
        </button>
      </div>
      <p className="text-sm text-[#2A2E2B] font-medium leading-snug">{entry.title}</p>
      <p className="text-xs text-[#6B7A6F] leading-relaxed line-clamp-2">{entry.description}</p>
    </div>
  );
}
