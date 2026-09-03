"use client";

/**
 * ProcessesTab — groups AWP processes by SAP module and renders them
 * as collapsible accordion sections (PP, QM, MM, …).
 *
 * Progress stored in localStorage under key 'awp-process-progress'.
 * Schema: Record<processId, { completedSteps: number[], lastVisited: string }>
 */

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  processes,
  allProcessRoles,
  type Process,
  type ProcessModule,
  MODULE_LABELS,
  MODULE_ORDER,
} from "@/data/processes";
import { ProcessDetail } from "./ProcessDetail";
import { ProcessChat } from "./ProcessChat";
import { useT } from "@/lib/i18n";
import { useLang } from "@/context/LangContext";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProcessProgress {
  completedSteps: number[];
  lastVisited: string;
}

type AllProgress = Record<string, ProcessProgress>;

const STORAGE_KEY = "awp-process-progress";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function loadProgress(): AllProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveProgress(p: AllProgress): void {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch {}
}

function normalise(s: string): string {
  return s.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Groups a flat array of processes by their `module` field,
 * preserving the canonical MODULE_ORDER for rendering.
 */
function groupByModule(
  list: Process[]
): Array<{ module: ProcessModule; label: string; items: Process[] }> {
  const map = new Map<ProcessModule, Process[]>();
  for (const p of list) {
    const bucket = map.get(p.module) ?? [];
    bucket.push(p);
    map.set(p.module, bucket);
  }
  return MODULE_ORDER
    .filter((mod) => map.has(mod))
    .map((mod) => ({
      module: mod,
      label: MODULE_LABELS[mod],
      items: map.get(mod)!,
    }));
}

interface SearchMatch {
  processId: string;
  stepNumber?: number;
  stepTitleEN?: string;
  tCode?: string;
}

// ─── Module colour palette ────────────────────────────────────────────────────

const MODULE_COLORS: Record<ProcessModule, { bg: string; text: string; border: string; accent: string }> = {
  PP:   { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5", accent: "#1C3A2B" },
  QM:   { bg: "#FEF9E7", text: "#7A5E0A", border: "#E8D585", accent: "#C49A1A" },
  MM:   { bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8", accent: "#2563EB" },
  PM:   { bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8", accent: "#7C3AED" },
  SD:   { bg: "#E0F4F8", text: "#0C4A6E", border: "#7DD3FC", accent: "#0284C7" },
  HCM:  { bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4", accent: "#DC2626" },
  FICO: { bg: "#E0F5EC", text: "#14532D", border: "#86EFAC", accent: "#16A34A" },
  TM:   { bg: "#FFF7E0", text: "#7A4A0A", border: "#F5C87A", accent: "#D97706" },
  EHS:  { bg: "#F0E0E8", text: "#6B1F40", border: "#E8A4C0", accent: "#BE185D" },
};

// ─── Module Badge ─────────────────────────────────────────────────────────────

function ModuleBadge({ module }: { module: ProcessModule }) {
  const c = MODULE_COLORS[module];
  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
      style={{ background: c.accent, color: "#fff" }}
    >
      {module}
    </span>
  );
}

// ─── Highlight helper ─────────────────────────────────────────────────────────

function highlightText(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-yellow-200 text-inherit rounded px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

// ─── Process Card ─────────────────────────────────────────────────────────────

interface CardProps {
  process: Process;
  progress: ProcessProgress | undefined;
  lang: "EN" | "AR";
  searchQuery: string;
  matchingSteps: SearchMatch[];
  onOpen: (id: string, jumpStep?: number) => void;
}

function ProcessCard({ process: p, progress, lang, searchQuery: hq, matchingSteps, onOpen }: CardProps) {
  const t = useT();
  const done = progress?.completedSteps.length ?? 0;
  const total = p.steps.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const isComplete = done === total && total > 0;
  const title = lang === "AR" ? p.titleAR : p.titleEN;
  const desc = lang === "AR" ? p.descriptionAR : p.descriptionEN;
  const mc = MODULE_COLORS[p.module];

  return (
    <button
      onClick={() => onOpen(p.id)}
      className="text-left border rounded-2xl p-5 bg-[#FAFAF8] hover:bg-[#F0F6EE] transition-all hover:shadow-md group focus:outline-none focus:ring-2 focus:ring-[#1C3A2B]"
      style={{ borderColor: isComplete ? mc.accent : "#D9D4C8" }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="text-2xl" aria-hidden>{p.icon}</span>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          <ModuleBadge module={p.module} />
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#EDE9E1] text-[#6B7A6F]">
            {p.duration}
          </span>
          {isComplete && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4EFE0] text-[#1C3A2B]">
              ✓ {t("proc.completed")}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-base font-medium text-[#1C3A2B] mb-1 leading-snug"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
      >
        {hq ? highlightText(title, hq) : title}
      </h3>
      <p className="text-xs text-[#6B7A6F] leading-relaxed mb-3 line-clamp-2" dir={lang === "AR" ? "rtl" : "ltr"}>
        {desc}
      </p>

      {/* Role tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {p.roles.map((role) => (
          <span key={role} className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE9E1] text-[#6B7A6F]">
            {role}
          </span>
        ))}
      </div>

      {/* Matching steps */}
      {matchingSteps.length > 0 && (
        <div className="mb-3 space-y-1">
          {matchingSteps.map((m) => (
            <button
              key={m.stepNumber}
              onClick={(e) => { e.stopPropagation(); onOpen(p.id, m.stepNumber); }}
              className="text-[10px] text-[#4E7862] hover:text-[#1C3A2B] flex items-center gap-1 transition-colors"
            >
              <span>↳ {t("proc.foundInStep")} {m.stepNumber}</span>
              {m.tCode && <code className="bg-[#E8F0E4] px-1 rounded">{m.tCode}</code>}
              {m.stepTitleEN && <span className="text-[#6B7A6F]">— {m.stepTitleEN}</span>}
            </button>
          ))}
        </div>
      )}

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-[#6B7A6F]">{p.steps.length} {t("proc.steps")}</span>
          <span className="text-[10px] font-medium text-[#1C3A2B]">{done}/{total}</span>
        </div>
        <div className="h-1.5 bg-[#D9D4C8] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, background: isComplete ? mc.accent : "#1C3A2B" }}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-3 text-right">
        <span className="text-xs font-medium text-[#1C3A2B] opacity-0 group-hover:opacity-100 transition-opacity">
          {isComplete ? t("proc.review") : t("proc.start")} →
        </span>
      </div>
    </button>
  );
}

// ─── Module Accordion Section ─────────────────────────────────────────────────

interface AccordionSectionProps {
  module: ProcessModule;
  label: string;
  items: Process[];
  progress: AllProgress;
  lang: "EN" | "AR";
  searchQuery: string;
  searchMatches: Record<string, SearchMatch[]>;
  onOpen: (id: string, jumpStep?: number) => void;
  defaultOpen?: boolean;
}

function AccordionSection({
  module, label, items, progress, lang, searchQuery,
  searchMatches, onOpen, defaultOpen = true,
}: AccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const mc = MODULE_COLORS[module];

  const completedCount = items.filter((p) => {
    const prog = progress[p.id];
    return prog && prog.completedSteps.length === p.steps.length && p.steps.length > 0;
  }).length;

  return (
    <div className="border border-[#D9D4C8] rounded-2xl overflow-hidden">
      {/* Accordion header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F0F6EE]"
        style={{ background: open ? mc.bg : "#FAFAF8" }}
        aria-expanded={open}
      >
        {/* Module badge */}
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
          style={{ background: mc.accent, color: "#fff" }}
        >
          {module}
        </span>

        {/* Label + count */}
        <div className="flex-1 min-w-0">
          <span
            className="text-base font-medium"
            style={{ color: mc.text, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
          >
            {label}
          </span>
          <span className="ml-2 text-xs text-[#6B7A6F]">
            {items.length} process{items.length !== 1 ? "es" : ""}
          </span>
        </div>

        {/* Completion mini-badge */}
        {completedCount > 0 && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#D4EFE0] text-[#1C3A2B] shrink-0">
            {completedCount}/{items.length} done
          </span>
        )}

        {/* Progress bar */}
        <div className="hidden sm:block w-24 h-1.5 bg-[#D9D4C8] rounded-full overflow-hidden shrink-0">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${Math.round((completedCount / items.length) * 100)}%`, background: mc.accent }}
          />
        </div>

        {/* Chevron */}
        <span
          className="text-sm shrink-0 transition-transform duration-200"
          style={{ color: mc.text, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {/* Accordion body */}
      {open && (
        <div className="px-5 pb-5 pt-4 border-t border-[#D9D4C8]" style={{ background: "#FDFCFA" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((p) => (
              <ProcessCard
                key={p.id}
                process={p}
                progress={progress[p.id]}
                lang={lang}
                searchQuery={searchQuery}
                matchingSteps={searchMatches[p.id] ?? []}
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── ProcessesTab ─────────────────────────────────────────────────────────────

export function ProcessesTab() {
  const { lang } = useLang();
  const t = useT();
  const [progress, setProgress] = useState<AllProgress>({});
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [openProcessId, setOpenProcessId] = useState<string | null>(null);
  const [jumpToStep, setJumpToStep] = useState<number | undefined>(undefined);
  const [chatOpen, setChatOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // ── Progress handlers ──────────────────────────────────────────────────────

  const toggleStep = useCallback((processId: string, stepNumber: number) => {
    setProgress((prev) => {
      const cur = prev[processId] ?? { completedSteps: [], lastVisited: new Date().toISOString() };
      const completedSteps = cur.completedSteps.includes(stepNumber)
        ? cur.completedSteps.filter((n) => n !== stepNumber)
        : [...cur.completedSteps, stepNumber];
      const next: AllProgress = {
        ...prev,
        [processId]: { completedSteps, lastVisited: new Date().toISOString() },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  // ── Search ────────────────────────────────────────────────────────────────

  const q = normalise(search);

  const searchMatches = useMemo<Record<string, SearchMatch[]>>(() => {
    if (!q) return {};
    const result: Record<string, SearchMatch[]> = {};
    for (const p of processes) {
      const stepMatches: SearchMatch[] = p.steps
        .filter((s) =>
          normalise(s.titleEN).includes(q) ||
          normalise(s.titleAR).includes(q) ||
          (s.tCode && normalise(s.tCode).includes(q))
        )
        .map((s) => ({
          processId: p.id,
          stepNumber: s.stepNumber,
          stepTitleEN: s.titleEN,
          tCode: s.tCode,
        }));
      if (stepMatches.length > 0) result[p.id] = stepMatches;
    }
    return result;
  }, [q]);

  const visibleProcesses = useMemo(() => {
    return processes.filter((p) => {
      if (roleFilter !== "All" && !p.roles.includes(roleFilter)) return false;
      if (!q) return true;
      const titleMatch =
        normalise(p.titleEN).includes(q) ||
        normalise(p.titleAR).includes(q) ||
        normalise(p.descriptionEN).includes(q);
      const stepMatch = Boolean(searchMatches[p.id]?.length);
      return titleMatch || stepMatch;
    });
  }, [q, roleFilter, searchMatches]);

  /** Groups filtered processes by module, in canonical order */
  const groups = useMemo(() => groupByModule(visibleProcesses), [visibleProcesses]);

  // ── Detail view ───────────────────────────────────────────────────────────

  const openProcess = openProcessId ? processes.find((p) => p.id === openProcessId) : null;

  if (openProcess) {
    return (
      <>
        <ProcessDetail
          process={openProcess}
          progress={progress[openProcess.id]}
          lang={lang}
          onToggleStep={(stepNum) => toggleStep(openProcess.id, stepNum)}
          onBack={() => { setOpenProcessId(null); setJumpToStep(undefined); }}
          initialStep={jumpToStep}
        />
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-20 right-6 z-40 flex items-center gap-2 bg-[#1C3A2B] text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg hover:bg-[#2D5A42] transition-colors"
        >
          💬 {t("proc.chat.button")}
        </button>
        {chatOpen && (
          <ProcessChat
            processId={openProcess.id}
            lang={lang === "AR" ? "ar" : "en"}
            onClose={() => setChatOpen(false)}
          />
        )}
      </>
    );
  }

  // ── Summary stats ─────────────────────────────────────────────────────────

  const totalCompleted = processes.filter((p) => {
    const prog = progress[p.id];
    return prog && prog.completedSteps.length === p.steps.length && p.steps.length > 0;
  }).length;

  // ── Grouped accordion view ────────────────────────────────────────────────

  return (
    <div>
      {/* Section header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
            {t("proc.step1")}
          </p>
          <h3
            className="text-2xl font-light text-[#1C3A2B]"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {t("proc.heading")}
          </h3>
          <p className="text-sm text-[#6B7A6F] mt-1">
            {processes.length} processes across {MODULE_ORDER.filter((m) => processes.some((p) => p.module === m)).length} SAP modules
            {totalCompleted > 0 && (
              <span className="ml-2 text-[#4E7862] font-medium">· {totalCompleted} completed</span>
            )}
          </p>
        </div>
        {/* Search */}
        <div className="relative sm:w-64 shrink-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">🔍</span>
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("proc.search.placeholder")}
            dir={lang === "AR" ? "rtl" : "ltr"}
            className="w-full pl-9 pr-8 py-2.5 text-sm border border-[#D9D4C8] rounded-xl bg-[#FAFAF8] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] hover:text-[#1C3A2B] text-lg leading-none"
            >×</button>
          )}
        </div>
      </div>

      {/* Role filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
        {["All", ...allProcessRoles].map((role) => (
          <button
            key={role}
            onClick={() => setRoleFilter(role)}
            className="shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap"
            style={
              roleFilter === role
                ? { background: "#1C3A2B", color: "white", borderColor: "#1C3A2B" }
                : { background: "#FAFAF8", color: "#6B7A6F", borderColor: "#D9D4C8" }
            }
          >
            {role === "All" ? t("proc.filter.all") : role}
          </button>
        ))}
      </div>

      {/* Groups / accordion */}
      {groups.length === 0 ? (
        <div className="text-center py-16">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-4 opacity-40">
            <circle cx="32" cy="32" r="28" stroke="#1C3A2B" strokeWidth="2" />
            <path d="M22 32h20M32 22v20" stroke="#1C3A2B" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className="text-[#1C3A2B] font-medium">{t("proc.noResults.title")}</p>
          <p className="text-sm text-[#6B7A6F] mt-1">{t("proc.noResults.body")}</p>
        </div>
      ) : (
        <div className="space-y-3 pb-36">
          {groups.map((group, i) => (
            <AccordionSection
              key={group.module}
              module={group.module}
              label={group.label}
              items={group.items}
              progress={progress}
              lang={lang}
              searchQuery={q}
              searchMatches={searchMatches}
              onOpen={(id, step) => { setOpenProcessId(id); setJumpToStep(step); }}
              defaultOpen={i === 0 || Boolean(q) || Boolean(roleFilter !== "All")}
            />
          ))}
        </div>
      )}

      {/* Chat FAB */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-20 right-6 z-40 flex items-center gap-2 bg-[#1C3A2B] text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg hover:bg-[#2D5A42] transition-colors"
      >
        💬 {t("proc.chat.button")}
      </button>
      {chatOpen && (
        <ProcessChat
          processId={openProcessId ?? undefined}
          lang={lang === "AR" ? "ar" : "en"}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  );
}

// ─── Completed Processes (used by hub page CompletedTab) ──────────────────────

export function useProcessProgress(): AllProgress {
  const [progress, setProgress] = useState<AllProgress>({});
  useEffect(() => { setProgress(loadProgress()); }, []);
  return progress;
}

export function getCompletedProcesses(progress: AllProgress): Process[] {
  return processes.filter((p) => {
    const prog = progress[p.id];
    return prog && prog.completedSteps.length === p.steps.length && p.steps.length > 0;
  });
}
