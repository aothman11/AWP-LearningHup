"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { logbookEntries } from "@/data/qm-logbook";
import { learningPaths } from "@/data/learning-paths";
import Link from "next/link";
import { ProcessesTab, useProcessProgress, getCompletedProcesses } from "@/components/hub/ProcessesTab";
import { BusinessProcessesTab } from "@/components/hub/BusinessProcessesTab";
import { ProcessFlowTab } from "@/components/hub/ProcessFlowTab";
import { CommonErrorsTab } from "@/components/hub/CommonErrorsTab";
import { useLang } from "@/context/LangContext";
import { useT } from "@/lib/i18n";

// ── Types ──────────────────────────────────────────────────────────────────
interface ProgressState {
  visited: Record<string, boolean>;
  completed: Record<string, boolean>;
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem("awp-hub-progress");
    return raw ? JSON.parse(raw) : { visited: {}, completed: {} };
  } catch { return { visited: {}, completed: {} }; }
}

function saveProgress(state: ProgressState) {
  try { localStorage.setItem("awp-hub-progress", JSON.stringify(state)); } catch {}
}

// ── Module colours ─────────────────────────────────────────────────────────
const MODULE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PP:      { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5" },
  QM:      { bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585" },
  "PP/QM": { bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8" },
  MM:      { bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8" },
  PM:      { bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8" },
  HCM:     { bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4" },
  FICO:    { bg: "#E0F5EC", text: "#14532D", border: "#86EFAC" },
  TM:      { bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A" },
  EHS:     { bg: "#F0E0E8", text: "#6B1F40", border: "#E8A4C0" },
};

const MODULE_TABS = [
  { id: "All",  label: "All Modules", icon: "🔗" },
  { id: "PP",   label: "PP",          icon: "🏭" },
  { id: "QM",   label: "QM",          icon: "✅" },
  { id: "MM",   label: "MM",          icon: "📦" },
  { id: "PM",   label: "PM",          icon: "🔧" },
  { id: "HCM",  label: "HCM",         icon: "👥" },
  { id: "FICO", label: "FICO",        icon: "💰" },
  { id: "TM",   label: "TM",          icon: "🚚" },
  { id: "EHS",  label: "EHS",         icon: "⛑️" },
] as const;

const PHASE_ICONS: Record<string, string> = {
  planning:   "📋",
  production: "🏭",
  quality:    "🔍",
  all:        "🔗",
};

// ── Tab definition ─────────────────────────────────────────────────────────
type HubTab = "processes" | "business" | "flow" | "errors" | "completed";

const HUB_TABS: { id: HubTab; label: string }[] = [
  { id: "processes", label: "Processes" },
  { id: "business",  label: "Business Processes" },
  { id: "flow",      label: "Process Flow" },
  { id: "errors",    label: "Common Errors" },
  { id: "completed", label: "Completed" },
];

export default function HubPage() {
  const { lang, toggle: toggleLang } = useLang();
  const t = useT();
  const [progress, setProgress] = useState<ProgressState>({ visited: {}, completed: {} });
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<HubTab>("processes");

  // Command Centre modal state
  const [showCmd, setShowCmd] = useState(false);
  const [cmdModule, setCmdModule] = useState<string>("All");
  const [cmdSearch, setCmdSearch] = useState("");
  const cmdModalRef = useRef<HTMLDivElement>(null);

  // Process progress
  const processProgress = useProcessProgress();
  const completedProcesses = useMemo(
    () => getCompletedProcesses(processProgress),
    [processProgress]
  );

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // Close modal on outside click
  useEffect(() => {
    if (!showCmd) return;
    function handler(e: MouseEvent) {
      if (cmdModalRef.current && !cmdModalRef.current.contains(e.target as Node)) {
        setShowCmd(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showCmd]);

  // Close modal on Esc
  useEffect(() => {
    if (!showCmd) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setShowCmd(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [showCmd]);

  // ── Filtered entries for Command Centre ───────────────────────────────────
  const cmdEntries = useMemo(() => {
    const q = cmdSearch.trim().toLowerCase();
    return logbookEntries.filter((e) => {
      const matchesMod = cmdModule === "All" || e.module === cmdModule || e.module.startsWith(cmdModule + "/");
      const matchesSearch = !q ||
        e.transactionCode.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        (e.description ?? "").toLowerCase().includes(q);
      return matchesMod && matchesSearch;
    });
  }, [cmdModule, cmdSearch]);

  // ── Stats ─────────────────────────────────────────────────────────────────
  const awpHighCount = useMemo(() => logbookEntries.filter((e) => e.awpRelevance === "High").length, []);
  const stats = useMemo(() => {
    const completedCount = Object.values(progress.completed).filter(Boolean).length;
    const visitedCount = Object.values(progress.visited).filter(Boolean).length;
    return {
      total: logbookEntries.length,
      awpHigh: awpHighCount,
      paths: learningPaths.length,
      completed: completedCount,
      visited: visitedCount,
    };
  }, [progress, awpHighCount]);

  function getPathProgress(pathId: string) {
    const path = learningPaths.find((p) => p.id === pathId);
    if (!path) return { done: 0, total: 0, pct: 0 };
    const done = path.entryIds.filter((id) => progress.completed[id]).length;
    return { done, total: path.entryIds.length, pct: Math.round((done / path.entryIds.length) * 100) };
  }

  function toggleCompleted(entryId: string) {
    setProgress((prev) => {
      const next = {
        ...prev,
        visited: { ...prev.visited, [entryId]: true },
        completed: { ...prev.completed, [entryId]: !prev.completed[entryId] },
      };
      saveProgress(next);
      return next;
    });
  }

  const selectedPathData = selectedPath ? learningPaths.find((p) => p.id === selectedPath) : null;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          {/* Left: logo + title */}
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/alwatania-logo-white.png"
              alt="Al-Watania Poultry"
              className="h-10 w-auto shrink-0"
            />
            <div className="min-w-0">
              <h1
                className="text-xl font-light text-[#1C3A2B] leading-none tracking-wide truncate"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                AWP SAP Central Learning Hub
              </h1>
              <p className="text-xs text-[#6B7A6F] mt-0.5">Al-Watania Poultry · Internal Learning Platform</p>
            </div>
          </div>

          {/* Right: prompt + T-Code Library button + Lang toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:block text-xs text-[#6B7A6F] italic">Do you want to learn more?</span>
            <button
              onClick={() => { setShowCmd(true); setCmdModule("All"); setCmdSearch(""); }}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-[#1C3A2B] text-[#F7F5F0] rounded-full hover:bg-[#2C5040] transition-colors"
            >
              <span>📚</span>
              <span>T-Code Library</span>
            </button>
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center text-xs font-medium border border-[#D9D4C8] hover:border-[#4E7862] bg-[#F7F5F0] hover:bg-[#E8F0E4] rounded-full transition-colors overflow-hidden"
              aria-label="Switch language"
            >
              <span className={`px-3 py-1.5 transition-colors ${lang === "EN" ? "bg-[#1C3A2B] text-[#F7F5F0]" : "text-[#6B7A6F]"}`}>EN</span>
              <span className={`px-3 py-1.5 transition-colors ${lang === "AR" ? "bg-[#1C3A2B] text-[#F7F5F0]" : "text-[#6B7A6F]"}`}>AR</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── T-Code Library Modal ──────────────────────────────────────────────── */}
      {showCmd && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[72px] px-4 pb-4" style={{ background: "rgba(28,58,43,0.45)", backdropFilter: "blur(2px)" }}>
          <div
            ref={cmdModalRef}
            className="bg-[#FAFAF8] rounded-2xl shadow-2xl border border-[#D9D4C8] w-full max-w-5xl flex flex-col"
            style={{ maxHeight: "calc(100vh - 96px)" }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#D9D4C8]">
              <div>
                <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-0.5">Command Centre</p>
                <h2 className="text-xl font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  SAP T-Code Library
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">🔍</span>
                  <input
                    type="search"
                    value={cmdSearch}
                    onChange={(e) => setCmdSearch(e.target.value)}
                    placeholder="Search T-codes…"
                    className="pl-8 pr-3 py-2 text-sm border border-[#D9D4C8] rounded-lg bg-white text-[#2A2E2B] placeholder:text-[#9BA89F] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors w-52"
                    autoFocus
                  />
                </div>
                <button
                  onClick={() => setShowCmd(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-[#6B7A6F] hover:bg-[#E8F0E4] hover:text-[#1C3A2B] transition-colors text-lg leading-none"
                  aria-label="Close"
                >×</button>
              </div>
            </div>

            {/* Module filter tabs */}
            <div className="flex gap-1 px-6 py-3 border-b border-[#D9D4C8] overflow-x-auto">
              {MODULE_TABS.map((mod) => {
                const count = mod.id === "All"
                  ? logbookEntries.length
                  : logbookEntries.filter((e) => e.module === mod.id || e.module.startsWith(mod.id + "/")).length;
                const mc = mod.id !== "All" ? MODULE_COLORS[mod.id] : null;
                const active = cmdModule === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setCmdModule(mod.id)}
                    className="text-xs px-3 py-1.5 rounded-full border transition-colors shrink-0 font-medium"
                    style={
                      active
                        ? mc
                          ? { background: mc.bg, color: mc.text, borderColor: mc.border }
                          : { background: "#1C3A2B", color: "#F7F5F0", borderColor: "#1C3A2B" }
                        : { background: "#F7F5F0", color: "#6B7A6F", borderColor: "#D9D4C8" }
                    }
                  >
                    {mod.icon} {mod.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* T-code grid */}
            <div className="overflow-y-auto flex-1 p-6">
              {cmdEntries.length === 0 ? (
                <p className="text-sm text-[#6B7A6F] py-8 text-center">
                  No T-codes match{cmdSearch ? ` "${cmdSearch}"` : " this filter"}.{" "}
                  {cmdSearch && (
                    <button onClick={() => setCmdSearch("")} className="underline hover:text-[#1C3A2B] transition-colors">Clear</button>
                  )}
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cmdEntries.map((entry) => {
                    const mc = MODULE_COLORS[entry.module] ?? MODULE_COLORS["PP/QM"];
                    const done = progress.completed[entry.id];
                    return (
                      <div
                        key={entry.id}
                        className="bg-white border border-[#D9D4C8] rounded-xl p-4 hover:border-[#4E7862] hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <code className="text-sm font-mono font-semibold text-[#1C3A2B]">{entry.transactionCode}</code>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-medium px-1.5 py-0.5 rounded" style={{ background: mc.bg, color: mc.text }}>{entry.module}</span>
                            <button
                              onClick={() => toggleCompleted(entry.id)}
                              title={done ? "Mark incomplete" : "Mark complete"}
                              className="w-5 h-5 rounded-full border flex items-center justify-center transition-colors text-[10px]"
                              style={done ? { background: "#1C3A2B", borderColor: "#1C3A2B", color: "white" } : { background: "transparent", borderColor: "#D9D4C8", color: "#6B7A6F" }}
                            >✓</button>
                          </div>
                        </div>
                        <p className="text-sm text-[#2A2E2B] font-medium leading-snug mb-1">{entry.title}</p>
                        <p className="text-[11px] text-[#6B7A6F] leading-relaxed line-clamp-2">{entry.description}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-[10px] text-[#6B7A6F]">{entry.category}</span>
                          <Link
                            href={`/logbook/${entry.id}`}
                            onClick={() => setShowCmd(false)}
                            className="text-[10px] text-[#4E7862] opacity-0 group-hover:opacity-100 hover:text-[#1C3A2B] transition-all"
                          >Deep dive →</Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal footer */}
            <div className="px-6 py-3 border-t border-[#D9D4C8] flex items-center justify-between">
              <span className="text-xs text-[#6B7A6F]">{cmdEntries.length} T-codes {cmdModule !== "All" ? `in ${cmdModule}` : "across all modules"}</span>
              <button onClick={() => setShowCmd(false)} className="text-xs text-[#4E7862] hover:text-[#1C3A2B] transition-colors">Close ×</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab Bar ──────────────────────────────────────────────────────────── */}
      <nav className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-[73px] z-20" aria-label="Hub navigation">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {HUB_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-current={activeTab === tab.id ? "page" : undefined}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors shrink-0 ${
                activeTab === tab.id
                  ? "border-[#1C3A2B] text-[#1C3A2B]"
                  : "border-transparent text-[#6B7A6F] hover:text-[#2A2E2B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C3A2B] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-3">
            Al-Watania Poultry · SAP S/4HANA
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Don&apos;t Guess. Everything You Need Is Here.
            <span className="block text-3xl sm:text-4xl mt-1 text-[#A8C4A8]">
              لا تحتار، كل اللي تحتاجه هنا.
            </span>
          </h2>
          <p className="text-[#A8C4A8] text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            Role-based learning paths, curated SAP reference, and progress tracking —
            everything you need across all SAP modules to deliver AWP-aligned results.
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: stats.total,    label: "T-Codes" },
              { value: stats.awpHigh,  label: "AWP Critical" },
              { value: stats.paths,    label: "Learning Paths" },
              { value: stats.completed, label: "Completed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-3xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{value}</div>
                <div className="text-xs text-[#C8DFC5] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress Banner ───────────────────────────────────────────────────── */}
      {stats.visited > 0 && (
        <div className="bg-[#E8F0E4] border-b border-[#C8DFC5]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
            <span className="text-xs font-semibold text-[#1C3A2B]">Your progress</span>
            <div className="flex-1 max-w-xs h-1.5 bg-[#C8DFC5] rounded-full overflow-hidden">
              <div className="h-full bg-[#1C3A2B] rounded-full transition-all" style={{ width: `${Math.round((stats.completed / stats.awpHigh) * 100)}%` }} />
            </div>
            <span className="text-xs text-[#4E7862]">{stats.completed} of {stats.awpHigh} AWP-critical T-codes completed</span>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">

        {/* ── Processes tab ─────────────────────────────────────────────────── */}
        {activeTab === "processes" && <ProcessesTab />}

        {/* ── Business Processes tab ────────────────────────────────────────── */}
        {activeTab === "business" && <BusinessProcessesTab />}

        {/* ── Process Flow tab ──────────────────────────────────────────────── */}
        {activeTab === "flow" && <ProcessFlowTab />}

        {/* ── Common Errors tab ─────────────────────────────────────────────── */}
        {activeTab === "errors" && <CommonErrorsTab />}

        {/* ── Completed tab ─────────────────────────────────────────────────── */}
        {activeTab === "completed" && (
          <div>
            <div className="mb-6">
              <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">{t("hub.tabs.completed")}</p>
              <h3 className="text-2xl font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Your Completed Processes</h3>
              <p className="text-sm text-[#6B7A6F] mt-1">Processes you have worked through from start to finish.</p>
            </div>
            {completedProcesses.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-[#D9D4C8] rounded-2xl">
                <p className="text-[#1C3A2B] font-medium">{t("completed.empty.title")}</p>
                <p className="text-sm text-[#6B7A6F] mt-1">{t("completed.empty.body")}</p>
                <button onClick={() => setActiveTab("processes")} className="mt-4 text-sm text-[#4E7862] hover:text-[#1C3A2B] underline transition-colors">
                  Browse Processes →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {completedProcesses.map((p) => (
                  <div key={p.id} className="border border-[#4E7862] rounded-2xl p-5 bg-[#F4FAF4]">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#D4EFE0] text-[#1C3A2B]">✓ Completed</span>
                    </div>
                    <h4 className="text-base font-medium text-[#1C3A2B] mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}>
                      {lang === "AR" ? p.titleAR : p.titleEN}
                    </h4>
                    <p className="text-xs text-[#6B7A6F] mb-3">{p.duration} · {p.steps.length} steps · {p.module}</p>
                    <button onClick={() => setActiveTab("processes")} className="text-xs font-medium text-[#4E7862] hover:text-[#1C3A2B] transition-colors">Review →</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#D9D4C8] mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between gap-4 text-xs text-[#6B7A6F]">
          <span>AWP Central Learning Hub · SAP S/4HANA</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/process-flow" className="hover:text-[#1C3A2B] transition-colors">Process Flow</Link>
            <Link href="/about" className="hover:text-[#1C3A2B] transition-colors">About</Link>
            <Link href="/faq" className="hover:text-[#1C3A2B] transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-[#1C3A2B] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1C3A2B] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
