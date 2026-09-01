"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { processFlows } from "@/data/process-flows";
import type { ProcessFlow, ProcessStep } from "@/data/process-flows";
import { logbookEntries } from "@/data/qm-logbook";
import { useLang } from "@/context/LangContext";

// ─── Brand colours ───────────────────────────────────────────────────────────
const GREEN = "#047836";
const GOLD = "#C49A1A";
const DARK = "#1C3A2B";
const BG = "#F7F5F0";
const CARD = "#FAFAF8";
const BORDER = "#D9D4C8";
const TEXT = "#2A2E2B";
const MUTED = "#6B7A6F";

// ─── Module badge colours ────────────────────────────────────────────────────
const MODULE_COLORS: Record<string, { bg: string; text: string }> = {
  PP: { bg: "#E8F0E4", text: "#1C3A2B" },
  QM: { bg: "#F8EBC5", text: "#7A5E0A" },
  "PP/QM": { bg: "#EDE9E1", text: "#4A5568" },
  Physical: { bg: "#EDE9E1", text: "#64748B" },
};

// ─── Chat message type ───────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function normalise(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9؀-ۿ ]/g, " ");
}

function tcodeInLogbook(tc: string): boolean {
  return logbookEntries.some(
    (e) => e.transactionCode.toUpperCase() === tc.toUpperCase()
  );
}

function logbookIdForTcode(tc: string): string | null {
  const entry = logbookEntries.find(
    (e) => e.transactionCode.toUpperCase() === tc.toUpperCase()
  );
  return entry?.id ?? null;
}

// Build a text summary of all process flows for the AI context
function buildProcessContext(): string {
  return processFlows
    .map((pf) => {
      const steps = pf.steps
        .map((s, i) => {
          const parts: string[] = [`${i + 1}. [${s.type.toUpperCase()}] ${s.labelEN}`];
          if (s.tcode) parts.push(`(T-code: ${s.tcode})`);
          if (s.role) parts.push(`— Role: ${s.role}`);
          if (s.descriptionEN) parts.push(`· ${s.descriptionEN}`);
          return parts.join(" ");
        })
        .join("\n");
      return `### ${pf.titleEN}\nCategory: ${pf.category} | Module: ${pf.module}${pf.plant ? ` | Plant: ${pf.plant}` : ""}\n${pf.descriptionEN}\n\nSteps:\n${steps}\n\nT-codes used: ${pf.tcodes.join(", ") || "None"}`;
    })
    .join("\n\n---\n\n");
}

// ─── T-code Badge ────────────────────────────────────────────────────────────
function TcodeBadge({
  tcode,
  onNavigate,
}: {
  tcode: string;
  onNavigate?: (tab: "logbook") => void;
}) {
  const inLogbook = tcodeInLogbook(tcode);
  const id = logbookIdForTcode(tcode);

  if (inLogbook && id) {
    return (
      <Link
        href={`/logbook/${id}`}
        title={`Open ${tcode} in Logbook`}
        className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded border transition-colors hover:opacity-80"
        style={{
          background: "#E8F0E4",
          color: GREEN,
          borderColor: "#C8DFC5",
        }}
        onClick={() => onNavigate?.("logbook")}
      >
        {tcode}
        <span style={{ color: GOLD }}>↗</span>
      </Link>
    );
  }

  return (
    <span
      title="T-code not in Logbook"
      className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded border"
      style={{
        background: "#F3F4F6",
        color: "#9CA3AF",
        borderColor: "#E5E7EB",
      }}
    >
      {tcode}
      <span title="not in logbook">○</span>
    </span>
  );
}

// ─── Step Icon ───────────────────────────────────────────────────────────────
function stepIcon(type: ProcessStep["type"]) {
  switch (type) {
    case "start":
      return "●";
    case "end":
      return "◉";
    case "decision":
      return "◆";
    case "document":
      return "⊡";
    case "subprocess":
      return "⊞";
    default:
      return "□";
  }
}

function stepBg(type: ProcessStep["type"]): string {
  switch (type) {
    case "start":
      return "#D4EDDA";
    case "end":
      return "#FCE4EC";
    case "decision":
      return "#FFF9C4";
    case "document":
      return "#E3F2FD";
    case "subprocess":
      return "#E2D9F3";
    default:
      return "#FAFAF8";
  }
}

// ─── Single Step Card ────────────────────────────────────────────────────────
function StepCard({
  step,
  index,
  lang,
  highlight,
  onSelect,
  selected,
}: {
  step: ProcessStep;
  index: number;
  lang: "EN" | "AR";
  highlight: boolean;
  onSelect: (s: ProcessStep) => void;
  selected: boolean;
}) {
  const label = lang === "AR" && step.labelAR ? step.labelAR : step.labelEN;

  return (
    <button
      onClick={() => onSelect(step)}
      className="w-full text-left transition-all"
      style={{ outline: "none" }}
    >
      <div
        className="rounded-xl border p-3 transition-all hover:shadow-sm"
        style={{
          background: highlight
            ? "#FFF9C4"
            : selected
            ? "#E8F0E4"
            : stepBg(step.type),
          borderColor: highlight
            ? GOLD
            : selected
            ? GREEN
            : step.type === "decision"
            ? "#E8D585"
            : BORDER,
          boxShadow: selected ? `0 0 0 2px ${GREEN}30` : undefined,
        }}
      >
        <div className="flex items-start gap-2">
          {/* Step number / type icon */}
          <span
            className="text-[11px] font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: step.type === "start" ? GREEN : step.type === "end" ? "#D32F2F" : DARK + "15",
              color: step.type === "start" || step.type === "end" ? "white" : DARK,
              fontSize: step.type === "start" || step.type === "end" ? "8px" : "10px",
            }}
          >
            {step.type === "start" || step.type === "end"
              ? stepIcon(step.type)
              : index + 1}
          </span>

          <div className="flex-1 min-w-0">
            {/* Decision diamond indicator */}
            {step.type === "decision" && (
              <span
                className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded mr-1"
                style={{ background: "#E8D585", color: "#7A5E0A" }}
              >
                ◆ Decision
              </span>
            )}
            {step.warning && (
              <span className="text-[9px] mr-1">⚠ Verify this step</span>
            )}

            <p
              className="text-xs font-medium leading-snug"
              style={{
                color: TEXT,
                direction: lang === "AR" ? "rtl" : "ltr",
              }}
            >
              {label}
            </p>

            {/* Role */}
            {step.role && (
              <p className="text-[10px] mt-0.5" style={{ color: MUTED }}>
                🧑‍💼 {step.role}
              </p>
            )}

            {/* T-code */}
            {step.tcode && (
              <div className="mt-1.5">
                <TcodeBadge tcode={step.tcode} />
              </div>
            )}

            {/* Decision branches */}
            {step.type === "decision" && (step.yesId || step.noId) && (
              <div className="flex gap-2 mt-1.5 text-[9px]">
                {step.yesId && (
                  <span
                    className="px-1.5 py-0.5 rounded font-semibold"
                    style={{ background: "#D4EDDA", color: "#155724" }}
                  >
                    YES ↓
                  </span>
                )}
                {step.noId && (
                  <span
                    className="px-1.5 py-0.5 rounded font-semibold"
                    style={{ background: "#FCE4EC", color: "#721C24" }}
                  >
                    NO →
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arrow connector */}
      {step.type !== "end" && (
        <div
          className="flex justify-center py-0.5"
          style={{ color: MUTED }}
          aria-hidden
        >
          <span className="text-sm">↓</span>
        </div>
      )}
    </button>
  );
}

// ─── Swimlane Flow ───────────────────────────────────────────────────────────
function SwimlaneDiagram({
  flow,
  lang,
  matchIds,
  onSelectStep,
  selectedStep,
}: {
  flow: ProcessFlow;
  lang: "EN" | "AR";
  matchIds: Set<string>;
  onSelectStep: (s: ProcessStep) => void;
  selectedStep: ProcessStep | null;
}) {
  const lanes = flow.swimlanes ?? [];

  return (
    <div className="overflow-x-auto">
      <div style={{ minWidth: Math.max(640, lanes.length * 200) }}>
        {/* Lane headers */}
        <div className="flex border-b" style={{ borderColor: BORDER }}>
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="flex-1 px-3 py-2 text-center border-r last:border-r-0"
              style={{
                background: lane.color,
                borderColor: BORDER,
              }}
            >
              <p
                className="text-[10px] font-semibold"
                style={{ color: DARK }}
              >
                {lang === "AR" && lane.labelAR ? lane.labelAR : lane.labelEN}
              </p>
            </div>
          ))}
        </div>

        {/* Steps grouped by swimlane (column layout) */}
        <div className="flex">
          {lanes.map((lane) => {
            const laneSteps = flow.steps.filter(
              (s) => s.swimlane === lane.id
            );
            return (
              <div
                key={lane.id}
                className="flex-1 p-3 border-r last:border-r-0 flex flex-col gap-1"
                style={{ borderColor: BORDER, background: lane.color + "30" }}
              >
                {laneSteps.map((step, i) => (
                  <StepCard
                    key={step.id}
                    step={step}
                    index={i}
                    lang={lang}
                    highlight={matchIds.has(step.id)}
                    onSelect={onSelectStep}
                    selected={selectedStep?.id === step.id}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Linear Flow ─────────────────────────────────────────────────────────────
function LinearDiagram({
  flow,
  lang,
  matchIds,
  onSelectStep,
  selectedStep,
}: {
  flow: ProcessFlow;
  lang: "EN" | "AR";
  matchIds: Set<string>;
  onSelectStep: (s: ProcessStep) => void;
  selectedStep: ProcessStep | null;
}) {
  return (
    <div className="max-w-lg mx-auto px-2">
      {flow.steps.map((step, i) => (
        <StepCard
          key={step.id}
          step={step}
          index={i}
          lang={lang}
          highlight={matchIds.has(step.id)}
          onSelect={onSelectStep}
          selected={selectedStep?.id === step.id}
        />
      ))}
    </div>
  );
}

// ─── Process Flow Card ───────────────────────────────────────────────────────
function ProcessFlowCard({
  flow,
  lang,
  matchIds,
  onSelectStep,
  selectedStep,
  isExpanded,
  onToggle,
}: {
  flow: ProcessFlow;
  lang: "EN" | "AR";
  matchIds: Set<string>;
  onSelectStep: (s: ProcessStep) => void;
  selectedStep: ProcessStep | null;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const mc = MODULE_COLORS[flow.module] ?? MODULE_COLORS["PP/QM"];
  const hasMatch = flow.steps.some((s) => matchIds.has(s.id));

  return (
    <article
      className="rounded-2xl border overflow-hidden transition-all"
      style={{
        borderColor: hasMatch ? GOLD : BORDER,
        background: CARD,
        boxShadow: hasMatch ? `0 0 0 2px ${GOLD}30` : undefined,
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 hover:bg-[#F3F1EC] transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className="text-[10px] font-medium px-2 py-0.5 rounded"
              style={{ background: mc.bg, color: mc.text }}
            >
              {flow.module}
            </span>
            <span
              className="text-[10px] px-2 py-0.5 rounded"
              style={{ background: DARK + "10", color: DARK }}
            >
              {flow.category}
            </span>
            {flow.plant && (
              <span
                className="text-[10px] px-2 py-0.5 rounded"
                style={{ background: "#E3F2FD", color: "#1565C0" }}
              >
                🏭 {flow.plant}
              </span>
            )}
            {hasMatch && (
              <span
                className="text-[10px] font-semibold px-2 py-0.5 rounded"
                style={{ background: "#FFF9C4", color: "#856404" }}
              >
                ✦ match
              </span>
            )}
          </div>
          <h3
            className="text-base font-semibold leading-snug"
            style={{
              color: DARK,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "18px",
            }}
          >
            {lang === "AR" ? flow.titleAR : flow.titleEN}
          </h3>
          <p className="text-[11px] mt-1 leading-relaxed line-clamp-2" style={{ color: MUTED }}>
            {flow.descriptionEN}
          </p>

          {/* T-code badges */}
          {flow.tcodes.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {flow.tcodes.map((tc) => (
                <TcodeBadge key={tc} tcode={tc} />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px]" style={{ color: MUTED }}>
            {flow.steps.length} steps
          </span>
          <span
            className="text-lg transition-transform"
            style={{
              color: MUTED,
              transform: isExpanded ? "rotate(180deg)" : "none",
            }}
          >
            ▾
          </span>
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="border-t" style={{ borderColor: BORDER }}>
          {flow.swimlanes && flow.swimlanes.length > 0 ? (
            <SwimlaneDiagram
              flow={flow}
              lang={lang}
              matchIds={matchIds}
              onSelectStep={onSelectStep}
              selectedStep={selectedStep}
            />
          ) : (
            <div className="py-4">
              <LinearDiagram
                flow={flow}
                lang={lang}
                matchIds={matchIds}
                onSelectStep={onSelectStep}
                selectedStep={selectedStep}
              />
            </div>
          )}
        </div>
      )}
    </article>
  );
}

// ─── Side Panel ──────────────────────────────────────────────────────────────
function StepPanel({
  step,
  lang,
  onClose,
}: {
  step: ProcessStep;
  lang: "EN" | "AR";
  onClose: () => void;
}) {
  const label = lang === "AR" && step.labelAR ? step.labelAR : step.labelEN;
  const desc =
    lang === "AR" && step.descriptionAR
      ? step.descriptionAR
      : step.descriptionEN;

  return (
    <aside
      className="fixed right-0 top-0 h-full w-80 bg-white border-l z-40 overflow-y-auto shadow-2xl"
      style={{ borderColor: BORDER }}
    >
      <div
        className="flex items-center justify-between px-5 py-4 border-b sticky top-0 bg-white"
        style={{ borderColor: BORDER }}
      >
        <h4
          className="text-sm font-semibold"
          style={{ color: DARK, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "16px" }}
        >
          Step Detail
        </h4>
        <button
          onClick={onClose}
          className="text-xl leading-none hover:text-[#1C3A2B]"
          style={{ color: MUTED }}
          aria-label="Close panel"
        >
          ×
        </button>
      </div>

      <div className="p-5 space-y-4">
        {/* Type badge */}
        <div>
          <span
            className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded"
            style={{ background: stepBg(step.type), color: DARK }}
          >
            {step.type}
          </span>
          {step.warning && (
            <span className="ml-2 text-[10px]">⚠ Verify this step</span>
          )}
        </div>

        {/* Step name */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: MUTED }}>
            Step Name
          </p>
          <p className="text-sm font-medium" style={{ color: TEXT, direction: lang === "AR" ? "rtl" : "ltr" }}>
            {label}
          </p>
          {lang === "EN" && step.labelAR && (
            <p className="text-[11px] mt-0.5" style={{ color: MUTED, direction: "rtl" }}>
              {step.labelAR}
            </p>
          )}
        </div>

        {/* Role */}
        {step.role && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: MUTED }}>
              Role / Department
            </p>
            <p className="text-xs" style={{ color: TEXT }}>
              🧑‍💼 {step.role}
            </p>
          </div>
        )}

        {/* T-code */}
        {step.tcode && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: MUTED }}>
              SAP T-code
            </p>
            <TcodeBadge tcode={step.tcode} />
            {tcodeInLogbook(step.tcode) && (
              <p className="text-[10px] mt-1" style={{ color: GREEN }}>
                ✓ Available in Logbook — click badge to view
              </p>
            )}
            {!tcodeInLogbook(step.tcode) && (
              <p className="text-[10px] mt-1" style={{ color: MUTED }}>
                ○ Not in Logbook
              </p>
            )}
          </div>
        )}

        {/* Description */}
        {desc && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: MUTED }}>
              Description
            </p>
            <p className="text-xs leading-relaxed" style={{ color: TEXT }}>
              {desc}
            </p>
          </div>
        )}

        {/* Note */}
        {step.note && (
          <div
            className="rounded-lg p-3"
            style={{ background: "#FFF9C4", border: "1px solid #E8D585" }}
          >
            <p className="text-[10px] font-semibold mb-1" style={{ color: "#856404" }}>
              📋 Note
            </p>
            <p className="text-[11px] leading-relaxed" style={{ color: "#856404" }}>
              {step.note}
            </p>
          </div>
        )}

        {/* Decision branches */}
        {step.type === "decision" && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: MUTED }}>
              Decision Branches
            </p>
            <div className="space-y-1">
              {step.yesId && (
                <div
                  className="flex items-center gap-2 text-xs px-2 py-1 rounded"
                  style={{ background: "#D4EDDA", color: "#155724" }}
                >
                  <strong>YES:</strong> continues down
                </div>
              )}
              {step.noId && (
                <div
                  className="flex items-center gap-2 text-xs px-2 py-1 rounded"
                  style={{ background: "#FCE4EC", color: "#721C24" }}
                >
                  <strong>NO:</strong> takes alternate branch
                </div>
              )}
            </div>
          </div>
        )}

        {/* Related T-codes from logbook */}
        {step.tcode && tcodeInLogbook(step.tcode) && (() => {
          const entry = logbookEntries.find(
            (e) => e.transactionCode.toUpperCase() === step.tcode!.toUpperCase()
          );
          if (!entry) return null;
          return (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: MUTED }}>
                Related T-codes
              </p>
              <div className="flex flex-wrap gap-1">
                {entry.relatedTransactions.slice(0, 6).map((rt) => (
                  <TcodeBadge key={rt} tcode={rt} />
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </aside>
  );
}

// ─── AI Chat Panel ───────────────────────────────────────────────────────────
function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const processContext = useMemo(() => buildProcessContext(), []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, processContext }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply ?? data.error ?? "Error" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Network error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed bottom-20 right-4 w-80 sm:w-96 flex flex-col rounded-2xl border shadow-2xl z-50 overflow-hidden"
      style={{ background: "white", borderColor: BORDER, maxHeight: "70vh" }}
    >
      {/* Chat header */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ background: DARK, color: "white" }}
      >
        <div className="flex items-center gap-2">
          <span>💬</span>
          <div>
            <p className="text-xs font-semibold">AWP Process Assistant</p>
            <p className="text-[10px] opacity-70">Powered by Claude</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white opacity-70 hover:opacity-100 text-lg leading-none"
          aria-label="Close chat"
        >
          ×
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm" style={{ minHeight: 200 }}>
        {messages.length === 0 && (
          <div className="text-center py-6">
            <p className="text-2xl mb-2">🌾</p>
            <p className="text-xs font-medium" style={{ color: DARK }}>
              Ask me about any AWP process
            </p>
            <p className="text-[11px] mt-1" style={{ color: MUTED }}>
              e.g. &ldquo;How do I confirm a REM production order?&rdquo; or &ldquo;ما هو T-code لتسجيل بيانات الجودة؟&rdquo;
            </p>
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap"
              style={
                m.role === "user"
                  ? { background: DARK, color: "white" }
                  : { background: BG, color: TEXT, border: `1px solid ${BORDER}` }
              }
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div
              className="rounded-xl px-3 py-2 text-xs"
              style={{ background: BG, color: MUTED, border: `1px solid ${BORDER}` }}
            >
              <span className="animate-pulse">Thinking…</span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t shrink-0" style={{ borderColor: BORDER }}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder="Ask about this process…"
            className="flex-1 text-xs rounded-lg border px-3 py-2 outline-none focus:border-green-600"
            style={{ borderColor: BORDER, background: BG, color: TEXT }}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="text-xs font-semibold px-3 py-2 rounded-lg transition-colors disabled:opacity-40"
            style={{ background: DARK, color: "white" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function ProcessFlowPage() {
  const { lang, toggle: toggleLang } = useLang();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [moduleFilter, setModuleFilter] = useState("All");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const firstMatchRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // ── Categories & Modules ──────────────────────────────────────────────────
  const categories = useMemo(() => {
    const cats = new Set(processFlows.map((f) => f.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const modules = useMemo(() => {
    const mods = new Set(processFlows.map((f) => f.module));
    return ["All", ...Array.from(mods).sort()];
  }, []);

  // ── Search / match IDs ───────────────────────────────────────────────────
  const { filteredFlows, matchIdsByFlow } = useMemo(() => {
    const q = normalise(search);

    const flows = processFlows.filter((f) => {
      if (categoryFilter !== "All" && f.category !== categoryFilter) return false;
      if (moduleFilter !== "All" && f.module !== moduleFilter) return false;
      return true;
    });

    const matchMap: Record<string, Set<string>> = {};
    const filtered = flows.filter((f) => {
      if (!q) {
        matchMap[f.id] = new Set();
        return true;
      }
      const flowText = normalise(f.titleEN + " " + f.titleAR + " " + f.descriptionEN + " " + f.tcodes.join(" "));
      const matchedSteps = new Set<string>();

      f.steps.forEach((s) => {
        const stepText = normalise(
          [s.labelEN, s.labelAR ?? "", s.descriptionEN ?? "", s.role ?? "", s.tcode ?? "", s.note ?? ""].join(" ")
        );
        if (stepText.includes(q)) matchedSteps.add(s.id);
      });

      matchMap[f.id] = matchedSteps;
      return flowText.includes(q) || matchedSteps.size > 0;
    });

    return { filteredFlows: filtered, matchIdsByFlow: matchMap };
  }, [search, categoryFilter, moduleFilter]);

  // ── Auto-expand flows with matches ───────────────────────────────────────
  useEffect(() => {
    if (!search) return;
    const toExpand = new Set(expandedIds);
    let changed = false;
    filteredFlows.forEach((f) => {
      if ((matchIdsByFlow[f.id]?.size ?? 0) > 0 && !toExpand.has(f.id)) {
        toExpand.add(f.id);
        changed = true;
      }
    });
    if (changed) setExpandedIds(toExpand);
    // scroll to first match
    setTimeout(() => firstMatchRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filteredFlows]);

  function toggleExpand(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const handleSelectStep = useCallback((s: ProcessStep) => {
    setSelectedStep((prev) => (prev?.id === s.id ? null : s));
  }, []);

  const handleClosePanel = useCallback(() => setSelectedStep(null), []);

  // first flow with match — for scrolling
  const firstMatchFlowId = useMemo(() => {
    return filteredFlows.find((f) => (matchIdsByFlow[f.id]?.size ?? 0) > 0)?.id;
  }, [filteredFlows, matchIdsByFlow]);

  return (
    <div
      className="min-h-screen"
      style={{ background: BG, color: TEXT }}
    >
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-30 border-b"
        style={{ background: "#FAFAF8", borderColor: BORDER }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Link
              href="/hub"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: DARK }}
            >
              AWP
            </Link>
            <div>
              <h1
                className="text-xl font-light leading-none tracking-wide"
                style={{ color: DARK, fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Process Flow
              </h1>
              <p className="text-xs mt-0.5" style={{ color: MUTED }}>
                AWP PP/QM · Business Process Diagrams
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Link
              href="/hub"
              className="text-xs px-3 py-1.5 rounded-full border transition-colors"
              style={{ color: MUTED, borderColor: BORDER, background: BG }}
            >
              ← Hub
            </Link>
            <Link
              href="/logbook"
              className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:border-green-600"
              style={{ color: MUTED, borderColor: BORDER, background: BG }}
            >
              T-Code Library
            </Link>
            <button
              onClick={toggleLang}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors"
              style={{ color: MUTED, borderColor: BORDER, background: BG }}
            >
              {lang === "EN" ? "العربية" : "English"}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, color: "white" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C8DFC5" }}>
            Al-Watania Poultry · SAP Business Process Diagrams
          </p>
          <h2
            className="text-3xl sm:text-4xl font-light leading-tight mb-3 max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {lang === "AR" ? "مخططات سير العمليات" : "AWP Process Flow Diagrams"}
          </h2>
          <p className="text-sm max-w-xl leading-relaxed mb-6" style={{ color: "#A8C4A8" }}>
            {lang === "AR"
              ? "العمليات التجارية الكاملة من الأصول حتى المعالجة — استخرجت من وثائق BPD الرسمية"
              : "Complete business processes from parent stock to processing — extracted from official AWP BPD documents. Click any step for detail. T-code badges link directly to the Logbook."}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { label: "Process Flows", value: processFlows.length },
              { label: "Steps Total", value: processFlows.reduce((a, f) => a + f.steps.length, 0) },
              { label: "SAP T-codes", value: new Set(processFlows.flatMap((f) => f.tcodes)).size },
            ].map(({ label, value }) => (
              <div key={label}>
                <div
                  className="text-3xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#C8DFC5" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search & Filters ─────────────────────────────────────────────── */}
      <div
        className="sticky top-[73px] z-20 border-b"
        style={{ background: "#FAFAF8", borderColor: BORDER }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-3 items-center">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sm"
              style={{ color: MUTED }}
            >
              🔍
            </span>
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search steps, T-codes, roles…"
              className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border outline-none focus:border-green-700 transition-colors"
              style={{ borderColor: BORDER, background: BG, color: TEXT }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                style={{ color: MUTED }}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Category filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs rounded-lg border px-3 py-2 outline-none"
            style={{ borderColor: BORDER, background: BG, color: TEXT }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>
            ))}
          </select>

          {/* Module filter */}
          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            className="text-xs rounded-lg border px-3 py-2 outline-none"
            style={{ borderColor: BORDER, background: BG, color: TEXT }}
          >
            {modules.map((m) => (
              <option key={m} value={m}>{m === "All" ? "All Modules" : m}</option>
            ))}
          </select>

          {/* Expand/collapse all */}
          <button
            onClick={() => {
              const allExpanded = filteredFlows.every((f) => expandedIds.has(f.id));
              setExpandedIds(allExpanded ? new Set() : new Set(filteredFlows.map((f) => f.id)));
            }}
            className="text-xs px-3 py-2 rounded-lg border transition-colors hover:border-green-700"
            style={{ borderColor: BORDER, background: BG, color: MUTED }}
          >
            {filteredFlows.every((f) => expandedIds.has(f.id)) ? "Collapse All" : "Expand All"}
          </button>

          {/* Search results count */}
          {search && (
            <span className="text-xs" style={{ color: MUTED }}>
              {filteredFlows.length} flow{filteredFlows.length !== 1 ? "s" : ""} · {filteredFlows.reduce((a, f) => a + (matchIdsByFlow[f.id]?.size ?? 0), 0)} step matches
            </span>
          )}
        </div>
      </div>

      {/* ── Flow List ────────────────────────────────────────────────────── */}
      <main
        className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 space-y-4"
        style={{ paddingRight: selectedStep ? "24rem" : undefined }}
      >
        {filteredFlows.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm font-medium" style={{ color: DARK }}>
              No processes match &ldquo;{search}&rdquo;
            </p>
            <p className="text-xs mt-1" style={{ color: MUTED }}>
              Try searching for a T-code, role, or process name
            </p>
          </div>
        )}

        {filteredFlows.map((flow) => (
          <div
            key={flow.id}
            ref={flow.id === firstMatchFlowId ? firstMatchRef : undefined}
          >
            <ProcessFlowCard
              flow={flow}
              lang={lang}
              matchIds={matchIdsByFlow[flow.id] ?? new Set()}
              onSelectStep={handleSelectStep}
              selectedStep={selectedStep}
              isExpanded={expandedIds.has(flow.id)}
              onToggle={() => toggleExpand(flow.id)}
            />
          </div>
        ))}
      </main>

      {/* ── Side Panel ──────────────────────────────────────────────────── */}
      {selectedStep && (
        <StepPanel step={selectedStep} lang={lang} onClose={handleClosePanel} />
      )}

      {/* ── AI Chat ─────────────────────────────────────────────────────── */}
      {chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}

      {/* ── Chat FAB ────────────────────────────────────────────────────── */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="fixed bottom-4 right-4 flex items-center gap-2 text-white text-xs font-semibold px-4 py-3 rounded-full shadow-lg z-50 transition-all hover:scale-105"
        style={{ background: chatOpen ? "#721C24" : DARK }}
        aria-label="Toggle process assistant chat"
      >
        <span>{chatOpen ? "×" : "💬"}</span>
        {!chatOpen && <span>Ask about this process</span>}
      </button>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer
        className="border-t mt-12"
        style={{ borderColor: BORDER }}
      >
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between gap-4 text-xs"
          style={{ color: MUTED }}
        >
          <span>AWP Process Flow · BPD Package 2025</span>
          <div className="flex gap-4">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
