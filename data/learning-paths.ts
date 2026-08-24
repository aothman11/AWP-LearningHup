export interface LearningPath {
  id: string;
  title: { EN: string; AR: string };
  description: { EN: string; AR: string };
  role: string;
  roleAr: string;
  estimatedDuration: { EN: string; AR: string };
  /** Ordered list of entry IDs from qm-logbook.ts */
  entryIds: string[];
  /** Process flow phase this path primarily belongs to */
  processPhase?: string;
  color: string;
  dotColor: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: "pp-planner",
    title: { EN: "PP Planner", AR: "مخطط الإنتاج" },
    description: {
      EN: "Master demand management, MRP execution, and planned order handling. Covers the daily planning workflow from demand signals through production order creation.",
      AR: "أتقن إدارة الطلب وتشغيل MRP ومعالجة الأوامر المخططة. يشمل سير العمل اليومي للتخطيط من إشارات الطلب وحتى إنشاء أوامر الإنتاج.",
    },
    role: "Production Planner",
    roleAr: "مخطط الإنتاج",
    estimatedDuration: { EN: "3–4 hours", AR: "3–4 ساعات" },
    entryIds: [
      "pp-md61",  // MD61 – Planned Independent Requirements
      "pp-md04",  // MD04 – Stock/Requirements List
      "pp-md01",  // MD01 – MRP Total Run
      "pp-md02",  // MD02 – MRP Single Item Multi-Level
      "pp-md06",  // MD06 – MRP Exceptions
      "pp-md16",  // MD16 – Convert Planned Orders
      "pp-co01",  // CO01 – Create Production Order
    ],
    processPhase: "planning",
    color: "#E8F0E4",
    dotColor: "#1C3A2B",
  },
  {
    id: "qm-inspector",
    title: { EN: "QM Inspector", AR: "مفتش الجودة" },
    description: {
      EN: "Learn inspection lot management, results recording, and usage decisions. Covers the quality inspection workflow from goods receipt through final disposition.",
      AR: "تعلم إدارة أوامر الفحص وتسجيل النتائج وقرارات الاستخدام. يشمل سير عمل فحص الجودة من استلام البضاعة حتى القرار النهائي.",
    },
    role: "Quality Inspector / QM Coordinator",
    roleAr: "مفتش الجودة / منسق الجودة",
    estimatedDuration: { EN: "2–3 hours", AR: "2–3 ساعات" },
    entryIds: [
      "qm-qa01",   // QA01 – Create Inspection Lot
      "qm-qa02",   // QA02 – Change Inspection Lot
      "qm-qe51n",  // QE51N – Results Recording
      "qm-qe01",   // QE01 – Characteristics Results
      "qm-qa11",   // QA11 – Usage Decision
      "qm-qa32",   // QA32 – Batch Usage Decision
      "qm-qa16",   // QA16 – Collective Usage Decision
    ],
    processPhase: "quality",
    color: "#F8EBC5",
    dotColor: "#7A5E0A",
  },
  {
    id: "production-supervisor",
    title: { EN: "Production Supervisor", AR: "مشرف الإنتاج" },
    description: {
      EN: "Focus on production order monitoring, confirmations, goods movements, and capacity management. Covers shop-floor execution from order release to final confirmation.",
      AR: "ركز على مراقبة أوامر الإنتاج والتأكيدات وحركات البضائع وإدارة الطاقة الإنتاجية. يشمل تنفيذ أرضية الإنتاج من إصدار الأمر حتى التأكيد النهائي.",
    },
    role: "Production Supervisor / Shop-Floor Lead",
    roleAr: "مشرف الإنتاج / قائد أرضية التصنيع",
    estimatedDuration: { EN: "2–3 hours", AR: "2–3 ساعات" },
    entryIds: [
      "pp-co01",   // CO01 – Create Production Order
      "pp-co02",   // CO02 – Change Production Order
      "pp-coois",  // COOIS – Order Information System
      "pp-co03",   // CO03 – Display Production Order
      "pp-co11n",  // CO11N – Order Confirmation
      "pp-co15",   // CO15 – Final Confirmation
      "pp-migo",   // MIGO – Goods Movement
      "pp-cogi",   // COGI – Reprocess Backflush Errors
      "pp-cm01",   // CM01 – Capacity Planning Overview
    ],
    processPhase: "production",
    color: "#EDE9E1",
    dotColor: "#6B7A6F",
  },
  {
    id: "sap-consultant",
    title: { EN: "SAP PP/QM Consultant", AR: "مستشار SAP PP/QM" },
    description: {
      EN: "Full integration chain covering configuration, master data, MRP, production, quality, and reporting. Designed for consultants who need cross-functional understanding of both PP and QM.",
      AR: "سلسلة التكامل الكاملة تشمل التهيئة والبيانات الرئيسية وMRP والإنتاج والجودة والتقارير. مصمم للمستشارين الذين يحتاجون إلى فهم متقاطع لوحدتي PP وQM.",
    },
    role: "SAP PP/QM Functional Consultant",
    roleAr: "مستشار SAP وظيفي PP/QM",
    estimatedDuration: { EN: "6–8 hours", AR: "6–8 ساعات" },
    entryIds: [
      // Master Data
      "pp-ca01",   // CA01 – Routing
      "pp-cs01",   // CS01 – BOM Create
      // Planning
      "pp-md61",   // MD61 – PIR
      "pp-md04",   // MD04 – Stock/Requirements List
      "pp-md01",   // MD01 – MRP Total
      "pp-md02",   // MD02 – MRP Single
      "pp-md06",   // MD06 – Exceptions
      // Production
      "pp-co01",   // CO01 – Create Order
      "pp-co11n",  // CO11N – Confirmation
      "pp-migo",   // MIGO – GR
      // Quality
      "qm-qp01",   // QP01 – Inspection Plan
      "qm-qs21",   // QS21 – Quality Inspection Characteristic
      "qm-qa01",   // QA01 – Create Inspection Lot
      "qm-qe51n",  // QE51N – Results Recording
      "qm-qa11",   // QA11 – Usage Decision
      "qm-qm01",   // QM01 – Quality Notification
      // Reporting
      "qm-qcc0",   // QCC0 – Quality Control Center
    ],
    processPhase: "all",
    color: "#C8DFC5",
    dotColor: "#1C3A2B",
  },
];
