"use client";

import { useState } from "react";
import { ppIntegrations } from "@/data/pp-integrations";
import type { IntegrationModule } from "@/data/pp-integrations";

const DIRECTION_LABELS = {
  bidirectional: "Bidirectional",
  "pp-to": "PP → Module",
  "to-pp": "Module → PP",
};

const DIRECTION_ICON = {
  bidirectional: "↔",
  "pp-to": "→",
  "to-pp": "←",
};

export function IntegrationMap() {
  const [active, setActive] = useState<IntegrationModule>(ppIntegrations[0]);

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl px-7 py-6">
        <div className="flex items-start gap-5">
          <div
            className="text-6xl font-light text-[#1C3A2B] leading-none shrink-0 mt-1"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            PP
          </div>
          <div>
            <h2 className="text-lg font-medium text-[#1C3A2B] mb-1">Production Planning — Module Integrations</h2>
            <p
              className="text-sm text-[#6B7A6F] mb-1"
              style={{ fontFamily: "'Sakkal Majalla', serif", direction: "rtl", textAlign: "right" }}
            >
              تكاملات وحدة تخطيط الإنتاج مع الوحدات الأخرى
            </p>
            <p className="text-sm text-[#4E7862] leading-relaxed mt-3">
              SAP PP is not a standalone module — it sits at the operational centre of the SAP landscape.
              Every production order touches <strong>MM</strong> for materials, <strong>FI/CO</strong> for costs,{" "}
              <strong>QM</strong> for quality gates, <strong>SD</strong> for demand signals, and more.
              Understanding these connections is essential for end-to-end process design and troubleshooting.
            </p>
          </div>
        </div>
      </div>

      {/* Module Selector — hub-and-spoke visual */}
      <div>
        <p className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">Select a module to explore the integration</p>
        <div className="flex flex-wrap gap-3">
          {ppIntegrations.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActive(mod)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border text-sm transition-all ${
                active.id === mod.id
                  ? "border-[#1C3A2B] bg-[#1C3A2B] text-[#F7F5F0]"
                  : "border-[#D9D4C8] bg-[#FAFAF8] text-[#6B7A6F] hover:border-[#4E7862] hover:text-[#2A2E2B] hover:bg-[#E8F0E4]"
              }`}
            >
              <span
                className={`font-light text-xl leading-none ${active.id === mod.id ? "text-[#C8DFC5]" : "text-[#1C3A2B]"}`}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {mod.code}
              </span>
              <span className="font-medium text-xs">{mod.name}</span>
              <span className={`text-xs ml-1 ${active.id === mod.id ? "text-[#C8DFC5]" : "text-[#D9D4C8]"}`}>
                {DIRECTION_ICON[mod.direction]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Module Detail */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Left — Summary */}
        <div className="lg:col-span-1 space-y-4">
          {/* Module header card */}
          <div
            className="rounded-2xl border p-5"
            style={{ background: active.color, borderColor: "#D9D4C8" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "52px",
                  color: active.textColor,
                }}
              >
                {active.code}
              </span>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#D9D4C8] bg-[#FAFAF8] text-[#6B7A6F]">
                {DIRECTION_LABELS[active.direction]}
              </span>
            </div>
            <div className="text-sm font-medium text-[#2A2E2B]">{active.name}</div>
            <div
              className="text-xs text-[#6B7A6F] mt-0.5"
              style={{ fontFamily: "'Sakkal Majalla', serif", direction: "rtl", textAlign: "right" }}
            >
              {active.nameAr}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-5">
            <p className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-3">Overview</p>
            <p className="text-sm text-[#2A2E2B] leading-relaxed">{active.summary}</p>
          </div>

          {/* Key Points */}
          <div className="bg-[#FAFAF8] border border-[#EDE9E1] rounded-2xl p-5">
            <p className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-3">Key Points</p>
            <ul className="space-y-3">
              {active.keyPoints.map((pt, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#2A2E2B] leading-relaxed">
                  <span className="text-[#C8DFC5] mt-0.5 shrink-0 text-base leading-none">◆</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — Flows */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-[10px] text-[#6B7A6F] uppercase tracking-widest">Data &amp; Process Flows</p>
          {active.flows.map((flow, i) => (
            <div key={i} className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-5 space-y-4">
              {/* Flow header */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="font-light text-[#1C3A2B] text-xl leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  PP
                </span>
                <span className="text-[#4E7862] font-medium text-lg">{flow.direction}</span>
                <span
                  className="font-light text-[#1C3A2B] text-xl leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {active.code}
                </span>
                <span className="ml-auto text-xs font-medium text-[#2A2E2B] bg-[#EDE9E1] border border-[#D9D4C8] px-3 py-1 rounded-full">
                  {flow.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#2A2E2B] leading-relaxed">{flow.description}</p>

              {/* T-codes */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] text-[#6B7A6F] uppercase tracking-wide">Key T-Codes:</span>
                {flow.tCodes.map((tc) => (
                  <span
                    key={tc}
                    className="font-light text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-2.5 py-1 rounded-lg text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "15px" }}
                  >
                    {tc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Matrix — compact overview */}
      <div>
        <p className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">Integration Matrix</p>
        <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDE9E1] bg-[#EDE9E1]">
                  <th className="text-left px-5 py-3 text-[10px] text-[#6B7A6F] uppercase tracking-widest font-semibold">Module</th>
                  <th className="text-left px-5 py-3 text-[10px] text-[#6B7A6F] uppercase tracking-widest font-semibold">Direction</th>
                  <th className="text-left px-5 py-3 text-[10px] text-[#6B7A6F] uppercase tracking-widest font-semibold">What PP Sends</th>
                  <th className="text-left px-5 py-3 text-[10px] text-[#6B7A6F] uppercase tracking-widest font-semibold">What PP Receives</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: "QM", sends: "Inspection triggers, scrap data", receives: "Quality decisions, stock release / block" },
                  { code: "MM", sends: "Purchase requisitions, GI postings, GR postings", receives: "Stock levels, material master, vendor deliveries" },
                  { code: "SD", sends: "Confirmed availability (ATP), finished-goods stock", receives: "Sales orders, delivery requirements, demand schedule" },
                  { code: "FI/CO", sends: "Actual costs (GI, labour, overhead), production variances", receives: "Standard costs, budget checks, cost centre assignments" },
                  { code: "PM", sends: "Work centre capacity utilisation", receives: "Maintenance windows, equipment downtime notices" },
                  { code: "WM", sends: "GI/GR requests, staging requirements", receives: "Transfer orders, physical bin confirmation" },
                ].map((row, i) => (
                  <tr
                    key={row.code}
                    className={`border-b border-[#EDE9E1] cursor-pointer transition-colors ${
                      active.code === row.code ? "bg-[#E8F0E4]" : "hover:bg-[#F7F5F0]"
                    }`}
                    onClick={() => {
                      const mod = ppIntegrations.find((m) => m.code === row.code);
                      if (mod) setActive(mod);
                    }}
                  >
                    <td className="px-5 py-3">
                      <span
                        className="font-light text-[#1C3A2B]"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
                      >
                        {row.code}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[#4E7862] font-medium">
                      {DIRECTION_ICON[ppIntegrations.find((m) => m.code === row.code)?.direction ?? "bidirectional"]}
                    </td>
                    <td className="px-5 py-3 text-xs text-[#6B7A6F]">{row.sends}</td>
                    <td className="px-5 py-3 text-xs text-[#6B7A6F]">{row.receives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
