"use client";

import { useState } from "react";

interface Step {
  id: string;
  label: string;
  labelAr: string;
  tCodes: string[];
  note?: string;
}

interface Phase {
  id: string;
  title: string;
  titleAr: string;
  color: string;       // border + header bg
  textColor: string;
  dotColor: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: "planning",
    title: "Planning",
    titleAr: "التخطيط",
    color: "#E8F0E4",
    textColor: "#1C3A2B",
    dotColor: "#1C3A2B",
    steps: [
      {
        id: "demand",
        label: "Demand Entry",
        labelAr: "إدخال الطلب",
        tCodes: ["MD61", "MC87"],
        note: "Planners enter planned independent requirements (PIRs) as forecasts via MD61, or transfer demand from Sales & Operations Planning (SOP). Sales orders also create dependent demand automatically.",
      },
      {
        id: "mrp",
        label: "MRP Run",
        labelAr: "تشغيل MRP",
        tCodes: ["MD01", "MD02"],
        note: "Net requirements are calculated. Planned orders for in-house production and purchase requisitions for external procurement are generated automatically.",
      },
      {
        id: "exceptions",
        label: "Review Exceptions",
        labelAr: "مراجعة الاستثناءات",
        tCodes: ["MD06", "MD04"],
        note: "Planners work through rescheduling proposals, shortage alerts, and cancellation messages every morning using the MRP list (MD06) and stock/requirements list (MD04).",
      },
      {
        id: "convert",
        label: "Convert Orders",
        labelAr: "تحويل الأوامر",
        tCodes: ["MD16", "CO41"],
        note: "Planned orders are converted: MD16 converts purchase requisitions for external procurement; CO41 mass-converts planned orders into production orders for the shop floor.",
      },
    ],
  },
  {
    id: "procurement",
    title: "Procurement",
    titleAr: "الشراء",
    color: "#F8EBC5",
    textColor: "#7A5E0A",
    dotColor: "#7A5E0A",
    steps: [
      {
        id: "pr",
        label: "Purchase Requisition",
        labelAr: "طلب الشراء",
        tCodes: ["ME51N", "ME52N", "ME53N"],
        note: "MRP generates purchase requisitions automatically. Buyers review and adjust quantities, dates, and source of supply before converting to PO.",
      },
      {
        id: "po",
        label: "Purchase Order",
        labelAr: "أمر الشراء",
        tCodes: ["ME21N", "ME22N"],
        note: "Buyers convert purchase requisitions into purchase orders sent to vendors. Source list and info records drive automatic source determination.",
      },
      {
        id: "gr-mm",
        label: "Goods Receipt",
        labelAr: "استلام البضاعة",
        tCodes: ["MIGO"],
        note: "Vendor delivers components. MIGO posts GR against the PO. If QM active, stock lands in quality inspection.",
      },
      {
        id: "gr-inspection",
        label: "GR Inspection",
        labelAr: "فحص الاستلام",
        tCodes: ["QE51N", "QA11", "QA32"],
        note: "QM records results for vendor inspection lot and posts usage decision — releasing stock to unrestricted.",
      },
    ],
  },
  {
    id: "production",
    title: "Production",
    titleAr: "الإنتاج",
    color: "#EDE9E1",
    textColor: "#2A2E2B",
    dotColor: "#3D6B52",
    steps: [
      {
        id: "order",
        label: "Create Production Order",
        labelAr: "إنشاء أمر الإنتاج",
        tCodes: ["CO01", "CO03"],
        note: "BOM is exploded into components, routing is copied in. Order is released for shop-floor execution.",
      },
      {
        id: "gi",
        label: "Issue Components",
        labelAr: "إصدار المكونات",
        tCodes: ["CO11N", "CO27"],
        note: "With backflush active, components are issued automatically when the operation is confirmed via CO11N — no separate GI step needed. For non-backflush materials, CO27 posts collective goods issue (movement type 261) to the production order.",
      },
      {
        id: "inprocess",
        label: "In-Process Inspection",
        labelAr: "الفحص أثناء الإنتاج",
        tCodes: ["QE51N", "QA11"],
        note: "At inspection gates in the routing, results are recorded and usage decisions made before production can continue.",
      },
      {
        id: "confirm",
        label: "Confirm Production",
        labelAr: "تأكيد الإنتاج",
        tCodes: ["CO11N", "CO15"],
        note: "Yield and scrap quantities confirmed. Actual times posted. Finished goods received into stock.",
      },
    ],
  },
  {
    id: "quality",
    title: "QM Release",
    titleAr: "قرار الجودة",
    color: "#D4EFE0",
    textColor: "#1C3A2B",
    dotColor: "#4E7862",
    steps: [
      {
        id: "fg-lot",
        label: "FG Inspection Lot",
        labelAr: "دفعة فحص المنتج النهائي",
        tCodes: ["QA01", "QA02"],
        note: "Finished goods GR triggers automatic inspection lot (type 04). Stock is held in quality inspection until released.",
      },
      {
        id: "results",
        label: "Record Results",
        labelAr: "تسجيل النتائج",
        tCodes: ["QE51N", "QE01"],
        note: "QC lab records physical, chemical, or microbiological test results against the inspection characteristics.",
      },
      {
        id: "ud",
        label: "Usage Decision",
        labelAr: "قرار الاستخدام",
        tCodes: ["QA11", "QA16", "QGA1"],
        note: "QM manager accepts or rejects the lot. Stock moves from quality-inspection to unrestricted (or blocked).",
      },
    ],
  },
  {
    id: "dispatch",
    title: "Dispatch",
    titleAr: "الشحن",
    color: "#EDE9E1",
    textColor: "#2A2E2B",
    dotColor: "#6B7A6F",
    steps: [
      {
        id: "stock-check",
        label: "Stock Visibility",
        labelAr: "رؤية المخزون",
        tCodes: ["MB52", "MD04"],
        note: "Confirmed unrestricted stock is visible to SD for delivery creation and ATP (available-to-promise) confirmation.",
      },
      {
        id: "coa",
        label: "Quality Certificate",
        labelAr: "شهادة الجودة",
        tCodes: ["QV51", "QV52"],
        note: "Certificate of Analysis issued to the customer — pulls test results directly from the closed inspection lot.",
      },
      {
        id: "traceability",
        label: "Batch Traceability",
        labelAr: "تتبع الدفعة",
        tCodes: ["MB57", "MSC1N"],
        note: "Full batch genealogy from raw material receipt to finished goods dispatch — essential for recalls and audits.",
      },
    ],
  },
];

// ─── master-data sidebar ──────────────────────────────────────────────────────
const masterData = [
  { label: "Inspection Plans", tCodes: ["QP01", "QP02"], note: "Define what is inspected — characteristics, tolerances, and sampling." },
  { label: "Master Inspection Characteristics", tCodes: ["QS23", "QS41"], note: "Reusable measurement definitions with limits and sampling procedures. QS23 manages characteristic master data; QS41 manages inspection methods." },
  { label: "Routings", tCodes: ["CA01", "CA02"], note: "Define production operations and work centres. Inspection gates sit here." },
  { label: "Bills of Materials", tCodes: ["CS01", "CS02"], note: "Component lists exploded by MRP and production orders." },
  { label: "Quality Info Records", tCodes: ["QI01"], note: "Control vendor inspection at GR — certificate requirements and block rules." },
  { label: "Sampling Procedures", tCodes: ["QS31"], note: "AQL-based or fixed sample sizes for each inspection characteristic." },
];

interface Props {
  onTcodeSelect: (tcode: string) => void;
}

export function ProcessFlow({ onTcodeSelect }: Props) {
  const [activeStep, setActiveStep] = useState<Step | null>(null);

  function handleTcode(tc: string) {
    onTcodeSelect(tc);
  }

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-6">
        <h2
          className="text-5xl font-light text-[#1C3A2B] mb-1"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          PP / QM Process Chain
        </h2>
        <p
          className="text-sm text-[#6B7A6F] text-right mb-3"
          style={{ fontFamily: "'Sakkal Majalla', serif", direction: "rtl" }}
        >
          سلسلة عمليات التخطيط والإنتاج وإدارة الجودة
        </p>
        <p className="text-xs text-[#6B7A6F] leading-relaxed max-w-2xl">
          The end-to-end process from demand signal through dispatch. Click any T-code to jump to its entry in the reference. Hover a step to read the context.
        </p>
      </div>

      {/* Flow — horizontal phases */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-4 min-w-max">
          {phases.map((phase, pi) => (
            <div key={phase.id} className="flex items-start gap-4">
              {/* Phase column */}
              <div className="w-52 shrink-0">
                {/* Phase header */}
                <div
                  className="rounded-2xl border px-4 py-2 mb-3"
                  style={{ background: phase.color, borderColor: phase.color }}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: phase.textColor }}>
                    Phase {pi + 1}
                  </div>
                  <div className="text-base font-medium" style={{ color: phase.textColor, fontFamily: "'Cormorant Garamond', serif", fontSize: "20px" }}>
                    {phase.title}
                  </div>
                  <div className="text-xs" style={{ color: phase.textColor, opacity: 0.7, fontFamily: "'Sakkal Majalla', serif" }}>
                    {phase.titleAr}
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  {phase.steps.map((step, si) => (
                    <button
                      key={step.id}
                      className={`w-full text-left bg-[#FAFAF8] border rounded-xl p-3 transition-all text-sm group ${
                        activeStep?.id === step.id
                          ? "border-[#4E7862] shadow-sm"
                          : "border-[#D9D4C8] hover:border-[#4E7862] hover:bg-[#E8F0E4]"
                      }`}
                      onClick={() => setActiveStep(activeStep?.id === step.id ? null : step)}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className="w-4 h-4 rounded-full text-[9px] font-bold text-white flex items-center justify-center shrink-0"
                          style={{ background: phase.dotColor }}
                        >
                          {si + 1}
                        </span>
                        <span className="text-xs font-medium text-[#2A2E2B] leading-tight">{step.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 ml-6">
                        {step.tCodes.map((tc) => (
                          <span
                            key={tc}
                            role="button"
                            tabIndex={0}
                            onClick={(e) => { e.stopPropagation(); handleTcode(tc); }}
                            onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); handleTcode(tc); } }}
                            className="text-[10px] font-light text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-2 py-0.5 rounded-lg hover:bg-[#C8DFC5] cursor-pointer transition-colors"
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "12px" }}
                            title={`Jump to ${tc}`}
                          >
                            {tc}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Arrow between phases */}
              {pi < phases.length - 1 && (
                <div className="self-center shrink-0 text-[#D9D4C8] text-2xl mt-8">→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step detail panel */}
      {activeStep && (
        <div className="bg-[#FAFAF8] border border-[#4E7862] rounded-2xl p-5 flex items-start gap-4">
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">Step Detail</p>
            <h3 className="text-base font-medium text-[#1C3A2B] mb-1">{activeStep.label}</h3>
            <p className="text-sm text-[#2A2E2B] leading-relaxed mb-3">{activeStep.note}</p>
            <div className="flex flex-wrap gap-2">
              {activeStep.tCodes.map((tc) => (
                <button
                  key={tc}
                  onClick={() => handleTcode(tc)}
                  className="text-sm font-light text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-3 py-1.5 rounded-xl hover:bg-[#C8DFC5] transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "15px" }}
                >
                  {tc} — view entry ↗
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setActiveStep(null)}
            className="text-[#6B7A6F] hover:text-[#1C3A2B] text-lg leading-none shrink-0"
          >
            ×
          </button>
        </div>
      )}

      {/* Master Data sidebar */}
      <section>
        <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">
          Master Data — Prerequisites for the Entire Chain
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {masterData.map((md) => (
            <div key={md.label} className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-4">
              <p className="text-xs font-medium text-[#2A2E2B] mb-1">{md.label}</p>
              <p className="text-[11px] text-[#6B7A6F] leading-relaxed mb-2">{md.note}</p>
              <div className="flex flex-wrap gap-1.5">
                {md.tCodes.map((tc) => (
                  <button
                    key={tc}
                    onClick={() => handleTcode(tc)}
                    className="text-[11px] font-light text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-2.5 py-0.5 rounded-lg hover:bg-[#C8DFC5] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {tc} ↗
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
