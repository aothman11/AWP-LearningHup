"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { logbookEntries } from "@/data/qm-logbook";
import type { LogbookEntry, Module, AwpRelevance } from "@/types/logbook";
import { LogbookFilters } from "@/components/logbook/LogbookFilters";
import type { LogbookFiltersState } from "@/components/logbook/LogbookFilters";
import { LogbookSearch } from "@/components/logbook/LogbookSearch";
import { LogbookCard } from "@/components/logbook/LogbookCard";
import { EntryDrawer } from "@/components/logbook/EntryDrawer";
import { IntegrationMap } from "@/components/logbook/IntegrationMap";
import { TablesView } from "@/components/logbook/TablesView";
import { ProcessFlow } from "@/components/logbook/ProcessFlow";
import { SavedView } from "@/components/logbook/SavedView";
import { useLang } from "@/context/LangContext";
import { useT } from "@/lib/i18n";
import { collectionsStore } from "@/lib/collections-store";
import type { CollectionsState } from "@/lib/collections-store";
import { deriveContentStatus } from "@/lib/content-status";
import { normalizeQuery, buildHaystack, matchesQuery } from "@/lib/search";

const RELEVANCE_ORDER: Record<string, number> = { High: 0, Medium: 1, Low: 2, "Not Used": 3 };

type TabType = "tcodes" | "integrations" | "tables" | "flow" | "saved";

const DEFAULT_FILTERS: LogbookFiltersState = {
  module: "All",
  categories: [],
  relevance: "All",
  activeTag: "",
  contentStatus: "all",
};

export default function LogbookPage() {
  const { lang, toggle: toggleLang } = useLang();
  const t = useT();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("module");
  const [filters, setFilters] = useState<LogbookFiltersState>(DEFAULT_FILTERS);
  const [selectedEntry, setSelectedEntry] = useState<LogbookEntry | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [tab, setTab] = useState<TabType>("tcodes");
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem("pp-qm-favorites");
      return new Set(stored ? JSON.parse(stored) : []);
    } catch { return new Set(); }
  });
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  // ── Collections state ──────────────────────────────────────────────────────
  const [collectionsState, setCollectionsState] = useState<CollectionsState>(() => {
    try { return collectionsStore.getState(); } catch { return { version: 1, collections: [{ id: "default", name: "Saved", createdAt: new Date().toISOString() }], memberships: { default: [] } }; }
  });

  function refreshCollections() {
    try { setCollectionsState(collectionsStore.getState()); } catch {}
  }

  const getSavedCollectionIds = useCallback((entryId: string): string[] => {
    return collectionsStore.getCollectionsForEntry(entryId);
  }, []);

  function handleToggleCollection(collectionId: string, entryId: string, inCollection: boolean) {
    if (inCollection) { collectionsStore.removeFromCollection(collectionId, entryId); }
    else { collectionsStore.addToCollection(collectionId, entryId); }
    refreshCollections();
  }

  function handleCreateCollection(name: string) {
    collectionsStore.createCollection(name);
    refreshCollections();
  }

  function handleRenameCollection(id: string, name: string) {
    collectionsStore.renameCollection(id, name);
    refreshCollections();
  }

  function handleDeleteCollection(id: string) {
    collectionsStore.deleteCollection(id);
    refreshCollections();
  }

  function handleRemoveFromCollection(collectionId: string, entryId: string) {
    collectionsStore.removeFromCollection(collectionId, entryId);
    refreshCollections();
  }

  // ── Filtering ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const normalizedQ = normalizeQuery(search);
    let results = logbookEntries.filter((e) => {
      if (filters.module !== "All" && e.module !== filters.module) return false;
      if (filters.categories.length > 0 && !filters.categories.includes(e.category)) return false;
      if (filters.relevance !== "All" && e.awpRelevance !== filters.relevance) return false;
      if (filters.activeTag && !e.tags.includes(filters.activeTag)) return false;
      if (filters.contentStatus !== "all") {
        const status = deriveContentStatus(e);
        if (filters.contentStatus === "detailed-guide" && status !== "detailed-guide") return false;
        if (filters.contentStatus === "exclude-in-progress" && status === "in-progress") return false;
      }
      if (normalizedQ) {
        const hay = buildHaystack([
          e.transactionCode, e.title, e.titleAr, e.description,
          e.category, e.processArea, e.notes, ...e.tags, ...e.relatedTransactions,
          e.whenToUse ?? "", ...(e.prerequisites ?? []), ...(e.whatNext ?? []),
        ]);
        if (!matchesQuery(hay, normalizedQ)) return false;
      }
      return true;
    });
    results = [...results].sort((a, b) => {
      if (sort === "module") return a.module.localeCompare(b.module);
      if (sort === "category") return a.category.localeCompare(b.category);
      if (sort === "transactionCode") return a.transactionCode.localeCompare(b.transactionCode);
      if (sort === "awpRelevance") return (RELEVANCE_ORDER[a.awpRelevance] ?? 9) - (RELEVANCE_ORDER[b.awpRelevance] ?? 9);
      return 0;
    });
    return results;
  }, [search, filters, sort]);

  function handleTcodeClick(code: string) {
    setSearch(code);
    setFilters(DEFAULT_FILTERS);
    setTab("tcodes");
  }
  function handleTagClick(tag: string) {
    setFilters((f) => ({ ...f, activeTag: f.activeTag === tag ? "" : tag }));
  }
  function clearAllFilters() {
    setSearch("");
    setFilters(DEFAULT_FILTERS);
  }

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try { localStorage.setItem("pp-qm-favorites", JSON.stringify([...next])); } catch {}
      return next;
    });
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (e.key === "Escape") (e.target as HTMLElement).blur();
        return;
      }
      if (e.key === "/") {
        e.preventDefault();
        setTab("tcodes");
        setTimeout(() => searchRef.current?.focus(), 50);
      }
      if (e.key === "?") { e.preventDefault(); setShortcutsOpen((o) => !o); }
      if (e.key === "Escape") setShortcutsOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const pinnedEntries = useMemo(
    () => logbookEntries.filter((e) => favorites.has(e.id)),
    [favorites]
  );

  const stats = {
    pp:   logbookEntries.filter((e) => e.module === "PP").length,
    qm:   logbookEntries.filter((e) => e.module === "QM").length,
    ppqm: logbookEntries.filter((e) => e.module === "PP/QM").length,
    high: logbookEntries.filter((e) => e.awpRelevance === "High").length,
  };

  const hasActiveFilters =
    filters.module !== "All" || filters.categories.length > 0 ||
    filters.relevance !== "All" || Boolean(filters.activeTag) ||
    filters.contentStatus !== "all" || Boolean(search);

  const TABS: Array<{ id: TabType; label: string }> = [
    { id: "tcodes", label: t("tabs.tcodes") },
    { id: "integrations", label: t("tabs.integrations") },
    { id: "tables", label: t("tabs.tables") },
    { id: "flow", label: t("tabs.flow") },
    { id: "saved", label: t("tabs.saved") },
  ];

  // Compute per-entry saved collection IDs from collections state (memoized)
  const entryCollectionMap = useMemo(() => {
    const map: Record<string, string[]> = {};
    for (const col of collectionsState.collections) {
      for (const entryId of collectionsState.memberships[col.id] ?? []) {
        if (!map[entryId]) map[entryId] = [];
        map[entryId].push(col.id);
      }
    }
    return map;
  }, [collectionsState]);

  return (
    <div className="min-h-screen bg-[#f6f3f1] text-[#242424]" style={{ fontFamily: "var(--font-mono)" }}>
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[#cecac8] bg-[#f6f3f1] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div>
            {lang === "EN" ? (
              <>
                <h1
                  className="font-normal leading-none tracking-wide text-[#242424]"
                  style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 400 }}
                >
                  PP<span style={{ color: "#2b59d1" }}>/</span>QM {t("header.title")}
                </h1>
                <p className="text-xs text-[#797776] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>{t("header.subtitle")}</p>
              </>
            ) : (
              <>
                <h1
                  className="font-normal leading-none tracking-wide text-right text-[#242424]"
                  style={{ fontFamily: "'Sakkal Majalla', serif", fontSize: "26px", direction: "rtl" }}
                  lang="ar"
                >
                  {t("header.title")}
                </h1>
                <p
                  className="text-xs text-[#797776] mt-0.5 text-right"
                  style={{ fontFamily: "'Sakkal Majalla', serif", direction: "rtl" }}
                  lang="ar"
                >
                  {t("header.subtitle")}
                </p>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* AR / EN toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center text-[11px] border border-[#cecac8] hover:border-[#2b59d1] bg-[#f6f3f1] rounded-full transition-colors overflow-hidden"
              aria-label={t("header.switchLang")}
              title={t("header.switchLang")}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className={`px-3 py-1.5 transition-colors ${lang === "EN" ? "bg-[#2b59d1] text-white" : "text-[#797776]"}`}>EN</span>
              <span className={`px-3 py-1.5 transition-colors ${lang === "AR" ? "bg-[#2b59d1] text-white" : "text-[#797776]"}`}>AR</span>
            </button>
            <button
              onClick={() => setShortcutsOpen(true)}
              title={`${t("header.shortcuts")} (?)`}
              aria-label={t("header.shortcuts")}
              className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#797776] hover:text-[#242424] border border-[#cecac8] hover:border-[#2b59d1] px-3 py-1.5 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ? {t("header.shortcuts")}
            </button>
            <button
              onClick={() => window.print()}
              aria-label={t("header.exportPdf")}
              className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#797776] hover:text-[#242424] border border-[#cecac8] hover:border-[#2b59d1] px-3 py-1.5 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("header.exportPdf")}
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              aria-label={t("header.filters")}
              aria-expanded={mobileFiltersOpen}
              className="lg:hidden text-[11px] text-[#797776] border border-[#cecac8] px-3 py-1.5 rounded-full"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("header.filters")}
            </button>
          </div>
        </div>
      </header>

      {/* ── Tab Bar ─────────────────────────────────────────────────────────── */}
      <nav className="border-b border-[#cecac8] bg-[#f6f3f1]" aria-label="Main navigation">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex gap-0 overflow-x-auto">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              aria-current={tab === tb.id ? "page" : undefined}
              className={`px-5 py-3 text-[11px] uppercase tracking-widest border-b-2 transition-colors shrink-0 ${
                tab === tb.id
                  ? "border-[#2b59d1] text-[#2b59d1]"
                  : "border-transparent text-[#797776] hover:text-[#242424]"
              }`}
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Stat Bar ────────────────────────────────────────────────────────── */}
      <div className="border-b border-[#cecac8] bg-[#f6f3f1]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-6 overflow-x-auto">
          <StatPill label={t("stats.total")} value={logbookEntries.length} />
          <div className="w-px h-4 bg-[#cecac8] shrink-0" aria-hidden="true" />
          <StatPill label="PP" value={stats.pp} accent />
          <StatPill label="QM" value={stats.qm} accent />
          <StatPill label="PP/QM" value={stats.ppqm} />
          <div className="w-px h-4 bg-[#cecac8] shrink-0" aria-hidden="true" />
          <StatPill label={t("stats.high")} value={stats.high} accent />
        </div>
      </div>

      {/* ── Main Layout ─────────────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
        {/* Integrations tab */}
        {tab === "integrations" && <IntegrationMap />}

        {/* Tables tab */}
        {tab === "tables" && <TablesView />}

        {/* Process Flow tab */}
        {tab === "flow" && (
          <ProcessFlow
            onTcodeSelect={(tc) => {
              const entry = logbookEntries.find((e) => e.transactionCode === tc);
              if (entry) {
                setSelectedEntry(entry);
              } else {
                setTab("tcodes");
                setSearch(tc);
                setFilters(DEFAULT_FILTERS);
              }
            }}
          />
        )}

        {/* Saved workspace tab */}
        {tab === "saved" && (
          <SavedView
            collectionsState={collectionsState}
            allEntries={logbookEntries}
            onSelectEntry={setSelectedEntry}
            onCreateCollection={handleCreateCollection}
            onRenameCollection={handleRenameCollection}
            onDeleteCollection={handleDeleteCollection}
            onRemoveFromCollection={handleRemoveFromCollection}
          />
        )}

        {tab === "tcodes" && (
          <div className="flex gap-8">
            {/* Sidebar Desktop */}
            <div
              className={`hidden lg:block sticky top-[115px] self-start h-[calc(100vh-132px)] shrink-0 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-10"}`}
            >
              {/* Collapse toggle */}
              <button
                onClick={() => setSidebarOpen((o) => !o)}
                title={sidebarOpen ? t("filters.sidebar.collapse") : t("filters.sidebar.expand")}
                aria-label={sidebarOpen ? t("filters.sidebar.collapse") : t("filters.sidebar.expand")}
                aria-expanded={sidebarOpen}
                className="absolute -right-3 top-2 z-10 w-6 h-6 rounded-full bg-[#f6f3f1] border border-[#cecac8] hover:border-[#2b59d1] flex items-center justify-center text-[#797776] hover:text-[#2b59d1] transition-all text-[10px]"
              >
                {sidebarOpen ? "‹" : "›"}
              </button>

              {sidebarOpen ? (
                <div className="overflow-y-auto h-full custom-scroll pb-6">
                  <LogbookFilters
                    entries={logbookEntries}
                    filters={filters}
                    onChange={setFilters}
                  />
                </div>
              ) : (
                /* Collapsed: show active-filter dots */
                <div className="flex flex-col items-center gap-3 pt-10" aria-hidden="true">
                  {filters.module !== "All" && (
                    <div
                      className="w-6 h-6 rounded-full bg-[#2b59d1] text-white text-[8px] font-bold flex items-center justify-center"
                      title={`Module: ${filters.module}`}
                    >
                      M
                    </div>
                  )}
                  {filters.categories.length > 0 && (
                    <div
                      className="w-6 h-6 rounded-full bg-[#cfdaf5] border border-[#2b59d1] text-[#2b59d1] text-[8px] font-bold flex items-center justify-center"
                      title={`${filters.categories.length} categories`}
                    >
                      {filters.categories.length}
                    </div>
                  )}
                  {filters.relevance !== "All" && (
                    <div
                      className="w-6 h-6 rounded-full bg-[#f6f3f1] border border-[#cecac8] text-[#797776] text-[8px] font-bold flex items-center justify-center"
                      title={`Relevance: ${filters.relevance}`}
                    >
                      R
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Filter Panel */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-40 lg:hidden">
                <div className="absolute inset-0 bg-[#242424]/10" onClick={() => setMobileFiltersOpen(false)} aria-hidden="true" />
                <div className="absolute left-0 top-0 bottom-0 w-72 bg-[#f6f3f1] border-r border-[#cecac8] p-5 overflow-y-auto" role="dialog" aria-modal="true" aria-label={t("filters.title")}>
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-[10px] text-[#797776] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>{t("filters.title")}</h2>
                    <button onClick={() => setMobileFiltersOpen(false)} aria-label={t("drawer.close")} className="text-[#797776] text-lg leading-none hover:text-[#242424]">×</button>
                  </div>
                  <LogbookFilters
                    entries={logbookEntries}
                    filters={filters}
                    onChange={setFilters}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-5">
              <LogbookSearch
                value={search}
                onChange={setSearch}
                count={filtered.length}
                total={logbookEntries.length}
                sort={sort}
                onSortChange={setSort}
                inputRef={searchRef}
                activeModule={filters.module !== "All" ? filters.module : undefined}
                activeSearch={search || undefined}
              />

              {/* Active filter chips */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 items-center" aria-label={t("filters.activeFilters")}>
                  {search && (
                    <FilterChip label={`"${search}"`} onRemove={() => setSearch("")} />
                  )}
                  {filters.module !== "All" && (
                    <FilterChip label={filters.module} onRemove={() => setFilters((f) => ({ ...f, module: "All" }))} />
                  )}
                  {filters.categories.map((cat) => (
                    <FilterChip key={cat} label={cat} onRemove={() => setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== cat) }))} />
                  ))}
                  {filters.relevance !== "All" && (
                    <FilterChip label={filters.relevance} onRemove={() => setFilters((f) => ({ ...f, relevance: "All" }))} />
                  )}
                  {filters.activeTag && (
                    <FilterChip label={`#${filters.activeTag}`} onRemove={() => setFilters((f) => ({ ...f, activeTag: "" }))} />
                  )}
                  {filters.contentStatus !== "all" && (
                    <FilterChip label={filters.contentStatus} onRemove={() => setFilters((f) => ({ ...f, contentStatus: "all" }))} />
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="text-[11px] text-[#9b3030] hover:text-[#7a2020] transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t("filters.clearAll")}
                  </button>
                </div>
              )}

              {/* Pinned favorites strip */}
              {pinnedEntries.length > 0 && (
                <section aria-labelledby="favorites-label">
                  <p id="favorites-label" className="text-[10px] text-[#797776] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                    ★ {t("favorites.title")}
                  </p>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {pinnedEntries.map((entry) => (
                      <LogbookCard
                        key={entry.id}
                        entry={entry}
                        onSelect={setSelectedEntry}
                        onTagClick={handleTagClick}
                        onTcodeClick={handleTcodeClick}
                        isFavorited={true}
                        onFavorite={toggleFavorite}
                        collectionsState={collectionsState}
                        savedCollectionIds={entryCollectionMap[entry.id] ?? []}
                        onToggleCollection={handleToggleCollection}
                        onCreateCollection={handleCreateCollection}
                      />
                    ))}
                  </div>
                  <div className="border-t border-[#cecac8] my-6" />
                </section>
              )}

              {/* No-results state */}
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-[#797776]">
                  <p
                    className="mb-3 font-normal text-[#242424]"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "40px", fontWeight: 400 }}
                  >
                    {t("noResults.title")}
                  </p>
                  <p className="text-sm mb-6 text-[#797776]" style={{ fontFamily: "var(--font-mono)" }}>{t("noResults.body")}</p>
                  {hasActiveFilters && (
                    <div className="space-y-3">
                      {(search || filters.module !== "All" || filters.categories.length > 0) && (
                        <p className="text-xs text-[#797776]" style={{ fontFamily: "var(--font-mono)" }}>
                          {t("noResults.activeFilters")}{" "}
                          {[search && `"${search}"`, filters.module !== "All" && filters.module, ...filters.categories].filter(Boolean).join(", ")}
                        </p>
                      )}
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-white bg-[#2b59d1] hover:bg-[#1e46b0] px-8 py-2.5 transition-colors"
                        style={{ fontFamily: "var(--font-mono)", borderRadius: "100px" }}
                      >
                        {t("noResults.resetAll")}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4" role="list" aria-label="T-code entries">
                  {filtered.map((entry) => (
                    <div key={entry.id} role="listitem">
                      <LogbookCard
                        entry={entry}
                        onSelect={setSelectedEntry}
                        onTagClick={handleTagClick}
                        onTcodeClick={handleTcodeClick}
                        isFavorited={favorites.has(entry.id)}
                        onFavorite={toggleFavorite}
                        collectionsState={collectionsState}
                        savedCollectionIds={entryCollectionMap[entry.id] ?? []}
                        onToggleCollection={handleToggleCollection}
                        onCreateCollection={handleCreateCollection}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ── Entry Drawer ─────────────────────────────────────────────────────── */}
      <EntryDrawer
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onTcodeFilter={handleTcodeClick}
        collectionsState={collectionsState}
        savedCollectionIds={selectedEntry ? (entryCollectionMap[selectedEntry.id] ?? []) : []}
        onToggleCollection={handleToggleCollection}
        onCreateCollection={handleCreateCollection}
      />

      {/* ── Keyboard Shortcuts Modal ──────────────────────────────────────────── */}
      {shortcutsOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#242424]/15 backdrop-blur-[2px] z-50"
            onClick={() => setShortcutsOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t("shortcuts.title")}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-[#f6f3f1] border border-[#cecac8] z-50 overflow-hidden"
            style={{ borderRadius: "40px" }}
          >
            <div className="bg-[#cfdaf5] px-6 py-4 border-b border-[#cecac8] flex items-center justify-between">
              <h2
                className="text-sm text-[#242424]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t("shortcuts.title")}
              </h2>
              <button
                onClick={() => setShortcutsOpen(false)}
                aria-label={t("drawer.close")}
                className="text-[#797776] hover:text-[#242424] text-lg leading-none"
              >
                ×
              </button>
            </div>
            <div className="px-6 py-5 space-y-3">
              {[
                { key: "/", desc: t("shortcuts.focusSearch") },
                { key: "Esc", desc: t("shortcuts.closeDrawer") },
                { key: "?", desc: t("shortcuts.toggleShortcuts") },
              ].map(({ key, desc }) => (
                <div key={key} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-[#4e4d4d]" style={{ fontFamily: "var(--font-mono)" }}>{desc}</span>
                  <kbd
                    className="text-[11px] text-[#2b59d1] bg-[#cfdaf5] border border-[#cecac8] px-2.5 py-1"
                    style={{ fontFamily: "var(--font-mono)", borderRadius: "6px" }}
                  >
                    {key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function StatPill({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span
        className={accent ? "text-[#2b59d1]" : "text-[#242424]"}
        style={{ fontFamily: "var(--font-mono)", fontSize: "17px", fontVariantNumeric: "tabular-nums" }}
        aria-label={`${value} ${label}`}
      >
        {value}
      </span>
      <span className="text-[11px] text-[#797776] uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>{label}</span>
    </div>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] border border-[#cecac8] text-[#4e4d4d] px-2.5 py-1"
      style={{ fontFamily: "var(--font-mono)", borderRadius: "9999px" }}
    >
      {label}
      <button
        onClick={onRemove}
        aria-label={`Remove filter: ${label}`}
        className="text-[#797776] hover:text-[#242424] leading-none text-sm"
      >
        ×
      </button>
    </span>
  );
}
