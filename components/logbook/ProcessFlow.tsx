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
  eyebrow: string;   // "PHASE 01"
  title: string;
  titleAr: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: "planning",
    eyebrow: "PHASE 01",
    title: "Planning",
    titleAr: "التخطيط",
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
    eyebrow: "PHASE 02",
    title: "Procurement",
    titleAr: "الشراء",
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
    eyebrow: "PHASE 03",
    title: "Production",
    titleAr: "الإنتاج",
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
        tCodes: ["CO27"],
        note: "CO27 posts collective goods issue (movement type 261) for non-backflush components. For backflush-flagged materials, the goods issue happens automatically during confirmation (step 4 — CO11N) with no separate GI posting required.",
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
    eyebrow: "PHASE 04",
    title: "QM Release",
    titleAr: "قرار الجودة",
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
    eyebrow: "PHASE 05",
    title: "Dispatch",
    titleAr: "الشحن",
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

const masterData = [
  { label: "Inspection Plans", tCodes: ["QP01", "QP02"], note: "Define what is inspected — characteristics, tolerances, and sampling." },
  { label: "Master Inspection Characteristics", tCodes: ["QS23", "QS41"], note: "Reusable measurement definitions with limits and sampling procedures." },
  { label: "Routings", tCodes: ["CA01", "CA02"], note: "Define production operations and work centres. Inspection gates sit here." },
  { label: "Bills of Materials", tCodes: ["CS01", "CS02"], note: "Component lists exploded by MRP and production orders." },
  { label: "Quality Info Records", tCodes: ["QI01"], note: "Control vendor inspection at GR — certificate requirements and block rules." },
  { label: "Sampling Procedures", tCodes: ["QS31"], note: "AQL-based or fixed sample sizes for each inspection characteristic." },
];

interface Props {
  onTcodeSelect: (tcode: string) => void;
}

export function ProcessFlow({ onTcodeSelect }: Props) {
  const [activeStep, setActiveStep] = useState<{ phaseId: string; step: Step } | null>(null);

  function selectStep(phaseId: string, step: Step) {
    setActiveStep((prev) =>
      prev?.step.id === step.id ? null : { phaseId, step }
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#797776",
          marginBottom: "8px",
        }}>
          End-to-End Process Chain
        </p>
        <h2 style={{
          fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
          fontSize: "48px",
          fontWeight: 400,
          letterSpacing: "-0.96px",
          lineHeight: 1.2,
          color: "#242424",
          margin: 0,
        }}>
          PP / QM Pipeline
        </h2>
        <p style={{
          fontFamily: "'Sakkal Majalla', serif",
          direction: "rtl",
          fontSize: "14px",
          color: "#797776",
          marginTop: "4px",
        }}>
          سلسلة عمليات التخطيط والإنتاج وإدارة الجودة
        </p>
        <p style={{
          fontSize: "12px",
          color: "#797776",
          marginTop: "10px",
          maxWidth: "560px",
          lineHeight: 1.6,
        }}>
          Click any step to expand its context. Click any T-code tag to jump to its reference entry.
        </p>
      </div>

      {/* ── Pipeline ───────────────────────────────────────────────────────── */}
      <div style={{ overflowX: "auto", paddingBottom: "8px" }}>
        <div style={{ display: "flex", gap: "0", minWidth: "max-content", alignItems: "flex-start" }}>
          {phases.map((phase, pi) => (
            <div key={phase.id} style={{ display: "flex", alignItems: "flex-start" }}>

              {/* Phase column */}
              <div style={{ width: "216px", flexShrink: 0 }}>

                {/* Phase header */}
                <div style={{
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #cecac8",
                }}>
                  <p style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#797776",
                    margin: "0 0 4px",
                  }}>
                    {phase.eyebrow}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "24px",
                    fontWeight: 400,
                    letterSpacing: "-0.48px",
                    color: "#242424",
                    margin: "0 0 2px",
                  }}>
                    {phase.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Sakkal Majalla', serif",
                    direction: "rtl",
                    fontSize: "12px",
                    color: "#797776",
                    margin: 0,
                  }}>
                    {phase.titleAr}
                  </p>
                </div>

                {/* Step nodes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {phase.steps.map((step, si) => {
                    const isActive = activeStep?.step.id === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => selectStep(phase.id, step)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          background: isActive ? "#cfdaf5" : "#f6f3f1",
                          border: `1px solid ${isActive ? "#a0b5eb" : "#cecac8"}`,
                          borderRadius: "12px",
                          padding: "12px 14px",
                          cursor: "pointer",
                          transition: "border-color 0.15s, background 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#a0b5eb";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#cecac8";
                          }
                        }}
                      >
                        {/* Step number + label */}
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                          <span style={{
                            flexShrink: 0,
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: isActive ? "#2b59d1" : "#cecac8",
                            color: "#f6f3f1",
                            fontSize: "9px",
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "1px",
                            transition: "background 0.15s",
                          }}>
                            {si + 1}
                          </span>
                          <span style={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#242424",
                            lineHeight: 1.35,
                          }}>
                            {step.label}
                          </span>
                        </div>

                        {/* T-code tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginLeft: "26px" }}>
                          {step.tCodes.map((tc) => (
                            <span
                              key={tc}
                              role="button"
                              tabIndex={0}
                              onClick={(e) => { e.stopPropagation(); onTcodeSelect(tc); }}
                              onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); onTcodeSelect(tc); } }}
                              style={{
                                fontSize: "10px",
                                fontFamily: "var(--font-mono)",
                                letterSpacing: "0.04em",
                                color: isActive ? "#2b59d1" : "#4e4d4d",
                                background: isActive ? "#f6f3f1" : "transparent",
                                border: `1px solid ${isActive ? "#a0b5eb" : "#cecac8"}`,
                                borderRadius: "9999px",
                                padding: "2px 8px",
                                cursor: "pointer",
                                transition: "color 0.1s, border-color 0.1s, background 0.1s",
                                whiteSpace: "nowrap",
                              }}
                              onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.color = "#2b59d1";
                                (e.currentTarget as HTMLElement).style.borderColor = "#2b59d1";
                              }}
                              onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.color = isActive ? "#2b59d1" : "#4e4d4d";
                                (e.currentTarget as HTMLElement).style.borderColor = isActive ? "#a0b5eb" : "#cecac8";
                              }}
                              title={`Jump to ${tc}`}
                            >
                              {tc}
                            </span>
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Phase connector arrow */}
              {pi < phases.length - 1 && (
                <div style={{
                  display: "flex",
                  alignItems: "flex-start",
                  paddingTop: "52px",
                  width: "40px",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                    <line x1="0" y1="8" x2="30" y2="8" stroke="#cecac8" strokeWidth="1" />
                    <polyline points="24,3 32,8 24,13" stroke="#cecac8" strokeWidth="1" fill="none" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Step detail panel ──────────────────────────────────────────────── */}
      {activeStep && (
        <div style={{
          marginTop: "24px",
          background: "#cfdaf5",
          borderRadius: "16px",
          padding: "24px 28px",
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}>
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#797776",
              margin: "0 0 6px",
            }}>
              {phases.find(p => p.id === activeStep.phaseId)?.eyebrow} · Step Detail
            </p>
            <h3 style={{
              fontFamily: "var(--font-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "28px",
              fontWeight: 400,
              letterSpacing: "-0.56px",
              color: "#242424",
              margin: "0 0 10px",
            }}>
              {activeStep.step.label}
            </h3>
            <p style={{
              fontSize: "13px",
              color: "#4e4d4d",
              lineHeight: 1.65,
              margin: "0 0 16px",
              maxWidth: "640px",
            }}>
              {activeStep.step.note}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {activeStep.step.tCodes.map((tc) => (
                <button
                  key={tc}
                  onClick={() => onTcodeSelect(tc)}
                  style={{
                    background: "#2b59d1",
                    color: "#f6f3f1",
                    border: "none",
                    borderRadius: "100px",
                    padding: "8px 20px",
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                >
                  {tc} ↗
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setActiveStep(null)}
            style={{
              background: "transparent",
              border: "1px solid #a0b5eb",
              borderRadius: "9999px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#4e4d4d",
              cursor: "pointer",
              flexShrink: 0,
              fontSize: "16px",
              lineHeight: 1,
            }}
            aria-label="Close detail"
          >
            ×
          </button>
        </div>
      )}

      {/* ── Master Data ────────────────────────────────────────────────────── */}
      <section style={{ marginTop: "48px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "20px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "#cecac8" }} />
          <p style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#797776",
            whiteSpace: "nowrap",
          }}>
            Master Data — Prerequisites for the Entire Chain
          </p>
          <div style={{ flex: 1, height: "1px", background: "#cecac8" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "12px",
        }}>
          {masterData.map((md) => (
            <div
              key={md.label}
              style={{
                background: "#f6f3f1",
                border: "1px solid #cecac8",
                borderRadius: "12px",
                padding: "16px 18px",
              }}
            >
              <p style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#242424",
                margin: "0 0 4px",
              }}>
                {md.label}
              </p>
              <p style={{
                fontSize: "11px",
                color: "#797776",
                lineHeight: 1.55,
                margin: "0 0 10px",
              }}>
                {md.note}
              </p>
              {/* Pipeline node tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {md.tCodes.map((tc) => (
                  <button
                    key={tc}
                    onClick={() => onTcodeSelect(tc)}
                    style={{
                      background: "#f6f3f1",
                      border: "1px solid #cecac8",
                      borderRadius: "9999px",
                      padding: "4px 14px",
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.04em",
                      color: "#4e4d4d",
                      cursor: "pointer",
                      transition: "border-color 0.1s, color 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#2b59d1";
                      (e.currentTarget as HTMLButtonElement).style.color = "#2b59d1";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#cecac8";
                      (e.currentTarget as HTMLButtonElement).style.color = "#4e4d4d";
                    }}
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
