"use client";

import { useState, useRef, useEffect } from "react";
import type { CollectionsState } from "@/lib/collections-store";
import { useT } from "@/lib/i18n";

interface Props {
  entryId: string;
  collectionsState: CollectionsState;
  savedCollectionIds: string[]; // collection IDs this entry is currently in
  onToggleCollection: (collectionId: string, entryId: string, inCollection: boolean) => void;
  onCreateCollection: (name: string) => void;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export function SavePopover({
  entryId,
  collectionsState,
  savedCollectionIds,
  onToggleCollection,
  onCreateCollection,
  onClose,
  triggerRef,
}: Props) {
  const t = useT();
  const [newColName, setNewColName] = useState("");
  const [showNew, setShowNew] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on Escape or outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onOutside(e: MouseEvent) {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        !(triggerRef?.current?.contains(e.target as Node))
      ) {
        onClose();
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (showNew) inputRef.current?.focus();
  }, [showNew]);

  function handleCreate() {
    const name = newColName.trim();
    if (name) {
      onCreateCollection(name);
      setNewColName("");
      setShowNew(false);
    }
  }

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={t("saved.savePopover.title")}
      className="absolute z-50 right-0 mt-2 w-64 bg-[#FAFAF8] border border-[#C8DFC5] rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#E8F0E4] px-4 py-3 border-b border-[#C8DFC5] flex items-center justify-between">
        <span className="text-xs font-semibold text-[#1C3A2B]">{t("saved.savePopover.title")}</span>
        <button
          onClick={onClose}
          aria-label={t("drawer.close")}
          className="text-[#6B7A6F] hover:text-[#1C3A2B] text-lg leading-none"
        >
          ×
        </button>
      </div>

      {/* Collections list */}
      <div className="p-2 max-h-56 overflow-y-auto">
        {collectionsState.collections.map((col) => {
          const inCol = savedCollectionIds.includes(col.id);
          return (
            <label
              key={col.id}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer hover:bg-[#EDE9E1] transition-colors group"
            >
              <input
                type="checkbox"
                checked={inCol}
                onChange={() => onToggleCollection(col.id, entryId, inCol)}
                className="w-3.5 h-3.5 rounded accent-[#1C3A2B] cursor-pointer"
              />
              <span className="text-sm text-[#2A2E2B] group-hover:text-[#1C3A2B] flex-1 truncate">
                {col.name}
              </span>
              {inCol && (
                <span aria-label="saved" className="text-[#4E7862] text-xs">✓</span>
              )}
            </label>
          );
        })}
      </div>

      {/* New collection */}
      <div className="border-t border-[#EDE9E1] p-2">
        {showNew ? (
          <div className="flex gap-1.5">
            <input
              ref={inputRef}
              type="text"
              placeholder={t("saved.collectionName")}
              value={newColName}
              onChange={(e) => setNewColName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); if (e.key === "Escape") setShowNew(false); }}
              className="flex-1 text-xs bg-[#F7F5F0] border border-[#D9D4C8] rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#4E7862]"
            />
            <button
              onClick={handleCreate}
              disabled={!newColName.trim()}
              className="text-xs bg-[#1C3A2B] text-[#F7F5F0] px-3 py-1.5 rounded-lg hover:bg-[#3D6B52] transition-colors disabled:opacity-40"
            >
              {t("saved.create")}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowNew(true)}
            className="w-full text-xs text-[#4E7862] hover:text-[#1C3A2B] px-3 py-2 rounded-xl hover:bg-[#E8F0E4] transition-colors text-left flex items-center gap-1.5"
          >
            <span className="text-base leading-none">+</span> {t("saved.newCollection")}
          </button>
        )}
      </div>

      {/* Done */}
      <div className="border-t border-[#EDE9E1] px-3 py-2">
        <button
          onClick={onClose}
          className="w-full text-xs text-[#1C3A2B] font-medium bg-[#E8F0E4] hover:bg-[#C8DFC5] py-2 rounded-xl transition-colors"
        >
          {t("saved.savePopover.done")}
        </button>
      </div>
    </div>
  );
}
