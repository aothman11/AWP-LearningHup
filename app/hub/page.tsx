"use client";

import { useState, useMemo, useEffect } from "react";
import { logbookEntries } from "@/data/qm-logbook";
import { learningPaths } from "@/data/learning-paths";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────
interface ProgressState {
  visited: Record<string, boolean>;  // entryId → visited
  completed: Record<string, boolean>; // entryId → completed
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

// ── Helpers ────────────────────────────────────────────────────────────────
const MODULE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PP:    { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5" },
  QM:    { bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585" },
  "PP/QM": { bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8" },
};

const PHASE_ICONS: Record<string, string> = {
  planning:   "📋",
  production: "🏭",
  quality:    "🔍",
  all:        "🔗",
};

const KNOWLEDGE_AREAS = [
  { id: "MRP",            label: "MRP & Demand Planning",    icon: "📈", module: "PP",   desc: "Material Requirements Planning, demand signals, exception management" },
  { id: "Production",     label: "Production Execution",     icon: "⚙️", module: "PP",   desc: "Production orders, confirmations, capacity planning, shop-floor" },
  { id: "Quality",        label: "Quality Management",       icon: "✅", module: "QM",   desc: "Inspection lots, results recording, usage decisions, notifications" },
  { id: "Master Data",    label: "Master Data & Config",     icon: "🗄️", module: "PP",   desc: "BOMs, routings, inspection plans, quality characteristics" },
  { id: "Procurement",    label: "Procurement & GR",         icon: "📦", module: "PP",   desc: "Purchase orders, goods receipts, backflush error handling" },
  { id: "Reporting",      label: "Reporting & Analytics",    icon: "📊", module: "PP/QM", desc: "MRP exceptions, capacity overview, quality control center" },
];

export default function HubPage() {
  const [progress, setProgress] = useState<ProgressState>({ visited: {}, completed: {} });
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [activeArea, setActiveArea] = useState<string | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // ── AWP High entries ───────────────────────────────────────────────────
  const awpHighEntries = useMemo(
    () => logbookEntries.filter((e) => e.awpRelevance === "High"),
    []
  );

  // ── Stats ─────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const visitedCount = Object.values(progress.visited).filter(Boolean).length;
    const completedCount = Object.values(progress.completed).filter(Boolean).length;
    return {
      total: logbookEntries.length,
      awpHigh: awpHighEntries.length,
      paths: learningPaths.length,
      visited: visitedCount,
      completed: completedCount,
    };
  }, [progress, awpHighEntries.length]);

  // ── Path progress ──────────────────────────────────────────────────────
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
  const filteredAwp = activeArea
    ? awpHighEntries.filter((e) => e.category === activeArea || e.processArea === activeArea)
    : awpHighEntries;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1C3A2B] flex items-center justify-center text-white text-xs font-bold shrink-0">
              AWP
            </div>
            <div>
              <h1
                className="text-xl font-light text-[#1C3A2B] leading-none tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                AWP Central Learning Hub
              </h1>
              <p className="text-xs text-[#6B7A6F] mt-0.5">SAP PP/QM · Advanced Work Packaging</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/logbook"
              className="text-xs text-[#6B7A6F] hover:text-[#1C3A2B] border border-[#D9D4C8] hover:border-[#4E7862] bg-[#F7F5F0] hover:bg-[#E8F0E4] px-3 py-1.5 rounded-full transition-colors"
            >
              T-Code Library →
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C3A2B] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-3">
            Advanced Work Packaging · SAP S/4HANA
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Your structured path to AWP mastery in SAP PP/QM
          </h2>
          <p className="text-[#A8C4A8] text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            Role-based learning paths, curated T-code reference, and progress tracking —
            everything a PP planner, QM inspector, or SAP consultant needs to deliver AWP-aligned production.
          </p>

          {/* Hero stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: stats.total,   label: "T-Codes" },
              { value: stats.awpHigh, label: "AWP Critical" },
              { value: stats.paths,   label: "Learning Paths" },
              { value: stats.completed, label: "Completed" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div
                  className="text-3xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {value}
                </div>
                <div className="text-xs text-[#C8DFC5] mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress Banner (if any progress) ───────────────────────────────── */}
      {stats.visited > 0 && (
        <div className="bg-[#E8F0E4] border-b border-[#C8DFC5]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
            <span className="text-xs font-semibold text-[#1C3A2B]">Your progress</span>
            <div className="flex-1 max-w-xs h-1.5 bg-[#C8DFC5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1C3A2B] rounded-full transition-all"
                style={{ width: `${Math.round((stats.completed / stats.awpHigh) * 100)}%` }}
              />
            </div>
            <span className="text-xs text-[#4E7862]">
              {stats.completed} of {stats.awpHigh} AWP-critical T-codes completed
            </span>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 space-y-14">

        {/* ── Learning Paths ───────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">Step 1</p>
              <h3
                className="text-2xl font-light text-[#1C3A2B]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Choose Your Learning Path
              </h3>
              <p className="text-sm text-[#6B7A6F] mt-1">Role-based sequences of T-codes — curated for how you work.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPaths.map((path) => {
              const prog = getPathProgress(path.id);
              const isSelected = selectedPath === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => setSelectedPath(isSelected ? null : path.id)}
                  aria-pressed={isSelected}
                  className="text-left border rounded-2xl p-5 transition-all hover:shadow-md"
                  style={{
                    background: isSelected ? path.color : "#FAFAF8",
                    borderColor: isSelected ? path.dotColor + "40" : "#D9D4C8",
                    boxShadow: isSelected ? `0 0 0 2px ${path.dotColor}30` : undefined,
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xl" aria-hidden>
                      {PHASE_ICONS[path.processPhase ?? "all"]}
                    </span>
                    <span
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                      style={{ background: path.dotColor + "20", color: path.dotColor }}
                    >
                      {path.estimatedDuration.EN}
                    </span>
                  </div>
                  <h4
                    className="text-base font-medium mb-1"
                    style={{ color: path.dotColor, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
                  >
                    {path.title.EN}
                  </h4>
                  <p className="text-xs text-[#6B7A6F] mb-4 leading-relaxed line-clamp-2">
                    {path.description.EN}
                  </p>
                  {/* Progress bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-[#6B7A6F]">{path.entryIds.length} T-codes</span>
                      <span className="text-[10px] font-medium" style={{ color: path.dotColor }}>
                        {prog.done}/{prog.total}
                      </span>
                    </div>
                    <div className="h-1 bg-[#D9D4C8] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${prog.pct}%`, background: path.dotColor }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected path detail */}
          {selectedPathData && (
            <div
              className="mt-4 border rounded-2xl overflow-hidden"
              style={{ borderColor: selectedPathData.dotColor + "40", background: selectedPathData.color }}
            >
              <div className="px-6 py-4 border-b" style={{ borderColor: selectedPathData.dotColor + "20" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className="text-lg font-medium"
                      style={{ color: selectedPathData.dotColor, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px" }}
                    >
                      {selectedPathData.title.EN} — Learning Sequence
                    </h4>
                    <p className="text-xs text-[#6B7A6F] mt-0.5">
                      Role: {selectedPathData.role} · {selectedPathData.estimatedDuration.EN}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="text-[#6B7A6F] hover:text-[#1C3A2B] text-xl leading-none"
                    aria-label="Close path detail"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6">
                <ol className="space-y-3">
                  {selectedPathData.entryIds.map((entryId, i) => {
                    const entry = logbookEntries.find((e) => e.id === entryId);
                    if (!entry) return null;
                    const done = progress.completed[entryId];
                    return (
                      <li key={entryId} className="flex items-center gap-3 group">
                        {/* Step number */}
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors"
                          style={{
                            background: done ? selectedPathData.dotColor : selectedPathData.dotColor + "20",
                            color: done ? "white" : selectedPathData.dotColor,
                          }}
                        >
                          {done ? "✓" : i + 1}
                        </span>
                        {/* T-code + title */}
                        <div className="flex-1 flex items-center gap-3 min-w-0">
                          <code
                            className="text-xs font-mono px-2 py-0.5 rounded shrink-0"
                            style={{ background: selectedPathData.dotColor + "15", color: selectedPathData.dotColor }}
                          >
                            {entry.transactionCode}
                          </code>
                          <span className="text-sm text-[#2A2E2B] truncate">{entry.title}</span>
                          <span
                            className="text-[10px] shrink-0 px-1.5 py-0.5 rounded"
                            style={MODULE_COLORS[entry.module]}
                          >
                            {entry.module}
                          </span>
                        </div>
                        {/* Complete toggle */}
                        <button
                          onClick={() => toggleCompleted(entryId)}
                          className="opacity-0 group-hover:opacity-100 focus:opacity-100 text-xs px-2 py-0.5 rounded transition-all border"
                          style={{
                            borderColor: selectedPathData.dotColor + "40",
                            color: done ? "#9B3030" : selectedPathData.dotColor,
                          }}
                        >
                          {done ? "Undo" : "Mark done"}
                        </button>
                        {/* View link */}
                        <Link
                          href={`/logbook/${entryId}`}
                          className="opacity-0 group-hover:opacity-100 focus:opacity-100 text-xs text-[#6B7A6F] hover:text-[#1C3A2B] shrink-0 transition-opacity"
                        >
                          View →
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          )}
        </section>

        {/* ── Knowledge Areas ───────────────────────────────────────────────── */}
        <section>
          <div className="mb-6">
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">Step 2</p>
            <h3
              className="text-2xl font-light text-[#1C3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Explore by Knowledge Area
            </h3>
            <p className="text-sm text-[#6B7A6F] mt-1">
              Filter AWP-critical T-codes by functional domain.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveArea(null)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                !activeArea
                  ? "bg-[#1C3A2B] text-white border-[#1C3A2B]"
                  : "bg-[#FAFAF8] text-[#6B7A6F] border-[#D9D4C8] hover:border-[#4E7862]"
              }`}
            >
              All AWP Critical ({stats.awpHigh})
            </button>
            {KNOWLEDGE_AREAS.map((area) => {
              const count = awpHighEntries.filter(
                (e) => e.category === area.id || e.processArea === area.id
              ).length;
              if (count === 0) return null;
              const mc = MODULE_COLORS[area.module];
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                  className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                  style={
                    activeArea === area.id
                      ? { background: mc.bg, color: mc.text, borderColor: mc.border }
                      : { background: "#FAFAF8", color: "#6B7A6F", borderColor: "#D9D4C8" }
                  }
                >
                  {area.icon} {area.label} ({count})
                </button>
              );
            })}
          </div>

          {/* AWP High T-code grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredAwp.map((entry) => {
              const done = progress.completed[entry.id];
              const mc = MODULE_COLORS[entry.module];
              return (
                <div
                  key={entry.id}
                  className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl p-4 hover:border-[#4E7862] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <code className="text-sm font-mono font-semibold text-[#1C3A2B]">
                      {entry.transactionCode}
                    </code>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[9px] font-medium px-1.5 py-0.5 rounded"
                        style={{ background: mc.bg, color: mc.text, borderColor: mc.border }}
                      >
                        {entry.module}
                      </span>
                      <button
                        onClick={() => toggleCompleted(entry.id)}
                        title={done ? "Mark incomplete" : "Mark complete"}
                        className="w-5 h-5 rounded-full border flex items-center justify-center transition-colors text-[10px]"
                        style={
                          done
                            ? { background: "#1C3A2B", borderColor: "#1C3A2B", color: "white" }
                            : { background: "transparent", borderColor: "#D9D4C8", color: "#6B7A6F" }
                        }
                      >
                        ✓
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-[#2A2E2B] font-medium leading-snug mb-1">{entry.title}</p>
                  <p className="text-[11px] text-[#6B7A6F] leading-relaxed line-clamp-2">{entry.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] text-[#6B7A6F]">{entry.category}</span>
                    <Link
                      href={`/logbook/${entry.id}`}
                      className="text-[10px] text-[#4E7862] opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-[#1C3A2B] transition-all"
                    >
                      Deep dive →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredAwp.length === 0 && (
            <p className="text-sm text-[#6B7A6F] py-8 text-center">No entries match this filter.</p>
          )}
        </section>

        {/* ── Knowledge Area Cards ─────────────────────────────────────────── */}
        <section>
          <div className="mb-6">
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">Reference</p>
            <h3
              className="text-2xl font-light text-[#1C3A2B]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Functional Knowledge Domains
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KNOWLEDGE_AREAS.map((area) => {
              const total = logbookEntries.filter(
                (e) => e.category === area.id || e.processArea === area.id
              ).length;
              const high = awpHighEntries.filter(
                (e) => e.category === area.id || e.processArea === area.id
              ).length;
              const mc = MODULE_COLORS[area.module];
              return (
                <div
                  key={area.id}
                  className="border rounded-xl p-5 hover:shadow-sm transition-all"
                  style={{ background: mc.bg, borderColor: mc.border }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{area.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold" style={{ color: mc.text }}>{area.label}</h4>
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                        style={{ background: mc.text + "20", color: mc.text }}
                      >
                        {area.module}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#6B7A6F] leading-relaxed mb-4">{area.desc}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: mc.text }}>{high} AWP critical</span>
                    <span className="text-[#6B7A6F]">{total} total T-codes</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA to full library ──────────────────────────────────────────── */}
        <section className="bg-[#1C3A2B] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl font-light text-white mb-2"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Full T-Code Library
            </h3>
            <p className="text-[#A8C4A8] text-sm">
              {stats.total} T-codes with detailed step-by-step guides, key fields, integration maps, SAP table references, and process flows.
            </p>
          </div>
          <Link
            href="/logbook"
            className="shrink-0 bg-white text-[#1C3A2B] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#E8F0E4] transition-colors"
          >
            Open Knowledge Base →
          </Link>
        </section>

      </div>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#D9D4C8] mt-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between gap-4 text-xs text-[#6B7A6F]">
          <span>AWP Central Learning Hub · SAP PP/QM</span>
          <div className="flex gap-4">
            <Link href="/logbook" className="hover:text-[#1C3A2B] transition-colors">T-Code Library</Link>
            <Link href="/process-flow" className="hover:text-[#1C3A2B] transition-colors">Process Flow</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
