// ─────────────────────────────────────────────────────────────────────────────
// AWP Process Flow Data — extracted from BPD PDF package (Feb–Jun 2026)
// ─────────────────────────────────────────────────────────────────────────────

export type StepType = "start" | "end" | "action" | "decision" | "document" | "subprocess";

export interface ProcessStep {
  id: string;
  type: StepType;
  labelEN: string;
  labelAR?: string;
  descriptionEN?: string;
  descriptionAR?: string;
  role?: string;
  tcode?: string;
  nextId?: string;        // linear next step
  yesId?: string;         // decision: YES branch
  noId?: string;          // decision: NO branch
  swimlane?: string;      // swimlane key this step belongs to
  warning?: boolean;      // ⚠ Verify this step
  note?: string;          // additional note shown on the step card
}

export interface SwimlaneConfig {
  id: string;
  labelEN: string;
  labelAR?: string;
  color: string;
}

export interface ProcessFlow {
  id: string;
  titleEN: string;
  titleAR: string;
  descriptionEN: string;
  descriptionAR?: string;
  plant?: string;
  module: "PP" | "QM" | "PP/QM" | "Physical";
  category: string;
  steps: ProcessStep[];
  swimlanes?: SwimlaneConfig[];
  tcodes: string[];
  source: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Poultry Lifecycle: Parent → Processing (Overview)
//    Source: From Parent to Processing.pdf, FromGPtoProcessing.pdf
// ─────────────────────────────────────────────────────────────────────────────
const poultryLifecycle: ProcessFlow = {
  id: "poultry-lifecycle",
  titleEN: "Poultry Life-cycle: Parent → Processing",
  titleAR: "دورة حياة الدواجن: من الأصول إلى المعالجة",
  descriptionEN:
    "End-to-end business process covering parent rearing, pre-laying, laying (hatching eggs), grading station, hatchery (DOC production), broiler farming, and final processing. This is the master flow connecting all AWP plants.",
  descriptionAR:
    "العملية التجارية الشاملة التي تغطي تربية الأصول والفرز والتفريخ وتربية الدجاج اللاحم والمعالجة النهائية.",
  module: "PP",
  category: "Lifecycle",
  source: "From Parent to Processing.pdf",
  tcodes: ["CO01", "CO11N", "MIGO", "QA32"],
  swimlanes: [
    { id: "parent-rearing", labelEN: "Parent Rearing", labelAR: "تربية الأصول", color: "#FFF3CD" },
    { id: "purchasing", labelEN: "Purchasing Department", labelAR: "قسم المشتريات", color: "#D1ECF1" },
    { id: "parent-prelaying", labelEN: "Parent Pre-Laying", labelAR: "ما قبل الإنتاج", color: "#D4EDDA" },
    { id: "bio-asset", labelEN: "BIO Asset", labelAR: "الأصول البيولوجية", color: "#E2D9F3" },
    { id: "parent-laying", labelEN: "Parent Laying", labelAR: "إنتاج البيض", color: "#FCE4EC" },
    { id: "grading", labelEN: "Grading Station", labelAR: "محطة الفرز", color: "#FFF9C4" },
    { id: "hatchery", labelEN: "Hatchery", labelAR: "المفرخة", color: "#E8F5E9" },
    { id: "broiler", labelEN: "Broiler (27 days)", labelAR: "الدجاج اللاحم", color: "#FBE9E7" },
    { id: "processing", labelEN: "Processing Plant", labelAR: "مصنع المعالجة", color: "#E3F2FD" },
    { id: "sales", labelEN: "Sales", labelAR: "المبيعات", color: "#F3E5F5" },
  ],
  steps: [
    // Parent Rearing
    { id: "lc-s1", type: "start", labelEN: "Start: Check Placement Plan", labelAR: "ابدأ: تحقق من خطة الإيداع", swimlane: "parent-rearing", tcode: "COOIS", nextId: "lc-s2" },
    { id: "lc-s2", type: "action", labelEN: "Receive PO (DOC)", labelAR: "استلام أمر الشراء (صوص)", swimlane: "parent-rearing", tcode: "MIGO", nextId: "lc-s3" },
    { id: "lc-s3", type: "action", labelEN: "Create Production Orders (Pullets 19WK)", labelAR: "إنشاء أوامر الإنتاج (دجاجات 19 أسبوع)", role: "Production Planner", tcode: "CO01", swimlane: "parent-rearing", nextId: "lc-s4" },
    { id: "lc-s4", type: "document", labelEN: "Record Daily QM Data (SAP Fiori)", labelAR: "تسجيل بيانات الجودة اليومية", role: "QM Inspector", tcode: "QA32", swimlane: "parent-rearing", nextId: "lc-s5" },
    { id: "lc-s5", type: "action", labelEN: "Activity Confirmation", labelAR: "تأكيد النشاط", role: "Shop Floor Controller", tcode: "CO11N", swimlane: "parent-rearing", nextId: "lc-s6" },
    { id: "lc-s6", type: "action", labelEN: "GR Pullets 19WK — Close Production Order DLV&TECO", labelAR: "استلام الإنتاج 19 أسبوع — إغلاق الأمر", tcode: "MIGO", swimlane: "parent-rearing", nextId: "lc-s7" },
    // Purchasing
    { id: "lc-pu1", type: "action", labelEN: "Create DOC PO", labelAR: "إنشاء أمر شراء الصوص", role: "Purchasing Department", tcode: "ME21N", swimlane: "purchasing", nextId: "lc-s1" },
    // Parent Pre-Laying
    { id: "lc-s7", type: "action", labelEN: "Create Production Orders (Pullets 24WK)", labelAR: "إنشاء أوامر إنتاج (دجاجات 24 أسبوع)", tcode: "CO01", swimlane: "parent-prelaying", nextId: "lc-s8" },
    { id: "lc-s8", type: "action", labelEN: "GR Pullets 24WK — Close Production Order DLV&TECO", labelAR: "استلام الإنتاج 24 أسبوع — إغلاق الأمر", tcode: "MIGO", swimlane: "parent-prelaying", nextId: "lc-s9" },
    // BIO Asset
    { id: "lc-bio", type: "subprocess", labelEN: "BIO Asset Business Process", labelAR: "عملية الأصول البيولوجية", swimlane: "bio-asset", warning: true, nextId: "lc-s9" },
    // Parent Laying
    { id: "lc-s9", type: "action", labelEN: "Create Production Orders (Hatching Eggs)", labelAR: "إنشاء أوامر إنتاج (بيض التفريخ)", tcode: "CO01", swimlane: "parent-laying", nextId: "lc-s10" },
    { id: "lc-s10", type: "action", labelEN: "Activity Confirmation + Daily Hatching Eggs GR", labelAR: "تأكيد النشاط + استلام بيض التفريخ اليومي", tcode: "CO11N", swimlane: "parent-laying", nextId: "lc-s11" },
    { id: "lc-s11", type: "action", labelEN: "GI By-Product (Pullets 64WK)", labelAR: "إصدار البضائع — منتج ثانوي (دجاجات 64 أسبوع)", tcode: "MIGO", swimlane: "parent-laying", nextId: "lc-d1" },
    { id: "lc-d1", type: "decision", labelEN: "Plan for Sale?", labelAR: "هل هو مخصص للبيع؟", swimlane: "parent-laying", yesId: "lc-sales1", noId: "lc-s12" },
    // Grading Station
    { id: "lc-s12", type: "action", labelEN: "Create Production Orders (Graded Hatching Eggs)", labelAR: "إنشاء أوامر إنتاج (بيض التفريخ المفروز)", tcode: "CO01", swimlane: "grading", nextId: "lc-s13" },
    { id: "lc-s13", type: "action", labelEN: "One Activity Confirmation + GR Graded Hatching Eggs + By-Product (Rejected Eggs)", labelAR: "تأكيد نشاط واحد + استلام البيض المفروز + منتج ثانوي", tcode: "CO11N", swimlane: "grading", nextId: "lc-s14" },
    // Hatchery
    { id: "lc-s14", type: "action", labelEN: "Create Production Orders (Broiler DOC)", labelAR: "إنشاء أوامر إنتاج (صوص الدجاج اللاحم)", tcode: "CO01", swimlane: "hatchery", nextId: "lc-s15" },
    { id: "lc-s15", type: "action", labelEN: "Activity Confirmation + GR DOC — Close Order DLV&TECO", labelAR: "تأكيد النشاط + استلام الصوص — إغلاق الأمر", tcode: "CO11N", swimlane: "hatchery", nextId: "lc-s16" },
    // Broiler
    { id: "lc-s16", type: "action", labelEN: "Create Production Orders (Broiler 27 days)", labelAR: "إنشاء أوامر إنتاج (دجاج لاحم 27 يوم)", tcode: "CO01", swimlane: "broiler", nextId: "lc-s17" },
    { id: "lc-s17", type: "action", labelEN: "Record Daily QM Data + Activity Confirmation + Change Catching Plan", labelAR: "تسجيل بيانات الجودة اليومية + تأكيد النشاط + تغيير خطة الصيد", tcode: "QA32", swimlane: "broiler", nextId: "lc-s18" },
    { id: "lc-s18", type: "action", labelEN: "Prepare Catching Plan + GR From Order", labelAR: "إعداد خطة الصيد + الاستلام من الأمر", tcode: "MIGO", swimlane: "broiler", nextId: "lc-s19" },
    // Processing
    { id: "lc-s19", type: "action", labelEN: "Confirm + GR From Order + GR Carcass", labelAR: "تأكيد + استلام من الأمر + استلام الذبيحة", tcode: "CO11N", swimlane: "processing", nextId: "lc-s20" },
    { id: "lc-s20", type: "action", labelEN: "Finished Product Packaging + Transfer to Store", labelAR: "تغليف المنتج النهائي + نقل إلى المخزن", tcode: "MIGO", swimlane: "processing", nextId: "lc-end" },
    // Sales branch
    { id: "lc-sales1", type: "action", labelEN: "Check Sales Plan → Create Sales Order → Create Delivery → Post Sales Order → Invoice", labelAR: "فحص خطة المبيعات → إنشاء أمر مبيعات → توصيل → ترحيل → فاتورة", swimlane: "sales", nextId: "lc-end" },
    { id: "lc-end", type: "end", labelEN: "End", labelAR: "النهاية" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. PCT Parent Process (House Preparation)
//    Source: SAP Business Process - Production.pdf (page 1, left flow)
// ─────────────────────────────────────────────────────────────────────────────
const pctParentProcess: ProcessFlow = {
  id: "pct-parent-house-prep",
  titleEN: "PCT Parent Process — House Preparation",
  titleAR: "عملية PCT الأصول — تحضير البيوت",
  descriptionEN:
    "One-time house preparation process. PCT Responsible checks the preparation plan, requests disinfectants/medicines, creates a production order for house preparation, confirms the activity, posts house prepared GR, issues to parent rearing order, then DLVTECO closes the order.",
  descriptionAR:
    "عملية تحضير البيوت لمرة واحدة. يتحقق المسؤول من خطة التحضير، ويطلب المطهرات والأدوية، ثم ينشئ أمر إنتاج لتحضير البيت.",
  module: "PP",
  category: "Parent Stock",
  source: "SAP Business Process - Production.pdf",
  tcodes: ["CO01", "CO11N", "MIGO"],
  swimlanes: [
    { id: "pct", labelEN: "PCT Responsible", labelAR: "مسؤول PCT", color: "#FCE4EC" },
    { id: "parent-rearing", labelEN: "Parent Rearing Responsible", labelAR: "مسؤول تربية الأصول", color: "#FFF9C4" },
    { id: "phd", labelEN: "PHD Responsible", labelAR: "مسؤول PHD", color: "#E8F5E9" },
  ],
  steps: [
    { id: "pct-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "pct", nextId: "pct-s2" },
    { id: "pct-s2", type: "action", labelEN: "Check Preparation Plan", labelAR: "تحقق من خطة التحضير", role: "PCT Responsible", swimlane: "pct", nextId: "pct-s3" },
    { id: "pct-s3", type: "action", labelEN: "Request Disinfectant & Medicines", labelAR: "طلب المطهرات والأدوية", role: "PHD Responsible", tcode: "ME21N", swimlane: "phd", nextId: "pct-s4" },
    { id: "pct-s4", type: "action", labelEN: "Create Production Order (House Preparation) [One-Time Action]", labelAR: "إنشاء أمر إنتاج (تحضير البيت) [إجراء لمرة واحدة]", role: "PCT Responsible", tcode: "CO01", swimlane: "pct", nextId: "pct-s5" },
    { id: "pct-s5", type: "action", labelEN: "Order Approval", labelAR: "الموافقة على الأمر", role: "PCT Responsible", swimlane: "pct", nextId: "pct-s6" },
    { id: "pct-s6", type: "action", labelEN: "Activity Confirmation (Daily)", labelAR: "تأكيد النشاط (يومي)", role: "PCT Responsible", tcode: "CO11N", swimlane: "pct", nextId: "pct-s7" },
    { id: "pct-s7", type: "action", labelEN: "House Prepared GR", labelAR: "استلام تحضير البيت", role: "PCT Responsible", tcode: "MIGO", swimlane: "pct", nextId: "pct-s8" },
    { id: "pct-s8", type: "action", labelEN: "Issue to Parent Rearing Order", labelAR: "إصدار لأمر تربية الأصول", role: "Parent Rearing Responsible", tcode: "MIGO", swimlane: "parent-rearing", nextId: "pct-s9" },
    { id: "pct-s9", type: "action", labelEN: "Production Order DLV & TECO", labelAR: "تسليم أمر الإنتاج وإغلاقه", role: "PCT Responsible", tcode: "CO02", swimlane: "pct", nextId: "pct-end" },
    { id: "pct-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "pct" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. Parent Rearing Process
//    Source: SAP Business Process - Production.pdf (page 1, right flow)
// ─────────────────────────────────────────────────────────────────────────────
const parentRearingProcess: ProcessFlow = {
  id: "parent-rearing-sap",
  titleEN: "Parent Rearing Process (SAP)",
  titleAR: "عملية تربية الأصول (SAP)",
  descriptionEN:
    "Full SAP process for parent rearing from DOC placement plan to TECO. Covers DOC PO creation, production order lifecycle, daily QM data recording via SAP Fiori, activity confirmation, vaccine confirmation, GR of Pullets at 19WK, and final TECO.",
  descriptionAR:
    "العملية الكاملة في SAP لتربية الأصول من خطة وضع الصوص حتى إغلاق الأمر.",
  module: "PP/QM",
  category: "Parent Stock",
  source: "SAP Business Process - Production.pdf",
  tcodes: ["CO01", "CO02", "CO11N", "MIGO", "QA32"],
  swimlanes: [
    { id: "pct", labelEN: "PCT Responsible", labelAR: "مسؤول PCT", color: "#FCE4EC" },
    { id: "gp-hatchery", labelEN: "GP-Hatchery Responsible", labelAR: "مسؤول مفرخة GP", color: "#E3F2FD" },
    { id: "parent-rearing", labelEN: "Parent Rearing Responsible", labelAR: "مسؤول تربية الأصول", color: "#FFF9C4" },
    { id: "phd", labelEN: "PHD Responsible", labelAR: "مسؤول PHD", color: "#E8F5E9" },
    { id: "parent-laying", labelEN: "Parent Laying Responsible", labelAR: "مسؤول إنتاج الأصول", color: "#F3E5F5" },
  ],
  steps: [
    { id: "pr-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "parent-rearing", nextId: "pr-s2" },
    { id: "pr-s2", type: "action", labelEN: "Check Placement Plan", labelAR: "تحقق من خطة الإيداع", role: "Parent Rearing Responsible", tcode: "COOIS", swimlane: "parent-rearing", nextId: "pr-s3" },
    { id: "pr-gp", type: "action", labelEN: "Issue House Preparation", labelAR: "إصدار تحضير البيت", role: "PCT Responsible", swimlane: "pct", nextId: "pr-s3" },
    { id: "pr-s3", type: "action", labelEN: "Create DOC PO", labelAR: "إنشاء أمر شراء الصوص", role: "GP-Hatchery Responsible", tcode: "ME21N", swimlane: "gp-hatchery", nextId: "pr-s4" },
    { id: "pr-s4", type: "action", labelEN: "Receive PO (Day-Old Chicks)", labelAR: "استلام أمر الشراء (الصوص)", role: "Parent Rearing Responsible", tcode: "MIGO", swimlane: "parent-rearing", nextId: "pr-s5" },
    { id: "pr-s5", type: "action", labelEN: "Create Production Orders (Pullets 19WK) [One-Time Action]", labelAR: "إنشاء أوامر إنتاج (دجاجات 19 أسبوع)", role: "Parent Rearing Responsible", tcode: "CO01", swimlane: "parent-rearing", nextId: "pr-s6" },
    { id: "pr-s6", type: "action", labelEN: "Update Order Data", labelAR: "تحديث بيانات الأمر", tcode: "CO02", swimlane: "parent-rearing", nextId: "pr-s7" },
    { id: "pr-s7", type: "action", labelEN: "Order Approval", labelAR: "الموافقة على الأمر", swimlane: "parent-rearing", nextId: "pr-s8" },
    { id: "pr-s8", type: "document", labelEN: "Record Daily QM Data (SAP Fiori)", labelAR: "تسجيل بيانات الجودة اليومية (SAP Fiori)", role: "Parent Rearing Responsible", tcode: "QA32", swimlane: "parent-rearing", nextId: "pr-s9" },
    { id: "pr-s9", type: "action", labelEN: "Activity Confirmation (Daily)", labelAR: "تأكيد النشاط (يومي)", role: "Shop Floor Controller", tcode: "CO11N", swimlane: "parent-rearing", nextId: "pr-s10" },
    { id: "pr-phd", type: "action", labelEN: "Confirm Vaccine Activity", labelAR: "تأكيد نشاط التطعيم", role: "PHD Responsible", tcode: "CO11N", swimlane: "phd", nextId: "pr-s10" },
    { id: "pr-s10", type: "action", labelEN: "GR Pullets 19WK", labelAR: "استلام الإنتاج — دجاجات 19 أسبوع", role: "Parent Rearing Responsible", tcode: "MIGO", swimlane: "parent-rearing", nextId: "pr-s11" },
    { id: "pr-birds", type: "action", labelEN: "Birds Receiving", labelAR: "استلام الطيور", role: "Parent Laying Responsible", tcode: "MIGO", swimlane: "parent-laying", nextId: "pr-s11" },
    { id: "pr-s11", type: "action", labelEN: "Close Production Order DLV & TECO", labelAR: "إغلاق أمر الإنتاج — DLV & TECO", role: "Parent Rearing Responsible", tcode: "CO02", swimlane: "parent-rearing", nextId: "pr-end" },
    { id: "pr-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "parent-rearing" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. Parent Pre-Laying & Laying Process
//    Source: SAP Business Process - Production.pdf (page 2, right flow)
// ─────────────────────────────────────────────────────────────────────────────
const parentLayingProcess: ProcessFlow = {
  id: "parent-laying-sap",
  titleEN: "Parent Process Pre-Laying & Laying (SAP)",
  titleAR: "عملية الأصول — ما قبل الإنتاج والإنتاج (SAP)",
  descriptionEN:
    "SAP process covering parent pre-laying (Pullets 24WK) and laying (hatching eggs production). Includes daily QM recording, activity and vaccine confirmations, daily hatching egg GR, by-product issuance (Pullets 64WK), and a decision gate: issue to sales order vs. issue to processing.",
  descriptionAR:
    "عملية SAP تشمل ما قبل الإنتاج وإنتاج بيض التفريخ، مع بوابة قرار: إما إصدار لأمر المبيعات أو التحويل للمعالجة.",
  module: "PP/QM",
  category: "Parent Stock",
  source: "SAP Business Process - Production.pdf",
  tcodes: ["CO01", "CO02", "CO11N", "MIGO", "QA32"],
  swimlanes: [
    { id: "pct", labelEN: "PCT Responsible", labelAR: "مسؤول PCT", color: "#FCE4EC" },
    { id: "parent-rearing", labelEN: "Parent Rearing Responsible", labelAR: "مسؤول تربية الأصول", color: "#FFF9C4" },
    { id: "parent-prelaying", labelEN: "Parent Pre-Laying Responsible", labelAR: "مسؤول ما قبل الإنتاج", color: "#D4EDDA" },
    { id: "phd", labelEN: "PHD Responsible", labelAR: "مسؤول PHD", color: "#E8F5E9" },
    { id: "parent-laying", labelEN: "Parent Laying Responsible", labelAR: "مسؤول إنتاج الأصول", color: "#F3E5F5" },
    { id: "grading", labelEN: "Grading Station Responsible", labelAR: "مسؤول محطة الفرز", color: "#FFF9C4" },
    { id: "processing", labelEN: "Processing Responsible", labelAR: "مسؤول المعالجة", color: "#E3F2FD" },
    { id: "sales", labelEN: "Sales Responsible", labelAR: "مسؤول المبيعات", color: "#FCE4EC" },
  ],
  steps: [
    { id: "pl-start", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "parent-prelaying", nextId: "pl-s1" },
    { id: "pl-s1", type: "action", labelEN: "Check Placement Plan", labelAR: "تحقق من خطة الإيداع", role: "Parent Pre-Laying Responsible", swimlane: "parent-prelaying", nextId: "pl-s2" },
    { id: "pl-req", type: "action", labelEN: "Request Component", labelAR: "طلب المكون", role: "PCT Responsible", swimlane: "pct", nextId: "pl-s2" },
    { id: "pl-issue", type: "action", labelEN: "Issue House Preparation", labelAR: "إصدار تحضير البيت", role: "Parent Rearing Responsible", swimlane: "parent-rearing", nextId: "pl-s2" },
    { id: "pl-s2", type: "action", labelEN: "Issue (Pullets 19WK) to Pre-Laying", labelAR: "إصدار (دجاجات 19 أسبوع) لما قبل الإنتاج", tcode: "MIGO", swimlane: "parent-prelaying", nextId: "pl-s3" },
    { id: "pl-s3", type: "action", labelEN: "Create Production Orders (Pullets 24WK) [One-Time Action]", labelAR: "إنشاء أوامر إنتاج (دجاجات 24 أسبوع)", tcode: "CO01", swimlane: "parent-prelaying", nextId: "pl-s4" },
    { id: "pl-s4", type: "action", labelEN: "Update Order Data", labelAR: "تحديث بيانات الأمر", tcode: "CO02", swimlane: "parent-prelaying", nextId: "pl-s5" },
    { id: "pl-s5", type: "action", labelEN: "Order Approval", labelAR: "الموافقة على الأمر", swimlane: "parent-prelaying", nextId: "pl-s6" },
    { id: "pl-s6", type: "document", labelEN: "Record Daily QM Data (SAP Fiori)", labelAR: "تسجيل بيانات الجودة اليومية", tcode: "QA32", swimlane: "parent-prelaying", nextId: "pl-s7" },
    { id: "pl-s7", type: "action", labelEN: "Activity Confirmations (Pre-Laying)", labelAR: "تأكيدات النشاط — ما قبل الإنتاج", tcode: "CO11N", swimlane: "parent-prelaying", nextId: "pl-s8" },
    { id: "pl-vac", type: "action", labelEN: "Confirm Vaccine Operation", labelAR: "تأكيد عملية التطعيم", role: "PHD Responsible", tcode: "CO11N", swimlane: "phd", nextId: "pl-s8" },
    { id: "pl-s8", type: "action", labelEN: "GR Pullets 24WK → Birds Receiving (Pullets 24WK)", labelAR: "استلام الإنتاج 24 أسبوع → استلام الطيور", tcode: "MIGO", swimlane: "parent-prelaying", nextId: "pl-s9" },
    // Laying part
    { id: "pl-birds24", type: "action", labelEN: "Birds Receiving (Pullets 24WK)", labelAR: "استلام الطيور (24 أسبوع)", role: "Parent Laying Responsible", tcode: "MIGO", swimlane: "parent-laying", nextId: "pl-s9" },
    { id: "pl-s9", type: "action", labelEN: "Create Production Orders (Hatching Eggs) [One-Time Action]", labelAR: "إنشاء أوامر إنتاج (بيض التفريخ)", tcode: "CO01", swimlane: "parent-laying", nextId: "pl-s10" },
    { id: "pl-s10", type: "action", labelEN: "Update Order Data + Order Approval", labelAR: "تحديث بيانات الأمر + الموافقة", tcode: "CO02", swimlane: "parent-laying", nextId: "pl-s11" },
    { id: "pl-s11", type: "document", labelEN: "Record Daily QM Data (SAP Fiori)", labelAR: "تسجيل بيانات الجودة اليومية", tcode: "QA32", swimlane: "parent-laying", nextId: "pl-s12" },
    { id: "pl-s12", type: "action", labelEN: "Activity Confirmation (Laying)", labelAR: "تأكيد النشاط — الإنتاج", tcode: "CO11N", swimlane: "parent-laying", nextId: "pl-s13" },
    { id: "pl-s13", type: "action", labelEN: "Daily Hatching Eggs GR", labelAR: "استلام بيض التفريخ اليومي", tcode: "MIGO", swimlane: "parent-laying", nextId: "pl-s14" },
    { id: "pl-gr-grad", type: "action", labelEN: "Daily Hatching Eggs GR (Grading Station)", labelAR: "استلام بيض التفريخ اليومي — محطة الفرز", tcode: "MIGO", swimlane: "grading", nextId: "pl-s14" },
    { id: "pl-s14", type: "action", labelEN: "GI By-Product (Pullets 64WK)", labelAR: "إصدار البضائع — منتج ثانوي (دجاجات 64 أسبوع)", tcode: "MIGO", swimlane: "parent-laying", nextId: "pl-d1" },
    { id: "pl-d1", type: "decision", labelEN: "Check Sales Plan — Plan for Sale?", labelAR: "فحص خطة المبيعات — هل مخصص للبيع؟", swimlane: "parent-laying", yesId: "pl-sales", noId: "pl-proc" },
    { id: "pl-sales", type: "action", labelEN: "GI By-Product (Pullets 64WK) → Issue to Sales Order", labelAR: "إصدار المنتج الثانوي → إصدار لأمر المبيعات", swimlane: "sales", nextId: "pl-end" },
    { id: "pl-proc", type: "action", labelEN: "Issue to Processing", labelAR: "إصدار للمعالجة", role: "Processing Responsible", tcode: "MIGO", swimlane: "processing", nextId: "pl-teco" },
    { id: "pl-teco", type: "action", labelEN: "Production Order DLV & TECO", labelAR: "إغلاق أمر الإنتاج DLV & TECO", tcode: "CO02", swimlane: "parent-laying", nextId: "pl-end" },
    { id: "pl-end", type: "end", labelEN: "End", labelAR: "النهاية" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. C.Layer Rearing Business Process (SAP)
//    Source: C.Layer Business Process.pdf (page 3)
//    Plant: 1260 — Commercial Layer Rearing
// ─────────────────────────────────────────────────────────────────────────────
const clayerRearing: ProcessFlow = {
  id: "clayer-rearing-sap",
  titleEN: "C.Layer Rearing Business Process (SAP)",
  titleAR: "عملية تربية الدجاج التجاري (SAP)",
  descriptionEN:
    "SAP process for Plant 1260 — Commercial Layer Rearing. Every 3 months, six houses are transferred from rearing to laying. Covers placement plan check, production order creation, daily GI, daily confirmations and QM recording, transfer plan evaluation, GR Pullet, TECO, and inspection lot usage decision.",
  descriptionAR:
    "عملية SAP لمصنع 1260 — تربية الدجاج التجاري. كل 3 أشهر يتم نقل ست بيوت من التربية إلى الإنتاج.",
  module: "PP/QM",
  category: "Commercial Layer",
  plant: "1260 — Commercial Layer Rearing",
  source: "C.Layer Business Process.pdf",
  tcodes: ["COOIS", "MIGO", "CO01", "CO02", "CO03", "CO11N", "QA32", "ZPPH3"],
  swimlanes: [
    { id: "rearing", labelEN: "Rearing Farm Responsibility", labelAR: "مسؤولية مزرعة التربية", color: "#FFF9C4" },
    { id: "planner", labelEN: "Laying Production Planner", labelAR: "مخطط إنتاج الإنتاج", color: "#D4EDDA" },
    { id: "phd", labelEN: "PHD", labelAR: "PHD", color: "#E8F5E9" },
  ],
  steps: [
    { id: "clr-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "rearing", nextId: "clr-s2" },
    { id: "clr-s2", type: "action", labelEN: "Check Placement Plan", labelAR: "تحقق من خطة الإيداع", role: "Rearing Farm", tcode: "COOIS", swimlane: "rearing", nextId: "clr-s3" },
    { id: "clr-s3", type: "action", labelEN: "Create Production Order", labelAR: "إنشاء أمر الإنتاج", role: "Rearing Farm", tcode: "CO01", swimlane: "rearing", nextId: "clr-s4" },
    { id: "clr-s4", type: "action", labelEN: "Update Order Data", labelAR: "تحديث بيانات الأمر", tcode: "CO02", swimlane: "rearing", nextId: "clr-s5" },
    { id: "clr-s5", type: "action", labelEN: "Release Order", labelAR: "إصدار الأمر", tcode: "CO02", swimlane: "rearing", nextId: "clr-s6" },
    { id: "clr-s6", type: "action", labelEN: "GI DOC to Order", labelAR: "إصدار الصوص للأمر", tcode: "MIGO", swimlane: "rearing", nextId: "clr-s7" },
    { id: "clr-s7", type: "action", labelEN: "Daily Confirmations", labelAR: "التأكيدات اليومية", tcode: "CO11N", swimlane: "rearing", nextId: "clr-s8" },
    { id: "clr-s8", type: "document", labelEN: "Daily Activity Recording (QM)", labelAR: "تسجيل النشاط اليومي (إدارة الجودة)", tcode: "QA32", descriptionEN: "Record daily QM data using QA32 or ZPPH3", swimlane: "rearing", nextId: "clr-s9" },
    { id: "clr-phd", type: "action", labelEN: "Vaccination / Medication / Lab", labelAR: "التطعيم / الدواء / المختبر", role: "PHD", swimlane: "phd", nextId: "clr-s9" },
    { id: "clr-s9", type: "action", labelEN: "Check Transfer Plan", labelAR: "تحقق من خطة النقل", swimlane: "rearing", nextId: "clr-d1" },
    { id: "clr-d1", type: "decision", labelEN: "Change Transfer Age?", labelAR: "هل تغيير عمر النقل؟", swimlane: "rearing", yesId: "clr-change", noId: "clr-adjust" },
    { id: "clr-change", type: "action", labelEN: "Change Transfer Age (Add/Delete Operation)", labelAR: "تغيير عمر النقل (إضافة/حذف عملية)", role: "Laying Production Planner", swimlane: "planner", nextId: "clr-s10" },
    { id: "clr-adjust", type: "action", labelEN: "Adjust GR Operation Control Key", labelAR: "ضبط مفتاح التحكم في عملية الاستلام", swimlane: "rearing", nextId: "clr-s10" },
    { id: "clr-s10", type: "action", labelEN: "GR Pullet", labelAR: "استلام الدجاجة المنتجة", tcode: "MIGO", swimlane: "rearing", nextId: "clr-s11" },
    { id: "clr-s11", type: "action", labelEN: "Production Order TECO", labelAR: "إغلاق أمر الإنتاج (TECO)", tcode: "CO02", swimlane: "rearing", nextId: "clr-s12" },
    { id: "clr-s12", type: "action", labelEN: "Inspection Lot Usage Decision", labelAR: "قرار استخدام دفعة الفحص", tcode: "QA11", swimlane: "rearing", nextId: "clr-end" },
    { id: "clr-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "rearing" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. C.Layer Laying Business Process (SAP)
//    Source: C.Layer Business Process.pdf (page 4)
//    Plant: 1250 — Commercial Layer Laying
// ─────────────────────────────────────────────────────────────────────────────
const clayerLaying: ProcessFlow = {
  id: "clayer-laying-sap",
  titleEN: "C.Layer Laying Business Process (SAP)",
  titleAR: "عملية إنتاج الدجاج التجاري (SAP)",
  descriptionEN:
    "SAP process for Plant 1250 — Commercial Layer Laying. Covers placement plan, production order creation, daily egg GR (via MIGO_GO), daily QM recording, daily confirmations, vaccination/medication/lab (PHD), depletion plan decision gate, and inspection lot usage decision. GR batch is generated automatically.",
  descriptionAR:
    "عملية SAP لمصنع 1250 — إنتاج الدجاج التجاري. يتم إنشاء دفعة الاستلام تلقائياً. إنتاج البيض اليومي يُسجَّل كاستلام بضائع.",
  module: "PP/QM",
  category: "Commercial Layer",
  plant: "1250 — Commercial Layer Laying",
  source: "C.Layer Business Process.pdf",
  tcodes: ["CO01", "CO02", "CO03", "CO11N", "MIGO", "QA11", "ZPPH3"],
  swimlanes: [
    { id: "laying", labelEN: "Laying Farm Responsibility", labelAR: "مسؤولية مزرعة الإنتاج", color: "#D4EDDA" },
    { id: "planner", labelEN: "Laying Production Planner", labelAR: "مخطط الإنتاج", color: "#FFF9C4" },
    { id: "shopfloor", labelEN: "Shop Floor Controller", labelAR: "مراقب طابق الإنتاج", color: "#E3F2FD" },
    { id: "bio-asset", labelEN: "BIO Asset", labelAR: "الأصول البيولوجية", color: "#E2D9F3" },
    { id: "phd", labelEN: "PHD", labelAR: "PHD", color: "#E8F5E9" },
  ],
  steps: [
    { id: "cll-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "laying", nextId: "cll-s2" },
    { id: "cll-s2", type: "action", labelEN: "Check Placement Plan", labelAR: "تحقق من خطة الإيداع", tcode: "COOIS", swimlane: "laying", nextId: "cll-s3" },
    { id: "cll-s3", type: "action", labelEN: "Create Production Order", labelAR: "إنشاء أمر الإنتاج", tcode: "CO01", swimlane: "laying", nextId: "cll-s4" },
    { id: "cll-s4", type: "action", labelEN: "Update Order Data", labelAR: "تحديث بيانات الأمر", tcode: "CO02", swimlane: "laying", nextId: "cll-s5" },
    { id: "cll-s5", type: "action", labelEN: "Release Order", labelAR: "إصدار الأمر", tcode: "CO02", swimlane: "laying", nextId: "cll-bio" },
    { id: "cll-bio", type: "subprocess", labelEN: "BIO Asset Business Process", labelAR: "عملية الأصول البيولوجية", swimlane: "bio-asset", warning: true, nextId: "cll-s6" },
    { id: "cll-plan", type: "action", labelEN: "Change Production Age (if depletion plan changes)", labelAR: "تغيير عمر الإنتاج (عند تغيير خطة الاستنزاف)", role: "Laying Production Planner", swimlane: "planner", nextId: "cll-s6" },
    // Shop floor
    { id: "cll-s6", type: "action", labelEN: "Daily Confirmations", labelAR: "التأكيدات اليومية", role: "Shop Floor Controller", tcode: "CO11N", swimlane: "shopfloor", nextId: "cll-s7" },
    { id: "cll-s7", type: "document", labelEN: "Daily Activity Recording (QM)", labelAR: "تسجيل النشاط اليومي (إدارة الجودة)", tcode: "ZPPH3", swimlane: "shopfloor", nextId: "cll-s8" },
    { id: "cll-s8", type: "action", labelEN: "Daily Eggs GR (Batch auto-generated)", labelAR: "استلام البيض اليومي (دفعة تلقائية)", tcode: "MIGO", note: "MIGO_GO — Daily egg production is posted as GR. Batch is generated automatically.", swimlane: "shopfloor", nextId: "cll-d1" },
    { id: "cll-phd", type: "action", labelEN: "Vaccination / Medication / Lab", labelAR: "التطعيم / الدواء / المختبر", role: "PHD", swimlane: "phd", nextId: "cll-d1" },
    { id: "cll-d1", type: "decision", labelEN: "Need to Change Depletion Plan?", labelAR: "هل تحتاج إلى تغيير خطة الاستنزاف؟", swimlane: "shopfloor", yesId: "cll-plan", noId: "cll-chkage" },
    { id: "cll-chkage", type: "decision", labelEN: "Check GR Birds Age > 80 weeks?", labelAR: "تحقق: هل عمر الطيور > 80 أسبوع؟", swimlane: "shopfloor", yesId: "cll-deplete", noId: "cll-s6" },
    { id: "cll-deplete", type: "action", labelEN: "Depletion of Birds at Planned Age", labelAR: "استنزاف الطيور في العمر المخطط", tcode: "MIGO", swimlane: "shopfloor", nextId: "cll-teco" },
    { id: "cll-teco", type: "action", labelEN: "Production Order TECO", labelAR: "إغلاق أمر الإنتاج (TECO)", tcode: "CO02", swimlane: "shopfloor", nextId: "cll-usage" },
    { id: "cll-usage", type: "action", labelEN: "Inspection Lot Usage Decision", labelAR: "قرار استخدام دفعة الفحص", tcode: "QA11", swimlane: "shopfloor", nextId: "cll-end" },
    { id: "cll-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "shopfloor" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. Comprehensive Process for Hatchery
//    Source: hatchery business process - Page 1.pdf
// ─────────────────────────────────────────────────────────────────────────────
const hatcheryProcess: ProcessFlow = {
  id: "hatchery-process",
  titleEN: "Comprehensive Process for Hatchery",
  titleAR: "العملية الشاملة للمفرخة",
  descriptionEN:
    "End-to-end hatchery process with three swimlanes: Grading Station (receives eggs from parent, grades, quality decision), Hatchery Cold Store (accepts graded eggs, transfers to hatchery trolleys), Setter (receives from cold store, candling day 10, transfer to hatcher after 18–18.5 days), and Hatcher (receives setted eggs, hatch-out after 2.5–3 days, grading, vaccination, receive Grade A chicks).",
  descriptionAR:
    "العملية الكاملة للمفرخة من استلام البيض من الأصول حتى استلام صوص الدرجة A.",
  module: "PP",
  category: "Hatchery",
  source: "hatchery business process - Page 1.pdf",
  tcodes: ["MIGO", "CO01", "CO11N"],
  swimlanes: [
    { id: "grading", labelEN: "Grading Station", labelAR: "محطة الفرز", color: "#FFF9C4" },
    { id: "cold-store", labelEN: "Hatchery Cold Store", labelAR: "مخزن التبريد", color: "#D1ECF1" },
    { id: "setter", labelEN: "Setter", labelAR: "الحاضنة (Setter)", color: "#D4EDDA" },
    { id: "hatcher", labelEN: "Hatcher", labelAR: "الفقاسة (Hatcher)", color: "#FCE4EC" },
  ],
  steps: [
    // Grading Station
    { id: "h-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "grading", nextId: "h-s2" },
    { id: "h-s2", type: "action", labelEN: "Receive Eggs from Parent", labelAR: "استلام البيض من الأصول", tcode: "MIGO", swimlane: "grading", nextId: "h-s3" },
    { id: "h-s3", type: "action", labelEN: "Grade Eggs", labelAR: "فرز البيض", swimlane: "grading", nextId: "h-d1" },
    { id: "h-d1", type: "decision", labelEN: "Quality Decision", labelAR: "قرار الجودة", swimlane: "grading", yesId: "h-accept", noId: "h-reject" },
    { id: "h-accept", type: "action", labelEN: "Accepted → Hatching Eggs → Send to Hatchery", labelAR: "مقبول → بيض التفريخ → إرسال للمفرخة", tcode: "MIGO", swimlane: "grading", nextId: "h-cold1" },
    { id: "h-byproduct", type: "action", labelEN: "By-Product → Send to Warehouse", labelAR: "منتج ثانوي → إرسال للمستودع", tcode: "MIGO", swimlane: "grading", nextId: "h-end-gr" },
    { id: "h-reject", type: "action", labelEN: "Rejected Eggs Handling → Reject Type (Small, Cracked, Dirty, Miss Shell, Offal)", labelAR: "معالجة البيض المرفوض → نوع الرفض", swimlane: "grading", nextId: "h-end-gr" },
    { id: "h-end-gr", type: "end", labelEN: "End (Grading)", labelAR: "النهاية (الفرز)", swimlane: "grading" },
    // Cold Store
    { id: "h-cold1", type: "action", labelEN: "Receive Accepted Graded Eggs", labelAR: "استلام البيض المفروز المقبول", tcode: "MIGO", swimlane: "cold-store", nextId: "h-cold2" },
    { id: "h-cold2", type: "action", labelEN: "Transfer Eggs from Grading Trolley to Hatchery Trolley", labelAR: "نقل البيض من عربة الفرز إلى عربة المفرخة", note: "Hatchery trolley has a default tracking number", swimlane: "cold-store", nextId: "h-cold3" },
    { id: "h-cold3", type: "action", labelEN: "After Egg Transfer — Cracked Eggs Rejected → Send to Cold Store", labelAR: "بعد نقل البيض — البيض المتشقق مرفوض → إرسال للتبريد", swimlane: "cold-store", nextId: "h-end-cold" },
    { id: "h-end-cold", type: "end", labelEN: "End (Cold Store)", labelAR: "النهاية (التبريد)", swimlane: "cold-store" },
    // Setter
    { id: "h-set1", type: "start", labelEN: "Start (Setter)", labelAR: "البداية (Setter)", swimlane: "setter", nextId: "h-set2" },
    { id: "h-set2", type: "action", labelEN: "Receive Eggs from Cold Store with Batch Number", labelAR: "استلام البيض من التبريد مع رقم الدفعة", note: "Batch system: FIFO — old batch first", tcode: "MIGO", swimlane: "setter", nextId: "h-set3" },
    { id: "h-set3", type: "action", labelEN: "Candling on Day 10 (Sample — check hatchability)", labelAR: "فحص الشمعدان في اليوم 10 (عينة — تحقق من قابلية التفريخ)", tcode: "QA32", swimlane: "setter", nextId: "h-set4" },
    { id: "h-set4", type: "action", labelEN: "After 18–18.5 Days: Transfer to Hatcher", labelAR: "بعد 18–18.5 يوماً: نقل إلى الفقاسة", swimlane: "setter", nextId: "h-set5" },
    { id: "h-set5", type: "action", labelEN: "Rejected Eggs During Transfer (Rots, Short, Setting Break, Transfer Break)", labelAR: "البيض المرفوض أثناء النقل (عفن، قصير، كسر وضع، كسر نقل)", swimlane: "setter", nextId: "h-end-set" },
    { id: "h-end-set", type: "end", labelEN: "End (Setter → Automation Transfer)", labelAR: "النهاية (Setter → نقل آلي)", swimlane: "setter" },
    // Hatcher
    { id: "h-hat1", type: "action", labelEN: "Receive Setted Eggs", labelAR: "استلام البيض الموضوع في الحاضنة", tcode: "MIGO", swimlane: "hatcher", nextId: "h-hat2" },
    { id: "h-hat2", type: "action", labelEN: "Hatch-Out (after 2.5–3 days)", labelAR: "الفقس (بعد 2.5–3 أيام)", swimlane: "hatcher", nextId: "h-hat3" },
    { id: "h-hat3", type: "action", labelEN: "Grading Hatch-Out", labelAR: "فرز الفقس", swimlane: "hatcher", nextId: "h-hat4" },
    { id: "h-hat4", type: "action", labelEN: "Vaccination", labelAR: "التطعيم", role: "PHD / Veterinarian", swimlane: "hatcher", nextId: "h-hat5" },
    { id: "h-hat5", type: "action", labelEN: "Grading After Vaccine", labelAR: "الفرز بعد التطعيم", swimlane: "hatcher", nextId: "h-hat6" },
    { id: "h-hat6", type: "action", labelEN: "Receive Grade A Chicks (reject: dead, culls, inject dead, inject culls)", labelAR: "استلام صوص الدرجة A (رفض: نافق، مرفوض، حقن نافق، حقن مرفوض)", tcode: "MIGO", swimlane: "hatcher", nextId: "h-end" },
    { id: "h-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "hatcher" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. Slaughterhouses Business Process (Physical)
//    Source: Slaughterhouses Business Process.pdf
// ─────────────────────────────────────────────────────────────────────────────
const slaughterhouseProcess: ProcessFlow = {
  id: "slaughterhouse-process",
  titleEN: "Slaughterhouses Business Process",
  titleAR: "عملية المسالخ التجارية",
  descriptionEN:
    "Physical slaughterhouse process flow divided into Dirty Area and Clean Area. Receiving → Slaughtering → Plucker (scalding, de-feathering, stunning) → Evisceration (5:07 min line) → Packing Phase (chilling, weighing, grading, Grade A/C) → Blast Phase → Storage. Includes Grade C sub-process (wing separator, breast cutter, MDM/BSM machines).",
  descriptionAR:
    "عملية المجزرة الفيزيائية: استلام → ذبح → نتف → سلخ → تعبئة (تبريد، وزن، فرز) → تجميد → تخزين.",
  module: "Physical",
  category: "Processing",
  source: "Slaughterhouses Business Process.pdf",
  tcodes: [],
  swimlanes: [
    { id: "receiving", labelEN: "Receiving Area", labelAR: "منطقة الاستلام", color: "#E3F2FD" },
    { id: "slaughtering", labelEN: "Slaughtering Area (Dirty)", labelAR: "منطقة الذبح (قذرة)", color: "#FCE4EC" },
    { id: "plucker", labelEN: "Plucker Area (Dirty)", labelAR: "منطقة النتف (قذرة)", color: "#FFF9C4" },
    { id: "evisceration", labelEN: "Evisceration Area (Dirty)", labelAR: "منطقة السلخ (قذرة)", color: "#F3E5F5" },
    { id: "packing", labelEN: "Packing Phase (Clean)", labelAR: "مرحلة التعبئة (نظيفة)", color: "#D4EDDA" },
    { id: "blast", labelEN: "Blast Phase (Clean)", labelAR: "مرحلة التجميد (نظيفة)", color: "#D1ECF1" },
    { id: "storage", labelEN: "Storage Stage (Clean)", labelAR: "مرحلة التخزين (نظيفة)", color: "#E8F5E9" },
  ],
  steps: [
    { id: "sl-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "receiving", nextId: "sl-s2" },
    { id: "sl-s2", type: "action", labelEN: "Receiving Truck", labelAR: "استلام الشاحنة", swimlane: "receiving", nextId: "sl-s3" },
    { id: "sl-s3", type: "action", labelEN: "Unloading Boxes (Leave 30 min after unloading)", labelAR: "تفريغ الصناديق (انتظار 30 دقيقة بعد التفريغ)", swimlane: "receiving", nextId: "sl-s4" },
    { id: "sl-s4", type: "action", labelEN: "Transfer Boxes to GP System", labelAR: "نقل الصناديق لنظام GP", swimlane: "receiving", nextId: "sl-s5" },
    { id: "sl-s5", type: "action", labelEN: "Hanging (55 seconds)", labelAR: "التعليق (55 ثانية)", swimlane: "receiving", nextId: "sl-s6" },
    { id: "sl-s6", type: "action", labelEN: "Slaughtering", labelAR: "الذبح", swimlane: "slaughtering", nextId: "sl-s7" },
    { id: "sl-s7", type: "action", labelEN: "Bleeding (3:30 min)", labelAR: "النزيف (3:30 دقيقة)", swimlane: "slaughtering", nextId: "sl-s8" },
    { id: "sl-s8", type: "action", labelEN: "Head Pulling", labelAR: "سحب الرأس", swimlane: "slaughtering", nextId: "sl-s9" },
    { id: "sl-s9", type: "action", labelEN: "Scalding (1:55 min)", labelAR: "السلق (1:55 دقيقة)", swimlane: "plucker", nextId: "sl-s10" },
    { id: "sl-s10", type: "action", labelEN: "De-feathering", labelAR: "نزع الريش", swimlane: "plucker", nextId: "sl-s11" },
    { id: "sl-s11", type: "action", labelEN: "Stunning (1:50 min) [From Scalding to Stunning: 1:25 min]", labelAR: "الصعق (1:50 دقيقة)", swimlane: "plucker", nextId: "sl-s12" },
    { id: "sl-s12", type: "action", labelEN: "Leg Cutting", labelAR: "قطع الأرجل", swimlane: "evisceration", nextId: "sl-s13" },
    { id: "sl-s13", type: "action", labelEN: "Vent Cutting", labelAR: "قطع المنفذ", swimlane: "evisceration", nextId: "sl-s14" },
    { id: "sl-s14", type: "action", labelEN: "Vent Opening", labelAR: "فتح المنفذ", swimlane: "evisceration", nextId: "sl-s15" },
    { id: "sl-s15", type: "action", labelEN: "Eviscerating", labelAR: "التحشية / إزالة الأحشاء", swimlane: "evisceration", nextId: "sl-s16" },
    { id: "sl-s16", type: "action", labelEN: "Crop Machine", labelAR: "ماكينة الحوصلة", swimlane: "evisceration", nextId: "sl-s17" },
    { id: "sl-s17", type: "action", labelEN: "Neck Cracker", labelAR: "كسارة الرقبة", swimlane: "evisceration", nextId: "sl-s18" },
    { id: "sl-s18", type: "action", labelEN: "Final Inspection Machine (EV Process: 5:07 min total)", labelAR: "ماكينة الفحص النهائي (عملية EV: 5:07 دقيقة)", swimlane: "evisceration", nextId: "sl-s19" },
    { id: "sl-s19", type: "action", labelEN: "Sanitizing", labelAR: "التعقيم", swimlane: "evisceration", nextId: "sl-s20" },
    { id: "sl-s20", type: "action", labelEN: "Chilling", labelAR: "التبريد", swimlane: "packing", nextId: "sl-s21" },
    { id: "sl-s21", type: "action", labelEN: "Weighing", labelAR: "الوزن", swimlane: "packing", nextId: "sl-s22" },
    { id: "sl-s22", type: "action", labelEN: "Grading", labelAR: "الفرز", swimlane: "packing", nextId: "sl-d1" },
    { id: "sl-d1", type: "decision", labelEN: "Grade A or Grade C?", labelAR: "هل الدرجة A أم C؟", swimlane: "packing", yesId: "sl-gradeA", noId: "sl-gradeC" },
    { id: "sl-gradeA", type: "action", labelEN: "Grade A → Packaging", labelAR: "الدرجة A → التغليف", swimlane: "packing", nextId: "sl-s23" },
    { id: "sl-gradeC", type: "action", labelEN: "Grade C → Portion (further processing sub-line)", labelAR: "الدرجة C → التقطيع", swimlane: "packing", nextId: "sl-s23" },
    { id: "sl-s23", type: "action", labelEN: "Finish Product Fresh + Finish Product Frozen → Palletizing", labelAR: "المنتج النهائي الطازج + المجمد → التلبيس", swimlane: "blast", nextId: "sl-s24" },
    { id: "sl-s24", type: "action", labelEN: "Transfer the Pallet", labelAR: "نقل المنصة", swimlane: "blast", nextId: "sl-s25" },
    { id: "sl-s25", type: "action", labelEN: "Receive the Pallet", labelAR: "استلام المنصة", swimlane: "storage", nextId: "sl-end" },
    { id: "sl-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "storage" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. Processing Workflow in SAP
//    Source: Processing Workflow.pdf
// ─────────────────────────────────────────────────────────────────────────────
const processingWorkflowSAP: ProcessFlow = {
  id: "processing-workflow-sap",
  titleEN: "Processing Workflow in SAP",
  titleAR: "سير عمل المعالجة في SAP",
  descriptionEN:
    "SAP production flow in Plant 1100 (Processing). Starts with Fresh YFRT via MF42N (Neg. 930), creating production order for whole chicken (Order Header 930). Assembly backflash (MFBF/REM) issues by-products (feather 504, gizzard 507, heart 508, liver 511, neck 512, feet 514, blood 517, viscera 518). Co-products and by-products flow to cut-up orders (501 whole legs, 502 breast, 503 wings) and further (505 thighs, 506 drumsticks).",
  descriptionAR:
    "سير العمل في SAP لمصنع 1100 (المعالجة): إنشاء أوامر إنتاج، تأكيد خلفي، استلام البضائع للمنتجات الرئيسية والثانوية.",
  module: "PP",
  category: "Processing",
  plant: "1100 — Processing Plant",
  source: "Processing Workflow.pdf",
  tcodes: ["MF42N", "CO01"],
  steps: [
    { id: "pw-s1", type: "start", labelEN: "Start: Fresh YFRT (MF42N Neg. 930 — Increase Stock 930)", labelAR: "البداية: طازج YFRT (MF42N سالب 930)", tcode: "MF42N", nextId: "pw-s2" },
    { id: "pw-s2", type: "action", labelEN: "Create Production Order (Order Header 930 — Whole Chicken)", labelAR: "إنشاء أمر إنتاج (رأس الأمر 930 — دجاجة كاملة)", tcode: "CO01", nextId: "pw-s3" },
    { id: "pw-s3", type: "action", labelEN: "Consume 911 (Mvt. 261) → Assembly Backflash MFBF (REM) — Increase Stock 801-804", labelAR: "استهلاك 911 (حركة 261) → تأكيد خلفي MFBF (REM) — زيادة المخزون 801-804", tcode: "MF42N", note: "Assembly Backflash increases stock of by-products: 504 feather, 507 gizzard, 508 heart, 511 liver, 512 neck, 514 feet, 517 blood, 518 non-edible viscera", nextId: "pw-s4" },
    { id: "pw-s4", type: "action", labelEN: "Goods Receipt (By-Products): 504 feather, 507 gizzard, 508 heart, 511 liver, 512 neck, 514 feet, 517 blood, 518 viscera", labelAR: "استلام البضائع (منتجات ثانوية): ريش، قانصة، قلب، كبد، رقبة، أقدام، دم، أحشاء", tcode: "MIGO", nextId: "pw-s5" },
    { id: "pw-s5", type: "action", labelEN: "Goods Receipt Main Products: 930 A.G Fresh, 931 A.G Frozen, 932 W.Chkn B.G, 933 B.G Cutups Meat", labelAR: "استلام المنتجات الرئيسية: طازج، مجمد، دجاجة كاملة، لحم مقطع", tcode: "MIGO", nextId: "pw-s6" },
    { id: "pw-s6", type: "action", labelEN: "Increase Stock 933 B.G Cutups → Create Production Order (Order Header 501)", labelAR: "زيادة مخزون 933 → إنشاء أمر إنتاج (رأس الأمر 501)", tcode: "CO01", nextId: "pw-s7" },
    { id: "pw-s7", type: "action", labelEN: "Order Header 501: Consume 933 → GR: 501 whole legs, 502 breast w/bone (Co-Product), 503 wings (By-Product)", labelAR: "رأس الأمر 501: استهلاك 933 → استلام: أرجل، صدر بعظم، أجنحة", tcode: "MIGO", nextId: "pw-s8" },
    { id: "pw-s8", type: "action", labelEN: "Increase Stock 505 → Create Production Order (Order Header 505): Consume 501 → GR 505 thighs, 506 drumsticks", labelAR: "زيادة مخزون 505 → إنشاء أمر 505: استهلاك 501 → استلام فخذ، ساق", tcode: "CO01", nextId: "pw-end" },
    { id: "pw-end", type: "end", labelEN: "End", labelAR: "النهاية" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. REM Confirmation Process
//     Source: REM Confirmation (1).pdf
// ─────────────────────────────────────────────────────────────────────────────
const remConfirmation: ProcessFlow = {
  id: "rem-confirmation",
  titleEN: "REM Confirmation — Production & Inventory Management",
  titleAR: "تأكيد التصنيع المتكرر — إدارة الإنتاج والمخزون",
  descriptionEN:
    "Repetitive Manufacturing (REM) confirmation process with two phases: Daily Process (Assembly Backflush via MF42N — select posting date, confirmation type, material 920, plant 1100, prod. version 120; batch appears automatically; post with correction, add classification, save without component) and End-of-Month Process (REM Confirmation → Process Component List → check inventory → if available: Update Data → Save → End; if not: loop back to Component List).",
  descriptionAR:
    "عملية تأكيد التصنيع المتكرر: عملية يومية (تأكيد خلفي للتجميع) وعملية نهاية الشهر (تأكيد REM → قائمة المكونات → فحص المخزون).",
  module: "PP",
  category: "Processing",
  plant: "1100 — Processing (GR Pullet 64WK from Parent)",
  source: "REM Confirmation (1).pdf",
  tcodes: ["MF42N"],
  swimlanes: [
    { id: "parent", labelEN: "Parent (GR Pullet 64WK)", labelAR: "الأصول (استلام دجاجة 64 أسبوع)", color: "#FFF9C4" },
    { id: "daily", labelEN: "Processing Plant — Daily Process", labelAR: "مصنع المعالجة — العملية اليومية", color: "#D4EDDA" },
    { id: "monthly", labelEN: "Processing Plant — End of Month", labelAR: "مصنع المعالجة — نهاية الشهر", color: "#E3F2FD" },
  ],
  steps: [
    { id: "rem-p1", type: "start", labelEN: "Start (Parent: GR Pullet 64WK)", labelAR: "البداية (الأصول: استلام دجاجة 64 أسبوع)", swimlane: "parent", note: "Select posting date; Confirmation Type: Assembly Backflush; Material 920; Plant 1100; Prod. Version 120. Batch appears automatically.", nextId: "rem-d1" },
    // Daily Process
    { id: "rem-d1", type: "start", labelEN: "Start (Daily Process)", labelAR: "البداية (العملية اليومية)", swimlane: "daily", nextId: "rem-d2" },
    { id: "rem-d2", type: "action", labelEN: "REM Confirmation (Assembly Backflush)", labelAR: "تأكيد التصنيع المتكرر (تأكيد خلفي للتجميع)", tcode: "MF42N", note: "Select posting date; Confirmation Type: Component Backflush; Material 920; Plant 1100; Prod. Version 120", swimlane: "daily", nextId: "rem-d3" },
    { id: "rem-d3", type: "action", labelEN: "Post with Correction", labelAR: "الترحيل مع تصحيح", swimlane: "daily", nextId: "rem-d4" },
    { id: "rem-d4", type: "action", labelEN: "Add the Classification", labelAR: "إضافة التصنيف", swimlane: "daily", nextId: "rem-d5" },
    { id: "rem-d5", type: "action", labelEN: "Save Without Component", labelAR: "حفظ بدون مكون", swimlane: "daily", nextId: "rem-d-end" },
    { id: "rem-d-end", type: "end", labelEN: "End (Daily)", labelAR: "النهاية (اليومية)", swimlane: "daily" },
    // Monthly Process
    { id: "rem-m1", type: "start", labelEN: "Start (End of Month)", labelAR: "البداية (نهاية الشهر)", swimlane: "monthly", nextId: "rem-m2" },
    { id: "rem-m2", type: "action", labelEN: "REM Confirmation", labelAR: "تأكيد التصنيع المتكرر", tcode: "MF42N", swimlane: "monthly", nextId: "rem-m3" },
    { id: "rem-m3", type: "action", labelEN: "Process Component List", labelAR: "معالجة قائمة المكونات", swimlane: "monthly", nextId: "rem-md1" },
    { id: "rem-md1", type: "decision", labelEN: "Is Inventory Available?", labelAR: "هل المخزون متوفر؟", swimlane: "monthly", yesId: "rem-m4", noId: "rem-m3" },
    { id: "rem-m4", type: "action", labelEN: "Update Data", labelAR: "تحديث البيانات", swimlane: "monthly", nextId: "rem-m5" },
    { id: "rem-m5", type: "action", labelEN: "Save", labelAR: "حفظ", swimlane: "monthly", nextId: "rem-m-end" },
    { id: "rem-m-end", type: "end", labelEN: "End (Monthly)", labelAR: "النهاية (الشهرية)", swimlane: "monthly" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 11. Commercial Layer: Physical Process Flow
//     Source: C.Layer Business Process.pdf (pages 1–2)
// ─────────────────────────────────────────────────────────────────────────────
const clayerPhysical: ProcessFlow = {
  id: "clayer-physical",
  titleEN: "Commercial Layer Rearing & Laying — Physical Process",
  titleAR: "تربية وإنتاج الدجاج التجاري — العملية الفيزيائية",
  descriptionEN:
    "Physical (non-SAP) process flow for Commercial Layer. Planning Phase → Services Team (cleaning/disinfection of rearing houses, scraping) → Rearing Phase (receive Day-Old Chicks, grow to 16–17 weeks with lab samples, feeding, medication, vaccination) → Services Team (cleaning laying houses) → Laying Phase (receive pullets from rearing, egg collection, grading, Collect broken/dirty eggs) → Grading Station (Printing → Trays → Grading → Packing → Stamping → Sealing) → Storing Phase. Detailed feed schedule: Rearing (Starter 0–6wk, Grower 7–11wk, Developer 12–16wk); Laying (Pre-layer 17–18wk, Layer-01 19–36wk, Layer-02 37–68wk, Layer-03 69–100wk).",
  descriptionAR:
    "العملية الفيزيائية للدجاج التجاري: تخطيط → تنظيف → استلام الصوص → تربية → تنظيف مرة أخرى → إنتاج البيض → فرز → تعبئة → تخزين.",
  module: "Physical",
  category: "Commercial Layer",
  source: "C.Layer Business Process.pdf",
  tcodes: [],
  swimlanes: [
    { id: "planning", labelEN: "Planning Phase", labelAR: "مرحلة التخطيط", color: "#E3F2FD" },
    { id: "services", labelEN: "Services Team", labelAR: "فريق الخدمات", color: "#FCE4EC" },
    { id: "rearing-ph", labelEN: "Rearing Phase", labelAR: "مرحلة التربية", color: "#FFF9C4" },
    { id: "laying-ph", labelEN: "Laying Phase", labelAR: "مرحلة الإنتاج", color: "#D4EDDA" },
    { id: "grading-st", labelEN: "Grading Station", labelAR: "محطة الفرز", color: "#F3E5F5" },
    { id: "storing", labelEN: "Storing Phase", labelAR: "مرحلة التخزين", color: "#E8F5E9" },
  ],
  steps: [
    { id: "clp-s1", type: "start", labelEN: "Start", labelAR: "البداية", swimlane: "planning", nextId: "clp-s2" },
    { id: "clp-s2", type: "action", labelEN: "Production Planning (Forecast Demand → Procurement Planning → Budgeting)", labelAR: "تخطيط الإنتاج (توقع الطلب → تخطيط المشتريات → الميزانية)", swimlane: "planning", nextId: "clp-s3" },
    { id: "clp-s3", type: "action", labelEN: "Cleaning & Disinfection of Rearing Farm/Houses", labelAR: "تنظيف وتطهير مزارع/بيوت التربية", swimlane: "services", nextId: "clp-s4" },
    { id: "clp-s4", type: "action", labelEN: "Scraping, Dry Cleaning", labelAR: "الكشط والتنظيف الجاف", swimlane: "services", nextId: "clp-s5" },
    { id: "clp-s5", type: "action", labelEN: "Receiving Day-Old Chicks (DOC) + Initial Inspection", labelAR: "استلام الصوص يوم العمر + فحص أولي", swimlane: "rearing-ph", nextId: "clp-s6" },
    { id: "clp-s6", type: "action", labelEN: "Brooding (0–6 weeks) → Growing (7–15 weeks) → Transfer Preparation (15–16 weeks)", labelAR: "حضانة (0–6 أسابيع) → نمو (7–15 أسبوعاً) → تحضير النقل (15–16 أسبوعاً)", note: "Feed: Starter (0–6wk), Grower (7–11wk), Developer (12–16wk); Sample to lab, Feeding, Watering, Medication & Vaccination", swimlane: "rearing-ph", nextId: "clp-s7" },
    { id: "clp-s7", type: "action", labelEN: "Cleaning & Disinfection of Laying Farm/Houses", labelAR: "تنظيف وتطهير مزارع/بيوت الإنتاج", swimlane: "services", nextId: "clp-s8" },
    { id: "clp-dispos", type: "action", labelEN: "Disposal of: Spent Hens Manure", labelAR: "التخلص من: روث الدجاج المستهلك", swimlane: "services", nextId: "clp-s8" },
    { id: "clp-s8", type: "action", labelEN: "Transportation → Reception at Laying Farms", labelAR: "النقل → الاستلام في مزارع الإنتاج", swimlane: "services", nextId: "clp-s9" },
    { id: "clp-s9", type: "action", labelEN: "Receiving Pullets from Rearing Farm", labelAR: "استلام الدجاجات من مزرعة التربية", swimlane: "laying-ph", nextId: "clp-s10" },
    { id: "clp-s10", type: "action", labelEN: "Start Production 20 Weeks → Daily Operations → Performance Monitoring", labelAR: "بدء الإنتاج 20 أسبوعاً → عمليات يومية → مراقبة الأداء", note: "Feed: Pre-layer (17–18wk), Layer-01 (19–36wk), Layer-02 (37–68wk), Layer-03 (69–100wk)", swimlane: "laying-ph", nextId: "clp-s11" },
    { id: "clp-s11", type: "action", labelEN: "Egg Collection for Grading (Collect thin Shell, Broken & Dirty eggs; auto Grading, Candling & Washing)", labelAR: "تجميع البيض للفرز (جمع القشرة الرفيعة والمكسور والقذر؛ فرز آلي وفحص شمعدان وغسيل)", swimlane: "laying-ph", nextId: "clp-d1" },
    { id: "clp-d1", type: "decision", labelEN: "Continue or Cull?", labelAR: "استمرار أم استنزاف؟", swimlane: "laying-ph", yesId: "clp-s10", noId: "clp-cull" },
    { id: "clp-cull", type: "action", labelEN: "Culling / Selling Spent Hens", labelAR: "استنزاف / بيع الدجاج المستهلك", swimlane: "laying-ph", nextId: "clp-eval" },
    { id: "clp-eval", type: "action", labelEN: "Evaluate Flock Performance → Ready for Next Cycle", labelAR: "تقييم أداء القطيع → جاهز للدورة القادمة", swimlane: "laying-ph", nextId: "clp-s12" },
    { id: "clp-s12", type: "action", labelEN: "Grading Station: Printing → Trays → Grading → Packing in Carton → Stamping Date → Sealing the Carton", labelAR: "محطة الفرز: طباعة → صواني → فرز → تعبئة كرتون → ختم التاريخ → إغلاق الكرتون", swimlane: "grading-st", nextId: "clp-s13" },
    { id: "clp-s13", type: "action", labelEN: "Finished Product Store", labelAR: "مخزن المنتج النهائي", swimlane: "storing", nextId: "clp-end" },
    { id: "clp-end", type: "end", labelEN: "End", labelAR: "النهاية", swimlane: "storing" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 12. Unpacked Egg Process
//     Source: C.Layer Business Process.pdf (page 5)
// ─────────────────────────────────────────────────────────────────────────────
const unpackedEggProcess: ProcessFlow = {
  id: "unpacked-egg-process",
  titleEN: "Unpacked Egg Process",
  titleAR: "عملية البيض غير المعبأ",
  descriptionEN:
    "Simple 4-step process for unpacked eggs: Create Production Order (unpacked) → Confirm One Activity → Unpacked Egg GR → Production Order TECO.",
  descriptionAR:
    "عملية بسيطة من 4 خطوات للبيض غير المعبأ: إنشاء أمر إنتاج → تأكيد نشاط → استلام بيض غير معبأ → إغلاق الأمر.",
  module: "PP",
  category: "Commercial Layer",
  source: "C.Layer Business Process.pdf",
  tcodes: ["CO01", "CO11N", "MIGO", "CO02"],
  steps: [
    { id: "ue-s1", type: "start", labelEN: "Start", labelAR: "البداية", nextId: "ue-s2" },
    { id: "ue-s2", type: "action", labelEN: "Create Production Order (Unpacked)", labelAR: "إنشاء أمر إنتاج (بيض غير معبأ)", tcode: "CO01", nextId: "ue-s3" },
    { id: "ue-s3", type: "action", labelEN: "Confirm One Activity", labelAR: "تأكيد نشاط واحد", tcode: "CO11N", nextId: "ue-s4" },
    { id: "ue-s4", type: "action", labelEN: "Unpacked Egg GR", labelAR: "استلام البيض غير المعبأ", tcode: "MIGO", nextId: "ue-s5" },
    { id: "ue-s5", type: "action", labelEN: "Production Order TECO", labelAR: "إغلاق أمر الإنتاج (TECO)", tcode: "CO02", nextId: "ue-end" },
    { id: "ue-end", type: "end", labelEN: "End", labelAR: "النهاية" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 13. Eggs Packaging Process
//     Source: C.Layer Business Process.pdf (page 6)
// ─────────────────────────────────────────────────────────────────────────────
const eggsPackagingProcess: ProcessFlow = {
  id: "eggs-packaging-process",
  titleEN: "Eggs Packaging Process",
  titleAR: "عملية تعبئة البيض",
  descriptionEN:
    "4-step packaging process: Collective Entry Confirmation (MF42N) → Write Required Data → Generate Automatic Batch → Post With Correction.",
  descriptionAR:
    "عملية تعبئة البيض من 4 خطوات: تأكيد الإدخال الجماعي → كتابة البيانات المطلوبة → توليد دفعة تلقائية → الترحيل مع تصحيح.",
  module: "PP",
  category: "Commercial Layer",
  source: "C.Layer Business Process.pdf",
  tcodes: ["MF42N"],
  steps: [
    { id: "ep-s1", type: "start", labelEN: "Start", labelAR: "البداية", nextId: "ep-s2" },
    { id: "ep-s2", type: "action", labelEN: "Collective Entry Confirmation", labelAR: "تأكيد الإدخال الجماعي", tcode: "MF42N", nextId: "ep-s3" },
    { id: "ep-s3", type: "document", labelEN: "Write Required Data", labelAR: "كتابة البيانات المطلوبة", nextId: "ep-s4" },
    { id: "ep-s4", type: "action", labelEN: "Generate Automatic Batch", labelAR: "توليد دفعة تلقائية", nextId: "ep-s5" },
    { id: "ep-s5", type: "action", labelEN: "Post With Correction", labelAR: "الترحيل مع تصحيح", tcode: "MF42N", nextId: "ep-end" },
    { id: "ep-end", type: "end", labelEN: "End", labelAR: "النهاية" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────────────────────────────
export const processFlows: ProcessFlow[] = [
  poultryLifecycle,
  pctParentProcess,
  parentRearingProcess,
  parentLayingProcess,
  clayerRearing,
  clayerLaying,
  hatcheryProcess,
  slaughterhouseProcess,
  processingWorkflowSAP,
  remConfirmation,
  clayerPhysical,
  unpackedEggProcess,
  eggsPackagingProcess,
];

export default processFlows;
