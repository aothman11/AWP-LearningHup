"use client";

import { useState } from "react";
import Link from "next/link";
import { processFlows } from "@/data/process-flows";
import type { ProcessFlow, ProcessStep } from "@/data/process-flows";

const MODULE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PP:       { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5" },
  QM:       { bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585" },
  "PP/QM":  { bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8" },
  Physical: { bg: "#EDE9E1", text: "#64748B", border: "#D9D4C8" },
};

const STEP_ICONS: Record<string, string> = {
  start:      "▶",
  end:        "⏹",
  action:     "⚡",
  decision:   "◆",
  document:   "📄",
  subprocess: "⧉",
};

const STEP_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  start:      { bg: "#E8F0E4", border: "#4E7862", text: "#1C3A2B" },
  end:        { bg: "#F5E8E8", border: "#9B3030", text: "#6B1414" },
  action:     { bg: "#FAFAF8", border: "#D9D4C8", text: "#2A2E2B" },
  decision:   { bg: "#FFF8E8", border: "#C49A1A", text: "#7A5E0A" },
  document:   { bg: "#E8F0FA", border: "#4A6A9B", text: "#1E3A5F" },
  subprocess: { bg: "#F0E8FA", border: "#6A4A9B", text: "#4A1F6B" },
};

function StepCard({ step }: { step: ProcessStep }) {
  const sc = STEP_COLORS[step.type] ?? STEP_COLORS.action;
  return (
    <div
      className="relative rounded-lg border px-4 py-3 text-sm"
      style={{ background: sc.bg, borderColor: sc.border }}
    >
      {step.warning && (
        <span className="absolute -top-2 -right-2 text-xs bg-amber-100 text-amber-700 border border-amber-300 rounded-full px-1.5 py-0.5 font-medium">⚠ Verify</span>
      )}
      <div className="flex items-start gap-2">
        <span className="text-base shrink-0 mt-0.5" style={{ color: sc.text }}>{STEP_ICONS[step.type]}</span>
        <div className="flex-1 min-w-0">
          <p className="font-medium leading-snug" style={{ color: sc.text }}>{step.labelEN}</p>
          {step.labelAR && (
            <p className="text-xs text-[#6B7A6F] mt-0.5">{step.labelAR}</p>
          )}
          {step.role && <p className="text-[11px] text-[#6B7A6F] mt-1">👤 {step.role}</p>}
          {step.note && <p className="text-[11px] text-[#6B7A6F] mt-1 italic">{step.note}</p>}
          {step.tcode && (
            <span className="inline-block mt-1.5 text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#1C3A2B]/10 text-[#1C3A2B]">
              {step.tcode}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function FlowDetail({ flow, onBack }: { flow: ProcessFlow; onBack: () => void }) {
  const mc = MODULE_COLORS[flow.module] ?? MODULE_COLORS["PP/QM"];
  const uniqueTcodes = [...new Set(flow.tcodes)];

  return (
    <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl overflow-hidden">
      {/* Detail header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-[#D9D4C8]">
        <button
          onClick={onBack}
          className="text-sm text-[#6B7A6F] hover:text-[#1C3A2B] transition-colors"
        >
          ← Back
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded" style={{ background: mc.bg, color: mc.text }}>{flow.module}</span>
            <span className="text-[10px] text-[#6B7A6F]">{flow.category}</span>
          </div>
          <h4 className="text-lg font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {flow.titleEN}
          </h4>
          <p className="text-xs text-[#6B7A6F] mt-0.5">{flow.titleAR}</p>
        </div>
        <Link
          href="/process-flow"
          className="shrink-0 text-xs text-[#4E7862] hover:text-[#1C3A2B] transition-colors"
        >
          Full view →
        </Link>
      </div>

      {/* Description + T-codes */}
      <div className="px-6 py-4 border-b border-[#D9D4C8] flex flex-col sm:flex-row gap-4">
        <p className="text-sm text-[#6B7A6F] flex-1 leading-relaxed">{flow.descriptionEN}</p>
        {uniqueTcodes.length > 0 && (
          <div className="shrink-0">
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-2">T-Codes Used</p>
            <div className="flex flex-wrap gap-1">
              {uniqueTcodes.map((tc) => (
                <span key={tc} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#E8F0E4] text-[#1C3A2B]">{tc}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Steps */}
      <div className="px-6 py-5">
        <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-4">
          Process Steps ({flow.steps.length})
        </p>
        <div className="flex flex-col gap-2 max-w-2xl">
          {flow.steps.map((step, i) => (
            <div key={step.id} className="flex gap-3 items-start">
              {/* connector line */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold bg-[#1C3A2B]/10 text-[#1C3A2B]">{i + 1}</span>
                {i < flow.steps.length - 1 && <div className="w-px flex-1 bg-[#D9D4C8] mt-1 min-h-[12px]" />}
              </div>
              <div className="flex-1 pb-2">
                <StepCard step={step} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProcessFlowTab() {
  const [selected, setSelected] = useState<ProcessFlow | null>(null);
  const [search, setSearch] = useState("");

  const filtered = processFlows.filter((f) => {
    const q = search.trim().toLowerCase();
    return !q || f.titleEN.toLowerCase().includes(q) || f.titleAR?.includes(q) || f.category.toLowerCase().includes(q);
  });

  if (selected) {
    return <FlowDetail flow={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">AWP Process Maps</p>
          <h3 className="text-2xl font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Process Flow
          </h3>
          <p className="text-sm text-[#6B7A6F] mt-1">
            {processFlows.length} end-to-end process flows — click to walk through each step.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative sm:w-56">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">🔍</span>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search flows…"
              className="w-full pl-8 pr-3 py-2 text-sm border border-[#D9D4C8] rounded-lg bg-[#FAFAF8] text-[#2A2E2B] placeholder:text-[#9BA89F] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
            />
          </div>
          <Link
            href="/process-flow"
            className="text-xs font-medium px-3 py-2 bg-[#1C3A2B] text-[#F7F5F0] rounded-full hover:bg-[#2C5040] transition-colors shrink-0"
          >
            Full view →
          </Link>
        </div>
      </div>

      {/* Flow cards grid */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[#6B7A6F] py-8 text-center">No flows match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((flow) => {
            const mc = MODULE_COLORS[flow.module] ?? MODULE_COLORS["PP/QM"];
            return (
              <button
                key={flow.id}
                onClick={() => setSelected(flow)}
                className="text-left bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl p-5 hover:border-[#4E7862] hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded" style={{ background: mc.bg, color: mc.text }}>{flow.module}</span>
                  <span className="text-[10px] text-[#6B7A6F]">{flow.category}</span>
                </div>
                <h4 className="text-base font-medium text-[#1C3A2B] mb-1 leading-snug" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "17px" }}>
                  {flow.titleEN}
                </h4>
                <p className="text-xs text-[#6B7A6F] mb-3 leading-relaxed line-clamp-2">{flow.descriptionEN}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#6B7A6F]">{flow.steps.length} steps · {flow.tcodes.length} T-codes</span>
                  <span className="text-[10px] text-[#4E7862] opacity-0 group-hover:opacity-100 transition-opacity">View flow →</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
