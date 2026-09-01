"use client";

/**
 * ProcessPageClient — individual process page with three tabs:
 *   Tab 1: Overview     — name, description, business owner, module
 *   Tab 2: Business Process — numbered step-by-step stepper
 *   Tab 3: Flow Chart   — placeholder diagram stub
 *
 * Content comes from data/processes.ts (the `Process` type).
 * To add real flow chart images, set `chartImages` on the process object
 * and they will appear automatically in Tab 3.
 */

import { useState } from "react";
import Link from "next/link";
import type { AwpCategory } from "@/data/awp-categories";
import type { Process } from "@/data/processes";
import { useLang } from "@/context/LangContext";

type ProcessTab = "overview" | "business-process" | "flowchart";

interface Props {
  category: AwpCategory;
  process: Process;
}

const MODULE_COLORS: Record<string, { bg: string; text: string }> = {
  PP: { bg: "#1C3A2B", text: "#fff" },
  QM: { bg: "#C49A1A", text: "#fff" },
};

export function ProcessPageClient({ category, process: proc }: Props) {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<ProcessTab>("overview");
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const mc = MODULE_COLORS[proc.module] ?? { bg: "#1C3A2B", text: "#fff" };

  const tabs: { id: ProcessTab; label: string; labelAR: string }[] = [
    { id: "overview",         label: "Overview",         labelAR: "نظرة عامة" },
    { id: "business-process", label: "Business Process", labelAR: "العملية التجارية" },
    { id: "flowchart",        label: "Flow Chart",       labelAR: "مخطط التدفق" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alwatania-logo-white.png"
            alt="Al-Watania Poultry"
            className="h-8 w-auto shrink-0"
          />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F] overflow-x-auto" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors shrink-0">Hub</Link>
            <span className="shrink-0">›</span>
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors shrink-0">AWP Processes</Link>
            <span className="shrink-0">›</span>
            <Link
              href={`/hub/awp-processes/${category.slug}`}
              className="hover:text-[#1C3A2B] transition-colors shrink-0"
            >
              {category.nameEN}
            </Link>
            <span className="shrink-0">›</span>
            <span className="text-[#2A2E2B] font-medium truncate">{proc.titleEN}</span>
          </nav>
        </div>
      </header>

      {/* ── Hero band ───────────────────────────────────────────────────────── */}
      <div className="bg-[#1C3A2B] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-start gap-4">
            <span className="text-5xl select-none shrink-0 mt-1">{proc.icon}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: mc.bg === "#1C3A2B" ? "#4E7862" : mc.bg, color: mc.text }}
                >
                  {proc.module}
                </span>
                <span className="text-[#C8DFC5] text-xs">{proc.duration} · {proc.steps.length} steps</span>
              </div>
              <h1
                className="text-3xl sm:text-4xl font-light leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {lang === "AR" ? proc.titleAR : proc.titleEN}
              </h1>
              <p
                className="text-sm text-[#A8C4A8] mt-1"
                dir={lang === "AR" ? "ltr" : "rtl"}
                lang={lang === "AR" ? "en" : "ar"}
              >
                {lang === "AR" ? proc.titleEN : proc.titleAR}
              </p>
            </div>
          </div>
        </div>

        {/* ── Tab bar inside hero ─────────────────────────────────────────── */}
        <div className="border-t border-[#2a5040]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-current={activeTab === tab.id ? "page" : undefined}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors shrink-0 ${
                  activeTab === tab.id
                    ? "border-[#C49A1A] text-white"
                    : "border-transparent text-[#A8C4A8] hover:text-white"
                }`}
              >
                {lang === "AR" ? tab.labelAR : tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ─────────────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">

        {/* ── Tab 1: Overview ─────────────────────────────────────────────── */}
        {activeTab === "overview" && (
          <div className="max-w-3xl space-y-6">
            {/* Description */}
            <div className="bg-white rounded-xl border border-[#D9D4C8] p-6">
              <h2
                className="text-xl font-light text-[#1C3A2B] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {lang === "AR" ? "وصف العملية" : "Process Description"}
              </h2>
              <p className="text-[#2A2E2B] leading-relaxed">
                {lang === "AR" ? proc.descriptionAR : proc.descriptionEN}
              </p>
            </div>

            {/* Meta grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-[#D9D4C8] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                  {lang === "AR" ? "وحدة النظام" : "System Module"}
                </p>
                <p className="text-lg font-semibold text-[#1C3A2B]">{proc.module}</p>
                <p className="text-xs text-[#6B7A6F] mt-0.5">
                  {proc.module === "PP"
                    ? "SAP Production Planning"
                    : "SAP Quality Management"}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#D9D4C8] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                  {lang === "AR" ? "المدة المقدرة" : "Estimated Duration"}
                </p>
                <p className="text-lg font-semibold text-[#1C3A2B]">{proc.duration}</p>
                <p className="text-xs text-[#6B7A6F] mt-0.5">
                  {lang === "AR" ? `${proc.steps.length} خطوات` : `${proc.steps.length} steps`}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#D9D4C8] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                  {lang === "AR" ? "الأدوار المعنية" : "Roles Involved"}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {proc.roles.map((role) => (
                    <span
                      key={role}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#E8F0E4] text-[#1C3A2B] font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-[#D9D4C8] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                  {lang === "AR" ? "الفئة" : "Category"}
                </p>
                <p className="text-lg font-semibold text-[#1C3A2B]">{category.nameEN}</p>
                <p className="text-xs text-[#6B7A6F] mt-0.5" dir="rtl" lang="ar">
                  {category.nameAR}
                </p>
              </div>
            </div>

            {/* Business owner placeholder */}
            <div className="bg-[#FFF9EC] border border-[#E8D585] rounded-xl p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7A5E0A] mb-1">
                {lang === "AR" ? "مالك العملية التجارية" : "Business Owner"}
              </p>
              <p className="text-sm text-[#5A4200] italic">
                [PLACEHOLDER: Business owner / department to be confirmed]
              </p>
            </div>

            {/* Navigate to next tab */}
            <button
              onClick={() => setActiveTab("business-process")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C3A2B] px-5 py-3 text-sm font-medium text-white hover:bg-[#14291e] transition-colors"
            >
              {lang === "AR" ? "عرض خطوات العملية ←" : "View Process Steps →"}
            </button>
          </div>
        )}

        {/* ── Tab 2: Business Process ──────────────────────────────────────── */}
        {activeTab === "business-process" && (
          <div className="max-w-3xl">
            <div className="mb-6">
              <h2
                className="text-2xl font-light text-[#1C3A2B] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {lang === "AR" ? "خطوات العملية التجارية" : "Business Process Steps"}
              </h2>
              <p className="text-sm text-[#6B7A6F]">
                {lang === "AR"
                  ? "اضغط على أي خطوة لعرض التفاصيل"
                  : "Tap a step to expand its detail"}
              </p>
            </div>

            <ol className="space-y-3">
              {proc.steps.map((step, i) => {
                const isOpen = expandedStep === step.id;
                return (
                  <li key={step.id}>
                    <button
                      onClick={() => setExpandedStep(isOpen ? null : step.id)}
                      className={`w-full text-left rounded-xl border transition-all duration-200 ${
                        isOpen
                          ? "border-[#047836] bg-white shadow-sm"
                          : "border-[#D9D4C8] bg-[#FAFAF8] hover:border-[#4E7862]"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-4">
                        {/* Step number */}
                        <span
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors"
                          style={
                            isOpen
                              ? { background: "#047836", color: "#fff" }
                              : { background: "#E8F0E4", color: "#1C3A2B" }
                          }
                        >
                          {i + 1}
                        </span>

                        {/* Title */}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#1C3A2B] leading-snug">
                            {lang === "AR" ? step.titleAR : step.titleEN}
                          </p>
                          {step.tCode && (
                            <code className="text-xs font-mono text-[#4E7862] mt-0.5">
                              {step.tCode}
                            </code>
                          )}
                        </div>

                        {/* Role badge */}
                        <span className="text-[10px] text-[#6B7A6F] shrink-0 hidden sm:block">
                          {step.role}
                        </span>

                        {/* Decision flag */}
                        {step.isDecisionPoint && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FFF9EC] text-[#7A5E0A] font-semibold border border-[#E8D585] shrink-0">
                            ⬦ Decision
                          </span>
                        )}

                        {/* Chevron */}
                        <span
                          className={`text-[#6B7A6F] transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                        >
                          ▾
                        </span>
                      </div>

                      {/* Expanded detail */}
                      {isOpen && (
                        <div className="px-4 pb-5 border-t border-[#EDE9E1] pt-4 space-y-4">
                          {/* What to do */}
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                              {lang === "AR" ? "ما يجب فعله" : "What To Do"}
                            </p>
                            <p className="text-sm text-[#2A2E2B] leading-relaxed">
                              {lang === "AR" ? step.whatToDoAR : step.whatToDoEN}
                            </p>
                          </div>

                          {/* What SAP does */}
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-1">
                              {lang === "AR" ? "ما يفعله SAP" : "What SAP Does"}
                            </p>
                            <p className="text-sm text-[#2A2E2B] leading-relaxed">
                              {lang === "AR" ? step.whatSAPDoesAR : step.whatSAPDoesEN}
                            </p>
                          </div>

                          {/* Expected output */}
                          <div className="bg-[#E8F0E4] rounded-lg p-3">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#4E7862] mb-1">
                              {lang === "AR" ? "المخرج المتوقع" : "Expected Output"}
                            </p>
                            <p className="text-sm text-[#1C3A2B] leading-relaxed">
                              {lang === "AR" ? step.expectedOutputAR : step.expectedOutputEN}
                            </p>
                          </div>

                          {/* Decision routing */}
                          {step.isDecisionPoint && (
                            <div className="flex gap-3">
                              {step.yesNextStep && (
                                <div className="flex-1 bg-[#E8F0E4] rounded-lg p-3 text-center">
                                  <p className="text-[10px] font-bold text-[#4E7862] mb-0.5">YES →</p>
                                  <p className="text-xs text-[#1C3A2B]">Go to Step {step.yesNextStep}</p>
                                </div>
                              )}
                              {step.noNextStep && (
                                <div className="flex-1 bg-[#FFF0EC] rounded-lg p-3 text-center border border-[#F5C4B4]">
                                  <p className="text-[10px] font-bold text-[#D24918] mb-0.5">NO →</p>
                                  <p className="text-xs text-[#2A2E2B]">Go to Step {step.noNextStep}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setActiveTab("overview")}
                className="inline-flex items-center gap-2 rounded-lg border border-[#D9D4C8] bg-white px-5 py-3 text-sm font-medium text-[#2A2E2B] hover:border-[#4E7862] transition-colors"
              >
                ← {lang === "AR" ? "النظرة العامة" : "Overview"}
              </button>
              <button
                onClick={() => setActiveTab("flowchart")}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1C3A2B] px-5 py-3 text-sm font-medium text-white hover:bg-[#14291e] transition-colors"
              >
                {lang === "AR" ? "عرض مخطط التدفق →" : "View Flow Chart →"}
              </button>
            </div>
          </div>
        )}

        {/* ── Tab 3: Flow Chart ────────────────────────────────────────────── */}
        {activeTab === "flowchart" && (
          <div className="max-w-3xl">
            <div className="mb-6">
              <h2
                className="text-2xl font-light text-[#1C3A2B] mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {lang === "AR" ? "مخطط تدفق العملية" : "Process Flow Chart"}
              </h2>
              <p className="text-sm text-[#6B7A6F]">
                {lang === "AR"
                  ? "تمثيل مرئي لخطوات العملية والأدوار وقرارات التسليم"
                  : "Visual representation of process steps, roles, and handoff decisions"}
              </p>
            </div>

            {/* Chart images if provided */}
            {proc.chartImages && proc.chartImages.length > 0 ? (
              <div className="space-y-4">
                {proc.chartImages.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`${proc.titleEN} flow chart${proc.chartImages!.length > 1 ? ` (${i + 1})` : ""}`}
                    className="w-full rounded-xl border border-[#D9D4C8] shadow-sm"
                  />
                ))}
              </div>
            ) : (
              /* Placeholder diagram */
              <div className="border-2 border-dashed border-[#D9D4C8] rounded-2xl bg-[#FAFAF8] overflow-hidden">
                <div className="p-6 border-b border-dashed border-[#D9D4C8] bg-[#F0F4EE]">
                  <p className="text-xs font-semibold text-[#4E7862] uppercase tracking-widest">
                    Flow Chart Placeholder
                  </p>
                  <p className="text-sm text-[#6B7A6F] mt-0.5">
                    [Flow chart will be added per process — provide the diagram image or data]
                  </p>
                </div>

                {/* Simple SVG stub showing process skeleton */}
                <div className="p-8 flex justify-center overflow-x-auto">
                  <svg
                    viewBox="0 0 480 320"
                    className="w-full max-w-[480px]"
                    aria-label={`${proc.titleEN} — flow chart placeholder`}
                  >
                    {/* Start */}
                    <ellipse cx="240" cy="30" rx="60" ry="20" fill="#1C3A2B" />
                    <text x="240" y="35" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Start</text>

                    {/* Connector */}
                    <line x1="240" y1="50" x2="240" y2="75" stroke="#D9D4C8" strokeWidth="2" markerEnd="url(#arr)" />

                    {/* Steps skeleton */}
                    {proc.steps.slice(0, Math.min(4, proc.steps.length)).map((step, i) => {
                      const y = 80 + i * 60;
                      return (
                        <g key={step.id}>
                          {step.isDecisionPoint ? (
                            <>
                              <polygon
                                points={`240,${y} 290,${y + 22} 240,${y + 44} 190,${y + 22}`}
                                fill="#FFF9EC" stroke="#C49A1A" strokeWidth="1.5"
                              />
                              <text x="240" y={y + 26} textAnchor="middle" fill="#7A5E0A" fontSize="9" fontWeight="600">
                                {step.titleEN.substring(0, 18)}{step.titleEN.length > 18 ? "…" : ""}
                              </text>
                            </>
                          ) : (
                            <>
                              <rect x="165" y={y} width="150" height="38" rx="6" fill="#E8F0E4" stroke="#C8DFC5" strokeWidth="1.5" />
                              <text x="240" y={y + 15} textAnchor="middle" fill="#1C3A2B" fontSize="9" fontWeight="600">
                                {i + 1}. {step.titleEN.substring(0, 20)}{step.titleEN.length > 20 ? "…" : ""}
                              </text>
                              {step.tCode && (
                                <text x="240" y={y + 28} textAnchor="middle" fill="#4E7862" fontSize="8">
                                  {step.tCode}
                                </text>
                              )}
                            </>
                          )}
                          {i < Math.min(3, proc.steps.length - 1) && (
                            <line
                              x1="240" y1={y + (step.isDecisionPoint ? 44 : 38)}
                              x2="240" y2={y + (step.isDecisionPoint ? 44 : 38) + 17}
                              stroke="#D9D4C8" strokeWidth="2"
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Ellipsis if more steps */}
                    {proc.steps.length > 4 && (
                      <>
                        <text x="240" y="330" textAnchor="middle" fill="#9BA89F" fontSize="14" fontWeight="bold">
                          ···
                        </text>
                        <text x="240" y="345" textAnchor="middle" fill="#9BA89F" fontSize="9">
                          +{proc.steps.length - 4} more steps
                        </text>
                      </>
                    )}

                    {/* Arrow marker */}
                    <defs>
                      <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 Z" fill="#D9D4C8" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="p-4 bg-[#FFF9EC] border-t border-dashed border-[#E8D585]">
                  <p className="text-xs text-[#7A5E0A]">
                    💡 To add a real flow chart: set <code className="font-mono bg-[#F8EBC5] px-1 rounded">chartImages</code> on the process object in{" "}
                    <code className="font-mono bg-[#F8EBC5] px-1 rounded">data/processes.ts</code>, pointing to images in <code className="font-mono bg-[#F8EBC5] px-1 rounded">/public</code>.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8">
              <button
                onClick={() => setActiveTab("business-process")}
                className="inline-flex items-center gap-2 rounded-lg border border-[#D9D4C8] bg-white px-5 py-3 text-sm font-medium text-[#2A2E2B] hover:border-[#4E7862] transition-colors"
              >
                ← {lang === "AR" ? "خطوات العملية" : "Business Process Steps"}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="mt-8 border-t border-[#D9D4C8] bg-[#FAFAF8] py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-xs text-[#6B7A6F] flex items-center justify-between gap-4 flex-wrap">
          <span>AWP SAP Central Learning Hub · {category.nameEN} · {proc.titleEN}</span>
          <div className="flex gap-4">
            <Link
              href={`/hub/awp-processes/${category.slug}`}
              className="hover:text-[#1C3A2B] transition-colors"
            >
              ← {category.nameEN}
            </Link>
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
