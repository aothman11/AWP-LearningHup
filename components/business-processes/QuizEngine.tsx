"use client";

import { useState } from "react";
import Link from "next/link";
import { QuizQuestion } from "./QuizQuestion";
import type { ProcessQuiz, QuizQuestion as QuizQuestionType } from "@/lib/parseBusinessProcessDoc";

interface QuizEngineProps {
  quiz: ProcessQuiz;
  processSlug: string;
  processLabel: string;
}

type QuizMode = "sap-focus" | "process-flow" | "all";
type QuizPhase = "config" | "active" | "results";

interface QuizState {
  questions: QuizQuestionType[];
  answers: Record<string, number | null>;
  revealed: Record<string, boolean>;
  currentIdx: number;
  phase: QuizPhase;
  mode: QuizMode;
}

export function QuizEngine({ quiz, processSlug, processLabel }: QuizEngineProps) {
  const [state, setState] = useState<QuizState>({
    questions: quiz.questions,
    answers: {},
    revealed: {},
    currentIdx: 0,
    phase: "config",
    mode: "all",
  });

  // ── Config phase ──────────────────────────────────────────────────────

  if (state.phase === "config") {
    return (
      <div className="max-w-xl mx-auto py-12 px-4">
        <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-8">
          <p className="text-[#4E7862] text-xs font-semibold uppercase tracking-widest mb-2">
            {processLabel}
          </p>
          <h1
            className="text-2xl font-light text-[#1C3A2B] mb-2"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Knowledge Quiz
          </h1>
          <p className="text-[#6B7A6F] text-sm mb-8">
            {quiz.questions.length} question{quiz.questions.length !== 1 ? "s" : ""} · Immediate feedback after each answer
          </p>

          {/* Mode selection */}
          <fieldset className="mb-8">
            <legend className="text-xs font-semibold text-[#2A2E2B] uppercase tracking-wider mb-3">
              Question Mode
            </legend>
            <div className="flex flex-col gap-3">
              {(
                [
                  { value: "all", label: "All Questions", desc: "Mix of SAP Focus and Process Flow questions" },
                  { value: "sap-focus", label: "SAP Focus", desc: "T-codes, transactions, movement types, system steps" },
                  { value: "process-flow", label: "Process Flow", desc: "Physical operations, roles, decisions, timings" },
                ] as { value: QuizMode; label: string; desc: string }[]
              ).map((opt) => {
                const filtered = opt.value === "all"
                  ? quiz.questions
                  : quiz.questions.filter((q) => q.mode === opt.value);

                return (
                  <label
                    key={opt.value}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all
                      ${state.mode === opt.value
                        ? "border-[#1C3A2B] bg-[#E8F0E4]"
                        : "border-[#D9D4C8] bg-[#FAFAF8] hover:border-[#4E7862]"
                      }`}
                  >
                    <input
                      type="radio"
                      name="quiz-mode"
                      value={opt.value}
                      checked={state.mode === opt.value}
                      onChange={() => setState((s) => ({ ...s, mode: opt.value }))}
                      className="mt-0.5 accent-[#1C3A2B]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#2A2E2B]">{opt.label}</span>
                        <span className="text-[10px] text-[#6B7A6F]">
                          ({filtered.length} question{filtered.length !== 1 ? "s" : ""})
                        </span>
                      </div>
                      <span className="text-xs text-[#6B7A6F]">{opt.desc}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            onClick={() => {
              const filteredQs = state.mode === "all"
                ? quiz.questions
                : quiz.questions.filter((q) => q.mode === state.mode);
              if (filteredQs.length === 0) return;
              setState((s) => ({
                ...s,
                questions: filteredQs,
                answers: {},
                revealed: {},
                currentIdx: 0,
                phase: "active",
              }));
            }}
            disabled={
              (state.mode !== "all" && quiz.questions.filter((q) => q.mode === state.mode).length === 0)
            }
            className="w-full py-3 px-6 bg-[#1C3A2B] text-white font-semibold rounded-xl
                       hover:bg-[#2D5A42] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    );
  }

  // ── Active quiz phase ─────────────────────────────────────────────────

  if (state.phase === "active") {
    const current = state.questions[state.currentIdx];
    const isRevealed = !!state.revealed[current.id];
    const isAnswered = state.answers[current.id] !== undefined && state.answers[current.id] !== null;
    const isLast = state.currentIdx === state.questions.length - 1;
    const progress = Math.round(((state.currentIdx + 1) / state.questions.length) * 100);

    function handleSelect(optIdx: number) {
      setState((s) => ({
        ...s,
        answers: { ...s.answers, [current.id]: optIdx },
        revealed: { ...s.revealed, [current.id]: true },
      }));
    }

    function handleNext() {
      if (isLast) {
        setState((s) => ({ ...s, phase: "results" }));
      } else {
        setState((s) => ({ ...s, currentIdx: s.currentIdx + 1 }));
      }
    }

    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-1.5 bg-[#EDE9E1] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4E7862] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={state.currentIdx + 1}
              aria-valuemin={1}
              aria-valuemax={state.questions.length}
            />
          </div>
          <span className="text-xs text-[#6B7A6F] shrink-0">
            {state.currentIdx + 1} / {state.questions.length}
          </span>
        </div>

        {/* Question card */}
        <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-6 sm:p-8 mb-6">
          <QuizQuestion
            question={current}
            index={state.currentIdx}
            selected={state.answers[current.id] ?? null}
            revealed={isRevealed}
            onSelect={handleSelect}
          />
        </div>

        {/* Next button */}
        {isRevealed && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-[#1C3A2B] text-white font-semibold text-sm rounded-xl
                         hover:bg-[#2D5A42] transition-colors"
            >
              {isLast ? "See Results →" : "Next Question →"}
            </button>
          </div>
        )}

        {/* Skip button (if not yet answered) */}
        {!isRevealed && !isAnswered && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="text-xs text-[#6B7A6F] hover:text-[#2A2E2B] transition-colors underline underline-offset-2"
            >
              Skip question
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── Results phase ─────────────────────────────────────────────────────

  const totalAnswered = state.questions.filter(
    (q) => state.answers[q.id] !== undefined && state.answers[q.id] !== null
  ).length;
  const totalCorrect = state.questions.filter(
    (q) => state.answers[q.id] !== undefined && state.answers[q.id] === q.answer
  ).length;
  const pct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const grade =
    pct >= 90 ? { label: "Excellent", color: "#1C3A2B", bg: "#E8F0E4" } :
    pct >= 70 ? { label: "Good", color: "#7A5E0A", bg: "#F8EBC5" } :
    pct >= 50 ? { label: "Keep Practising", color: "#6B5B00", bg: "#FFF9EC" } :
    { label: "Review Needed", color: "#9B3030", bg: "#FCDEDE" };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Score card */}
      <div className="bg-[#1C3A2B] text-white rounded-2xl p-8 mb-8 text-center">
        <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-2">
          Quiz Complete
        </p>
        <div className="text-6xl font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          {totalCorrect}/{totalAnswered}
        </div>
        <div
          className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
          style={{ background: grade.bg, color: grade.color }}
        >
          {grade.label} — {pct}%
        </div>
        <p className="text-[#A8C4A8] text-sm">{processLabel}</p>
      </div>

      {/* Answer review */}
      <div className="flex flex-col gap-6 mb-8">
        <h2 className="text-sm font-semibold text-[#2A2E2B] uppercase tracking-wider">
          Review Answers
        </h2>
        {state.questions.map((q, idx) => (
          <div key={q.id} className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl p-5 sm:p-6">
            <QuizQuestion
              question={q}
              index={idx}
              selected={state.answers[q.id] ?? null}
              revealed={true}
              onSelect={() => {}}
            />
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() =>
            setState({
              questions: quiz.questions,
              answers: {},
              revealed: {},
              currentIdx: 0,
              phase: "config",
              mode: "all",
            })
          }
          className="flex-1 py-3 px-5 bg-[#1C3A2B] text-white font-semibold rounded-xl
                     hover:bg-[#2D5A42] transition-colors text-sm"
        >
          Retake Quiz
        </button>
        <Link
          href={`/learning/business-processes/${processSlug}`}
          className="flex-1 py-3 px-5 border border-[#D9D4C8] text-[#2A2E2B] font-semibold rounded-xl
                     hover:bg-[#E8F0E4] hover:border-[#4E7862] transition-colors text-sm text-center"
        >
          Back to Docs
        </Link>
        <Link
          href="/learning/business-processes"
          className="flex-1 py-3 px-5 border border-[#D9D4C8] text-[#6B7A6F] font-semibold rounded-xl
                     hover:bg-[#E8F0E4] hover:border-[#4E7862] transition-colors text-sm text-center"
        >
          All Processes
        </Link>
      </div>
    </div>
  );
}
