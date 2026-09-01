/**
 * AWP SAP Categories configuration.
 *
 * Add or edit categories here without touching any component code.
 * Each category maps to a slug used in the URL: /hub/awp-processes/[categorySlug]
 *
 * processIds: references process `id` fields from data/processes.ts
 * Future categories can include processes sourced from training documents.
 */

export interface AwpCategory {
  slug: string;
  icon: string;
  nameEN: string;
  nameAR: string;
  /** Short 1–2 line description shown on the category card */
  descriptionEN: string;
  descriptionAR: string;
  /** IDs of processes that belong to this category (from data/processes.ts) */
  processIds: string[];
}

export const awpCategories: AwpCategory[] = [
  {
    slug: "material-management",
    icon: "📦",
    nameEN: "Material Management",
    nameAR: "إدارة المواد",
    descriptionEN:
      "[PLACEHOLDER: Overview of material procurement, goods movements, inventory control, and stock management processes in SAP MM.]",
    descriptionAR:
      "[عنصر نائب: نظرة عامة على عمليات المشتريات وحركات البضائع ومراقبة المخزون وإدارة المواد في SAP MM.]",
    processIds: ["goods-movement", "quota-arrangement"],
  },
  {
    slug: "production-planning",
    icon: "🏭",
    nameEN: "Production Planning",
    nameAR: "تخطيط الإنتاج",
    descriptionEN:
      "[PLACEHOLDER: End-to-end production planning processes covering MRP, production orders, capacity management, and shop-floor execution in SAP PP.]",
    descriptionAR:
      "[عنصر نائب: عمليات تخطيط الإنتاج الشاملة تغطي MRP وأوامر الإنتاج وإدارة الطاقة الإنتاجية وتنفيذ أرضية المصنع في SAP PP.]",
    processIds: [
      "prod-order-lifecycle",
      "mrp-run",
      "hatchery-process",
      "slaughterhouse-process",
      "clayer-process",
      "parent-to-processing",
    ],
  },
  {
    slug: "plant-maintenance",
    icon: "🔧",
    nameEN: "Plant Maintenance",
    nameAR: "صيانة المصنع",
    descriptionEN:
      "[PLACEHOLDER: Plant maintenance processes covering equipment management, preventive and corrective maintenance orders, and technical object hierarchies in SAP PM.]",
    descriptionAR:
      "[عنصر نائب: عمليات صيانة المصنع تشمل إدارة المعدات وأوامر الصيانة الوقائية والتصحيحية والتسلسل الهرمي للكائنات التقنية في SAP PM.]",
    processIds: [],
  },
  {
    slug: "quality-management",
    icon: "✅",
    nameEN: "Quality Management",
    nameAR: "إدارة الجودة",
    descriptionEN:
      "[PLACEHOLDER: Quality management processes covering inspection planning, results recording, usage decisions, quality notifications, and CAPA in SAP QM.]",
    descriptionAR:
      "[عنصر نائب: عمليات إدارة الجودة تشمل تخطيط الفحص وتسجيل النتائج وقرارات الاستخدام وإشعارات الجودة وCAPAفي SAP QM.]",
    processIds: ["quality-inspection"],
  },
  {
    slug: "sales-distribution",
    icon: "🚚",
    nameEN: "Sales & Distribution",
    nameAR: "المبيعات والتوزيع",
    descriptionEN:
      "[PLACEHOLDER: Sales and distribution processes covering order management, delivery, billing, and customer-facing operations in SAP SD.]",
    descriptionAR:
      "[عنصر نائب: عمليات المبيعات والتوزيع تشمل إدارة الطلبات والتسليم والفوترة والعمليات الموجهة للعملاء في SAP SD.]",
    processIds: [],
  },
  {
    slug: "finance",
    icon: "💰",
    nameEN: "Finance",
    nameAR: "المالية",
    descriptionEN:
      "[PLACEHOLDER: Financial accounting processes covering general ledger, accounts payable/receivable, cost centre accounting, and period-end closing in SAP FI/CO.]",
    descriptionAR:
      "[عنصر نائب: عمليات المحاسبة المالية تشمل دفتر الأستاذ العام والذمم المدينة والدائنة ومحاسبة مراكز التكلفة وإغلاق الفترة في SAP FI/CO.]",
    processIds: [],
  },
];

/** Convenience lookup: categorySlug → AwpCategory */
export function getCategoryBySlug(slug: string): AwpCategory | undefined {
  return awpCategories.find((c) => c.slug === slug);
}
