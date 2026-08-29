"use client";

/**
 * ProcessDetail — step-by-step view for a single process.
 * Features:
 * - Vertical step cards with T-code badges, role, instructions
 * - Decision diamonds with Yes/No branches
 * - Mark as Done per step (persists via parent callback)
 * - Guided Mode: shows only current incomplete step; "Next Step" advances
 * - Auto-scrolls to first incomplete step on open
 */

import { useState, useEffect, useRef } from "react";
import { type Process, type ProcessStep } from "@/data/processes";
import { type ProcessProgress } from "./ProcessesTab";
import { useT } from "@/lib/i18n";
import { logbookEntries } from "@/data/qm-logbook";

interface Props {
  process: Process;
  progress: ProcessProgress | undefined;
  lang: "EN" | "AR";
  onToggleStep: (stepNumber: number) => void;
  onBack: () => void;
  initialStep?: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function tcodeInLogbook(tc: string): string | null {
  const entry = logbookEntries.find(
    (e) => e.transactionCode.toUpperCase() === tc.toUpperCase()
  );
  return entry ? entry.id : null;
}

// ─── T-code badge ─────────────────────────────────────────────────────────────

function TcodeBadge({ code }: { code: string }) {
  const logbookId = tcodeInLogbook(code);
  const badge = (
    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#1C3A2B] text-white">
      {code}
    </span>
  );
  if (logbookId) {
    return (
      <a
        href={`/logbook/${logbookId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        title={`Open ${code} in T-Code Library`}
        onClick={(e) => e.stopPropagation()}
      >
        {badge}
        <span className="ml-1 text-[10px] text-[#4E7862]">↗</span>
      </a>
    );
  }
  return (
    <span title="Not in T-Code Library" className="opacity-70">
      {badge}
      <span className="ml-1 text-[10px] text-[#6B7A6F]" title="Not in T-Code Library">?</span>
    </span>
  );
}

// ─── Decision diamond ─────────────────────────────────────────────────────────

function DecisionDiamond({ step, lang, t }: { step: ProcessStep; lang: "EN" | "AR"; t: (k: string) => string }) {
  return (
    <div className="flex flex-col items-center my-2">
      <div
        className="w-14 h-14 bg-[#C49A1A] text-white text-[10px] font-bold flex items-center justify-center text-center leading-tight"
        style={{ transform: "rotate(45deg)", borderRadius: "4px" }}
      >
        <span style={{ transform: "rotate(-45deg)" }}>?</span>
      </div>
      <div className="flex gap-8 mt-3">
        {step.yesNextStep && (
          <span className="text-[10px] text-[#4E7862] font-medium flex items-center gap-1">
            ✓ {t("proc.detail.yes")} {step.yesNextStep}
          </span>
        )}
        {step.noNextStep && (
          <span className="text-[10px] text-[#9B3030] font-medium flex items-center gap-1">
            ✗ {t("proc.detail.no")} {step.noNextStep}
          </span>
        )}
      </div>
    </div>
  );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

interface StepCardProps {
  step: ProcessStep;
  isDone: boolean;
  isCurrent: boolean;
  lang: "EN" | "AR";
  onToggle: () => void;
  scrollRef?: React.RefObject<HTMLDivElement | null>;
}

function StepCard({ step, isDone, isCurrent, lang, onToggle, scrollRef }: StepCardProps) {
  const t = useT();
  const [expanded, setExpanded] = useState(!isDone);

  // Auto-expand/collapse when done state changes
  useEffect(() => { setExpanded(!isDone); }, [isDone]);

  const title = lang === "AR" ? step.titleAR : step.titleEN;
  const whatToDo = lang === "AR" ? step.whatToDoAR : step.whatToDoEN;
  const whatSAPDoes = lang === "AR" ? step.whatSAPDoesAR : step.whatSAPDoesEN;
  const expectedOutput = lang === "AR" ? step.expectedOutputAR : step.expectedOutputEN;

  return (
    <div
      ref={scrollRef as React.RefObject<HTMLDivElement>}
      className={`border rounded-2xl overflow-hidden transition-all ${
        isCurrent
          ? "border-[#1C3A2B] shadow-md"
          : isDone
          ? "border-[#4E7862] bg-[#F4FAF4]"
          : "border-[#D9D4C8] bg-[#FAFAF8]"
      }`}
    >
      {/* Step header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left"
      >
        {/* Step number circle */}
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors"
          style={{
            background: isDone ? "#4E7862" : isCurrent ? "#1C3A2B" : "#D9D4C8",
            color: isDone || isCurrent ? "white" : "#6B7A6F",
          }}
        >
          {isDone ? "✓" : step.stepNumber}
        </span>

        {/* Title + T-code */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm font-medium ${isDone ? "text-[#4E7862] line-through opacity-70" : "text-[#1C3A2B]"}`}
              dir={lang === "AR" ? "rtl" : "ltr"}
            >
              {title}
            </span>
            {step.tCode && <TcodeBadge code={step.tCode} />}
            {step.isDecisionPoint && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C49A1A] text-white">
                {t("proc.detail.decision")}
              </span>
            )}
          </div>
          <p className="text-[10px] text-[#6B7A6F] mt-0.5">{t("proc.detail.role")}: {step.role}</p>
        </div>

        <span className="shrink-0 text-[#6B7A6F] text-sm">{expanded ? "▲" : "▼"}</span>
      </button>

      {/* Expandable body */}
      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-[#EDE9E1]" dir={lang === "AR" ? "rtl" : "ltr"}>
          {step.isDecisionPoint && (
            <DecisionDiamond step={step} lang={lang} t={t} />
          )}

          <div>
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
              {t("proc.detail.whatToDo")}
            </p>
            <p className="text-sm text-[#2A2E2B] leading-relaxed">{whatToDo}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
              {t("proc.detail.whatSAPDoes")}
            </p>
            <p className="text-sm text-[#2A2E2B] leading-relaxed">{whatSAPDoes}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
              {t("proc.detail.output")}
            </p>
            <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-xl p-3">
              <p className="text-sm text-[#1C3A2B] leading-relaxed whitespace-pre-line">{expectedOutput}</p>
            </div>
          </div>

          {/* Mark as done */}
          <button
            onClick={(e) => { e.stopPropagation(); onToggle(); }}
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-colors"
            style={
              isDone
                ? { background: "#EDE9E1", color: "#6B7A6F" }
                : { background: "#1C3A2B", color: "white" }
            }
          >
            {isDone ? t("proc.detail.markUndone") : t("proc.detail.markDone")}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Connector arrow ─────────────────────────────────────────────────────────

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-[#D9D4C8]" />
        <div
          className="w-0 h-0"
          style={{
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderTop: "6px solid #D9D4C8",
          }}
        />
      </div>
    </div>
  );
}

// ─── ProcessDetail ────────────────────────────────────────────────────────────

export function ProcessDetail({ process: p, progress, lang, onToggleStep, onBack, initialStep }: Props) {
  const t = useT();
  const completedSteps = progress?.completedSteps ?? [];
  const firstIncomplete = p.steps.find((s) => !completedSteps.includes(s.stepNumber));
  const currentStepNumber = firstIncomplete?.stepNumber ?? p.steps[0]?.stepNumber;

  const [guidedMode, setGuidedMode] = useState(false);
  const [guidedCurrent, setGuidedCurrent] = useState(initialStep ?? currentStepNumber ?? 1);

  const stepRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const currentRef = useRef<HTMLDivElement | null>(null);

  // Scroll to first incomplete step or initialStep on open
  useEffect(() => {
    const targetStep = initialStep ?? currentStepNumber;
    if (targetStep) {
      const el = stepRefs.current[targetStep];
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const done = completedSteps.length;
  const total = p.steps.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const visibleSteps = guidedMode
    ? p.steps.filter((s) => s.stepNumber === guidedCurrent)
    : p.steps;

  function advanceGuided() {
    const currentIdx = p.steps.findIndex((s) => s.stepNumber === guidedCurrent);
    const nextStep = p.steps[currentIdx + 1];
    if (nextStep) setGuidedCurrent(nextStep.stepNumber);
  }

  return (
    <div className="max-w-2xl mx-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="text-sm text-[#6B7A6F] hover:text-[#1C3A2B] flex items-center gap-1.5 transition-colors"
        >
          {t("proc.detail.back")}
        </button>
        {/* Guided mode toggle */}
        <button
          onClick={() => setGuidedMode((v) => !v)}
          className="flex items-center gap-2 text-xs border px-3 py-1.5 rounded-full transition-colors"
          style={
            guidedMode
              ? { background: "#1C3A2B", color: "white", borderColor: "#1C3A2B" }
              : { background: "#FAFAF8", color: "#6B7A6F", borderColor: "#D9D4C8" }
          }
        >
          <span>{guidedMode ? "◉" : "○"}</span>
          {t("proc.detail.guided")}
        </button>
      </div>

      {/* Process title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-2xl" aria-hidden>{p.icon}</span>
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
            style={{ background: p.module === "PP" ? "#1C3A2B" : "#C49A1A" }}
          >
            {p.module}
          </span>
          <span className="text-[10px] text-[#6B7A6F] bg-[#EDE9E1] border border-[#D9D4C8] px-2 py-0.5 rounded-full">
            {p.duration}
          </span>
          {p.roles.map((role) => (
            <span key={role} className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE9E1] text-[#6B7A6F]">
              {role}
            </span>
          ))}
        </div>
        <h2
          className="text-2xl font-light text-[#1C3A2B] mb-1"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          dir={lang === "AR" ? "rtl" : "ltr"}
        >
          {lang === "AR" ? p.titleAR : p.titleEN}
        </h2>

        {/* Progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-[#6B7A6F]">
              {t("proc.detail.step")} {done} {t("proc.detail.stepOf")} {total}
            </span>
            <span className="text-xs font-medium text-[#1C3A2B]">{pct}%</span>
          </div>
          <div className="h-2 bg-[#D9D4C8] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, background: pct === 100 ? "#4E7862" : "#1C3A2B" }}
            />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {visibleSteps.map((step, idx) => {
          const isDone = completedSteps.includes(step.stepNumber);
          const isCurrent = step.stepNumber === currentStepNumber && !guidedMode;
          const isLast = idx === visibleSteps.length - 1;

          return (
            <div key={step.id}>
              <StepCard
                step={step}
                isDone={isDone}
                isCurrent={isCurrent}
                lang={lang}
                onToggle={() => onToggleStep(step.stepNumber)}
                scrollRef={{ current: stepRefs.current[step.stepNumber] ?? null } as React.RefObject<HTMLDivElement | null>}
              />
              {/* We need to set the ref on the div wrapper */}
              {!isLast && <Arrow />}
            </div>
          );
        })}
      </div>

      {/* Guided mode: Next Step button */}
      {guidedMode && (
        <div className="mt-6 text-center">
          {guidedCurrent < (p.steps[p.steps.length - 1]?.stepNumber ?? 1) ? (
            <button
              onClick={advanceGuided}
              className="bg-[#1C3A2B] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#2D5A42] transition-colors"
            >
              {t("proc.detail.next")}
            </button>
          ) : (
            <div className="text-sm text-[#4E7862] font-medium">
              ✓ {t("proc.completed")} — {t("proc.review")}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
