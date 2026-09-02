"use client";

import { useState } from "react";

interface CommonError {
  id: string;
  code: string;
  title: string;
  titleAr: string;
  module: string;
  tcode?: string;
  symptom: string;
  cause: string;
  solution: string[];
  tags: string[];
}

const ERRORS: CommonError[] = [
  {
    id: "err-mrp-no-source",
    code: "ME001",
    title: "No Source of Supply Found (MRP)",
    titleAr: "لا يوجد مصدر توريد (التخطيط)",
    module: "PP",
    tcode: "MD04",
    symptom: "MRP creates a purchase requisition but shows error 'No source of supply' — the PR stays unassigned with no vendor.",
    cause: "The material has no active info record, quota arrangement, or scheduling agreement line for the plant/purchasing org combination.",
    solution: [
      "Go to ME13 — display info record and confirm a valid vendor exists for this material and plant.",
      "If no info record exists, create one in ME11 with the correct vendor, plant, and purchasing org.",
      "Check ME6H for quota arrangement — ensure a valid line exists covering today's date.",
      "Re-run MRP (MD02 for single material) after fixing the source to regenerate the PR with the vendor assigned.",
    ],
    tags: ["mrp", "pr", "source of supply", "vendor"],
  },
  {
    id: "err-goods-receipt-no-po",
    code: "M7022",
    title: "Purchase Order Already Fully Received (MIGO)",
    titleAr: "تم استلام أمر الشراء بالكامل مسبقاً",
    module: "MM",
    tcode: "MIGO",
    symptom: "When posting GR in MIGO against a PO, the system shows 'Purchase order already fully received' and blocks posting.",
    cause: "The PO line item has a delivery tolerance of 0% and the full quantity has already been received. Or the PO quantity was already closed.",
    solution: [
      "Open ME23N to view the PO history tab — confirm if a previous GR already covers the full quantity.",
      "If the GR was posted in error, reverse it in MIGO (Movement Type 102) first.",
      "If more goods are genuinely arriving, ask the buyer to increase the PO quantity in ME22N.",
      "Check delivery tolerance in ME23N → Item → Delivery tab. If 0%, the buyer can adjust it to allow over-delivery.",
    ],
    tags: ["migo", "goods receipt", "po", "tolerance"],
  },
  {
    id: "err-inspection-lot-open",
    code: "QM-IL-01",
    title: "Inspection Lot Not Closed After GR",
    titleAr: "دفعة الفحص لم تُغلق بعد استلام البضاعة",
    module: "QM",
    tcode: "QA32",
    symptom: "Stock sits in quality inspection (unrestricted stock = 0) after goods receipt. Production cannot consume the material.",
    cause: "The inspection lot was created automatically at GR but results have not been recorded and no usage decision posted.",
    solution: [
      "Open QA32 — filter by plant and material to find all open inspection lots.",
      "Select the lot and record results (QE01 or inline in QA32).",
      "Post usage decision: Accepted (A) to release stock to unrestricted, or Rejected (R) to block.",
      "If results recording is not mandatory, the quality coordinator can post UD directly without recording individual results.",
      "For urgent production, the QM supervisor can use QA11 to post a provisional UD.",
    ],
    tags: ["inspection lot", "goods receipt", "usage decision", "stock"],
  },
  {
    id: "err-prod-order-missing-component",
    code: "CO-001",
    title: "Component Shortage on Production Order",
    titleAr: "نقص مكوّن في أمر الإنتاج",
    module: "PP",
    tcode: "CO09",
    symptom: "Production order shows missing components — cannot release or confirm. CO09 availability check shows red.",
    cause: "BOM component stock is insufficient in the production storage location, or the material reservation cannot be fulfilled.",
    solution: [
      "Run CO09 or COOIS to see exactly which components are short and by how much.",
      "Check MMBE for actual stock levels in the correct storage location.",
      "If stock exists in another location, use MIGO / transfer order to move it to the production SLoc.",
      "If stock is genuinely zero, raise an expedite request with purchasing — they can create a PO via ME21N.",
      "Use CO02 to adjust the production order quantity or substitute a component if permitted by engineering.",
    ],
    tags: ["production order", "shortage", "bom", "component"],
  },
  {
    id: "err-confirmation-negative",
    code: "CO11N-01",
    title: "Goods Movement Error During Order Confirmation",
    titleAr: "خطأ في حركة البضاعة عند التأكيد",
    module: "PP",
    tcode: "CO11N",
    symptom: "When confirming a production order in CO11N, system throws an error about goods movement — confirmation cannot be saved.",
    cause: "The backflush component stock is insufficient, or the storage location is incorrect, or a plant-level posting period is closed.",
    solution: [
      "In CO11N check the 'Goods movements' tab — identify which component is causing the error.",
      "Verify MMBE stock for that component in the production SLoc.",
      "If posting period is closed, ask the FICO team to open it via MMPV / MMRV.",
      "Untick 'Final confirmation' if you need to save a partial confirmation, then fix the component issue and re-confirm.",
      "Use CO1P to reprocess failed goods movements after fixing the root cause.",
    ],
    tags: ["confirmation", "backflush", "goods movement", "posting period"],
  },
  {
    id: "err-vendor-invoice-mismatch",
    code: "M8147",
    title: "Invoice Price Variance Blocked (MIRO)",
    titleAr: "فاتورة محجوبة بسبب فرق السعر",
    module: "FICO",
    tcode: "MIRO",
    symptom: "Invoice posted in MIRO is automatically blocked for payment. FI shows the document in blocked status.",
    cause: "The vendor's invoice price differs from the PO price by more than the configured tolerance (price variance check at GR/IR level).",
    solution: [
      "Open MRBR to display blocked invoices and see the exact variance amount.",
      "Compare the invoice price with the PO price in ME23N.",
      "If the invoice is correct and the PO price is wrong, ask purchasing to adjust the PO (ME22N) before releasing.",
      "If within an acceptable range, the payment approver can release the block in MRBR.",
      "If the vendor sent the wrong price, reject and request a corrected invoice.",
    ],
    tags: ["invoice", "miro", "price variance", "blocked payment"],
  },
  {
    id: "err-asset-maintenance",
    code: "PM-IW21-01",
    title: "Notification Cannot Be Saved — Equipment Not Found",
    titleAr: "لا يمكن حفظ الإشعار — المعدة غير موجودة",
    module: "PM",
    tcode: "IW21",
    symptom: "Creating a maintenance notification in IW21 fails with 'Equipment does not exist' even though the machine is physically present.",
    cause: "The equipment master was not created in SAP, or the equipment number entered does not match the master record.",
    solution: [
      "Use IE03 to search for the equipment by description, serial number, or functional location.",
      "If not found, the PM master data team must create an equipment master in IE01 first.",
      "Confirm the correct plant and maintenance plant are selected in the notification header.",
      "If the equipment exists but under a different number, use the correct number from IE03 results.",
    ],
    tags: ["notification", "equipment", "pm", "master data"],
  },
  {
    id: "err-payroll-period-locked",
    code: "HCM-PT-01",
    title: "Time Entry Rejected — Period Already Locked",
    titleAr: "رفض إدخال الوقت — الفترة مقفلة",
    module: "HCM",
    tcode: "CAT2",
    symptom: "Employee tries to enter time in CAT2 or Fiori ESS but gets an error that the payroll period is locked.",
    cause: "The payroll administrator has locked the payroll period for processing. Time entries are frozen to prevent retroactive changes.",
    solution: [
      "Confirm the lock in transaction PA03 (payroll control record) — check the current payroll period status.",
      "If time correction is genuinely needed, the HR/Payroll team can temporarily unlock the period in PA03.",
      "For future periods, ensure employees submit timesheets before the payroll lock date.",
      "Corrections after payroll run must be handled as a retroactive adjustment in the next payroll cycle.",
    ],
    tags: ["time entry", "payroll", "cat2", "period lock"],
  },
  {
    id: "err-delivery-block",
    code: "VL01N-01",
    title: "Outbound Delivery Cannot Be Created — Credit Block",
    titleAr: "لا يمكن إنشاء التسليم الصادر — حجب الائتمان",
    module: "TM",
    tcode: "VL01N",
    symptom: "Trying to create an outbound delivery in VL01N results in a block. The sales order status shows credit hold.",
    cause: "The customer has exceeded their credit limit in SAP Credit Management. The block is applied automatically.",
    solution: [
      "Use FD33 to check the customer's credit exposure vs. credit limit.",
      "The credit manager can release the block in VKM1 (release blocked sales orders) after reviewing the account.",
      "Alternatively, FICO can increase the customer's credit limit in FD32 if business-approved.",
      "For urgent deliveries, a temporary credit override can be authorised by the Finance Director.",
    ],
    tags: ["delivery", "credit block", "vl01n", "customer"],
  },
  {
    id: "err-cost-center",
    code: "KP06-01",
    title: "Cost Center Budget Exceeded — Posting Blocked",
    titleAr: "تجاوز ميزانية مركز التكلفة — الترحيل محجوب",
    module: "FICO",
    tcode: "KP06",
    symptom: "When posting an expense or confirming a production order, the system blocks the posting because the cost center budget is exceeded.",
    cause: "Availability control is active for the cost center and the cumulative actuals have exceeded the planned budget defined in KP06.",
    solution: [
      "Check the cost center balance in KSB1 — see current actuals vs. plan.",
      "Use KP06 to increase the budget if approved by Finance.",
      "The CO team can temporarily set a tolerance in OKB9 or switch off availability control for the period.",
      "For production confirmations, the variance should be investigated — it may indicate an incorrect quantity or a process issue.",
    ],
    tags: ["cost center", "budget", "availability control", "fico"],
  },
];

const MODULE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  PP:   { bg: "#E8F0E4", text: "#1C3A2B", border: "#C8DFC5" },
  QM:   { bg: "#F8EBC5", text: "#7A5E0A", border: "#E8D585" },
  MM:   { bg: "#E0EAF5", text: "#1E3A5F", border: "#B0CCE8" },
  PM:   { bg: "#EDE0F5", text: "#4A1F6B", border: "#CAA8E8" },
  HCM:  { bg: "#FDE8E0", text: "#7A2C1A", border: "#F5B8A4" },
  FICO: { bg: "#E0F5EC", text: "#14532D", border: "#86EFAC" },
  TM:   { bg: "#FFF0E0", text: "#7A4A0A", border: "#F5C87A" },
};

const MODULE_FILTER_OPTIONS = ["All", "PP", "QM", "MM", "PM", "HCM", "FICO", "TM"];

export function CommonErrorsTab() {
  const [search, setSearch] = useState("");
  const [modFilter, setModFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = ERRORS.filter((e) => {
    const q = search.trim().toLowerCase();
    const matchMod = modFilter === "All" || e.module === modFilter;
    const matchSearch = !q ||
      e.title.toLowerCase().includes(q) ||
      e.symptom.toLowerCase().includes(q) ||
      e.tcode?.toLowerCase().includes(q) ||
      e.tags.some((t) => t.includes(q));
    return matchMod && matchSearch;
  });

  const countByMod: Record<string, number> = { All: ERRORS.length };
  ERRORS.forEach((e) => { countByMod[e.module] = (countByMod[e.module] ?? 0) + 1; });

  return (
    <div>
      {/* Header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">Troubleshooting Guide</p>
          <h3 className="text-2xl font-light text-[#1C3A2B]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Common Errors & Solutions
          </h3>
          <p className="text-sm text-[#6B7A6F] mt-1">
            {ERRORS.length} documented errors — expand any to see the cause and step-by-step fix.
          </p>
        </div>
        <div className="relative sm:w-64 shrink-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7A6F] text-sm pointer-events-none">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search errors…"
            className="w-full pl-8 pr-3 py-2 text-sm border border-[#D9D4C8] rounded-lg bg-[#FAFAF8] text-[#2A2E2B] placeholder:text-[#9BA89F] focus:outline-none focus:border-[#4E7862] focus:ring-1 focus:ring-[#4E7862] transition-colors"
          />
        </div>
      </div>

      {/* Module filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {MODULE_FILTER_OPTIONS.map((mod) => {
          const count = countByMod[mod] ?? 0;
          if (mod !== "All" && count === 0) return null;
          const mc = mod !== "All" ? MODULE_COLORS[mod] : null;
          const active = modFilter === mod;
          return (
            <button
              key={mod}
              onClick={() => setModFilter(mod)}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors font-medium"
              style={
                active
                  ? mc
                    ? { background: mc.bg, color: mc.text, borderColor: mc.border }
                    : { background: "#1C3A2B", color: "#F7F5F0", borderColor: "#1C3A2B" }
                  : { background: "#FAFAF8", color: "#6B7A6F", borderColor: "#D9D4C8" }
              }
            >
              {mod} ({count})
            </button>
          );
        })}
      </div>

      {/* Error accordion */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[#6B7A6F] py-8 text-center">
          No errors match your search.{" "}
          {search && <button onClick={() => setSearch("")} className="underline hover:text-[#1C3A2B] transition-colors">Clear</button>}
        </p>
      ) : (
        <div className="space-y-2">
          {filtered.map((err) => {
            const mc = MODULE_COLORS[err.module] ?? { bg: "#EDE9E1", text: "#4A5568", border: "#D9D4C8" };
            const open = expanded === err.id;
            return (
              <div
                key={err.id}
                className="border rounded-xl overflow-hidden transition-all"
                style={{ borderColor: open ? mc.border : "#D9D4C8" }}
              >
                {/* Accordion header */}
                <button
                  onClick={() => setExpanded(open ? null : err.id)}
                  className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-[#F7F5F0] transition-colors"
                  style={{ background: open ? mc.bg : "#FAFAF8" }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[9px] font-semibold px-1.5 py-0.5 rounded shrink-0"
                        style={{ background: mc.bg, color: mc.text, border: `1px solid ${mc.border}` }}
                      >
                        {err.module}
                      </span>
                      {err.tcode && (
                        <code className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#1C3A2B]/10 text-[#1C3A2B]">
                          {err.tcode}
                        </code>
                      )}
                      <span className="text-[10px] text-[#9BA89F] font-mono">{err.code}</span>
                    </div>
                    <p className="text-sm font-medium text-[#2A2E2B] leading-snug">{err.title}</p>
                    <p className="text-xs text-[#6B7A6F] mt-0.5">{err.titleAr}</p>
                  </div>
                  <span className="text-[#6B7A6F] text-lg leading-none shrink-0 mt-0.5">{open ? "−" : "+"}</span>
                </button>

                {/* Accordion body */}
                {open && (
                  <div className="px-5 pb-5 pt-3 border-t" style={{ borderColor: mc.border + "50", background: "#FAFAF8" }}>
                    {/* Symptom */}
                    <div className="mb-4">
                      <p className="text-[10px] font-semibold text-[#9B3030] uppercase tracking-widest mb-1.5">🔴 Symptom</p>
                      <p className="text-sm text-[#2A2E2B] leading-relaxed bg-[#FDE8E8] rounded-lg px-3 py-2">{err.symptom}</p>
                    </div>
                    {/* Cause */}
                    <div className="mb-4">
                      <p className="text-[10px] font-semibold text-[#7A5E0A] uppercase tracking-widest mb-1.5">⚠ Root Cause</p>
                      <p className="text-sm text-[#2A2E2B] leading-relaxed bg-[#FFF8E8] rounded-lg px-3 py-2">{err.cause}</p>
                    </div>
                    {/* Solution */}
                    <div>
                      <p className="text-[10px] font-semibold text-[#1C3A2B] uppercase tracking-widest mb-2">✅ How to Fix</p>
                      <ol className="space-y-2">
                        {err.solution.map((step, i) => (
                          <li key={i} className="flex gap-3 items-start">
                            <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5" style={{ background: mc.bg, color: mc.text }}>
                              {i + 1}
                            </span>
                            <p className="text-sm text-[#2A2E2B] leading-relaxed">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#D9D4C8]">
                      {err.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[#EDE9E1] text-[#6B7A6F]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Contribute callout */}
      <div className="mt-8 border border-dashed border-[#C8DFC5] rounded-xl p-5 text-center bg-[#F4FAF4]">
        <p className="text-sm font-medium text-[#1C3A2B] mb-1">Found an error not listed here?</p>
        <p className="text-xs text-[#6B7A6F]">Document the symptom, cause, and fix — raise it with your team lead to add it to this guide.</p>
      </div>
    </div>
  );
}
