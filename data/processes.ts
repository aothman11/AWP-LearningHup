/**
 * AUDIT NOTE: Created as part of the Process Onboarding module.
 * Data file for all AWP SAP PP/QM guided process onboarding.
 *
 * Sourced from AWP BPD PDFs and verified SAP PP/QM transaction knowledge.
 * Any step marked // VERIFY: needs confirmation against live AWP system config.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProcessStep {
  id: string;
  stepNumber: number;
  titleEN: string;
  titleAR: string;
  tCode?: string;
  role: string;
  whatToDoEN: string;
  whatToDoAR: string;
  whatSAPDoesEN: string;
  whatSAPDoesAR: string;
  expectedOutputEN: string;
  expectedOutputAR: string;
  isDecisionPoint?: boolean;
  yesNextStep?: number;   // step number to jump to on "Yes"
  noNextStep?: number;    // step number to jump to on "No"
  /** Path relative to /public — SAP screenshot for this step, shown inline when expanded */
  screenshotUrl?: string;
}

/** All SAP modules represented in the Processes tab */
export type ProcessModule =
  | "PP"
  | "QM"
  | "MM"
  | "PM"
  | "SD"
  | "HCM"
  | "FICO"
  | "TM"
  | "EHS";

/** Human-readable label for each module, used as accordion group heading */
export const MODULE_LABELS: Record<ProcessModule, string> = {
  PP:   "Production Planning",
  QM:   "Quality Management",
  MM:   "Materials Management",
  PM:   "Plant Maintenance",
  SD:   "Sales & Distribution",
  HCM:  "Human Capital Management",
  FICO: "Finance & Controlling",
  TM:   "Transportation Management",
  EHS:  "Environment, Health & Safety",
};

/** Display order for module groups in the Processes tab */
export const MODULE_ORDER: ProcessModule[] = [
  "PP", "QM", "MM", "PM", "SD", "HCM", "FICO", "TM", "EHS",
];

export interface Process {
  id: string;
  icon: string;
  duration: string;
  titleEN: string;
  titleAR: string;
  descriptionEN: string;
  descriptionAR: string;
  module: ProcessModule;
  roles: string[];
  steps: ProcessStep[];
  /** Paths relative to /public — shown in the chart lightbox */
  chartImages?: string[];
}

// ─── Process Data ─────────────────────────────────────────────────────────────

export const processes: Process[] = [
  // ── 1. Production Order Lifecycle ─────────────────────────────────────────
  {
    id: "prod-order-lifecycle",
    icon: "🏭",
    duration: "45 min",
    titleEN: "Production Order Lifecycle",
    titleAR: "دورة حياة أمر الإنتاج",
    descriptionEN:
      "Create, release, confirm, and close a production order. Covers CO01 through TECO.",
    descriptionAR:
      "إنشاء أمر الإنتاج وإصداره وتأكيده وإغلاقه. يغطي من CO01 إلى TECO.",
    module: "PP",
    roles: ["PP Planner", "Production Supervisor"],
    chartImages: [
      "/process-charts/production-process-sap.png",
      "/process-charts/sap-production-p1.png",
      "/process-charts/sap-production-p2.png",
    ],
    steps: [
      {
        id: "pol-1",
        stepNumber: 1,
        titleEN: "Create Production Order",
        titleAR: "إنشاء أمر الإنتاج",
        tCode: "CO01",
        role: "PP Planner",
        whatToDoEN:
          "Navigate to CO01. Enter Material number, Plant (e.g. 1100), Order Type PP01, and Production Version if applicable. Enter the order quantity and set Basic Start and Finish dates.",
        whatToDoAR:
          "انتقل إلى CO01. أدخل رقم المادة والمصنع (مثل 1100) ونوع الأمر PP01 وإصدار الإنتاج إن وجد. أدخل كمية الأمر وحدد تواريخ البدء والانتهاء الأساسية.",
        whatSAPDoesEN:
          "SAP creates a production order with status CRTD. It copies the BOM and routing, calculates dependent requirements for all components, schedules the order using lead-time scheduling, and assigns a unique production order number.",
        whatSAPDoesAR:
          "ينشئ SAP أمر إنتاج بحالة CRTD. يقوم بنسخ قائمة المواد والتوجيه، وحساب المتطلبات التابعة لجميع المكونات، وجدولة الأمر باستخدام جدولة وقت الانتظار، وتعيين رقم أمر إنتاج فريد.",
        expectedOutputEN:
          "Production order created with a unique number (e.g. 1000XXXX) and status CRTD. Component list (reservations) and operation list visible. Availability check result shown.",
        expectedOutputAR:
          "تم إنشاء أمر الإنتاج برقم فريد (مثل 1000XXXX) وحالة CRTD. قائمة المكونات (الحجوزات) وقائمة العمليات مرئية. نتيجة فحص التوفر معروضة.",
      },
      {
        id: "pol-2",
        stepNumber: 2,
        titleEN: "Check Component Availability",
        titleAR: "فحص توفر المكونات",
        tCode: "CO02",
        role: "PP Planner",
        whatToDoEN:
          "Open the order in CO02. Go to the Components tab and review each component's available quantity vs. required quantity. If shortages exist, coordinate with the warehouse or adjust the MRP run.",
        whatToDoAR:
          "افتح الأمر في CO02. انتقل إلى تبويب المكونات وراجع الكمية المتاحة مقابل الكمية المطلوبة لكل مكون. إذا كانت هناك نقص، نسّق مع المستودع أو عدّل تشغيل MRP.",
        whatSAPDoesEN:
          "Displays component availability based on current stock, open purchase orders, and other supply elements. Highlights shortages in red. Availability check uses the checking rule defined in plant parameters.",
        whatSAPDoesAR:
          "يعرض توفر المكونات بناءً على المخزون الحالي وأوامر الشراء المفتوحة وعناصر التوريد الأخرى. يسلط الضوء على النقص باللون الأحمر. يستخدم فحص التوفر قاعدة الفحص المحددة في معلمات المصنع.",
        expectedOutputEN:
          "All components show green (available) or red (shortage flagged). Shortage list can be printed for expediting. Order remains in CRTD status until released.",
        expectedOutputAR:
          "تُظهر جميع المكونات أخضر (متاح) أو أحمر (نقص مُعلَّم). يمكن طباعة قائمة النقص للمتابعة. يبقى الأمر في حالة CRTD حتى الإصدار.",
      },
      {
        id: "pol-3",
        stepNumber: 3,
        titleEN: "Release Production Order",
        titleAR: "إصدار أمر الإنتاج",
        tCode: "CO02",
        role: "PP Planner",
        whatToDoEN:
          "Open the order in CO02 and click the Release button (flag icon in the toolbar) or go to Functions → Release. Confirm the release in the dialogue. If AWP uses shop floor papers, the print dialogue will appear.",
        whatToDoAR:
          "افتح الأمر في CO02 وانقر على زر الإصدار (أيقونة العلم في شريط الأدوات) أو انتقل إلى الوظائف → إصدار. أكّد الإصدار في مربع الحوار. إذا كان AWP يستخدم أوراق أرضية المصنع، ستظهر نافذة الطباعة.",
        whatSAPDoesEN:
          "Changes the order status from CRTD to REL (Released). This enables goods movements (goods issue, goods receipt) and confirmations against the order. Reservation documents become active.",
        whatSAPDoesAR:
          "تتغير حالة الأمر من CRTD إلى REL (تم الإصدار). يُمكّن هذا حركات البضائع (إصدار البضاعة، استلام البضاعة) والتأكيدات مقابل الأمر. تصبح مستندات الحجز نشطة.",
        expectedOutputEN:
          "Order status = REL. Shop floor papers printed if configured. Warehouse can now see component reservations and begin picking. Order visible in production supervisor's worklist.",
        expectedOutputAR:
          "حالة الأمر = REL. طباعة أوراق أرضية المصنع إذا تم تهيئتها. يمكن للمستودع الآن رؤية حجوزات المكونات والبدء في الانتقاء. الأمر مرئي في قائمة أعمال مشرف الإنتاج.",
      },
      {
        id: "pol-4",
        stepNumber: 4,
        titleEN: "Post Goods Issue for Components",
        titleAR: "ترحيل إصدار البضاعة للمكونات",
        tCode: "MIGO",
        role: "Warehouse",
        whatToDoEN:
          "Navigate to MIGO. Select 'Goods Issue' (A07) from the first dropdown and 'Order' from the second dropdown. Enter the production order number. SAP displays all planned components. Verify actual quantities to be issued. Adjust for any scrap or excess. Post (Save).",
        whatToDoAR:
          "انتقل إلى MIGO. حدد 'إصدار البضاعة' (A07) من القائمة المنسدلة الأولى و'أمر' من الثانية. أدخل رقم أمر الإنتاج. يعرض SAP جميع المكونات المخططة. تحقق من الكميات الفعلية المراد إصدارها. عدّل لأي خردة أو فائض. ارحّل (حفظ).",
        whatSAPDoesEN:
          "Posts a goods issue using movement type 261 for each component. Reduces component stock levels in the supplying storage location. Creates a material document and an accounting document. Updates the production order with actual component consumption.",
        whatSAPDoesAR:
          "يرحّل إصدار بضاعة باستخدام نوع الحركة 261 لكل مكون. يقلل مستويات مخزون المكونات في موقع التخزين المورد. ينشئ مستند مادة ومستند محاسبة. يحدّث أمر الإنتاج بالاستهلاك الفعلي للمكونات.",
        expectedOutputEN:
          "Material document posted (movement type 261). Component stock reduced. Production order shows 'GI posted' flag (GMPS status). Actual component costs debited to the order.",
        expectedOutputAR:
          "تم ترحيل مستند المادة (نوع الحركة 261). تم تقليل مخزون المكونات. يظهر أمر الإنتاج علامة 'تم ترحيل إصدار البضاعة' (حالة GMPS). تكاليف المكونات الفعلية مدينة على الأمر.",
      },
      {
        id: "pol-5",
        stepNumber: 5,
        titleEN: "Post Production Confirmation",
        titleAR: "ترحيل تأكيد الإنتاج",
        tCode: "CO11N",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to CO11N. Enter the production order number and operation number (from the routing). Enter yield quantity (actual produced), scrap quantity if any, and actual activity times (Machine Hours, Labor Hours). Set the 'Final Confirmation' flag if this operation is complete. Post.",
        whatToDoAR:
          "انتقل إلى CO11N. أدخل رقم أمر الإنتاج ورقم العملية (من التوجيه). أدخل كمية العائد (الفعلي المنتج) وكمية الخردة إن وجدت وأوقات النشاط الفعلية (ساعات الآلة، ساعات العمل). ضع علامة 'التأكيد النهائي' إذا اكتملت هذه العملية. ارحّل.",
        whatSAPDoesEN:
          "Records actual production quantities and activity times against the order. Updates order status and progress. Calculates actual costs based on confirmed activities and the cost center rates. If backflushing is configured, automatically posts goods issue for backflushed components.",
        whatSAPDoesAR:
          "يسجّل كميات الإنتاج الفعلية وأوقات النشاط مقابل الأمر. يحدّث حالة الأمر وتقدمه. يحسب التكاليف الفعلية بناءً على الأنشطة المؤكدة وأسعار مركز التكلفة. إذا تم تهيئة الإعادة التلقائية، يرحّل تلقائياً إصدار البضاعة للمكونات المُعادة.",
        expectedOutputEN:
          "Confirmation document (time ticket) created. Order actual quantities and times updated. Order progress visible in COOIS. Actual costs debited. If final confirmation, operation status = CNF.",
        expectedOutputAR:
          "تم إنشاء مستند التأكيد (بطاقة الوقت). تم تحديث الكميات الفعلية والأوقات في أمر الإنتاج. تقدم الأمر مرئي في COOIS. تم إدراج التكاليف الفعلية. إذا كان التأكيد النهائي، حالة العملية = CNF.",
      },
      {
        id: "pol-6",
        stepNumber: 6,
        titleEN: "Post Goods Receipt for Finished Product",
        titleAR: "ترحيل استلام البضاعة للمنتج النهائي",
        tCode: "MIGO",
        role: "Warehouse",
        whatToDoEN:
          "Navigate to MIGO. Select 'Goods Receipt' (A01) and 'Order' as reference. Enter the production order number. Enter the actual received quantity and the receiving storage location. If QM is active, an inspection lot will be triggered — check the QM indicator. Post (Save).",
        whatToDoAR:
          "انتقل إلى MIGO. حدد 'استلام البضاعة' (A01) و'أمر' كمرجع. أدخل رقم أمر الإنتاج. أدخل الكمية الفعلية المستلمة وموقع التخزين المستلِم. إذا كانت QM نشطة، سيتم تشغيل دفعة فحص — تحقق من مؤشر QM. ارحّل (حفظ).",
        whatSAPDoesEN:
          "Posts goods receipt using movement type 101. Increases finished product stock in the receiving storage location. Creates material and accounting documents. If QM inspection is configured, an inspection lot (type 04) is created automatically. Updates the open order quantity.",
        whatSAPDoesAR:
          "يرحّل استلام البضاعة باستخدام نوع الحركة 101. يزيد مخزون المنتج النهائي في موقع التخزين المستلِم. ينشئ مستندات مادة ومحاسبة. إذا تم تهيئة فحص QM، يتم إنشاء دفعة فحص (النوع 04) تلقائياً. يحدّث الكمية المفتوحة للأمر.",
        expectedOutputEN:
          "Material document posted (movement type 101). Finished product stock increased. Inspection lot created if QM active (// VERIFY: inspection type 04 configured for material). Order GR status updated.",
        expectedOutputAR:
          "تم ترحيل مستند المادة (نوع الحركة 101). زيادة مخزون المنتج النهائي. تم إنشاء دفعة فحص إذا كانت QM نشطة (// تحقق: تم تهيئة نوع الفحص 04 للمادة). تم تحديث حالة استلام البضاعة للأمر.",
      },
      {
        id: "pol-7",
        stepNumber: 7,
        titleEN: "Quality Usage Decision",
        titleAR: "قرار استخدام الجودة",
        tCode: "QA32",
        role: "QM Inspector",
        isDecisionPoint: true,
        yesNextStep: 8,
        noNextStep: 7,
        whatToDoEN:
          "Navigate to QA32. Find the inspection lot linked to the production order (filter by plant and material). Record inspection results for all characteristics. Make the usage decision: Accept (code Q2 = Unrestricted) or Reject (code Q3 = Blocked). Post the usage decision.",
        whatToDoAR:
          "انتقل إلى QA32. ابحث عن دفعة الفحص المرتبطة بأمر الإنتاج (تصفية حسب المصنع والمادة). سجّل نتائج الفحص لجميع الخصائص. اتخذ قرار الاستخدام: قبول (رمز Q2 = بدون قيود) أو رفض (رمز Q3 = محجوب). ارحّل قرار الاستخدام.",
        whatSAPDoesEN:
          "If ACCEPTED: transfers stock from quality inspection stock to unrestricted use. If REJECTED: moves stock to blocked stock. Closes the inspection lot. Any defect notifications are triggered based on configuration. Updates the usage decision on the production order.",
        whatSAPDoesAR:
          "في حالة القبول: ينقل المخزون من مخزون فحص الجودة إلى الاستخدام غير المقيّد. في حالة الرفض: ينقل المخزون إلى المخزون المحجوب. يُغلق دفعة الفحص. يتم تشغيل أي إشعارات عيوب بناءً على التهيئة. يحدّث قرار الاستخدام في أمر الإنتاج.",
        expectedOutputEN:
          "ACCEPTED → Inspection lot closed. Stock moves to unrestricted use. Proceed to Step 8 (TECO).\nREJECTED → Inspection lot closed. Stock in blocked status. Coordinate with production for rework or scrap. Repeat inspection after corrective action.",
        expectedOutputAR:
          "مقبول → دفعة الفحص مغلقة. المخزون ينتقل إلى الاستخدام غير المقيّد. انتقل إلى الخطوة 8 (TECO).\nمرفوض → دفعة الفحص مغلقة. المخزون في حالة محجوبة. تنسيق مع الإنتاج لإعادة العمل أو الخردة. تكرار الفحص بعد الإجراء التصحيحي.",
      },
      {
        id: "pol-8",
        stepNumber: 8,
        titleEN: "Technically Complete the Order (TECO)",
        titleAR: "الاكتمال التقني للأمر (TECO)",
        tCode: "CO02",
        role: "PP Planner",
        whatToDoEN:
          "Open the order in CO02. Go to Functions → Restrict Processing → Set Deletion Flag (TECO). Alternatively use the TECO button in the toolbar. Confirm in the dialogue. This signals that production is finished — no further goods movements or confirmations are expected.",
        whatToDoAR:
          "افتح الأمر في CO02. انتقل إلى الوظائف → تقييد المعالجة → ضبط علامة الحذف (TECO). أو استخدم زر TECO في شريط الأدوات. أكّد في مربع الحوار. هذا يُشير إلى انتهاء الإنتاج — لا مزيد من حركات البضائع أو التأكيدات متوقعة.",
        whatSAPDoesEN:
          "Sets order status to TECO. Cancels all remaining open component reservations (releases the reserved stock for other orders). Triggers final settlement preparation. The order is now ready for cost settlement in KO88 and subsequent archiving.",
        whatSAPDoesAR:
          "تضع حالة الأمر على TECO. تُلغي جميع حجوزات المكونات المفتوحة المتبقية (تُحرر المخزون المحجوز للأوامر الأخرى). تُشغّل إعداد التسوية النهائية. الأمر الآن جاهز لتسوية التكاليف في KO88 والأرشفة اللاحقة.",
        expectedOutputEN:
          "Order status = TECO. Remaining reservations cancelled. Open order quantity = 0. Order ready for cost settlement (KO88) and eventual archiving. No further goods movements or confirmations possible.",
        expectedOutputAR:
          "حالة الأمر = TECO. إلغاء الحجوزات المتبقية. الكمية المفتوحة للأمر = 0. الأمر جاهز لتسوية التكاليف (KO88) والأرشفة في نهاية المطاف. لا مزيد من حركات البضائع أو التأكيدات ممكنة.",
      },
    ],
  },

  // ── 2. Goods Issue & Goods Receipt ────────────────────────────────────────
  {
    id: "goods-movement",
    icon: "📦",
    duration: "30 min",
    titleEN: "Goods Issue & Goods Receipt",
    titleAR: "إصدار البضاعة واستلامها",
    descriptionEN:
      "Post goods movements against production orders and purchase orders using MIGO.",
    descriptionAR:
      "ترحيل حركات البضائع مقابل أوامر الإنتاج وأوامر الشراء باستخدام MIGO.",
    module: "MM",
    roles: ["Warehouse", "PP Planner"],
    chartImages: ["/process-charts/processing-workflow.png"],
    steps: [
      // TODO: populate with full AWP step data from process PDFs
      {
        id: "gm-1",
        stepNumber: 1,
        titleEN: "Open MIGO and Select Movement Type",
        titleAR: "فتح MIGO واختيار نوع الحركة",
        tCode: "MIGO",
        role: "Warehouse",
        whatToDoEN:
          "Navigate to MIGO. From the first dropdown select the transaction type (Goods Receipt A01, Goods Issue A07, Transfer Posting A08). From the second dropdown select the reference document type (Order, Purchase Order, Delivery).",
        whatToDoAR:
          "انتقل إلى MIGO. من القائمة المنسدلة الأولى حدد نوع المعاملة (استلام بضاعة A01، إصدار بضاعة A07، ترحيل تحويل A08). من القائمة الثانية حدد نوع المستند المرجعي (أمر، أمر شراء، تسليم).",
        whatSAPDoesEN:
          "Loads the MIGO interface configured for the selected movement type and reference. Enables the relevant input fields for the transaction.",
        whatSAPDoesAR:
          "يحمّل واجهة MIGO المُهيّأة لنوع الحركة والمرجع المحدد. يتيح حقول الإدخال ذات الصلة بالمعاملة.",
        expectedOutputEN:
          "MIGO screen is ready for data entry. Reference document type and movement type are set.",
        expectedOutputAR:
          "شاشة MIGO جاهزة لإدخال البيانات. نوع المستند المرجعي ونوع الحركة محددان.",
      },
      {
        id: "gm-2",
        stepNumber: 2,
        titleEN: "Enter Reference Document and Review Items",
        titleAR: "أدخل المستند المرجعي وراجع البنود",
        tCode: "MIGO",
        role: "Warehouse",
        whatToDoEN:
          "Enter the reference document number (e.g. production order number or PO number). Press Enter or click the reference icon. Review the automatically populated line items — verify material, quantity, storage location, and batch if applicable.",
        whatToDoAR:
          "أدخل رقم المستند المرجعي (مثل رقم أمر الإنتاج أو رقم أمر الشراء). اضغط Enter أو انقر على أيقونة المرجع. راجع بنود الصف المملوءة تلقائياً — تحقق من المادة والكمية وموقع التخزين والدفعة إن وجدت.",
        whatSAPDoesEN:
          "Retrieves the reference document and populates all planned items with proposed quantities. Applies default storage locations from the material master. Triggers availability and quantity checks.",
        whatSAPDoesAR:
          "يسترد المستند المرجعي ويملأ جميع البنود المخططة بالكميات المقترحة. يطبّق مواقع التخزين الافتراضية من سجل المادة الرئيسي. يُشغّل فحوصات التوفر والكمية.",
        expectedOutputEN:
          "Line items populated with material numbers, planned quantities, and storage locations. Ready for quantity confirmation or adjustment.",
        expectedOutputAR:
          "بنود الصف مملوءة بأرقام المواد والكميات المخططة ومواقع التخزين. جاهز لتأكيد الكمية أو تعديلها.",
      },
      {
        id: "gm-3",
        stepNumber: 3,
        titleEN: "Post the Goods Movement",
        titleAR: "ارحّل حركة البضاعة",
        tCode: "MIGO",
        role: "Warehouse",
        whatToDoEN:
          "Adjust quantities if actual differs from planned (e.g. partial receipt). Set the 'Item OK' checkbox for each line. Verify all items are flagged. Click Post (Save icon or Ctrl+S). Note the material document number generated.",
        whatToDoAR:
          "عدّل الكميات إذا كانت الفعلية تختلف عن المخططة (مثل استلام جزئي). ضع علامة الاختيار 'البند موافق' لكل صف. تحقق من تعليم جميع البنود. انقر على ارحّل (أيقونة الحفظ أو Ctrl+S). سجّل رقم مستند المادة المُولَّد.",
        whatSAPDoesEN:
          "Creates a material document and (for value-relevant movements) an FI accounting document. Updates stock levels in real time. Posts the movement to the referenced order or purchase order. Triggers downstream processes (inspection lot for GR with QM, invoice verification readiness for PO-based GR).",
        whatSAPDoesAR:
          "ينشئ مستند مادة ومستند محاسبة FI (للحركات ذات الصلة بالقيمة). يحدّث مستويات المخزون في الوقت الفعلي. يرحّل الحركة إلى الأمر أو أمر الشراء المشار إليه. يُشغّل العمليات اللاحقة (دفعة فحص لاستلام البضاعة مع QM، جاهزية التحقق من الفاتورة لاستلام البضاعة المستند إلى أمر شراء).",
        expectedOutputEN:
          "Material document number displayed (e.g. 5000XXXXXX). Stock updated immediately. Goods movement history recorded. Referenced order or PO updated.",
        expectedOutputAR:
          "رقم مستند المادة معروض (مثل 5000XXXXXX). المخزون محدّث فوراً. تم تسجيل سجل حركة البضاعة. تم تحديث الأمر أو أمر الشراء المشار إليه.",
      },
    ],
  },

  // ── 3. MRP Run & Exception Handling ──────────────────────────────────────
  {
    id: "mrp-run",
    icon: "📊",
    duration: "40 min",
    titleEN: "MRP Run & Exception Handling",
    titleAR: "تشغيل MRP ومعالجة الاستثناءات",
    descriptionEN:
      "Execute MRP, read the stock/requirements list, and resolve exception messages.",
    descriptionAR:
      "تنفيذ MRP وقراءة قائمة المخزون والمتطلبات ومعالجة رسائل الاستثناء.",
    module: "PP",
    roles: ["PP Planner"],
    chartImages: ["/process-charts/supply-chain.png"],
    steps: [
      // TODO: populate with full AWP step data from process PDFs
      {
        id: "mrp-1",
        stepNumber: 1,
        titleEN: "Execute MRP for Plant",
        titleAR: "تشغيل MRP للمصنع",
        tCode: "MD01",
        role: "PP Planner",
        whatToDoEN:
          "Navigate to MD01. Enter Plant (e.g. 1100). Select Processing Key: NETCH (net change) for daily runs or NEUPL (regenerative) for a full reset. Set the Planning Date. Verify creation of purchase requisitions = 1. Execute (F8).",
        whatToDoAR:
          "انتقل إلى MD01. أدخل المصنع (مثل 1100). حدد مفتاح المعالجة: NETCH (التغيير الصافي) للتشغيل اليومي أو NEUPL (إعادة التوليد) لإعادة ضبط كاملة. حدد تاريخ التخطيط. تحقق من إنشاء طلبات الشراء = 1. نفّذ (F8).",
        whatSAPDoesEN:
          "Runs MRP for all MRP-active materials in the plant. Generates planned orders, purchase requisitions, and exception messages. Regenerates dependent requirements through all BOM levels.",
        whatSAPDoesAR:
          "يُشغّل MRP لجميع المواد النشطة في MRP بالمصنع. يُولّد أوامر مخططة وطلبات شراء ورسائل استثناء. يُعيد توليد المتطلبات التابعة عبر جميع مستويات قائمة المواد.",
        expectedOutputEN:
          "MRP log generated. Planned orders and purchase requisitions created for shortfall materials. Exception messages listed for planner review.",
        expectedOutputAR:
          "تم إنشاء سجل MRP. تم إنشاء أوامر مخططة وطلبات شراء للمواد الناقصة. رسائل الاستثناء مدرجة لمراجعة المخطط.",
      },
      {
        id: "mrp-2",
        stepNumber: 2,
        titleEN: "Review Stock/Requirements List",
        titleAR: "مراجعة قائمة المخزون/المتطلبات",
        tCode: "MD04",
        role: "PP Planner",
        whatToDoEN:
          "Navigate to MD04. Enter material number and plant. Review the time-phased supply and demand picture: sales orders, planned orders, purchase orders, open stock — all on a single timeline. Identify any pegging gaps or coverage shortfalls.",
        whatToDoAR:
          "انتقل إلى MD04. أدخل رقم المادة والمصنع. راجع صورة العرض والطلب الزمني: أوامر المبيعات والأوامر المخططة وأوامر الشراء والمخزون المفتوح — كلها على جدول زمني واحد. حدد أي فجوات تثبيت أو نقص في التغطية.",
        whatSAPDoesEN:
          "Displays the complete MRP picture for the material: receipt elements (planned orders, POs), issue elements (sales orders, reservations), and the running stock balance. Color-coded to highlight coverage gaps.",
        whatSAPDoesAR:
          "يعرض صورة MRP الكاملة للمادة: عناصر الاستلام (الأوامر المخططة، أوامر الشراء)، عناصر الإصدار (أوامر المبيعات، الحجوزات)، ورصيد المخزون الجاري. مُلوّن لتسليط الضوء على فجوات التغطية.",
        expectedOutputEN:
          "Clear supply/demand timeline for the material. Shortfalls visible as negative stock or coverage gaps. Planner can drill down into exception messages from this screen.",
        expectedOutputAR:
          "جدول زمني واضح للعرض/الطلب للمادة. النقص مرئي كمخزون سالب أو فجوات تغطية. يمكن للمخطط التعمق في رسائل الاستثناء من هذه الشاشة.",
      },
      {
        id: "mrp-3",
        stepNumber: 3,
        titleEN: "Handle MRP Exceptions",
        titleAR: "معالجة استثناءات MRP",
        tCode: "MD07",
        role: "PP Planner",
        whatToDoEN:
          "Navigate to MD07 (MRP Exception Monitor). Filter by plant and exception code. Common exceptions: 10 = Reschedule In, 15 = Reschedule Out, 20 = New, 25 = Cancel. For each, decide to reschedule, convert, or cancel the order. Use MD04 to drill into individual materials.",
        whatToDoAR:
          "انتقل إلى MD07 (مراقب استثناءات MRP). فلتر حسب المصنع ورمز الاستثناء. الاستثناءات الشائعة: 10 = إعادة جدولة داخل، 15 = إعادة جدولة خارج، 20 = جديد، 25 = إلغاء. لكل منها، اتخذ قراراً بإعادة الجدولة أو التحويل أو الإلغاء. استخدم MD04 للتعمق في المواد الفردية.",
        whatSAPDoesEN:
          "Displays all materials with active exception messages for the selected plant. Allows mass processing of exceptions. Drill-through to individual material MRP lists. Provides action buttons for rescheduling or deleting exception messages.",
        whatSAPDoesAR:
          "يعرض جميع المواد ذات رسائل الاستثناء النشطة للمصنع المحدد. يتيح المعالجة الجماعية للاستثناءات. التعمق في قوائم MRP للمواد الفردية. يوفر أزرار إجراء لإعادة الجدولة أو حذف رسائل الاستثناء.",
        expectedOutputEN:
          "All critical exceptions reviewed and actioned. Planned orders rescheduled or converted. No open exception codes blocking the plan. MRP list is clean for the planning period.",
        expectedOutputAR:
          "تمت مراجعة جميع الاستثناءات الحرجة واتخاذ الإجراءات اللازمة. أوامر مخططة مُعاد جدولتها أو محوّلة. لا رموز استثناء مفتوحة تعيق الخطة. قائمة MRP نظيفة لفترة التخطيط.",
      },
    ],
  },

  // ── 4. Quality Inspection Flow ───────────────────────────────────────────
  {
    id: "quality-inspection",
    icon: "🔍",
    duration: "35 min",
    titleEN: "Quality Inspection Flow",
    titleAR: "سير عملية فحص الجودة",
    descriptionEN:
      "From inspection lot creation to results recording and usage decision in QA32.",
    descriptionAR:
      "من إنشاء دفعة الفحص إلى تسجيل النتائج وقرار الاستخدام في QA32.",
    module: "QM",
    roles: ["QM Inspector"],
    chartImages: ["/process-charts/rem-confirmation.png"],
    steps: [
      // TODO: populate with full AWP step data from process PDFs
      {
        id: "qi-1",
        stepNumber: 1,
        titleEN: "Locate the Inspection Lot",
        titleAR: "تحديد موقع دفعة الفحص",
        tCode: "QA33",
        role: "QM Inspector",
        whatToDoEN:
          "Navigate to QA33 (Display Inspection Lots). Filter by Plant, Material, Lot Origin (04 = production, 01 = goods receipt), and date range. Find the inspection lot created by the triggering goods movement. Note the inspection lot number.",
        whatToDoAR:
          "انتقل إلى QA33 (عرض دفعات الفحص). فلتر حسب المصنع والمادة ومنشأ الدفعة (04 = إنتاج، 01 = استلام بضاعة) ونطاق التاريخ. ابحث عن دفعة الفحص التي أنشأتها حركة البضاعة المُشغِّلة. سجّل رقم دفعة الفحص.",
        whatSAPDoesEN:
          "Displays a list of inspection lots matching the filter criteria. Shows lot status (REL = released for results recording, SPAS = sample drawn, RECD = results recorded). Links to the triggering material document.",
        whatSAPDoesAR:
          "يعرض قائمة دفعات الفحص المطابقة لمعايير التصفية. يُظهر حالة الدفعة (REL = مُصدَرة لتسجيل النتائج، SPAS = تم سحب العيّنة، RECD = تم تسجيل النتائج). يرتبط بمستند المادة المُشغِّل.",
        expectedOutputEN:
          "Inspection lot identified with status REL. Inspection lot number noted for results entry.",
        expectedOutputAR:
          "تم تحديد دفعة الفحص بحالة REL. تم تدوين رقم دفعة الفحص لإدخال النتائج.",
      },
      {
        id: "qi-2",
        stepNumber: 2,
        titleEN: "Record Inspection Results",
        titleAR: "تسجيل نتائج الفحص",
        tCode: "QA32",
        role: "QM Inspector",
        whatToDoEN:
          "Navigate to QA32. Enter the inspection lot number. Go to 'Record Results'. For each inspection characteristic, enter the measured value or select the attribute (OK/Not OK). Enter sample size. Note any defects observed. Save the results.",
        whatToDoAR:
          "انتقل إلى QA32. أدخل رقم دفعة الفحص. انتقل إلى 'تسجيل النتائج'. لكل خاصية فحص، أدخل القيمة المقاسة أو حدد السمة (مناسب/غير مناسب). أدخل حجم العيّنة. لاحظ أي عيوب ملاحظة. احفظ النتائج.",
        whatSAPDoesEN:
          "Records actual measured values against the planned characteristics defined in the inspection plan. Compares results against specification limits. Flags out-of-spec characteristics. Updates the inspection lot status to RECD.",
        whatSAPDoesAR:
          "يسجّل القيم الفعلية المقاسة مقابل الخصائص المخططة المحددة في خطة الفحص. يقارن النتائج مع حدود المواصفات. يُعلّم الخصائص خارج المواصفات. يحدّث حالة دفعة الفحص إلى RECD.",
        expectedOutputEN:
          "All inspection characteristics have recorded results. Inspection lot status = RECD. Out-of-spec characteristics highlighted for inspector review.",
        expectedOutputAR:
          "جميع خصائص الفحص لها نتائج مسجّلة. حالة دفعة الفحص = RECD. خصائص خارج المواصفات مُبرزة لمراجعة المفتش.",
      },
      {
        id: "qi-3",
        stepNumber: 3,
        titleEN: "Post Usage Decision",
        titleAR: "ترحيل قرار الاستخدام",
        tCode: "QA32",
        role: "QM Inspector",
        whatToDoEN:
          "In QA32, go to 'Usage Decision'. Select the usage decision code: Accept (typically UD code A or equivalent) for unrestricted use, or Reject (R) for blocked stock. Add comments if required. Post the usage decision.",
        whatToDoAR:
          "في QA32، انتقل إلى 'قرار الاستخدام'. حدد رمز قرار الاستخدام: قبول (عادةً رمز UD A أو ما يعادله) للاستخدام غير المقيّد، أو رفض (R) للمخزون المحجوب. أضف تعليقات إذا لزم. ارحّل قرار الاستخدام.",
        whatSAPDoesEN:
          "Posts the usage decision. If accepted, transfers stock from quality inspection stock to unrestricted use automatically. If rejected, moves to blocked stock. Closes the inspection lot. Triggers defect notifications if configured.",
        whatSAPDoesAR:
          "يرحّل قرار الاستخدام. إذا قُبل، ينقل المخزون تلقائياً من مخزون فحص الجودة إلى الاستخدام غير المقيّد. إذا رُفض، ينتقل إلى المخزون المحجوب. يُغلق دفعة الفحص. يُشغّل إشعارات العيوب إذا تم تهيئتها.",
        expectedOutputEN:
          "Usage decision posted. Inspection lot status = UDEC. Stock transferred per decision (unrestricted or blocked). Inspection lot closed and no further results can be entered.",
        expectedOutputAR:
          "تم ترحيل قرار الاستخدام. حالة دفعة الفحص = UDEC. تم تحويل المخزون وفقاً للقرار (غير مقيّد أو محجوب). دفعة الفحص مغلقة ولا يمكن إدخال نتائج أخرى.",
      },
    ],
  },

  // ── 5. Create Purchase Requisition for Projects ──────────────────────────
  {
    id: "purchase-requisition-projects",
    icon: "🛒",
    duration: "20 min",
    titleEN: "Create Purchase Requisition for Projects (ME51N)",
    titleAR: "إنشاء طلب شراء المشاريع (ME51N)",
    descriptionEN:
      "Create a service purchase requisition for project execution using T-code ME51N. Covers document type selection, item details, valuation, dates, and source of supply assignment.",
    descriptionAR:
      "إنشاء طلب شراء خدمة لتنفيذ مشروع باستخدام ME51N. يشمل اختيار نوع المستند وتفاصيل البند والتقييم والتواريخ وتعيين مصدر التوريد.",
    module: "MM",
    roles: ["Procurement Officer", "Project Manager"],
    chartImages: [
      "/process-charts/me51n-screen-p1.png",
      "/process-charts/me51n-screen-p2.png",
      "/process-charts/me51n-screen-p3.png",
    ],
    steps: [
      {
        id: "pr-1",
        stepNumber: 1,
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        titleEN: "Navigate to ME51N and Set Document Type",
        titleAR: "الانتقال إلى ME51N وتحديد نوع المستند",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Navigate to transaction ME51N (Create Purchase Requisition). In the header area, change the document type to 'YEXP Expansion' from the dropdown. This ensures the correct approval workflow and account assignment for expansion projects.",
        whatToDoAR:
          "انتقل إلى معاملة ME51N (إنشاء طلب الشراء). في منطقة الرأس، غيّر نوع المستند إلى 'YEXP Expansion' من القائمة المنسدلة. يضمن هذا سير عمل الموافقة الصحيح وتعيين الحساب لمشاريع التوسعة.",
        whatSAPDoesEN:
          "Opens the Create Purchase Requisition screen. Setting the document type to YEXP Expansion configures the PR with the correct number range, approval levels, and account assignment category for capital expansion projects.",
        whatSAPDoesAR:
          "يفتح شاشة إنشاء طلب الشراء. يُهيّئ ضبط نوع المستند على YEXP Expansion طلب الشراء بنطاق الأرقام الصحيح ومستويات الموافقة وفئة تعيين الحساب لمشاريع التوسعة الرأسمالية.",
        expectedOutputEN:
          "ME51N screen open with document type set to YEXP Expansion. Source Determination checkbox is enabled.",
        expectedOutputAR:
          "شاشة ME51N مفتوحة مع نوع المستند YEXP Expansion. مربع اختيار تحديد المصدر مفعّل.",
      },
      {
        id: "pr-2",
        stepNumber: 2,
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        titleEN: "Enter Item Category",
        titleAR: "إدخال فئة البند",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "In the item line, set the Item Category field. For project services, leave the item category as 'U' (standard service/unknown). The item number defaults to 10.",
        whatToDoAR:
          "في صف البند، حدد حقل فئة البند. لخدمات المشاريع، اترك فئة البند كـ 'U' (خدمة قياسية/غير معروف). رقم البند يبدأ افتراضياً بـ 10.",
        whatSAPDoesEN:
          "Sets the procurement category for the line item. Category U (unknown/service) enables free-text description without requiring a material number, suitable for project-based service procurement.",
        whatSAPDoesAR:
          "يضبط فئة الشراء لبند الصف. الفئة U (غير معروف/خدمة) تتيح وصفاً نصياً حراً دون الحاجة لرقم مادة، وهو مناسب لشراء الخدمات القائمة على المشاريع.",
        expectedOutputEN:
          "Item line 10 created with category U. Free-text Short Text field is available for entry.",
        expectedOutputAR:
          "تم إنشاء بند الصف 10 بالفئة U. حقل النص القصير الحر متاح للإدخال.",
      },
      {
        id: "pr-3",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 3,
        titleEN: "Enter Short Text Description",
        titleAR: "إدخال وصف النص القصير",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "In the Short Text column, type a clear description of the service being requested. For example: 'إنشاء وتنفيذ مشروع الأمهات' (Create and Execute Parent Project). This description will appear on the purchase order and supplier documents.",
        whatToDoAR:
          "في عمود النص القصير، اكتب وصفاً واضحاً للخدمة المطلوبة. على سبيل المثال: 'إنشاء وتنفيذ مشروع الأمهات'. سيظهر هذا الوصف على أمر الشراء ووثائق المورد.",
        whatSAPDoesEN:
          "Stores the free-text description of the service. This text carries through to the purchase order and appears on printouts sent to the vendor.",
        whatSAPDoesAR:
          "يحفظ الوصف النصي الحر للخدمة. يُنقل هذا النص إلى أمر الشراء ويظهر على المطبوعات المرسلة إلى المورد.",
        expectedOutputEN:
          "Short text description entered and visible in the item line.",
        expectedOutputAR:
          "تم إدخال وصف النص القصير وهو مرئي في صف البند.",
      },
      {
        id: "pr-4",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 4,
        titleEN: "Enter Quantity",
        titleAR: "إدخال الكمية",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "In the Quantity field, enter the required quantity. For service-type PRs, this is typically '1' representing one service contract or engagement. Adjust based on the actual service scope.",
        whatToDoAR:
          "في حقل الكمية، أدخل الكمية المطلوبة. بالنسبة لطلبات الشراء من نوع الخدمة، عادةً ما تكون '1' تمثل عقد خدمة أو تعامل واحد. عدّل بناءً على نطاق الخدمة الفعلي.",
        whatSAPDoesEN:
          "Sets the order quantity for the requisition line. For services, quantity of 1 combined with the valuation price represents the total contract value.",
        whatSAPDoesAR:
          "يضبط كمية الطلب لبند طلب الشراء. بالنسبة للخدمات، تمثل الكمية 1 مع سعر التقييم إجمالي قيمة العقد.",
        expectedOutputEN:
          "Quantity field set to 1 (or appropriate service quantity).",
        expectedOutputAR:
          "حقل الكمية مضبوط على 1 (أو الكمية المناسبة للخدمة).",
      },
      {
        id: "pr-5",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 5,
        titleEN: "Set Unit of Measure",
        titleAR: "تحديد وحدة القياس",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Set the Unit of Measure to '%' (percentage) for service-based requisitions. This is the standard unit used for project execution services in the AWP system.",
        whatToDoAR:
          "حدد وحدة القياس كـ '%' (نسبة مئوية) لطلبات الشراء القائمة على الخدمة. هذه هي الوحدة القياسية المستخدمة لخدمات تنفيذ المشاريع في نظام AWP.",
        whatSAPDoesEN:
          "Assigns the unit of measure to the PR line. Using '%' as the unit for service contracts aligns with AWP's configuration for project service procurement.",
        whatSAPDoesAR:
          "يُعيّن وحدة القياس لبند طلب الشراء. استخدام '%' كوحدة لعقود الخدمة يتوافق مع تهيئة AWP لشراء خدمات المشاريع.",
        expectedOutputEN:
          "Unit of Measure set to '%'. Quantity and unit combination is valid.",
        expectedOutputAR:
          "وحدة القياس مضبوطة على '%'. مجموعة الكمية والوحدة صالحة.",
      },
      {
        id: "pr-6",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 6,
        titleEN: "Set Delivery Date and Material Group",
        titleAR: "تحديد تاريخ التسليم ومجموعة المواد",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Enter the Delivery Date (required date for the service). Set the Material Group to 'Services' initially (if needed) — this may auto-populate based on the system configuration. The correct material group for project services is 10100 (Project Material), which you will confirm in the Material Data tab.",
        whatToDoAR:
          "أدخل تاريخ التسليم (التاريخ المطلوب للخدمة). حدد مجموعة المواد كـ 'Services' مبدئياً إذا لزم — قد يُملأ هذا تلقائياً بناءً على تهيئة النظام. مجموعة المواد الصحيحة لخدمات المشاريع هي 10100 (مواد المشروع)، والتي ستؤكدها في تبويب بيانات المادة.",
        whatSAPDoesEN:
          "Sets the requirement date for procurement planning and the material group used for account determination and spend analytics.",
        whatSAPDoesAR:
          "يضبط تاريخ المتطلب لتخطيط المشتريات ومجموعة المواد المستخدمة لتحديد الحساب وتحليلات الإنفاق.",
        expectedOutputEN:
          "Delivery date entered. Material group set. Item is ready for plant and storage location assignment.",
        expectedOutputAR:
          "تم إدخال تاريخ التسليم. تم تحديد مجموعة المواد. البند جاهز لتعيين المصنع وموقع التخزين.",
      },
      {
        id: "pr-7",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 7,
        titleEN: "Enter Plant",
        titleAR: "إدخال المصنع",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "In the Plant field, enter or select 'Qassim Central' (plant code as configured in AWP). This determines the receiving plant for the goods/services and the applicable approval hierarchy.",
        whatToDoAR:
          "في حقل المصنع، أدخل أو اختر 'Qassim Central' (رمز المصنع كما هو مُهيَّأ في AWP). يحدد هذا المصنع المستلِم للبضائع/الخدمات والتسلسل الهرمي للموافقة المطبّق.",
        whatSAPDoesEN:
          "Associates the PR line with the receiving plant. The plant determines the purchasing organization, the storage location defaults, and the approval workflow routing.",
        whatSAPDoesAR:
          "يربط بند طلب الشراء بالمصنع المستلِم. يحدد المصنع مؤسسة الشراء وقيم افتراضيات موقع التخزين وتوجيه سير عمل الموافقة.",
        expectedOutputEN:
          "Plant 'Qassim Central' assigned to the PR line.",
        expectedOutputAR:
          "تم تعيين مصنع 'Qassim Central' لبند طلب الشراء.",
      },
      {
        id: "pr-8",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 8,
        titleEN: "Enter Storage Location",
        titleAR: "إدخال موقع التخزين",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Set the Storage Location to 'Expansion' for expansion project services, or to 'Central St.' (Central Stores) depending on the project type. This field may auto-fill based on the plant selection.",
        whatToDoAR:
          "حدد موقع التخزين كـ 'Expansion' لخدمات مشاريع التوسعة، أو 'Central St.' (المخازن المركزية) بناءً على نوع المشروع. قد يُملأ هذا الحقل تلقائياً بناءً على اختيار المصنع.",
        whatSAPDoesEN:
          "Assigns the storage location for goods receipt. For service PRs, the storage location indicates the cost center or project location where the service will be delivered.",
        whatSAPDoesAR:
          "يُعيّن موقع التخزين لاستلام البضاعة. بالنسبة لطلبات شراء الخدمات، يشير موقع التخزين إلى مركز التكلفة أو موقع المشروع الذي سيتم تقديم الخدمة فيه.",
        expectedOutputEN:
          "Storage Location set (Expansion or Central St.). Item line is now fully populated at the header level.",
        expectedOutputAR:
          "تم تحديد موقع التخزين (Expansion أو Central St.). بند الصف الآن مملوء بالكامل على مستوى الرأس.",
      },
      {
        id: "pr-9",
        screenshotUrl: "/process-charts/me51n-step-01-10.png",
        stepNumber: 9,
        titleEN: "Set Purchase Group and Requisitioner",
        titleAR: "تحديد مجموعة الشراء وصاحب الطلب",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Set the Purchase Group to '006' (the AWP purchasing group responsible for this category). Enter your username in the Requisitioner field (e.g. 'sakhudhayri'). This field records who raised the PR for audit and workflow purposes.",
        whatToDoAR:
          "حدد مجموعة الشراء كـ '006' (مجموعة الشراء AWP المسؤولة عن هذه الفئة). أدخل اسم المستخدم في حقل صاحب الطلب (مثل 'sakhudhayri'). يسجّل هذا الحقل من رفع طلب الشراء لأغراض التدقيق وسير العمل.",
        whatSAPDoesEN:
          "Associates the PR with the correct buying group for routing to the right buyer. The requisitioner field appears on the PR output and is used for approval delegation.",
        whatSAPDoesAR:
          "يربط طلب الشراء بمجموعة الشراء الصحيحة للتوجيه إلى المشتري المناسب. يظهر حقل صاحب الطلب على مخرجات طلب الشراء ويُستخدم لتفويض الموافقة.",
        expectedOutputEN:
          "Purchase Group 006 assigned. Requisitioner name entered. Item line is complete at the overview level.",
        expectedOutputAR:
          "تم تعيين مجموعة الشراء 006. تم إدخال اسم صاحب الطلب. بند الصف مكتمل على مستوى النظرة العامة.",
      },
      {
        id: "pr-10",
        screenshotUrl: "/process-charts/me51n-step-11.png",
        stepNumber: 10,
        titleEN: "Enter Valuation Price",
        titleAR: "إدخال سعر التقييم",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Click on the item and navigate to the 'Valuation' tab. Enter the Valuation Price in SAR. This is the estimated value of the service. The Total Value will calculate automatically based on quantity × price. Verify that the 'Inv. Receipt' (Invoice Receipt) checkbox is ticked.",
        whatToDoAR:
          "انقر على البند وانتقل إلى تبويب 'التقييم'. أدخل سعر التقييم بالريال السعودي. هذه هي القيمة المقدرة للخدمة. سيُحسب إجمالي القيمة تلقائياً بناءً على الكمية × السعر. تحقق من أن مربع اختيار 'استلام الفاتورة' محدد.",
        whatSAPDoesEN:
          "Records the estimated purchase value for budget checking and commitment accounting. The valuation price becomes the price basis for the purchase order.",
        whatSAPDoesAR:
          "يسجّل القيمة الشرائية المقدرة لفحص الميزانية ومحاسبة الالتزامات. يصبح سعر التقييم أساس السعر لأمر الشراء.",
        expectedOutputEN:
          "Valuation Price entered in SAR. Total Value calculated. Invoice Receipt indicator is active.",
        expectedOutputAR:
          "تم إدخال سعر التقييم بالريال السعودي. إجمالي القيمة محسوب. مؤشر استلام الفاتورة نشط.",
      },
      {
        id: "pr-11",
        screenshotUrl: "/process-charts/me51n-step-12.png",
        stepNumber: 11,
        titleEN: "Set Product Type Group (Material Data Tab)",
        titleAR: "تحديد مجموعة نوع المنتج (تبويب بيانات المادة)",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Navigate to the 'Material Data' tab. In the Product Type Group field, enter '2'. This value indicates 'Service' and is mandatory for project service PRs in the AWP system. Verify Material Group shows 10100 (Project Material).",
        whatToDoAR:
          "انتقل إلى تبويب 'بيانات المادة'. في حقل مجموعة نوع المنتج، أدخل '2'. تشير هذه القيمة إلى 'خدمة' وهي إلزامية لطلبات شراء خدمات المشاريع في نظام AWP. تحقق من أن مجموعة المواد تُظهر 10100 (مواد المشروع).",
        whatSAPDoesEN:
          "Product Type Group '2' classifies this requisition as a service procurement. This classification drives the correct account determination, tax codes, and approval workflow for service purchases.",
        whatSAPDoesAR:
          "تُصنّف مجموعة نوع المنتج '2' طلب الشراء هذا كشراء خدمة. يقود هذا التصنيف تحديد الحساب الصحيح ورموز الضريبة وسير عمل الموافقة لعمليات شراء الخدمات.",
        expectedOutputEN:
          "Product Type Group = 2 (Service). Material Group = 10100. Material Data tab is correctly configured.",
        expectedOutputAR:
          "مجموعة نوع المنتج = 2 (خدمة). مجموعة المواد = 10100. تبويب بيانات المادة مُهيَّأ بشكل صحيح.",
      },
      {
        id: "pr-12",
        screenshotUrl: "/process-charts/me51n-step-13.png",
        stepNumber: 12,
        titleEN: "Enter Project Start and End Dates (Quantities/Dates Tab)",
        titleAR: "إدخال تاريخي بداية ونهاية المشروع (تبويب الكميات/التواريخ)",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Navigate to the 'Quantities/Dates' tab. Enter the Start Date (project commencement date) and End Date (project completion date). These dates represent the expected project duration and are used for scheduling and reporting. The Request Date and Release Date fields will auto-populate.",
        whatToDoAR:
          "انتقل إلى تبويب 'الكميات/التواريخ'. أدخل تاريخ البداية (تاريخ بدء المشروع) وتاريخ الانتهاء (تاريخ اكتمال المشروع). تمثل هذه التواريخ المدة المتوقعة للمشروع وتُستخدم للجدولة والتقارير. ستُملأ حقول تاريخ الطلب وتاريخ الإصدار تلقائياً.",
        whatSAPDoesEN:
          "Records the project timeline in the PR. Start and End dates enable project managers to track service delivery schedules and are passed to the purchase order for milestone and payment planning.",
        whatSAPDoesAR:
          "يسجّل الجدول الزمني للمشروع في طلب الشراء. تتيح تواريخ البداية والانتهاء لمديري المشاريع تتبع جداول تسليم الخدمة وتُنقل إلى أمر الشراء لتخطيط المعالم والمدفوعات.",
        expectedOutputEN:
          "Start Date and End Date entered. Request Date and Release Date auto-populated. Project timeline is captured in the PR.",
        expectedOutputAR:
          "تم إدخال تاريخ البداية وتاريخ الانتهاء. تاريخ الطلب وتاريخ الإصدار مُملأَيْن تلقائياً. تم تسجيل الجدول الزمني للمشروع في طلب الشراء.",
      },
      {
        id: "pr-13",
        screenshotUrl: "/process-charts/me51n-step-14.png",
        stepNumber: 13,
        titleEN: "Assign Source of Supply (Source of Supply Tab)",
        titleAR: "تعيين مصدر التوريد (تبويب مصدر التوريد)",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Navigate to the 'Source of Supply' tab. Enter the Agreement number (e.g. 4630000022) and line item 10. Set Purchasing Organization to 1000. Set Requirement Urgency to '3' (أهمية الطلب — Request Priority). The Fixed Vendor field will auto-populate (e.g. 10824 — Raeed Albaneeey) from the agreement.",
        whatToDoAR:
          "انتقل إلى تبويب 'مصدر التوريد'. أدخل رقم الاتفاقية (مثل 4630000022) والبند 10. حدد مؤسسة الشراء كـ 1000. حدد أولوية المتطلب كـ '3' (أهمية الطلب). سيُملأ حقل المورد الثابت تلقائياً (مثل 10824 - رائد البنيعي) من الاتفاقية.",
        whatSAPDoesEN:
          "Links the PR to an existing framework agreement or contract. The fixed vendor assignment ensures the purchase order is automatically generated against the approved supplier. Requirement urgency prioritizes the PR in the buyer's work queue.",
        whatSAPDoesAR:
          "يربط طلب الشراء باتفاقية إطارية أو عقد موجود. يضمن تعيين المورد الثابت إنشاء أمر الشراء تلقائياً مقابل المورد المعتمد. تُحدد أولوية المتطلب طلب الشراء في قائمة أعمال المشتري.",
        expectedOutputEN:
          "Agreement linked (e.g. 4630000022). Fixed Vendor auto-populated. Requirement Urgency = 3. Purchasing Org = 1000. Source of supply is confirmed.",
        expectedOutputAR:
          "تم ربط الاتفاقية (مثل 4630000022). تم ملء المورد الثابت تلقائياً. أولوية المتطلب = 3. مؤسسة الشراء = 1000. تم تأكيد مصدر التوريد.",
      },
      {
        id: "pr-14",
        screenshotUrl: "/process-charts/me51n-step-14.png",
        stepNumber: 14,
        titleEN: "Save the Purchase Requisition",
        titleAR: "حفظ طلب الشراء",
        tCode: "ME51N",
        role: "Procurement Officer",
        whatToDoEN:
          "Review all entered data: document type YEXP, short text, quantity, unit %, material group 10100, plant, storage location, purchase group 006, valuation price, product type group 2, project dates, and source of supply. Click Save (floppy disk icon or Ctrl+S). Note the PR number generated.",
        whatToDoAR:
          "راجع جميع البيانات المدخلة: نوع المستند YEXP، النص القصير، الكمية، الوحدة %، مجموعة المواد 10100، المصنع، موقع التخزين، مجموعة الشراء 006، سعر التقييم، مجموعة نوع المنتج 2، تواريخ المشروع، ومصدر التوريد. انقر على حفظ (أيقونة القرص المرن أو Ctrl+S). دوّن رقم طلب الشراء المُولَّد.",
        whatSAPDoesEN:
          "Creates the purchase requisition in the system. Assigns a unique PR number. Triggers the approval workflow based on the YEXP document type configuration. The PR enters the buyer's work queue for conversion to a purchase order against the linked agreement.",
        whatSAPDoesAR:
          "ينشئ طلب الشراء في النظام. يُعيّن رقم طلب شراء فريد. يُشغّل سير عمل الموافقة بناءً على تهيئة نوع المستند YEXP. يدخل طلب الشراء قائمة أعمال المشتري للتحويل إلى أمر شراء مقابل الاتفاقية المرتبطة.",
        expectedOutputEN:
          "Purchase Requisition saved with a unique PR number. Approval workflow triggered. PR visible in ME53N (Display PR) and the buyer's worklist. Ready for conversion to PO via ME59N or manual PO creation in ME21N.",
        expectedOutputAR:
          "تم حفظ طلب الشراء برقم فريد. سير عمل الموافقة مُشغَّل. طلب الشراء مرئي في ME53N (عرض طلب الشراء) وقائمة أعمال المشتري. جاهز للتحويل إلى أمر شراء عبر ME59N أو إنشاء أمر شراء يدوي في ME21N.",
      },
    ],
  },

  // ── 6. Quota Arrangement ─────────────────────────────────────────────────
  {
    id: "quota-arrangement",
    icon: "📋",
    duration: "25 min",
    titleEN: "Quota Arrangement (MEQ1)",
    titleAR: "ترتيب الحصص (MEQ1)",
    descriptionEN:
      "Maintain quota arrangements for broiler farm placements feeding SAP planning.",
    descriptionAR:
      "صيانة ترتيبات الحصص لإيداعات مزارع الدجاج اللاحم لتغذية تخطيط SAP.",
    module: "MM",
    roles: ["PP Planner", "Farm Coordinator"],
    chartImages: ["/process-charts/gp-to-processing.png"],
    steps: [
      // TODO: populate with full AWP step data from process PDFs
      {
        id: "qa-1",
        stepNumber: 1,
        titleEN: "Create or Access Quota Arrangement",
        titleAR: "إنشاء ترتيب الحصص أو الوصول إليه",
        tCode: "MEQ1",
        role: "PP Planner",
        whatToDoEN:
          "Navigate to MEQ1. Enter Material number (broiler day-old chick or raw material), Plant, and validity dates. If a quota arrangement exists, the system will open it for editing. If not, you will be prompted to create a new one.",
        whatToDoAR:
          "انتقل إلى MEQ1. أدخل رقم المادة (كتكوت يوم التفريخ أو المادة الخام) والمصنع وتواريخ الصلاحية. إذا كان ترتيب الحصص موجوداً، سيفتحه النظام للتعديل. إذا لم يكن موجوداً، ستتم مطالبتك بإنشاء ترتيب جديد.",
        whatSAPDoesEN:
          "Opens the quota arrangement for the specified material and plant. Displays existing quota items (vendors/sources of supply) and their assigned percentages or fixed quantities.",
        whatSAPDoesAR:
          "يفتح ترتيب الحصص للمادة والمصنع المحددين. يعرض بنود الحصة الموجودة (الموردون/مصادر التوريد) ونسبها المخصصة أو الكميات الثابتة.",
        expectedOutputEN:
          "Quota arrangement displayed for editing. Existing sources of supply and quota items visible.",
        expectedOutputAR:
          "ترتيب الحصص معروض للتعديل. مصادر التوريد الموجودة وبنود الحصة مرئية.",
      },
      {
        id: "qa-2",
        stepNumber: 2,
        titleEN: "Maintain Quota Percentages",
        titleAR: "صيانة نسب الحصة",
        tCode: "MEQ1",
        role: "PP Planner",
        whatToDoEN:
          "In the quota arrangement, add or update quota items for each farm/vendor (source of supply). Assign quota percentages (e.g. Farm A = 40%, Farm B = 35%, Farm C = 25%) or fixed quantities. Verify that percentages total 100%. Set minimum lot sizes if required.",
        whatToDoAR:
          "في ترتيب الحصص، أضف أو حدّث بنود الحصة لكل مزرعة/مورد (مصدر التوريد). عيّن نسب الحصة (مثال: مزرعة A = 40%، مزرعة B = 35%، مزرعة C = 25%) أو كميات ثابتة. تحقق من أن النسب تجمع إلى 100%. حدد أحجام دفعة الحد الأدنى إذا لزم.",
        whatSAPDoesEN:
          "Validates the quota percentages and saves the allocation rules. MRP will use these rules when generating planned orders or purchase requisitions for this material, splitting the demand among the assigned sources according to the quota.",
        whatSAPDoesAR:
          "يتحقق من صحة نسب الحصة ويحفظ قواعد التخصيص. سيستخدم MRP هذه القواعد عند إنشاء أوامر مخططة أو طلبات شراء لهذه المادة، موزّعاً الطلب بين المصادر المخصصة وفقاً للحصة.",
        expectedOutputEN:
          "Quota arrangement saved. All sources assigned with valid percentages totaling 100%. MRP will now split planned requirements across farms per quota rules.",
        expectedOutputAR:
          "تم حفظ ترتيب الحصص. جميع المصادر مخصصة بنسب صالحة تجمع إلى 100%. سيقوم MRP الآن بتقسيم المتطلبات المخططة عبر المزارع وفقاً لقواعد الحصص.",
      },
      {
        id: "qa-3",
        stepNumber: 3,
        titleEN: "Verify Quota in MRP Results",
        titleAR: "التحقق من الحصة في نتائج MRP",
        tCode: "MD04",
        role: "PP Planner",
        whatToDoEN:
          "After the next MRP run, navigate to MD04 for the quota-managed material. Review the planned orders or purchase requisitions created — they should be split across the farms according to the quota percentages set in MEQ1.",
        whatToDoAR:
          "بعد تشغيل MRP التالي، انتقل إلى MD04 للمادة المُدارة بالحصص. راجع الأوامر المخططة أو طلبات الشراء المُنشأة — يجب أن تكون موزّعة عبر المزارع وفقاً لنسب الحصة المحددة في MEQ1.",
        whatSAPDoesEN:
          "Displays the MRP results for the material. Planned orders or PRs for quota-managed materials show the assigned source of supply (farm/vendor) and the split quantities according to the quota arrangement.",
        whatSAPDoesAR:
          "يعرض نتائج MRP للمادة. الأوامر المخططة أو طلبات الشراء للمواد المُدارة بالحصص تُظهر مصدر التوريد المخصص (مزرعة/مورد) والكميات المقسّمة وفقاً لترتيب الحصص.",
        expectedOutputEN:
          "Planned orders/PRs split correctly per quota percentages. Each farm/vendor shows its proportional share of the planned demand. Quota arrangement is working as configured.",
        expectedOutputAR:
          "الأوامر المخططة/طلبات الشراء مقسّمة بشكل صحيح وفقاً لنسب الحصة. كل مزرعة/مورد تُظهر حصتها النسبية من الطلب المخطط. ترتيب الحصص يعمل كما هو مُهيَّأ.",
      },
    ],
  },

  // ─── MM: Procurement of Direct Materials ─────────────────────────────────
  {
    id: "mm-procurement-direct",
    icon: "📦",
    duration: "40 min",
    titleEN: "Procurement of Direct Materials (Purchase Order)",
    titleAR: "شراء المواد المباشرة (أمر الشراء)",
    descriptionEN:
      "Daily procurement process for direct materials: monitor purchase requisitions (ME5A), create purchase orders referencing the PR or approved quotation (ME21N), route through multi-level approval workflow, and print/send to supplier. ~50 POs per day across all purchasing groups.",
    descriptionAR:
      "عملية الشراء اليومية للمواد المباشرة: مراقبة طلبات الشراء (ME5A)، إنشاء أوامر الشراء بالإشارة إلى طلب الشراء أو العرض المعتمد (ME21N)، التوجيه عبر سير عمل الموافقة متعدد المستويات، والطباعة/الإرسال للمورد. حوالي 50 أمر شراء يومياً عبر جميع مجموعات الشراء.",
    module: "MM",
    roles: [
      "Purchaser (Purchasing Specialist)",
      "Division Head",
      "Department Manager",
      "Vice President",
      "CEO",
    ],
    steps: [
      {
        id: "mm-proc-1",
        stepNumber: 1,
        titleEN: "Monitor Purchase Requisitions (ME5A)",
        titleAR: "مراقبة طلبات الشراء (ME5A)",
        tCode: "ME5A",
        role: "Purchaser (Purchasing Specialist)",
        whatToDoEN:
          "Open ME5A daily to review all new purchase requisitions generated by MRP or manual requesters. Check delivery dates and source of supply assignments. Identify PRs that need conversion to a PO. For materials with contracts, assign source of supply directly. For others, initiate MM-ZM2 quotation process if needed.",
        whatToDoAR:
          "افتح ME5A يومياً لمراجعة جميع طلبات الشراء الجديدة الناتجة عن MRP أو الطلبات اليدوية. تحقق من تواريخ التسليم وتعيينات مصدر التوريد. حدد طلبات الشراء التي تحتاج إلى تحويل إلى أمر شراء. للمواد التي لها عقود، عيّن مصدر التوريد مباشرة. للمواد الأخرى، أطلق عملية تسعير MM-ZM2 إذا لزم الأمر.",
        whatSAPDoesEN:
          "Displays all open purchase requisitions filtered by plant, material group, and purchasing group. Shows delivery date, quantity, and approval status.",
        whatSAPDoesAR:
          "يعرض جميع طلبات الشراء المفتوحة مُصفّاةً حسب المصنع ومجموعة المواد ومجموعة الشراء. يُظهر تاريخ التسليم والكمية وحالة الموافقة.",
        expectedOutputEN: "List of open PRs reviewed — PRs ready for PO creation identified.",
        expectedOutputAR: "تمت مراجعة قائمة طلبات الشراء المفتوحة — تم تحديد طلبات الشراء الجاهزة لإنشاء أمر الشراء.",
      },
      {
        id: "mm-proc-2",
        stepNumber: 2,
        titleEN: "Create Purchase Order (ME21N)",
        titleAR: "إنشاء أمر الشراء (ME21N)",
        tCode: "ME21N",
        role: "Purchaser (Purchasing Specialist)",
        whatToDoEN:
          "Open ME21N. Create the purchase order with reference to the approved purchase requisition or an accepted quotation. Enter vendor, delivery date, plant, storage location, and price conditions. For materials with contracts, the system auto-fills conditions. For delivery costs, update PO conditions before GR. Save the PO — it enters the approval workflow automatically.",
        whatToDoAR:
          "افتح ME21N. أنشئ أمر الشراء بالإشارة إلى طلب الشراء المعتمد أو العرض المقبول. أدخل المورد وتاريخ التسليم والمصنع وموقع التخزين وشروط السعر. للمواد التي لها عقود، يملأ النظام الشروط تلقائياً. لتكاليف التوصيل، حدّث شروط أمر الشراء قبل استلام البضاعة. احفظ أمر الشراء — يدخل سير عمل الموافقة تلقائياً.",
        whatSAPDoesEN:
          "Creates a purchase order and triggers the multi-level approval workflow. SAP sends inbox notifications to approvers. PR is marked as assigned.",
        whatSAPDoesAR:
          "ينشئ أمر الشراء ويُشغّل سير عمل الموافقة متعدد المستويات. يُرسل SAP إشعارات البريد الوارد إلى المعتمدين. يُعلَّم طلب الشراء كمعيَّن.",
        expectedOutputEN: "Purchase order created and sent to approval workflow.",
        expectedOutputAR: "تم إنشاء أمر الشراء وإرساله إلى سير عمل الموافقة.",
      },
      {
        id: "mm-proc-3",
        stepNumber: 3,
        titleEN: "Multi-Level PO Approval (ME28 / ME29N)",
        titleAR: "الموافقة متعددة المستويات على أمر الشراء (ME28 / ME29N)",
        tCode: "ME28",
        role: "Division Head / Department Manager / VP / CEO",
        whatToDoEN:
          "Approvers receive SAP inbox notifications. Level 1 — Division Head (all POs): review and release in ME28 or ME29N. Level 2 — Department Manager (all POs). Level 3 & 4 — Vice President (POs ≥ 100,000 SAR). Level 5 — CEO (POs > 500,000 SAR). Each level reviews and releases or rejects. If rejected, PO is deleted and a new one is created for another supplier.",
        whatToDoAR:
          "يتلقى المعتمدون إشعارات SAP في البريد الوارد. المستوى 1 — رئيس القسم (جميع أوامر الشراء): المراجعة والإطلاق في ME28 أو ME29N. المستوى 2 — مدير الإدارة (جميع أوامر الشراء). المستوى 3 و4 — نائب الرئيس (أوامر الشراء ≥ 100,000 ريال). المستوى 5 — الرئيس التنفيذي (أوامر الشراء > 500,000 ريال). تتم المراجعة والإطلاق أو الرفض في كل مستوى. عند الرفض، يُحذف أمر الشراء وينشأ آخر لمورد مختلف.",
        whatSAPDoesEN:
          "Each approval level releases the PO or rejects it. After final release, PO status changes to 'Released' and it's ready for output to the vendor.",
        whatSAPDoesAR:
          "يُطلق كل مستوى موافقة أمر الشراء أو يرفضه. بعد الإطلاق النهائي، تتغير حالة أمر الشراء إلى 'مُطلَق' ويصبح جاهزاً للمخرجات للمورد.",
        expectedOutputEN: "PO fully approved. Status: Released. Ready to send to supplier.",
        expectedOutputAR: "تمت الموافقة الكاملة على أمر الشراء. الحالة: مُطلَق. جاهز للإرسال للمورد.",
      },
      {
        id: "mm-proc-4",
        stepNumber: 4,
        titleEN: "Print and Send PO to Supplier",
        titleAR: "طباعة وإرسال أمر الشراء للمورد",
        tCode: "ME9F",
        role: "Purchaser (Purchasing Specialist)",
        whatToDoEN:
          "After final approval, print the PO from SAP and send it to the supplier via email (from SAP output) and hard copy. Monitor the PO delivery: enter supplier acknowledgement and confirmed delivery dates into the PO. Follow up with the supplier as needed.",
        whatToDoAR:
          "بعد الموافقة النهائية، اطبع أمر الشراء من SAP وأرسله للمورد عبر البريد الإلكتروني (من مخرجات SAP) ونسخة ورقية. راقب تسليم أمر الشراء: أدخل إقرار المورد وتواريخ التسليم المؤكدة في أمر الشراء. تابع مع المورد حسب الحاجة.",
        whatSAPDoesEN:
          "Generates PO output message and records it in the document flow. Tracks PO delivery history.",
        whatSAPDoesAR:
          "ينشئ رسالة مخرجات أمر الشراء ويسجّلها في تدفق المستند. يتتبع سجل تسليم أمر الشراء.",
        expectedOutputEN: "PO sent to supplier. Delivery dates confirmed and tracked in SAP.",
        expectedOutputAR: "تم إرسال أمر الشراء للمورد. تواريخ التسليم مؤكدة ومتتبَّعة في SAP.",
      },
    ],
  },

  // ─── MM: Goods Receipt from Suppliers ────────────────────────────────────
  {
    id: "mm-goods-receipt",
    icon: "📥",
    duration: "20 min",
    titleEN: "Goods Receipt from Suppliers (MIGO)",
    titleAR: "استلام البضاعة من الموردين (MIGO)",
    descriptionEN:
      "Stock keeper receives delivered goods against a released purchase order. Goods are checked for quality and shelf life (minimum 80% remaining), then posted in MIGO with movement type 101. Material document is printed (MB90) as the official GR record. ~40 GRs per day at main sites.",
    descriptionAR:
      "يستلم أمين المخزن البضائع المسلّمة مقابل أمر شراء مُطلَق. يتم فحص البضائع للجودة وصلاحية الرف (80% على الأقل متبقي)، ثم يُرحَّل في MIGO بنوع حركة 101. يُطبع مستند المادة (MB90) كسجل رسمي لاستلام البضاعة. حوالي 40 استلام بضاعة يومياً في المواقع الرئيسية.",
    module: "MM",
    roles: [
      "Stock Keeper",
    ],
    steps: [
      {
        id: "mm-gr-1",
        stepNumber: 1,
        titleEN: "Inspect Goods Upon Delivery",
        titleAR: "فحص البضائع عند التسليم",
        role: "Stock Keeper",
        whatToDoEN:
          "Before posting in SAP, physically inspect the delivered goods against the supplier's delivery document (packing slip/bill of lading). Verify: materials match the PO, quantities are correct (no over- or under-delivery), quality is acceptable, and shelf life expiry date is at least 80% remaining. Only receive goods that are in good condition and match the order.",
        whatToDoAR:
          "قبل الترحيل في SAP، افحص البضائع المسلّمة فعلياً مقابل مستند التسليم من المورد (قسيمة التعبئة/بوليصة الشحن). تحقق من: مطابقة المواد لأمر الشراء، صحة الكميات (لا تسليم زائد أو ناقص)، قبول الجودة، وأن تاريخ انتهاء صلاحية الرف متبقٍّ منه 80% على الأقل. استلم فقط البضائع في حالة جيدة والمطابقة للأمر.",
        whatSAPDoesEN: "No system action — physical inspection performed before system posting.",
        whatSAPDoesAR: "لا يوجد إجراء في النظام — يُجرى الفحص الفعلي قبل ترحيل النظام.",
        expectedOutputEN: "Goods verified — ready for MIGO posting. Any discrepancies noted for resolution.",
        expectedOutputAR: "تم التحقق من البضائع — جاهزة لترحيل MIGO. أي تناقضات مُدوَّنة للحل.",
      },
      {
        id: "mm-gr-2",
        stepNumber: 2,
        titleEN: "Post Goods Receipt (MIGO — Movement Type 101)",
        titleAR: "ترحيل استلام البضاعة (MIGO — نوع حركة 101)",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "Open MIGO. Select transaction 'Goods Receipt' and reference document 'Purchase Order'. Enter the PO number — SAP proposes the open PO lines. Enter actual received quantities (may differ from ordered if partial delivery), batch number, storage location, and shelf life expiration date for batch-managed materials. Post the GR.",
        whatToDoAR:
          "افتح MIGO. حدد معاملة 'استلام البضاعة' ومستند مرجعي 'أمر الشراء'. أدخل رقم أمر الشراء — يقترح SAP بنود أمر الشراء المفتوحة. أدخل الكميات المستلمة الفعلية (قد تختلف عن المطلوبة في حالة التسليم الجزئي) ورقم الدفعة وموقع التخزين وتاريخ انتهاء صلاحية الرف للمواد المُدارة بدفعات. ارحّل استلام البضاعة.",
        whatSAPDoesEN:
          "Posts GR document (movement type 101): increases unrestricted stock at the specified storage location. Creates an accounting document (debit GR/IR clearing, credit inventory). Updates PO history — delivery tracked against PO. For batch materials, creates batch record with expiry date.",
        whatSAPDoesAR:
          "يرحّل مستند استلام البضاعة (نوع حركة 101): يزيد المخزون الحر في موقع التخزين المحدد. ينشئ مستند محاسبة (مدين حساب مقاصة GR/IR، دائن المخزون). يحدّث سجل أمر الشراء — يتتبع التسليم مقابل أمر الشراء. للمواد بالدفعات، ينشئ سجل دفعة بتاريخ الانتهاء.",
        expectedOutputEN: "Material document created. Stock increased. PO delivery history updated. Batch record created (if applicable).",
        expectedOutputAR: "تم إنشاء مستند المادة. زيادة المخزون. تحديث سجل تسليم أمر الشراء. إنشاء سجل الدفعة (إن اقتضى الأمر).",
      },
      {
        id: "mm-gr-3",
        stepNumber: 3,
        titleEN: "Print GR Material Document (MB90)",
        titleAR: "طباعة مستند مادة استلام البضاعة (MB90)",
        tCode: "MB90",
        role: "Stock Keeper",
        whatToDoEN:
          "Open MB90 (Output Messages for Inventory Management). Select the GR material document number just posted. Print the GR document — this is the official goods receipt confirmation used for warehouse filing and reconciliation with the supplier invoice.",
        whatToDoAR:
          "افتح MB90 (رسائل المخرجات لإدارة المخزون). حدد رقم مستند مادة استلام البضاعة المُرحَّل للتو. اطبع مستند استلام البضاعة — هذا هو تأكيد استلام البضاعة الرسمي المستخدم لأرشفة المستودع والتسوية مع فاتورة المورد.",
        whatSAPDoesEN:
          "Generates the printed GR document with material details, quantities, batch numbers, and PO reference.",
        whatSAPDoesAR:
          "ينشئ مستند استلام البضاعة المطبوع بتفاصيل المادة والكميات وأرقام الدفعات ومرجع أمر الشراء.",
        expectedOutputEN: "GR document printed and filed. Stock visible in MMBE/MB52 at the correct storage location.",
        expectedOutputAR: "تمت طباعة مستند استلام البضاعة وأرشفته. المخزون مرئي في MMBE/MB52 في موقع التخزين الصحيح.",
      },
    ],
  },

  // ─── MM: Stock Transport Order (STO) with Delivery ───────────────────────
  {
    id: "mm-sto-delivery",
    icon: "🚛",
    duration: "30 min",
    titleEN: "Stock Transport Order (STO) with Delivery",
    titleAR: "أمر نقل المخزون (STO) مع التسليم",
    descriptionEN:
      "Inter-plant stock transfer process using a Stock Transport Order with outbound delivery: create STO (ME21N), create outbound delivery (VL10D), post goods issue at sending plant (VL02N), monitor stock in transit (MB5T), and post goods receipt at receiving plant (MIGO). ~150 STOs per day across all branches.",
    descriptionAR:
      "عملية نقل المخزون بين المصانع باستخدام أمر نقل مخزون مع تسليم صادر: إنشاء STO (ME21N)، إنشاء التسليم الصادر (VL10D)، ترحيل إصدار البضاعة في المصنع المُرسِل (VL02N)، مراقبة المخزون في العبور (MB5T)، وترحيل استلام البضاعة في المصنع المستلم (MIGO). حوالي 150 STO يومياً عبر جميع الفروع.",
    module: "MM",
    roles: [
      "STO / DRP Planner",
      "Shipping Responsible (Issuing Branch)",
      "Stock Keeper (Receiving Branch)",
      "Transport Specialist",
    ],
    steps: [
      {
        id: "mm-sto-1",
        stepNumber: 1,
        titleEN: "Create Stock Transport Order (ME21N)",
        titleAR: "إنشاء أمر نقل المخزون (ME21N)",
        tCode: "ME21N",
        role: "STO / DRP Planner",
        whatToDoEN:
          "Open ME21N. Select document type 'UB' (Stock Transfer) or the AWP STO type. Enter: supplying plant, receiving plant, material, quantity, and requested delivery date. Purchase Group 999 (Branches Stock Transfer). Save the STO — it appears in the shipping worklist for the issuing branch.",
        whatToDoAR:
          "افتح ME21N. حدد نوع المستند 'UB' (نقل المخزون) أو نوع STO الخاص بـ AWP. أدخل: المصنع المورِّد، المصنع المستلم، المادة، الكمية، وتاريخ التسليم المطلوب. مجموعة الشراء 999 (نقل مخزون الفروع). احفظ STO — يظهر في قائمة الشحن للفرع المُرسِل.",
        whatSAPDoesEN:
          "Creates a stock transport order linked between the supplying and receiving plants. Appears as a purchase order at the receiving plant and as a delivery-relevant document at the supplying plant.",
        whatSAPDoesAR:
          "ينشئ أمر نقل مخزون مرتبط بين المصنعَين المورِّد والمستلِم. يظهر كأمر شراء في المصنع المستلِم ومستند يستلزم التسليم في المصنع المورِّد.",
        expectedOutputEN: "STO created. Shipping work item visible at issuing plant.",
        expectedOutputAR: "تم إنشاء STO. بند العمل الخاص بالشحن مرئي في المصنع المُرسِل.",
      },
      {
        id: "mm-sto-2",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery (VL10D)",
        titleAR: "إنشاء التسليم الصادر (VL10D)",
        tCode: "VL10D",
        role: "Shipping Responsible (Issuing Branch)",
        whatToDoEN:
          "Open VL10D (Deliveries for Purchase Orders from Supplying Plants). Filter by shipping point and delivery date. Select the STO and create the outbound delivery in background. Assign the driver number and truck number in the delivery header partner functions (mandatory fields Z1/Z2). Print the delivery document (VL71) with driver and truck details.",
        whatToDoAR:
          "افتح VL10D (التسليمات لأوامر الشراء من المصانع المورِّدة). قم بالتصفية حسب نقطة الشحن وتاريخ التسليم. حدد STO وأنشئ التسليم الصادر في الخلفية. عيّن رقم السائق ورقم الشاحنة في وظائف شريك رأس التسليم (حقول إلزامية Z1/Z2). اطبع مستند التسليم (VL71) بتفاصيل السائق والشاحنة.",
        whatSAPDoesEN:
          "Creates an outbound delivery document for the STO. Delivery cannot be processed without mandatory driver (Z2) and truck (Z1) partner function assignments.",
        whatSAPDoesAR:
          "ينشئ مستند تسليم صادر لـ STO. لا يمكن معالجة التسليم بدون تعيينات وظيفة شريك السائق (Z2) والشاحنة (Z1) الإلزامية.",
        expectedOutputEN: "Outbound delivery created with driver and truck assigned. Delivery printed.",
        expectedOutputAR: "تم إنشاء التسليم الصادر مع تعيين السائق والشاحنة. تمت طباعة التسليم.",
      },
      {
        id: "mm-sto-3",
        stepNumber: 3,
        titleEN: "Post Goods Issue at Sending Plant (VL02N)",
        titleAR: "ترحيل إصدار البضاعة في المصنع المُرسِل (VL02N)",
        tCode: "VL02N",
        role: "Stock Keeper (Issuing Branch)",
        whatToDoEN:
          "Open VL02N with the delivery number. Verify quantities and batch details. Post Goods Issue to transfer the stock from the issuing plant to 'stock in transit' at the receiving plant. Note: all quantities issued must equal all quantities received — no differences allowed.",
        whatToDoAR:
          "افتح VL02N برقم التسليم. تحقق من الكميات وتفاصيل الدفعة. ارحّل إصدار البضاعة لنقل المخزون من المصنع المُرسِل إلى 'المخزون في العبور' في المصنع المستلِم. ملاحظة: جميع الكميات المُصدَرة يجب أن تساوي جميع الكميات المستلَمة — لا يُسمح بالفروق.",
        whatSAPDoesEN:
          "Posts goods issue (movement type 641): reduces issuing plant stock and creates stock-in-transit at the receiving plant. Financial posting at the issuing plant valuation price.",
        whatSAPDoesAR:
          "يرحّل إصدار البضاعة (نوع حركة 641): يخفض مخزون المصنع المُرسِل وينشئ مخزوناً في العبور في المصنع المستلِم. ترحيل مالي بسعر تقييم المصنع المُرسِل.",
        expectedOutputEN: "Stock in transit created at receiving plant. Issuing plant stock reduced.",
        expectedOutputAR: "تم إنشاء المخزون في العبور في المصنع المستلِم. تم تخفيض مخزون المصنع المُرسِل.",
      },
      {
        id: "mm-sto-4",
        stepNumber: 4,
        titleEN: "Monitor Stock in Transit (MB5T)",
        titleAR: "مراقبة المخزون في العبور (MB5T)",
        tCode: "MB5T",
        role: "Transport Specialist",
        whatToDoEN:
          "Run MB5T (Stock in Transit) to monitor all in-transit quantities between plants. Verify that open STO quantities are being received at the destination. The report should be near-zero at period end — all in-transit stock must be received before period close.",
        whatToDoAR:
          "شغّل MB5T (المخزون في العبور) لمراقبة جميع الكميات في العبور بين المصانع. تحقق من استلام كميات STO المفتوحة في الوجهة. يجب أن يكون التقرير قريباً من الصفر في نهاية الفترة — يجب استلام جميع المخزون في العبور قبل إغلاق الفترة.",
        whatSAPDoesEN:
          "Displays stock quantities currently in transit between plants, grouped by material and supplying/receiving plant.",
        whatSAPDoesAR:
          "يعرض كميات المخزون الموجودة حالياً في العبور بين المصانع، مجمّعةً حسب المادة والمصنع المورِّد/المستلِم.",
        expectedOutputEN: "In-transit stock monitored. Any overdue STOs flagged for follow-up.",
        expectedOutputAR: "تمت مراقبة المخزون في العبور. يتم وضع علامة على أي STOs متأخرة للمتابعة.",
      },
      {
        id: "mm-sto-5",
        stepNumber: 5,
        titleEN: "Receive Goods at Destination Plant (MIGO)",
        titleAR: "استلام البضاعة في المصنع المستلِم (MIGO)",
        tCode: "MIGO",
        role: "Stock Keeper (Receiving Branch)",
        whatToDoEN:
          "Open MIGO. Select 'Goods Receipt' and reference document 'Purchase Order' (the STO number). Verify quantities match what was issued. Enter storage location and batch. Post goods receipt — stock moves from in-transit to unrestricted stock at the receiving plant. Confirm quantities are equal (no difference allowed).",
        whatToDoAR:
          "افتح MIGO. حدد 'استلام البضاعة' ومستند مرجعي 'أمر الشراء' (رقم STO). تحقق من تطابق الكميات مع ما تم إصداره. أدخل موقع التخزين والدفعة. ارحّل استلام البضاعة — ينتقل المخزون من العبور إلى المخزون الحر في المصنع المستلِم. تأكد من تساوي الكميات (لا فرق مسموح).",
        whatSAPDoesEN:
          "Posts GR (movement type 101): clears in-transit stock and increases unrestricted stock at the receiving plant. Completes the STO document flow.",
        whatSAPDoesAR:
          "يرحّل استلام البضاعة (نوع حركة 101): يصفّي المخزون في العبور ويزيد المخزون الحر في المصنع المستلِم. يُكمل تدفق مستند STO.",
        expectedOutputEN: "Stock received at destination. STO fully closed. In-transit quantity cleared.",
        expectedOutputAR: "تم استلام المخزون في الوجهة. STO مغلق بالكامل. تم تصفية كمية العبور.",
      },
    ],
  },

  // ─── MM: Physical Inventory ────────────────────────────────────────────────
  {
    id: "mm-physical-inventory",
    icon: "🔢",
    duration: "60 min",
    titleEN: "Physical Inventory Process",
    titleAR: "عملية الجرد المادي",
    descriptionEN:
      "Monthly physical inventory count process: create physical inventory documents (MI01/MI31), print count sheets (MI21), execute physical count, enter results (MI04), list differences (MI20), and post count differences (MI07). Covers all plants and storage locations at AWP. ~10 inventory sessions per month.",
    descriptionAR:
      "عملية الجرد المادي الشهرية: إنشاء مستندات الجرد المادي (MI01/MI31)، طباعة أوراق العد (MI21)، تنفيذ العد الفعلي، إدخال النتائج (MI04)، سرد الفروقات (MI20)، وترحيل فروقات العد (MI07). تشمل جميع المصانع ومواقع التخزين في AWP. حوالي 10 جلسات جرد شهرياً.",
    module: "MM",
    roles: [
      "Physical Inventory Responsible",
      "Stock Keeper",
      "Costing & Inventory Control Department",
    ],
    steps: [
      {
        id: "mm-pi-1",
        stepNumber: 1,
        titleEN: "Create Physical Inventory Documents (MI01 / MI31)",
        titleAR: "إنشاء مستندات الجرد المادي (MI01 / MI31)",
        tCode: "MI01",
        role: "Physical Inventory Responsible",
        whatToDoEN:
          "Open MI01 to create a physical inventory document for a specific plant and storage location. For mass creation across multiple storage locations, use MI31 (batch creation). The inventory document lists all materials to be counted. Set the planned count date. Save — the system freezes book inventory at this point for comparison after counting.",
        whatToDoAR:
          "افتح MI01 لإنشاء مستند جرد مادي لمصنع وموقع تخزين محدد. للإنشاء الجماعي عبر مواقع تخزين متعددة، استخدم MI31 (الإنشاء الدُفعي). يسرد مستند الجرد جميع المواد التي سيتم عدّها. عيّن تاريخ العد المخطط. احفظ — يجمّد النظام مخزون الكتب في هذه النقطة للمقارنة بعد العد.",
        whatSAPDoesEN:
          "Creates physical inventory document with all materials in the selected storage location. Book inventory value is frozen for later difference calculation.",
        whatSAPDoesAR:
          "ينشئ مستند جرد مادي بجميع المواد في موقع التخزين المحدد. يُجمَّد قيمة مخزون الكتب للحساب اللاحق للفروقات.",
        expectedOutputEN: "Physical inventory document created. Materials listed for counting. Book inventory frozen.",
        expectedOutputAR: "تم إنشاء مستند الجرد المادي. المواد مُدرَجة للعد. مخزون الكتب مُجمَّد.",
      },
      {
        id: "mm-pi-2",
        stepNumber: 2,
        titleEN: "Print Physical Inventory Count Sheets (MI21)",
        titleAR: "طباعة أوراق عد الجرد المادي (MI21)",
        tCode: "MI21",
        role: "Physical Inventory Responsible",
        whatToDoEN:
          "Open MI21 and select the physical inventory documents to print. Print the count sheets — these are handed to the counters. Quantities are NOT shown on the count sheets (blind count) to prevent biased counting. Each sheet shows material number, description, unit of measure, and storage location.",
        whatToDoAR:
          "افتح MI21 وحدد مستندات الجرد المادي للطباعة. اطبع أوراق العد — تُسلَّم هذه للعادّين. الكميات غير مُظهَرة في أوراق العد (عد أعمى) لمنع العد المتحيّز. تُظهر كل ورقة رقم المادة والوصف ووحدة القياس وموقع التخزين.",
        whatSAPDoesEN: "Generates printable count sheets for each physical inventory document.",
        whatSAPDoesAR: "ينشئ أوراق عد قابلة للطباعة لكل مستند جرد مادي.",
        expectedOutputEN: "Count sheets printed and distributed to inventory team.",
        expectedOutputAR: "تمت طباعة أوراق العد وتوزيعها على فريق الجرد.",
      },
      {
        id: "mm-pi-3",
        stepNumber: 3,
        titleEN: "Execute Physical Count",
        titleAR: "تنفيذ العد الفعلي",
        role: "Stock Keeper / Physical Inventory Responsible",
        whatToDoEN:
          "Teams physically count all materials in the assigned storage locations. Record actual counts on the printed count sheets. If a material's count appears incorrect, a recount can be requested (MI11). Count must be completed within the planned date.",
        whatToDoAR:
          "تقوم الفرق بعدّ جميع المواد فعلياً في مواقع التخزين المخصصة. سجّل العدد الفعلي على أوراق العد المطبوعة. إذا بدا عدد مادة معينة غير صحيح، يمكن طلب إعادة عد (MI11). يجب اكتمال العد في التاريخ المخطط.",
        whatSAPDoesEN: "No SAP action — physical count is performed manually. Recount can be triggered via MI11.",
        whatSAPDoesAR: "لا يوجد إجراء في SAP — يُجرى العد الفعلي يدوياً. يمكن تشغيل إعادة العد عبر MI11.",
        expectedOutputEN: "Physical count completed. Count sheets filled with actual quantities.",
        expectedOutputAR: "اكتمل العد الفعلي. أوراق العد مملوءة بالكميات الفعلية.",
      },
      {
        id: "mm-pi-4",
        stepNumber: 4,
        titleEN: "Enter Physical Count Results (MI04)",
        titleAR: "إدخال نتائج الجرد المادي (MI04)",
        tCode: "MI04",
        role: "Physical Inventory Responsible",
        whatToDoEN:
          "Open MI04. Select the physical inventory document. Enter the actual counted quantities for each material line. If a material was not found (zero count), mark it explicitly. Save the entered count results.",
        whatToDoAR:
          "افتح MI04. حدد مستند الجرد المادي. أدخل الكميات المعدودة الفعلية لكل بند مادة. إذا لم يُعثَر على مادة (عد صفري)، ضع علامة صريحة عليها. احفظ نتائج العد المُدخَلة.",
        whatSAPDoesEN:
          "Saves count results against the physical inventory document. System calculates the difference between book inventory (frozen at document creation) and the entered count.",
        whatSAPDoesAR:
          "يحفظ نتائج العد مقابل مستند الجرد المادي. يحسب النظام الفرق بين مخزون الكتب (المُجمَّد عند إنشاء المستند) والعدد المُدخَل.",
        expectedOutputEN: "Count results entered. Differences calculated and ready for review.",
        expectedOutputAR: "تم إدخال نتائج العد. تم حساب الفروقات وهي جاهزة للمراجعة.",
      },
      {
        id: "mm-pi-5",
        stepNumber: 5,
        titleEN: "Review Differences and Post Count (MI20 → MI07)",
        titleAR: "مراجعة الفروقات وترحيل العد (MI20 ← MI07)",
        tCode: "MI20",
        role: "Costing & Inventory Control Department",
        whatToDoEN:
          "Open MI20 (List of Inventory Differences) to review all variances by storage location, material, and value. Investigate any significant differences with the warehouse team. Once differences are verified, open MI07 (Post Inventory Document) to post the count differences — SAP automatically adjusts book inventory to match the physical count. Accounting entries are created for the value adjustment.",
        whatToDoAR:
          "افتح MI20 (قائمة فروقات الجرد) لمراجعة جميع التباينات حسب موقع التخزين والمادة والقيمة. حقّق أي فروقات كبيرة مع فريق المستودع. بمجرد التحقق من الفروقات، افتح MI07 (ترحيل مستند الجرد) لترحيل فروقات العد — يضبط SAP تلقائياً مخزون الكتب ليطابق العد الفعلي. يتم إنشاء قيود محاسبية لتسوية القيمة.",
        whatSAPDoesEN:
          "MI07 posts inventory differences with movement type 701 (for shortages) or 702 (for surpluses). Creates accounting document adjusting inventory value. Report YMM019 provides the physical inventory documents report.",
        whatSAPDoesAR:
          "يرحّل MI07 فروقات الجرد بنوع حركة 701 (للنقص) أو 702 (للزيادة). ينشئ مستند محاسبة يضبط قيمة المخزون. يوفر التقرير YMM019 تقرير مستندات الجرد المادي.",
        expectedOutputEN: "Inventory differences posted. Book stock aligned with physical count. Accounting entries created.",
        expectedOutputAR: "تم ترحيل فروقات الجرد. مخزون الكتب متوافق مع العد الفعلي. تم إنشاء القيود المحاسبية.",
      },
    ],
  },

  // ─── MM: Logistics Invoice Verification (MIRO) ────────────────────────────
  {
    id: "mm-invoice-verification",
    icon: "🧾",
    duration: "20 min",
    titleEN: "Logistics Invoice Verification (MIRO)",
    titleAR: "التحقق من الفاتورة اللوجستية (MIRO)",
    descriptionEN:
      "Accounts Payable process for verifying and posting vendor invoices against purchase orders and goods receipts (GR-based invoice verification). Completes the procure-to-pay cycle. ~50 invoices per day, processed by AP Accountants at Qassim. Includes invoice cancellation (MR8M) and GR/IR balance monitoring (MB5S).",
    descriptionAR:
      "عملية الحسابات المدينة للتحقق من فواتير الموردين وترحيلها مقابل أوامر الشراء وإيصالات البضائع (التحقق من الفاتورة المبني على استلام البضاعة). تُكمل دورة الشراء إلى الدفع. حوالي 50 فاتورة يومياً، تعالجها محاسبة الحسابات المدينة في القصيم.",
    module: "MM",
    roles: [
      "AP Accountant",
    ],
    steps: [
      {
        id: "mm-iv-1",
        stepNumber: 1,
        titleEN: "Enter and Post Vendor Invoice (MIRO)",
        titleAR: "إدخال وترحيل فاتورة المورد (MIRO)",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN:
          "Open MIRO. Select transaction 'Invoice'. Enter: invoice date, posting date, vendor, and reference the purchase order number (or delivery note). SAP proposes PO line items with ordered quantities and prices. Verify: the invoice amount matches the GR quantities (GR-based invoice verification) and the agreed PO price. Adjust for any delivery cost differences if applicable. Post the invoice.",
        whatToDoAR:
          "افتح MIRO. حدد معاملة 'فاتورة'. أدخل: تاريخ الفاتورة وتاريخ الترحيل والمورد وأشِر إلى رقم أمر الشراء (أو مذكرة التسليم). يقترح SAP بنود أمر الشراء بالكميات والأسعار المطلوبة. تحقق من: تطابق مبلغ الفاتورة مع كميات استلام البضاعة (التحقق من الفاتورة المبني على استلام البضاعة) والسعر المتفق عليه في أمر الشراء. اضبط لأي فروقات في تكاليف التوصيل إن اقتضى الأمر. ارحّل الفاتورة.",
        whatSAPDoesEN:
          "Posts invoice document with accounting entries: debit GR/IR clearing account (clears the GR posting), credit vendor AP account. Any price variance between PO and invoice creates a price difference posting. Updates PO invoice history.",
        whatSAPDoesAR:
          "يرحّل مستند الفاتورة بقيود محاسبية: مدين حساب مقاصة GR/IR (يُصفّي ترحيل استلام البضاعة)، دائن حساب المورد في الحسابات المدينة. أي فرق في السعر بين أمر الشراء والفاتورة يُنشئ ترحيل فرق السعر. يحدّث سجل فاتورة أمر الشراء.",
        expectedOutputEN: "Invoice posted. GR/IR clearing account settled. Vendor open item created for payment.",
        expectedOutputAR: "تم ترحيل الفاتورة. تمت تسوية حساب مقاصة GR/IR. تم إنشاء بند مفتوح للمورد للدفع.",
      },
      {
        id: "mm-iv-2",
        stepNumber: 2,
        titleEN: "Cancel Invoice if Incorrect (MR8M)",
        titleAR: "إلغاء الفاتورة إذا كانت غير صحيحة (MR8M)",
        tCode: "MR8M",
        role: "AP Accountant",
        whatToDoEN:
          "If a posted invoice is incorrect, open MR8M to cancel it. Enter the invoice document number and fiscal year, select a cancellation reason, and post the cancellation. This creates a reversal document with the opposite accounting entries. The GR/IR clearing account is reopened and the vendor open item is cleared.",
        whatToDoAR:
          "إذا كانت الفاتورة المُرحَّلة غير صحيحة، افتح MR8M لإلغائها. أدخل رقم مستند الفاتورة والسنة المالية، وحدد سبب الإلغاء، وارحّل الإلغاء. ينشئ هذا مستند عكس بقيود محاسبية معاكسة. يُعاد فتح حساب مقاصة GR/IR ويُصفَّى البند المفتوح للمورد.",
        whatSAPDoesEN:
          "Creates a reversal document that cancels the original invoice posting. GR/IR account reopened — invoice can be re-entered correctly.",
        whatSAPDoesAR:
          "ينشئ مستند عكس يلغي الترحيل الأصلي للفاتورة. يُعاد فتح حساب GR/IR — يمكن إعادة إدخال الفاتورة بشكل صحيح.",
        expectedOutputEN: "Invoice cancelled. GR/IR clearing account reopened. Ready for correct invoice re-entry.",
        expectedOutputAR: "تم إلغاء الفاتورة. إعادة فتح حساب مقاصة GR/IR. جاهز لإعادة إدخال الفاتورة الصحيحة.",
      },
      {
        id: "mm-iv-3",
        stepNumber: 3,
        titleEN: "Monitor GR/IR Clearing Account (MB5S / ZMR11)",
        titleAR: "مراقبة حساب مقاصة GR/IR (MB5S / ZMR11)",
        tCode: "MB5S",
        role: "AP Accountant",
        whatToDoEN:
          "Run MB5S (List of GR/IR Balances) or custom report ZMR11 (GR/IR Clearing Report) to identify open GR/IR items — cases where a GR was posted but no invoice yet, or an invoice was posted with no matching GR. Investigate and resolve all open items before period close. Use MR11 to maintain the GR/IR clearing account for any differences.",
        whatToDoAR:
          "شغّل MB5S (قائمة أرصدة GR/IR) أو التقرير المخصص ZMR11 (تقرير مقاصة GR/IR) لتحديد بنود GR/IR المفتوحة — حالات تم فيها ترحيل استلام البضاعة بدون فاتورة بعد، أو ترحيل فاتورة بدون استلام بضاعة مطابق. حقّق وسوّ جميع البنود المفتوحة قبل إغلاق الفترة. استخدم MR11 لصيانة حساب مقاصة GR/IR لأي فروقات.",
        whatSAPDoesEN:
          "MB5S / ZMR11 provides a list of uncleared GR/IR items. MR11 can be used to write off small differences or to clear the account at period end.",
        whatSAPDoesAR:
          "يوفر MB5S / ZMR11 قائمة ببنود GR/IR غير المُصفّاة. يمكن استخدام MR11 لشطب الفروقات الصغيرة أو لتصفية الحساب في نهاية الفترة.",
        expectedOutputEN: "GR/IR account monitored. All open items investigated and resolved before period close.",
        expectedOutputAR: "تمت مراقبة حساب GR/IR. تم التحقيق في جميع البنود المفتوحة وتسويتها قبل إغلاق الفترة.",
      },
    ],
  },

  // ─── MM: STO Without Delivery ─────────────────────────────────────────────
  {
    id: "mm-sto-no-delivery",
    icon: "🔁",
    duration: "15 min",
    titleEN: "Stock Transport Order Without Delivery",
    titleAR: "أمر نقل المخزون بدون تسليم",
    descriptionEN:
      "Simplified inter-plant stock transfer using STO without an outbound delivery document: create STO (ME21N), post goods issue directly from MIGO (movement type 351), monitor in-transit stock (MB5T), and post GR at receiving plant (MIGO). Purchase Group 888. ~20 STOs per day, primarily at Qassim.",
    descriptionAR:
      "نقل مخزون مبسّط بين المصانع باستخدام STO بدون مستند تسليم صادر: إنشاء STO (ME21N)، ترحيل إصدار البضاعة مباشرة من MIGO (نوع حركة 351)، مراقبة المخزون في العبور (MB5T)، وترحيل استلام البضاعة في المصنع المستلِم (MIGO). مجموعة الشراء 888. حوالي 20 STO يومياً، أساساً في القصيم.",
    module: "MM",
    roles: [
      "STO Requester",
      "Stock Keeper (Issuing Plant)",
      "Stock Keeper (Receiving Plant)",
    ],
    steps: [
      {
        id: "mm-snd-1",
        stepNumber: 1,
        titleEN: "Create Stock Transport Order (ME21N)",
        titleAR: "إنشاء أمر نقل المخزون (ME21N)",
        tCode: "ME21N",
        role: "STO Requester",
        whatToDoEN:
          "Open ME21N. Create the STO with document type 'UB' (Stock Transfer) and Purchase Group 888 (STO Without Dlv). Enter: supplying plant, receiving plant, material, quantity, and requested delivery date. Save the STO.",
        whatToDoAR:
          "افتح ME21N. أنشئ STO بنوع المستند 'UB' (نقل المخزون) ومجموعة الشراء 888 (STO بدون تسليم). أدخل: المصنع المورِّد، المصنع المستلِم، المادة، الكمية، وتاريخ التسليم المطلوب. احفظ STO.",
        whatSAPDoesEN:
          "Creates a stock transport order without triggering outbound delivery processing. STO appears in the issuing plant's goods issue worklist.",
        whatSAPDoesAR:
          "ينشئ أمر نقل مخزون بدون تشغيل معالجة التسليم الصادر. يظهر STO في قائمة أعمال إصدار البضاعة للمصنع المُرسِل.",
        expectedOutputEN: "STO created. Issuing plant stock keeper notified.",
        expectedOutputAR: "تم إنشاء STO. تم إخطار أمين المخزن في المصنع المُرسِل.",
      },
      {
        id: "mm-snd-2",
        stepNumber: 2,
        titleEN: "Post Goods Issue at Issuing Plant (MIGO — Movement Type 351)",
        titleAR: "ترحيل إصدار البضاعة في المصنع المُرسِل (MIGO — نوع حركة 351)",
        tCode: "MIGO",
        role: "Stock Keeper (Issuing Plant)",
        whatToDoEN:
          "Open MIGO. Select 'Goods Issue' with reference to the Stock Transport Order number. Enter the actual quantity to issue. Post goods issue — stock moves from the issuing plant's unrestricted-use stock to in-transit at the receiving plant. All issued quantities must equal received quantities.",
        whatToDoAR:
          "افتح MIGO. حدد 'إصدار البضاعة' بالإشارة إلى رقم أمر نقل المخزون. أدخل الكمية الفعلية للإصدار. ارحّل إصدار البضاعة — ينتقل المخزون من مخزون المصنع المُرسِل الحر إلى العبور في المصنع المستلِم. يجب أن تساوي جميع الكميات المُصدَرة الكميات المستلَمة.",
        whatSAPDoesEN:
          "Posts movement type 351: reduces issuing plant stock and creates stock-in-transit at the receiving plant.",
        whatSAPDoesAR:
          "يرحّل نوع الحركة 351: يخفض مخزون المصنع المُرسِل وينشئ مخزوناً في العبور في المصنع المستلِم.",
        expectedOutputEN: "Stock in transit at receiving plant. Issuing stock reduced.",
        expectedOutputAR: "المخزون في العبور إلى المصنع المستلِم. تم تخفيض مخزون المُرسِل.",
      },
      {
        id: "mm-snd-3",
        stepNumber: 3,
        titleEN: "Monitor Stock in Transit and Receive (MB5T → MIGO)",
        titleAR: "مراقبة المخزون في العبور والاستلام (MB5T ← MIGO)",
        tCode: "MB5T",
        role: "Stock Keeper (Receiving Plant)",
        whatToDoEN:
          "Monitor in-transit quantities with MB5T (or MB5TD for a specific key date). Once goods arrive at the receiving plant, open MIGO, select 'Goods Receipt' referencing the STO. Enter actual received quantities (must match issued quantities) and storage location. Post goods receipt.",
        whatToDoAR:
          "راقب الكميات في العبور مع MB5T (أو MB5TD لتاريخ محدد). عند وصول البضائع إلى المصنع المستلِم، افتح MIGO، وحدد 'استلام البضاعة' بالإشارة إلى STO. أدخل الكميات المستلَمة الفعلية (يجب أن تطابق الكميات المُصدَرة) وموقع التخزين. ارحّل استلام البضاعة.",
        whatSAPDoesEN:
          "GR posting (movement type 101) clears in-transit stock and adds to receiving plant unrestricted stock. STO document flow is complete.",
        whatSAPDoesAR:
          "يُصفّي ترحيل استلام البضاعة (نوع حركة 101) المخزون في العبور ويُضيف إلى مخزون المصنع المستلِم الحر. اكتمل تدفق مستند STO.",
        expectedOutputEN: "Stock received. In-transit cleared. STO fully completed.",
        expectedOutputAR: "تم استلام المخزون. تم تصفية العبور. اكتمل STO بالكامل.",
      },
    ],
  },

  // ─── MM: Scrapping / Write-Off ─────────────────────────────────────────────
  {
    id: "mm-scrapping",
    icon: "🗑️",
    duration: "20 min",
    titleEN: "Scrapping / Inventory Write-Off (MIGO)",
    titleAR: "الإتلاف / شطب المخزون (MIGO)",
    descriptionEN:
      "Warehouse process for writing off expired, spoiled, or shrinkage stock. A committee is formed, then stock is scrapped in MIGO using movement types 551 (from unrestricted) or 553 (from quality inspection stock). Reasons are classified for reporting: Expired (55101), Shrinkage (55102), Spoiled (55103). ~20 scrap postings per day.",
    descriptionAR:
      "عملية المستودع لشطب المخزون المنتهي الصلاحية أو الفاسد أو الناقص. يُشكَّل مجلس، ثم يُتلَف المخزون في MIGO باستخدام نوع حركة 551 (من المخزون الحر) أو 553 (من مخزون فحص الجودة). تُصنَّف الأسباب للإبلاغ: منتهي الصلاحية (55101)، نقص (55102)، فاسد (55103). حوالي 20 ترحيل إتلاف يومياً.",
    module: "MM",
    roles: [
      "Warehouse Manager",
      "Warehouse Administrator",
    ],
    steps: [
      {
        id: "mm-scr-1",
        stepNumber: 1,
        titleEN: "Form Scrapping Committee and Identify Stock",
        titleAR: "تشكيل لجنة الإتلاف وتحديد المخزون",
        role: "Warehouse Manager",
        whatToDoEN:
          "Form an official scrapping committee (Warehouse Manager + relevant department representatives). Physically identify and segregate the stock to be scrapped. Classify each item by scrapping reason: Expired (55101), Shrinkage (55102), or Spoiled (55103). Document the list of materials, quantities, and reasons before posting in SAP.",
        whatToDoAR:
          "شكّل لجنة إتلاف رسمية (مدير المستودع + ممثلو الإدارات ذات الصلة). حدد المخزون المراد إتلافه فعلياً وافصله. صنّف كل صنف حسب سبب الإتلاف: منتهي الصلاحية (55101)، نقص (55102)، أو فاسد (55103). وثّق قائمة المواد والكميات والأسباب قبل الترحيل في SAP.",
        whatSAPDoesEN: "No SAP action at this step — committee formation and stock identification are done manually.",
        whatSAPDoesAR: "لا يوجد إجراء SAP في هذه الخطوة — تشكيل اللجنة وتحديد المخزون يتمان يدوياً.",
        expectedOutputEN: "Scrapping list approved by committee. Materials, quantities, and reasons documented.",
        expectedOutputAR: "قائمة الإتلاف معتمدة من اللجنة. المواد والكميات والأسباب موثّقة.",
      },
      {
        id: "mm-scr-2",
        stepNumber: 2,
        titleEN: "Post Scrapping in SAP (MIGO — Movement Type 551 or 553)",
        titleAR: "ترحيل الإتلاف في SAP (MIGO — نوع حركة 551 أو 553)",
        tCode: "MIGO",
        role: "Warehouse Manager",
        whatToDoEN:
          "Open MIGO and select 'Goods Issue' (transaction MIGO_GI). Use movement type 551 to scrap from unrestricted-use stock, or 553 to scrap from quality inspection stock. Enter: plant, storage location, material, quantity, batch, and the relevant reason for movement (55101 Expired, 55102 Shrinkage, 55103 Spoiled, etc.). Post the scrapping document.",
        whatToDoAR:
          "افتح MIGO وحدد 'إصدار البضاعة' (معاملة MIGO_GI). استخدم نوع حركة 551 للإتلاف من المخزون الحر، أو 553 للإتلاف من مخزون فحص الجودة. أدخل: المصنع وموقع التخزين والمادة والكمية والدفعة وسبب الحركة المناسب (55101 منتهي الصلاحية، 55102 نقص، 55103 فاسد، إلخ). ارحّل مستند الإتلاف.",
        whatSAPDoesEN:
          "Posts goods issue with the selected movement type: reduces stock quantity. Creates accounting document (debit scrapping cost center/loss account, credit inventory). Costs are posted to the assigned cost center.",
        whatSAPDoesAR:
          "يرحّل إصدار البضاعة بنوع الحركة المحدد: يخفض كمية المخزون. ينشئ مستند محاسبة (مدين مركز تكلفة الإتلاف/حساب الخسارة، دائن المخزون). تُرحَّل التكاليف إلى مركز التكلفة المعيَّن.",
        expectedOutputEN: "Scrapping document posted. Stock reduced. Accounting entry created to cost center.",
        expectedOutputAR: "تم ترحيل مستند الإتلاف. تم تخفيض المخزون. تم إنشاء قيد محاسبي إلى مركز التكلفة.",
      },
    ],
  },

  // ─── MM: Intercompany Stock Transfer ──────────────────────────────────────
  {
    id: "mm-intercompany-sto",
    icon: "🔄",
    duration: "45 min",
    titleEN: "Intercompany Stock Transfer",
    titleAR: "نقل المخزون بين الشركات",
    descriptionEN:
      "Transfer materials between two company codes (e.g., Al-Watania Poultry and Al-Watania Transportation) within the same country. Includes outbound delivery, billing document, goods receipt, and inter-company invoice. ~10 STOs per week.",
    descriptionAR:
      "نقل المواد بين كودَي شركتين (مثل الوطنية للدواجن والوطنية للنقل) داخل المملكة. تشمل العملية التسليم الصادر ومستند الفوترة وإيصال البضاعة والفاتورة بين الشركتين. نحو 10 أوامر نقل أسبوعيًّا.",
    module: "MM",
    roles: ["Purchaser / Requester", "Stock Keeper", "Billing Clerk", "AP Accountant"],
    steps: [
      {
        id: "mm-intercompany-sto-step-1",
        stepNumber: 1,
        titleEN: "Create Intercompany Purchase Order (STO with Delivery)",
        titleAR: "إنشاء أمر شراء بين الشركات (أمر نقل مخزون بتسليم)",
        tCode: "ME21N",
        role: "Purchaser / Requester",
        whatToDoEN:
          "Create a stock transport order under the receiving plant referencing the supplying company code plant. Set purchase group YL1 (Live Operation Dep) if applicable. Enter material, quantity, and required delivery date.",
        whatToDoAR:
          "أنشئ أمر نقل مخزون تحت المصنع المستقبِل بإسناده إلى مصنع الشركة المورِّدة. حدِّد مجموعة الشراء YL1 (إدارة العمليات الحية) إن انطبق ذلك. أدخل المادة والكمية وتاريخ التسليم المطلوب.",
        whatSAPDoesEN:
          "Creates an intercompany STO document with a cross-company code reference. Generates a purchase order in MM linked to a sales order in the supplying plant's SD module for intercompany billing.",
        whatSAPDoesAR:
          "يُنشئ مستند أمر نقل مخزون بين الشركات مع مرجع عابر لكودَي الشركتين. يولِّد أمر شراء في MM مرتبطًا بأمر مبيعات في وحدة SD للمصنع المورِّد لأغراض الفوترة بين الشركتين.",
        expectedOutputEN: "Intercompany STO created with PO number.",
        expectedOutputAR: "تم إنشاء أمر نقل المخزون بين الشركات مع رقم أمر الشراء.",
      },
      {
        id: "mm-intercompany-sto-step-2",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery",
        titleAR: "إنشاء التسليم الصادر",
        tCode: "VL10D",
        role: "Stock Keeper",
        whatToDoEN:
          "Run the outbound delivery worklist for the STO. Select the relevant STO and create the outbound delivery document for the issuing plant.",
        whatToDoAR:
          "شغِّل قائمة أعمال التسليم الصادر لأمر النقل. اختر أمر النقل المعني وأنشئ مستند التسليم الصادر من المصنع المورِّد.",
        whatSAPDoesEN:
          "Creates an outbound delivery referencing the STO. Proposes picking quantities from the issuing plant's storage location.",
        whatSAPDoesAR:
          "يُنشئ تسليمًا صادرًا مرجعه أمر النقل. يقترح كميات الانتقاء من موقع التخزين في المصنع المورِّد.",
        expectedOutputEN: "Outbound delivery document created.",
        expectedOutputAR: "تم إنشاء مستند التسليم الصادر.",
      },
      {
        id: "mm-intercompany-sto-step-3",
        stepNumber: 3,
        titleEN: "Pick and Post Goods Issue",
        titleAR: "الانتقاء وترحيل إصدار البضاعة",
        tCode: "VL02N",
        role: "Stock Keeper",
        whatToDoEN:
          "Open the outbound delivery, confirm picked quantities, then post goods issue. This triggers movement type 641 (GI for STO intercompany), reducing stock at the issuing plant.",
        whatToDoAR:
          "افتح التسليم الصادر وأكِّد الكميات المنتقاة، ثم رحِّل إصدار البضاعة. يُشغِّل ذلك نوع الحركة 641 (إصدار بضاعة لأمر نقل بين الشركات) مما يخفض المخزون في المصنع المورِّد.",
        whatSAPDoesEN:
          "Posts goods issue (MT 641) from the issuing plant. Stock moves to in-transit status at the receiving plant. Creates an accounting document.",
        whatSAPDoesAR:
          "يرحِّل إصدار البضاعة (نوع الحركة 641) من المصنع المورِّد. ينتقل المخزون إلى حالة العبور في المصنع المستقبِل. يُنشئ مستند محاسبة.",
        expectedOutputEN: "Goods issue posted. Stock in transit at receiving plant.",
        expectedOutputAR: "تم ترحيل إصدار البضاعة. المخزون في العبور لدى المصنع المستقبِل.",
      },
      {
        id: "mm-intercompany-sto-step-4",
        stepNumber: 4,
        titleEN: "Monitor Stock in Transit",
        titleAR: "مراقبة المخزون أثناء العبور",
        tCode: "MB5T",
        role: "Purchaser / Requester",
        whatToDoEN:
          "Monitor stock in transit between company codes. Verify that quantities match the STO and that goods are on their way to the receiving plant.",
        whatToDoAR:
          "راقب المخزون أثناء العبور بين كودَي الشركتين. تحقَّق من تطابق الكميات مع أمر النقل وأن البضائع في طريقها إلى المصنع المستقبِل.",
        whatSAPDoesEN:
          "Displays stock in transit between company codes with material, quantity, and STO reference details.",
        whatSAPDoesAR:
          "يعرض المخزون في العبور بين كودَي الشركتين مع تفاصيل المادة والكمية ومرجع أمر النقل.",
        expectedOutputEN: "Stock in transit confirmed and quantities verified.",
        expectedOutputAR: "تم تأكيد المخزون أثناء العبور والتحقق من الكميات.",
      },
      {
        id: "mm-intercompany-sto-step-5",
        stepNumber: 5,
        titleEN: "Create Billing Document (Intercompany Invoice)",
        titleAR: "إنشاء مستند الفوترة (الفاتورة بين الشركتين)",
        tCode: "VF04",
        role: "Billing Clerk",
        whatToDoEN:
          "Create a billing document (intercompany invoice) referencing the issued delivery. The supplying company codes charges the receiving company code for the transferred goods at the transfer price.",
        whatToDoAR:
          "أنشئ مستند فوترة (فاتورة بين الشركتين) مرجعه التسليم الصادر. تفوتر الشركة المورِّدة الشركةَ المستقبِلة بقيمة البضائع المحوَّلة وفق سعر التحويل المتفق عليه.",
        whatSAPDoesEN:
          "Creates an intercompany billing document (IV invoice type). Posts revenue in the supplying company code and generates an accounts receivable entry against the receiving company.",
        whatSAPDoesAR:
          "يُنشئ مستند فوترة بين الشركتين (نوع الفاتورة IV). يرحِّل الإيراد في الشركة المورِّدة وينشئ قيد حسابات مدينة بمواجهة الشركة المستقبِلة.",
        expectedOutputEN: "Intercompany billing document created. Revenue posted in supplying company.",
        expectedOutputAR: "تم إنشاء مستند الفوترة بين الشركتين. تم ترحيل الإيراد في الشركة المورِّدة.",
      },
      {
        id: "mm-intercompany-sto-step-6",
        stepNumber: 6,
        titleEN: "Post Goods Receipt",
        titleAR: "ترحيل إيصال البضاعة",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "At the receiving plant, post the goods receipt referencing the STO or the inbound delivery. Enter batch and expiry date if applicable. Movement type 101 transfers stock from in-transit to unrestricted-use.",
        whatToDoAR:
          "في المصنع المستقبِل، رحِّل إيصال البضاعة مستندًا إلى أمر النقل أو التسليم الوارد. أدخل الدُّفعة وتاريخ الانتهاء عند الاقتضاء. نوع الحركة 101 ينقل المخزون من العبور إلى المخزون غير المقيَّد.",
        whatSAPDoesEN:
          "Posts GR (MT 101) at the receiving plant. Clears the in-transit quantity. Creates an accounting document crediting the GR/IR clearing account.",
        whatSAPDoesAR:
          "يرحِّل إيصال البضاعة (نوع الحركة 101) في المصنع المستقبِل. يصفِّر كمية العبور. يُنشئ مستند محاسبة دائنًا لحساب GR/IR الوسيط.",
        expectedOutputEN: "Goods received. In-transit stock cleared. Inventory updated at receiving plant.",
        expectedOutputAR: "تم استلام البضاعة. تم تصفير مخزون العبور. تم تحديث المخزون في المصنع المستقبِل.",
      },
      {
        id: "mm-intercompany-sto-step-7",
        stepNumber: 7,
        titleEN: "Enter Intercompany Invoice (MIRO)",
        titleAR: "إدخال الفاتورة بين الشركتين (MIRO)",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN:
          "The receiving company's AP accountant enters the intercompany invoice in MIRO referencing the STO. Matches invoice amount to GR amount. Post to clear the GR/IR account.",
        whatToDoAR:
          "يُدخل محاسب الحسابات الدائنة في الشركة المستقبِلة الفاتورة بين الشركتين في MIRO مستندًا إلى أمر النقل. يطابق مبلغ الفاتورة مع مبلغ إيصال البضاعة. يرحِّل لتصفية حساب GR/IR.",
        whatSAPDoesEN:
          "Posts the vendor invoice (intercompany). Clears GR/IR clearing account. Creates an accounts payable entry in the receiving company code.",
        whatSAPDoesAR:
          "يرحِّل فاتورة المورِّد (بين الشركتين). يصفِّر حساب GR/IR الوسيط. يُنشئ قيد حسابات دائنة في كود الشركة المستقبِلة.",
        expectedOutputEN: "Intercompany invoice posted. GR/IR cleared. AP entry created.",
        expectedOutputAR: "تم ترحيل الفاتورة بين الشركتين. تم تصفية حساب GR/IR. تم إنشاء قيد الحسابات الدائنة.",
      },
      {
        id: "mm-intercompany-sto-step-8",
        stepNumber: 8,
        titleEN: "Check Customer & Supplier Statement",
        titleAR: "مراجعة كشف العميل والمورِّد",
        tCode: "FBL5N / FBL1N",
        role: "AP Accountant / Billing Clerk",
        whatToDoEN:
          "Run FBL5N (customer line items) in the supplying company and FBL1N (vendor line items) in the receiving company to confirm all intercompany entries are matched and cleared.",
        whatToDoAR:
          "شغِّل FBL5N (بنود العميل) في الشركة المورِّدة وFBL1N (بنود المورِّد) في الشركة المستقبِلة للتأكد من تطابق جميع القيود بين الشركتين وتصفيتها.",
        whatSAPDoesEN:
          "Displays open and cleared intercompany line items. Highlights any uncleared balances that need follow-up.",
        whatSAPDoesAR:
          "يعرض البنود المفتوحة والمصفَّاة بين الشركتين. يسلِّط الضوء على أي أرصدة غير مصفَّاة تستلزم متابعة.",
        expectedOutputEN: "Intercompany balances confirmed and cleared.",
        expectedOutputAR: "تم تأكيد الأرصدة بين الشركتين وتصفيتها.",
      },
    ],
  },

  // ─── MM: Feed Mill Transportation (Feed Bulker STO) ───────────────────────
  {
    id: "mm-feedmill-transportation",
    icon: "🚛",
    duration: "30 min",
    titleEN: "Feed Mill Transportation (Feed Bulker STO)",
    titleAR: "نقل الأعلاف من مصانع الأعلاف (شاحنات الأعلاف السائبة)",
    descriptionEN:
      "Execute daily feed transfers from feed mill plants to live operation farms via stock transport orders. Mandatory partner functions: driver (Z2) and truck (Z1) on every delivery. Monthly incentive report (YMM_TA) calculated by Finance. ~150 trips/day.",
    descriptionAR:
      "تنفيذ عمليات نقل الأعلاف اليومية من مصانع الأعلاف إلى مزارع العمليات الحية عبر أوامر نقل المخزون. وظائف الشريك الإلزامية: السائق (Z2) والشاحنة (Z1) على كل تسليم. تقرير الحوافز الشهري (YMM_TA) تحسبه الإدارة المالية. نحو 150 رحلة يوميًّا.",
    module: "MM",
    roles: [
      "Live Operation Coordinator",
      "Transportation Coordinator",
      "Feed Mill Stock Keeper",
      "Farm Responsible",
      "Finance / Accountant",
    ],
    steps: [
      {
        id: "mm-feedmill-transportation-step-1",
        stepNumber: 1,
        titleEN: "Create Stock Transport Order",
        titleAR: "إنشاء أمر نقل المخزون",
        tCode: "ME21N",
        role: "Live Operation Coordinator",
        whatToDoEN:
          "Create a stock transport order from the farm (receiving plant) to the feed mill plant (issuing plant). Enter feed material, required quantity, and planned delivery date to schedule the bulker trip.",
        whatToDoAR:
          "أنشئ أمر نقل مخزون من المزرعة (المصنع المستقبِل) إلى مصنع الأعلاف (المصنع المورِّد). أدخل مادة العلف والكمية المطلوبة وتاريخ التسليم المخطط لجدولة رحلة الشاحنة.",
        whatSAPDoesEN:
          "Creates the STO document in the system, generating demand at the feed mill and a purchase order visible to the transportation coordinator for scheduling.",
        whatSAPDoesAR:
          "يُنشئ مستند أمر النقل في النظام، مولِّدًا طلبًا في مصنع الأعلاف وأمر شراء مرئيًّا لمنسِّق النقل لأغراض الجدولة.",
        expectedOutputEN: "STO created with PO number.",
        expectedOutputAR: "تم إنشاء أمر النقل مع رقم أمر الشراء.",
      },
      {
        id: "mm-feedmill-transportation-step-2",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery",
        titleAR: "إنشاء التسليم الصادر",
        tCode: "VL10D",
        role: "Transportation Coordinator",
        whatToDoEN:
          "Run the outbound delivery worklist for STOs. Select the STO due for delivery and create the outbound delivery. This initiates the shipping process at the feed mill.",
        whatToDoAR:
          "شغِّل قائمة أعمال التسليم الصادر لأوامر النقل. اختر أمر النقل المستحق للتسليم وأنشئ التسليم الصادر. يبدأ ذلك عملية الشحن في مصنع الأعلاف.",
        whatSAPDoesEN:
          "Creates an outbound delivery document linked to the STO. Proposes delivery quantity from feed mill stock.",
        whatSAPDoesAR:
          "يُنشئ مستند تسليم صادر مرتبطًا بأمر النقل. يقترح كمية التسليم من مخزون مصنع الأعلاف.",
        expectedOutputEN: "Outbound delivery created.",
        expectedOutputAR: "تم إنشاء التسليم الصادر.",
      },
      {
        id: "mm-feedmill-transportation-step-3",
        stepNumber: 3,
        titleEN: "Assign Shipping Data – Driver (Z2) and Truck (Z1)",
        titleAR: "تعيين بيانات الشحن – السائق (Z2) والشاحنة (Z1)",
        tCode: "VL02N",
        role: "Transportation Coordinator",
        whatToDoEN:
          "Open the delivery in VL02N and assign the mandatory partner functions: Driver employee number under partner function Z2, and truck number (assigned to the receiving farm plant customer) under partner function Z1. Every delivery MUST have both assigned before goods issue.",
        whatToDoAR:
          "افتح التسليم في VL02N وعيِّن وظائف الشريك الإلزامية: رقم موظف السائق تحت وظيفة الشريك Z2، ورقم الشاحنة (المعيَّنة لعميل مصنع المزرعة المستقبِلة) تحت وظيفة الشريك Z1. يجب تعيين كلتيهما على كل تسليم قبل إصدار البضاعة.",
        whatSAPDoesEN:
          "Updates the delivery with driver and truck partner assignments. These fields are used for the monthly incentive calculation in the YMM_TA report.",
        whatSAPDoesAR:
          "يُحدِّث التسليم بتعيينات الشريك للسائق والشاحنة. تُستخدم هذه الحقول في حساب الحوافز الشهرية في تقرير YMM_TA.",
        expectedOutputEN: "Driver and truck assigned on delivery. Ready for printing and goods issue.",
        expectedOutputAR: "تم تعيين السائق والشاحنة على التسليم. جاهز للطباعة وإصدار البضاعة.",
      },
      {
        id: "mm-feedmill-transportation-step-4",
        stepNumber: 4,
        titleEN: "Print Delivery Document",
        titleAR: "طباعة مستند التسليم",
        tCode: "VL71",
        role: "Transportation Coordinator",
        whatToDoEN:
          "Print the delivery document. The printed copy must show the driver code, driver name, and truck number. The driver carries this document to the farm as proof of transfer.",
        whatToDoAR:
          "اطبع مستند التسليم. يجب أن تتضمَّن النسخة المطبوعة كود السائق واسمه ورقم الشاحنة. يحمل السائق هذه الوثيقة إلى المزرعة إثباتًا للنقل.",
        whatSAPDoesEN:
          "Outputs the delivery document as a printed slip including driver and truck details for the trip.",
        whatSAPDoesAR:
          "يُخرج مستند التسليم كقسيمة مطبوعة تشمل تفاصيل السائق والشاحنة للرحلة.",
        expectedOutputEN: "Delivery slip printed with driver and truck information.",
        expectedOutputAR: "تم طباعة قسيمة التسليم مع معلومات السائق والشاحنة.",
      },
      {
        id: "mm-feedmill-transportation-step-5",
        stepNumber: 5,
        titleEN: "Post Goods Issue (Feed Mill)",
        titleAR: "ترحيل إصدار البضاعة (مصنع الأعلاف)",
        tCode: "VL02N",
        role: "Feed Mill Stock Keeper",
        whatToDoEN:
          "After loading the bulker truck, post goods issue for the delivery. The trip coordinator must ensure all deliveries are issued on the planned date. If a delivery is not issued on time, delete and recreate it for the new delivery date or update the existing date.",
        whatToDoAR:
          "بعد تحميل شاحنة الأعلاف السائبة، رحِّل إصدار البضاعة للتسليم. يجب أن يتأكد منسِّق الرحلات من إصدار جميع التسليمات في التاريخ المخطط. إن لم يُصدَر التسليم في الموعد، احذفه وأعِد إنشاءه بتاريخ التسليم الجديد أو حدِّث التاريخ الحالي.",
        whatSAPDoesEN:
          "Posts goods issue from the feed mill. Reduces feed stock at the issuing plant. Creates in-transit stock at the receiving farm plant.",
        whatSAPDoesAR:
          "يرحِّل إصدار البضاعة من مصنع الأعلاف. يخفض مخزون العلف في المصنع المورِّد. يُنشئ مخزون العبور في مصنع المزرعة المستقبِلة.",
        expectedOutputEN: "Goods issued. Feed in transit to the farm.",
        expectedOutputAR: "تم إصدار البضاعة. العلف في العبور إلى المزرعة.",
      },
      {
        id: "mm-feedmill-transportation-step-6",
        stepNumber: 6,
        titleEN: "Monitor Stock in Transit",
        titleAR: "مراقبة المخزون أثناء العبور",
        tCode: "MB5T",
        role: "Farm Responsible / Accountant",
        whatToDoEN:
          "Monitor open in-transit quantities between the feed mill and farm plants. All issued quantities must be received at the farms — no quantity differences are allowed in the system.",
        whatToDoAR:
          "راقب الكميات المفتوحة أثناء العبور بين مصانع الأعلاف ومزارع المستقبِلة. يجب استلام جميع الكميات المُصدَرة في المزارع — لا يُسمح بأي فروقات في الكميات على النظام.",
        whatSAPDoesEN:
          "Displays all quantities currently in transit between plants, allowing the accountant to track unconfirmed deliveries.",
        whatSAPDoesAR:
          "يعرض جميع الكميات الموجودة حاليًّا في العبور بين المصانع، مما يتيح للمحاسب تتبُّع التسليمات غير المؤكَّدة.",
        expectedOutputEN: "In-transit quantities monitored. Unresolved items identified for follow-up.",
        expectedOutputAR: "تمت مراقبة الكميات أثناء العبور. تحديد البنود غير المحسومة للمتابعة.",
      },
      {
        id: "mm-feedmill-transportation-step-7",
        stepNumber: 7,
        titleEN: "Receive Delivery at Farm (Goods Receipt)",
        titleAR: "استلام التسليم في المزرعة (إيصال البضاعة)",
        tCode: "MIGO",
        role: "Farm Responsible",
        whatToDoEN:
          "At the farm, post goods receipt referencing the STO or delivery. Confirm the received quantity matches the issued quantity. Enter batch information if applicable.",
        whatToDoAR:
          "في المزرعة، رحِّل إيصال البضاعة مستندًا إلى أمر النقل أو التسليم. تأكَّد من تطابق الكمية المستلَمة مع الكمية المُصدَرة. أدخل معلومات الدُّفعة عند الاقتضاء.",
        whatSAPDoesEN:
          "Posts GR (MT 101) at the farm. Clears in-transit stock. Updates unrestricted-use feed inventory at the farm.",
        whatSAPDoesAR:
          "يرحِّل إيصال البضاعة (نوع الحركة 101) في المزرعة. يصفِّر مخزون العبور. يُحدِّث مخزون العلف غير المقيَّد في المزرعة.",
        expectedOutputEN: "Feed received at farm. In-transit cleared. Inventory updated.",
        expectedOutputAR: "تم استلام العلف في المزرعة. تم تصفير العبور. تم تحديث المخزون.",
      },
      {
        id: "mm-feedmill-transportation-step-8",
        stepNumber: 8,
        titleEN: "Run Monthly Driver Incentive Report",
        titleAR: "تشغيل تقرير حوافز السائقين الشهري",
        tCode: "YMM_TA",
        role: "Finance / Accountant",
        whatToDoEN:
          "At month-end, Finance runs the incentive report (YMM_TA) to calculate driver incentives based on: delivery date, feed mill issuing area, receiving farm, and trip counter. Before running, ensure all deliveries are completed via report YMM_DLV. Exclude any trips with 'X' in the External Identification field (LIKP-LIFEX). Send confirmed results to the Trips Coordinator, then to HR for payment processing.",
        whatToDoAR:
          "في نهاية الشهر، تُشغِّل الإدارة المالية تقرير الحوافز (YMM_TA) لحساب حوافز السائقين بناءً على: تاريخ التسليم، ومنطقة الإصدار في مصنع الأعلاف، والمزرعة المستقبِلة، وعدَّاد الرحلات. قبل التشغيل، تأكَّد من اكتمال جميع التسليمات عبر تقرير YMM_DLV. استبعد أي رحلات تحمل 'X' في حقل المعرِّف الخارجي (LIKP-LIFEX). أرسل النتائج المؤكَّدة إلى منسِّق الرحلات ثم إلى الموارد البشرية لمعالجة الدفع.",
        whatSAPDoesEN:
          "Calculates incentive amounts per driver per trip based on ZTM1 rate table. Outputs a report showing each driver's total trips and incentive amount for payroll processing.",
        whatSAPDoesAR:
          "يحسب مبالغ الحوافز لكل سائق لكل رحلة بناءً على جدول الأسعار ZTM1. يُخرج تقريرًا يعرض إجمالي رحلات كل سائق ومبلغ حوافزه لمعالجة كشف الرواتب.",
        expectedOutputEN: "Driver incentive report generated and sent to Trips Coordinator and HR.",
        expectedOutputAR: "تم إنشاء تقرير حوافز السائقين وإرساله إلى منسِّق الرحلات والموارد البشرية.",
      },
    ],
  },

  // ─── MM: Returns to Supplier (Return Order) ───────────────────────────────
  {
    id: "mm-returns-supplier",
    icon: "↩️",
    duration: "30 min",
    titleEN: "Returns to Supplier (Return Order)",
    titleAR: "الإرجاع إلى المورِّد (أمر الإرجاع)",
    descriptionEN:
      "Return rejected or defective goods back to the supplier using a return purchase order. A credit memo is generated to adjust the supplier balance. Covers quality rejections, short expiry, wrong delivery, and damaged goods. ~4 returns/week.",
    descriptionAR:
      "إرجاع البضائع المرفوضة أو المعيبة إلى المورِّد باستخدام أمر شراء للإرجاع. يُنشأ قيد دائن لتسوية رصيد المورِّد. يشمل رفض الجودة وقِصَر الصلاحية والتسليم الخاطئ والبضائع التالفة. نحو 4 إرجاعات أسبوعيًّا.",
    module: "MM",
    roles: ["Stock Keeper", "Purchaser", "AP Accountant"],
    steps: [
      {
        id: "mm-returns-supplier-step-1",
        stepNumber: 1,
        titleEN: "Inform Purchasing Department of Return Requirement",
        titleAR: "إبلاغ قسم المشتريات بمتطلبات الإرجاع",
        tCode: "Manual / Email",
        role: "Stock Keeper",
        whatToDoEN:
          "Quality inspector or stock keeper identifies rejected goods and notifies the purchasing department by email or phone. Provide: material description, quantity, PO reference, reason for return (poor quality, short expiry, wrong delivery, damaged), and the original material document number.",
        whatToDoAR:
          "يُحدِّد مفتش الجودة أو أمين المخزون البضائع المرفوضة ويُبلِّغ قسم المشتريات بالبريد الإلكتروني أو الهاتف. يُزوَّد بـ: وصف المادة والكمية ومرجع أمر الشراء وسبب الإرجاع (ضعف الجودة أو قِصَر الصلاحية أو التسليم الخاطئ أو التلف) ورقم مستند المادة الأصلي.",
        whatSAPDoesEN: "No SAP action at this step. Purchasing receives the return request outside the system.",
        whatSAPDoesAR: "لا يوجد إجراء في SAP في هذه الخطوة. تتلقى المشتريات طلب الإرجاع خارج النظام.",
        expectedOutputEN: "Purchasing department notified. Return request acknowledged.",
        expectedOutputAR: "تم إبلاغ قسم المشتريات. تم تأكيد طلب الإرجاع.",
      },
      {
        id: "mm-returns-supplier-step-2",
        stepNumber: 2,
        titleEN: "Create Return Purchase Order",
        titleAR: "إنشاء أمر الشراء للإرجاع",
        tCode: "ME21N",
        role: "Purchaser",
        whatToDoEN:
          "Create a new purchase order in ME21N and check the 'Returns' checkbox for the relevant line item(s). This flags the PO as a return order. Enter the material, quantity to return, and reference the original supplier. Select the appropriate return reason code: 1600 – Poor Quality, 1601 – Short Expiry, 1602 – Wrong Delivery, 1603 – Damaged.",
        whatToDoAR:
          "أنشئ أمر شراء جديدًا في ME21N وضع علامة الاختيار 'إرجاع' على البند/البنود المعنية. يُعلِّم ذلك أمر الشراء بوصفه أمر إرجاع. أدخل المادة والكمية المراد إرجاعها مع الإشارة إلى المورِّد الأصلي. اختر كود سبب الإرجاع المناسب: 1600 – ضعف الجودة، 1601 – قِصَر الصلاحية، 1602 – تسليم خاطئ، 1603 – تلف.",
        whatSAPDoesEN:
          "Creates a return PO document. Movement type 161 will be used for the return goods issue (reversal of GR). The system sets up the relevant account determination for the credit posting.",
        whatSAPDoesAR:
          "يُنشئ مستند أمر الشراء للإرجاع. يُستخدم نوع الحركة 161 لإصدار بضاعة الإرجاع (عكس إيصال البضاعة). يُعِدُّ النظام تحديد الحساب المعني لقيد الدائن.",
        expectedOutputEN: "Return purchase order created with PO number and return flag.",
        expectedOutputAR: "تم إنشاء أمر الشراء للإرجاع مع رقم أمر الشراء وعلامة الإرجاع.",
      },
      {
        id: "mm-returns-supplier-step-3",
        stepNumber: 3,
        titleEN: "Issue Return Delivery to Supplier",
        titleAR: "إصدار تسليم الإرجاع إلى المورِّد",
        tCode: "MIGO_GR",
        role: "Stock Keeper",
        whatToDoEN:
          "In MIGO, post a return delivery referencing the return purchase order (or the original GR material document if returning against the same PO). Movement type 161 issues the goods back to the supplier, reducing AWP stock. Ensure returned goods are in the same condition as originally received. Print the return document as proof of return.",
        whatToDoAR:
          "في MIGO، رحِّل تسليم إرجاع مستندًا إلى أمر الشراء للإرجاع (أو مستند مادة إيصال البضاعة الأصلي في حالة الإرجاع مقابل نفس أمر الشراء). نوع الحركة 161 يُصدر البضاعة إلى المورِّد مخفِّضًا مخزون الوطنية. تأكَّد من أن البضائع المُرجَعة بالحالة نفسها عند استلامها أصلًا. اطبع مستند الإرجاع إثباتًا للإرجاع.",
        whatSAPDoesEN:
          "Posts MT 161 (return delivery to supplier). Reduces unrestricted stock at AWP. Creates a material document and accounting entry reversing the original GR cost.",
        whatSAPDoesAR:
          "يرحِّل نوع الحركة 161 (تسليم إرجاع إلى المورِّد). يخفض المخزون غير المقيَّد في الوطنية. يُنشئ مستند مادة وقيد محاسبة يعكس تكلفة إيصال البضاعة الأصلية.",
        expectedOutputEN: "Return goods issued to supplier. Stock reduced. Material document created.",
        expectedOutputAR: "تم إصدار بضاعة الإرجاع إلى المورِّد. تم تخفيض المخزون. تم إنشاء مستند المادة.",
      },
      {
        id: "mm-returns-supplier-step-4",
        stepNumber: 4,
        titleEN: "Create Credit Memo (MIRO)",
        titleAR: "إنشاء قيد دائن (MIRO)",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN:
          "Enter the credit memo in MIRO referencing the return purchase order. The credit memo adjusts the supplier's payable balance for the returned goods value. Verify the amounts match the return quantity × original purchase price.",
        whatToDoAR:
          "أدخل القيد الدائن في MIRO مستندًا إلى أمر الشراء للإرجاع. يُسوِّي القيد الدائن رصيد الحسابات الدائنة للمورِّد بقيمة البضائع المُرجَعة. تحقَّق من تطابق المبالغ مع كمية الإرجاع × سعر الشراء الأصلي.",
        whatSAPDoesEN:
          "Posts the credit memo against the supplier. Reduces the accounts payable balance. Creates an FI document crediting the vendor account and debiting the inventory/purchase account.",
        whatSAPDoesAR:
          "يرحِّل القيد الدائن بمواجهة المورِّد. يخفض رصيد الحسابات الدائنة. يُنشئ مستند FI دائنًا لحساب المورِّد ومدينًا لحساب المخزون/الشراء.",
        expectedOutputEN: "Credit memo posted. Supplier balance adjusted for returned goods.",
        expectedOutputAR: "تم ترحيل القيد الدائن. تم تسوية رصيد المورِّد بقيمة البضائع المُرجَعة.",
      },
    ],
  },

  // ─── MM: Supplier Consignment ──────────────────────────────────────────────
  {
    id: "mm-supplier-consignment",
    icon: "🏪",
    duration: "20 min",
    titleEN: "Supplier Consignment",
    titleAR: "أمانة المورِّد (البضاعة الأمانة)",
    descriptionEN:
      "Manage vendor-owned stock stored at AWP premises. Liability arises only when consignment stock is withdrawn for use. Settlement (MRKO) pays the supplier for consumed quantities. Item category K in the purchase order. ~1 per year.",
    descriptionAR:
      "إدارة المخزون المملوك للمورِّد والمخزَّن في مستودعات الوطنية. تنشأ المديونية فقط عند سحب مخزون الأمانة للاستخدام. التسوية (MRKO) تسدِّد للمورِّد الكميات المستهلَكة. فئة البند K في أمر الشراء. نحو مرة في السنة.",
    module: "MM",
    roles: ["Purchaser", "Division Head", "Department Manager", "Stock Keeper", "AP Accountant"],
    steps: [
      {
        id: "mm-supplier-consignment-step-1",
        stepNumber: 1,
        titleEN: "Create Purchasing Info Record (Consignment)",
        titleAR: "إنشاء سجل معلومات الشراء (أمانة)",
        tCode: "ME11",
        role: "Purchaser",
        whatToDoEN:
          "Create a purchasing info record for the consignment material with category 'Consignment'. This stores the agreed consignment price and conditions for the material-vendor combination.",
        whatToDoAR:
          "أنشئ سجل معلومات شراء للمادة الأمانة بفئة 'أمانة'. يُخزِّن ذلك السعر المتفق عليه للأمانة والشروط المعتمدة لتركيبة المادة والمورِّد.",
        whatSAPDoesEN:
          "Creates a purchasing info record (PIR) of category Consignment, storing the consignment price used for settlement.",
        whatSAPDoesAR:
          "يُنشئ سجل معلومات الشراء (PIR) بفئة الأمانة، مخزِّنًا سعر الأمانة المستخدَم في التسوية.",
        expectedOutputEN: "Consignment purchasing info record created.",
        expectedOutputAR: "تم إنشاء سجل معلومات الشراء للأمانة.",
      },
      {
        id: "mm-supplier-consignment-step-2",
        stepNumber: 2,
        titleEN: "Create Consignment Purchase Order (Item Category K)",
        titleAR: "إنشاء أمر شراء الأمانة (فئة البند K)",
        tCode: "ME21N",
        role: "Purchaser",
        whatToDoEN:
          "Create a purchase order in ME21N with item category K (Consignment). Enter material and quantity. The PO price is informational — no financial posting occurs at GR. Goods receipt will place material into consignment stock (not AWP-owned inventory).",
        whatToDoAR:
          "أنشئ أمر شراء في ME21N بفئة البند K (أمانة). أدخل المادة والكمية. سعر أمر الشراء استرشادي فقط — لا يوجد ترحيل مالي عند إيصال البضاعة. يضع إيصال البضاعة المادة في مخزون الأمانة (وليس في مخزون الوطنية المملوك لها).",
        whatSAPDoesEN:
          "Creates a consignment PO (item cat K). No invoice liability is created at order time. Stock will be received into special consignment stock type.",
        whatSAPDoesAR:
          "يُنشئ أمر شراء الأمانة (فئة البند K). لا تُنشأ مديونية فاتورة عند إنشاء الأمر. يُستقبل المخزون في نوع المخزون الخاص بالأمانة.",
        expectedOutputEN: "Consignment PO created (item cat K).",
        expectedOutputAR: "تم إنشاء أمر الشراء للأمانة (فئة البند K).",
      },
      {
        id: "mm-supplier-consignment-step-3",
        stepNumber: 3,
        titleEN: "Approve Purchase Order",
        titleAR: "اعتماد أمر الشراء",
        tCode: "ME29N",
        role: "Division Head / Department Manager",
        whatToDoEN:
          "Release (approve) the consignment PO through the standard multi-level approval workflow: Division Head release first, then Department Manager. Both approvals required before supplier can deliver.",
        whatToDoAR:
          "أطلق سراح (اعتمد) أمر شراء الأمانة عبر سير عمل الاعتماد متعدد المستويات القياسي: رئيس القسم أولًا ثم مدير الإدارة. كلا الاعتمادين مطلوبان قبل أن يتمكن المورِّد من التسليم.",
        whatSAPDoesEN:
          "Releases the PO through the release strategy. Status changes to 'Released'. PO can now be transmitted to the supplier.",
        whatSAPDoesAR:
          "يُطلق سراح أمر الشراء عبر استراتيجية الإطلاق. يتغير الحالة إلى 'مُطلق'. يمكن الآن إرسال أمر الشراء إلى المورِّد.",
        expectedOutputEN: "Consignment PO fully approved and released.",
        expectedOutputAR: "تم اعتماد وإطلاق أمر شراء الأمانة بالكامل.",
      },
      {
        id: "mm-supplier-consignment-step-4",
        stepNumber: 4,
        titleEN: "Post Goods Receipt (Consignment Stock)",
        titleAR: "ترحيل إيصال البضاعة (مخزون الأمانة)",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "Receive the vendor's goods against the consignment PO in MIGO. The stock is posted to the vendor's consignment stock (not AWP unrestricted stock). No financial posting occurs — the vendor still owns the goods.",
        whatToDoAR:
          "استلم بضائع المورِّد مقابل أمر شراء الأمانة في MIGO. يُرحَّل المخزون إلى مخزون الأمانة الخاص بالمورِّد (وليس في المخزون غير المقيَّد للوطنية). لا يوجد ترحيل مالي — لا يزال المورِّد يملك البضائع.",
        whatSAPDoesEN:
          "Posts GR into vendor consignment stock (special stock indicator K). No accounting document created. Stock visible in MB52 and MMBE under consignment stock type.",
        whatSAPDoesAR:
          "يرحِّل إيصال البضاعة إلى مخزون الأمانة الخاص بالمورِّد (مؤشر المخزون الخاص K). لا يُنشأ مستند محاسبة. المخزون مرئي في MB52 وMMBE تحت نوع مخزون الأمانة.",
        expectedOutputEN: "Consignment stock received. Vendor still owns the goods. No liability posted.",
        expectedOutputAR: "تم استلام مخزون الأمانة. لا يزال المورِّد يملك البضائع. لم تُرحَّل أي مديونية.",
      },
      {
        id: "mm-supplier-consignment-step-5",
        stepNumber: 5,
        titleEN: "Transfer Consignment Stock to AWP Own Stock",
        titleAR: "تحويل مخزون الأمانة إلى مخزون الوطنية الخاص",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "When goods are needed for production or use, transfer the required quantity from vendor consignment stock to AWP unrestricted own stock using movement type 411 K. This creates the liability to the vendor.",
        whatToDoAR:
          "عند الحاجة إلى البضائع للإنتاج أو الاستخدام، حوِّل الكمية المطلوبة من مخزون الأمانة الخاص بالمورِّد إلى المخزون غير المقيَّد المملوك للوطنية باستخدام نوع الحركة 411 K. يُنشئ ذلك المديونية تجاه المورِّد.",
        whatSAPDoesEN:
          "Posts MT 411 K. Transfers stock from vendor consignment to AWP own stock. Creates an accounting document recording the liability to the vendor at the consignment info record price.",
        whatSAPDoesAR:
          "يرحِّل نوع الحركة 411 K. ينقل المخزون من أمانة المورِّد إلى مخزون الوطنية الخاص. يُنشئ مستند محاسبة يسجِّل المديونية تجاه المورِّد بسعر سجل معلومات الأمانة.",
        expectedOutputEN: "Stock transferred to AWP. Liability to vendor created.",
        expectedOutputAR: "تم نقل المخزون إلى الوطنية. تم إنشاء المديونية تجاه المورِّد.",
      },
      {
        id: "mm-supplier-consignment-step-6",
        stepNumber: 6,
        titleEN: "Create Settlement Document (MRKO)",
        titleAR: "إنشاء مستند التسوية (MRKO)",
        tCode: "MRKO",
        role: "AP Accountant",
        whatToDoEN:
          "Run MRKO to create the consignment settlement document. MRKO calculates the amounts owed to the vendor based on all 411 K withdrawals since the last settlement. Post the settlement to generate the vendor invoice and clear the consignment liability.",
        whatToDoAR:
          "شغِّل MRKO لإنشاء مستند تسوية الأمانة. تحسب MRKO المبالغ المستحقة للمورِّد بناءً على جميع عمليات السحب من نوع الحركة 411 K منذ آخر تسوية. رحِّل التسوية لإنشاء فاتورة المورِّد وتصفية مديونية الأمانة.",
        whatSAPDoesEN:
          "Creates a consignment settlement document (vendor invoice). Posts accounts payable entry for the total quantity withdrawn × consignment price. Clears the consignment liability.",
        whatSAPDoesAR:
          "يُنشئ مستند تسوية الأمانة (فاتورة المورِّد). يرحِّل قيد الحسابات الدائنة بإجمالي الكمية المسحوبة × سعر الأمانة. يُصفِّي مديونية الأمانة.",
        expectedOutputEN: "Settlement document posted. Vendor payable created for consumed consignment quantities.",
        expectedOutputAR: "تم ترحيل مستند التسوية. تم إنشاء مديونية المورِّد للكميات المستهلَكة من الأمانة.",
      },
    ],
  },

  // ─── MM: Transfer to Production WIP ───────────────────────────────────────
  {
    id: "mm-transfer-to-production-wip",
    icon: "🔁",
    duration: "15 min",
    titleEN: "Transfer to Production – WIP",
    titleAR: "تحويل إلى الإنتاج – تحت التشغيل (WIP)",
    descriptionEN:
      "Replenish WIP production storage locations from central warehouses. Stage materials using ZMF60/MB21 and then transfer via MIGO_TR (MT 311) from raw material storage to the production area. ~80 transfers/day across all plants.",
    descriptionAR:
      "تجديد مواقع تخزين الإنتاج تحت التشغيل من المستودعات المركزية. تجهيز المواد باستخدام ZMF60/MB21 ثم التحويل عبر MIGO_TR (نوع الحركة 311) من مستودع المواد الخام إلى منطقة الإنتاج. نحو 80 تحويل يوميًّا في جميع المصانع.",
    module: "MM",
    roles: ["SFC Responsible", "Stock Keeper"],
    steps: [
      {
        id: "mm-transfer-production-wip-step-1",
        stepNumber: 1,
        titleEN: "Material Staging",
        titleAR: "تجهيز المواد",
        tCode: "ZMF60 / MB21",
        role: "SFC Responsible",
        whatToDoEN:
          "Run material staging for the production order to request materials from the raw material warehouse to the production area storage location. ZMF60 (Fiori: Stage Materials for Production) automatically creates reservations. MB21 can be used to create manual reservations if needed.",
        whatToDoAR:
          "شغِّل تجهيز المواد لأمر الإنتاج لطلب المواد من مستودع المواد الخام إلى موقع تخزين منطقة الإنتاج. تُنشئ ZMF60 (Fiori: تجهيز مواد للإنتاج) الحجوزات تلقائيًّا. يمكن استخدام MB21 لإنشاء الحجوزات اليدوية عند الحاجة.",
        whatSAPDoesEN:
          "Creates material reservations for the production order components, visible to the stock keeper for transfer.",
        whatSAPDoesAR:
          "يُنشئ حجوزات المواد لمكونات أمر الإنتاج، مرئية لأمين المخزون للتحويل.",
        expectedOutputEN: "Material reservations created. Stock keeper alerted to transfer materials.",
        expectedOutputAR: "تم إنشاء حجوزات المواد. تم تنبيه أمين المخزون لتحويل المواد.",
      },
      {
        id: "mm-transfer-production-wip-step-2",
        stepNumber: 2,
        titleEN: "Transfer Materials to Production WIP Storage",
        titleAR: "تحويل المواد إلى موقع تخزين الإنتاج WIP",
        tCode: "MIGO_TR",
        role: "Stock Keeper",
        whatToDoEN:
          "In MIGO (Post Goods Movement), select movement type 311 to transfer materials from the raw material central storage location to the WIP production storage location. Reference the reservation created in the previous step. Confirm the transferred quantities and save.",
        whatToDoAR:
          "في MIGO (ترحيل حركة البضائع)، اختر نوع الحركة 311 لتحويل المواد من موقع التخزين المركزي للمواد الخام إلى موقع تخزين WIP للإنتاج. استند إلى الحجز المُنشأ في الخطوة السابقة. أكِّد الكميات المحوَّلة واحفظ.",
        whatSAPDoesEN:
          "Posts MT 311 transfer. Reduces stock in the raw material storage location and increases stock in the WIP production storage location. Creates a material document and accounting entry (debit WIP location, credit RM location — both within the same plant, so no P&L impact).",
        whatSAPDoesAR:
          "يرحِّل تحويل نوع الحركة 311. يخفض المخزون في موقع تخزين المواد الخام ويزيده في موقع تخزين WIP للإنتاج. يُنشئ مستند مادة وقيد محاسبة (مدين موقع WIP، دائن موقع المواد الخام — كلاهما في نفس المصنع فلا تأثير على الأرباح والخسائر).",
        expectedOutputEN:
          "Materials transferred to WIP production storage. Production team can now issue materials to the order.",
        expectedOutputAR:
          "تم تحويل المواد إلى موقع تخزين WIP للإنتاج. يمكن لفريق الإنتاج الآن إصدار المواد على الأمر.",
      },
    ],
  },

  // ─── MM: Returns from Branches ────────────────────────────────────────────
  {
    id: "mm-returns-from-branches",
    icon: "↩️",
    duration: "30–60 min",
    titleEN: "Returns from Branches (STO Returns with Delivery)",
    titleAR: "المرتجعات من الفروع (أوامر نقل المخزون المرتجعة مع التسليم)",
    descriptionEN:
      "Covers three return scenarios from distribution branches back to central warehouse: (1) Expired goods blocked at branch transferred to Q099 then scrapped; (2) Damaged goods blocked at branch transferred to Q098 complaints storage; (3) Expired goods returned by customer to branch then forwarded to Q099 and scrapped. ~19 STOs/day. STO document type YRUD, delivery type YNL2, purchasing group PG999.",
    descriptionAR:
      "تغطي ثلاثة سيناريوهات للمرتجعات من فروع التوزيع إلى المستودع المركزي: (1) بضائع منتهية الصلاحية موقوفة في الفرع تُحوَّل إلى Q099 ثم تُهلَك؛ (2) بضائع تالفة موقوفة في الفرع تُحوَّل إلى مخزن الشكاوى Q098؛ (3) بضائع منتهية الصلاحية مرتجعة من العميل إلى الفرع ثم تُحوَّل إلى Q099 وتُهلَك. ~19 أمر نقل يومياً. نوع مستند STO: YRUD، نوع التسليم: YNL2، مجموعة الشراء: PG999.",
    module: "MM",
    roles: [
      "Branch Warehouse Clerk",
      "Central Warehouse Supervisor",
      "MM Specialist",
      "Customer Service Representative",
    ],
    steps: [
      {
        id: "mm-returns-from-branches-step-1",
        stepNumber: 1,
        titleEN: "Block Expired / Damaged Stock at Branch (MIGO_TR)",
        titleAR: "تحويل المخزون المنتهي / التالف في الفرع إلى مخزن مقيد (MIGO_TR)",
        tCode: "MIGO_TR",
        role: "Branch Warehouse Clerk",
        whatToDoEN:
          "In MIGO_TR, transfer expired goods from unrestricted branch stock to blocked stock (movement type 344) or transfer quality-inspection stock to blocked (movement type 322/344 depending on reason). For expired goods: select MT344 from unrestricted to blocked. For damaged goods returned from quality inspection: use the relevant quality movement. Enter the plant, storage location, material, batch, and quantity. Save.",
        whatToDoAR:
          "في MIGO_TR، حوِّل البضائع المنتهية الصلاحية من المخزون غير المقيد في الفرع إلى المخزون الموقوف (نوع الحركة 344)، أو حوِّل مخزون فحص الجودة إلى موقوف (322/344 حسب السبب). للبضائع المنتهية: اختر MT344 من غير مقيد إلى موقوف. للتالف المرتجع من فحص الجودة: استخدم حركة الجودة المناسبة. أدخل المصنع وموقع التخزين والمادة والدفعة والكمية. احفظ.",
        whatSAPDoesEN:
          "Posts a stock transfer document. Moves quantity from unrestricted (or quality) to blocked stock in the branch plant. No financial posting at this stage; stock is now isolated pending return to central warehouse.",
        whatSAPDoesAR:
          "يرحِّل مستند تحويل المخزون. ينقل الكمية من المخزون غير المقيد (أو الجودة) إلى المخزون الموقوف في مصنع الفرع. لا يوجد قيد مالي في هذه المرحلة؛ المخزون الآن معزول في انتظار إعادته إلى المستودع المركزي.",
        expectedOutputEN:
          "Material document posted. Blocked stock quantity increased at branch. Goods are ready for STO return to central warehouse.",
        expectedOutputAR:
          "تم ترحيل مستند المادة. زيادة كمية المخزون الموقوف في الفرع. البضائع جاهزة لإعادتها إلى المستودع المركزي عبر STO.",
      },
      {
        id: "mm-returns-from-branches-step-2",
        stepNumber: 2,
        titleEN: "Create Return STO at Central Warehouse (ME21N – Type YRUD)",
        titleAR: "إنشاء أمر نقل مخزون مرتجع في المستودع المركزي (ME21N – نوع YRUD)",
        tCode: "ME21N",
        role: "Central Warehouse Supervisor",
        whatToDoEN:
          "In ME21N, create a return Stock Transport Order. Set document type to YRUD (AWP return STO type). Supplying plant = branch plant, receiving plant = central warehouse. Item category = U (stock transfer). Enter material, quantity (to match blocked stock at branch), and storage location Q099 (for expired) or Q098 (for damaged/complaints). Purchasing group = 999. Save.",
        whatToDoAR:
          "في ME21N، أنشئ أمر نقل مخزون مرتجع. اضبط نوع المستند على YRUD (نوع STO المرتجع لـ AWP). مصنع التوريد = مصنع الفرع، مصنع الاستلام = المستودع المركزي. فئة البند = U (تحويل مخزون). أدخل المادة والكمية (لتطابق المخزون الموقوف في الفرع) وموقع التخزين Q099 (للمنتهي) أو Q098 (للتالف/الشكاوى). مجموعة الشراء = 999. احفظ.",
        whatSAPDoesEN:
          "Creates a return purchase order of type YRUD with delivery relevance. STO is now open for outbound delivery creation from the branch.",
        whatSAPDoesAR:
          "ينشئ أمر شراء مرتجع من نوع YRUD بصلاحية تسليم. STO مفتوح الآن لإنشاء تسليم صادر من الفرع.",
        expectedOutputEN:
          "Return STO (YRUD) created. PO number generated. Branch can now create outbound delivery.",
        expectedOutputAR:
          "تم إنشاء STO المرتجع (YRUD). تم توليد رقم PO. يمكن للفرع الآن إنشاء تسليم صادر.",
      },
      {
        id: "mm-returns-from-branches-step-3",
        stepNumber: 3,
        titleEN: "Create Outbound Delivery from Branch (VL10D / VL10C → VL02N)",
        titleAR: "إنشاء التسليم الصادر من الفرع (VL10D / VL10C → VL02N)",
        tCode: "VL10D",
        role: "Branch Warehouse Clerk",
        whatToDoEN:
          "In VL10D (or VL10C for customer-return path), select the YRUD STO and create the outbound delivery. The delivery type will be YNL2 (AWP return delivery). In VL02N, open the delivery and post goods issue from the branch. This records the goods leaving the branch's blocked stock. Print the delivery note for transport.",
        whatToDoAR:
          "في VL10D (أو VL10C لمسار مرتجع العميل)، اختر STO من نوع YRUD وأنشئ التسليم الصادر. سيكون نوع التسليم YNL2 (تسليم مرتجع AWP). في VL02N، افتح التسليم وارحّل إصدار البضائع من الفرع. هذا يسجِّل خروج البضائع من المخزون الموقوف في الفرع. اطبع إيصال التسليم للنقل.",
        whatSAPDoesEN:
          "Creates a YNL2 delivery document. On goods issue posting, reduces blocked stock at branch and creates a goods-in-transit posting. Financial accounting entry created (COGS / interim transit account).",
        whatSAPDoesAR:
          "ينشئ مستند تسليم من نوع YNL2. عند ترحيل إصدار البضائع، يخفض المخزون الموقوف في الفرع وينشئ قيد بضائع في الطريق. يُنشأ قيد محاسبة مالية (تكلفة البضائع المباعة / حساب العبور المؤقت).",
        expectedOutputEN:
          "Goods issue posted from branch. YNL2 delivery document confirmed. Goods are in transit to central warehouse.",
        expectedOutputAR:
          "تم ترحيل إصدار البضائع من الفرع. تأكيد مستند تسليم YNL2. البضائع في الطريق إلى المستودع المركزي.",
      },
      {
        id: "mm-returns-from-branches-step-4",
        stepNumber: 4,
        titleEN: "Monitor Goods in Transit (MB5T)",
        titleAR: "متابعة البضائع في الطريق (MB5T)",
        tCode: "MB5T",
        role: "Central Warehouse Supervisor",
        whatToDoEN:
          "In MB5T, run the stock in transit report to verify the returned goods appear in transit from the branch to the central warehouse. Confirm quantities match the YRUD STO. This step ensures nothing is lost before the goods receipt.",
        whatToDoAR:
          "في MB5T، شغِّل تقرير المخزون في الطريق للتحقق من ظهور البضائع المرتجعة في الطريق من الفرع إلى المستودع المركزي. أكِّد تطابق الكميات مع STO من نوع YRUD. تضمن هذه الخطوة عدم ضياع أي شيء قبل استلام البضائع.",
        whatSAPDoesEN:
          "Displays all stock quantities in transit between plants. Confirms open STO quantity awaiting goods receipt at central warehouse.",
        whatSAPDoesAR:
          "يعرض جميع كميات المخزون في الطريق بين المصانع. يؤكد كمية STO المفتوحة في انتظار استلام البضائع في المستودع المركزي.",
        expectedOutputEN:
          "In-transit quantity visible in MB5T. Ready for goods receipt at central warehouse.",
        expectedOutputAR:
          "كمية العبور مرئية في MB5T. جاهز لاستلام البضائع في المستودع المركزي.",
      },
      {
        id: "mm-returns-from-branches-step-5",
        stepNumber: 5,
        titleEN: "Post Goods Receipt at Central Warehouse (MIGO_GR)",
        titleAR: "ترحيل استلام البضائع في المستودع المركزي (MIGO_GR)",
        tCode: "MIGO_GR",
        role: "Central Warehouse Supervisor",
        whatToDoEN:
          "In MIGO_GR, receive against the YRUD STO purchase order. Select movement type 101 (GR for PO). Specify the receiving storage location: Q099 for expired goods, Q098 for damaged/complaints goods. Confirm batch and quantity, then post.",
        whatToDoAR:
          "في MIGO_GR، استلم بالاستناد إلى أمر الشراء YRUD. اختر نوع الحركة 101 (استلام البضائع لأمر الشراء). حدد موقع التخزين المستلم: Q099 للبضائع المنتهية الصلاحية، Q098 للتالف/الشكاوى. أكِّد الدفعة والكمية ثم ارحِّل.",
        whatSAPDoesEN:
          "Posts GR movement type 101. Increases blocked/returns stock at central warehouse in the specified storage location (Q099 or Q098). Clears the in-transit quantity. Creates material document and accounting entry.",
        whatSAPDoesAR:
          "يرحِّل نوع حركة استلام البضائع 101. يزيد مخزون الموقوف/المرتجعات في المستودع المركزي في موقع التخزين المحدد (Q099 أو Q098). يصفِّي كمية العبور. ينشئ مستند مادة وقيد محاسبة.",
        expectedOutputEN:
          "GR posted. Returned goods now in Q099 (expired) or Q098 (damaged) storage at central warehouse. STO is complete.",
        expectedOutputAR:
          "تم ترحيل استلام البضائع. البضائع المرتجعة الآن في مخزن Q099 (منتهية) أو Q098 (تالفة) في المستودع المركزي. STO مكتمل.",
      },
      {
        id: "mm-returns-from-branches-step-6",
        stepNumber: 6,
        titleEN: "Scrap Expired Goods at Central Warehouse (MIGO – MT551/553)",
        titleAR: "إهلاك البضائع المنتهية في المستودع المركزي (MIGO – MT551/553)",
        tCode: "MIGO",
        role: "MM Specialist",
        whatToDoEN:
          "For expired goods in Q099: in MIGO, post goods issue with movement type 551 (scrapping from unrestricted) or 553 (scrapping from blocked stock) as applicable. Reference the destruction committee decision. Enter material, batch, quantity, plant, and storage location Q099. Save. For damaged goods in Q098: process separately per the complaints resolution procedure.",
        whatToDoAR:
          "للبضائع المنتهية في Q099: في MIGO، ارحِّل إصدار البضائع بنوع الحركة 551 (إهلاك من غير مقيد) أو 553 (إهلاك من موقوف) حسب الانطباق. استند إلى قرار لجنة الإتلاف. أدخل المادة والدفعة والكمية والمصنع وموقع التخزين Q099. احفظ. للتالف في Q098: يُعالَج بشكل منفصل وفق إجراء تسوية الشكاوى.",
        whatSAPDoesEN:
          "Posts scrapping movement. Reduces expired stock in Q099 to zero. Creates material document and financial entry (debit scrapping loss account, credit stock account). Batch is consumed.",
        whatSAPDoesAR:
          "يرحِّل حركة الإهلاك. يخفض مخزون المنتهية في Q099 إلى الصفر. ينشئ مستند مادة وقيد مالي (مدين حساب خسارة الإهلاك، دائن حساب المخزون). تُستهلَك الدفعة.",
        expectedOutputEN:
          "Expired goods scrapped. Q099 stock cleared. Financial loss posted. Process complete.",
        expectedOutputAR:
          "تم إهلاك البضائع المنتهية. تم تصفية مخزون Q099. تم ترحيل الخسارة المالية. العملية مكتملة.",
      },
    ],
  },

  // ─── MM: Month-End Closing ─────────────────────────────────────────────────
  {
    id: "mm-month-end-closing",
    icon: "📅",
    duration: "1–2 days",
    titleEN: "MM Month-End Closing",
    titleAR: "إغلاق نهاية الشهر – إدارة المواد",
    descriptionEN:
      "Monthly process performed by the MM team at period-end to ensure all goods movements, deliveries, and invoices are properly posted before the accounting period closes. Covers inventory adjustments, open deliveries, goods-in-transit, GR/IR clearing, and period opening. Performed once per month.",
    descriptionAR:
      "عملية شهرية يُنفِّذها فريق إدارة المواد في نهاية الفترة لضمان ترحيل جميع حركات البضائع والتسليمات والفواتير بشكل صحيح قبل إغلاق فترة المحاسبة. تشمل تسويات المخزون والتسليمات المفتوحة والبضائع في الطريق وتصفية GR/IR وفتح الفترة الجديدة. تُنفَّذ مرة واحدة شهرياً.",
    module: "MM",
    roles: [
      "MM Specialist",
      "Warehouse Supervisor",
      "Finance Controller",
    ],
    steps: [
      {
        id: "mm-month-end-closing-step-1",
        stepNumber: 1,
        titleEN: "Post Any Remaining Inventory Adjustments (MIGO)",
        titleAR: "ترحيل أي تسويات مخزون متبقية (MIGO)",
        tCode: "MIGO",
        role: "Warehouse Supervisor",
        whatToDoEN:
          "Before closing the period, use MIGO to post any pending inventory adjustments (e.g., inventory differences from physical counts, goods issue reversals, or transfers that were not completed during the month). Ensure all goods movements are posted and no documents are parked or incomplete.",
        whatToDoAR:
          "قبل إغلاق الفترة، استخدم MIGO لترحيل أي تسويات مخزون معلقة (مثل فوارق المخزون من الجرد الفعلي، أو عكوسات إصدار البضائع، أو التحويلات غير المكتملة خلال الشهر). تأكد من ترحيل جميع حركات البضائع وعدم وجود مستندات موقوفة أو غير مكتملة.",
        whatSAPDoesEN:
          "Posts remaining inventory movement documents. Updates stock balances and creates corresponding accounting entries. All movements must be posted before period-close.",
        whatSAPDoesAR:
          "يرحِّل مستندات حركة المخزون المتبقية. يُحدِّث أرصدة المخزون وينشئ القيود المحاسبية المقابلة. يجب ترحيل جميع الحركات قبل إغلاق الفترة.",
        expectedOutputEN:
          "All inventory adjustments posted. No pending MIGO documents.",
        expectedOutputAR:
          "تم ترحيل جميع تسويات المخزون. لا توجد مستندات MIGO معلقة.",
      },
      {
        id: "mm-month-end-closing-step-2",
        stepNumber: 2,
        titleEN: "Clear Goods Held in Quality / Blocked Stock (MIGO)",
        titleAR: "تصفية البضائع في فحص الجودة / المخزون الموقوف (MIGO)",
        tCode: "MIGO",
        role: "MM Specialist",
        whatToDoEN:
          "Review any materials still in quality inspection or blocked stock that should have been resolved during the month. Coordinate with QM to release or reject these lots. Post the appropriate movement in MIGO (e.g., MT321 to release from QI to unrestricted, or MT344 to move to blocked). Do not leave unresolved QI stock open at period end.",
        whatToDoAR:
          "راجع أي مواد لا تزال في فحص الجودة أو المخزون الموقوف كان يجب حلها خلال الشهر. نسِّق مع إدارة الجودة لتحرير أو رفض هذه الدفعات. ارحِّل الحركة المناسبة في MIGO (مثل MT321 للإفراج من فحص الجودة إلى غير مقيد، أو MT344 للنقل إلى موقوف). لا تترك مخزون فحص الجودة غير محلول في نهاية الفترة.",
        whatSAPDoesEN:
          "Posts stock status changes for QI and blocked stock. Updates stock categories. Ensures period-end balances are accurate by category.",
        whatSAPDoesAR:
          "يرحِّل تغييرات حالة المخزون لفحص الجودة والمخزون الموقوف. يُحدِّث فئات المخزون. يضمن دقة أرصدة نهاية الفترة حسب الفئة.",
        expectedOutputEN:
          "No open QI or blocked stock items that should be resolved. Period-end stock balances are clean.",
        expectedOutputAR:
          "لا توجد بنود مفتوحة في فحص الجودة أو المخزون الموقوف يجب حلها. أرصدة نهاية الفترة نظيفة.",
      },
      {
        id: "mm-month-end-closing-step-3",
        stepNumber: 3,
        titleEN: "Ensure All GRs for Month Are Posted (MIGO_GR)",
        titleAR: "التأكد من ترحيل جميع استلامات البضائع للشهر (MIGO_GR)",
        tCode: "MIGO_GR",
        role: "Warehouse Supervisor",
        whatToDoEN:
          "Review open purchase orders and confirm that all goods received physically before month-end have a corresponding goods receipt posted in MIGO_GR. If any GRs are missing, post them now using the actual delivery date as the posting date. Do not post GRs for goods not yet physically received.",
        whatToDoAR:
          "راجع أوامر الشراء المفتوحة وتأكد من أن جميع البضائع المستلمة فعلياً قبل نهاية الشهر لها استلام بضائع مرحَّل في MIGO_GR. إذا كانت هناك استلامات مفقودة، ارحِّلها الآن مستخدماً تاريخ التسليم الفعلي كتاريخ ترحيل. لا ترحِّل استلامات بضائع لبضائع لم تُستلَم فعلياً بعد.",
        whatSAPDoesEN:
          "Posts GR documents. Updates stock and creates GR/IR liability accounting entries. Ensures period-end stock and liability figures are complete.",
        whatSAPDoesAR:
          "يرحِّل مستندات استلام البضائع. يُحدِّث المخزون وينشئ قيود محاسبة مسؤولية GR/IR. يضمن اكتمال أرقام المخزون والمسؤولية في نهاية الفترة.",
        expectedOutputEN:
          "All physically received goods have a posted GR. No goods received without a material document.",
        expectedOutputAR:
          "جميع البضائع المستلمة فعلياً لها استلام بضائع مرحَّل. لا توجد بضائع مستلمة بدون مستند مادة.",
      },
      {
        id: "mm-month-end-closing-step-4",
        stepNumber: 4,
        titleEN: "Review and Close Open Outbound Deliveries (VL06G)",
        titleAR: "مراجعة وإغلاق التسليمات الصادرة المفتوحة (VL06G)",
        tCode: "VL06G",
        role: "MM Specialist",
        whatToDoEN:
          "In VL06G (Outbound Delivery Monitor), list all open outbound deliveries. Identify any deliveries where goods issue has not been posted but goods have physically left the warehouse. Post goods issue for these deliveries in VL02N. For deliveries where goods have not yet left, confirm with logistics and update the planned GI date accordingly.",
        whatToDoAR:
          "في VL06G (مراقب التسليمات الصادرة)، أدرج جميع التسليمات الصادرة المفتوحة. حدِّد أي تسليمات لم يُرحَّل فيها إصدار البضائع لكن البضائع غادرت المستودع فعلياً. ارحِّل إصدار البضائع لهذه التسليمات في VL02N. للتسليمات التي لم تغادر بعد، أكِّد مع اللوجستيات وحدِّث تاريخ GI المخطط وفقاً لذلك.",
        whatSAPDoesEN:
          "VL06G provides a list of open outbound deliveries. Posting goods issue in VL02N reduces stock and creates accounting entries. Period-end stock figures reflect actual physical inventory.",
        whatSAPDoesAR:
          "يوفر VL06G قائمة بالتسليمات الصادرة المفتوحة. يؤدي ترحيل إصدار البضائع في VL02N إلى تخفيض المخزون وإنشاء القيود المحاسبية. أرقام المخزون في نهاية الفترة تعكس المخزون الفعلي.",
        expectedOutputEN:
          "All outbound deliveries with goods physically shipped have GI posted. Open deliveries list is clean.",
        expectedOutputAR:
          "جميع التسليمات الصادرة التي شُحنت بضائعها فعلياً لها إصدار بضائع مرحَّل. قائمة التسليمات المفتوحة نظيفة.",
      },
      {
        id: "mm-month-end-closing-step-5",
        stepNumber: 5,
        titleEN: "Check Goods in Transit (MB5T / ME2W)",
        titleAR: "التحقق من البضائع في الطريق (MB5T / ME2W)",
        tCode: "MB5T",
        role: "MM Specialist",
        whatToDoEN:
          "Run MB5T to view all stock in transit between plants (from STOs). Confirm that all in-transit quantities are expected (i.e., the goods are actually on the road). Cross-check with ME2W to verify open STO purchase orders. If any in-transit stock should have been received already, expedite GR posting. Document any legitimate open transit for the finance team.",
        whatToDoAR:
          "شغِّل MB5T لعرض كل المخزون في الطريق بين المصانع (من أوامر نقل المخزون). أكِّد أن جميع كميات العبور متوقعة (أي البضائع في الطريق فعلاً). تحقق مع ME2W للتحقق من أوامر الشراء STO المفتوحة. إذا كان أي مخزون في الطريق يجب أن يكون قد استُلم بالفعل، عجِّل بترحيل الاستلام. وثِّق أي عبور مفتوح شرعي لفريق المالية.",
        whatSAPDoesEN:
          "MB5T displays stock-in-transit balances by plant/material/STO. ME2W shows open STO POs. Combined, they give a complete picture of goods movement between plants at period end.",
        whatSAPDoesAR:
          "يعرض MB5T أرصدة المخزون في الطريق حسب المصنع/المادة/STO. يُظهر ME2W أوامر الشراء STO المفتوحة. مجتمعَيْن، يُعطيان صورة كاملة لحركة البضائع بين المصانع في نهاية الفترة.",
        expectedOutputEN:
          "In-transit report reviewed. All in-transit quantities are legitimate open STOs. Finance team informed of any period-end transit balances.",
        expectedOutputAR:
          "تمت مراجعة تقرير العبور. جميع كميات العبور عبارة عن أوامر STO مفتوحة شرعية. تم إبلاغ فريق المالية بأي أرصدة عبور في نهاية الفترة.",
      },
      {
        id: "mm-month-end-closing-step-6",
        stepNumber: 6,
        titleEN: "Set Delivery Complete Flag for Open POs (ME22N / MASS)",
        titleAR: "تعيين علامة التسليم المكتمل للـ POs المفتوحة (ME22N / MASS)",
        tCode: "ME22N",
        role: "MM Specialist",
        whatToDoEN:
          "Review purchase orders that have partial deliveries and where no further goods are expected. In ME22N, set the 'Delivery Completed' flag on the relevant items so the PO is closed for further goods receipts. For bulk updates, use MASS (Mass Maintenance) to flag multiple PO items at once. This prevents phantom open purchase commitments from appearing in the next period.",
        whatToDoAR:
          "راجع أوامر الشراء التي لها تسليمات جزئية ولا يُتوقع تسليم بضائع أخرى. في ME22N، عيِّن علامة 'التسليم مكتمل' على البنود ذات الصلة حتى يُغلَق أمر الشراء لاستلامات البضائع الإضافية. للتحديثات المجمعة، استخدم MASS (الصيانة الجماعية) لتعليم عدة بنود PO مرة واحدة. هذا يمنع ظهور التزامات شراء مفتوحة وهمية في الفترة التالية.",
        whatSAPDoesEN:
          "ME22N/MASS updates the delivery completion indicator on PO items. SAP treats these items as closed for GR purposes. Reduces open purchase order commitments in financial reporting.",
        whatSAPDoesAR:
          "يُحدِّث ME22N/MASS مؤشر اكتمال التسليم على بنود أمر الشراء. يتعامل SAP مع هذه البنود باعتبارها مغلقة لأغراض استلام البضائع. يخفض التزامات أوامر الشراء المفتوحة في التقارير المالية.",
        expectedOutputEN:
          "Delivery complete flag set on all PO items with no further expected deliveries. Open commitments report is accurate.",
        expectedOutputAR:
          "تم تعيين علامة اكتمال التسليم على جميع بنود أمر الشراء التي لا تُتوقع لها تسليمات أخرى. تقرير الالتزامات المفتوحة دقيق.",
      },
      {
        id: "mm-month-end-closing-step-7",
        stepNumber: 7,
        titleEN: "Post Physical Inventory Differences (MI20 / MI07)",
        titleAR: "ترحيل فوارق الجرد الفعلي (MI20 / MI07)",
        tCode: "MI20",
        role: "Warehouse Supervisor",
        whatToDoEN:
          "If a physical inventory count was conducted during the month, use MI20 to list inventory differences (variances between count and book stock). Review the differences report. Then use MI07 to post the inventory differences. This will adjust the book stock to match the physical count results and create the corresponding accounting entry.",
        whatToDoAR:
          "إذا أُجري جرد فعلي خلال الشهر، استخدم MI20 لسرد فوارق الجرد (الانحرافات بين العد والمخزون الدفتري). راجع تقرير الفوارق. ثم استخدم MI07 لترحيل فوارق الجرد. سيؤدي ذلك إلى تعديل المخزون الدفتري ليتطابق مع نتائج العد الفعلي وإنشاء القيد المحاسبي المقابل.",
        whatSAPDoesEN:
          "MI20 generates the difference list comparing counted vs book quantities. MI07 posts the inventory adjustment — increases or decreases stock and creates P&L entries (inventory gain/loss accounts).",
        whatSAPDoesAR:
          "يُنشئ MI20 قائمة الفوارق مقارنةً بين الكميات المعدودة والكميات الدفترية. يرحِّل MI07 تسوية المخزون — يزيد أو يخفض المخزون وينشئ قيود الأرباح والخسائر (حسابات مكاسب/خسائر المخزون).",
        expectedOutputEN:
          "Inventory differences posted. Book stock matches physical count. Accounting entries created for variances.",
        expectedOutputAR:
          "تم ترحيل فوارق الجرد. المخزون الدفتري يطابق العد الفعلي. تم إنشاء القيود المحاسبية للانحرافات.",
      },
      {
        id: "mm-month-end-closing-step-8",
        stepNumber: 8,
        titleEN: "Process Parked Invoices (MIRO)",
        titleAR: "معالجة الفواتير الموقوفة (MIRO)",
        tCode: "MIRO",
        role: "Finance Controller",
        whatToDoEN:
          "In MIRO, review all parked (held) invoices and complete or post them before the period closes. For invoices with GR/IR discrepancies, resolve with the purchasing team. Post all invoices that are legitimate and have matching GRs. Reject or cancel any invalid parked invoices. Ensure no valid supplier invoices are left in parked status at month-end.",
        whatToDoAR:
          "في MIRO، راجع جميع الفواتير الموقوفة (المحتجزة) وأكمِلها أو ارحِّلها قبل إغلاق الفترة. للفواتير التي لها تباينات GR/IR، حلِّها مع فريق المشتريات. ارحِّل جميع الفواتير الشرعية التي لها استلامات بضائع مطابقة. ارفض أو ألغِ أي فواتير موقوفة غير صالحة. تأكد من عدم وجود فواتير موردين صالحة في حالة موقوفة في نهاية الشهر.",
        whatSAPDoesEN:
          "MIRO posts supplier invoices. Creates accounts payable (liability) entries and updates GR/IR clearing account. Parked invoices do not create accounting entries until posted.",
        whatSAPDoesAR:
          "يرحِّل MIRO فواتير الموردين. ينشئ قيود الحسابات الدائنة (المطلوبات) ويُحدِّث حساب تصفية GR/IR. الفواتير الموقوفة لا تُنشئ قيوداً محاسبية حتى تُرحَّل.",
        expectedOutputEN:
          "All valid invoices posted. No parked invoices left at period end. AP balances updated.",
        expectedOutputAR:
          "تم ترحيل جميع الفواتير الصالحة. لا توجد فواتير موقوفة في نهاية الفترة. تم تحديث أرصدة الحسابات الدائنة.",
      },
      {
        id: "mm-month-end-closing-step-9",
        stepNumber: 9,
        titleEN: "Clear GR/IR Account (MR11)",
        titleAR: "تصفية حساب GR/IR (MR11)",
        tCode: "MR11",
        role: "Finance Controller",
        whatToDoEN:
          "In MR11, run the GR/IR clearing program. This tool identifies purchase order line items where a goods receipt has been posted but no invoice has been received (or vice versa) and the amounts are small enough to clear. Review the proposed postings and execute the clearing for legitimate differences. Large uncleared amounts should be investigated with the purchasing and AP teams.",
        whatToDoAR:
          "في MR11، شغِّل برنامج تصفية GR/IR. يحدِّد هذا الأداء بنود أوامر الشراء التي رُحِّل فيها استلام بضائع ولكن لم تُستلَم فاتورة (أو العكس) والمبالغ صغيرة بما يكفي للتصفية. راجع الترحيلات المقترحة ونفِّذ التصفية للفوارق الشرعية. يجب التحقيق في المبالغ غير المصفاة الكبيرة مع فرق المشتريات والحسابات الدائنة.",
        whatSAPDoesEN:
          "MR11 analyses GR/IR balances by PO line item and posts clearing entries to eliminate small differences. Reduces GR/IR clearing account balance to zero or minimal amounts.",
        whatSAPDoesAR:
          "يحلِّل MR11 أرصدة GR/IR حسب بند أمر الشراء ويرحِّل قيود التصفية للتخلص من الفوارق الصغيرة. يخفض رصيد حساب تصفية GR/IR إلى الصفر أو مبالغ ضئيلة.",
        expectedOutputEN:
          "GR/IR account cleared. Small discrepancies resolved. Large items escalated to purchasing/AP.",
        expectedOutputAR:
          "تم تصفية حساب GR/IR. تم حل الفوارق الصغيرة. تصعيد البنود الكبيرة إلى المشتريات/الحسابات الدائنة.",
      },
      {
        id: "mm-month-end-closing-step-10",
        stepNumber: 10,
        titleEN: "Open Next Period (MMPV)",
        titleAR: "فتح الفترة التالية (MMPV)",
        tCode: "MMPV",
        role: "MM Specialist",
        whatToDoEN:
          "In MMPV, open the next accounting period for materials management. Enter the company code, year, and period number to open. This allows goods movements to be posted in the new period starting from the first day of the month. Coordinate with the Finance team to confirm the current period is fully closed before opening the next one. Note: MMPV should be run by an authorized MM administrator only.",
        whatToDoAR:
          "في MMPV، افتح فترة المحاسبة التالية لإدارة المواد. أدخل كود الشركة والسنة ورقم الفترة للفتح. يسمح هذا بترحيل حركات البضائع في الفترة الجديدة اعتباراً من اليوم الأول من الشهر. نسِّق مع فريق المالية للتأكد من إغلاق الفترة الحالية بالكامل قبل فتح الفترة التالية. ملاحظة: يجب تشغيل MMPV بواسطة مسؤول MM مُفوَّض فقط.",
        whatSAPDoesEN:
          "MMPV opens the next materials management posting period. New period is now active for goods movements. Previous period remains open for any late adjustments until formally closed.",
        whatSAPDoesAR:
          "يفتح MMPV فترة الترحيل التالية لإدارة المواد. الفترة الجديدة نشطة الآن لحركات البضائع. تبقى الفترة السابقة مفتوحة لأي تسويات متأخرة حتى إغلاقها رسمياً.",
        expectedOutputEN:
          "Next period opened in MMPV. Goods movements can be posted in the new period. Month-end closing complete.",
        expectedOutputAR:
          "تم فتح الفترة التالية في MMPV. يمكن الآن ترحيل حركات البضائع في الفترة الجديدة. اكتمل إغلاق نهاية الشهر.",
      },
    ],
  },

  // ─── MM: Goods Issue for Sales ─────────────────────────────────────────────
  {
    id: "mm-goods-issue-sales",
    icon: "🚚",
    duration: "20–30 min",
    titleEN: "Goods Issue for Sales (Outbound Delivery)",
    titleAR: "إصدار البضائع للمبيعات (التسليم الصادر)",
    descriptionEN:
      "Daily process for issuing goods to fulfil customer sales orders. A sales order is created, an outbound delivery is generated with a pick list, warehouse staff manually select batches using FIFO (nearest expiry date first), and goods issue is posted. ~1,000 deliveries/day. Batch selection must follow FIFO; batches cannot be changed after delivery is created.",
    descriptionAR:
      "عملية يومية لإصدار البضائع لتنفيذ أوامر المبيعات للعملاء. يُنشأ أمر مبيعات، يُنشأ تسليم صادر مع قائمة انتقاء، يختار موظفو المستودع الدفعات يدوياً باستخدام FIFO (أقرب تاريخ انتهاء صلاحية أولاً)، ويُرحَّل إصدار البضائع. ~1000 تسليم/يوم. يجب أن يتبع اختيار الدفعات FIFO؛ لا يمكن تغيير الدفعات بعد إنشاء التسليم.",
    module: "MM",
    roles: [
      "Sales Representative",
      "Warehouse Picker",
      "Warehouse Supervisor",
    ],
    steps: [
      {
        id: "mm-goods-issue-sales-step-1",
        stepNumber: 1,
        titleEN: "Create Sales Order (VA01)",
        titleAR: "إنشاء أمر المبيعات (VA01)",
        tCode: "VA01",
        role: "Sales Representative",
        whatToDoEN:
          "In VA01, create a new sales order. Select the appropriate order type and sales organization. Enter customer number, requested delivery date, and line items with material codes and quantities. Confirm pricing and any applicable discounts. Save the sales order. The system will check availability and create a schedule line.",
        whatToDoAR:
          "في VA01، أنشئ أمر مبيعات جديداً. اختر نوع الأمر المناسب ومنظمة المبيعات. أدخل رقم العميل وتاريخ التسليم المطلوب وبنود البند مع أكواد المواد والكميات. أكِّد التسعير وأي خصومات قابلة للتطبيق. احفظ أمر المبيعات. سيتحقق النظام من التوافر وينشئ سطر جدولة.",
        whatSAPDoesEN:
          "Creates a sales order document. Checks credit limit and material availability (ATP). Confirms committed quantities and delivery date. Triggers requirements planning for procurement/production if needed.",
        whatSAPDoesAR:
          "ينشئ مستند أمر مبيعات. يتحقق من حد الائتمان وتوافر المواد (ATP). يؤكد الكميات الملتزمة وتاريخ التسليم. يُشغِّل تخطيط المتطلبات للمشتريات/الإنتاج إذا لزم الأمر.",
        expectedOutputEN:
          "Sales order created. Order number generated. Availability confirmed and delivery date committed.",
        expectedOutputAR:
          "تم إنشاء أمر المبيعات. تم توليد رقم الأمر. تم تأكيد التوافر والالتزام بتاريخ التسليم.",
      },
      {
        id: "mm-goods-issue-sales-step-2",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery and Print Pick List (VL10C)",
        titleAR: "إنشاء التسليم الصادر وطباعة قائمة الانتقاء (VL10C)",
        tCode: "VL10C",
        role: "Warehouse Supervisor",
        whatToDoEN:
          "In VL10C (Delivery Due List for Customer Orders), select sales orders due for delivery. Create outbound delivery documents in batch. The system generates delivery documents with pick quantities. Print the pick list for the warehouse team. The pick list shows material, quantity, and storage location. Note: batch assignment is done manually by the picker — do NOT let SAP auto-assign batches.",
        whatToDoAR:
          "في VL10C (قائمة التسليم المستحق لأوامر العملاء)، اختر أوامر المبيعات المستحقة للتسليم. أنشئ مستندات التسليم الصادر على دفعات. يُنشئ النظام مستندات التسليم مع كميات الانتقاء. اطبع قائمة الانتقاء لفريق المستودع. تُظهر قائمة الانتقاء المادة والكمية وموقع التخزين. ملاحظة: يتم تعيين الدفعات يدوياً من قِبل المنتقي — لا تدع SAP يُعيِّن الدفعات تلقائياً.",
        whatSAPDoesEN:
          "Creates outbound delivery documents from due sales order schedule lines. Assigns picking quantities. Prints pick lists. Delivery document is now open for picking and goods issue.",
        whatSAPDoesAR:
          "ينشئ مستندات التسليم الصادر من سطور جدولة أوامر المبيعات المستحقة. يُعيِّن كميات الانتقاء. يطبع قوائم الانتقاء. مستند التسليم مفتوح الآن للانتقاء وإصدار البضائع.",
        expectedOutputEN:
          "Outbound delivery documents created. Pick list printed and issued to warehouse team.",
        expectedOutputAR:
          "تم إنشاء مستندات التسليم الصادر. تمت طباعة قائمة الانتقاء وإصدارها لفريق المستودع.",
      },
      {
        id: "mm-goods-issue-sales-step-3",
        stepNumber: 3,
        titleEN: "Manual Batch Picking (FIFO – Nearest Expiry First)",
        titleAR: "الانتقاء اليدوي للدفعات (FIFO – أقرب انتهاء صلاحية أولاً)",
        tCode: "",
        role: "Warehouse Picker",
        whatToDoEN:
          "Using the printed pick list, physically select the required materials from the warehouse. Always pick the batch with the nearest expiry date first (FIFO rule). Record the actual batch numbers and quantities on the pick list. Do not mix batches in the same delivery line. Bring the picked goods to the staging area and confirm with the supervisor. IMPORTANT: Once the delivery document is created, batch numbers cannot be changed in the system — get it right before confirming.",
        whatToDoAR:
          "باستخدام قائمة الانتقاء المطبوعة، انتقِ المواد المطلوبة فعلياً من المستودع. دائماً انتقِ الدفعة ذات أقرب تاريخ انتهاء صلاحية أولاً (قاعدة FIFO). سجِّل أرقام الدفعات والكميات الفعلية على قائمة الانتقاء. لا تخلط دفعات في نفس بند التسليم. أحضر البضائع المنتقاة إلى منطقة التجميع وأكِّد مع المشرف. مهم: بمجرد إنشاء مستند التسليم، لا يمكن تغيير أرقام الدفعات في النظام — تأكد من الصحة قبل التأكيد.",
        whatSAPDoesEN:
          "This step is a manual physical process — no SAP transaction. SAP is updated in the next step when batch numbers from the pick list are entered into the delivery document.",
        whatSAPDoesAR:
          "هذه الخطوة عملية يدوية فعلية — لا يوجد تنفيذ SAP. يُحدَّث SAP في الخطوة التالية عند إدخال أرقام الدفعات من قائمة الانتقاء في مستند التسليم.",
        expectedOutputEN:
          "Goods physically picked. Batch numbers recorded on pick list. Goods staged and ready for goods issue.",
        expectedOutputAR:
          "تم انتقاء البضائع فعلياً. تم تسجيل أرقام الدفعات على قائمة الانتقاء. البضائع مرحَّلة وجاهزة لإصدار البضائع.",
      },
      {
        id: "mm-goods-issue-sales-step-4",
        stepNumber: 4,
        titleEN: "Post Goods Issue (VL06G / VL02N)",
        titleAR: "ترحيل إصدار البضائع (VL06G / VL02N)",
        tCode: "VL02N",
        role: "Warehouse Supervisor",
        whatToDoEN:
          "In VL02N (or via VL06G monitor), open the outbound delivery. Enter the batch numbers and quantities confirmed by the picker. Verify that the FIFO batches match the pick list. Once confirmed, post the goods issue. This reduces stock and triggers billing. Alternatively, use VL06G to manage and post goods issue for multiple deliveries at once.",
        whatToDoAR:
          "في VL02N (أو عبر مراقب VL06G)، افتح التسليم الصادر. أدخل أرقام الدفعات والكميات التي أكدها المنتقي. تحقق من تطابق دفعات FIFO مع قائمة الانتقاء. بعد التأكيد، ارحِّل إصدار البضائع. يخفض هذا المخزون ويُشغِّل الفوترة. بديلاً، استخدم VL06G لإدارة وترحيل إصدار البضائع لعدة تسليمات في آنٍ واحد.",
        whatSAPDoesEN:
          "Posts goods issue movement type 601. Reduces unrestricted stock. Creates material document, accounting entry (COGS debit, inventory credit), and billing due list entry. Sales order schedule line is confirmed as delivered.",
        whatSAPDoesAR:
          "يرحِّل إصدار البضائع بنوع الحركة 601. يخفض المخزون غير المقيد. ينشئ مستند مادة وقيد محاسبة (مدين تكلفة البضائع المباعة، دائن المخزون) وقيد في قائمة الفوترة المستحقة. يُأكَّد سطر جدولة أمر المبيعات على أنه مسلَّم.",
        expectedOutputEN:
          "Goods issue posted. Stock reduced. Billing document due list updated. Delivery complete.",
        expectedOutputAR:
          "تم ترحيل إصدار البضائع. تم تخفيض المخزون. تم تحديث قائمة مستندات الفوترة المستحقة. التسليم مكتمل.",
      },
    ],
  },

  // ─── MM: Reservation Process ───────────────────────────────────────────────
  {
    id: "mm-reservation",
    icon: "📋",
    duration: "15–20 min",
    titleEN: "Reservation Process (Internal Goods Issue)",
    titleAR: "عملية الحجز (إصدار بضائع داخلي)",
    descriptionEN:
      "Process for internally reserving materials against a cost center or order, then issuing them from the warehouse. A reservation is created (MB21), a custom AWP reservation form is printed (YRES201, form F-MM-BH1-RES-01), the reservation is monitored (MB25), and goods are issued referencing the reservation (MIGO). ~25 reservations/day.",
    descriptionAR:
      "عملية لحجز المواد داخلياً مقابل مركز تكلفة أو أمر، ثم إصدارها من المستودع. يُنشأ الحجز (MB21)، يُطبع نموذج حجز AWP المخصص (YRES201، النموذج F-MM-BH1-RES-01)، يُتابَع الحجز (MB25)، وتُصدَر البضائع بالاستناد إلى الحجز (MIGO). ~25 حجزاً يومياً.",
    module: "MM",
    roles: [
      "Requester (Department Head / Cost Center Owner)",
      "Warehouse Clerk",
    ],
    steps: [
      {
        id: "mm-reservation-step-1",
        stepNumber: 1,
        titleEN: "Create Reservation (MB21)",
        titleAR: "إنشاء الحجز (MB21)",
        tCode: "MB21",
        role: "Requester (Department Head / Cost Center Owner)",
        whatToDoEN:
          "In MB21, create a goods reservation. Enter movement type 201 (goods issue to cost center) or the appropriate movement type for the consumption. Enter the plant, storage location, material number, quantity, and the cost center or order that will receive the cost. Set the requirements date (when the goods are needed). Save the reservation.",
        whatToDoAR:
          "في MB21، أنشئ حجز بضائع. أدخل نوع الحركة 201 (إصدار بضائع لمركز التكلفة) أو نوع الحركة المناسب للاستهلاك. أدخل المصنع وموقع التخزين ورقم المادة والكمية ومركز التكلفة أو الأمر الذي سيتلقى التكلفة. حدِّد تاريخ المتطلبات (متى تكون البضائع مطلوبة). احفظ الحجز.",
        whatSAPDoesEN:
          "Creates a reservation document (movement type 201 or other). Reduces available-to-pick quantity for the material but does not post a goods movement yet. Reservation number generated.",
        whatSAPDoesAR:
          "ينشئ مستند حجز (نوع الحركة 201 أو غيره). يخفض الكمية المتاحة للانتقاء للمادة لكن لا يرحِّل حركة بضائع بعد. يتم توليد رقم الحجز.",
        expectedOutputEN:
          "Reservation created. Reservation number generated. Materials are now reserved for the requester.",
        expectedOutputAR:
          "تم إنشاء الحجز. تم توليد رقم الحجز. المواد محجوزة الآن للطالب.",
      },
      {
        id: "mm-reservation-step-2",
        stepNumber: 2,
        titleEN: "Print Reservation Form (YRES201 – Form F-MM-BH1-RES-01)",
        titleAR: "طباعة نموذج الحجز (YRES201 – النموذج F-MM-BH1-RES-01)",
        tCode: "YRES201",
        role: "Requester (Department Head / Cost Center Owner)",
        whatToDoEN:
          "In YRES201 (AWP custom reservation print program), enter the reservation number created in MB21. Execute the report to print the AWP reservation form (custom form F-MM-BH1-RES-01). This form must be signed by the department head and presented to the warehouse when collecting the goods. The form serves as physical authorization for the goods issue.",
        whatToDoAR:
          "في YRES201 (برنامج طباعة الحجز المخصص لـ AWP)، أدخل رقم الحجز المنشأ في MB21. نفِّذ التقرير لطباعة نموذج حجز AWP (النموذج المخصص F-MM-BH1-RES-01). يجب أن يوقِّع مدير الإدارة على هذا النموذج ويُقدِّمه إلى المستودع عند استلام البضائع. يعمل النموذج كتفويض فعلي لإصدار البضائع.",
        whatSAPDoesEN:
          "YRES201 generates and prints the AWP-specific reservation form using the reservation data from MB21. No stock movement occurs at this step.",
        whatSAPDoesAR:
          "يُنشئ YRES201 ويطبع نموذج الحجز الخاص بـ AWP باستخدام بيانات الحجز من MB21. لا تحدث حركة مخزون في هذه الخطوة.",
        expectedOutputEN:
          "Reservation form printed (F-MM-BH1-RES-01). Form signed by department head. Ready to present to warehouse.",
        expectedOutputAR:
          "تمت طباعة نموذج الحجز (F-MM-BH1-RES-01). النموذج موقَّع من مدير الإدارة. جاهز للتقديم إلى المستودع.",
      },
      {
        id: "mm-reservation-step-3",
        stepNumber: 3,
        titleEN: "Monitor Open Reservations (MB25)",
        titleAR: "متابعة الحجوزات المفتوحة (MB25)",
        tCode: "MB25",
        role: "Warehouse Clerk",
        whatToDoEN:
          "In MB25, run the reservations list to view all open reservations. Filter by plant, movement type, or requirements date as needed. Use this report to plan daily warehouse operations and ensure reservations due today are fulfilled. Identify any overdue or cancelled reservations.",
        whatToDoAR:
          "في MB25، شغِّل قائمة الحجوزات لعرض جميع الحجوزات المفتوحة. رشِّح حسب المصنع أو نوع الحركة أو تاريخ المتطلبات حسب الحاجة. استخدم هذا التقرير لتخطيط عمليات المستودع اليومية والتأكد من تنفيذ الحجوزات المستحقة اليوم. حدِّد أي حجوزات متأخرة أو ملغاة.",
        whatSAPDoesEN:
          "MB25 displays a list of all open reservations filtered by the selection criteria. Shows reserved quantity, requirement date, cost center/order, and fulfillment status.",
        whatSAPDoesAR:
          "يعرض MB25 قائمة بجميع الحجوزات المفتوحة مرشَّحة حسب معايير الاختيار. يُظهر الكمية المحجوزة وتاريخ المتطلبات ومركز التكلفة/الأمر وحالة التنفيذ.",
        expectedOutputEN:
          "Reservations list displayed. Today's due reservations identified. Warehouse team prepared to fulfill them.",
        expectedOutputAR:
          "عرض قائمة الحجوزات. تحديد الحجوزات المستحقة اليوم. فريق المستودع مُعدٌّ لتنفيذها.",
      },
      {
        id: "mm-reservation-step-4",
        stepNumber: 4,
        titleEN: "Issue Goods Against Reservation (MIGO – MT201)",
        titleAR: "إصدار البضائع بالاستناد إلى الحجز (MIGO – MT201)",
        tCode: "MIGO",
        role: "Warehouse Clerk",
        whatToDoEN:
          "When the requester presents the signed reservation form, in MIGO select 'Goods Issue' and reference the reservation number (or enter movement type 201 directly with reference to reservation). Enter the quantity actually issued (may be less than reserved if partial). Verify that the cost center/order is correct. Post the goods issue. File the signed physical reservation form.",
        whatToDoAR:
          "عندما يُقدِّم الطالب نموذج الحجز الموقَّع، في MIGO اختر 'إصدار البضائع' واستند إلى رقم الحجز (أو أدخل نوع الحركة 201 مباشرةً مع الاستناد إلى الحجز). أدخل الكمية المصدَرة فعلياً (قد تكون أقل من المحجوزة في حالة الجزئي). تحقق من صحة مركز التكلفة/الأمر. ارحِّل إصدار البضائع. احفظ نموذج الحجز الفعلي الموقَّع.",
        whatSAPDoesEN:
          "Posts goods issue movement type 201. Reduces unrestricted stock. Creates material document and accounting entry (debit cost center expense account, credit inventory account). Reservation status updated to fulfilled (or partially fulfilled).",
        whatSAPDoesAR:
          "يرحِّل إصدار البضائع بنوع الحركة 201. يخفض المخزون غير المقيد. ينشئ مستند مادة وقيد محاسبة (مدين حساب مصروفات مركز التكلفة، دائن حساب المخزون). يُحدَّث حالة الحجز إلى مُنفَّذ (أو مُنفَّذ جزئياً).",
        expectedOutputEN:
          "Goods issued against reservation. Material document created. Cost center charged. Reservation fulfilled.",
        expectedOutputAR:
          "تم إصدار البضائع بالاستناد إلى الحجز. تم إنشاء مستند المادة. تم تحميل مركز التكلفة. تم تنفيذ الحجز.",
      },
    ],
  },

  // ─── MM: Petty Cash Purchasing ────────────────────────────────────────────
  {
    id: "mm-petty-cash-purchasing",
    icon: "💵",
    duration: "30–45 min",
    titleEN: "Purchasing with Petty Cash (Workshop / Maintenance)",
    titleAR: "الشراء بالنقد الصغير (الورشة / الصيانة)",
    descriptionEN:
      "Process for recording unplanned spare-part purchases made directly by maintenance departments using workshop petty cash, primarily at Qassim. The aim is to capture all cash transactions in SAP to measure their volume and control unplanned procurement. PO document type Y011, purchasing group 007. ~50 transactions/day.",
    descriptionAR:
      "عملية لتسجيل مشتريات قطع الغيار غير المخططة التي تُجريها أقسام الصيانة مباشرةً باستخدام النقد الصغير للورشة، وبصفة رئيسية في القصيم. الهدف هو تسجيل جميع معاملات النقد في SAP لقياس حجمها والتحكم في المشتريات غير المخططة. نوع مستند الشراء: Y011، مجموعة الشراء: 007. ~50 معاملة/يوم.",
    module: "MM",
    roles: [
      "Maintenance Requester",
      "Purchasing Representative",
      "Stock Keeper",
      "AP Accountant",
    ],
    steps: [
      {
        id: "mm-petty-cash-step-1",
        stepNumber: 1,
        titleEN: "Create Reservation (MB21)",
        titleAR: "إنشاء الحجز (MB21)",
        tCode: "MB21",
        role: "Maintenance Requester",
        whatToDoEN:
          "In MB21, create a goods reservation for the required spare parts. Enter movement type 201 (goods issue to cost center), plant (e.g. 1310 Fleet Central Workshop), relevant storage location (e.g. Q021, Q022, Q023, Q024, Q032), material, quantity, and the cost center. This establishes the internal requirement before purchasing.",
        whatToDoAR:
          "في MB21، أنشئ حجز بضائع لقطع الغيار المطلوبة. أدخل نوع الحركة 201 (إصدار بضائع لمركز التكلفة)، المصنع (مثل 1310 ورشة الأسطول المركزية)، موقع التخزين المناسب (مثل Q021، Q022، Q023، Q024، Q032)، المادة، الكمية، ومركز التكلفة. هذا يُحدِّد الاحتياج الداخلي قبل الشراء.",
        whatSAPDoesEN:
          "Creates a reservation document. Reserved quantity is tracked against the cost center. No goods movement posted yet.",
        whatSAPDoesAR:
          "ينشئ مستند حجز. يُتابَع المخزون المحجوز مقابل مركز التكلفة. لا تُرحَّل حركة بضائع بعد.",
        expectedOutputEN:
          "Reservation created with reservation number. Internal requirement documented.",
        expectedOutputAR:
          "تم إنشاء الحجز برقم الحجز. تم توثيق الاحتياج الداخلي.",
      },
      {
        id: "mm-petty-cash-step-2",
        stepNumber: 2,
        titleEN: "Create Purchase Requisition (ME51N)",
        titleAR: "إنشاء طلب الشراء (ME51N)",
        tCode: "ME51N",
        role: "Maintenance Requester",
        whatToDoEN:
          "In ME51N, create a purchase requisition for the items to be purchased with petty cash. Reference the reservation if applicable. Enter material description, quantity, unit of price, required delivery date, plant, and cost center account assignment. The PR is the formal internal request before the PO is created.",
        whatToDoAR:
          "في ME51N، أنشئ طلب شراء للعناصر التي سيتم شراؤها بالنقد الصغير. استند إلى الحجز إذا انطبق. أدخل وصف المادة والكمية ووحدة السعر وتاريخ التسليم المطلوب والمصنع وتعيين الحساب لمركز التكلفة. طلب الشراء هو الطلب الداخلي الرسمي قبل إنشاء أمر الشراء.",
        whatSAPDoesEN:
          "Creates a purchase requisition document. PR is now available for conversion to a purchase order by the purchasing team.",
        whatSAPDoesAR:
          "ينشئ مستند طلب شراء. طلب الشراء متاح الآن للتحويل إلى أمر شراء من قِبَل فريق المشتريات.",
        expectedOutputEN:
          "PR created. Purchasing representative notified to create PO.",
        expectedOutputAR:
          "تم إنشاء طلب الشراء. تم إبلاغ مسؤول المشتريات لإنشاء أمر الشراء.",
      },
      {
        id: "mm-petty-cash-step-3",
        stepNumber: 3,
        titleEN: "Create Petty Cash Purchase Order (ME21N – Type Y011)",
        titleAR: "إنشاء أمر شراء نقد صغير (ME21N – النوع Y011)",
        tCode: "ME21N",
        role: "Purchasing Representative",
        whatToDoEN:
          "In ME21N, create a purchase order with document type Y011 (Direct Procurement – Cash) and purchasing group 007 (Workshop – Petty Cash). Reference the purchase requisition. Enter the vendor (cash supplier), material, quantity, price, and delivery details. The PO authorizes the cash purchase. Print using custom form YPO_LOCAL (F-MM-J45-002).",
        whatToDoAR:
          "في ME21N، أنشئ أمر شراء بنوع المستند Y011 (شراء مباشر – نقد) ومجموعة الشراء 007 (ورشة – نقد صغير). استند إلى طلب الشراء. أدخل المورد (مورد النقد) والمادة والكمية والسعر وتفاصيل التسليم. يُجيز أمر الشراء عملية الشراء النقدي. اطبع باستخدام النموذج المخصص YPO_LOCAL (F-MM-J45-002).",
        whatSAPDoesEN:
          "Creates a purchase order of type Y011 in number range 4100000000–4199999999. PO is now released for goods receipt. Open purchase commitment recorded.",
        whatSAPDoesAR:
          "ينشئ أمر شراء من نوع Y011 في نطاق الأرقام 4100000000–4199999999. أمر الشراء محرَّر الآن لاستلام البضائع. يُسجَّل التزام الشراء المفتوح.",
        expectedOutputEN:
          "Petty cash PO created (type Y011). PO printed for cash purchase authorization.",
        expectedOutputAR:
          "تم إنشاء أمر شراء النقد الصغير (النوع Y011). تمت طباعة أمر الشراء لتفويض الشراء النقدي.",
      },
      {
        id: "mm-petty-cash-step-4",
        stepNumber: 4,
        titleEN: "Receive Goods at Storage Location (MIGO)",
        titleAR: "استلام البضائع في موقع التخزين (MIGO)",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "In MIGO, post goods receipt (movement type 101) against the Y011 purchase order. Enter the plant, storage location (e.g. Q021 Motor Pool 1, Q022 Motor Pool 2, Q032 EWS&Heavy Machine Spare Parts), material, batch if applicable, and quantity received. Print the material document using form Y_S4P_INV (F-MM-120-01).",
        whatToDoAR:
          "في MIGO، ارحِّل استلام البضائع (نوع الحركة 101) بالاستناد إلى أمر الشراء Y011. أدخل المصنع وموقع التخزين (مثل Q021 موقف السيارات 1، Q022 موقف السيارات 2، Q032 قطع غيار الماكينات الثقيلة) والمادة والدفعة إذا انطبق والكمية المستلمة. اطبع مستند المادة باستخدام النموذج Y_S4P_INV (F-MM-120-01).",
        whatSAPDoesEN:
          "Posts GR MT101. Increases stock in the specified storage location. Creates material document and accounting entry (debit stock account, credit GR/IR liability).",
        whatSAPDoesAR:
          "يرحِّل استلام البضائع MT101. يزيد المخزون في موقع التخزين المحدد. ينشئ مستند مادة وقيد محاسبة (مدين حساب المخزون، دائن مسؤولية GR/IR).",
        expectedOutputEN:
          "Goods received and in stock. Material document created and printed.",
        expectedOutputAR:
          "تم استلام البضائع وإضافتها للمخزون. تم إنشاء مستند المادة وطباعته.",
      },
      {
        id: "mm-petty-cash-step-5",
        stepNumber: 5,
        titleEN: "Enter Supplier Invoice (MIRO)",
        titleAR: "إدخال فاتورة المورد (MIRO)",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN:
          "In MIRO, post the supplier invoice against the Y011 purchase order to reimburse the petty cash. Enter invoice date, amount, and tax details. Verify the invoice matches the GR quantity and value. Post the invoice. This creates the accounts payable entry and clears the GR/IR account.",
        whatToDoAR:
          "في MIRO، ارحِّل فاتورة المورد بالاستناد إلى أمر الشراء Y011 لاسترداد النقد الصغير. أدخل تاريخ الفاتورة والمبلغ وتفاصيل الضريبة. تحقق من تطابق الفاتورة مع كمية وقيمة استلام البضائع. ارحِّل الفاتورة. ينشئ هذا قيد الحسابات الدائنة ويصفِّي حساب GR/IR.",
        whatSAPDoesEN:
          "Posts supplier invoice. Creates AP liability entry. Clears GR/IR account. Triggers payment run.",
        whatSAPDoesAR:
          "يرحِّل فاتورة المورد. ينشئ قيد مسؤولية الحسابات الدائنة. يصفِّي حساب GR/IR. يُشغِّل تشغيل الدفع.",
        expectedOutputEN:
          "Invoice posted. Petty cash reimbursement cycle complete. AP liability recorded.",
        expectedOutputAR:
          "تم ترحيل الفاتورة. اكتمل دورة استرداد النقد الصغير. تم تسجيل مسؤولية الحسابات الدائنة.",
      },
      {
        id: "mm-petty-cash-step-6",
        stepNumber: 6,
        titleEN: "Issue Reservation from Storage Location (MIGO)",
        titleAR: "إصدار الحجز من موقع التخزين (MIGO)",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "In MIGO, post goods issue (movement type 201) with reference to the reservation created in step 1. This transfers the cost from the inventory account to the maintenance cost center. Enter quantity issued and confirm the cost center assignment. Save.",
        whatToDoAR:
          "في MIGO، ارحِّل إصدار البضائع (نوع الحركة 201) بالاستناد إلى الحجز المنشأ في الخطوة 1. يحوِّل هذا التكلفة من حساب المخزون إلى مركز تكلفة الصيانة. أدخل الكمية المصدَرة وأكِّد تعيين مركز التكلفة. احفظ.",
        whatSAPDoesEN:
          "Posts MT201 goods issue. Reduces stock. Debits maintenance cost center. Reservation closed. Full petty cash procurement cycle complete.",
        whatSAPDoesAR:
          "يرحِّل إصدار البضائع MT201. يخفض المخزون. يُحمِّل مركز تكلفة الصيانة. يُغلَق الحجز. اكتملت دورة شراء النقد الصغير بالكامل.",
        expectedOutputEN:
          "Goods issued to maintenance cost center. Reservation fulfilled. Full cycle closed.",
        expectedOutputAR:
          "تم إصدار البضائع لمركز تكلفة الصيانة. تم تنفيذ الحجز. اكتمل الدورة الكاملة.",
      },
    ],
  },

  // ─── MM: Quotation for Procurement (RFQ) ──────────────────────────────────
  {
    id: "mm-quotation-procurement",
    icon: "📝",
    duration: "1–3 days",
    titleEN: "Quotation for Procurement (RFQ Process)",
    titleAR: "طلب عروض الأسعار (عملية RFQ)",
    descriptionEN:
      "Process for inviting vendors to submit quotations (bids) for supply of materials or services, comparing bids, selecting the best supplier, and updating the source of supply. RFQ document types YANL (local) and YANF (foreign). AWP custom comparison form YPUR01. ~100 RFQs/day.",
    descriptionAR:
      "عملية دعوة الموردين لتقديم عروض أسعار (مناقصات) لتوريد المواد أو الخدمات، ومقارنة العروض، واختيار أفضل مورد، وتحديث مصدر التوريد. أنواع مستندات RFQ: YANL (محلي) و YANF (أجنبي). نموذج المقارنة المخصص لـ AWP: YPUR01. ~100 طلب عروض/يوم.",
    module: "MM",
    roles: [
      "Purchaser",
      "Source of Supply Maintainer",
    ],
    steps: [
      {
        id: "mm-rfq-step-1",
        stepNumber: 1,
        titleEN: "Create Request for Quotation (ME41)",
        titleAR: "إنشاء طلب عرض الأسعار (ME41)",
        tCode: "ME41",
        role: "Purchaser",
        whatToDoEN:
          "In ME41, create a new Request for Quotation. Select document type YANL for local suppliers or YANF for foreign suppliers. Enter the collective number (= purchase requisition number for traceability), quotation submission deadline, delivery date, plant, and line items (material, quantity, unit of measure). Assign the RFQ to the relevant vendors. Fill in incoterms, incoterms location, terms of payment, and supplier quotation number fields as mandatory.",
        whatToDoAR:
          "في ME41، أنشئ طلب عرض أسعار جديداً. اختر نوع المستند YANL للموردين المحليين أو YANF للموردين الأجانب. أدخل الرقم الجماعي (= رقم طلب الشراء للتتبع)، الموعد النهائي لتقديم العروض، تاريخ التسليم، المصنع، وبنود الأصناف (المادة، الكمية، وحدة القياس). عيِّن طلب عرض الأسعار للموردين المعنيين. أدخل Incoterms وموقع Incoterms وشروط الدفع ورقم عرض المورد كحقول إلزامية.",
        whatSAPDoesEN:
          "Creates RFQ document in number range YL (5600000000–5699999999) for YANL or YF (5700000000–5799999999) for YANF. RFQ is sent to selected vendors for bidding.",
        whatSAPDoesAR:
          "ينشئ مستند RFQ في نطاق أرقام YL (5600000000–5699999999) لـ YANL أو YF (5700000000–5799999999) لـ YANF. يُرسَل RFQ إلى الموردين المختارين للمناقصة.",
        expectedOutputEN:
          "RFQ created. Vendors identified and RFQ ready to print and send.",
        expectedOutputAR:
          "تم إنشاء RFQ. تم تحديد الموردين وRFQ جاهز للطباعة والإرسال.",
      },
      {
        id: "mm-rfq-step-2",
        stepNumber: 2,
        titleEN: "List and Print RFQs (ME4S / ME9A)",
        titleAR: "عرض وطباعة طلبات عروض الأسعار (ME4S / ME9A)",
        tCode: "ME9A",
        role: "Purchaser",
        whatToDoEN:
          "Use ME4S to list all RFQs by collective number (linked to the purchase requisition). Then use ME9A to print the RFQ documents using AWP form YMM_RFQ (WRICEF: F-MM-ZM2-001). Send the printed or electronic RFQs to the selected vendors and request their quotations by the submission deadline.",
        whatToDoAR:
          "استخدم ME4S لعرض جميع RFQs حسب الرقم الجماعي (المرتبط بطلب الشراء). ثم استخدم ME9A لطباعة مستندات RFQ باستخدام نموذج AWP المخصص YMM_RFQ (WRICEF: F-MM-ZM2-001). أرسل RFQs المطبوعة أو الإلكترونية إلى الموردين المختارين واطلب عروضهم قبل الموعد النهائي للتقديم.",
        whatSAPDoesEN:
          "ME4S provides a list view of RFQs by collective number. ME9A outputs the RFQ forms for vendor communication.",
        whatSAPDoesAR:
          "يوفر ME4S عرضاً قائمياً لـ RFQs حسب الرقم الجماعي. يُخرج ME9A نماذج RFQ للتواصل مع الموردين.",
        expectedOutputEN:
          "RFQs printed and sent to vendors. Vendors are requested to submit quotations by deadline.",
        expectedOutputAR:
          "تمت طباعة RFQs وإرسالها إلى الموردين. يُطلب من الموردين تقديم عروضهم قبل الموعد النهائي.",
      },
      {
        id: "mm-rfq-step-3",
        stepNumber: 3,
        titleEN: "Maintain Vendor Quotations (ME47)",
        titleAR: "إدخال عروض أسعار الموردين (ME47)",
        tCode: "ME47",
        role: "Purchaser",
        whatToDoEN:
          "When vendor quotations are received, open each RFQ in ME47 and enter the vendor's quoted prices, delivery times, and any conditions. Record the actual quotation submission date. For bulk price uploads, use the LSMW program YRFQ_UPL (WRICEF: E-MM-ZM2-002) to upload quotation prices automatically. Ensure all mandatory fields are filled (collective number, submission date, incoterms, supplier quotation number, payment terms).",
        whatToDoAR:
          "عند استلام عروض أسعار الموردين، افتح كل RFQ في ME47 وأدخل الأسعار المقدمة من المورد وأوقات التسليم وأي شروط. سجِّل تاريخ تقديم العرض الفعلي. لتحميل الأسعار بالجملة، استخدم برنامج LSMW المسمى YRFQ_UPL (WRICEF: E-MM-ZM2-002) لتحميل أسعار العروض تلقائياً. تأكد من ملء جميع الحقول الإلزامية (الرقم الجماعي، تاريخ التقديم، Incoterms، رقم عرض المورد، شروط الدفع).",
        whatSAPDoesEN:
          "Updates each vendor's RFQ with their quoted prices and conditions. System is now ready for price comparison.",
        whatSAPDoesAR:
          "يُحدِّث RFQ كل مورد بأسعاره وشروطه المقدَّمة. النظام جاهز الآن لمقارنة الأسعار.",
        expectedOutputEN:
          "All vendor quotations entered in SAP. Quotations ready for comparison.",
        expectedOutputAR:
          "تم إدخال جميع عروض أسعار الموردين في SAP. العروض جاهزة للمقارنة.",
      },
      {
        id: "mm-rfq-step-4",
        stepNumber: 4,
        titleEN: "Compare and Select Best Quotation (ME49 / YPUR01)",
        titleAR: "مقارنة واختيار أفضل عرض (ME49 / YPUR01)",
        tCode: "ME49",
        role: "Purchaser",
        whatToDoEN:
          "In ME49, run the price comparison for all quotations received under the collective number. The system displays all vendor prices side by side. Review price, delivery, and terms. Select the most favorable quotation. Use AWP custom report YPUR01 to print the comparison form for management review. Mark the unsuccessful vendors for automatic rejection letter generation.",
        whatToDoAR:
          "في ME49، شغِّل مقارنة الأسعار لجميع العروض المستلمة تحت الرقم الجماعي. يعرض النظام جميع أسعار الموردين جنباً إلى جنب. راجع السعر والتسليم والشروط. اختر العرض الأفضل. استخدم التقرير المخصص لـ AWP YPUR01 لطباعة نموذج المقارنة لمراجعة الإدارة. ضع علامة على الموردين غير المقبولين لتوليد خطابات الرفض تلقائياً.",
        whatSAPDoesEN:
          "ME49 generates a price comparison list across all vendor quotations. YPUR01 prints the AWP-format comparison form. System identifies the best quotation automatically.",
        whatSAPDoesAR:
          "يُنشئ ME49 قائمة مقارنة أسعار عبر جميع عروض الموردين. يطبع YPUR01 نموذج المقارنة بتنسيق AWP. يُحدِّد النظام أفضل عرض تلقائياً.",
        expectedOutputEN:
          "Best quotation identified. Comparison form printed. Unsuccessful vendors marked for rejection.",
        expectedOutputAR:
          "تم تحديد أفضل عرض. تمت طباعة نموذج المقارنة. تم تحديد الموردين غير المقبولين للرفض.",
      },
      {
        id: "mm-rfq-step-5",
        stepNumber: 5,
        titleEN: "Update Source of Supply / Purchasing Info Record (ME11)",
        titleAR: "تحديث مصدر التوريد / سجل معلومات الشراء (ME11)",
        tCode: "ME11",
        role: "Source of Supply Maintainer",
        whatToDoEN:
          "After selecting the winning vendor, in ME11 create or update the purchasing info record to store the agreed price and conditions for future use. This ensures the supplier's price is available for automatic price proposal in future purchase orders. Optionally create a source list to fix the supplier as the preferred source for the material.",
        whatToDoAR:
          "بعد اختيار المورد الفائز، في ME11 أنشئ أو حدِّث سجل معلومات الشراء لتخزين السعر والشروط المتفق عليها للاستخدام المستقبلي. هذا يضمن توافر سعر المورد لاقتراح السعر التلقائي في أوامر الشراء المستقبلية. اختيارياً أنشئ قائمة مصادر لتثبيت المورد كمصدر مفضل للمادة.",
        whatSAPDoesEN:
          "Creates or updates the purchasing info record with the agreed price and conditions. Source list can be configured to propose this vendor automatically in future PRs and POs.",
        whatSAPDoesAR:
          "ينشئ أو يُحدِّث سجل معلومات الشراء بالسعر والشروط المتفق عليها. يمكن تهيئة قائمة المصادر لاقتراح هذا المورد تلقائياً في طلبات وأوامر الشراء المستقبلية.",
        expectedOutputEN:
          "Purchasing info record updated. Supplier locked in as preferred source. RFQ process complete.",
        expectedOutputAR:
          "تم تحديث سجل معلومات الشراء. تم تثبيت المورد كمصدر مفضل. اكتملت عملية RFQ.",
      },
    ],
  },

  // ─── MM: Service Procurement ───────────────────────────────────────────────
  {
    id: "mm-service-procurement",
    icon: "🔨",
    duration: "3–5 days",
    titleEN: "Service Procurement (External Services)",
    titleAR: "شراء الخدمات (الخدمات الخارجية)",
    descriptionEN:
      "End-to-end procurement process for externally performed services (maintenance, construction, translation, etc.). Covers service PR creation, monitoring, RFQ, PO with item category D, service entry sheet creation and acceptance, and invoice verification. ~100 service orders/month. PO document type based on department; generic type YZ01 (Head Office Services) available for departments without a dedicated type.",
    descriptionAR:
      "عملية شراء متكاملة للخدمات المُنجَزة خارجياً (صيانة، إنشاء، ترجمة، إلخ). تشمل إنشاء طلب شراء الخدمة، المراقبة، RFQ، أمر الشراء بفئة البند D، إنشاء ورقة إدخال الخدمة وقبولها، والتحقق من الفاتورة. ~100 أمر خدمة/شهر. نوع مستند PO حسب القسم؛ النوع العام YZ01 (خدمات المكتب الرئيسي) متاح للأقسام التي لا تملك نوعاً مخصصاً.",
    module: "MM",
    roles: [
      "Department Requester",
      "Service Purchaser",
      "Service Acceptance Responsible",
      "AP Accountant",
    ],
    steps: [
      {
        id: "mm-service-proc-step-1",
        stepNumber: 1,
        titleEN: "Create Service Purchase Requisition (ME51N)",
        titleAR: "إنشاء طلب شراء الخدمة (ME51N)",
        tCode: "ME51N",
        role: "Department Requester",
        whatToDoEN:
          "In ME51N, create a purchase requisition for the required service. Use the department-specific document type if available, or YZ01 (Head Office Services, number range 0037000000–0037999999) for general service requests. In the item, select item category D (service) and enter a detailed service description, quantity (usually 1 AU – Activity Unit), plant, cost center, and required date. Detailed service specifications must be included to enable proper RFQ and vendor communication.",
        whatToDoAR:
          "في ME51N، أنشئ طلب شراء للخدمة المطلوبة. استخدم نوع المستند الخاص بالقسم إذا كان متاحاً، أو YZ01 (خدمات المكتب الرئيسي، نطاق الأرقام 0037000000–0037999999) لطلبات الخدمة العامة. في البند، اختر فئة البند D (خدمة) وأدخل وصفاً تفصيلياً للخدمة والكمية (عادةً 1 AU – وحدة نشاط) والمصنع ومركز التكلفة والتاريخ المطلوب. يجب تضمين مواصفات الخدمة التفصيلية لتمكين RFQ والتواصل السليم مع المورد.",
        whatSAPDoesEN:
          "Creates a service purchase requisition with item category D. Requisition is available for monitoring in MSRV2.",
        whatSAPDoesAR:
          "ينشئ طلب شراء خدمة بفئة البند D. طلب الشراء متاح للمراقبة في MSRV2.",
        expectedOutputEN:
          "Service PR created. PR available for purchasing team review.",
        expectedOutputAR:
          "تم إنشاء طلب شراء الخدمة. طلب الشراء متاح لمراجعة فريق المشتريات.",
      },
      {
        id: "mm-service-proc-step-2",
        stepNumber: 2,
        titleEN: "Monitor Service Requirements (MSRV2)",
        titleAR: "مراقبة متطلبات الخدمة (MSRV2)",
        tCode: "MSRV2",
        role: "Service Purchaser",
        whatToDoEN:
          "In MSRV2, run the service list for requisitions to monitor all open service requirements. Review outstanding service PRs, verify completeness of service descriptions, and prioritize. Identify which PRs are ready to proceed to RFQ and sourcing. Use MSRV1 (service list), MSRV3 (service list per PO), and ME2S (services per PO) for additional monitoring.",
        whatToDoAR:
          "في MSRV2، شغِّل قائمة الخدمات لطلبات الشراء لمراقبة جميع متطلبات الخدمة المفتوحة. راجع طلبات الشراء الخدمية المعلقة وتحقق من اكتمال أوصاف الخدمة وحدِّد الأولويات. حدِّد طلبات الشراء الجاهزة للمتابعة مع RFQ والتوريد. استخدم MSRV1 (قائمة الخدمات)، MSRV3 (قائمة الخدمات لكل PO)، و ME2S (الخدمات لكل PO) للمراقبة الإضافية.",
        whatSAPDoesEN:
          "MSRV2 lists all service requisitions with their service lines and status. Provides the purchaser visibility over all outstanding service requirements.",
        whatSAPDoesAR:
          "يُدرج MSRV2 جميع طلبات الشراء الخدمية مع سطور خدماتها وحالتها. يوفر للمشتري رؤية على جميع متطلبات الخدمة المعلقة.",
        expectedOutputEN:
          "Open service requirements reviewed. Priority PRs identified for RFQ process.",
        expectedOutputAR:
          "تمت مراجعة متطلبات الخدمة المفتوحة. تحديد طلبات الشراء ذات الأولوية لعملية RFQ.",
      },
      {
        id: "mm-service-proc-step-3",
        stepNumber: 3,
        titleEN: "Create Service Purchase Order – Item Category D (ME21N)",
        titleAR: "إنشاء أمر شراء الخدمة – فئة البند D (ME21N)",
        tCode: "ME21N",
        role: "Service Purchaser",
        whatToDoEN:
          "After completing the RFQ and selecting the vendor (via the MM-ZM2 quotation process), in ME21N create a service purchase order. Select the winning vendor, reference the released PR, and set item category to D (service). In the service tab, enter detailed service specifications (service number or free-form description, quantity, unit, and price). Enter account assignment (cost center or project). Release the PO per the release strategy for purchasing group 002 (Services & Project). Print the PO for the vendor.",
        whatToDoAR:
          "بعد اكتمال RFQ واختيار المورد (عبر عملية عروض الأسعار MM-ZM2)، أنشئ في ME21N أمر شراء خدمة. اختر المورد الفائز واستند إلى طلب الشراء المُطلَق واضبط فئة البند على D (خدمة). في تبويب الخدمة، أدخل مواصفات الخدمة التفصيلية (رقم الخدمة أو وصف حر، الكمية، الوحدة، والسعر). أدخل تعيين الحساب (مركز التكلفة أو المشروع). أطلق أمر الشراء وفق استراتيجية الإصدار لمجموعة الشراء 002 (الخدمات والمشاريع). اطبع أمر الشراء للمورد.",
        whatSAPDoesEN:
          "Creates a service PO with item category D and service specifications. Open service commitment recorded against cost center. PO sent to vendor.",
        whatSAPDoesAR:
          "ينشئ أمر شراء خدمة بفئة البند D ومواصفات الخدمة. يُسجَّل الالتزام بالخدمة المفتوح مقابل مركز التكلفة. يُرسَل أمر الشراء إلى المورد.",
        expectedOutputEN:
          "Service PO created and released. Vendor authorized to perform the service.",
        expectedOutputAR:
          "تم إنشاء وإطلاق أمر شراء الخدمة. تم تفويض المورد لتنفيذ الخدمة.",
      },
      {
        id: "mm-service-proc-step-4",
        stepNumber: 4,
        titleEN: "Create and Accept Service Entry Sheet (ML81N / ML83)",
        titleAR: "إنشاء وقبول ورقة إدخال الخدمة (ML81N / ML83)",
        tCode: "ML81N",
        role: "Service Acceptance Responsible",
        whatToDoEN:
          "After the vendor performs the service, in ML81N create a service entry sheet referencing the PO. Enter each service line with actual quantities performed. Set the acceptance status once you verify the work is satisfactory. A responsible person checks and accepts the service entry sheet. Then in ML83, print the service entry sheet acceptance document for the records. This step is the equivalent of goods receipt for services.",
        whatToDoAR:
          "بعد تنفيذ المورد للخدمة، أنشئ في ML81N ورقة إدخال خدمة مستندةً إلى أمر الشراء. أدخل كل سطر خدمة بالكميات الفعلية المُنفَّذة. اضبط حالة القبول بمجرد التحقق من رضاك عن العمل. يفحص شخص مسؤول ويقبل ورقة إدخال الخدمة. ثم في ML83، اطبع مستند قبول ورقة إدخال الخدمة للسجلات. هذه الخطوة مكافئة لاستلام البضائع في الخدمات.",
        whatSAPDoesEN:
          "ML81N creates the service entry sheet and posts the service acceptance. Creates accounting entry (debit service expense/cost center, credit GR/IR services account). Triggers invoice verification in MIRO.",
        whatSAPDoesAR:
          "ينشئ ML81N ورقة إدخال الخدمة ويرحِّل قبول الخدمة. ينشئ قيد محاسبة (مدين مصروف الخدمة/مركز التكلفة، دائن حساب GR/IR للخدمات). يُشغِّل التحقق من الفاتورة في MIRO.",
        expectedOutputEN:
          "Service entry sheet created and accepted. Acceptance document printed. Service cost posted to cost center.",
        expectedOutputAR:
          "تم إنشاء وقبول ورقة إدخال الخدمة. تمت طباعة مستند القبول. تم ترحيل تكلفة الخدمة على مركز التكلفة.",
      },
      {
        id: "mm-service-proc-step-5",
        stepNumber: 5,
        titleEN: "Verify Supplier Invoice for Services (MIRO)",
        titleAR: "التحقق من فاتورة المورد للخدمات (MIRO)",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN:
          "In MIRO, post the vendor invoice for services referencing the service PO. The system will propose the service amounts from the accepted service entry sheet. Verify amounts, tax, and payment terms. Post the invoice. This clears the GR/IR services account and creates the accounts payable entry for payment.",
        whatToDoAR:
          "في MIRO، ارحِّل فاتورة المورد للخدمات مستندةً إلى أمر الشراء الخدمي. سيقترح النظام المبالغ من ورقة إدخال الخدمة المقبولة. تحقق من المبالغ والضريبة وشروط الدفع. ارحِّل الفاتورة. يصفِّي هذا حساب GR/IR للخدمات وينشئ قيد الحسابات الدائنة للدفع.",
        whatSAPDoesEN:
          "Posts service invoice. Clears GR/IR services liability. Creates AP entry. Full service procurement cycle closed.",
        whatSAPDoesAR:
          "يرحِّل فاتورة الخدمة. يصفِّي مسؤولية GR/IR للخدمات. ينشئ قيد الحسابات الدائنة. اكتملت دورة شراء الخدمة بالكامل.",
        expectedOutputEN:
          "Service invoice posted. AP liability created. Service procurement process complete.",
        expectedOutputAR:
          "تم ترحيل فاتورة الخدمة. تم إنشاء مسؤولية الحسابات الدائنة. اكتملت عملية شراء الخدمة.",
      },
    ],
  },

  // ─── MM: Asset Procurement ─────────────────────────────────────────────────
  {
    id: "mm-asset-procurement",
    icon: "🏗️",
    duration: "3–7 days",
    titleEN: "Asset Procurement",
    titleAR: "شراء الأصول",
    descriptionEN:
      "Procurement process for fixed assets (equipment, vehicles, machinery). A fixed asset master is created in FI-AA before the PO, and the purchase order is created with account assignment category A (asset). ~10 asset purchases/month. Custom AWP report YMM020 links GR material documents to PRs and POs for delivery tracking.",
    descriptionAR:
      "عملية شراء الأصول الثابتة (المعدات، المركبات، الآلات). يُنشأ سجل أصل ثابت في FI-AA قبل أمر الشراء، ويُنشأ أمر الشراء بفئة تعيين الحساب A (أصل). ~10 مشتريات أصول/شهر. التقرير المخصص لـ AWP: YMM020 يربط مستندات المادة من استلام البضائع بطلبات الشراء وأوامر الشراء لتتبع التسليم.",
    module: "MM",
    roles: [
      "Asset Accountant",
      "Purchaser",
      "Asset Stock Keeper",
    ],
    steps: [
      {
        id: "mm-asset-proc-step-1",
        stepNumber: 1,
        titleEN: "Monitor Asset Purchase Requisitions (ME5A / YAST_PR)",
        titleAR: "مراقبة طلبات شراء الأصول (ME5A / YAST_PR)",
        tCode: "ME5A",
        role: "Asset Accountant",
        whatToDoEN:
          "In ME5A (or custom report YAST_PR), monitor open purchase requisitions with account assignment 'U' (unknown — pending asset number assignment). These are PRs raised by departments for new assets. Review each PR to confirm the asset requirement and prepare for asset master creation. Also use custom report YMM020 for a consolidated view linking PR, PO, and GR documents.",
        whatToDoAR:
          "في ME5A (أو التقرير المخصص YAST_PR)، راقب طلبات الشراء المفتوحة بتعيين الحساب 'U' (غير محدد — في انتظار تعيين رقم الأصل). هذه طلبات شراء مُرفوعة من الأقسام للأصول الجديدة. راجع كل طلب شراء لتأكيد متطلبات الأصل والتحضير لإنشاء سجل الأصل الرئيسي. استخدم أيضاً التقرير المخصص YMM020 للحصول على عرض موحَّد يربط مستندات طلب الشراء وأمر الشراء واستلام البضائع.",
        whatSAPDoesEN:
          "ME5A/YAST_PR displays open PRs filtered by account assignment U. Allows the asset accountant to track which asset requisitions are pending asset number assignment.",
        whatSAPDoesAR:
          "يعرض ME5A/YAST_PR طلبات الشراء المفتوحة مرشَّحة حسب تعيين الحساب U. يسمح لمحاسب الأصول بتتبع طلبات شراء الأصول التي تنتظر تعيين رقم الأصل.",
        expectedOutputEN:
          "Open asset PRs identified. Asset requirements confirmed.",
        expectedOutputAR:
          "تحديد طلبات شراء الأصول المفتوحة. تأكيد متطلبات الأصول.",
      },
      {
        id: "mm-asset-proc-step-2",
        stepNumber: 2,
        titleEN: "Create New Asset Master Record (AS01)",
        titleAR: "إنشاء سجل الأصل الرئيسي الجديد (AS01)",
        tCode: "AS01",
        role: "Asset Accountant",
        whatToDoEN:
          "In AS01, create a new fixed asset master record. Select the appropriate asset class (determines depreciation rules, G/L accounts). Enter a descriptive asset name, cost center, plant, and other relevant data. Save to generate the asset number. This asset number will be used in the purchase order account assignment to ensure costs are capitalized directly to the asset.",
        whatToDoAR:
          "في AS01، أنشئ سجل أصل ثابت رئيسي جديداً. اختر فئة الأصل المناسبة (تحدد قواعد الاستهلاك وحسابات دفتر الأستاذ العام). أدخل اسماً وصفياً للأصل ومركز التكلفة والمصنع والبيانات الأخرى ذات الصلة. احفظ لتوليد رقم الأصل. سيُستخدم رقم الأصل هذا في تعيين حساب أمر الشراء لضمان رسملة التكاليف مباشرةً على الأصل.",
        whatSAPDoesEN:
          "Creates a fixed asset master record in FI-AA. Asset number generated. Depreciation parameters set per asset class. Asset is now ready to receive procurement costs.",
        whatSAPDoesAR:
          "ينشئ سجل أصل ثابت رئيسي في FI-AA. يتم توليد رقم الأصل. تُحدَّد معاملات الاستهلاك حسب فئة الأصل. الأصل جاهز الآن لاستلام تكاليف المشتريات.",
        expectedOutputEN:
          "Asset master record created. Asset number generated and ready for PO account assignment.",
        expectedOutputAR:
          "تم إنشاء سجل الأصل الرئيسي. تم توليد رقم الأصل وهو جاهز لتعيين حساب أمر الشراء.",
      },
      {
        id: "mm-asset-proc-step-3",
        stepNumber: 3,
        titleEN: "Assign Asset Number to PR and Release (ME54N / ME55)",
        titleAR: "تعيين رقم الأصل لطلب الشراء وإطلاقه (ME54N / ME55)",
        tCode: "ME54N",
        role: "Asset Accountant",
        whatToDoEN:
          "In ME54N, open the asset purchase requisition and change the account assignment from 'U' to 'A' (asset). Enter the asset number created in AS01. Verify the PR details are correct. Release the PR using ME54N (individual release) or ME55 (collective release) per the asset PR release strategy. The PR is now released for conversion to a purchase order by the purchaser.",
        whatToDoAR:
          "في ME54N، افتح طلب شراء الأصل وغيِّر تعيين الحساب من 'U' إلى 'A' (أصل). أدخل رقم الأصل المنشأ في AS01. تحقق من صحة تفاصيل طلب الشراء. أطلق طلب الشراء باستخدام ME54N (إطلاق فردي) أو ME55 (إطلاق جماعي) وفق استراتيجية إطلاق طلب شراء الأصل. طلب الشراء محرَّر الآن للتحويل إلى أمر شراء من قِبَل المشتري.",
        whatSAPDoesEN:
          "Updates PR account assignment to 'A' with the asset number. Releases the PR. Asset number is now linked to the requisition and will flow through to the PO and GR.",
        whatSAPDoesAR:
          "يُحدِّث تعيين حساب طلب الشراء إلى 'A' برقم الأصل. يُطلق طلب الشراء. رقم الأصل مرتبط الآن بطلب الشراء وسيتدفق إلى أمر الشراء واستلام البضائع.",
        expectedOutputEN:
          "Asset number assigned to PR. PR released. Ready for PO creation.",
        expectedOutputAR:
          "تم تعيين رقم الأصل لطلب الشراء. تم إطلاق طلب الشراء. جاهز لإنشاء أمر الشراء.",
      },
      {
        id: "mm-asset-proc-step-4",
        stepNumber: 4,
        titleEN: "Create Asset Purchase Order (ME21N – Account Assignment A)",
        titleAR: "إنشاء أمر شراء الأصل (ME21N – تعيين الحساب A)",
        tCode: "ME21N",
        role: "Purchaser",
        whatToDoEN:
          "In ME21N, create the purchase order with reference to the released asset PR. Account assignment category must be A (asset). The asset number from the PR flows automatically into the PO. Verify vendor, price, delivery terms, and plant. Release the PO per the assets purchasing group (004) release strategy. Print the PO using ME9F for vendor communication.",
        whatToDoAR:
          "في ME21N، أنشئ أمر الشراء بالاستناد إلى طلب شراء الأصل المُطلَق. يجب أن تكون فئة تعيين الحساب A (أصل). ينتقل رقم الأصل من طلب الشراء تلقائياً إلى أمر الشراء. تحقق من المورد والسعر وشروط التسليم والمصنع. أطلق أمر الشراء وفق استراتيجية الإطلاق لمجموعة شراء الأصول (004). اطبع أمر الشراء باستخدام ME9F للتواصل مع المورد.",
        whatSAPDoesEN:
          "Creates asset PO with account assignment A. Open commitment recorded against the asset. PO printed for vendor.",
        whatSAPDoesAR:
          "ينشئ أمر شراء الأصل بتعيين الحساب A. يُسجَّل الالتزام المفتوح مقابل الأصل. يُطبع أمر الشراء للمورد.",
        expectedOutputEN:
          "Asset PO created and released. PO printed and sent to vendor.",
        expectedOutputAR:
          "تم إنشاء وإطلاق أمر شراء الأصل. تمت طباعة أمر الشراء وإرساله إلى المورد.",
      },
      {
        id: "mm-asset-proc-step-5",
        stepNumber: 5,
        titleEN: "Receive Asset at Receiving Area (MIGO_GR)",
        titleAR: "استلام الأصل في منطقة الاستلام (MIGO_GR)",
        tCode: "MIGO_GR",
        role: "Asset Stock Keeper",
        whatToDoEN:
          "When the asset arrives, in MIGO_GR post the goods receipt against the asset purchase order (movement type 101). The system automatically posts the asset value to the fixed asset account (capitalizes the asset). Enter quantity (usually 1 for assets), verify asset number, plant, and asset receiving area storage location. Inspect the asset before posting. Print the GR material document using report YMM020 to link GR to the original requisitioner.",
        whatToDoAR:
          "عند وصول الأصل، ارحِّل في MIGO_GR استلام البضائع بالاستناد إلى أمر شراء الأصل (نوع الحركة 101). يُرحِّل النظام تلقائياً قيمة الأصل على حساب الأصل الثابت (رسملة الأصل). أدخل الكمية (عادةً 1 للأصول) وتحقق من رقم الأصل والمصنع وموقع تخزين منطقة استلام الأصول. افحص الأصل قبل الترحيل. اطبع مستند المادة من استلام البضائع باستخدام التقرير YMM020 لربط الاستلام بطالب الشراء الأصلي.",
        whatSAPDoesEN:
          "Posts GR MT101 against asset PO. Asset value capitalized to fixed asset account in FI-AA. GR/IR account cleared upon invoice posting. Asset becomes active in the asset register.",
        whatSAPDoesAR:
          "يرحِّل استلام البضائع MT101 مقابل أمر شراء الأصل. تُرسمَل قيمة الأصل على حساب الأصل الثابت في FI-AA. يُصفَّى حساب GR/IR عند ترحيل الفاتورة. يصبح الأصل نشطاً في سجل الأصول.",
        expectedOutputEN:
          "Asset received and capitalized. GR document printed. Asset now in the fixed asset register. Process complete.",
        expectedOutputAR:
          "تم استلام الأصل ورسملته. تمت طباعة مستند الاستلام. الأصل الآن في سجل الأصول الثابتة. اكتملت العملية.",
      },
    ],
  },

  // ─── MM: Supplier Creation ─────────────────────────────────────────────────
  {
    id: "mm-supplier-creation",
    icon: "🤝",
    duration: "30–60 min",
    titleEN: "Supplier Creation (Business Partner)",
    titleAR: "إنشاء المورد (شريك الأعمال)",
    descriptionEN:
      "Process for creating a new supplier (vendor) as a Business Partner in SAP. Covers general data (address, contact), purchasing data (currency, incoterms, payment terms, purchasing group, planned delivery time), and company code data (reconciliation account, payment terms for FI). Managed jointly by Purchasing and Finance departments. ~2 new suppliers/month.",
    descriptionAR:
      "عملية إنشاء مورد جديد (بائع) كشريك أعمال في SAP. تشمل البيانات العامة (العنوان، التواصل)، بيانات الشراء (العملة، Incoterms، شروط الدفع، مجموعة الشراء، وقت التسليم المخطط)، وبيانات كود الشركة (حساب المطابقة، شروط الدفع في FI). تُدار مشتركةً بين قسمي المشتريات والمالية. ~2 مورد جديد/شهر.",
    module: "MM",
    roles: [
      "Supplier Master Data Responsible – Purchasing",
      "Supplier Master Data Responsible – Accounting",
    ],
    steps: [
      {
        id: "mm-supplier-creation-step-1",
        stepNumber: 1,
        titleEN: "Create General Data for Supplier (BP)",
        titleAR: "إنشاء البيانات العامة للمورد (BP)",
        tCode: "BP",
        role: "Supplier Master Data Responsible – Purchasing",
        whatToDoEN:
          "In BP (Business Partner transaction), create a new business partner in the relevant account group: Y000 (Domestic Suppliers), Y001 (Foreign Suppliers), Y002 (Service & Construction Suppliers), Y003 (Affiliated Companies), or Y005 (One-Time Accounts). Enter mandatory general data: Title, Name, Search Term, City, Country, Language, Telephone, Fax, and Email. The system assigns the BP/vendor number based on the account group number range.",
        whatToDoAR:
          "في BP (معاملة شريك الأعمال)، أنشئ شريك أعمال جديداً في مجموعة الحساب المناسبة: Y000 (موردون محليون)، Y001 (موردون أجانب)، Y002 (موردو خدمات وإنشاء)، Y003 (شركات تابعة)، أو Y005 (حسابات لمرة واحدة). أدخل البيانات العامة الإلزامية: اللقب، الاسم، مصطلح البحث، المدينة، الدولة، اللغة، الهاتف، الفاكس، والبريد الإلكتروني. يُعيِّن النظام رقم BP/المورد بناءً على نطاق أرقام مجموعة الحساب.",
        whatSAPDoesEN:
          "Creates a Business Partner with the general data. BP number generated per account group number range (e.g. 1000000–1999999 for Y000 domestic). BP is now a base record pending purchasing and FI data.",
        whatSAPDoesAR:
          "ينشئ شريك أعمال بالبيانات العامة. يتم توليد رقم BP وفق نطاق أرقام مجموعة الحساب (مثل 1000000–1999999 للـ Y000 المحلي). BP الآن سجل أساسي في انتظار بيانات الشراء والمالية.",
        expectedOutputEN:
          "BP general record created. BP/vendor number assigned. Address and contact data saved.",
        expectedOutputAR:
          "تم إنشاء السجل العام لـ BP. تم تعيين رقم BP/المورد. تم حفظ العنوان وبيانات التواصل.",
      },
      {
        id: "mm-supplier-creation-step-2",
        stepNumber: 2,
        titleEN: "Maintain Purchasing Data (BP – Supplier Role)",
        titleAR: "إدخال بيانات الشراء (BP – دور المورد)",
        tCode: "BP",
        role: "Supplier Master Data Responsible – Purchasing",
        whatToDoEN:
          "In BP, switch to the Supplier role and navigate to the Purchasing Data tab. Enter mandatory purchasing fields: Order Currency, Terms of Payment, Incoterms (Part 1 and Location), Purchasing Group, Payment Conditions, Planned Delivery Time in Days, and Group for Calculation Schema (pricing procedure). Optionally enter the Sales Person and Telephone for the supplier's sales contact. Save.",
        whatToDoAR:
          "في BP، انتقل إلى دور المورد وانتقل إلى تبويب بيانات الشراء. أدخل حقول الشراء الإلزامية: عملة الأمر، شروط الدفع، Incoterms (الجزء 1 والموقع)، مجموعة الشراء، شروط الدفع، وقت التسليم المخطط بالأيام، ومجموعة مخطط الحساب (إجراء التسعير). اختيارياً أدخل مندوب المبيعات والهاتف لجهة اتصال مبيعات المورد. احفظ.",
        whatSAPDoesEN:
          "Updates the BP supplier role with purchasing data. Supplier is now usable in purchase orders, info records, and RFQs for the specified purchasing organizations.",
        whatSAPDoesAR:
          "يُحدِّث دور BP للمورد ببيانات الشراء. المورد الآن قابل للاستخدام في أوامر الشراء وسجلات المعلومات و RFQs لمنظمات الشراء المحددة.",
        expectedOutputEN:
          "Purchasing data maintained. Supplier can now be used in procurement transactions.",
        expectedOutputAR:
          "تم إدخال بيانات الشراء. يمكن استخدام المورد الآن في معاملات المشتريات.",
      },
      {
        id: "mm-supplier-creation-step-3",
        stepNumber: 3,
        titleEN: "Maintain Company Code Data (BP – FI Vendor Role)",
        titleAR: "إدخال بيانات كود الشركة (BP – دور مورد FI)",
        tCode: "BP",
        role: "Supplier Master Data Responsible – Accounting",
        whatToDoEN:
          "In BP, switch to the FI Vendor role and navigate to the company code-specific data (company code 1000 – Al-Watania Poultry). Enter the mandatory Reconciliation Account (AP reconciliation G/L account) and Terms of Payment for financial accounting. These settings control how supplier invoices and payments are posted in FI. Save to complete the supplier master record.",
        whatToDoAR:
          "في BP، انتقل إلى دور مورد FI وانتقل إلى بيانات كود الشركة المحددة (كود الشركة 1000 – الوطنية للدواجن). أدخل حساب المطابقة الإلزامي (حساب دفتر الأستاذ العام للمطابقة في الحسابات الدائنة) وشروط الدفع للمحاسبة المالية. تتحكم هذه الإعدادات في كيفية ترحيل فواتير المورد ومدفوعاته في FI. احفظ لاستكمال سجل المورد الرئيسي.",
        whatSAPDoesEN:
          "Completes the supplier Business Partner with FI company code data. Supplier is now fully active for purchasing (MM) and financial accounting (FI-AP) transactions. Vendor number synchronized between MM and FI via BP-Vendor synchronization (account groups Z000–Z007).",
        whatSAPDoesAR:
          "يُكمِّل شريك أعمال المورد ببيانات كود شركة FI. المورد الآن نشط بالكامل لمعاملات الشراء (MM) والمحاسبة المالية (FI-AP). رقم المورد متزامن بين MM و FI عبر مزامنة BP-Vendor (مجموعات الحسابات Z000–Z007).",
        expectedOutputEN:
          "Company code data maintained. Supplier master record complete. Supplier ready for all procurement and AP transactions.",
        expectedOutputAR:
          "تم إدخال بيانات كود الشركة. اكتمل سجل المورد الرئيسي. المورد جاهز لجميع معاملات المشتريات والحسابات الدائنة.",
      },
    ],
  },

  // ─── MM: Supplier Evaluation ───────────────────────────────────────────────
  {
    id: "mm-supplier-evaluation",
    icon: "⭐",
    duration: "1–2 hours",
    titleEN: "Supplier Evaluation (Fiori)",
    titleAR: "تقييم المورد (فايوري)",
    descriptionEN:
      "Monthly process for evaluating supplier performance across multiple dimensions: quantity compliance, operational KPIs, delivery timeliness, and pricing. All steps performed via SAP Fiori apps. Results feed strategic sourcing decisions and source list management. ~1 evaluation cycle/month.",
    descriptionAR:
      "عملية شهرية لتقييم أداء الموردين عبر أبعاد متعددة: الامتثال للكمية، مؤشرات الأداء التشغيلية، دقة التسليم، والتسعير. تُنفَّذ جميع الخطوات عبر تطبيقات SAP Fiori. تُغذِّي النتائج قرارات التوريد الاستراتيجي وإدارة قائمة المصادر. ~دورة تقييم واحدة/شهر.",
    module: "MM",
    roles: [
      "Purchasing Manager",
      "Purchaser",
    ],
    steps: [
      {
        id: "mm-supplier-eval-step-1",
        stepNumber: 1,
        titleEN: "Supplier Evaluation by Quantity (Fiori)",
        titleAR: "تقييم المورد حسب الكمية (فايوري)",
        tCode: "",
        role: "Purchaser",
        whatToDoEN:
          "Open the 'Supplier Evaluation by Quantity' Fiori app. Select the purchasing organization (1000) and the evaluation period. Review the quantity compliance score for each supplier — comparing ordered quantities vs. delivered quantities. Identify suppliers with significant shortfalls or over-deliveries. Document findings for the overall evaluation.",
        whatToDoAR:
          "افتح تطبيق 'تقييم المورد حسب الكمية' في Fiori. اختر منظمة الشراء (1000) وفترة التقييم. راجع نقاط الامتثال للكمية لكل مورد — مقارنةً بين الكميات المطلوبة والمسلَّمة. حدِّد الموردين الذين لديهم عجز أو فائض كبير في التسليم. وثِّق النتائج للتقييم الإجمالي.",
        whatSAPDoesEN:
          "Fiori app calculates quantity compliance score per supplier based on PO vs. GR quantity data. Score is used as one dimension in the overall supplier evaluation.",
        whatSAPDoesAR:
          "يحسب تطبيق Fiori نقاط الامتثال للكمية لكل مورد بناءً على بيانات كمية أمر الشراء مقابل استلام البضائع. تُستخدم النقاط كأحد أبعاد التقييم الإجمالي للمورد.",
        expectedOutputEN:
          "Quantity compliance scores reviewed. Underperforming suppliers flagged.",
        expectedOutputAR:
          "تمت مراجعة نقاط الامتثال للكمية. تحديد الموردين ذوي الأداء المنخفض.",
      },
      {
        id: "mm-supplier-eval-step-2",
        stepNumber: 2,
        titleEN: "Operational Supplier Evaluation (Fiori)",
        titleAR: "تقييم المورد التشغيلي (فايوري)",
        tCode: "",
        role: "Purchaser",
        whatToDoEN:
          "Open the 'Operational Supplier Evaluation' Fiori app. Review the composite operational score for each supplier, which considers multiple KPIs such as defect rates, returns, and invoice accuracy. Use this evaluation to assess the overall operational reliability of each vendor.",
        whatToDoAR:
          "افتح تطبيق 'تقييم المورد التشغيلي' في Fiori. راجع النقاط التشغيلية المركَّبة لكل مورد، والتي تأخذ في الاعتبار عدة مؤشرات أداء مثل معدلات العيوب والمرتجعات ودقة الفاتورة. استخدم هذا التقييم لتقييم الموثوقية التشغيلية الإجمالية لكل مورد.",
        whatSAPDoesEN:
          "Fiori app computes an operational score from multiple data points in MM and QM. Provides a single view of vendor reliability across operational dimensions.",
        whatSAPDoesAR:
          "يحسب تطبيق Fiori نقاطاً تشغيلية من نقاط بيانات متعددة في MM و QM. يوفر عرضاً موحَّداً لموثوقية المورد عبر الأبعاد التشغيلية.",
        expectedOutputEN:
          "Operational scores reviewed. Reliability assessment documented.",
        expectedOutputAR:
          "تمت مراجعة النقاط التشغيلية. توثيق تقييم الموثوقية.",
      },
      {
        id: "mm-supplier-eval-step-3",
        stepNumber: 3,
        titleEN: "Supplier Evaluation by Time (Fiori)",
        titleAR: "تقييم المورد حسب الوقت (فايوري)",
        tCode: "",
        role: "Purchaser",
        whatToDoEN:
          "Open the 'Supplier Evaluation by Time' Fiori app. Review on-time delivery performance for each supplier — comparing promised delivery dates from POs with actual GR posting dates. Identify suppliers with consistent late deliveries. Note improvement trends or deterioration.",
        whatToDoAR:
          "افتح تطبيق 'تقييم المورد حسب الوقت' في Fiori. راجع أداء التسليم في الوقت المحدد لكل مورد — مقارنةً بين تواريخ التسليم الموعودة من أوامر الشراء وتواريخ ترحيل استلام البضائع الفعلية. حدِّد الموردين الذين يتأخرون باستمرار. لاحظ اتجاهات التحسن أو التراجع.",
        whatSAPDoesEN:
          "Fiori app calculates on-time delivery score per supplier by comparing PO delivery dates to GR posting dates. Generates timeliness KPI for each vendor.",
        whatSAPDoesAR:
          "يحسب تطبيق Fiori نقاط التسليم في الوقت المحدد لكل مورد بمقارنة تواريخ تسليم أمر الشراء بتواريخ ترحيل استلام البضائع. يُنشئ مؤشر أداء التوقيت لكل مورد.",
        expectedOutputEN:
          "Delivery timeliness scores reviewed. Late delivery patterns identified.",
        expectedOutputAR:
          "تمت مراجعة نقاط التسليم في الوقت المحدد. تحديد أنماط التأخير في التسليم.",
      },
      {
        id: "mm-supplier-eval-step-4",
        stepNumber: 4,
        titleEN: "Supplier Evaluation by Price (Fiori)",
        titleAR: "تقييم المورد حسب السعر (فايوري)",
        tCode: "",
        role: "Purchaser",
        whatToDoEN:
          "Open the 'Supplier Evaluation by Price' Fiori app. Review price competitiveness scores for each supplier — comparing their quoted/invoiced prices against market benchmarks or internal targets. Identify suppliers offering premium value and those with inflated pricing. Use findings to guide future sourcing negotiations.",
        whatToDoAR:
          "افتح تطبيق 'تقييم المورد حسب السعر' في Fiori. راجع نقاط تنافسية الأسعار لكل مورد — مقارنةً بين أسعاره المقدَّمة/المفوترة ومعايير السوق أو الأهداف الداخلية. حدِّد الموردين الذين يقدمون قيمةً ممتازة وأولئك الذين لديهم أسعار مبالغ فيها. استخدم النتائج لتوجيه مفاوضات التوريد المستقبلية.",
        whatSAPDoesEN:
          "Fiori app evaluates price competitiveness using PO prices, GR values, and configured benchmarks. Price score is one dimension of the overall supplier evaluation.",
        whatSAPDoesAR:
          "يُقيِّم تطبيق Fiori تنافسية الأسعار باستخدام أسعار أوامر الشراء وقيم استلام البضائع والمعايير المهيَّأة. نقاط السعر هي أحد أبعاد التقييم الإجمالي للمورد.",
        expectedOutputEN:
          "Price competitiveness scores reviewed. High-cost suppliers flagged for negotiation.",
        expectedOutputAR:
          "تمت مراجعة نقاط تنافسية الأسعار. تحديد الموردين ذوي التكلفة العالية للتفاوض.",
      },
      {
        id: "mm-supplier-eval-step-5",
        stepNumber: 5,
        titleEN: "Overall Supplier Evaluation and Decision (Fiori)",
        titleAR: "التقييم الإجمالي للمورد واتخاذ القرار (فايوري)",
        tCode: "",
        role: "Purchasing Manager",
        whatToDoEN:
          "Open the 'Overall Supplier Evaluation' Fiori app. Review the composite score for each supplier combining quantity, operational, time, and price dimensions. Compare suppliers within the same category. Classify suppliers (strategic, preferred, approved, conditional, disqualified) based on scores. Document decisions: renew, renegotiate, put on watch list, or phase out. Update source lists accordingly.",
        whatToDoAR:
          "افتح تطبيق 'التقييم الإجمالي للمورد' في Fiori. راجع النقاط المركَّبة لكل مورد التي تجمع أبعاد الكمية والتشغيل والوقت والسعر. قارن الموردين ضمن نفس الفئة. صنِّف الموردين (استراتيجي، مفضَّل، معتمد، مشروط، مستبعَد) بناءً على النقاط. وثِّق القرارات: تجديد، إعادة تفاوض، وضع على قائمة المراقبة، أو تدريجي الإنهاء. حدِّث قوائم المصادر وفقاً لذلك.",
        whatSAPDoesEN:
          "Overall Supplier Evaluation Fiori app combines all dimension scores into a single supplier ranking. Supports strategic sourcing decisions and source list updates.",
        whatSAPDoesAR:
          "يجمع تطبيق Fiori للتقييم الإجمالي للمورد جميع نقاط الأبعاد في تصنيف موحَّد للمورد. يدعم قرارات التوريد الاستراتيجي وتحديثات قائمة المصادر.",
        expectedOutputEN:
          "Suppliers ranked and classified. Sourcing decisions documented. Source lists updated. Monthly evaluation complete.",
        expectedOutputAR:
          "تم تصنيف الموردين وترتيبهم. توثيق قرارات التوريد. تحديث قوائم المصادر. اكتمل التقييم الشهري.",
      },
    ],
  },

  // ─── MM: Spare Parts Requisitioning ───────────────────────────────────────
  {
    id: "mm-spare-parts-requisition",
    icon: "⚙️",
    duration: "15–30 min",
    titleEN: "Requisitioning Spare Parts (Maintenance Departments)",
    titleAR: "طلب قطع الغيار (أقسام الصيانة)",
    descriptionEN:
      "Process for maintenance departments (factories and vehicles workshop) to request spare parts through SAP. Differentiated by PR document type: YMF0 (Factory Spare Parts), YMV0 (Vehicles Spare Parts), YMG0 (General Maintenance Spare Parts). Two-level release strategy: maintenance manager approval then inventory controller review. ~15 PRs/day. Items ≥20,000 SAR require separate high-value asset process (MM-18J-046).",
    descriptionAR:
      "عملية لأقسام الصيانة (المصانع وورشة المركبات) لطلب قطع الغيار عبر SAP. مُمَيَّزة حسب نوع مستند طلب الشراء: YMF0 (قطع غيار المصانع)، YMV0 (قطع غيار المركبات)، YMG0 (قطع الغيار العامة للصيانة). استراتيجية إطلاق من مستويين: موافقة مدير الصيانة ثم مراجعة مراقب المخزون. ~15 طلب/يوم. العناصر التي تبلغ قيمتها ≥20,000 ريال تستلزم عملية الأصول ذات القيمة العالية المنفصلة (MM-18J-046).",
    module: "MM",
    roles: [
      "Maintenance Department Employee",
      "Maintenance Manager",
      "Inventory Controller Specialist",
    ],
    steps: [
      {
        id: "mm-spare-parts-req-step-1",
        stepNumber: 1,
        titleEN: "Create Purchase Requisition for Spare Parts (ME51N)",
        titleAR: "إنشاء طلب الشراء لقطع الغيار (ME51N)",
        tCode: "ME51N",
        role: "Maintenance Department Employee",
        whatToDoEN:
          "In ME51N, create a purchase requisition for the required spare parts. Select the appropriate document type: YMF0 for factory maintenance spare parts (number range Y3: 22000000–22999999), YMV0 for vehicles maintenance spare parts (Y4: 23000000–23999999), or YMG0 for general maintenance spare parts (Y5: 24000000–24999999). Enter material number (or description with full part number and specifications), quantity, unit, plant, storage location, required delivery date, purchasing group (003 Spare Parts or 005 General Items), and cost center/order. Items ≥20,000 SAR must be submitted as asset procurement instead.",
        whatToDoAR:
          "في ME51N، أنشئ طلب شراء لقطع الغيار المطلوبة. اختر نوع المستند المناسب: YMF0 لقطع غيار صيانة المصانع (نطاق الأرقام Y3: 22000000–22999999)، YMV0 لقطع غيار صيانة المركبات (Y4: 23000000–23999999)، أو YMG0 لقطع غيار الصيانة العامة (Y5: 24000000–24999999). أدخل رقم المادة (أو الوصف مع رقم القطعة الكامل والمواصفات) والكمية والوحدة والمصنع وموقع التخزين وتاريخ التسليم المطلوب ومجموعة الشراء (003 قطع الغيار أو 005 الأصناف العامة) ومركز التكلفة/الأمر. العناصر التي قيمتها ≥20,000 ريال يجب تقديمها كشراء أصول بدلاً من ذلك.",
        whatSAPDoesEN:
          "Creates the spare parts PR with document type YMF0/YMV0/YMG0. PR enters the release workflow. Inventory controller and planner are notified.",
        whatSAPDoesAR:
          "ينشئ طلب شراء قطع الغيار بنوع المستند YMF0/YMV0/YMG0. يدخل طلب الشراء سير عمل الإطلاق. يتم إبلاغ مراقب المخزون والمخطط.",
        expectedOutputEN:
          "Spare parts PR created. PR in pending release status.",
        expectedOutputAR:
          "تم إنشاء طلب شراء قطع الغيار. طلب الشراء في حالة إطلاق معلَّق.",
      },
      {
        id: "mm-spare-parts-req-step-2",
        stepNumber: 2,
        titleEN: "Maintenance Manager Release (ME55 / ME54N / Fiori Inbox)",
        titleAR: "إطلاق مدير الصيانة (ME55 / ME54N / صندوق وارد Fiori)",
        tCode: "ME55",
        role: "Maintenance Manager",
        whatToDoEN:
          "The maintenance manager reviews pending spare parts PRs in ME55 (collective release), ME54N (individual release), or via the Fiori Inbox app 'Approve Purchase Requisitions'. Release code: M1 for factory spare parts (YMF0), M2 for vehicles (YMV0), M3 for general (YMG0). Verify the requirement is valid, quantities are justified, and specifications are complete. Approve or reject. If plant maintenance triggered the PR (via IW31/IW32 maintenance order), the order can be reviewed in the Information Center (W0019) or IW38.",
        whatToDoAR:
          "يراجع مدير الصيانة طلبات شراء قطع الغيار المعلقة في ME55 (إطلاق جماعي) أو ME54N (إطلاق فردي) أو عبر تطبيق صندوق الوارد في Fiori 'الموافقة على طلبات الشراء'. كود الإطلاق: M1 لقطع غيار المصانع (YMF0)، M2 للمركبات (YMV0)، M3 للعامة (YMG0). تحقق من صحة الطلب وتبرير الكميات واكتمال المواصفات. وافِق أو ارفض. إذا كان صيانة المصنع قد أنشأ طلب الشراء (عبر IW31/IW32)، يمكن مراجعة الأمر في مركز المعلومات (W0019) أو IW38.",
        whatSAPDoesEN:
          "Maintenance manager release (code M1/M2/M3) applied to PR. PR moves to next release level: inventory controller review.",
        whatSAPDoesAR:
          "يُطبَّق إطلاق مدير الصيانة (كود M1/M2/M3) على طلب الشراء. ينتقل طلب الشراء إلى مستوى الإطلاق التالي: مراجعة مراقب المخزون.",
        expectedOutputEN:
          "Maintenance manager approval applied. PR forwarded to inventory controller.",
        expectedOutputAR:
          "تمت الموافقة من مدير الصيانة. تم إحالة طلب الشراء إلى مراقب المخزون.",
      },
      {
        id: "mm-spare-parts-req-step-3",
        stepNumber: 3,
        titleEN: "Inventory Controller Review and Release (ME54N / Fiori Inbox)",
        titleAR: "مراجعة مراقب المخزون وإطلاقه (ME54N / صندوق وارد Fiori)",
        tCode: "ME54N",
        role: "Inventory Controller Specialist",
        whatToDoEN:
          "In ME54N or Fiori Inbox, the inventory controller specialist reviews the spare parts PR. Check whether the item is already in stock (use MB52 or MMBE to verify). If stock is available, reject the PR and advise the requester to use existing stock. If stock is insufficient, verify the specifications and lead time, then apply release code M4 (Spare Parts Specialist release) to fully release the PR for purchasing conversion.",
        whatToDoAR:
          "في ME54N أو صندوق الوارد في Fiori، يراجع مراقب المخزون المتخصص طلب شراء قطع الغيار. تحقق مما إذا كان الصنف موجوداً بالمخزون بالفعل (استخدم MB52 أو MMBE للتحقق). إذا كان المخزون متاحاً، ارفض طلب الشراء وأبلغ الطالب باستخدام المخزون الموجود. إذا كان المخزون غير كافٍ، تحقق من المواصفات ووقت التسليم، ثم طبِّق كود الإطلاق M4 (إطلاق متخصص قطع الغيار) لإطلاق طلب الشراء بالكامل للتحويل إلى أمر شراء.",
        whatSAPDoesEN:
          "Inventory controller applies release code M4. PR is fully released (both M1/M2/M3 + M4 satisfied per strategy R1/R2/R3). PR is now open for conversion to a purchase order by the purchasing team.",
        whatSAPDoesAR:
          "يُطبِّق مراقب المخزون كود الإطلاق M4. يُطلَق طلب الشراء بالكامل (استيفاء كل من M1/M2/M3 + M4 وفق الاستراتيجية R1/R2/R3). طلب الشراء مفتوح الآن للتحويل إلى أمر شراء من قِبَل فريق المشتريات.",
        expectedOutputEN:
          "PR fully released. Purchasing team can now create PO. Spare parts procurement initiated.",
        expectedOutputAR:
          "تم إطلاق طلب الشراء بالكامل. يمكن لفريق المشتريات الآن إنشاء أمر الشراء. بدأ تدبير قطع الغيار.",
      },
    ],
  },

  // ─── MM: Goods Receipt from Production ────────────────────────────────────
  {
    id: "mm-gr-from-production",
    icon: "🏭",
    duration: "15–30 min",
    titleEN: "Goods Receipt from Production",
    titleAR: "استلام البضائع من الإنتاج",
    descriptionEN:
      "Process for receiving finished or semi-finished goods from production into the warehouse. Two variants: (1) Further Processing & Feed Mill — direct MIGO GR against production order (MT101); (2) Processing, Layer, Manure, Protein, Agriculture — shop floor confirmation (MF42N), reservation creation (MB21 MT311), then MIGO transfer posting hourly. ~154 receipts/day. FIFO batch management applied at receiving. Custom GR form: YMM_GR_PRD (F-MM-130-01).",
    descriptionAR:
      "عملية استلام البضائع المنتهية أو شبه المنتهية من الإنتاج في المستودع. متغيران: (1) المعالجة الإضافية ومصنع العلف — MIGO مباشر لاستلام البضائع بالاستناد إلى أمر الإنتاج (MT101)؛ (2) المعالجة والطبقة والسماد والبروتين والزراعة — تأكيد أرضية الإنتاج (MF42N)، إنشاء حجز (MB21 MT311)، ثم ترحيل MIGO للتحويل كل ساعة. ~154 استلام/يوم. تطبيق إدارة دفعات FIFO عند الاستلام. نموذج GR المخصص: YMM_GR_PRD (F-MM-130-01).",
    module: "MM",
    roles: [
      "Stock Keeper",
      "SFC Responsible (Shop Floor Control)",
    ],
    steps: [
      {
        id: "mm-gr-production-step-1a",
        stepNumber: 1,
        titleEN: "Path A – GR from Production Order (MIGO – MT101) [Further Processing & Feed Mill]",
        titleAR: "المسار أ – استلام البضائع من أمر الإنتاج (MIGO – MT101) [المعالجة الإضافية ومصنع العلف]",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "For Further Processing (plant 1050) and Feed Mill (plant 1120): In MIGO, select 'Goods Receipt' and reference the Production Order. Movement type 101 is automatically assigned. Enter the finished/semi-finished material, quantity produced, batch number (set expiry date for FIFO), and receiving storage location. Verify quantity against the production order confirmation. Post the GR. Print the material document using custom form YMM_GR_PRD (F-MM-130-01) as the production slip.",
        whatToDoAR:
          "للمعالجة الإضافية (مصنع 1050) ومصنع العلف (مصنع 1120): في MIGO، اختر 'استلام البضائع' واستند إلى أمر الإنتاج. يُعيَّن نوع الحركة 101 تلقائياً. أدخل المادة المنتهية/شبه المنتهية والكمية المنتَجة ورقم الدفعة (حدد تاريخ انتهاء الصلاحية لـ FIFO) وموقع التخزين المستلم. تحقق من الكمية مقابل تأكيد أمر الإنتاج. ارحِّل استلام البضائع. اطبع مستند المادة باستخدام النموذج المخصص YMM_GR_PRD (F-MM-130-01) كقسيمة الإنتاج.",
        whatSAPDoesEN:
          "Posts GR MT101 against the production order. Increases finished/semi-finished stock. Creates material document and accounting entry (debit FG/SFG stock account, credit production order WIP account). Production order actual cost updated. Batch created with expiry date for FIFO management.",
        whatSAPDoesAR:
          "يرحِّل استلام البضائع MT101 بالاستناد إلى أمر الإنتاج. يزيد مخزون البضائع المنتهية/شبه المنتهية. ينشئ مستند مادة وقيد محاسبة (مدين حساب مخزون البضائع المنتهية/شبه المنتهية، دائن حساب WIP لأمر الإنتاج). تُحدَّث التكلفة الفعلية لأمر الإنتاج. يُنشأ الدفعة بتاريخ انتهاء الصلاحية لإدارة FIFO.",
        expectedOutputEN:
          "Production GR posted (MT101). Stock increased. Production slip printed. Batch created with expiry date.",
        expectedOutputAR:
          "تم ترحيل استلام البضائع من الإنتاج (MT101). تم زيادة المخزون. تمت طباعة قسيمة الإنتاج. تم إنشاء الدفعة بتاريخ انتهاء الصلاحية.",
      },
      {
        id: "mm-gr-production-step-1b",
        stepNumber: 2,
        titleEN: "Path B – Shop Floor Confirmation (MF42N) [Processing / Layer / Manure / Protein / Agriculture]",
        titleAR: "المسار ب – تأكيد أرضية الإنتاج (MF42N) [المعالجة / الطبقة / السماد / البروتين / الزراعة]",
        tCode: "MF42N",
        role: "SFC Responsible (Shop Floor Control)",
        whatToDoEN:
          "For Processing (1100), Layer – Laying (1250), Layer – Rearing (1260), Agriculture (4100), and related plants: In MF42N (Collective Entry of Confirmation), enter production confirmations for all production orders. Record actual quantities produced and yield. This triggers the system to update the production order status and prepares for the transfer reservation.",
        whatToDoAR:
          "للمعالجة (1100) والطبقة – وضع البيض (1250) والطبقة – التربية (1260) والزراعة (4100) والمصانع ذات الصلة: في MF42N (إدخال جماعي للتأكيد)، أدخل تأكيدات الإنتاج لجميع أوامر الإنتاج. سجِّل الكميات الفعلية المنتَجة والمردود. هذا يحفِّز النظام لتحديث حالة أمر الإنتاج والتحضير لحجز التحويل.",
        whatSAPDoesEN:
          "MF42N posts production confirmations. Production order quantities are confirmed. System is now ready for inventory transfer from production to FG storage location.",
        whatSAPDoesAR:
          "يرحِّل MF42N تأكيدات الإنتاج. تُأكَّد كميات أمر الإنتاج. النظام جاهز الآن لتحويل المخزون من الإنتاج إلى موقع تخزين البضائع المنتهية.",
        expectedOutputEN:
          "Production confirmations posted. Production order quantities confirmed.",
        expectedOutputAR:
          "تم ترحيل تأكيدات الإنتاج. تم تأكيد كميات أمر الإنتاج.",
      },
      {
        id: "mm-gr-production-step-1c",
        stepNumber: 3,
        titleEN: "Path B – Create Transfer Reservation and Post Transfer (MB21 / MIGO – MT311)",
        titleAR: "المسار ب – إنشاء حجز التحويل وترحيل التحويل (MB21 / MIGO – MT311)",
        tCode: "MIGO",
        role: "Stock Keeper",
        whatToDoEN:
          "In MB21, the SFC responsible creates a transfer reservation (movement type 311) to move produced quantities from the production storage location to the finished goods storage location. Then in MIGO, the stock keeper posts the transfer posting (MT311) referencing the reservation — one transfer per hour to keep pace with production. Enter batch number with expiry date for FIFO. Print the material document using custom form YMM_GR_PRD (F-MM-130-01).",
        whatToDoAR:
          "في MB21، يُنشئ مسؤول أرضية الإنتاج حجز تحويل (نوع الحركة 311) لنقل الكميات المنتَجة من موقع تخزين الإنتاج إلى موقع تخزين البضائع المنتهية. ثم في MIGO، يرحِّل أمين المستودع قيد التحويل (MT311) بالاستناد إلى الحجز — تحويل واحد في الساعة لمواكبة الإنتاج. أدخل رقم الدفعة وتاريخ انتهاء الصلاحية لـ FIFO. اطبع مستند المادة باستخدام النموذج المخصص YMM_GR_PRD (F-MM-130-01).",
        whatSAPDoesEN:
          "MB21 creates the transfer reservation. MIGO MT311 transfers stock from production location to FG storage. Creates material document. No financial impact (same plant, same valuation area). Batch created with expiry date.",
        whatSAPDoesAR:
          "يُنشئ MB21 حجز التحويل. يُحوِّل MIGO MT311 المخزون من موقع الإنتاج إلى مخزن البضائع المنتهية. ينشئ مستند مادة. لا تأثير مالي (نفس المصنع ونفس منطقة التقييم). تُنشأ الدفعة بتاريخ انتهاء الصلاحية.",
        expectedOutputEN:
          "Transfer posting completed. Finished goods in FG storage location. Batch created with expiry date for FIFO. Production slip printed.",
        expectedOutputAR:
          "اكتمل قيد التحويل. البضائع المنتهية في موقع تخزين البضائع المنتهية. تم إنشاء الدفعة بتاريخ انتهاء الصلاحية لـ FIFO. تمت طباعة قسيمة الإنتاج.",
      },
    ],
  },

  // ─── PM: Corrective Maintenance ───────────────────────────────────────────
  {
    id: "pm-corrective-maintenance",
    icon: "🔧",
    duration: "60 min",
    titleEN: "Corrective Maintenance (Breakdown / Fault Repair)",
    titleAR: "الصيانة التصحيحية (إصلاح الأعطال)",
    descriptionEN:
      "End-to-end corrective maintenance process: operator creates a maintenance notification for a breakdown (IW21), maintenance planner creates and releases the maintenance order (IW31), technician executes the repair, supervisor confirms time and materials (IW41), and planner completes the order (IW32 TECO). ~100–110 notifications/orders per day.",
    descriptionAR:
      "عملية الصيانة التصحيحية من البداية إلى النهاية: يُنشئ المشغّل إشعار صيانة للعطل (IW21)، يُنشئ مخطط الصيانة أمر الصيانة ويُطلقه (IW31)، يُنفّذ الفني الإصلاح، يؤكد المشرف الوقت والمواد (IW41)، ويُكمل المخطط الأمر (IW32 TECO). حوالي 100–110 إشعار/أمر يومياً.",
    module: "PM",
    roles: [
      "Operator / Employee",
      "Maintenance Planner",
      "Maintenance Supervisor",
      "Maintenance Technician",
    ],
    steps: [
      {
        id: "pm-cm-1",
        stepNumber: 1,
        titleEN: "Create Maintenance Notification (IW21 / F1511)",
        titleAR: "إنشاء إشعار الصيانة (IW21 / F1511)",
        tCode: "IW21",
        role: "Operator / Employee",
        whatToDoEN:
          "Open IW21 (or Fiori app F1511 — Request Maintenance). Select notification type for breakdown/fault. Enter the technical object (Fleet Equipment or other asset), describe the fault in free text. Optionally assign object part, damage code, and cause code. Save the notification — it is submitted to the maintenance planner's queue.",
        whatToDoAR:
          "افتح IW21 (أو تطبيق Fiori F1511 — طلب صيانة). حدد نوع الإشعار للعطل. أدخل الكائن التقني (معدات الأسطول أو أصل آخر)، وصف العطل في النص الحر. يمكن اختيارياً تعيين جزء الكائن ورمز الضرر ورمز السبب. احفظ الإشعار — يُرسَل إلى قائمة انتظار مخطط الصيانة.",
        whatSAPDoesEN:
          "Creates a maintenance notification and routes it to the maintenance planner's work list. Notification number is assigned.",
        whatSAPDoesAR:
          "ينشئ إشعار صيانة ويوجّهه إلى قائمة أعمال مخطط الصيانة. يُعيَّن رقم الإشعار.",
        expectedOutputEN: "Maintenance notification created. Planner notified of fault.",
        expectedOutputAR: "تم إنشاء إشعار الصيانة. تم إخطار المخطط بالعطل.",
      },
      {
        id: "pm-cm-2",
        stepNumber: 2,
        titleEN: "Create and Plan Maintenance Order (IW31)",
        titleAR: "إنشاء وتخطيط أمر الصيانة (IW31)",
        tCode: "IW31",
        role: "Maintenance Planner",
        whatToDoEN:
          "Open IW31 (or from IW22 if referencing an existing notification). Enter the maintenance order type, equipment, and planning data. Assess the criticality of the breakdown. Plan: assign manpower (operations), required spare parts (components), and any external services. Check spare part availability — if not in stock, SAP automatically generates a Purchase Requisition and forwards it to purchasing. Confirm the equipment is available for maintenance.",
        whatToDoAR:
          "افتح IW31 (أو من IW22 إذا كان بالإشارة إلى إشعار موجود). أدخل نوع أمر الصيانة والمعدات وبيانات التخطيط. قيّم درجة حرجية العطل. خطّط: عيّن القوى العاملة (العمليات) وقطع الغيار المطلوبة (المكونات) وأي خدمات خارجية. تحقق من توافر قطع الغيار — إذا لم تكن في المخزن، ينشئ SAP تلقائياً طلب شراء ويُحيله إلى قسم المشتريات. تأكد من توافر المعدات للصيانة.",
        whatSAPDoesEN:
          "Creates maintenance order with assigned resources. If components are not in stock, auto-generates Purchase Requisition and routes to purchasing. Order status is set to 'Created'.",
        whatSAPDoesAR:
          "ينشئ أمر الصيانة بالموارد المعيّنة. إذا لم تكن المكونات في المخزن، ينشئ تلقائياً طلب شراء ويوجّهه إلى المشتريات. يُضبط حالة الأمر على 'مُنشَأ'.",
        expectedOutputEN: "Maintenance order created with planned manpower, materials, and services. PRs auto-generated for missing parts.",
        expectedOutputAR: "تم إنشاء أمر الصيانة بالقوى العاملة والمواد والخدمات المخططة. طلبات الشراء تُنشأ تلقائياً للقطع المفقودة.",
      },
      {
        id: "pm-cm-3",
        stepNumber: 3,
        titleEN: "Release Maintenance Order and Print Job Card",
        titleAR: "إطلاق أمر الصيانة وطباعة بطاقة العمل",
        tCode: "IW32",
        role: "Maintenance Planner",
        whatToDoEN:
          "Open IW32 and release the maintenance order by clicking the Release button. Print the Job Card (if required) — this is handed to the maintenance team for execution. The printed job card includes the work operations, required spare parts, and safety instructions.",
        whatToDoAR:
          "افتح IW32 وأطلق أمر الصيانة بالنقر على زر الإطلاق. اطبع بطاقة العمل (إذا لزم الأمر) — تُسلَّم إلى فريق الصيانة للتنفيذ. تشمل بطاقة العمل المطبوعة عمليات العمل وقطع الغيار المطلوبة وتعليمات السلامة.",
        whatSAPDoesEN:
          "Order status changes from 'Created' to 'Released'. Released order authorizes material withdrawal from store and time confirmation. Job card printed from PM module.",
        whatSAPDoesAR:
          "تتغير حالة الأمر من 'مُنشَأ' إلى 'مُطلَق'. يُفوّض الأمر المُطلَق سحب المواد من المخزن وتأكيد الوقت. تُطبع بطاقة العمل من وحدة PM.",
        expectedOutputEN: "Order released. Job card printed and handed to maintenance team.",
        expectedOutputAR: "تم إطلاق الأمر. طُبعت بطاقة العمل وسُلِّمت إلى فريق الصيانة.",
      },
      {
        id: "pm-cm-4",
        stepNumber: 4,
        titleEN: "Execute Repair — Withdraw Spare Parts",
        titleAR: "تنفيذ الإصلاح — سحب قطع الغيار",
        role: "Maintenance Supervisor / Technician",
        whatToDoEN:
          "Maintenance team withdraws the required spare parts from the store using the job card as the withdrawal document (goods issue against the maintenance order in MIGO or via the store). Perform the maintenance work as described in the work operations.",
        whatToDoAR:
          "يسحب فريق الصيانة قطع الغيار المطلوبة من المخزن باستخدام بطاقة العمل كمستند سحب (إصدار بضاعة مقابل أمر الصيانة في MIGO أو عبر المخزن). قم بتنفيذ أعمال الصيانة كما هو موضح في عمليات العمل.",
        whatSAPDoesEN:
          "Spare part withdrawal posts goods issue against the maintenance order (movement type 261). Actual costs accumulate on the order.",
        whatSAPDoesAR:
          "يرحّل سحب قطع الغيار إصدار البضاعة مقابل أمر الصيانة (نوع حركة 261). تتراكم التكاليف الفعلية على الأمر.",
        expectedOutputEN: "Spare parts issued. Repair in progress.",
        expectedOutputAR: "تم إصدار قطع الغيار. الإصلاح جارٍ.",
      },
      {
        id: "pm-cm-5",
        stepNumber: 5,
        titleEN: "Confirm Maintenance Order — Time and Materials (IW41)",
        titleAR: "تأكيد أمر الصيانة — الوقت والمواد (IW41)",
        tCode: "IW41",
        role: "Maintenance Supervisor",
        whatToDoEN:
          "Once the job is completed, open IW41 (Confirmation Entry). Enter: actual man-hours spent per worker, final actual quantities of spare parts consumed, and a detailed description of what was done (activity code and work description). Optionally fill in the cause code in the linked notification. Save the confirmation.",
        whatToDoAR:
          "بمجرد اكتمال العمل، افتح IW41 (إدخال التأكيد). أدخل: ساعات العمل الفعلية لكل عامل، الكميات الفعلية النهائية لقطع الغيار المستهلكة، ووصفاً تفصيلياً لما تم إنجازه (رمز النشاط ووصف العمل). اختيارياً أدخل رمز السبب في الإشعار المرتبط. احفظ التأكيد.",
        whatSAPDoesEN:
          "Records actual labor and material costs against the maintenance order. Updates order status and cost report. Notification cause code updated if filled.",
        whatSAPDoesAR:
          "يسجّل تكاليف العمالة والمواد الفعلية مقابل أمر الصيانة. يحدّث حالة الأمر وتقرير التكلفة. يحدّث رمز سبب الإشعار إذا تم إدخاله.",
        expectedOutputEN: "Time confirmation saved. Actual costs recorded. Order ready for technical completion.",
        expectedOutputAR: "تم حفظ تأكيد الوقت. تم تسجيل التكاليف الفعلية. الأمر جاهز للإنجاز الفني.",
      },
      {
        id: "pm-cm-6",
        stepNumber: 6,
        titleEN: "Technically Complete Maintenance Order (IW32 — TECO)",
        titleAR: "الإنجاز الفني لأمر الصيانة (IW32 — TECO)",
        tCode: "IW32",
        role: "Maintenance Planner",
        whatToDoEN:
          "Open IW32. Verify the completed job on-site and confirm all tasks are done. Review the cost report to check actual vs. planned costs. If the defect is resolved, set the order to 'Technically Complete' (TECO). If the defect persists: Option A — Create a Follow-On Order referencing this order, confirm, and TECO when resolved. Option B — Cancel TECO, create a new operation on the same order, re-release, re-confirm, then TECO.",
        whatToDoAR:
          "افتح IW32. تحقق من العمل المنجز في الموقع وأكد اكتمال جميع المهام. راجع تقرير التكلفة للتحقق من التكاليف الفعلية مقابل المخططة. إذا تم حل العطل، اضبط الأمر على 'الإنجاز الفني' (TECO). إذا استمر العطل: الخيار أ — أنشئ أمر متابعة بالإشارة إلى هذا الأمر، وأكّد وأكمل فنياً عند الحل. الخيار ب — ألغِ TECO، وأنشئ عملية جديدة على نفس الأمر، وأعد الإطلاق والتأكيد ثم TECO.",
        whatSAPDoesEN:
          "TECO status closes the order for further posting. Remaining planned costs are settled. Order appears in maintenance history for the equipment. Settlement of actual costs to the cost center runs at period end.",
        whatSAPDoesAR:
          "تُغلق حالة TECO الأمر لمزيد من الترحيل. تُسوَّى التكاليف المخططة المتبقية. يظهر الأمر في سجل صيانة المعدة. تُنفَّذ تسوية التكاليف الفعلية على مركز التكلفة في نهاية الفترة.",
        expectedOutputEN: "Maintenance order technically complete. Equipment back in service. Full cost history recorded.",
        expectedOutputAR: "اكتمل أمر الصيانة فنياً. عادت المعدة للعمل. تم تسجيل السجل الكامل للتكاليف.",
      },
    ],
  },

  // ─── PM: Equipment Phase-In ────────────────────────────────────────────────
  {
    id: "pm-equipment-phase-in",
    icon: "🆕",
    duration: "30 min",
    titleEN: "Equipment Phase-In",
    titleAR: "إدراج المعدة (تشغيل المعدة الجديدة)",
    descriptionEN:
      "Onboard new fleet equipment or assets into SAP PM after procurement. Create the equipment master, assign class/characteristics, and set up measuring points/counters to enable preventive maintenance scheduling. Managed by the Fleet Central Workshop (FCW) Master Data Admin. ~50–100 per requirement.",
    descriptionAR:
      "إدراج معدات الأسطول أو الأصول الجديدة في SAP PM بعد الشراء. إنشاء سجل بيانات المعدة الرئيسية، وتعيين الفئة والخصائص، وإعداد نقاط القياس/العدادات لتمكين جدولة الصيانة الوقائية. يديرها مسؤول البيانات الرئيسية في ورشة الأسطول المركزية (FCW). 50–100 حسب المتطلبات.",
    module: "PM",
    roles: ["Master Data Admin"],
    steps: [
      {
        id: "pm-equipment-phase-in-step-1",
        stepNumber: 1,
        titleEN: "Create Equipment Master",
        titleAR: "إنشاء سجل البيانات الرئيسية للمعدة",
        tCode: "IE01 / IE25 / IE31",
        role: "Master Data Admin",
        whatToDoEN:
          "Create the equipment master for the new fleet object. Enter the equipment category, description, technical identification number, manufacturer data, and assign it to the maintenance planning plant 1310 (Fleet Central Workshop – FCW). Link to the FI asset number for seamless integration with Finance.",
        whatToDoAR:
          "أنشئ سجل البيانات الرئيسية للمعدة لمركبة الأسطول الجديدة. أدخل فئة المعدة والوصف ورقم التعريف الفني وبيانات الشركة المصنِّعة، وعيِّنها إلى مصنع تخطيط الصيانة 1310 (ورشة الأسطول المركزية – FCW). ارتبط برقم الأصل في FI لضمان التكامل السلس مع الإدارة المالية.",
        whatSAPDoesEN:
          "Creates the equipment master record. Equipment number assigned. Asset-equipment link established in FI-PM integration.",
        whatSAPDoesAR:
          "يُنشئ سجل البيانات الرئيسية للمعدة. تُعيَّن رقم المعدة. يُؤسَّس الربط بين الأصل والمعدة في تكامل FI-PM.",
        expectedOutputEN: "Equipment master created with equipment number.",
        expectedOutputAR: "تم إنشاء سجل البيانات الرئيسية للمعدة مع رقم المعدة.",
      },
      {
        id: "pm-equipment-phase-in-step-2",
        stepNumber: 2,
        titleEN: "Maintain Class and Characteristics",
        titleAR: "الاحتفاظ بالفئة والخصائص",
        tCode: "CL02 / CT04 / IE02",
        role: "Master Data Admin",
        whatToDoEN:
          "Assign the equipment to the relevant class and maintain its characteristics (e.g., engine type, fuel type, load capacity). This enables classification-based reporting and maintenance planning logic.",
        whatToDoAR:
          "عيِّن المعدة إلى الفئة المعنية واحتفظ بخصائصها (مثل نوع المحرك ونوع الوقود وسعة الحمولة). يُمكِّن ذلك إعداد التقارير القائمة على التصنيف ومنطق تخطيط الصيانة.",
        whatSAPDoesEN:
          "Links the equipment to a classification class and stores characteristic values for use in maintenance plans and reporting.",
        whatSAPDoesAR:
          "يربط المعدة بفئة تصنيفية ويحفظ قيم الخصائص للاستخدام في خطط الصيانة وإعداد التقارير.",
        expectedOutputEN: "Equipment classified with relevant characteristics maintained.",
        expectedOutputAR: "تم تصنيف المعدة مع الاحتفاظ بالخصائص المعنية.",
      },
      {
        id: "pm-equipment-phase-in-step-3",
        stepNumber: 3,
        titleEN: "Maintain Measuring Points and Counters",
        titleAR: "الاحتفاظ بنقاط القياس والعدادات",
        tCode: "IK01 / IE02",
        role: "Master Data Admin",
        whatToDoEN:
          "Create measuring points and counters for the equipment. Key counters for fleet objects: FUEL (liters consumed), DISTANCE (km traveled). These enable the IFCU transaction for fuel recording and support counter-based preventive maintenance scheduling.",
        whatToDoAR:
          "أنشئ نقاط قياس وعدادات للمعدة. العدادات الرئيسية لمركبات الأسطول: FUEL (اللترات المستهلَكة)، DISTANCE (الكيلومترات المقطوعة). يُمكِّن ذلك معاملة IFCU لتسجيل الوقود ويدعم جدولة الصيانة الوقائية القائمة على العدادات.",
        whatSAPDoesEN:
          "Creates measuring points (category M) with counter flag enabled. Assigns class characteristics Y_FUEL_CONSUMPTION (L) and Y_DISTANCE_KM (KM) to the equipment for IFCU and maintenance plan use.",
        whatSAPDoesAR:
          "يُنشئ نقاط القياس (الفئة M) مع تفعيل علامة العداد. يُسنِد خصائص الفئة Y_FUEL_CONSUMPTION (لتر) وY_DISTANCE_KM (كم) إلى المعدة لاستخدام IFCU وخطط الصيانة.",
        expectedOutputEN: "Fuel and distance counters created on equipment. Ready for IFCU fuel recording.",
        expectedOutputAR: "تم إنشاء عدادات الوقود والمسافة على المعدة. جاهزة لتسجيل الوقود عبر IFCU.",
      },
      {
        id: "pm-equipment-phase-in-step-4",
        stepNumber: 4,
        titleEN: "Update Equipment Master (Final Data)",
        titleAR: "تحديث سجل البيانات الرئيسية للمعدة (البيانات النهائية)",
        tCode: "IE02",
        role: "Master Data Admin",
        whatToDoEN:
          "Update the equipment master with any additional data: maintenance planner group (100 – FCW Planner Group), location (Z1 – Watania1), responsible cost center, and serial number. Verify all required fields are complete before activating the equipment.",
        whatToDoAR:
          "حدِّث سجل البيانات الرئيسية للمعدة بأي بيانات إضافية: مجموعة مخطط الصيانة (100 – مجموعة مخططي FCW)، والموقع (Z1 – واتانيا 1)، ومركز التكلفة المسؤول، والرقم التسلسلي. تحقَّق من اكتمال جميع الحقول المطلوبة قبل تفعيل المعدة.",
        whatSAPDoesEN:
          "Updates the equipment master with planner group, location, cost center, and serial data. Equipment is now fully configured for maintenance execution.",
        whatSAPDoesAR:
          "يُحدِّث سجل البيانات الرئيسية للمعدة بمجموعة المخطط والموقع ومركز التكلفة والبيانات التسلسلية. المعدة الآن مُهيَّأة بالكامل لتنفيذ الصيانة.",
        expectedOutputEN: "Equipment master fully updated. Equipment active in SAP PM.",
        expectedOutputAR: "تم تحديث سجل البيانات الرئيسية للمعدة بالكامل. المعدة نشطة في SAP PM.",
      },
      {
        id: "pm-equipment-phase-in-step-5",
        stepNumber: 5,
        titleEN: "Verify Equipment in List",
        titleAR: "التحقق من المعدة في القائمة",
        tCode: "IE06 / IH08",
        role: "Master Data Admin",
        whatToDoEN:
          "Run the equipment list (IE06 or IH08) to verify the new equipment appears correctly with all attributes. Confirm it is linked to the correct functional location and maintenance plant. This serves as the final quality check before the equipment goes live.",
        whatToDoAR:
          "شغِّل قائمة المعدات (IE06 أو IH08) للتحقق من ظهور المعدة الجديدة بشكل صحيح مع جميع صفاتها. تأكَّد من ارتباطها بالموقع الوظيفي الصحيح ومصنع الصيانة. يُمثِّل ذلك فحص الجودة النهائي قبل بدء تشغيل المعدة.",
        whatSAPDoesEN:
          "Displays the full equipment list with filter options. Confirms the new equipment record is active and correctly configured in the system.",
        whatSAPDoesAR:
          "يعرض قائمة المعدات الكاملة مع خيارات التصفية. يؤكد أن سجل المعدة الجديد نشط ومُهيَّأ بشكل صحيح في النظام.",
        expectedOutputEN: "Equipment verified in list. Phase-in complete.",
        expectedOutputAR: "تم التحقق من المعدة في القائمة. اكتمل إدراج المعدة.",
      },
    ],
  },

  // ─── PM: Equipment Phase-Out ───────────────────────────────────────────────
  {
    id: "pm-equipment-phase-out",
    icon: "🗑️",
    duration: "30 min",
    titleEN: "Equipment Phase-Out",
    titleAR: "سحب المعدة من الخدمة (إيقاف التشغيل)",
    descriptionEN:
      "Decommission fleet equipment or assets that are no longer economically or technically viable. Close all open orders and notifications, set the deletion flag, and coordinate with Finance for asset retirement. Fleet Central Workshop (FCW). ~5–6 per requirement.",
    descriptionAR:
      "إيقاف تشغيل معدات الأسطول أو الأصول التي لم تعد مجدية اقتصاديًّا أو تقنيًّا. إغلاق جميع أوامر الإشعارات المفتوحة، ووضع علامة الحذف، والتنسيق مع الإدارة المالية لإيقاف الأصل. ورشة الأسطول المركزية (FCW). 5–6 حسب المتطلبات.",
    module: "PM",
    roles: ["Maintenance Planner", "Master Data Admin"],
    steps: [
      {
        id: "pm-equipment-phase-out-step-1",
        stepNumber: 1,
        titleEN: "Deactivate Equipment",
        titleAR: "إلغاء تنشيط المعدة",
        tCode: "IE02",
        role: "Master Data Admin",
        whatToDoEN:
          "Open the equipment master in IE02 and set it to an inactive status. This prevents new maintenance notifications or orders from being created for this equipment while the phase-out process is completed.",
        whatToDoAR:
          "افتح سجل البيانات الرئيسية للمعدة في IE02 واضبطه على حالة غير نشطة. يمنع ذلك إنشاء إشعارات أو أوامر صيانة جديدة لهذه المعدة أثناء اكتمال عملية سحبها من الخدمة.",
        whatSAPDoesEN:
          "Updates equipment system status to inactive. New maintenance documents cannot be created against this equipment.",
        whatSAPDoesAR:
          "يُحدِّث حالة النظام للمعدة إلى غير نشطة. لا يمكن إنشاء مستندات صيانة جديدة لهذه المعدة.",
        expectedOutputEN: "Equipment deactivated. No new orders or notifications can be created.",
        expectedOutputAR: "تم إلغاء تنشيط المعدة. لا يمكن إنشاء أوامر أو إشعارات جديدة.",
      },
      {
        id: "pm-equipment-phase-out-step-2",
        stepNumber: 2,
        titleEN: "Review All Open Orders and Notifications",
        titleAR: "مراجعة جميع الأوامر والإشعارات المفتوحة",
        tCode: "IW33 / IW39",
        role: "Maintenance Planner",
        whatToDoEN:
          "Display all open maintenance orders (IW39) and notifications (IW29) for the equipment. Identify which can be closed as-is and which require completion before closing. All completed orders must be settled within the same financial year.",
        whatToDoAR:
          "اعرض جميع أوامر الصيانة المفتوحة (IW39) والإشعارات (IW29) للمعدة. حدِّد ما يمكن إغلاقه كما هو وما يتطلب الإكمال قبل الإغلاق. يجب تسوية جميع الأوامر المكتملة في نفس السنة المالية.",
        whatSAPDoesEN:
          "Displays lists of open orders and notifications for the equipment. Allows the planner to review status and take action.",
        whatSAPDoesAR:
          "يعرض قوائم الأوامر والإشعارات المفتوحة للمعدة. يسمح للمخطط بمراجعة الحالة واتخاذ الإجراءات.",
        expectedOutputEN: "List of open items reviewed. Plan for closure established.",
        expectedOutputAR: "تمت مراجعة قائمة البنود المفتوحة. تم وضع خطة الإغلاق.",
      },
      {
        id: "pm-equipment-phase-out-step-3",
        stepNumber: 3,
        titleEN: "Close All Open Orders and Notifications",
        titleAR: "إغلاق جميع الأوامر والإشعارات المفتوحة",
        tCode: "IW32 / IW38",
        role: "Maintenance Planner",
        whatToDoEN:
          "Technically complete (TECO) all open maintenance orders via IW32. Close notifications via IW38. Verify depreciation is checked in Finance. Ensure no open reservations, purchase requisitions, or goods movements remain against the equipment orders.",
        whatToDoAR:
          "أنجز فنيًّا (TECO) جميع أوامر الصيانة المفتوحة عبر IW32. أغلق الإشعارات عبر IW38. تحقَّق من مراجعة الإهلاك في الإدارة المالية. تأكَّد من عدم وجود حجوزات مفتوحة أو طلبات شراء أو حركات بضائع معلَّقة على أوامر المعدة.",
        whatSAPDoesEN:
          "Sets TECO status on all orders. Closes notifications. Remaining costs are settled to cost centers at period end.",
        whatSAPDoesAR:
          "يضبط حالة TECO على جميع الأوامر. يغلق الإشعارات. تُسوَّى التكاليف المتبقية على مراكز التكلفة في نهاية الفترة.",
        expectedOutputEN: "All open orders technically completed. All notifications closed.",
        expectedOutputAR: "تم الإنجاز الفني لجميع الأوامر المفتوحة. تم إغلاق جميع الإشعارات.",
      },
      {
        id: "pm-equipment-phase-out-step-4",
        stepNumber: 4,
        titleEN: "Set Deletion Flag for Equipment",
        titleAR: "وضع علامة الحذف للمعدة",
        tCode: "IE02",
        role: "Master Data Admin",
        whatToDoEN:
          "Open the equipment master in IE02 and set the deletion flag. Also flag the Equipment BOM, task list, and related master data for deletion. Coordinate with Finance to retire the linked FI asset. The equipment will no longer appear in active lists and no new documents can be created.",
        whatToDoAR:
          "افتح سجل البيانات الرئيسية للمعدة في IE02 وضع علامة الحذف. ضع أيضًا علامة الحذف على قائمة مكونات المعدة وقائمة المهام وبيانات الرئيسية المرتبطة. نسِّق مع الإدارة المالية لإيقاف الأصل المرتبط في FI. لن تظهر المعدة في القوائم النشطة ولن يمكن إنشاء مستندات جديدة.",
        whatSAPDoesEN:
          "Sets the deletion flag on the equipment master. Equipment excluded from active reporting. Asset retirement posting in FI removes it from the asset register.",
        whatSAPDoesAR:
          "يضع علامة الحذف على سجل البيانات الرئيسية للمعدة. يُستثنى من التقارير النشطة. يُزيله ترحيل إيقاف الأصل في FI من سجل الأصول.",
        expectedOutputEN: "Equipment flagged for deletion. Phase-out complete. Asset retired in Finance.",
        expectedOutputAR: "تم وضع علامة الحذف على المعدة. اكتمل سحبها من الخدمة. تم إيقاف الأصل في الإدارة المالية.",
      },
    ],
  },

  // ─── PM: Vehicle Fuel Consumption ─────────────────────────────────────────
  {
    id: "pm-vehicle-fuel-consumption",
    icon: "⛽",
    duration: "5 min",
    titleEN: "Vehicle Fuel Consumption Recording",
    titleAR: "تسجيل استهلاك وقود المركبات",
    descriptionEN:
      "Record vehicle fuel consumption and travel distance at AWP gas stations using the IFCU Fiori app. Each refueling creates a goods issue from the gas station storage location and an FI cost document posted to the vehicle's cost center. ~200–250 transactions/day across Watania1/2/3 gas stations.",
    descriptionAR:
      "تسجيل استهلاك وقود المركبات ومسافات السفر في محطات بنزين الوطنية باستخدام تطبيق Fiori IFCU. يُنشئ كل تزويد بالوقود إصدار بضاعة من موقع تخزين المحطة ومستند تكلفة في FI مُرحَّل على مركز تكلفة المركبة. نحو 200–250 معاملة يوميًّا في محطات واتانيا 1/2/3.",
    module: "PM",
    roles: ["Fuel Station Store Keeper"],
    steps: [
      {
        id: "pm-vehicle-fuel-step-1",
        stepNumber: 1,
        titleEN: "Open IFCU – Enter Usage for Vehicle",
        titleAR: "فتح IFCU – إدخال الاستخدام للمركبة",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Open the IFCU Fiori app (tile: 'Consumption-Relevant Measurement Document Recording / Enter Usage for Vehicle') or use T-code IFCU in SAP GUI. This is the single transaction for recording all fuel consumption data.",
        whatToDoAR:
          "افتح تطبيق Fiori IFCU (القطعة: 'تسجيل مستند القياس المتعلق بالاستهلاك / إدخال الاستخدام للمركبة') أو استخدم كود المعاملة IFCU في واجهة SAP GUI. هذه هي المعاملة الوحيدة لتسجيل جميع بيانات استهلاك الوقود.",
        whatSAPDoesEN: "Opens the fuel consumption recording screen. Ready for vehicle and fuel data entry.",
        whatSAPDoesAR: "يفتح شاشة تسجيل استهلاك الوقود. جاهز لإدخال بيانات المركبة والوقود.",
        expectedOutputEN: "IFCU recording screen open.",
        expectedOutputAR: "شاشة تسجيل IFCU مفتوحة.",
      },
      {
        id: "pm-vehicle-fuel-step-2",
        stepNumber: 2,
        titleEN: "Enter Equipment (Fleet Object) Number",
        titleAR: "إدخال رقم المعدة (مركبة الأسطول)",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Search for the vehicle's equipment number using the technical identification number (license plate or fleet ID). Select the correct fleet equipment to link the fuel record to the vehicle's cost center and measuring points.",
        whatToDoAR:
          "ابحث عن رقم معدة المركبة باستخدام رقم التعريف الفني (رقم اللوحة أو معرِّف الأسطول). اختر معدة الأسطول الصحيحة لربط سجل الوقود بمركز تكلفة المركبة ونقاط القياس.",
        whatSAPDoesEN: "Identifies the fleet equipment object and loads its measuring points (FUEL counter, DISTANCE counter) for data entry.",
        whatSAPDoesAR: "يُحدِّد كائن معدة الأسطول ويُحمِّل نقاط قياسه (عداد الوقود، عداد المسافة) لإدخال البيانات.",
        expectedOutputEN: "Fleet equipment identified. Measuring points loaded.",
        expectedOutputAR: "تم تحديد معدة الأسطول. تم تحميل نقاط القياس.",
      },
      {
        id: "pm-vehicle-fuel-step-3",
        stepNumber: 3,
        titleEN: "Select Gas Station",
        titleAR: "اختيار محطة البنزين",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Select the gas station from which fuel is being issued. AWP gas stations: W011 (Fuel S. Wat1 / plant 1010 / SLoc Q011), W012 (Fuel S. Wat2 / SLoc Q012), W013 (Fuel S. Wat3 / SLoc Q013). This determines which storage location's stock is reduced.",
        whatToDoAR:
          "اختر محطة البنزين التي يُصدَر منها الوقود. محطات بنزين الوطنية: W011 (واتانيا1 / مصنع 1010 / موقع Q011)، W012 (واتانيا2 / موقع Q012)، W013 (واتانيا3 / موقع Q013). يُحدِّد ذلك موقع التخزين الذي يُخفَّض مخزونه.",
        whatSAPDoesEN: "Links the fuel transaction to the selected gas station storage location (Q011/Q012/Q013).",
        whatSAPDoesAR: "يربط معاملة الوقود بموقع تخزين محطة البنزين المختارة (Q011/Q012/Q013).",
        expectedOutputEN: "Gas station selected. Storage location determined.",
        expectedOutputAR: "تم اختيار محطة البنزين. تم تحديد موقع التخزين.",
      },
      {
        id: "pm-vehicle-fuel-step-4",
        stepNumber: 4,
        titleEN: "Select Fluid Type and Record Consumed Fuel Quantity",
        titleAR: "اختيار نوع السائل وتسجيل كمية الوقود المستهلَكة",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Select the fuel type (Fluid Type field) and enter the quantity dispensed in liters (UOM: L). The quantity entered will be issued from the gas station stock as a goods issue (MT 201 – GI for cost center).",
        whatToDoAR:
          "اختر نوع الوقود (حقل نوع السائل) وأدخل الكمية الموزَّعة باللترات (وحدة القياس: L). ستُصدَر الكمية المدخلة من مخزون محطة البنزين كإصدار بضاعة (نوع الحركة 201 – إصدار بضاعة لمركز التكلفة).",
        whatSAPDoesEN: "Prepares a goods issue of the entered fuel quantity (L) from the gas station storage location against the vehicle's cost center.",
        whatSAPDoesAR: "يُعِدُّ إصدار بضاعة للكمية المدخلة من الوقود (لتر) من موقع تخزين محطة البنزين مقابل مركز تكلفة المركبة.",
        expectedOutputEN: "Fuel type and quantity entered.",
        expectedOutputAR: "تم إدخال نوع الوقود والكمية.",
      },
      {
        id: "pm-vehicle-fuel-step-5",
        stepNumber: 5,
        titleEN: "Record Distance Counter Reading",
        titleAR: "تسجيل قراءة عداد المسافة",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Enter the current odometer/mileage reading (in KM) into the DISTANCE measuring point counter field. This records the vehicle's accumulated travel distance in SAP and is required before saving.",
        whatToDoAR:
          "أدخل قراءة العداد/عداد المسافة الحالية (بالكيلومترات) في حقل عداد نقطة قياس المسافة. يسجِّل ذلك المسافة المتراكمة للمركبة في SAP وهو مطلوب قبل الحفظ.",
        whatSAPDoesEN: "Records the current distance counter reading (KM) as a measurement document on the vehicle's DISTANCE measuring point.",
        whatSAPDoesAR: "يسجِّل قراءة عداد المسافة الحالية (كم) كمستند قياس على نقطة قياس DISTANCE للمركبة.",
        expectedOutputEN: "Distance counter reading entered.",
        expectedOutputAR: "تم إدخال قراءة عداد المسافة.",
      },
      {
        id: "pm-vehicle-fuel-step-6",
        stepNumber: 6,
        titleEN: "Confirm and Save – Post Fuel Consumption",
        titleAR: "التأكيد والحفظ – ترحيل استهلاك الوقود",
        tCode: "IFCU",
        role: "Fuel Station Store Keeper",
        whatToDoEN:
          "Verify that BOTH measuring points (FUEL quantity and DISTANCE reading) have been recorded. Then save. Both entries are mandatory before saving — the system will not post if either is missing.",
        whatToDoAR:
          "تحقَّق من تسجيل نقطتَي القياس كلتيهما (كمية الوقود وقراءة المسافة). ثم احفظ. كلا الإدخالَين إلزامي قبل الحفظ — لن يرحِّل النظام إذا كان أيٌّ منهما مفقودًا.",
        whatSAPDoesEN:
          "Posts MT 201 (GI for cost center) from gas station storage location. Creates a material document reducing fuel stock. Creates an FI document posting the fuel cost to the vehicle's cost center. Creates a measurement document updating the DISTANCE counter on the equipment.",
        whatSAPDoesAR:
          "يرحِّل نوع الحركة 201 (إصدار بضاعة لمركز التكلفة) من موقع تخزين محطة البنزين. يُنشئ مستند مادة يخفض مخزون الوقود. يُنشئ مستند FI يرحِّل تكلفة الوقود على مركز تكلفة المركبة. يُنشئ مستند قياس يُحدِّث عداد DISTANCE على المعدة.",
        expectedOutputEN:
          "Fuel consumption posted. Material document, FI cost document, and distance measurement document all created.",
        expectedOutputAR:
          "تم ترحيل استهلاك الوقود. تم إنشاء مستند المادة ومستند تكلفة FI ومستند قياس المسافة.",
      },
    ],
  },

  // ── 6. Hatchery Business Process ─────────────────────────────────────────
  {
    id: "hatchery-process",
    icon: "🐣",
    duration: "30 min",
    titleEN: "Hatchery Business Process",
    titleAR: "عملية المفرخة",
    descriptionEN:
      "Egg collection from parent farms, grading, setting, candling, hatching, and DOC delivery.",
    descriptionAR:
      "جمع البيض من مزارع الأمهات والتدريج والتحضين والشمعنة والتفريخ وتسليم كتاكيت يوم التفريخ.",
    module: "PP",
    roles: ["Hatchery Responsible", "QM Inspector"],
    chartImages: ["/process-charts/hatchery-process.png"],
    steps: [
      {
        id: "hatch-1",
        stepNumber: 1,
        titleEN: "Receive Hatching Eggs from Parent Farm",
        titleAR: "استلام بيض التفريخ من مزرعة الأمهات",
        tCode: "MIGO",
        role: "Hatchery Responsible",
        whatToDoEN:
          "Receive the hatching eggs delivery from the parent farm grading station. Post a Goods Receipt (A01) in MIGO against the production order for hatching eggs. Record the batch number, quantity, and date of lay. Assign the hatchery trolley number for tracking.",
        whatToDoAR:
          "استلم تسليم بيض التفريخ من محطة تدريج مزرعة الأمهات. ارحّل استلام بضاعة (A01) في MIGO مقابل أمر الإنتاج لبيض التفريخ. سجّل رقم الدفعة والكمية وتاريخ البيض. خصّص رقم عربة المفرخة للتتبع.",
        whatSAPDoesEN:
          "Creates a material document for the eggs GR. Updates stock of hatching eggs in the hatchery plant. Links the batch to the parent flock production order for full traceability.",
        whatSAPDoesAR:
          "ينشئ مستند مادة لاستلام البيض. يحدّث مخزون بيض التفريخ في مصنع المفرخة. يربط الدفعة بأمر إنتاج قطيع الأمهات لضمان التتبع الكامل.",
        expectedOutputEN:
          "Material document created. Hatching egg stock updated. Batch visible in MB52 with parent flock batch classification.",
        expectedOutputAR:
          "تم إنشاء مستند المادة. مخزون بيض التفريخ محدَّث. الدفعة مرئية في MB52 مع تصنيف دفعة قطيع الأمهات.",
      },
      {
        id: "hatch-2",
        stepNumber: 2,
        titleEN: "Candling on Day 10",
        titleAR: "الشمعنة في اليوم العاشر",
        tCode: "QA32",
        role: "QM Inspector",
        whatToDoEN:
          "On day 10 after setting, perform candling to check embryo development. Record QM inspection results in QA32: count fertile, infertile, dead-in-shell, and cracked eggs. Record the sample candling results. Remove infertile and dead eggs from setter.",
        whatToDoAR:
          "في اليوم العاشر بعد التحضين، نفّذ الشمعنة للتحقق من نمو الجنين. سجّل نتائج فحص QM في QA32: عدّ البيض الخصيب وغير الخصيب والميت في القشرة والمكسور. سجّل نتائج الشمعنة العينية. أزل البيض غير الخصيب والميت من المحضنة.",
        whatSAPDoesEN:
          "Records candling results against the inspection lot for the hatching egg batch. Updates quality statistics. Rejected eggs quantity is posted as scrap via MIGO.",
        whatSAPDoesAR:
          "يسجّل نتائج الشمعنة مقابل دفعة الفحص لدفعة بيض التفريخ. يحدّث إحصائيات الجودة. كمية البيض المرفوض تُرحَّل كخردة عبر MIGO.",
        expectedOutputEN:
          "Candling results recorded. Fertility rate calculated. Infertile eggs removed. Setter loaded with verified fertile eggs for transfer to hatcher after 18–18.5 days.",
        expectedOutputAR:
          "تم تسجيل نتائج الشمعنة. تم احتساب معدل الخصوبة. تم إزالة البيض غير الخصيب. المحضنة محمّلة بالبيض الخصيب الموثّق للنقل إلى الفقّاسة بعد 18-18.5 يوماً.",
      },
      {
        id: "hatch-3",
        stepNumber: 3,
        titleEN: "Transfer to Hatcher & Hatch-Out GR",
        titleAR: "النقل إلى الفقّاسة واستلام التفريخ",
        tCode: "MIGO",
        role: "Hatchery Responsible",
        whatToDoEN:
          "After 18–18.5 days in the setter, transfer eggs to the hatcher. After 2.5–3 days, perform hatch-out. Grade DOC (day-old chicks): vaccinate, sort, and count. Post Goods Receipt for DOC production order. Post Goods Issue for by-products (rejected eggs, cracked eggs).",
        whatToDoAR:
          "بعد 18-18.5 يوماً في المحضنة، انقل البيض إلى الفقّاسة. بعد 2.5-3 أيام، نفّذ التفريخ. درّج الكتاكيت (كتاكيت يوم التفريخ): التطعيم والفرز والعد. ارحّل استلام البضاعة لأمر إنتاج الكتاكيت. ارحّل إصدار البضاعة للمنتجات الثانوية (البيض المرفوض والمكسور).",
        whatSAPDoesEN:
          "Creates GR material document for DOC. Updates DOC stock for transfer to broiler or parent farms. Posts by-product movements. Closes the hatching egg production order. Generates hatchability statistics.",
        whatSAPDoesAR:
          "ينشئ مستند مادة استلام البضاعة للكتاكيت. يحدّث مخزون الكتاكيت للنقل إلى مزارع الدجاج اللاحم أو الأمهات. يرحّل حركات المنتجات الثانوية. يُغلق أمر إنتاج بيض التفريخ. يُولّد إحصائيات قابلية التفريخ.",
        expectedOutputEN:
          "DOC stock created in system. Hatchability % recorded. By-products posted. Production order for hatching eggs closed (DLV/TECO). DOC ready for placement at farms.",
        expectedOutputAR:
          "مخزون الكتاكيت تم إنشاؤه في النظام. تم تسجيل نسبة قابلية التفريخ. تم ترحيل المنتجات الثانوية. أمر إنتاج بيض التفريخ مغلق (DLV/TECO). الكتاكيت جاهزة للتوزيع على المزارع.",
      },
    ],
  },

  // ── 7. Slaughterhouse & Processing ───────────────────────────────────────
  {
    id: "slaughterhouse-process",
    icon: "🏪",
    duration: "50 min",
    titleEN: "Slaughterhouse & Processing",
    titleAR: "عملية المسلخ والتصنيع",
    descriptionEN:
      "Receive live birds, process through slaughter line, grade and pack finished product using REM.",
    descriptionAR:
      "استلام الطيور الحية والمعالجة عبر خط الذبح وتدريج وتعبئة المنتج النهائي باستخدام REM.",
    module: "PP",
    roles: ["Processing Responsible", "Production Supervisor"],
    chartImages: [
      "/process-charts/slaughterhouse-process-p1.png",
      "/process-charts/slaughterhouse-process-p2.png",
      "/process-charts/processing-workflow.png",
    ],
    steps: [
      {
        id: "sltr-1",
        stepNumber: 1,
        titleEN: "Receive Live Birds (Truck Unloading)",
        titleAR: "استلام الطيور الحية (تفريغ الشاحنة)",
        tCode: "MIGO",
        role: "Processing Responsible",
        whatToDoEN:
          "Receive the live bird truck at the plant. Unload crates and leave boxes for 30 minutes after unloading. Transfer box counts to the GP system for tracking. Post Goods Receipt for live birds against the production order in MIGO (movement type 101).",
        whatToDoAR:
          "استقبل شاحنة الطيور الحية في المصنع. فرّغ الأقفاص واترك الصناديق لمدة 30 دقيقة بعد التفريغ. انقل عدد الصناديق إلى نظام GP للتتبع. ارحّل استلام البضاعة للطيور الحية مقابل أمر الإنتاج في MIGO (نوع الحركة 101).",
        whatSAPDoesEN:
          "Creates a material document for live bird receipt. Updates live bird stock. Links the batch to the broiler farm placement for full supply chain traceability.",
        whatSAPDoesAR:
          "ينشئ مستند مادة لاستلام الطيور الحية. يحدّث مخزون الطيور الحية. يربط الدفعة بإيداع مزرعة الدجاج اللاحم لضمان التتبع الكامل لسلسلة التوريد.",
        expectedOutputEN:
          "Live bird GR posted. Material document created. Bird count and weight recorded. Production order goods receipt confirmed.",
        expectedOutputAR:
          "تم ترحيل استلام الطيور الحية. مستند المادة تم إنشاؤه. تم تسجيل عدد الطيور والوزن. تم تأكيد استلام البضاعة لأمر الإنتاج.",
      },
      {
        id: "sltr-2",
        stepNumber: 2,
        titleEN: "Slaughter Line Processing",
        titleAR: "معالجة خط الذبح",
        tCode: "CO11N",
        role: "Production Supervisor",
        whatToDoEN:
          "Birds proceed through the slaughter line: hanging → stunning (55 sec) → slaughtering (22 sec) → bleeding (3:30 min) → scalding (1:55 min) → de-feathering → evisceration → chilling → weighing → grading (Grade A / Grade C). Record production confirmation in CO11N for each production version.",
        whatToDoAR:
          "تمر الطيور عبر خط الذبح: التعليق → التخدير (55 ثانية) → الذبح (22 ثانية) → النزيف (3:30 دقيقة) → السلق (1:55 دقيقة) → نزع الريش → تنظيف الأحشاء → التبريد → الوزن → التدريج (الدرجة A / الدرجة C). سجّل تأكيد الإنتاج في CO11N لكل إصدار إنتاجي.",
        whatSAPDoesEN:
          "Records the activity confirmation for the slaughter order. Updates WIP quantities. Triggers goods receipt for finished product. Links yield data to the production order for costing.",
        whatSAPDoesAR:
          "يسجّل تأكيد النشاط لأمر الذبح. يحدّث كميات العمل قيد التنفيذ. يُشغّل استلام البضاعة للمنتج النهائي. يربط بيانات المحصول بأمر الإنتاج للتكلفة.",
        expectedOutputEN:
          "Activity confirmation posted. WIP updated. Graded output quantities recorded (Grade A whole bird, Grade C). Ready for assembly backflush in REM.",
        expectedOutputAR:
          "تم ترحيل تأكيد النشاط. تم تحديث العمل قيد التنفيذ. تم تسجيل كميات المخرجات المدرّجة (الدرجة A دجاجة كاملة، الدرجة C). جاهز لتنفيذ الترحيل العكسي في REM.",
      },
      {
        id: "sltr-3",
        stepNumber: 3,
        titleEN: "REM Assembly Backflush (MFBF)",
        titleAR: "الترحيل العكسي لتجميع REM (MFBF)",
        tCode: "MFBF",
        role: "Processing Responsible",
        whatToDoEN:
          "Navigate to MFBF. Select posting date and Confirmation Type (Assembly Backflush). Enter Material (e.g. 920 — whole grade fresh), Plant (1100), Production Version (120). The batch appears automatically. Post assembly backflush for finished product (GR: increases stock 930) and consume the live bird input (GI: movement 261). Also post co-products and by-products (gizzard 507, feather 504, heart 508, liver 511, feet 514, blood 517).",
        whatToDoAR:
          "انتقل إلى MFBF. حدد تاريخ الترحيل ونوع التأكيد (الترحيل العكسي للتجميع). أدخل المادة (مثل 920 — دجاجة كاملة طازجة) والمصنع (1100) وإصدار الإنتاج (120). تظهر الدفعة تلقائياً. ارحّل الترحيل العكسي للتجميع للمنتج النهائي (استلام البضاعة: يزيد المخزون 930) واستهلاك مدخلات الطيور الحية (إصدار البضاعة: الحركة 261). كذلك ارحّل المنتجات المشتركة والثانوية (الحوصلة 507، الريش 504، القلب 508، الكبد 511، القدم 514، الدم 517).",
        whatSAPDoesEN:
          "Posts the repetitive manufacturing backflush. Simultaneously creates GR for finished goods and GI for all consumed components. Updates all co-product and by-product stock balances. Closes the production order quantity for the period.",
        whatSAPDoesAR:
          "يرحّل الترحيل العكسي للتصنيع التكراري. يُنشئ في آنٍ واحد استلام البضاعة للمنتجات النهائية وإصدار البضاعة لجميع المكوّنات المستهلكة. يحدّث أرصدة مخزون جميع المنتجات المشتركة والثانوية. يُغلق كمية أمر الإنتاج للفترة.",
        expectedOutputEN:
          "Finished product stock increased (material 930). All by-products posted (507, 504, 508, 511, 514, 517). Live bird consumption confirmed (mvt 261). Production order quantity fulfilled.",
        expectedOutputAR:
          "مخزون المنتج النهائي ازداد (المادة 930). تم ترحيل جميع المنتجات الثانوية (507، 504، 508، 511، 514، 517). تأكيد استهلاك الطيور الحية (الحركة 261). كمية أمر الإنتاج مستوفاة.",
      },
    ],
  },

  // ── 8. C.Layer (Commercial Layer) Business Process ────────────────────────
  {
    id: "clayer-process",
    icon: "🥚",
    duration: "60 min",
    titleEN: "Commercial Layer Business Process",
    titleAR: "عملية الدجاج البياض التجاري",
    descriptionEN:
      "Full lifecycle: rearing, laying, egg collection, grading, packing, and SAP production orders.",
    descriptionAR:
      "الدورة الكاملة: التربية والإنتاج وجمع البيض والتدريج والتعبئة وأوامر إنتاج SAP.",
    module: "PP",
    roles: ["C.Layer Responsible", "Production Supervisor", "QM Inspector"],
    chartImages: [
      "/process-charts/clayer-business-process-p1.png",
      "/process-charts/clayer-business-process-p2.png",
      "/process-charts/clayer-business-process-p3.png",
      "/process-charts/clayer-business-process-p4.png",
    ],
    steps: [
      {
        id: "clayer-1",
        stepNumber: 1,
        titleEN: "Receive Day-Old Chicks (DOC) for Rearing",
        titleAR: "استلام كتاكيت يوم التفريخ للتربية",
        tCode: "MIGO",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Clean and disinfect rearing farm/houses (scraping and dry cleaning). Receive day-old chicks via Goods Receipt in MIGO against the rearing production order. Record DOC quantity, batch, and placement date. Begin rearing phase: feeding, watering, medication, and vaccination programme up to 16–17 weeks.",
        whatToDoAR:
          "نظّف وعقّم مزارع/منازل التربية (الكشط والتنظيف الجاف). استلم كتاكيت يوم التفريخ عبر استلام البضاعة في MIGO مقابل أمر إنتاج التربية. سجّل كمية الكتاكيت والدفعة وتاريخ التوزيع. ابدأ مرحلة التربية: برامج التغذية والسقاية والدواء والتطعيم حتى 16-17 أسبوعاً.",
        whatSAPDoesEN:
          "Posts the DOC receipt on the rearing production order. Starts the production order clock. Enables daily activity confirmations for feed, water, medication, and vaccination costs.",
        whatSAPDoesAR:
          "يرحّل استلام الكتاكيت على أمر إنتاج التربية. يبدأ مؤقت أمر الإنتاج. يتيح تأكيدات النشاط اليومية لتكاليف العلف والسقاية والدواء والتطعيم.",
        expectedOutputEN:
          "DOC GR posted on rearing order. Batch created. Daily confirmation structure active for the rearing period.",
        expectedOutputAR:
          "تم ترحيل استلام الكتاكيت على أمر التربية. تم إنشاء الدفعة. هيكل التأكيد اليومي نشط لفترة التربية.",
      },
      {
        id: "clayer-2",
        stepNumber: 2,
        titleEN: "Transfer Pullets to Laying Farm",
        titleAR: "نقل الدجاجات البكر إلى مزرعة الإنتاج",
        tCode: "MIGO",
        role: "C.Layer Responsible",
        whatToDoEN:
          "At 16–17 weeks, prepare for transfer. Clean and disinfect laying farm/houses. Post Goods Issue (by-product) for pullets (64WK equivalent) from the rearing order. Post Goods Receipt for pullets at the laying farm order. Begin laying phase management (feeding, watering, medication, vaccination up to depletion age 79–100 weeks).",
        whatToDoAR:
          "عند 16-17 أسبوعاً، استعد للنقل. نظّف وعقّم مزارع/منازل الإنتاج. ارحّل إصدار البضاعة (منتج ثانوي) للدجاجات البكر من أمر التربية. ارحّل استلام البضاعة للدجاجات البكر على أمر مزرعة الإنتاج. ابدأ إدارة مرحلة الإنتاج (تغذية، سقاية، دواء، تطعيم حتى سن الاستنزاف 79-100 أسبوع).",
        whatSAPDoesEN:
          "Posts the GI/GR transfer movement between rearing and laying orders. Closes the rearing production order (DLV/TECO). Activates the laying production order for daily confirmations.",
        whatSAPDoesAR:
          "يرحّل حركة نقل إصدار/استلام البضاعة بين أوامر التربية والإنتاج. يُغلق أمر إنتاج التربية (DLV/TECO). يُفعّل أمر إنتاج الإنتاج للتأكيدات اليومية.",
        expectedOutputEN:
          "Transfer movement posted. Rearing order closed. Laying order active. Pullet batch traceable to the laying farm.",
        expectedOutputAR:
          "تم ترحيل حركة النقل. أمر التربية مغلق. أمر الإنتاج نشط. دفعة الدجاجات البكر قابلة للتتبع إلى مزرعة الإنتاج.",
      },
      {
        id: "clayer-3",
        stepNumber: 3,
        titleEN: "Egg Collection, Grading & Packing",
        titleAR: "جمع البيض والتدريج والتعبئة",
        tCode: "CO11N",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Collect eggs daily. Separate thin-shell, broken, and dirty eggs. Send to automatic grading, candling, and washing machine. Grade eggs into sizes. Print trays, pack in cartons, stamp date, seal cartons. Confirm egg production in CO11N (activity confirmation). Post finished product GR for graded eggs.",
        whatToDoAR:
          "اجمع البيض يومياً. افصل البيض رقيق القشرة والمكسور والملوّث. أرسله إلى آلة التدريج التلقائي والشمعنة والغسيل. درّج البيض حسب الأحجام. اطبع الأطباق وعبّئ في كراتين واختم التاريخ وأحكم إغلاق الكراتين. أكّد إنتاج البيض في CO11N (تأكيد النشاط). ارحّل استلام البضاعة للمنتج النهائي للبيض المدرّج.",
        whatSAPDoesEN:
          "Records the daily egg production quantity against the laying production order. Updates finished egg stock in the grading station. Triggers QM inspection if configured. Calculates yield and production efficiency.",
        whatSAPDoesAR:
          "يسجّل كمية إنتاج البيض اليومية مقابل أمر إنتاج الإنتاج. يحدّث مخزون البيض النهائي في محطة التدريج. يُشغّل فحص QM إذا تم تهيئته. يحسب المحصول وكفاءة الإنتاج.",
        expectedOutputEN:
          "Daily egg production confirmed. Graded egg stock updated per size category. Thin-shell and broken eggs posted as scrap. Finished product ready for dispatch.",
        expectedOutputAR:
          "تم تأكيد إنتاج البيض اليومي. مخزون البيض المدرّج محدَّث حسب فئة الحجم. تم ترحيل البيض رقيق القشرة والمكسور كخردة. المنتج النهائي جاهز للشحن.",
      },
    ],
  },

  // ── 9. Parent-to-Processing Chain ────────────────────────────────────────
  {
    id: "parent-to-processing",
    icon: "🔗",
    duration: "60 min",
    titleEN: "Parent-to-Processing Chain",
    titleAR: "سلسلة الأمهات إلى التصنيع",
    descriptionEN:
      "End-to-end flow: Parent rearing → hatching egg production → hatchery → broiler → processing. Covers the full AWP supply chain in SAP.",
    descriptionAR:
      "التدفق من البداية إلى النهاية: تربية الأمهات → إنتاج بيض التفريخ → المفرخة → الدجاج اللاحم → التصنيع. يغطي سلسلة توريد AWP الكاملة في SAP.",
    module: "PP",
    roles: ["PP Planner", "PCT Responsible", "Farm Supervisor"],
    chartImages: [
      "/process-charts/parent-to-processing-p1.png",
      "/process-charts/parent-to-processing-p2.png",
      "/process-charts/parent-to-processing-p3.png",
      "/process-charts/supply-chain.png",
    ],
    steps: [
      {
        id: "p2p-1",
        stepNumber: 1,
        titleEN: "Create Parent Rearing Production Order",
        titleAR: "إنشاء أمر إنتاج تربية الأمهات",
        tCode: "CO01",
        role: "PCT Responsible",
        whatToDoEN:
          "Check the placement plan for parent rearing. Create a production order in CO01 for house preparation (cleaning/disinfection). After approval, issue disinfectants and medication against the preparation order. Once house is ready, create production order for Pullets 19WK. Receive DOC PO. Issue DOC to parent rearing order.",
        whatToDoAR:
          "تحقق من خطة التوزيع لتربية الأمهات. أنشئ أمر إنتاج في CO01 لتجهيز المنزل (التنظيف/التعقيم). بعد الموافقة، أصدر المطهرات والدواء مقابل أمر التجهيز. بمجرد جاهزية المنزل، أنشئ أمر إنتاج للدجاجات البكر 19 أسبوعاً. استلم أمر الشراء للكتاكيت. أصدر الكتاكيت لأمر تربية الأمهات.",
        whatSAPDoesEN:
          "Creates the production order for parent rearing. Enables activity confirmations for daily farming operations (feeding, watering, health records). Links the DOC PO receipt to the rearing order.",
        whatSAPDoesAR:
          "ينشئ أمر الإنتاج لتربية الأمهات. يتيح تأكيدات النشاط للعمليات الزراعية اليومية (التغذية والسقاية والسجلات الصحية). يربط استلام أمر شراء الكتاكيت بأمر التربية.",
        expectedOutputEN:
          "Parent rearing production order created and released. DOC received and issued to order. Daily confirmation active.",
        expectedOutputAR:
          "تم إنشاء وإصدار أمر إنتاج تربية الأمهات. تم استلام الكتاكيت وإصدارها للأمر. التأكيد اليومي نشط.",
      },
      {
        id: "p2p-2",
        stepNumber: 2,
        titleEN: "Hatching Egg Production & Grading",
        titleAR: "إنتاج بيض التفريخ والتدريج",
        role: "PCT Responsible",
        whatToDoEN:
          "At 24 weeks, transfer Pullets 24WK to parent laying. Create production order for hatching eggs. Confirm daily hatching egg production (GR hatching eggs). Grade eggs at the grading station. Issue graded hatching eggs to hatchery production order. Post by-product GR for pullets 64WK. Check placement plan — if for sale, create Sales Order and Delivery; otherwise issue to rearing.",
        whatToDoAR:
          "عند 24 أسبوعاً، انقل الدجاجات البكر 24 أسبوعاً إلى الإنتاج الأموي. أنشئ أمر إنتاج لبيض التفريخ. أكّد إنتاج بيض التفريخ اليومي (استلام بيض التفريخ). درّج البيض في محطة التدريج. أصدر بيض التفريخ المدرّج لأمر إنتاج المفرخة. ارحّل استلام البضاعة للمنتج الثانوي للدجاجات البكر 64 أسبوعاً. تحقق من خطة التوزيع — إذا كان للبيع، أنشئ أمر مبيعات وتسليم؛ وإلا أصدر للتربية.",
        whatSAPDoesEN:
          "Records hatching egg production on the parent laying order. Triggers grading station production order for egg sorting. Posts by-products. Creates sales order or transfer posting depending on placement plan decision.",
        whatSAPDoesAR:
          "يسجّل إنتاج بيض التفريخ على أمر الإنتاج الأموي. يُشغّل أمر إنتاج محطة التدريج لفرز البيض. يرحّل المنتجات الثانوية. ينشئ أمر مبيعات أو ترحيل تحويل بناءً على قرار خطة التوزيع.",
        expectedOutputEN:
          "Hatching egg GR posted daily. Graded eggs issued to hatchery order. By-products (pullets 64WK) posted. Placement decision actioned (sale or transfer).",
        expectedOutputAR:
          "تم ترحيل استلام بيض التفريخ يومياً. البيض المدرّج أُصدر لأمر المفرخة. المنتجات الثانوية (الدجاجات البكر 64 أسبوعاً) مرحَّلة. قرار التوزيع مُنفَّذ (بيع أو نقل).",
      },
      {
        id: "p2p-3",
        stepNumber: 3,
        titleEN: "Broiler DOC → Farm → Processing",
        titleAR: "كتاكيت الدجاج اللاحم → المزرعة → التصنيع",
        tCode: "CO11N",
        role: "Farm Supervisor",
        whatToDoEN:
          "Hatchery creates Broiler DOC production order. Post GR for DOC from hatchery. Transfer DOC to broiler farm — post GR at broiler farm production order. Record daily farm confirmations (feed, water, medication). At target weight, close broiler farm order (DLV/TECO) and transfer live birds to processing plant. Processing posts live bird GR and runs slaughter + REM backflush (see Slaughterhouse process).",
        whatToDoAR:
          "المفرخة تنشئ أمر إنتاج كتاكيت الدجاج اللاحم. ارحّل استلام البضاعة للكتاكيت من المفرخة. انقل الكتاكيت إلى مزرعة الدجاج اللاحم — ارحّل استلام البضاعة على أمر إنتاج مزرعة الدجاج اللاحم. سجّل تأكيدات المزرعة اليومية (علف، سقاية، دواء). عند الوزن المستهدف، أغلق أمر مزرعة الدجاج اللاحم (DLV/TECO) وانقل الطيور الحية إلى مصنع التصنيع. التصنيع يرحّل استلام الطيور الحية ويشغّل الذبح + الترحيل العكسي REM (انظر عملية المسلخ).",
        whatSAPDoesEN:
          "Links the complete supply chain: parent farm → hatchery → broiler farm → processing plant. All production orders are connected by GI/GR movements, providing end-to-end traceability from GP cross-company to final product.",
        whatSAPDoesAR:
          "يربط سلسلة التوريد الكاملة: مزرعة الأمهات → المفرخة → مزرعة الدجاج اللاحم → مصنع التصنيع. جميع أوامر الإنتاج مرتبطة بحركات إصدار/استلام البضاعة، مما يوفر تتبعاً شاملاً من الصف الأول للشركة حتى المنتج النهائي.",
        expectedOutputEN:
          "Full supply chain documented in SAP. Broiler DOC → live bird → finished product traceable by batch. All production orders closed at each stage.",
        expectedOutputAR:
          "سلسلة التوريد الكاملة موثّقة في SAP. كتاكيت الدجاج اللاحم → طيور حية → منتج نهائي قابل للتتبع بالدفعة. جميع أوامر الإنتاج مغلقة في كل مرحلة.",
      },
    ],
  },

  // ── PP-10. Collective Entry & Transfer (Processing / Manure Plant) ──────────
  {
    id: "pp-collective-entry",
    icon: "🔄",
    duration: "30 min",
    titleEN: "Collective Entry & Transfer Posting",
    titleAR: "الإدخال الجماعي وترحيل النقل",
    descriptionEN:
      "Receive finished product via GR on production order, run MF42N collective backflush, create reservation MB21, and execute transfer posting MIGO_TR. Used in processing and manure plants.",
    descriptionAR:
      "استلام المنتج النهائي عبر استلام البضاعة على أمر الإنتاج، تشغيل الإدخال الجماعي MF42N، إنشاء حجز MB21، وتنفيذ ترحيل النقل MIGO_TR. يُستخدم في مصانع التصنيع والأسمدة.",
    module: "PP",
    roles: ["Production Supervisor", "Shopfloor Control", "Stock Keeper"],
    steps: [
      {
        id: "pce-1",
        stepNumber: 1,
        titleEN: "Post Goods Receipt on Production Order (MIGO)",
        titleAR: "ترحيل استلام البضاعة على أمر الإنتاج (MIGO)",
        tCode: "MIGO",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to MIGO. Select Goods Receipt → Order. Enter the production order number and click Enter. In Detail Data, add the storage location. Click on Batch View and enter Date of Manufacture. Add house information in Classification. Click the right arrow, then click Post to receive the product. SAP generates a material document (e.g. 5000000000).",
        whatToDoAR:
          "انتقل إلى MIGO. حدد استلام البضاعة → أمر. أدخل رقم أمر الإنتاج وانقر Enter. في بيانات التفصيل، أضف موقع التخزين. انقر على عرض الدفعة وأدخل تاريخ التصنيع. أضف معلومات المنزل في التصنيف. انقر السهم الأيمن، ثم انقر ترحيل لاستلام المنتج. يُنشئ SAP مستند مادة (مثل 5000000000).",
        whatSAPDoesEN:
          "Posts a Goods Receipt against the production order (movement type 101). Creates a material document and updates finished product stock in the specified storage location. Batch is created with classification data for house traceability.",
        whatSAPDoesAR:
          "يرحّل استلام بضاعة مقابل أمر الإنتاج (نوع الحركة 101). ينشئ مستند مادة ويحدّث مخزون المنتج النهائي في موقع التخزين المحدد. يُنشأ الدفعة ببيانات التصنيف لإمكانية تتبع المنزل.",
        expectedOutputEN:
          "Material document posted (mvt 101). Finished product stock increased. Batch created with house classification data. Use MB52 to verify stock.",
        expectedOutputAR:
          "تم ترحيل مستند المادة (الحركة 101). مخزون المنتج النهائي ازداد. الدفعة أُنشئت ببيانات تصنيف المنزل. استخدم MB52 للتحقق من المخزون.",
      },
      {
        id: "pce-2",
        stepNumber: 2,
        titleEN: "Run Collective Backflush (MF42N)",
        titleAR: "تشغيل الإدخال الجماعي العكسي (MF42N)",
        tCode: "MF42N",
        role: "Shopfloor Control",
        whatToDoEN:
          "Navigate to MF42N (New Collective Entry). Enter the Material number, the product Batch (ToBtc), Plant code, Backflush Qty (actual produced quantity), and Posting Date. Click Enter to validate. Click 'Post with Correction' to continue. Review the Production Version shown. Click the right arrow to see the Batch Overview. Check that BOM components are listed in the Components Overview. Click Save (Ctrl+S). SAP confirms 'Entry of actual data carried out for material XXXXXXXX'. Check WIP stock to verify.",
        whatToDoAR:
          "انتقل إلى MF42N (إدخال جماعي جديد). أدخل رقم المادة ودفعة المنتج (ToBtc) ورمز المصنع وكمية الترحيل العكسي (الكمية الفعلية المنتجة) وتاريخ الترحيل. انقر Enter للتحقق. انقر 'ترحيل بتصحيح' للمتابعة. راجع إصدار الإنتاج المعروض. انقر السهم الأيمن لرؤية نظرة عامة على الدفعة. تحقق من أن مكونات قائمة المواد مدرجة في نظرة عامة المكونات. انقر حفظ (Ctrl+S). يؤكد SAP 'تم إدخال البيانات الفعلية للمادة'. تحقق من مخزون WIP.",
        whatSAPDoesEN:
          "Executes Repetitive Manufacturing backflush. Automatically posts Goods Issue for all BOM components (movement type 261) and Goods Receipt for the finished product. Updates the production order with actual consumed quantities. Places product in WIP stock.",
        whatSAPDoesAR:
          "يُنفّذ الترحيل العكسي للتصنيع التكراري. يرحّل تلقائياً إصدار البضاعة لجميع مكونات قائمة المواد (نوع الحركة 261) واستلام البضاعة للمنتج النهائي. يحدّث أمر الإنتاج بالكميات المستهلكة الفعلية. يضع المنتج في مخزون WIP.",
        expectedOutputEN:
          "Material document created. Components consumed (mvt 261). Finished product in WIP stock. SAP confirms the actual data entry for the material.",
        expectedOutputAR:
          "تم إنشاء مستند المادة. المكونات مستهلكة (الحركة 261). المنتج النهائي في مخزون WIP. يؤكد SAP إدخال البيانات الفعلية للمادة.",
      },
      {
        id: "pce-3",
        stepNumber: 3,
        titleEN: "Create Transfer Reservation (MB21)",
        titleAR: "إنشاء حجز النقل (MB21)",
        tCode: "MB21",
        role: "Shopfloor Control",
        whatToDoEN:
          "Navigate to MB21. Enter the Plant code, Movement Type (311 for transfer between storage locations in same plant), and Base Date. Press Enter. In the reservation detail screen, enter Material number, Receiving Storage Location, Quantity, Issuing Storage Location, and Batch. Click Save. SAP generates a Reservation Number (e.g. 0001550000).",
        whatToDoAR:
          "انتقل إلى MB21. أدخل رمز المصنع ونوع الحركة (311 للنقل بين مواقع تخزين في نفس المصنع) وتاريخ الأساس. اضغط Enter. في شاشة تفاصيل الحجز، أدخل رقم المادة وموقع التخزين المستلم والكمية وموقع التخزين المصدر والدفعة. انقر حفظ. يُنشئ SAP رقم حجز (مثل 0001550000).",
        whatSAPDoesEN:
          "Creates a stock reservation document for an internal transfer. Reserves the quantity in the source storage location and flags it for transfer. The reservation number is used in the next MIGO_TR step.",
        whatSAPDoesAR:
          "ينشئ مستند حجز مخزون لنقل داخلي. يحجز الكمية في موقع التخزين المصدر ويُعلّمها للنقل. رقم الحجز يُستخدم في خطوة MIGO_TR التالية.",
        expectedOutputEN:
          "Reservation document created with a unique reservation number. Stock earmarked for transfer. Reservation visible in MB25.",
        expectedOutputAR:
          "تم إنشاء مستند الحجز برقم حجز فريد. المخزون محدَّد للنقل. الحجز مرئي في MB25.",
      },
      {
        id: "pce-4",
        stepNumber: 4,
        titleEN: "Execute Transfer Posting (MIGO_TR)",
        titleAR: "تنفيذ ترحيل النقل (MIGO_TR)",
        tCode: "MIGO_TR",
        role: "Stock Keeper",
        whatToDoEN:
          "Navigate to MIGO_TR. Enter the Reservation Number generated in the previous step and press Enter. Click the OK checkbox next to the reservation line to confirm acceptance. Verify item details (material, quantity, storage locations). Click Post. SAP generates a transfer material document (e.g. 4900000000).",
        whatToDoAR:
          "انتقل إلى MIGO_TR. أدخل رقم الحجز الذي تم إنشاؤه في الخطوة السابقة واضغط Enter. انقر مربع OK بجانب سطر الحجز لتأكيد القبول. تحقق من تفاصيل البند (المادة والكمية ومواقع التخزين). انقر ترحيل. يُنشئ SAP مستند مادة نقل (مثل 4900000000).",
        whatSAPDoesEN:
          "Executes the physical stock transfer between storage locations using the reservation. Posts movement type 311 (transfer posting same plant). Updates stock balances: reduces quantity in source location and increases it in receiving location.",
        whatSAPDoesAR:
          "يُنفّذ النقل المادي للمخزون بين مواقع التخزين باستخدام الحجز. يرحّل نوع الحركة 311 (ترحيل نقل نفس المصنع). يحدّث أرصدة المخزون: يخفض الكمية في الموقع المصدر ويزيدها في الموقع المستلم.",
        expectedOutputEN:
          "Transfer material document posted (mvt 311). Stock moved from WIP/production area to warehouse storage location. Use MB52 to confirm new stock balances.",
        expectedOutputAR:
          "تم ترحيل مستند مادة النقل (الحركة 311). المخزون انتقل من منطقة WIP/الإنتاج إلى موقع تخزين المستودع. استخدم MB52 لتأكيد أرصدة المخزون الجديدة.",
      },
    ],
  },

  // ── PP-11. House Data Entry & Feed Confirmation (ZPPH3 / CO11N) ─────────────
  {
    id: "pp-house-data-confirmation",
    icon: "🏠",
    duration: "20 min",
    titleEN: "House Data Entry & Feed/Medicine Confirmation",
    titleAR: "إدخال بيانات الريظحة وتأكيد العلف والدواء",
    descriptionEN:
      "Enter daily house production data using ZPPH3 and confirm actual feed, medicine, and vaccine consumption on production orders via CO11N.",
    descriptionAR:
      "إدخال بيانات إنتاج الريظحة اليومية باستخدام ZPPH3 وتأكيد الاستهلاك الفعلي للعلف والدواء والتطعيم على أوامر الإنتاج عبر CO11N.",
    module: "PP",
    roles: ["Farm Supervisor", "Production Supervisor"],
    steps: [
      {
        id: "phd-1",
        stepNumber: 1,
        titleEN: "Open ZPPH3 and Select Farm/House",
        titleAR: "فتح ZPPH3 واختيار المزرعة/الريظحة",
        tCode: "ZPPH3",
        role: "Farm Supervisor",
        whatToDoEN:
          "Navigate to ZPPH3. Select the Plant (e.g. 1250 for laying, 1260 for rearing). Enter the date you want to enter data for. Select the Farm and the House (first two digits = farm number, last two digits = house number). Click 'Calculate Open Balance', then click Execute.",
        whatToDoAR:
          "انتقل إلى ZPPH3. حدد المصنع (مثل 1250 للإنتاج، 1260 للتربية). أدخل التاريخ الذي تريد إدخال بياناته. حدد المزرعة والريظحة (الرقمان الأولان = رقم المزرعة، الرقمان الأخيران = رقم الريظحة). انقر 'احتساب الرصيد الافتتاحي'، ثم انقر تنفيذ.",
        whatSAPDoesEN:
          "Retrieves the open production order data for the selected farm and house. Calculates the current open balance (birds in house, feed remaining) as the baseline for data entry.",
        whatSAPDoesAR:
          "يسترجع بيانات أمر الإنتاج المفتوح للمزرعة والريظحة المحددة. يحسب الرصيد الافتتاحي الحالي (الطيور في الريظحة، العلف المتبقي) كخط أساس لإدخال البيانات.",
        expectedOutputEN:
          "ZPPH3 screen loaded with the house's production order data and open balance calculated.",
        expectedOutputAR:
          "تم تحميل شاشة ZPPH3 ببيانات أمر إنتاج الريظحة والرصيد الافتتاحي المحتسب.",
      },
      {
        id: "phd-2",
        stepNumber: 2,
        titleEN: "Enter House Results Data",
        titleAR: "إدخال بيانات نتائج الريظحة",
        tCode: "ZPPH3",
        role: "Farm Supervisor",
        whatToDoEN:
          "From the list, double-click the house you want to enter data for. The results entry screen opens. Enter data in the Results column (mortality counts, production figures, etc.). Click 'Select All' icon to select all result rows. Evaluate whether each result is 'Accepted' or 'Not Accepted'. Lock the results by clicking the Lock icon. Then click Save.",
        whatToDoAR:
          "من القائمة، انقر نقراً مزدوجاً على الريظحة التي تريد إدخال بياناتها. تفتح شاشة إدخال النتائج. أدخل البيانات في عمود النتائج (أعداد النفوق وأرقام الإنتاج وما إلى ذلك). انقر أيقونة 'تحديد الكل'. قيّم ما إذا كانت كل نتيجة 'مقبولة' أو 'غير مقبولة'. أغلق النتائج بالنقر على أيقونة القفل. ثم انقر حفظ.",
        whatSAPDoesEN:
          "Records and locks the daily house results against the production order. Locked results cannot be changed without authorization. Data feeds into production order actual costs and farm reporting.",
        whatSAPDoesAR:
          "يسجّل ويقفل نتائج الريظحة اليومية مقابل أمر الإنتاج. لا يمكن تغيير النتائج المقفلة دون تخويل. تغذّي البيانات تكاليف أمر الإنتاج الفعلية وتقارير المزرعة.",
        expectedOutputEN:
          "Daily house data saved and locked. Results visible in production order reporting. Message: 'Data entered successfully'.",
        expectedOutputAR:
          "تم حفظ وقفل بيانات الريظحة اليومية. النتائج مرئية في تقارير أمر الإنتاج. رسالة: 'تم إدخال البيانات بنجاح'.",
      },
      {
        id: "phd-3",
        stepNumber: 3,
        titleEN: "Look Up Feed Consumption from ZPPH3",
        titleAR: "استعراض استهلاك العلف من ZPPH3",
        tCode: "ZPPH3",
        role: "Production Supervisor",
        whatToDoEN:
          "After entering house data, go to the Feed Consumption section in ZPPH3 to check the feed quantity that should be confirmed (in kg). Note the Production Order Number and the Activity Number for use in CO11N. Open a new SAP session window.",
        whatToDoAR:
          "بعد إدخال بيانات الريظحة، انتقل إلى قسم استهلاك العلف في ZPPH3 للاطلاع على كمية العلف الواجب تأكيدها (بالكيلوغرام). دوّن رقم أمر الإنتاج ورقم النشاط للاستخدام في CO11N. افتح نافذة جلسة SAP جديدة.",
        whatSAPDoesEN:
          "Displays the planned vs. actual feed consumption per house. The production order number and activity number visible here are needed to post the actual goods movement in CO11N.",
        whatSAPDoesAR:
          "يعرض استهلاك العلف المخطط مقابل الفعلي لكل ريظحة. رقم أمر الإنتاج ورقم النشاط المرئيان هنا مطلوبان لترحيل حركة البضائع الفعلية في CO11N.",
        expectedOutputEN:
          "Feed consumption qty confirmed from ZPPH3. Production order number and activity number noted for CO11N entry.",
        expectedOutputAR:
          "تم تأكيد كمية استهلاك العلف من ZPPH3. رقم أمر الإنتاج ورقم النشاط مدوّنان لإدخال CO11N.",
      },
      {
        id: "phd-4",
        stepNumber: 4,
        titleEN: "Confirm Material Consumption on Production Order (CO11N)",
        titleAR: "تأكيد استهلاك المواد على أمر الإنتاج (CO11N)",
        tCode: "CO11N",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to CO11N. Enter the Production Order Number and Activity Number, then click Enter. Click the Goods Movement icon. The components screen appears — verify that the listed feed matches what was actually consumed. For medicines or vaccines, select the item and click Batch Determination to assign the correct batch. Enter actual consumed quantities (ensure unit of measure is correct). For vaccines/medicines, use Batch Determination and click Copy to distribute quantities across house batches. Click Post (Save).",
        whatToDoAR:
          "انتقل إلى CO11N. أدخل رقم أمر الإنتاج ورقم النشاط، ثم انقر Enter. انقر أيقونة حركة البضائع. تظهر شاشة المكونات — تحقق من أن العلف المدرج يطابق ما تم استهلاكه فعلياً. للأدوية أو اللقاحات، حدد البند وانقر تحديد الدفعة لتخصيص الدفعة الصحيحة. أدخل الكميات المستهلكة الفعلية (تأكد من صحة وحدة القياس). للقاحات/الأدوية، استخدم تحديد الدفعة وانقر نسخ لتوزيع الكميات على دفعات الريظحة. انقر ترحيل (حفظ).",
        whatSAPDoesEN:
          "Posts the actual goods issue (movement type 261) for all confirmed components against the production order. Updates the production order with actual feed, medicine, and vaccine costs. For batch-managed items, distributes consumption across relevant batches.",
        whatSAPDoesAR:
          "يرحّل إصدار البضاعة الفعلي (نوع الحركة 261) لجميع المكونات المؤكدة مقابل أمر الإنتاج. يحدّث أمر الإنتاج بتكاليف العلف والدواء والتطعيم الفعلية. للبنود المُدارة بالدفعات، يوزّع الاستهلاك على الدفعات ذات الصلة.",
        expectedOutputEN:
          "Goods movement posted. Production order updated with actual component consumption. Material document created. Confirmation is complete.",
        expectedOutputAR:
          "تم ترحيل حركة البضائع. أمر الإنتاج محدَّث باستهلاك المكونات الفعلية. مستند المادة تم إنشاؤه. اكتمل التأكيد.",
      },
    ],
  },

  // ── PP-12. Feed & Medicines Receiving via STO (YOPENSTO / MIGO) ─────────────
  {
    id: "pp-feed-medicines-receiving",
    icon: "🌾",
    duration: "20 min",
    titleEN: "Feed & Medicines Receiving via STO",
    titleAR: "استلام العلف والأدوية عبر أوامر النقل الداخلي",
    descriptionEN:
      "Receive feed and medicines/vaccines delivered via Stock Transfer Orders using YOPENSTO to locate the delivery and MIGO to post the Goods Receipt.",
    descriptionAR:
      "استلام العلف والأدوية/اللقاحات المسلّمة عبر أوامر النقل الداخلي باستخدام YOPENSTO لتحديد التسليم و MIGO لترحيل استلام البضاعة.",
    module: "PP",
    roles: ["Farm Supervisor", "Stock Keeper"],
    steps: [
      {
        id: "pfmr-1",
        stepNumber: 1,
        titleEN: "Open YOPENSTO and Find Delivery",
        titleAR: "فتح YOPENSTO والبحث عن التسليم",
        tCode: "YOPENSTO",
        role: "Farm Supervisor",
        whatToDoEN:
          "Navigate to YOPENSTO. Select the Plant. Click Execute. The list of open STOs for the plant appears. Click the 'Delivery Schedule' icon to organize the list by delivery date. Click the 'POH' (Purchase Order History) icon to open the delivery details. Find the Outbound Delivery Number (for feed) or the Material Document Number (for medicines from Central Qassim warehouse) — this number is used for receiving in MIGO.",
        whatToDoAR:
          "انتقل إلى YOPENSTO. حدد المصنع. انقر تنفيذ. تظهر قائمة أوامر النقل المفتوحة للمصنع. انقر أيقونة 'جدول التسليم' لتنظيم القائمة حسب تاريخ التسليم. انقر أيقونة 'POH' (تاريخ أمر الشراء) لفتح تفاصيل التسليم. ابحث عن رقم التسليم الصادر (للعلف) أو رقم مستند المادة (للأدوية من مستودع القصيم المركزي) — هذا الرقم يُستخدم للاستلام في MIGO.",
        whatSAPDoesEN:
          "Displays all open Stock Transfer Orders for the selected plant. The delivery schedule view organizes by planned delivery date. The POH icon shows the corresponding delivery documents linked to each STO.",
        whatSAPDoesAR:
          "يعرض جميع أوامر النقل المفتوحة للمصنع المحدد. يُنظّم عرض جدول التسليم حسب تاريخ التسليم المخطط. تُظهر أيقونة POH مستندات التسليم المقابلة المرتبطة بكل أمر نقل.",
        expectedOutputEN:
          "Outbound Delivery Number (or Material Document No.) identified for use in MIGO.",
        expectedOutputAR:
          "تم تحديد رقم التسليم الصادر (أو رقم مستند المادة) للاستخدام في MIGO.",
      },
      {
        id: "pfmr-2",
        stepNumber: 2,
        titleEN: "Post Feed Goods Receipt (MIGO)",
        titleAR: "ترحيل استلام بضاعة العلف (MIGO)",
        tCode: "MIGO",
        role: "Farm Supervisor",
        whatToDoEN:
          "Open a new SAP session. Navigate to MIGO. Select Goods Receipt → Outbound Delivery. Enter the Outbound Delivery Number from YOPENSTO. Verify the quantities received match the delivery. Click OK. Confirm that the Posting Date matches the actual physical delivery date (not system date). Click Post. SAP posts the feed receipt successfully.",
        whatToDoAR:
          "افتح جلسة SAP جديدة. انتقل إلى MIGO. حدد استلام البضاعة → التسليم الصادر. أدخل رقم التسليم الصادر من YOPENSTO. تحقق من مطابقة الكميات المستلمة للتسليم. انقر OK. تأكد من أن تاريخ الترحيل يطابق تاريخ التسليم الفعلي (وليس تاريخ النظام). انقر ترحيل. يرحّل SAP استلام العلف بنجاح.",
        whatSAPDoesEN:
          "Posts a Goods Receipt against the Outbound Delivery using movement type 101. Updates feed stock in the receiving plant's storage location. Links the receipt to the STO for reconciliation.",
        whatSAPDoesAR:
          "يرحّل استلام بضاعة مقابل التسليم الصادر باستخدام نوع الحركة 101. يحدّث مخزون العلف في موقع تخزين المصنع المستلم. يربط الاستلام بأمر النقل للمطابقة.",
        expectedOutputEN:
          "Feed GR posted. Material document created. Feed stock increased in receiving plant. STO line quantity updated.",
        expectedOutputAR:
          "تم ترحيل استلام العلف. مستند المادة تم إنشاؤه. مخزون العلف ازداد في المصنع المستلم. كمية سطر أمر النقل محدَّثة.",
      },
      {
        id: "pfmr-3",
        stepNumber: 3,
        titleEN: "Post Medicines / Vaccines Goods Receipt (MIGO)",
        titleAR: "ترحيل استلام بضاعة الأدوية / اللقاحات (MIGO)",
        tCode: "MIGO",
        role: "Farm Supervisor",
        whatToDoEN:
          "From YOPENSTO delivery details, copy the Batch Number of the medicine or vaccine to be received. Open MIGO. Select Goods Receipt → Purchase Order. Enter the Purchase Order number. Enter the Batch number. Verify quantities received and click OK. Confirm posting date equals the actual receiving date. Scroll right to verify Movement Type is 101. Click Post.",
        whatToDoAR:
          "من تفاصيل تسليم YOPENSTO، انسخ رقم الدفعة للدواء أو اللقاح المراد استلامه. افتح MIGO. حدد استلام البضاعة → أمر الشراء. أدخل رقم أمر الشراء. أدخل رقم الدفعة. تحقق من الكميات المستلمة وانقر OK. تأكد من مطابقة تاريخ الترحيل لتاريخ الاستلام الفعلي. مرّر لليمين للتحقق من أن نوع الحركة هو 101. انقر ترحيل.",
        whatSAPDoesEN:
          "Posts Goods Receipt for medicines/vaccines against the Purchase Order. Movement type 101 increases batch-managed medicine stock. The batch number links the received medicines to their quality documentation and expiry date.",
        whatSAPDoesAR:
          "يرحّل استلام البضاعة للأدوية/اللقاحات مقابل أمر الشراء. نوع الحركة 101 يزيد مخزون الأدوية المُدار بالدفعات. رقم الدفعة يربط الأدوية المستلمة بتوثيق الجودة وتاريخ انتهاء الصلاحية.",
        expectedOutputEN:
          "Medicines/vaccines GR posted. Batch-managed stock updated. Material document created. Medicines ready for consumption confirmation in CO11N.",
        expectedOutputAR:
          "تم ترحيل استلام الأدوية/اللقاحات. المخزون المُدار بالدفعات محدَّث. مستند المادة تم إنشاؤه. الأدوية جاهزة لتأكيد الاستهلاك في CO11N.",
      },
    ],
  },

  // ── PP-13. Table Egg Production Recording ────────────────────────────────────
  {
    id: "pp-table-egg-production",
    icon: "🥚",
    duration: "45 min",
    titleEN: "Table Egg Production Recording",
    titleAR: "تسجيل إنتاج بيض المائدة",
    descriptionEN:
      "Record daily table egg production on the system: GR eggs on production orders, create unpacked egg order (CO01), confirm via CO11N, pack via MF42N, and transfer to warehouse with MB21.",
    descriptionAR:
      "تسجيل إنتاج بيض المائدة اليومي على النظام: استلام البيض على أوامر الإنتاج، إنشاء أمر البيض غير المعبّأ (CO01)، التأكيد عبر CO11N، التعبئة عبر MF42N، والنقل إلى المستودع بـ MB21.",
    module: "PP",
    roles: ["C.Layer Responsible", "Production Supervisor"],
    steps: [
      {
        id: "tep-1",
        stepNumber: 1,
        titleEN: "Post Egg Production GR on Laying Orders (MIGO)",
        titleAR: "ترحيل استلام بضاعة إنتاج البيض على أوامر الإنتاج (MIGO)",
        tCode: "MIGO",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Navigate to MIGO. Select Goods Receipt → Order. Click the Find icon and enter plant 1250 to search. A list of production orders appears at the bottom — select the orders for the houses whose eggs you want to record. Click the Adopt icon. For each house in the list, enter the number of eggs produced separately. Select the storage location (1254 for Grading Station 1, or 1255 for Grading Station 2). Flag the checkbox for the tick mark. Confirm the posting date equals the actual production date. Click Check, then Post.",
        whatToDoAR:
          "انتقل إلى MIGO. حدد استلام البضاعة → أمر. انقر أيقونة البحث وأدخل المصنع 1250 للبحث. تظهر قائمة أوامر الإنتاج في أسفل الصفحة — حدد الأوامر للريظحات التي تريد تسجيل بيضها. انقر أيقونة تبنّي. لكل ريظحة في القائمة، أدخل عدد البيض المنتج بشكل منفصل. حدد موقع التخزين (1254 لمحطة التدريج 1، أو 1255 لمحطة التدريج 2). ضع علامة في مربع الاختيار. تأكد من أن تاريخ الترحيل يطابق تاريخ الإنتاج الفعلي. انقر فحص، ثم ترحيل.",
        whatSAPDoesEN:
          "Posts GR for eggs against the production orders for each house. Updates egg stock per house batch at the grading station. Each posting creates a material document linking egg quantity to the specific house production order.",
        whatSAPDoesAR:
          "يرحّل استلام البضاعة للبيض مقابل أوامر الإنتاج لكل ريظحة. يحدّث مخزون البيض لكل دفعة ريظحة في محطة التدريج. كل ترحيل ينشئ مستند مادة يربط كمية البيض بأمر إنتاج الريظحة المحدد.",
        expectedOutputEN:
          "Egg GR posted for all selected houses. Stock updated in grading station. Material documents created per house batch.",
        expectedOutputAR:
          "تم ترحيل استلام البيض لجميع الريظحات المحددة. المخزون محدَّث في محطة التدريج. مستندات المادة أُنشئت لكل دفعة ريظحة.",
      },
      {
        id: "tep-2",
        stepNumber: 2,
        titleEN: "Create Unpacked Egg Production Order (CO01)",
        titleAR: "إنشاء أمر إنتاج البيض غير المعبّأ (CO01)",
        tCode: "CO01",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to CO01. Enter Material 90001 (unpacked eggs), Plant 1250. This page opens the production order header. Enter the total quantity of Grade A eggs for the whole farm as the Target Qty. Enter the production date. Select the Production Version. Click Release Order. Then click the Components icon. The components list appears inside the order — it includes Unpacked Grade C eggs and Eggs per breed. Enter the Unpacked Grade C egg quantity as a negative number (to deduct it from the total order qty). Enter the egg quantity for each breed; if a breed is not present, delete that line. Save the production order.",
        whatToDoAR:
          "انتقل إلى CO01. أدخل المادة 90001 (بيض غير معبّأ) والمصنع 1250. تفتح هذه الصفحة رأس أمر الإنتاج. أدخل إجمالي عدد بيض الدرجة A للمزرعة بأكملها كالكمية المستهدفة. أدخل تاريخ الإنتاج. حدد إصدار الإنتاج. انقر إصدار الأمر. ثم انقر أيقونة المكونات. تظهر قائمة المكونات داخل الأمر — تشمل بيض الدرجة C غير المعبّأ وبيض كل سلالة. أدخل كمية بيض الدرجة C غير المعبّأ كرقم سالب (لخصمه من إجمالي كمية الأمر). أدخل كمية البيض لكل سلالة؛ إذا لم تكن سلالة موجودة، احذف ذلك السطر. احفظ أمر الإنتاج.",
        whatSAPDoesEN:
          "Creates and releases a production order for unpacked eggs. The negative Grade C quantity offsets total order qty to reflect net Grade A. Component list links each breed's eggs to the order for cost and traceability.",
        whatSAPDoesAR:
          "ينشئ ويُصدر أمر إنتاج للبيض غير المعبّأ. كمية الدرجة C السالبة تُعوّض إجمالي كمية الأمر لتعكس صافي الدرجة A. قائمة المكونات تربط بيض كل سلالة بالأمر للتكلفة والتتبع.",
        expectedOutputEN:
          "Unpacked egg production order created and released. Components assigned per breed. Order ready for CO11N confirmation.",
        expectedOutputAR:
          "تم إنشاء وإصدار أمر إنتاج البيض غير المعبّأ. المكونات مخصّصة لكل سلالة. الأمر جاهز لتأكيد CO11N.",
      },
      {
        id: "tep-3",
        stepNumber: 3,
        titleEN: "Confirm Egg Production Order (CO11N)",
        titleAR: "تأكيد أمر إنتاج البيض (CO11N)",
        tCode: "CO11N",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to CO11N. Enter the Production Order number (from the unpacked egg order created in CO01). Click the Goods Movement icon. The components screen appears — select the producing breed including Grade C eggs. Click Batch Determination icon. The quantity will be distributed across each house's batch automatically. Click Copy. The quantity shows divided on each batch. Click Post (Save).",
        whatToDoAR:
          "انتقل إلى CO11N. أدخل رقم أمر الإنتاج (من أمر البيض غير المعبّأ الذي تم إنشاؤه في CO01). انقر أيقونة حركة البضائع. تظهر شاشة المكونات — حدد السلالة المنتجة بما في ذلك بيض الدرجة C. انقر أيقونة تحديد الدفعة. سيتم توزيع الكمية على دفعة كل ريظحة تلقائياً. انقر نسخ. تظهر الكمية موزّعة على كل دفعة. انقر ترحيل (حفظ).",
        whatSAPDoesEN:
          "Confirms the egg production order and distributes quantity consumption across house batches. Posts Goods Issue for Grade C eggs and Goods Receipt for the unpacked Grade A egg order. Ensures full traceability per house.",
        whatSAPDoesAR:
          "يؤكد أمر إنتاج البيض ويوزّع استهلاك الكمية على دفعات الريظحة. يرحّل إصدار البضاعة لبيض الدرجة C واستلام البضاعة لأمر بيض الدرجة A غير المعبّأ. يضمن التتبع الكامل لكل ريظحة.",
        expectedOutputEN:
          "Confirmation posted. Quantities distributed per house batch. Grade C eggs deducted. Grade A unpacked egg stock updated.",
        expectedOutputAR:
          "تم ترحيل التأكيد. الكميات موزّعة حسب دفعة الريظحة. بيض الدرجة C خُصم. مخزون بيض الدرجة A غير المعبّأ محدَّث.",
      },
      {
        id: "tep-4",
        stepNumber: 4,
        titleEN: "Pack Eggs — Collective Entry (MF42N)",
        titleAR: "تعبئة البيض — الإدخال الجماعي (MF42N)",
        tCode: "MF42N",
        role: "Production Supervisor",
        whatToDoEN:
          "Navigate to MF42N. Enter the Packing Size (box type, e.g. Type A). Select the Grading Station (production version). Enter the Batch number (which equals the production date). Enter the Qty of cartons produced. Verify that the Posting Date matches the actual production date. Click Save.",
        whatToDoAR:
          "انتقل إلى MF42N. أدخل حجم التعبئة (نوع الصندوق، مثل النوع A). حدد محطة التدريج (إصدار الإنتاج). أدخل رقم الدفعة (الذي يساوي تاريخ الإنتاج). أدخل كمية الكراتين المنتجة. تحقق من مطابقة تاريخ الترحيل لتاريخ الإنتاج الفعلي. انقر حفظ.",
        whatSAPDoesEN:
          "Runs the REM backflush for egg packing. Consumes unpacked eggs from grading station and produces packed egg cartons. Updates packed egg stock. Links packed carton batch to production date for shelf life tracking.",
        whatSAPDoesAR:
          "يُشغّل الترحيل العكسي للتصنيع التكراري لتعبئة البيض. يستهلك البيض غير المعبّأ من محطة التدريج وينتج كراتين البيض المعبّأ. يحدّث مخزون البيض المعبّأ. يربط دفعة الكراتين المعبّأة بتاريخ الإنتاج لتتبع العمر الافتراضي.",
        expectedOutputEN:
          "Packed egg cartons produced and stock updated. Batch linked to production date. Unpacked egg stock reduced correspondingly.",
        expectedOutputAR:
          "كراتين البيض المعبّأة أُنتجت والمخزون محدَّث. الدفعة مرتبطة بتاريخ الإنتاج. مخزون البيض غير المعبّأ خُفّض تبعاً لذلك.",
      },
      {
        id: "tep-5",
        stepNumber: 5,
        titleEN: "Transfer Packed Eggs to Warehouse (MB21)",
        titleAR: "نقل البيض المعبّأ إلى المستودع (MB21)",
        tCode: "MB21",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Navigate to MB21 to create a transfer reservation. Select Movement Type 311. Enter: Receiving Storage Location (warehouse), Material number (packed eggs), Quantity of cartons, Issuing Storage Location (grading station 1254 or 1255), and Batch (production date). Save. Then open MIGO_TR, enter the reservation number, confirm, and Post to execute the physical transfer to the warehouse.",
        whatToDoAR:
          "انتقل إلى MB21 لإنشاء حجز نقل. حدد نوع الحركة 311. أدخل: موقع التخزين المستلم (المستودع) ورقم المادة (بيض معبّأ) وكمية الكراتين وموقع التخزين المصدر (محطة التدريج 1254 أو 1255) والدفعة (تاريخ الإنتاج). احفظ. ثم افتح MIGO_TR وأدخل رقم الحجز وأكّد وارحّل لتنفيذ النقل المادي إلى المستودع.",
        whatSAPDoesEN:
          "Creates the transfer reservation (MB21) then executes the stock transfer posting (MIGO_TR). Moves packed egg cartons from the grading station storage location to the main warehouse. Completes the egg production cycle in SAP.",
        whatSAPDoesAR:
          "ينشئ حجز النقل (MB21) ثم ينفّذ ترحيل نقل المخزون (MIGO_TR). ينقل كراتين البيض المعبّأة من موقع تخزين محطة التدريج إلى المستودع الرئيسي. يُكمل دورة إنتاج البيض في SAP.",
        expectedOutputEN:
          "Packed eggs transferred to warehouse. Stock visible in MB52 under warehouse storage location. Table egg production cycle in SAP complete.",
        expectedOutputAR:
          "تم نقل البيض المعبّأ إلى المستودع. المخزون مرئي في MB52 تحت موقع تخزين المستودع. دورة إنتاج بيض المائدة في SAP مكتملة.",
      },
    ],
  },

  // ── PP-14. DOC Purchase Requisition — Commercial Layer (ME51N) ───────────────
  {
    id: "pp-doc-pr-clayer",
    icon: "🐣",
    duration: "15 min",
    titleEN: "DOC Purchase Requisition — Commercial Layer",
    titleAR: "طلب شراء كتاكيت يوم التفريخ — الدجاج البياض التجاري",
    descriptionEN:
      "Create a Purchase Requisition in ME51N to procure day-old chicks (DOC) for commercial layer rearing, including both paid quantity and free-of-charge (FOC) quantity.",
    descriptionAR:
      "إنشاء طلب شراء في ME51N للحصول على كتاكيت يوم التفريخ للتربية التجارية، بما في ذلك الكمية المدفوعة والكمية المجانية (FOC).",
    module: "PP",
    roles: ["C.Layer Responsible"],
    steps: [
      {
        id: "docpr-1",
        stepNumber: 1,
        titleEN: "Open ME51N and Set Document Type",
        titleAR: "فتح ME51N وتعيين نوع المستند",
        tCode: "ME51N",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Navigate to ME51N. Choose the Shopping Cart type 'Live Operation Requisition'. This document type ensures the PR is routed correctly for live animal procurement approval.",
        whatToDoAR:
          "انتقل إلى ME51N. اختر نوع سلة التسوق 'طلبات العمليات الحية'. يضمن نوع المستند هذا توجيه طلب الشراء بشكل صحيح للموافقة على شراء الحيوانات الحية.",
        whatSAPDoesEN:
          "Opens the Create Purchase Requisition screen with the correct document type for live operations, ensuring the correct approval workflow is triggered.",
        whatSAPDoesAR:
          "يفتح شاشة إنشاء طلب الشراء بنوع المستند الصحيح للعمليات الحية، مما يضمن تشغيل مسار الموافقة الصحيح.",
        expectedOutputEN:
          "ME51N open with Live Operation Requisition document type selected.",
        expectedOutputAR:
          "ME51N مفتوح مع تحديد نوع مستند طلبات العمليات الحية.",
      },
      {
        id: "docpr-2",
        stepNumber: 2,
        titleEN: "Enter Paid & FOC DOC Quantities",
        titleAR: "إدخال كميات الكتاكيت المدفوعة والمجانية (FOC)",
        tCode: "ME51N",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Select the Material: Day-Old Chicks (DOC). On the first line, enter the paid quantity of DOC. On the second line, enter the Free-of-Charge (FOC) quantity — this is typically 7% of the paid quantity. Enter the required placement date (delivery date). Enter the receiving Plant: 1260 (Commercial Layer Rearing). Select the receiving Storage Location (the specific house/pen). Enter the Requester user ID.",
        whatToDoAR:
          "حدد المادة: كتاكيت يوم التفريخ (DOC). في السطر الأول، أدخل الكمية المدفوعة من الكتاكيت. في السطر الثاني، أدخل الكمية المجانية (FOC) — وهي عادةً 7% من الكمية المدفوعة. أدخل تاريخ التوزيع المطلوب (تاريخ التسليم). أدخل المصنع المستلم: 1260 (تربية الدجاج البياض التجاري). حدد موقع التخزين المستلم (الريظحة/الحظيرة المحددة). أدخل معرّف مستخدم الطالب.",
        whatSAPDoesEN:
          "Creates two PR line items for DOC: one for the paid quantity and one for the FOC quantity (zero-priced). Records the placement date, receiving plant 1260, storage location, and requester for approval routing.",
        whatSAPDoesAR:
          "ينشئ سطرين لطلب الشراء للكتاكيت: أحدهما للكمية المدفوعة والآخر للكمية المجانية (بسعر صفري). يسجّل تاريخ التوزيع والمصنع المستلم 1260 وموقع التخزين والطالب لتوجيه الموافقة.",
        expectedOutputEN:
          "Two PR lines entered: paid DOC quantity + FOC quantity (7%). Placement date, plant 1260, and storage location confirmed.",
        expectedOutputAR:
          "تم إدخال سطرين لطلب الشراء: كمية DOC المدفوعة + الكمية المجانية (7%). تاريخ التوزيع والمصنع 1260 وموقع التخزين مؤكّدة.",
      },
      {
        id: "docpr-3",
        stepNumber: 3,
        titleEN: "Verify and Save the PR",
        titleAR: "التحقق وحفظ طلب الشراء",
        tCode: "ME51N",
        role: "C.Layer Responsible",
        whatToDoEN:
          "Review all entries: material, quantities (paid and FOC), placement date, plant 1260, storage location, and requester. Click Save. The PR document number appears at the bottom of the screen.",
        whatToDoAR:
          "راجع جميع المدخلات: المادة والكميات (المدفوعة والمجانية) وتاريخ التوزيع والمصنع 1260 وموقع التخزين والطالب. انقر حفظ. يظهر رقم مستند طلب الشراء في أسفل الشاشة.",
        whatSAPDoesEN:
          "Creates the Purchase Requisition document and triggers the approval workflow for DOC procurement. The PR number can be monitored in ME53N or ME5A.",
        whatSAPDoesAR:
          "ينشئ مستند طلب الشراء ويُشغّل مسار الموافقة لشراء الكتاكيت. يمكن متابعة رقم طلب الشراء في ME53N أو ME5A.",
        expectedOutputEN:
          "PR document number displayed. PR submitted for approval. DOC procurement process initiated for Commercial Layer plant 1260.",
        expectedOutputAR:
          "رقم مستند طلب الشراء معروض. طلب الشراء مقدَّم للموافقة. بدأت عملية شراء الكتاكيت لمصنع الدجاج البياض التجاري 1260.",
      },
    ],
  },

  // ─── SD: Sell from Stock ──────────────────────────────────────────────────
  {
    id: "sd-sell-from-stock",
    icon: "🛒",
    duration: "45 min",
    titleEN: "Sell from Stock (Standard Sales Order)",
    titleAR: "البيع من المخزون (أمر مبيعات قياسي)",
    descriptionEN:
      "End-to-end standard sales order process: create order in VA01, trigger outbound delivery via VL10C, post goods issue in VL06G, and generate customer invoice in VF04. Covers ~700 daily orders across 19 Saudi branches for Sales Orgs 1000 (Poultry), 3000 (GP), and 4000 (Agriculture).",
    descriptionAR:
      "عملية أمر المبيعات القياسية من البداية إلى النهاية: إنشاء الأمر في VA01، تشغيل التسليم الصادر عبر VL10C، ترحيل إصدار البضائع في VL06G، وإنشاء فاتورة العميل في VF04. تغطي حوالي 700 أمر يومي عبر 19 فرعاً في المملكة العربية السعودية.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Shipping Specialist",
      "Billing Clerk",
      "Driver",
      "A/R Accountant",
    ],
    steps: [
      {
        id: "sd-sfs-1",
        stepNumber: 1,
        titleEN: "Receive Customer Order",
        titleAR: "استلام طلب العميل",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Receive customer order via email, fax, or phone call. Confirm product availability and pricing before proceeding.",
        whatToDoAR:
          "استلام طلب العميل عبر البريد الإلكتروني أو الفاكس أو الهاتف. تأكيد توافر المنتج والتسعير قبل المتابعة.",
        whatSAPDoesEN: "No SAP action at this step — order is received externally.",
        whatSAPDoesAR: "لا يوجد إجراء في SAP في هذه الخطوة — يُستلم الطلب خارجياً.",
        expectedOutputEN: "Confirmed customer order details ready for entry.",
        expectedOutputAR: "تفاصيل طلب العميل المؤكدة جاهزة للإدخال.",
      },
      {
        id: "sd-sfs-2",
        stepNumber: 2,
        titleEN: "Create Sales Order (VA01)",
        titleAR: "إنشاء أمر المبيعات (VA01)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Open VA01. Enter order type YOR, Sales Organization (1000/3000/4000), Distribution Channel (10/20/30), and Division. Enter sold-to party, ship-to party, purchase order number, and requested delivery date. Add line items with material numbers and quantities. Save the order.",
        whatToDoAR:
          "افتح VA01. أدخل نوع الأمر YOR ومؤسسة المبيعات (1000/3000/4000) وقناة التوزيع (10/20/30) والقسم. أدخل الطرف البائع والطرف المستلم ورقم أمر الشراء وتاريخ التسليم المطلوب. أضف بنود البضائع بأرقام المواد والكميات. احفظ الأمر.",
        whatSAPDoesEN:
          "Creates a confirmed sales order with document type YOR and delivery type YLF. Checks available stock via ATP and assigns a sales order number.",
        whatSAPDoesAR:
          "ينشئ أمر مبيعات مؤكداً بنوع المستند YOR ونوع التسليم YLF. يتحقق من المخزون المتاح عبر ATP ويعيّن رقم أمر المبيعات.",
        expectedOutputEN: "Sales order number generated and confirmed.",
        expectedOutputAR: "تم إنشاء رقم أمر المبيعات وتأكيده.",
      },
      {
        id: "sd-sfs-3",
        stepNumber: 3,
        titleEN: "Trigger Outbound Delivery (VL10C)",
        titleAR: "تشغيل التسليم الصادر (VL10C)",
        tCode: "VL10C",
        role: "Shipping Specialist",
        whatToDoEN:
          "Open VL10C. Filter by shipping point and delivery date. Select the relevant sales orders and click 'Background' to create outbound deliveries in batch. Confirm delivery documents are created.",
        whatToDoAR:
          "افتح VL10C. قم بالتصفية حسب نقطة الشحن وتاريخ التسليم. حدد أوامر المبيعات ذات الصلة وانقر 'خلفية' لإنشاء تسليمات صادرة دفعية. تأكد من إنشاء مستندات التسليم.",
        whatSAPDoesEN:
          "Creates outbound delivery documents (delivery type YLF) linked to the sales orders, scheduling picking and goods issue activities.",
        whatSAPDoesAR:
          "ينشئ مستندات التسليم الصادرة (نوع التسليم YLF) المرتبطة بأوامر المبيعات، ويجدول أنشطة الانتقاء وإصدار البضائع.",
        expectedOutputEN: "Outbound delivery document(s) created.",
        expectedOutputAR: "تم إنشاء مستند(ات) التسليم الصادرة.",
      },
      {
        id: "sd-sfs-4",
        stepNumber: 4,
        titleEN: "Pick Goods and Update Delivery",
        titleAR: "انتقاء البضائع وتحديث التسليم",
        tCode: "VL02N",
        role: "Shipping Specialist",
        whatToDoEN:
          "Open VL02N with the delivery number. Navigate to the picking tab and enter the actual picked quantity for each line item. Confirm the picked quantity matches the ordered quantity. Save the delivery.",
        whatToDoAR:
          "افتح VL02N برقم التسليم. انتقل إلى تبويب الانتقاء وأدخل الكمية المنتقاة الفعلية لكل بند. تأكد من تطابق الكمية المنتقاة مع الكمية المطلوبة. احفظ التسليم.",
        whatSAPDoesEN:
          "Updates the delivery with the confirmed picked quantities, making the delivery ready for goods issue posting.",
        whatSAPDoesAR:
          "يحدث التسليم بالكميات المنتقاة المؤكدة، مما يجعل التسليم جاهزاً لترحيل إصدار البضائع.",
        expectedOutputEN: "Delivery updated with picked quantities — ready for goods issue.",
        expectedOutputAR: "تم تحديث التسليم بالكميات المنتقاة — جاهز لإصدار البضائع.",
      },
      {
        id: "sd-sfs-5",
        stepNumber: 5,
        titleEN: "Post Goods Issue (VL06G)",
        titleAR: "ترحيل إصدار البضائع (VL06G)",
        tCode: "VL06G",
        role: "Shipping Specialist",
        whatToDoEN:
          "Open VL06G. Select deliveries ready for goods issue and execute the posting. Confirm goods issue is posted for all selected deliveries.",
        whatToDoAR:
          "افتح VL06G. حدد التسليمات الجاهزة لإصدار البضائع ونفّذ الترحيل. تأكد من ترحيل إصدار البضائع لجميع التسليمات المحددة.",
        whatSAPDoesEN:
          "Posts the goods issue, reducing inventory and creating a financial accounting document (debit COGS, credit inventory). The delivery date becomes the goods issue date.",
        whatSAPDoesAR:
          "يرحّل إصدار البضائع، ويخفض المخزون، وينشئ مستند محاسبة مالية (مدين تكلفة البضائع المباعة، دائن المخزون). يصبح تاريخ التسليم تاريخ إصدار البضائع.",
        expectedOutputEN: "Goods issue posted — inventory reduced and accounting document created.",
        expectedOutputAR: "تم ترحيل إصدار البضائع — خُفِّض المخزون وأُنشئ مستند المحاسبة.",
      },
      {
        id: "sd-sfs-6",
        stepNumber: 6,
        titleEN: "Create Customer Invoice (VF04)",
        titleAR: "إنشاء فاتورة العميل (VF04)",
        tCode: "VF04",
        role: "Billing Clerk",
        whatToDoEN:
          "Open VF04. Select deliveries due for billing and click 'Execute'. Review the billing due list and select items to invoice. Run billing to create invoices (billing type YF2). Print 4 copies of the invoice for customer signature.",
        whatToDoAR:
          "افتح VF04. حدد التسليمات المستحقة للفوترة وانقر 'تنفيذ'. راجع قائمة الفوترة المستحقة وحدد البنود للفواتير. شغّل الفوترة لإنشاء الفواتير (نوع الفوترة YF2). اطبع 4 نسخ من الفاتورة لتوقيع العميل.",
        whatSAPDoesEN:
          "Creates customer invoice (billing document type YF2) with accounting entries (debit A/R, credit revenue). Transfers billing data to FI.",
        whatSAPDoesAR:
          "ينشئ فاتورة العميل (نوع مستند الفوترة YF2) بقيود المحاسبة (مدين حسابات القبض، دائن الإيراد). ينقل بيانات الفوترة إلى المالية.",
        expectedOutputEN: "Customer invoice created and printed. 4 signed copies collected from customer.",
        expectedOutputAR: "تم إنشاء فاتورة العميل وطباعتها. تم جمع 4 نسخ موقعة من العميل.",
      },
      {
        id: "sd-sfs-7",
        stepNumber: 7,
        titleEN: "Deliver and Collect Payment",
        titleAR: "التسليم وتحصيل الدفع",
        role: "Driver / A/R Accountant",
        whatToDoEN:
          "Driver delivers goods to customer with the 4 invoice copies. Customer signs all copies; driver retains one copy as proof of delivery. A/R Accountant posts the incoming payment in SAP against the open invoice.",
        whatToDoAR:
          "يسلّم السائق البضائع إلى العميل مع 4 نسخ من الفاتورة. يوقّع العميل على جميع النسخ؛ يحتفظ السائق بنسخة واحدة كإثبات تسليم. يرحّل محاسب الحسابات المستحقة الدفعة الواردة في SAP مقابل الفاتورة المفتوحة.",
        whatSAPDoesEN:
          "Incoming payment clears the open A/R item, completing the order-to-cash cycle.",
        whatSAPDoesAR:
          "تصفّي الدفعة الواردة البند المفتوح في حسابات القبض، مما يكمل دورة الطلب إلى النقد.",
        expectedOutputEN: "Goods delivered, invoice signed, payment collected and posted in SAP.",
        expectedOutputAR: "تم تسليم البضائع وتوقيع الفاتورة وتحصيل الدفعة وترحيلها في SAP.",
      },
    ],
  },

  // ─── SD: Van Sales (Loading & Unloading) ──────────────────────────────────
  {
    id: "sd-van-sales",
    icon: "🚐",
    duration: "60 min",
    titleEN: "Van Sales — Loading, Unloading & Inventory Count",
    titleAR: "مبيعات الفان — التحميل والتفريغ وجرد المخزون",
    descriptionEN:
      "Van sales process covering van loading (YVLO), route sales using Spirit Smart Sales app, van unloading of unsold stock (YVUL), and periodic inventory reconciliation (YRPC) with billing of any shortfall.",
    descriptionAR:
      "عملية مبيعات الفان تشمل تحميل الفان (YVLO)، والمبيعات على الطريق باستخدام تطبيق Spirit Smart Sales، وتفريغ الفان من المخزون غير المباع (YVUL)، ومصالحة المخزون الدورية (YRPC) مع فوترة أي عجز.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Van Salesman",
      "Shipping Specialist",
      "Billing Clerk",
    ],
    steps: [
      {
        id: "sd-van-1",
        stepNumber: 1,
        titleEN: "Create Van Loading Order (VA01 / YVLO)",
        titleAR: "إنشاء أمر تحميل الفان (VA01 / YVLO)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Create a van loading order using order type YVLO in VA01. Enter the van salesman as the sold-to party, the van route, and the planned quantities to load. Save the loading order.",
        whatToDoAR:
          "أنشئ أمر تحميل فان باستخدام نوع الأمر YVLO في VA01. أدخل مندوب مبيعات الفان كطرف بائع ومسار الفان والكميات المخططة للتحميل. احفظ أمر التحميل.",
        whatSAPDoesEN:
          "Creates a van loading order that will move stock from the warehouse to the van's consignment stock.",
        whatSAPDoesAR:
          "ينشئ أمر تحميل فان يقوم بنقل المخزون من المستودع إلى مخزون أمانة الفان.",
        expectedOutputEN: "Van loading order created.",
        expectedOutputAR: "تم إنشاء أمر تحميل الفان.",
      },
      {
        id: "sd-van-2",
        stepNumber: 2,
        titleEN: "Create Delivery and Post Goods Issue (VL10C → VL06G)",
        titleAR: "إنشاء التسليم وترحيل إصدار البضائع (VL10C ← VL06G)",
        tCode: "VL10C",
        role: "Shipping Specialist",
        whatToDoEN:
          "Run VL10C for the van loading order to create the outbound delivery. Then run VL06G to post goods issue, physically transferring stock to the van's consignment location.",
        whatToDoAR:
          "شغّل VL10C لأمر تحميل الفان لإنشاء التسليم الصادر. ثم شغّل VL06G لترحيل إصدار البضائع، مما يؤدي إلى نقل المخزون فعلياً إلى موقع أمانة الفان.",
        whatSAPDoesEN:
          "Creates delivery and posts goods issue from warehouse to van consignment stock. Inventory moves from plant storage to van consignment.",
        whatSAPDoesAR:
          "ينشئ التسليم ويرحّل إصدار البضائع من المستودع إلى مخزون أمانة الفان. ينتقل المخزون من تخزين المصنع إلى أمانة الفان.",
        expectedOutputEN: "Stock transferred to van consignment. Van is loaded and ready for the route.",
        expectedOutputAR: "تم نقل المخزون إلى أمانة الفان. الفان محمّل وجاهز للمسار.",
      },
      {
        id: "sd-van-3",
        stepNumber: 3,
        titleEN: "Conduct Route Sales (Spirit Smart Sales App)",
        titleAR: "إجراء مبيعات المسار (تطبيق Spirit Smart Sales)",
        role: "Van Salesman",
        whatToDoEN:
          "Use the Spirit Smart Sales Android app to record sales at each customer stop. The app is integrated with SAP back-office and records customer orders, quantities sold, and cash or credit collections.",
        whatToDoAR:
          "استخدم تطبيق Spirit Smart Sales على Android لتسجيل المبيعات في كل نقطة توقف للعميل. التطبيق متكامل مع الخلفية في SAP ويسجّل طلبات العملاء والكميات المباعة وتحصيلات النقد أو الائتمان.",
        whatSAPDoesEN:
          "Spirit Smart Sales app syncs transactions to SAP back-office in real-time or at end-of-day batch.",
        whatSAPDoesAR:
          "يزامن تطبيق Spirit Smart Sales المعاملات مع الخلفية في SAP في الوقت الفعلي أو في دُفعة نهاية اليوم.",
        expectedOutputEN: "Route sales completed and recorded. Cash and invoices collected from customers.",
        expectedOutputAR: "اكتملت مبيعات المسار وتم تسجيلها. تم تحصيل النقد والفواتير من العملاء.",
      },
      {
        id: "sd-van-4",
        stepNumber: 4,
        titleEN: "Create Van Unloading Order (VA01 / YVUL)",
        titleAR: "إنشاء أمر تفريغ الفان (VA01 / YVUL)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "At end of day, create a van unloading order (YVUL) to return any unsold stock from the van back to the warehouse. Enter the van salesman as sold-to party and the unsold quantities.",
        whatToDoAR:
          "في نهاية اليوم، أنشئ أمر تفريغ فان (YVUL) لإعادة أي مخزون غير مباع من الفان إلى المستودع. أدخل مندوب مبيعات الفان كطرف بائع والكميات غير المباعة.",
        whatSAPDoesEN:
          "Creates a van unloading return order to move unsold stock back from consignment to warehouse.",
        whatSAPDoesAR:
          "ينشئ أمر إعادة تفريغ الفان لنقل المخزون غير المباع من الأمانة إلى المستودع.",
        expectedOutputEN: "Van unloading order created.",
        expectedOutputAR: "تم إنشاء أمر تفريغ الفان.",
      },
      {
        id: "sd-van-5",
        stepNumber: 5,
        titleEN: "Process Unloading Delivery and Post GR (VL10C → VL06G)",
        titleAR: "معالجة تسليم التفريغ وترحيل إيصال البضائع (VL10C ← VL06G)",
        tCode: "VL10C",
        role: "Shipping Specialist",
        whatToDoEN:
          "Run VL10C for the YVUL order to create the return delivery. Then run VL06G to post goods receipt, returning stock from van consignment back to the warehouse.",
        whatToDoAR:
          "شغّل VL10C لأمر YVUL لإنشاء تسليم الإرجاع. ثم شغّل VL06G لترحيل إيصال البضائع، مما يُعيد المخزون من أمانة الفان إلى المستودع.",
        whatSAPDoesEN:
          "Returns unsold stock from van consignment back to warehouse inventory.",
        whatSAPDoesAR:
          "يُعيد المخزون غير المباع من أمانة الفان إلى مخزون المستودع.",
        expectedOutputEN: "Unsold stock returned to warehouse. Van consignment stock is reconciled.",
        expectedOutputAR: "تم إعادة المخزون غير المباع إلى المستودع. تمت مصالحة مخزون أمانة الفان.",
      },
      {
        id: "sd-van-6",
        stepNumber: 6,
        titleEN: "Van Inventory Count & Shortfall Billing (YRPC → VF04)",
        titleAR: "جرد مخزون الفان وفوترة العجز (YRPC ← VF04)",
        tCode: "YRPC",
        role: "Billing Clerk",
        whatToDoEN:
          "Run YRPC to reconcile van inventory. If a shortfall is found (loaded quantity minus returned quantity minus sales), run VL10C and VL06G to create a delivery for the shortfall, then VF04 to bill the van salesman for the missing quantity.",
        whatToDoAR:
          "شغّل YRPC لمصالحة مخزون الفان. إذا وُجد عجز (الكمية المحملة ناقص الكمية المُعادة ناقص المبيعات)، شغّل VL10C وVL06G لإنشاء تسليم للعجز، ثم VF04 لفوترة مندوب الفان عن الكمية المفقودة.",
        whatSAPDoesEN:
          "YRPC identifies inventory discrepancies. Billing in VF04 charges the van salesman for any unaccounted stock.",
        whatSAPDoesAR:
          "يحدد YRPC التناقضات في المخزون. تُحمّل الفوترة في VF04 مندوب الفان تكلفة أي مخزون غير محسوب.",
        expectedOutputEN: "Van inventory reconciled. Any shortfall billed and recorded.",
        expectedOutputAR: "تمت مصالحة مخزون الفان. تم تسجيل وفوترة أي عجز.",
      },
    ],
  },

  // ─── SD: Customer Returns ──────────────────────────────────────────────────
  {
    id: "sd-customer-returns",
    icon: "↩️",
    duration: "30 min",
    titleEN: "Customer Returns Processing",
    titleAR: "معالجة مرتجعات العملاء",
    descriptionEN:
      "Process for handling customer returns of goods — with reference to original invoice (YRE1), without reference (YRE2), and expired goods (YRE3). All returns require a mandatory order reason (Y01–Y06) and result in a credit memo to the customer.",
    descriptionAR:
      "عملية معالجة مرتجعات العملاء — مع الإشارة إلى الفاتورة الأصلية (YRE1)، بدون إشارة (YRE2)، والبضائع المنتهية الصلاحية (YRE3). تتطلب جميع المرتجعات سبب أمر إلزامياً (Y01–Y06) وتؤدي إلى إشعار دائن للعميل.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Shipping Specialist",
      "Billing Clerk",
      "A/R Accountant",
    ],
    steps: [
      {
        id: "sd-ret-1",
        stepNumber: 1,
        titleEN: "Identify Return Type and Reason",
        titleAR: "تحديد نوع الإرجاع وسببه",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Determine which return type applies: YRE1 (return with reference to original billing document), YRE2 (return without reference), or YRE3 (expired goods — batch must be labelled 'EXPIRED'). Select the appropriate order reason: Y01 Customer complaint, Y02 Expired goods, Y03 Wrong product, Y04 Damaged goods, Y05 Customer cancelled order, Y06 Other.",
        whatToDoAR:
          "حدد نوع الإرجاع المناسب: YRE1 (إرجاع مع الإشارة إلى مستند الفوترة الأصلي)، YRE2 (إرجاع بدون إشارة)، YRE3 (بضائع منتهية الصلاحية — يجب وضع ملصق 'EXPIRED' على الدفعة). اختر سبب الأمر المناسب: Y01 شكوى عميل، Y02 بضائع منتهية الصلاحية، Y03 منتج خاطئ، Y04 بضائع تالفة، Y05 إلغاء العميل للطلب، Y06 أخرى.",
        whatSAPDoesEN: "No SAP action — determination is done prior to system entry.",
        whatSAPDoesAR: "لا يوجد إجراء SAP — يتم التحديد قبل الإدخال في النظام.",
        expectedOutputEN: "Return type and order reason identified.",
        expectedOutputAR: "تم تحديد نوع الإرجاع وسبب الأمر.",
      },
      {
        id: "sd-ret-2",
        stepNumber: 2,
        titleEN: "Create Return Order (VA01 / YRE1, YRE2, or YRE3)",
        titleAR: "إنشاء أمر الإرجاع (VA01 / YRE1 أو YRE2 أو YRE3)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Open VA01 and enter the appropriate order type (YRE1, YRE2, or YRE3). For YRE1, reference the original billing document number. Enter the customer, materials, quantities to return, and the mandatory order reason. Save the return order.",
        whatToDoAR:
          "افتح VA01 وأدخل نوع الأمر المناسب (YRE1 أو YRE2 أو YRE3). بالنسبة لـ YRE1، أشر إلى رقم مستند الفوترة الأصلي. أدخل العميل والمواد والكميات المُرجعة وسبب الأمر الإلزامي. احفظ أمر الإرجاع.",
        whatSAPDoesEN:
          "Creates a return sales order with a billing block. Delivery type YLR is assigned. For expired goods (YRE3), SAP creates a return batch tagged 'EXPIRED'.",
        whatSAPDoesAR:
          "ينشئ أمر مبيعات إرجاع مع حجب الفوترة. يُعيَّن نوع التسليم YLR. بالنسبة للبضائع المنتهية الصلاحية (YRE3)، ينشئ SAP دفعة إرجاع مُعلَّمة بـ 'EXPIRED'.",
        expectedOutputEN: "Return sales order created with billing block.",
        expectedOutputAR: "تم إنشاء أمر مبيعات الإرجاع مع حجب الفوترة.",
      },
      {
        id: "sd-ret-3",
        stepNumber: 3,
        titleEN: "Create Return Delivery (VL10C)",
        titleAR: "إنشاء تسليم الإرجاع (VL10C)",
        tCode: "VL10C",
        role: "Shipping Specialist",
        whatToDoEN:
          "Run VL10C for the return order. This creates a return delivery document. The driver physically picks up the goods from the customer site.",
        whatToDoAR:
          "شغّل VL10C لأمر الإرجاع. ينشئ هذا مستند تسليم الإرجاع. يقوم السائق باستلام البضائع فعلياً من موقع العميل.",
        whatSAPDoesEN:
          "Creates return delivery (delivery type YLR) linked to the return order.",
        whatSAPDoesAR:
          "ينشئ تسليم الإرجاع (نوع التسليم YLR) المرتبط بأمر الإرجاع.",
        expectedOutputEN: "Return delivery document created. Driver collects goods from customer.",
        expectedOutputAR: "تم إنشاء مستند تسليم الإرجاع. السائق يستلم البضائع من العميل.",
      },
      {
        id: "sd-ret-4",
        stepNumber: 4,
        titleEN: "Post Goods Receipt for Return (VL06G)",
        titleAR: "ترحيل إيصال البضائع للإرجاع (VL06G)",
        tCode: "VL06G",
        role: "Shipping Specialist",
        whatToDoEN:
          "Open VL06G and post goods receipt for the return delivery. This physically receives the returned goods back into the warehouse (or a returns location).",
        whatToDoAR:
          "افتح VL06G وارحّل إيصال البضائع لتسليم الإرجاع. يستلم هذا البضائع المُرجعة فعلياً في المستودع (أو موقع المرتجعات).",
        whatSAPDoesEN:
          "Posts goods receipt, increasing inventory. Creates a financial document reversing the original goods issue. For expired goods, stock is placed in a restricted-use batch.",
        whatSAPDoesAR:
          "يرحّل إيصال البضائع ويزيد المخزون. ينشئ مستنداً مالياً يعكس إصدار البضائع الأصلي. بالنسبة للبضائع المنتهية الصلاحية، يُودَع المخزون في دفعة محدودة الاستخدام.",
        expectedOutputEN: "Goods received back into warehouse. Financial reversal document created.",
        expectedOutputAR: "تم استلام البضائع في المستودع. تم إنشاء مستند عكس مالي.",
      },
      {
        id: "sd-ret-5",
        stepNumber: 5,
        titleEN: "Create Credit Memo for Customer (VF04)",
        titleAR: "إنشاء إشعار دائن للعميل (VF04)",
        tCode: "VF04",
        role: "Billing Clerk",
        whatToDoEN:
          "Open VF04. The return order appears in the billing due list. Select it and run billing to create a credit memo (billing types YR1 for YRE1, YR2 for YRE2, YR3 for YRE3). The credit memo offsets the original invoice or is applied to the customer's next order.",
        whatToDoAR:
          "افتح VF04. يظهر أمر الإرجاع في قائمة الفوترة المستحقة. حدده وشغّل الفوترة لإنشاء إشعار دائن (أنواع الفوترة YR1 لـ YRE1، YR2 لـ YRE2، YR3 لـ YRE3). يعوّض الإشعار الدائن الفاتورة الأصلية أو يُطبَّق على الطلب التالي للعميل.",
        whatSAPDoesEN:
          "Creates customer credit memo with accounting entry (debit revenue reversal, credit A/R). Reduces the customer's open balance.",
        whatSAPDoesAR:
          "ينشئ إشعار دائن للعميل بقيد محاسبي (مدين عكس الإيراد، دائن حسابات القبض). يخفض الرصيد المفتوح للعميل.",
        expectedOutputEN: "Credit memo created and applied to customer account.",
        expectedOutputAR: "تم إنشاء الإشعار الدائن وتطبيقه على حساب العميل.",
      },
    ],
  },

  // ─── SD: Credit Memo Processing ───────────────────────────────────────────
  {
    id: "sd-credit-memo",
    icon: "💳",
    duration: "20 min",
    titleEN: "Credit Memo Processing",
    titleAR: "معالجة الإشعار الدائن",
    descriptionEN:
      "Process for issuing credit memos to customers for commercial reasons (monthly incentive, promotions, discounts, compensation, near-expire, shortage, quarterly/annual incentives). Credit memo requests (YCR types) require ISR creation and dual-approval before billing.",
    descriptionAR:
      "عملية إصدار الإشعارات الدائنة للعملاء لأسباب تجارية (حافز شهري، عروض ترويجية، خصومات، تعويض، قرب انتهاء الصلاحية، عجز، حوافز ربع سنوية/سنوية). تتطلب طلبات الإشعار الدائن (أنواع YCR) إنشاء ISR وموافقة مزدوجة قبل الفوترة.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Area Sales Manager",
      "A/R Manager",
      "Billing Clerk",
    ],
    steps: [
      {
        id: "sd-cm-1",
        stepNumber: 1,
        titleEN: "Create Credit Memo Request (VA01 / YCR type)",
        titleAR: "إنشاء طلب الإشعار الدائن (VA01 / نوع YCR)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Open VA01 and enter the appropriate credit memo request type: YCR1 (monthly incentive), YCR2 (customer compensation), YCR3 (promotions discount), YCR4 (commercial discount), YCR5 (near expire discount), YCR6 (shortage quantity), YCR7 (quarterly incentive), YCR8 (annual incentive), YCR9 (other). Reference the original billing document if applicable. Enter the customer, material, and credit amount. Save — the document is automatically created with billing block Y1.",
        whatToDoAR:
          "افتح VA01 وأدخل نوع طلب الإشعار الدائن المناسب: YCR1 (حافز شهري)، YCR2 (تعويض عميل)، YCR3 (خصم عروض)، YCR4 (خصم تجاري)، YCR5 (خصم قرب انتهاء الصلاحية)، YCR6 (عجز في الكمية)، YCR7 (حافز ربعي)، YCR8 (حافز سنوي)، YCR9 (أخرى). أشر إلى مستند الفوترة الأصلي إن أمكن. أدخل العميل والمادة ومبلغ الائتمان. احفظ — يُنشأ المستند تلقائياً بحجب الفوترة Y1.",
        whatSAPDoesEN:
          "Creates a credit memo request with billing block Y1 to prevent premature billing. Document is held for approval.",
        whatSAPDoesAR:
          "ينشئ طلب إشعار دائن بحجب الفوترة Y1 لمنع الفوترة المبكرة. يُحتجز المستند للموافقة.",
        expectedOutputEN: "Credit memo request created with billing block Y1.",
        expectedOutputAR: "تم إنشاء طلب الإشعار الدائن بحجب الفوترة Y1.",
      },
      {
        id: "sd-cm-2",
        stepNumber: 2,
        titleEN: "First Approval — Remove Billing Block (VA02)",
        titleAR: "الموافقة الأولى — رفع حجب الفوترة (VA02)",
        tCode: "VA02",
        role: "Area Sales Manager",
        whatToDoEN:
          "Open VA02 with the credit memo request number. Review the request details and verify the credit reason and amount are correct. If approved, remove the billing block Y1. Save.",
        whatToDoAR:
          "افتح VA02 برقم طلب الإشعار الدائن. راجع تفاصيل الطلب وتحقق من صحة سبب الائتمان والمبلغ. إذا تمت الموافقة، ارفع حجب الفوترة Y1. احفظ.",
        whatSAPDoesEN:
          "Updates the credit memo request by removing the billing block, enabling second-level review.",
        whatSAPDoesAR:
          "يحدّث طلب الإشعار الدائن برفع حجب الفوترة، مما يتيح المراجعة على المستوى الثاني.",
        expectedOutputEN: "Billing block removed by Area Sales Manager — awaiting A/R Manager approval.",
        expectedOutputAR: "تم رفع حجب الفوترة من قِبل مدير منطقة المبيعات — في انتظار موافقة مدير حسابات القبض.",
      },
      {
        id: "sd-cm-3",
        stepNumber: 3,
        titleEN: "Second Approval — A/R Manager Review (VA02)",
        titleAR: "الموافقة الثانية — مراجعة مدير الحسابات (VA02)",
        tCode: "VA02",
        role: "A/R Manager",
        whatToDoEN:
          "Open VA02 with the credit memo request number. Verify the credit request against supporting documentation and confirm the amount is authorized. If approved, no further block needs to be set — the document is now ready for billing. If rejected, re-add a billing block and notify the ISR.",
        whatToDoAR:
          "افتح VA02 برقم طلب الإشعار الدائن. تحقق من طلب الائتمان مقابل الوثائق الداعمة وأكد أن المبلغ مصرَّح به. إذا تمت الموافقة، لا حاجة لتعيين حجب إضافي — المستند جاهز الآن للفوترة. إذا رُفض، أعد تعيين حجب الفوترة وأخطر ISR.",
        whatSAPDoesEN:
          "Credit memo request is now fully approved and released to billing queue.",
        whatSAPDoesAR:
          "طلب الإشعار الدائن معتمد بالكامل الآن ومُفرَج عنه إلى قائمة انتظار الفوترة.",
        expectedOutputEN: "Credit memo request fully approved and ready for billing.",
        expectedOutputAR: "تمت الموافقة الكاملة على طلب الإشعار الدائن وهو جاهز للفوترة.",
      },
      {
        id: "sd-cm-4",
        stepNumber: 4,
        titleEN: "Create Credit Memo (VF04)",
        titleAR: "إنشاء الإشعار الدائن (VF04)",
        tCode: "VF04",
        role: "Billing Clerk",
        whatToDoEN:
          "Open VF04. The approved credit memo request appears in the billing due list. Select it and run billing to create the credit memo. Confirm the credit memo is posted.",
        whatToDoAR:
          "افتح VF04. يظهر طلب الإشعار الدائن المعتمد في قائمة الفوترة المستحقة. حدده وشغّل الفوترة لإنشاء الإشعار الدائن. تأكد من ترحيل الإشعار الدائن.",
        whatSAPDoesEN:
          "Creates the credit memo billing document with accounting entry (debit revenue/expense, credit A/R). Reduces the customer's open balance or triggers a refund.",
        whatSAPDoesAR:
          "ينشئ مستند فوترة الإشعار الدائن بقيد محاسبي (مدين الإيراد/المصروف، دائن حسابات القبض). يخفض الرصيد المفتوح للعميل أو يُشغّل استرداداً.",
        expectedOutputEN: "Credit memo created, customer account credited.",
        expectedOutputAR: "تم إنشاء الإشعار الدائن وإضافة ائتمان لحساب العميل.",
      },
    ],
  },

  // ─── SD: Consignment Processing ───────────────────────────────────────────
  {
    id: "sd-consignment",
    icon: "🏪",
    duration: "45 min",
    titleEN: "Consignment Processing (Fill-Up, Issue & Pick-Up)",
    titleAR: "معالجة بضائع الأمانة (التعبئة والإصدار والاسترداد)",
    descriptionEN:
      "Consignment goods are stored at the customer's location but remain AWP's property until the customer removes them. Three active transactions: Fill-Up (YKB) ships goods to customer consignment stock; Issue (YKE) bills the customer when they consume the stock; Pick-Up (YKA) returns unused goods to AWP warehouse. ~10 consignment orders/day across 19 branches.",
    descriptionAR:
      "بضائع الأمانة مخزّنة في موقع العميل لكنها تبقى ملكاً لـ AWP حتى يسحبها العميل. ثلاثة معاملات نشطة: التعبئة (YKB) لشحن البضائع إلى مخزون أمانة العميل؛ الإصدار (YKE) لفوترة العميل عند استهلاك المخزون؛ الاسترداد (YKA) لإعادة البضائع غير المستخدمة إلى مستودع AWP. حوالي 10 أوامر أمانة يومياً عبر 19 فرعاً.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Shipping Specialist",
      "Billing Clerk",
      "A/R Accountant",
    ],
    steps: [
      {
        id: "sd-con-1",
        stepNumber: 1,
        titleEN: "Consignment Fill-Up — Create Order (VA01 / YKB)",
        titleAR: "تعبئة الأمانة — إنشاء الأمر (VA01 / YKB)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Open VA01 and enter order type YKB (Consignment Fill-Up). Sales Org 1000, Distribution Channel 20 (Direct Sales), Division 10 (Fresh). Enter the customer, materials, and quantities to ship to the consignment warehouse. Save the order. Note: this order has no billing relevance — goods remain AWP property.",
        whatToDoAR:
          "افتح VA01 وأدخل نوع الأمر YKB (تعبئة الأمانة). مؤسسة المبيعات 1000، قناة التوزيع 20 (البيع المباشر)، القسم 10 (طازج). أدخل العميل والمواد والكميات للشحن إلى مستودع الأمانة. احفظ الأمر. ملاحظة: هذا الأمر ليس له صلة بالفوترة — تبقى البضائع ملكاً لـ AWP.",
        whatSAPDoesEN:
          "Creates a consignment fill-up order (item category KBN, delivery type YLF). No billing document is generated at this stage.",
        whatSAPDoesAR:
          "ينشئ أمر تعبئة أمانة (فئة البند KBN، نوع التسليم YLF). لا يُنشأ مستند فوترة في هذه المرحلة.",
        expectedOutputEN: "Fill-up order created. Goods will be shipped to customer consignment stock.",
        expectedOutputAR: "تم إنشاء أمر التعبئة. ستُشحن البضائع إلى مخزون أمانة العميل.",
      },
      {
        id: "sd-con-2",
        stepNumber: 2,
        titleEN: "Consignment Fill-Up — Create Delivery and Post GI (VL10C → VL06G)",
        titleAR: "تعبئة الأمانة — إنشاء التسليم وترحيل إصدار البضائع (VL10C ← VL06G)",
        tCode: "VL10C",
        role: "Shipping Specialist",
        whatToDoEN:
          "Run VL10C for the fill-up order to create an outbound delivery. Verify batch assignment (nearest expiry date is auto-determined). Then run VL06G to post goods issue, moving stock from unrestricted-use stock to customer consignment (special stock).",
        whatToDoAR:
          "شغّل VL10C لأمر التعبئة لإنشاء تسليم صادر. تحقق من تعيين الدفعة (يتم تحديد أقرب تاريخ انتهاء صلاحية تلقائياً). ثم شغّل VL06G لترحيل إصدار البضائع، مما ينقل المخزون من المخزون الحر إلى أمانة العميل (مخزون خاص).",
        whatSAPDoesEN:
          "Posts goods issue from unrestricted stock to customer special (consignment) stock. Total plant valuation remains unchanged — goods are still AWP's asset.",
        whatSAPDoesAR:
          "يرحّل إصدار البضائع من المخزون الحر إلى المخزون الخاص (أمانة العميل). يبقى إجمالي تقييم المصنع دون تغيير — البضائع لا تزال أصل AWP.",
        expectedOutputEN: "Stock transferred to customer consignment location. No invoice generated.",
        expectedOutputAR: "تم نقل المخزون إلى موقع أمانة العميل. لم تُنشأ فاتورة.",
      },
      {
        id: "sd-con-3",
        stepNumber: 3,
        titleEN: "Consignment Issue — Create Order (VA01 / YKE)",
        titleAR: "إصدار الأمانة — إنشاء الأمر (VA01 / YKE)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "When the customer uses or sells consignment stock, create a Consignment Issue order in VA01 using order type YKE. Enter the customer, material, and quantity consumed. This order is billing-relevant.",
        whatToDoAR:
          "عندما يستخدم العميل أو يبيع مخزون الأمانة، أنشئ أمر إصدار أمانة في VA01 باستخدام نوع الأمر YKE. أدخل العميل والمادة والكمية المستهلكة. هذا الأمر ذو صلة بالفوترة.",
        whatSAPDoesEN:
          "Creates a consignment issue order (item category KEN, delivery type YLF, billing type YF2). Credit check (credit group D) is applied.",
        whatSAPDoesAR:
          "ينشئ أمر إصدار أمانة (فئة البند KEN، نوع التسليم YLF، نوع الفوترة YF2). يُطبَّق الفحص الائتماني (مجموعة الائتمان D).",
        expectedOutputEN: "Consignment issue order created — billing will be triggered after goods issue.",
        expectedOutputAR: "تم إنشاء أمر إصدار الأمانة — ستُشغَّل الفوترة بعد إصدار البضائع.",
      },
      {
        id: "sd-con-4",
        stepNumber: 4,
        titleEN: "Consignment Issue — Delivery, GI, and Billing (VL10C → VL06G → VF04)",
        titleAR: "إصدار الأمانة — التسليم وإصدار البضائع والفوترة (VL10C ← VL06G ← VF04)",
        tCode: "VL10C",
        role: "Shipping Specialist / Billing Clerk",
        whatToDoEN:
          "Run VL10C to create delivery for the issue order. Post goods issue in VL06G — this deducts the quantity from both the customer's special stock and AWP's total valuation. Then run VF04 (Billing Clerk) to generate the invoice (billing type YF2) for the consumed quantity.",
        whatToDoAR:
          "شغّل VL10C لإنشاء تسليم لأمر الإصدار. ارحّل إصدار البضائع في VL06G — يخصم هذا الكمية من مخزون العميل الخاص وإجمالي تقييم AWP. ثم شغّل VF04 (موظف الفوترة) لإنشاء الفاتورة (نوع الفوترة YF2) عن الكمية المستهلكة.",
        whatSAPDoesEN:
          "Goods issue reduces customer special stock and AWP total stock. VF04 creates invoice with accounting entry (debit A/R, credit revenue).",
        whatSAPDoesAR:
          "يخفض إصدار البضائع مخزون العميل الخاص وإجمالي مخزون AWP. ينشئ VF04 فاتورة بقيد محاسبي (مدين حسابات القبض، دائن الإيراد).",
        expectedOutputEN: "Customer billed for consumed consignment stock. Accounting document created.",
        expectedOutputAR: "تمت فوترة العميل عن مخزون الأمانة المستهلك. تم إنشاء مستند المحاسبة.",
      },
      {
        id: "sd-con-5",
        stepNumber: 5,
        titleEN: "Consignment Pick-Up — Return Unused Stock (VA01 / YKA → VL10C → VL06G)",
        titleAR: "استرداد الأمانة — إعادة المخزون غير المستخدم (VA01 / YKA ← VL10C ← VL06G)",
        tCode: "VA01",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "If the customer returns unused consignment stock, create a Consignment Pick-Up order in VA01 using order type YKA. Enter the customer and quantities to retrieve. Run VL10C for the return delivery, then VL06G to post goods receipt — stock returns from customer special stock to AWP unrestricted stock. No billing is generated.",
        whatToDoAR:
          "إذا أعاد العميل مخزون الأمانة غير المستخدم، أنشئ أمر استرداد أمانة في VA01 باستخدام نوع الأمر YKA. أدخل العميل والكميات للاسترداد. شغّل VL10C لتسليم الإرجاع، ثم VL06G لترحيل إيصال البضائع — يعود المخزون من مخزون العميل الخاص إلى مخزون AWP الحر. لا تُنشأ فاتورة.",
        whatSAPDoesEN:
          "Creates pick-up order (item category KAN, delivery type YLR). Goods receipt restores stock to AWP unrestricted stock. Total plant valuation unchanged — stock was always AWP's.",
        whatSAPDoesAR:
          "ينشئ أمر استرداد (فئة البند KAN، نوع التسليم YLR). يُعيد إيصال البضائع المخزون إلى مخزون AWP الحر. يبقى إجمالي تقييم المصنع دون تغيير — كان المخزون دائماً ملك AWP.",
        expectedOutputEN: "Unused consignment stock returned to AWP warehouse. Customer's special stock reduced. No billing.",
        expectedOutputAR: "تم إعادة مخزون الأمانة غير المستخدم إلى مستودع AWP. تم تخفيض المخزون الخاص للعميل. لا فوترة.",
      },
    ],
  },

  // ─── SD: Credit Management ────────────────────────────────────────────────
  {
    id: "sd-credit-management",
    icon: "🔒",
    duration: "20 min",
    titleEN: "Customer Credit Management",
    titleAR: "إدارة ائتمان العملاء",
    descriptionEN:
      "SAP Credit Management (FSCM-CR) tracks customer credit exposure against limits across all four company codes (WAPO credit control area). Credit checks run automatically at order entry (credit group D). Blocked orders must be reviewed and released or rejected by the Credit Controller on the same business day.",
    descriptionAR:
      "تتبع إدارة الائتمان في SAP (FSCM-CR) تعرض ائتمان العميل مقابل الحدود عبر جميع رموز الشركة الأربعة (منطقة التحكم الائتمانية WAPO). تُجرى فحوصات الائتمان تلقائياً عند إدخال الأمر (مجموعة الائتمان D). يجب مراجعة الأوامر المحجوزة وإطلاقها أو رفضها من قِبل مراقب الائتمان في نفس يوم العمل.",
    module: "SD",
    roles: [
      "Credit Controller",
      "Internal Sales Representative (ISR)",
    ],
    steps: [
      {
        id: "sd-crm-1",
        stepNumber: 1,
        titleEN: "Set Customer Credit Limit (UKM_BP)",
        titleAR: "تعيين حد ائتمان العميل (UKM_BP)",
        tCode: "UKM_BP",
        role: "Credit Controller",
        whatToDoEN:
          "Open UKM_BP (Maintain Business Partner). Navigate to the credit management section for the customer. Set or update the credit limit amount and attach all supporting documents (contracts, credit assessment) to the business partner. Assign risk category 'A' (Default Risk) under credit control area WAPO.",
        whatToDoAR:
          "افتح UKM_BP (صيانة شريك الأعمال). انتقل إلى قسم إدارة الائتمان للعميل. عيّن أو حدّث مبلغ حد الائتمان وأرفق جميع الوثائق الداعمة (العقود، تقييم الائتمان) بشريك الأعمال. عيّن فئة المخاطر 'A' (مخاطر افتراضية) ضمن منطقة التحكم الائتمانية WAPO.",
        whatSAPDoesEN:
          "Stores the customer's credit limit in the credit management master data. Future sales orders will be checked against this limit automatically.",
        whatSAPDoesAR:
          "يخزّن حد ائتمان العميل في البيانات الرئيسية لإدارة الائتمان. ستُفحص أوامر المبيعات المستقبلية مقابل هذا الحد تلقائياً.",
        expectedOutputEN: "Customer credit limit set. Credit control area WAPO assigned.",
        expectedOutputAR: "تم تعيين حد ائتمان العميل. تم تعيين منطقة التحكم الائتمانية WAPO.",
      },
      {
        id: "sd-crm-2",
        stepNumber: 2,
        titleEN: "Automatic Credit Check at Order Entry",
        titleAR: "الفحص الائتماني التلقائي عند إدخال الأمر",
        role: "System (Automatic)",
        whatToDoEN:
          "When a sales order is saved in VA01, the system automatically runs the credit check (Poultry Checking Rule 1): Step 10 — statistical check of credit exposure vs. limit; Step 20 — check for maximum document value (100,000 SAR per credit segment); Step 30 — check for overdue open items. No user action needed.",
        whatToDoAR:
          "عند حفظ أمر المبيعات في VA01، يُشغّل النظام تلقائياً فحص الائتمان (قاعدة فحص الدواجن 1): الخطوة 10 — الفحص الإحصائي لتعرض الائتمان مقابل الحد؛ الخطوة 20 — فحص الحد الأقصى لقيمة المستند (100,000 ريال لكل شريحة ائتمانية)؛ الخطوة 30 — فحص البنود المفتوحة المتأخرة. لا يلزم أي إجراء من المستخدم.",
        whatSAPDoesEN:
          "System runs credit check automatically. If limit is not exceeded, order proceeds normally. If exceeded, order is blocked with reason '01 Credit Limit Exceeded' and sent to credit controller queue.",
        whatSAPDoesAR:
          "يُشغّل النظام فحص الائتمان تلقائياً. إذا لم يُتجاوَز الحد، يستمر الأمر بشكل طبيعي. إذا تجاوز، يُحجب الأمر بالسبب '01 تجاوز حد الائتمان' ويُرسَل إلى قائمة انتظار مراقب الائتمان.",
        expectedOutputEN: "Credit check passed — order proceeds. Or order blocked — credit controller is notified.",
        expectedOutputAR: "اجتاز فحص الائتمان — يستمر الأمر. أو الأمر محجوب — يتم إخطار مراقب الائتمان.",
      },
      {
        id: "sd-crm-3",
        stepNumber: 3,
        titleEN: "Review and Release or Reject Blocked Orders (VKM1)",
        titleAR: "مراجعة وإطلاق أو رفض الأوامر المحجوزة (VKM1)",
        tCode: "VKM1",
        role: "Credit Controller",
        whatToDoEN:
          "Open VKM1 (Manage Credit Cases). Review all blocked sales orders. For each blocked order, check the customer's credit exposure (UKM_COMMITMENTS), payment history, and overdue items. Decision must be made on the same business day: Release the order if credit situation is acceptable; Reject the order if credit risk is too high. Document the decision reasoning.",
        whatToDoAR:
          "افتح VKM1 (إدارة حالات الائتمان). راجع جميع أوامر المبيعات المحجوزة. لكل أمر محجوب، تحقق من تعرض ائتمان العميل (UKM_COMMITMENTS) وتاريخ الدفع والبنود المتأخرة. يجب اتخاذ القرار في نفس يوم العمل: إطلاق الأمر إذا كان وضع الائتمان مقبولاً؛ رفض الأمر إذا كانت مخاطر الائتمان عالية جداً. وثّق سبب القرار.",
        whatSAPDoesEN:
          "Releasing the order removes the credit block and allows delivery processing. Rejecting sets the order status to rejected. All decisions are logged for audit (UKM_LOGS_DISPLAY).",
        whatSAPDoesAR:
          "يُزيل إطلاق الأمر حجب الائتمان ويسمح بمعالجة التسليم. يضبط الرفض حالة الأمر إلى مرفوض. تُسجَّل جميع القرارات للمراجعة (UKM_LOGS_DISPLAY).",
        expectedOutputEN: "Blocked orders released or rejected. Decision logged. Released orders proceed to delivery.",
        expectedOutputAR: "تم إطلاق أو رفض الأوامر المحجوزة. تم تسجيل القرار. الأوامر المُطلَقة تنتقل إلى التسليم.",
      },
      {
        id: "sd-crm-4",
        stepNumber: 4,
        titleEN: "Monitor Credit Exposure and Reporting",
        titleAR: "مراقبة تعرض الائتمان والتقارير",
        tCode: "UKM_MASS_DSP2",
        role: "Credit Controller",
        whatToDoEN:
          "Regularly monitor customer credit data using the following T-codes: UKM_MASS_DSP2 (Display credit data for all customers), UKM_COMMITMENTS (Display credit exposure/commitments), UKM_LOGS_DISPLAY (Review credit decision audit log), UKM_MALUS_DSP (Credit limit utilization report), UKM_BP_DISPLAY (Display credit master data for one customer).",
        whatToDoAR:
          "راقب بانتظام بيانات ائتمان العملاء باستخدام رموز المعاملات التالية: UKM_MASS_DSP2 (عرض بيانات الائتمان لجميع العملاء)، UKM_COMMITMENTS (عرض تعرض/التزامات الائتمان)، UKM_LOGS_DISPLAY (مراجعة سجل تدقيق قرارات الائتمان)، UKM_MALUS_DSP (تقرير استخدام حد الائتمان)، UKM_BP_DISPLAY (عرض بيانات الائتمان الرئيسية لعميل واحد).",
        whatSAPDoesEN:
          "Provides real-time visibility into customer credit exposure across all open orders, deliveries, and invoices.",
        whatSAPDoesAR:
          "يوفر رؤية فورية لتعرض ائتمان العملاء عبر جميع الأوامر والتسليمات والفواتير المفتوحة.",
        expectedOutputEN: "Credit exposure monitored. Any customers approaching or exceeding limits are flagged for action.",
        expectedOutputAR: "تمت مراقبة تعرض الائتمان. يتم وضع علامة على أي عملاء يقتربون من الحدود أو يتجاوزونها لاتخاذ إجراء.",
      },
    ],
  },

  // ─── SD: Sales Period End Closing ─────────────────────────────────────────
  {
    id: "sd-period-end-closing",
    icon: "📅",
    duration: "90 min",
    titleEN: "Sales Period End Closing Operations",
    titleAR: "عمليات إغلاق الفترة لقسم المبيعات",
    descriptionEN:
      "Monthly closing checklist for the Sales & Distribution department — performed before FI period close. Covers reviewing blocked/incomplete orders, releasing orders for billing, clearing delivery backlogs, posting goods issue on pending deliveries, processing the billing due list, and verifying all credit memos are generated.",
    descriptionAR:
      "قائمة التحقق الشهرية لإغلاق قسم المبيعات والتوزيع — تُنفَّذ قبل إغلاق فترة المالية. تشمل مراجعة الأوامر المحجوزة/غير المكتملة، وإطلاق الأوامر للفوترة، وتصفية متأخرات التسليم، وترحيل إصدار البضائع على التسليمات المعلقة، ومعالجة قائمة الفوترة المستحقة، والتحقق من إنشاء جميع الإشعارات الدائنة.",
    module: "SD",
    roles: [
      "Internal Sales Representative (ISR)",
      "Billing Clerk",
      "Shipping Specialist",
      "Credit Manager",
    ],
    steps: [
      {
        id: "sd-pec-1",
        stepNumber: 1,
        titleEN: "Review Sales Order Fulfillment Issues",
        titleAR: "مراجعة مشكلات تنفيذ أوامر المبيعات",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Run the Sales Order Fulfillment Analyze Issues report to get a comprehensive view of all open orders with problems. Identify orders that need action before period close.",
        whatToDoAR:
          "شغّل تقرير تحليل مشكلات تنفيذ أوامر المبيعات للحصول على نظرة شاملة على جميع الأوامر المفتوحة ذات المشكلات. حدد الأوامر التي تحتاج إلى إجراء قبل إغلاق الفترة.",
        whatSAPDoesEN:
          "Displays all open sales orders with issues including incomplete data, delivery blocks, and credit holds.",
        whatSAPDoesAR:
          "يعرض جميع أوامر المبيعات المفتوحة التي بها مشكلات، بما في ذلك البيانات غير المكتملة وحجب التسليم وتجميد الائتمان.",
        expectedOutputEN: "Full picture of open order issues identified — action items listed.",
        expectedOutputAR: "تم تحديد الصورة الكاملة لمشكلات الأوامر المفتوحة — قائمة بنود الإجراءات.",
      },
      {
        id: "sd-pec-2",
        stepNumber: 2,
        titleEN: "Clear Incomplete Sales Orders (V.02)",
        titleAR: "تصفية أوامر المبيعات غير المكتملة (V.02)",
        tCode: "V.02",
        role: "Internal Sales Representative (ISR)",
        whatToDoEN:
          "Open V.02 to display all incomplete sales orders. For each incomplete order, open it in VA02 and fill in the missing mandatory fields (customer reference, pricing date, terms of payment, shipping point). Save each order once complete.",
        whatToDoAR:
          "افتح V.02 لعرض جميع أوامر المبيعات غير المكتملة. لكل أمر غير مكتمل، افتحه في VA02 وأكمل الحقول الإلزامية المفقودة (مرجع العميل، تاريخ التسعير، شروط الدفع، نقطة الشحن). احفظ كل أمر بعد اكتماله.",
        whatSAPDoesEN:
          "Identifies all orders flagged as incomplete. Once mandatory fields are filled, orders are released for further processing.",
        whatSAPDoesAR:
          "يحدد جميع الأوامر المُعلَّمة بأنها غير مكتملة. بمجرد اكتمال الحقول الإلزامية، تُطلَق الأوامر لمزيد من المعالجة.",
        expectedOutputEN: "All incomplete orders resolved — orders ready for delivery and billing.",
        expectedOutputAR: "تمت تسوية جميع الأوامر غير المكتملة — الأوامر جاهزة للتسليم والفوترة.",
      },
      {
        id: "sd-pec-3",
        stepNumber: 3,
        titleEN: "Review Delivery-Blocked Orders (VA14L) and Credit-Blocked Orders (VKM1)",
        titleAR: "مراجعة الأوامر المحجوزة للتسليم (VA14L) والأوامر المحجوزة ائتمانياً (VKM1)",
        tCode: "VA14L",
        role: "Internal Sales Representative (ISR) / Credit Manager",
        whatToDoEN:
          "Open VA14L to see all sales orders blocked for delivery (delivery block reasons). ISR resolves delivery blocks. Credit Manager opens VKM1 to review and release or reject all credit-blocked orders. All blocks must be cleared before period close.",
        whatToDoAR:
          "افتح VA14L لرؤية جميع أوامر المبيعات المحجوزة للتسليم (أسباب حجب التسليم). يُسوّي ISR حجوب التسليم. يفتح مدير الائتمان VKM1 لمراجعة وإطلاق أو رفض جميع الأوامر المحجوزة ائتمانياً. يجب إزالة جميع الحجوب قبل إغلاق الفترة.",
        whatSAPDoesEN:
          "VA14L shows delivery-blocked orders. VKM1 manages credit-blocked orders.",
        whatSAPDoesAR:
          "يعرض VA14L الأوامر المحجوزة للتسليم. يدير VKM1 الأوامر المحجوزة ائتمانياً.",
        expectedOutputEN: "All delivery blocks and credit blocks resolved or rejected.",
        expectedOutputAR: "تمت تسوية أو رفض جميع حجوب التسليم والائتمان.",
      },
      {
        id: "sd-pec-4",
        stepNumber: 4,
        titleEN: "Release Orders for Billing (V.23) and Review Open Deliveries",
        titleAR: "إطلاق الأوامر للفوترة (V.23) ومراجعة التسليمات المفتوحة",
        tCode: "V.23",
        role: "Internal Sales Representative (ISR) / Shipping Specialist",
        whatToDoEN:
          "Run V.23 (Schedule Billing Release) to release any orders held back from billing. Then review: V_UC (incomplete delivery documents) to fix and complete them; VL10C (sales orders due for delivery) to create any missing deliveries; VL06G (outbound deliveries pending goods issue) to post all outstanding GIs; V_SA (log of collective delivery creation) to check for delivery creation errors.",
        whatToDoAR:
          "شغّل V.23 (جدولة إطلاق الفوترة) لإطلاق أي أوامر محتجزة عن الفوترة. ثم راجع: V_UC (مستندات تسليم غير مكتملة) لإصلاحها وإكمالها؛ VL10C (أوامر مبيعات مستحقة للتسليم) لإنشاء أي تسليمات مفقودة؛ VL06G (تسليمات صادرة معلقة إصدار البضائع) لترحيل جميع إصدارات البضائع المعلقة؛ V_SA (سجل إنشاء التسليم الجماعي) للتحقق من أخطاء إنشاء التسليم.",
        whatSAPDoesEN:
          "V.23 removes billing holds. VL06G posts all pending goods issues, creating accounting documents and making deliveries billable.",
        whatSAPDoesAR:
          "يُزيل V.23 تجميد الفوترة. يرحّل VL06G جميع إصدارات البضائع المعلقة، وينشئ مستندات محاسبة ويجعل التسليمات قابلة للفوترة.",
        expectedOutputEN: "All orders released for billing. All delivery GIs posted. Billing due list is complete.",
        expectedOutputAR: "تم إطلاق جميع الأوامر للفوترة. تم ترحيل جميع إصدارات البضائع. قائمة الفوترة المستحقة مكتملة.",
      },
      {
        id: "sd-pec-5",
        stepNumber: 5,
        titleEN: "Process Billing Due List and Review Blocked Billing (VF04 → VFX3)",
        titleAR: "معالجة قائمة الفوترة المستحقة ومراجعة الفوترة المحجوزة (VF04 ← VFX3)",
        tCode: "VF04",
        role: "Billing Clerk",
        whatToDoEN:
          "Open VF04 and run collective billing for all deliveries in the billing due list. After billing run, open VFX3 (Manage Billing Documents) to review any billing documents blocked for accounting transfer. Resolve any blocked billing documents so they are transferred to FI.",
        whatToDoAR:
          "افتح VF04 وشغّل الفوترة الجماعية لجميع التسليمات في قائمة الفوترة المستحقة. بعد تشغيل الفوترة، افتح VFX3 (إدارة مستندات الفوترة) لمراجعة أي مستندات فوترة محجوزة لنقل المحاسبة. سوّ أي مستندات فوترة محجوزة حتى تُنقَل إلى المالية.",
        whatSAPDoesEN:
          "VF04 creates all invoice billing documents. VFX3 identifies and resolves billing documents that failed accounting transfer.",
        whatSAPDoesAR:
          "ينشئ VF04 جميع مستندات الفوترة والفواتير. يحدد VFX3 ويُسوّي مستندات الفوترة التي فشل نقلها المحاسبي.",
        expectedOutputEN: "All invoices created and transferred to FI. No blocked billing documents remaining.",
        expectedOutputAR: "تم إنشاء جميع الفواتير ونقلها إلى المالية. لا توجد مستندات فوترة محجوزة متبقية.",
      },
      {
        id: "sd-pec-6",
        stepNumber: 6,
        titleEN: "Verify Reports and Credit Memo Completeness",
        titleAR: "التحقق من التقارير واكتمال الإشعارات الدائنة",
        tCode: "YSD005",
        role: "Billing Clerk",
        whatToDoEN:
          "Run the following period-end verification reports: YSD005 (Sales Order Status) — confirm all orders are fully delivered and billed; YSD010 (Profitability by Material / Average Sales Price) — review for any pricing anomalies; YSD009 (List of Billing Documents) — confirm all credit memos for monthly incentives, compensations, and promotions have been generated. Log any discrepancies for follow-up.",
        whatToDoAR:
          "شغّل تقارير التحقق من نهاية الفترة التالية: YSD005 (حالة أمر المبيعات) — تأكد من تسليم وفوترة جميع الأوامر بالكامل؛ YSD010 (الربحية حسب المادة / متوسط سعر البيع) — راجع بحثاً عن أي شذوذ في التسعير؛ YSD009 (قائمة مستندات الفوترة) — تأكد من إنشاء جميع الإشعارات الدائنة للحوافز الشهرية والتعويضات والعروض الترويجية. سجّل أي تناقضات للمتابعة.",
        whatSAPDoesEN:
          "Custom reports YSD005, YSD010, and YSD009 provide period-end visibility into order, billing, and profitability status.",
        whatSAPDoesAR:
          "توفر التقارير المخصصة YSD005 وYSD010 وYSD009 رؤية نهاية الفترة لحالة الأوامر والفوترة والربحية.",
        expectedOutputEN: "Period-end checklist complete. All orders closed, all invoices posted, all credit memos issued. Ready for FI period close.",
        expectedOutputAR: "اكتملت قائمة تحقق نهاية الفترة. جميع الأوامر مغلقة، جميع الفواتير مرحّلة، جميع الإشعارات الدائنة مُصدَرة. جاهز لإغلاق فترة المالية.",
      },
    ],
  },

  // ─── HCM: SuccessFactors ESS ────────────────────────────────────────────────
  {
    id: "sf-ess",
    icon: "👤",
    duration: "5–15 min",
    module: "HCM",
    titleEN: "SuccessFactors Employee Self-Service (ESS)",
    titleAR: "خدمة الموظف الذاتية - SuccessFactors",
    descriptionEN:
      "A guide for employees to access and use SuccessFactors ESS at ess.al-watania.com — covering leave requests, payslips, overtime, loans, business trips, clearance, and HR letters.",
    descriptionAR:
      "دليل للموظفين للوصول إلى خدمات الموظف الذاتية على ess.al-watania.com — يغطي طلبات الإجازة، كشوف الراتب، العمل الإضافي، القروض، رحلات العمل، التخليص، وخطابات الموارد البشرية.",
    roles: ["Employee"],
    steps: [
      {
        id: "sf-ess-1",
        stepNumber: 1,
        titleEN: "Log In to SuccessFactors ESS",
        titleAR: "تسجيل الدخول إلى SuccessFactors ESS",
        tCode: "ESS Portal",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p05.png",
        whatToDoEN:
          "Open a browser and go to ess.al-watania.com. Enter your Employee ID as the username and your password, then click Login. If you have forgotten your password contact IT.",
        whatToDoAR:
          "افتح متصفحاً وانتقل إلى ess.al-watania.com. أدخل رقم الموظف كاسم مستخدم وكلمة المرور، ثم انقر تسجيل الدخول. إذا نسيت كلمة المرور، تواصل مع قسم تقنية المعلومات.",
        whatSAPDoesEN:
          "Authenticates the employee and opens the SuccessFactors home screen with all self-service tiles.",
        whatSAPDoesAR:
          "يتحقق من هوية الموظف ويفتح الشاشة الرئيسية لـ SuccessFactors بجميع بلاطات الخدمة الذاتية.",
        expectedOutputEN: "Employee is logged in and can see the ESS home page.",
        expectedOutputAR: "الموظف مسجّل دخوله ويرى الصفحة الرئيسية لـ ESS.",
      },
      {
        id: "sf-ess-2",
        stepNumber: 2,
        titleEN: "Submit a Leave Request",
        titleAR: "تقديم طلب إجازة",
        tCode: "Time Off",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p06.png",
        whatToDoEN:
          "From the home page click the Time Off tile. Select the leave type (Annual, Sick, Hajj, etc.), choose the start and end dates, enter any notes, then click Submit. The request is routed to your line manager for approval.",
        whatToDoAR:
          "من الصفحة الرئيسية انقر على بلاطة 'الإجازة'. اختر نوع الإجازة (سنوية، مرضية، حج، إلخ)، حدد تاريخ البدء والانتهاء، أدخل أي ملاحظات، ثم انقر إرسال. يُحوَّل الطلب إلى مديرك المباشر للموافقة.",
        whatSAPDoesEN:
          "Creates a leave request workflow. Sends approval notification to the line manager. Deducts the days from the leave balance upon approval.",
        whatSAPDoesAR:
          "ينشئ سير عمل طلب الإجازة. يرسل إشعار موافقة إلى المدير المباشر. يخصم الأيام من رصيد الإجازة عند الموافقة.",
        expectedOutputEN:
          "Leave request submitted and pending manager approval. Employee receives confirmation.",
        expectedOutputAR:
          "تم تقديم طلب الإجازة وهو في انتظار موافقة المدير. يتلقى الموظف تأكيداً.",
      },
      {
        id: "sf-ess-3",
        stepNumber: 3,
        titleEN: "Request Return from Leave",
        titleAR: "طلب العودة من الإجازة",
        tCode: "Time Off",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p07.png",
        whatToDoEN:
          "If you return from leave earlier than planned, go to Time Off and submit a Return from Leave request with the actual return date.",
        whatToDoAR:
          "إذا عدت من الإجازة قبل الموعد المحدد، انتقل إلى 'الإجازة' وقدّم طلب عودة من الإجازة مع تاريخ العودة الفعلي.",
        whatSAPDoesEN:
          "Updates the leave record and restores the unused leave balance to the employee's account.",
        whatSAPDoesAR:
          "يحدّث سجل الإجازة ويستعيد رصيد الإجازة غير المستخدم في حساب الموظف.",
        expectedOutputEN: "Leave balance updated; return date recorded in the system.",
        expectedOutputAR: "رصيد الإجازة محدَّث؛ تاريخ العودة مسجَّل في النظام.",
      },
      {
        id: "sf-ess-4",
        stepNumber: 4,
        titleEN: "View Payslip",
        titleAR: "عرض قسيمة الراتب",
        tCode: "Pay Statement",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p08.png",
        whatToDoEN:
          "Click the Pay Statement tile on the home page. Select the month and year to view your payslip. You can download or print it as a PDF.",
        whatToDoAR:
          "انقر على بلاطة 'قسيمة الراتب' في الصفحة الرئيسية. اختر الشهر والسنة لعرض قسيمة راتبك. يمكنك تنزيلها أو طباعتها بصيغة PDF.",
        whatSAPDoesEN:
          "Retrieves the payroll run results for the selected period and displays the breakdown of earnings, deductions, and net pay.",
        whatSAPDoesAR:
          "يسترجع نتائج تشغيل كشوف الرواتب للفترة المحددة ويعرض تفاصيل الاستحقاقات والخصومات وصافي الراتب.",
        expectedOutputEN: "Employee can view and download their payslip.",
        expectedOutputAR: "يستطيع الموظف عرض قسيمة راتبه وتنزيلها.",
      },
      {
        id: "sf-ess-5",
        stepNumber: 5,
        titleEN: "Submit Overtime Request",
        titleAR: "تقديم طلب عمل إضافي",
        tCode: "Overtime",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p09.png",
        whatToDoEN:
          "Click the Overtime tile. Enter the overtime date, hours, and reason. Attach any supporting documents if required, then submit. The request goes to the manager for approval.",
        whatToDoAR:
          "انقر على بلاطة 'العمل الإضافي'. أدخل تاريخ العمل الإضافي والساعات والسبب. أرفق أي مستندات داعمة إذا لزم الأمر، ثم أرسل. يذهب الطلب إلى المدير للموافقة.",
        whatSAPDoesEN:
          "Routes the overtime request for approval and records the approved hours for payroll processing.",
        whatSAPDoesAR:
          "يحوّل طلب العمل الإضافي للموافقة ويسجّل الساعات الموافق عليها لمعالجة الرواتب.",
        expectedOutputEN: "Overtime request submitted; pending manager approval.",
        expectedOutputAR: "تم تقديم طلب العمل الإضافي؛ في انتظار موافقة المدير.",
      },
      {
        id: "sf-ess-6",
        stepNumber: 6,
        titleEN: "Apply for a Loan",
        titleAR: "تقديم طلب قرض",
        tCode: "Loan Request",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p10.png",
        whatToDoEN:
          "Click the Loan Request tile. Select the loan type, enter the amount required, the number of installments, and any reason. Submit the request for HR/Finance approval.",
        whatToDoAR:
          "انقر على بلاطة 'طلب القرض'. اختر نوع القرض وأدخل المبلغ المطلوب وعدد الأقساط وأي سبب. أرسل الطلب للموافقة من الموارد البشرية / المالية.",
        whatSAPDoesEN:
          "Creates a loan request and routes it through the approval workflow. Upon approval, integrates with payroll to set up deduction installments.",
        whatSAPDoesAR:
          "ينشئ طلب قرض ويحوّله عبر سير عمل الموافقة. عند الموافقة، يتكامل مع الرواتب لإعداد أقساط الخصم.",
        expectedOutputEN: "Loan request submitted for approval.",
        expectedOutputAR: "تم تقديم طلب القرض للموافقة.",
      },
      {
        id: "sf-ess-7",
        stepNumber: 7,
        titleEN: "Request a Business Trip",
        titleAR: "طلب رحلة عمل",
        tCode: "Business Trip",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p14.png",
        whatToDoEN:
          "Click the Business Trip tile. Fill in the destination, travel dates, purpose, and estimated expenses. Attach any supporting documents, then submit for manager approval.",
        whatToDoAR:
          "انقر على بلاطة 'رحلة العمل'. أدخل الوجهة وتواريخ السفر والغرض والمصروفات المقدّرة. أرفق أي مستندات داعمة، ثم أرسل للموافقة من المدير.",
        whatSAPDoesEN:
          "Routes the trip request for approval and records it for financial settlement upon return.",
        whatSAPDoesAR:
          "يحوّل طلب الرحلة للموافقة ويسجّله للتسوية المالية عند العودة.",
        expectedOutputEN: "Business trip request submitted; pending approval.",
        expectedOutputAR: "تم تقديم طلب رحلة العمل؛ في انتظار الموافقة.",
      },
      {
        id: "sf-ess-8",
        stepNumber: 8,
        titleEN: "Submit Clearance Request",
        titleAR: "تقديم طلب تخليص",
        tCode: "Clearance",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p15.png",
        whatToDoEN:
          "Click the Clearance tile when you are leaving the company or a department. The system sends clearance tasks to all relevant departments (IT, Finance, Accommodation, etc.). Track the status until fully cleared.",
        whatToDoAR:
          "انقر على بلاطة 'التخليص' عند مغادرة الشركة أو القسم. يرسل النظام مهام التخليص إلى جميع الإدارات المعنية (تقنية المعلومات، المالية، الإقامة، إلخ). تابع الحالة حتى اكتمال التخليص.",
        whatSAPDoesEN:
          "Triggers a clearance workflow across all departments. Tracks completion of each department's sign-off before issuing the final clearance.",
        whatSAPDoesAR:
          "يُطلق سير عمل التخليص عبر جميع الإدارات. يتتبع اكتمال توقيع كل إدارة قبل إصدار التخليص النهائي.",
        expectedOutputEN:
          "Clearance request initiated; all departments notified to complete their tasks.",
        expectedOutputAR:
          "تم بدء طلب التخليص؛ جميع الإدارات مُبلَّغة لإتمام مهامها.",
      },
      {
        id: "sf-ess-9",
        stepNumber: 9,
        titleEN: "Request an HR Letter",
        titleAR: "طلب خطاب موارد بشرية",
        tCode: "HR Letter",
        role: "Employee",
        screenshotUrl: "/process-charts/sf-ess-p16.png",
        whatToDoEN:
          "Click the HR Letter tile. Select the letter type (Salary Certificate, Experience Letter, etc.), choose the addressee (Bank, Embassy, etc.), add any notes, and submit. HR will prepare and issue the letter.",
        whatToDoAR:
          "انقر على بلاطة 'خطاب الموارد البشرية'. اختر نوع الخطاب (شهادة راتب، خطاب خبرة، إلخ)، اختر المُرسَل إليه (بنك، سفارة، إلخ)، أضف أي ملاحظات وأرسل. ستُعدّ الموارد البشرية الخطاب وتُصدره.",
        whatSAPDoesEN:
          "Routes the HR letter request to the HR team. Once issued, the employee can download the signed letter from the portal.",
        whatSAPDoesAR:
          "يحوّل طلب خطاب الموارد البشرية إلى فريق الموارد البشرية. بعد الإصدار، يمكن للموظف تنزيل الخطاب الموقّع من البوابة.",
        expectedOutputEN: "HR letter request submitted; employee notified when the letter is ready.",
        expectedOutputAR:
          "تم تقديم طلب خطاب الموارد البشرية؛ يُبلَّغ الموظف عند جاهزية الخطاب.",
      },
    ],
  },

  // ─── HCM: SuccessFactors MSS ────────────────────────────────────────────────
  {
    id: "sf-mss",
    icon: "👔",
    duration: "5–10 min",
    module: "HCM",
    titleEN: "SuccessFactors Manager Self-Service (MSS)",
    titleAR: "خدمة المدير الذاتية - SuccessFactors",
    descriptionEN:
      "A guide for managers to use SuccessFactors MSS at ess.al-watania.com — covering the home page, approving requests via notifications, managing the approval inbox, and viewing team profiles.",
    descriptionAR:
      "دليل للمديرين لاستخدام خدمة المدير الذاتية على ess.al-watania.com — يغطي الصفحة الرئيسية، الموافقة على الطلبات عبر الإشعارات، إدارة صندوق الموافقات، وعرض ملفات الفريق.",
    roles: ["Manager", "Supervisor"],
    steps: [
      {
        id: "sf-mss-1",
        stepNumber: 1,
        titleEN: "Log In and Navigate the Home Page",
        titleAR: "تسجيل الدخول والتنقل في الصفحة الرئيسية",
        tCode: "MSS Portal",
        role: "Manager",
        screenshotUrl: "/process-charts/sf-mss-p05.png",
        whatToDoEN:
          "Go to ess.al-watania.com and log in with your Employee ID and password. As a manager you will see additional tiles on the home page: My Team, Approvals, Notifications, and team analytics tiles.",
        whatToDoAR:
          "انتقل إلى ess.al-watania.com وسجّل الدخول برقم موظفك وكلمة المرور. بصفتك مديراً ستجد بلاطات إضافية في الصفحة الرئيسية: فريقي، الموافقات، الإشعارات، وبلاطات تحليلات الفريق.",
        whatSAPDoesEN:
          "Loads the manager's dashboard with pending approvals count, team headcount, and quick-action tiles.",
        whatSAPDoesAR:
          "يُحمِّل لوحة تحكم المدير مع عدد الموافقات المعلقة وحجم الفريق وبلاطات الإجراءات السريعة.",
        expectedOutputEN: "Manager is logged in and sees the MSS home page with team tiles.",
        expectedOutputAR: "المدير مسجَّل الدخول ويرى الصفحة الرئيسية لـ MSS مع بلاطات الفريق.",
      },
      {
        id: "sf-mss-2",
        stepNumber: 2,
        titleEN: "Approve Requests via Notifications",
        titleAR: "الموافقة على الطلبات عبر الإشعارات",
        tCode: "Notifications",
        role: "Manager",
        screenshotUrl: "/process-charts/sf-mss-p06.png",
        whatToDoEN:
          "Click the bell icon (Notifications) at the top of the page. Any pending approval request will appear here. Click the request to review details, then click Approve or Reject and add a comment if needed.",
        whatToDoAR:
          "انقر على أيقونة الجرس (الإشعارات) في أعلى الصفحة. ستظهر هنا أي طلبات موافقة معلقة. انقر على الطلب لمراجعة التفاصيل، ثم انقر موافقة أو رفض وأضف تعليقاً إذا لزم.",
        whatSAPDoesEN:
          "Displays real-time approval requests. Approved requests automatically update the employee's record and notify the employee of the decision.",
        whatSAPDoesAR:
          "يعرض طلبات الموافقة في الوقت الفعلي. تُحدِّث الطلبات الموافق عليها تلقائياً سجل الموظف وتُبلِّغ الموظف بالقرار.",
        expectedOutputEN: "Request approved or rejected; employee notified automatically.",
        expectedOutputAR: "تمت الموافقة على الطلب أو رفضه؛ يُبلَّغ الموظف تلقائياً.",
      },
      {
        id: "sf-mss-3",
        stepNumber: 3,
        titleEN: "Approve Leave and Overtime via the Inbox",
        titleAR: "الموافقة على الإجازة والعمل الإضافي عبر صندوق الوارد",
        tCode: "Approval Inbox",
        role: "Manager",
        screenshotUrl: "/process-charts/sf-mss-p08.png",
        whatToDoEN:
          "Click the Approvals tile or go to the Inbox from the main menu. Filter by request type (Leave, Overtime, etc.) if needed. Select a request, review the employee's leave balance and dates, then Approve or Reject with comments.",
        whatToDoAR:
          "انقر على بلاطة 'الموافقات' أو انتقل إلى صندوق الوارد من القائمة الرئيسية. قم بالتصفية حسب نوع الطلب (إجازة، عمل إضافي، إلخ) إذا لزم. اختر طلباً، راجع رصيد إجازة الموظف والتواريخ، ثم وافق أو ارفض مع تعليقات.",
        whatSAPDoesEN:
          "Provides a consolidated inbox of all pending approval tasks. Approving a leave request deducts the balance immediately; rejecting it notifies the employee with the manager's comment.",
        whatSAPDoesAR:
          "يوفر صندوق وارد موحَّداً لجميع مهام الموافقة المعلقة. تؤدي الموافقة على طلب الإجازة إلى خصم الرصيد فوراً؛ ويُبلَّغ الموظف بالرفض مع تعليق المدير.",
        expectedOutputEN:
          "All pending leave and overtime requests reviewed; employees notified of decisions.",
        expectedOutputAR:
          "تمت مراجعة جميع طلبات الإجازة والعمل الإضافي المعلقة؛ الموظفون مُبلَّغون بالقرارات.",
      },
      {
        id: "sf-mss-4",
        stepNumber: 4,
        titleEN: "View Team Profiles and Leave Balances",
        titleAR: "عرض ملفات الفريق وأرصدة الإجازات",
        tCode: "My Team",
        role: "Manager",
        screenshotUrl: "/process-charts/sf-mss-p14.png",
        whatToDoEN:
          "Click the My Team tile. You can see all your direct reports with their job titles, leave balances, and attendance summaries. Click any employee card to see their full profile, history, and current requests.",
        whatToDoAR:
          "انقر على بلاطة 'فريقي'. يمكنك رؤية جميع المرؤوسين المباشرين مع مسمياتهم الوظيفية وأرصدة إجازاتهم وملخصات الحضور. انقر على بطاقة أي موظف لرؤية ملفه الكامل وتاريخه وطلباته الحالية.",
        whatSAPDoesEN:
          "Displays an org-chart view of the manager's team with key HR data. Provides drill-down to individual employee records for informed decision-making.",
        whatSAPDoesAR:
          "يعرض عرضاً هيكلياً لفريق المدير مع بيانات الموارد البشرية الرئيسية. يوفر الحفر في سجلات الموظفين الفردية لاتخاذ قرارات مدروسة.",
        expectedOutputEN:
          "Manager has a complete view of team attendance, leave balances, and pending requests.",
        expectedOutputAR:
          "يمتلك المدير رؤية كاملة لحضور الفريق وأرصدة الإجازات والطلبات المعلقة.",
      },
    ],
  },

  // ─── EHS: Incident Management ───────────────────────────────────────────────
  {
    id: "ehs-incident",
    icon: "⚠️",
    duration: "1–2 days",
    module: "EHS",
    titleEN: "EHS Incident Management",
    titleAR: "إدارة حوادث البيئة والصحة والسلامة",
    descriptionEN:
      "End-to-end process for reporting, reviewing, investigating, and closing workplace incidents, near misses, and safety observations in SAP EHS (S/4HANA 2022).",
    descriptionAR:
      "عملية شاملة للإبلاغ عن حوادث مكان العمل والأحداث الوشيكة ومشاهدات السلامة ومراجعتها والتحقيق فيها وإغلاقها في SAP EHS (S/4HANA 2022).",
    roles: ["Incident Reporter", "Incident Manager", "Responsible Personnel"],
    steps: [
      {
        id: "ehs-inc-1",
        stepNumber: 1,
        titleEN: "Create Incident Report",
        titleAR: "إنشاء تقرير الحادثة",
        tCode: "F1992",
        role: "Incident Reporter",
        whatToDoEN:
          "Open the Report Incident app (F1992). Select the event type: Incident, Near Miss, or Safety Observation. Fill in the single-entry screen with the date, time, location, description, and people involved. Click Send to submit the report.",
        whatToDoAR:
          "افتح تطبيق الإبلاغ عن الحادثة (F1992). حدد نوع الحدث: حادثة، أو حادثة وشيكة، أو مشاهدة سلامة. أكمل شاشة الإدخال الواحدة بالتاريخ والوقت والموقع والوصف والأشخاص المعنيين. انقر إرسال لتقديم التقرير.",
        whatSAPDoesEN:
          "Creates the incident record and routes an approval task to the responsible Incident Manager's My Inbox (F7992).",
        whatSAPDoesAR:
          "ينشئ سجل الحادثة ويوجّه مهمة موافقة إلى صندوق وارد مدير الحوادث المسؤول (F7992).",
        expectedOutputEN: "Incident record created in SAP; Incident Manager notified via My Inbox.",
        expectedOutputAR: "تم إنشاء سجل الحادثة في SAP؛ تم إبلاغ مدير الحوادث عبر صندوق الوارد.",
      },
      {
        id: "ehs-inc-2",
        stepNumber: 2,
        titleEN: "Approve Incident",
        titleAR: "الموافقة على الحادثة",
        tCode: "F7992",
        role: "Incident Manager",
        whatToDoEN:
          "Open My Inbox (F7992). Review the submitted incident report. Confirm it is valid and approve it to move the record to the detailed management stage.",
        whatToDoAR:
          "افتح صندوق الوارد (F7992). راجع تقرير الحادثة المقدَّم. تأكد من صحته وافقه للانتقال بالسجل إلى مرحلة الإدارة التفصيلية.",
        whatSAPDoesEN:
          "Changes the incident status from 'New' to 'In Process' and routes it to the Manage Incidents app for further action.",
        whatSAPDoesAR:
          "يغيّر حالة الحادثة من 'جديدة' إلى 'قيد التنفيذ' ويحوّلها إلى تطبيق إدارة الحوادث لاتخاذ إجراءات إضافية.",
        expectedOutputEN: "Incident approved and available in Manage Incidents (F4759).",
        expectedOutputAR: "تمت الموافقة على الحادثة وهي متاحة في تطبيق إدارة الحوادث (F4759).",
      },
      {
        id: "ehs-inc-3",
        stepNumber: 3,
        titleEN: "Review and Complete Incident Record",
        titleAR: "مراجعة سجل الحادثة وإكماله",
        tCode: "F4759",
        role: "Incident Manager",
        whatToDoEN:
          "Open Manage Incidents (F4759). Complete all sections: add all involved persons, damaged assets, release data, and conduct a risk matrix assessment. Send inquiries for more information if needed. Track any financial impact of the incident.",
        whatToDoAR:
          "افتح إدارة الحوادث (F4759). أكمل جميع الأقسام: أضف جميع الأشخاص المعنيين والأصول التالفة وبيانات الإطلاق، وأجرِ تقييم مصفوفة المخاطر. أرسل استفسارات للحصول على مزيد من المعلومات إذا لزم. تتبّع أي تأثير مالي للحادثة.",
        whatSAPDoesEN:
          "Updates the incident record with full details. Integrates with PM to read asset master data and with HCM to record injured employee data.",
        whatSAPDoesAR:
          "يحدّث سجل الحادثة بالتفاصيل الكاملة. يتكامل مع PM لقراءة بيانات الأصول ومع HCM لتسجيل بيانات الموظف المصاب.",
        expectedOutputEN: "Incident record fully populated; risk assessment complete.",
        expectedOutputAR: "سجل الحادثة مكتمل بالكامل؛ تقييم المخاطر مكتمل.",
      },
      {
        id: "ehs-inc-4",
        stepNumber: 4,
        titleEN: "Attach Investigation (External)",
        titleAR: "إرفاق التحقيق (خارجي)",
        tCode: "F4759",
        role: "Incident Manager",
        whatToDoEN:
          "Note: In AWP the investigation and root-cause analysis is conducted externally using an Excel file. Open Manage Incidents (F4759), go to the Attachments section, and upload the completed investigation Excel file.",
        whatToDoAR:
          "ملاحظة: في AWP يُجرَى التحقيق وتحليل السبب الجذري خارجياً باستخدام ملف Excel. افتح إدارة الحوادث (F4759)، انتقل إلى قسم المرفقات، وارفع ملف Excel المكتمل للتحقيق.",
        whatSAPDoesEN:
          "Stores the investigation attachment against the incident record for audit and reporting purposes.",
        whatSAPDoesAR:
          "يخزّن مرفق التحقيق في سجل الحادثة لأغراض التدقيق وإعداد التقارير.",
        expectedOutputEN: "Investigation file attached to the incident record in SAP.",
        expectedOutputAR: "ملف التحقيق مرفق بسجل الحادثة في SAP.",
      },
      {
        id: "ehs-inc-5",
        stepNumber: 5,
        titleEN: "Report to HR Team",
        titleAR: "الإبلاغ لفريق الموارد البشرية",
        tCode: "F4759",
        role: "Incident Manager",
        whatToDoEN:
          "From Manage Incidents (F4759) generate an incident report and send it to the HR team so they can coordinate with the insurance provider if there are injured employees.",
        whatToDoAR:
          "من إدارة الحوادث (F4759) أنشئ تقرير الحادثة وأرسله إلى فريق الموارد البشرية حتى يتمكنوا من التنسيق مع شركة التأمين في حالة وجود موظفين مصابين.",
        whatSAPDoesEN:
          "Generates a formatted incident report and sends it via the system notification to the designated HR contact.",
        whatSAPDoesAR:
          "يُنشئ تقرير حادثة منسقاً ويرسله عبر إشعار النظام إلى جهة الاتصال المحددة في الموارد البشرية.",
        expectedOutputEN: "HR team notified; incident report shared for insurance coordination.",
        expectedOutputAR: "تم إبلاغ فريق الموارد البشرية؛ تقرير الحادثة مشارك للتنسيق مع التأمين.",
      },
      {
        id: "ehs-inc-6",
        stepNumber: 6,
        titleEN: "Print / Generate Analytical Reports",
        titleAR: "طباعة / إنشاء التقارير التحليلية",
        tCode: "F4759 / F2628 / F5240",
        role: "Incident Manager",
        whatToDoEN:
          "Use the reporting apps to generate required reports: Incident Detailed Analysis (F2628), DART Rate (F4759), Incident Rate (F5240), and Number of Recordable Cases (F2103). Select the location/sub-locations and output format (PDF or CSV).",
        whatToDoAR:
          "استخدم تطبيقات التقارير لإنشاء التقارير المطلوبة: التحليل التفصيلي للحوادث (F2628)، معدل DART (F4759)، معدل الحوادث (F5240)، وعدد الحالات القابلة للتسجيل (F2103). اختر الموقع/المواقع الفرعية وتنسيق الإخراج (PDF أو CSV).",
        whatSAPDoesEN:
          "Generates legal and summary reports for regulatory compliance and management review. Covers all incidents across selected locations.",
        whatSAPDoesAR:
          "يُنشئ تقارير قانونية وملخصة للامتثال التنظيمي ومراجعة الإدارة. يغطي جميع الحوادث في المواقع المحددة.",
        expectedOutputEN: "Incident reports generated in PDF or CSV for legal and internal use.",
        expectedOutputAR: "تقارير الحوادث منشأة بصيغة PDF أو CSV للاستخدام القانوني والداخلي.",
      },
      {
        id: "ehs-inc-7",
        stepNumber: 7,
        titleEN: "Define and Manage Corrective Tasks",
        titleAR: "تحديد الإجراءات التصحيحية وإدارتها",
        tCode: "F4759",
        role: "Incident Manager",
        whatToDoEN:
          "In Manage Incidents (F4759) create corrective and preventive tasks. Assign each task to the responsible person with a due date. Task types include: Change Request, Maintenance Notification, Reporting Task, or Task with Approval.",
        whatToDoAR:
          "في إدارة الحوادث (F4759) أنشئ مهام تصحيحية ووقائية. عيّن كل مهمة للشخص المسؤول مع تاريخ استحقاق. تشمل أنواع المهام: طلب تغيير، إشعار صيانة، مهمة إبلاغ، أو مهمة بموافقة.",
        whatSAPDoesEN:
          "Creates tasks in the SAP system and routes them to each assigned person's My Inbox. Integrates with PM to create maintenance notifications for damaged assets.",
        whatSAPDoesAR:
          "ينشئ مهاماً في نظام SAP ويوجّهها إلى صندوق وارد كل شخص مُعيَّن. يتكامل مع PM لإنشاء إشعارات الصيانة للأصول التالفة.",
        expectedOutputEN: "Corrective tasks created and assigned; responsible persons notified via My Inbox.",
        expectedOutputAR: "تم إنشاء الإجراءات التصحيحية وتعيينها؛ الأشخاص المسؤولون مُبلَّغون عبر صندوق الوارد.",
      },
      {
        id: "ehs-inc-8",
        stepNumber: 8,
        titleEN: "Perform Corrective Tasks",
        titleAR: "تنفيذ الإجراءات التصحيحية",
        tCode: "F7992",
        role: "Responsible Personnel",
        whatToDoEN:
          "The assigned person opens My Inbox (F7992) and finds the corrective task. Complete the required action — fix the unsafe condition, create the maintenance notification, or submit the report — then mark the task as complete.",
        whatToDoAR:
          "يفتح الشخص المُعيَّن صندوق الوارد (F7992) ويجد الإجراء التصحيحي. أكمل الإجراء المطلوب — صحّح الحالة الخطرة، أنشئ إشعار الصيانة، أو قدّم التقرير — ثم ضع علامة اكتمال المهمة.",
        whatSAPDoesEN:
          "Updates the task status to completed and notifies the Incident Manager. If linked to PM, triggers the maintenance notification workflow.",
        whatSAPDoesAR:
          "يحدّث حالة المهمة إلى مكتملة ويُبلِّغ مدير الحوادث. إذا كانت مرتبطة بـ PM، يُطلِق سير عمل إشعار الصيانة.",
        expectedOutputEN: "Corrective task completed; Incident Manager notified.",
        expectedOutputAR: "الإجراء التصحيحي مكتمل؛ مدير الحوادث مُبلَّغ.",
      },
      {
        id: "ehs-inc-9",
        stepNumber: 9,
        titleEN: "Close Incident",
        titleAR: "إغلاق الحادثة",
        tCode: "F4759",
        role: "Incident Manager",
        whatToDoEN:
          "Once all corrective tasks are complete and the record is fully documented, open the incident in Manage Incidents (F4759) and initiate closure. Review all sections, then click Close Incident. If further details are needed later, the incident can be re-opened.",
        whatToDoAR:
          "بعد اكتمال جميع الإجراءات التصحيحية وتوثيق السجل بالكامل، افتح الحادثة في إدارة الحوادث (F4759) وابدأ الإغلاق. راجع جميع الأقسام، ثم انقر إغلاق الحادثة. إذا احتُيج لتفاصيل إضافية لاحقاً، يمكن إعادة فتح الحادثة.",
        whatSAPDoesEN:
          "Sets the incident status to 'Closed'. The record becomes read-only and is preserved for audit and reporting. Can be re-opened if needed.",
        whatSAPDoesAR:
          "يضبط حالة الحادثة على 'مغلقة'. يصبح السجل للقراءة فقط ويُحفَظ لأغراض التدقيق وإعداد التقارير. يمكن إعادة فتحه عند الحاجة.",
        expectedOutputEN: "Incident closed; all data locked and available for compliance reporting.",
        expectedOutputAR: "الحادثة مغلقة؛ جميع البيانات مقفلة ومتاحة لتقارير الامتثال.",
      },
    ],
  },

  // ─── TM: Logistic Service Provider ─────────────────────────────────────────
  {
    id: "tm-lsp",
    module: "TM",
    icon: "🚛",
    duration: "1–2 days",
    titleEN: "Logistic Service Provider (LSP) Process",
    titleAR: "عملية مزود الخدمة اللوجستية (LSP)",
    descriptionEN:
      "Sell and execute transportation services for external customers: create a forwarding order, auto-generate freight units, build and print the freight order, assign driver and vehicle, then settle and invoice.",
    descriptionAR:
      "بيع وتنفيذ خدمات النقل للعملاء الخارجيين: إنشاء أمر شحن، إنشاء وحدات الشحن تلقائياً، بناء أمر الشحن وطباعته، تعيين السائق والمركبة، ثم التسوية والفوترة.",
    roles: ["Transportation Planner", "Billing Clerk"],
    steps: [
      {
        id: "tm-lsp-1",
        stepNumber: 1,
        titleEN: "Create Forwarding Order",
        titleAR: "إنشاء أمر الشحن",
        tCode: "Forwarding Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "Open the Forwarding Orders Worklist app. Create a new forwarding order for the external customer. Enter the customer details, origin and destination locations, material, quantities, and required delivery date. The forwarding order captures the customer's transportation requirement and is the basis for charge calculation using the Forwarding Agreement (FWA).",
        whatToDoAR:
          "افتح تطبيق قائمة عمل أوامر الشحن. أنشئ أمر شحن جديداً للعميل الخارجي. أدخل تفاصيل العميل ومواقع الأصل والوجهة والمادة والكميات وتاريخ التسليم المطلوب. يلتقط أمر الشحن متطلبات النقل للعميل ويُعدّ أساساً لحساب الرسوم باستخدام اتفاقية الشحن (FWA).",
        whatSAPDoesEN:
          "Creates the forwarding order document (type ZFWL). Applies the Forwarding Agreement rate to calculate customer freight charges automatically.",
        whatSAPDoesAR:
          "ينشئ مستند أمر الشحن (النوع ZFWL). يطبّق سعر اتفاقية الشحن لحساب رسوم الشحن للعميل تلقائياً.",
        expectedOutputEN: "Forwarding order created with customer charges calculated.",
        expectedOutputAR: "تم إنشاء أمر الشحن مع احتساب رسوم العميل.",
      },
      {
        id: "tm-lsp-2",
        stepNumber: 2,
        titleEN: "Freight Units Created Automatically",
        titleAR: "إنشاء وحدات الشحن تلقائياً",
        tCode: "Freight Units – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "No manual action required. SAP TM automatically generates Freight Units (FUs) based on the quantities entered in the forwarding order. Review the generated FUs in the Freight Units Worklist to confirm they are correct.",
        whatToDoAR:
          "لا يلزم أي إجراء يدوي. يُنشئ SAP TM تلقائياً وحدات الشحن (FU) بناءً على الكميات المدخلة في أمر الشحن. راجع وحدات الشحن المُنشأة في قائمة عمل وحدات الشحن للتأكد من صحتها.",
        whatSAPDoesEN:
          "Splits the forwarding order into transportable freight units (type ZFUL). Each FU represents a load that can be assigned to a freight order.",
        whatSAPDoesAR:
          "يقسّم أمر الشحن إلى وحدات شحن قابلة للنقل (النوع ZFUL). كل وحدة شحن تمثّل حمولة يمكن تعيينها لأمر شحن.",
        expectedOutputEN: "Freight units auto-generated and visible in the FU worklist.",
        expectedOutputAR: "وحدات الشحن منشأة تلقائياً وظاهرة في قائمة عمل وحدات الشحن.",
      },
      {
        id: "tm-lsp-3",
        stepNumber: 3,
        titleEN: "Create Freight Order",
        titleAR: "إنشاء أمر الشحن",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "Use the Transportation Cockpit to plan and assign freight units to a freight order automatically, or manually create a freight order and assign the freight units to it. Set the carrier (if subcontracting) and route details.",
        whatToDoAR:
          "استخدم قمرة قيادة النقل لتخطيط وحدات الشحن وتعيينها لأمر شحن تلقائياً، أو أنشئ أمر شحن يدوياً وعيّن وحدات الشحن إليه. حدد الناقل (في حالة التعاقد من الباطن) وتفاصيل المسار.",
        whatSAPDoesEN:
          "Creates the freight order document. Applies the Freight Agreement rate for subcontractor charge calculation. Links freight units to the freight order.",
        whatSAPDoesAR:
          "ينشئ مستند أمر الشحن. يطبّق سعر اتفاقية الشحن لحساب رسوم المتعاقد من الباطن. يربط وحدات الشحن بأمر الشحن.",
        expectedOutputEN: "Freight order created with freight units assigned.",
        expectedOutputAR: "تم إنشاء أمر الشحن مع تعيين وحدات الشحن.",
      },
      {
        id: "tm-lsp-4",
        stepNumber: 4,
        titleEN: "Print Freight Order",
        titleAR: "طباعة أمر الشحن",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "From the freight order, print the freight order form to give to the driver. The form contains all trip details: origin, destination, material, quantities, and the customer information.",
        whatToDoAR:
          "من أمر الشحن، اطبع نموذج أمر الشحن لتسليمه للسائق. يحتوي النموذج على جميع تفاصيل الرحلة: الأصل والوجهة والمادة والكميات ومعلومات العميل.",
        whatSAPDoesEN:
          "Generates the freight order printout using the custom form (Enhancement 001).",
        whatSAPDoesAR:
          "يُنشئ مطبوعة أمر الشحن باستخدام النموذج المخصص (التحسين 001).",
        expectedOutputEN: "Freight order form printed and handed to the driver.",
        expectedOutputAR: "تمت طباعة نموذج أمر الشحن وتسليمه للسائق.",
      },
      {
        id: "tm-lsp-5",
        stepNumber: 5,
        titleEN: "Insert Driver and Vehicle Number",
        titleAR: "إدخال رقم السائق والمركبة",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "In the freight order, assign the driver and vehicle (truck/trailer/combination) for the trip. Also enter the actual fuel consumed in the custom fuel field (Enhancement 004).",
        whatToDoAR:
          "في أمر الشحن، عيّن السائق والمركبة (شاحنة / مقطورة / تركيبة) للرحلة. أدخل أيضاً الوقود الفعلي المستهلك في حقل الوقود المخصص (التحسين 004).",
        whatSAPDoesEN:
          "Links the driver and vehicle resources to the freight order. Records are available for reporting and the driver incentive calculation.",
        whatSAPDoesAR:
          "يربط موارد السائق والمركبة بأمر الشحن. السجلات متاحة لإعداد التقارير وحساب حوافز السائق.",
        expectedOutputEN: "Driver and vehicle assigned; fuel data recorded on the freight order.",
        expectedOutputAR: "تم تعيين السائق والمركبة؛ بيانات الوقود مسجّلة في أمر الشحن.",
      },
      {
        id: "tm-lsp-6",
        stepNumber: 6,
        titleEN: "Create Forwarding Settlement Document",
        titleAR: "إنشاء مستند تسوية الشحن",
        tCode: "Forwarding Settlements – Worklist",
        role: "Billing Clerk",
        whatToDoEN:
          "After the trip is complete, open the Forwarding Settlements Worklist and create a forwarding settlement document with reference to the forwarding order. This triggers the customer billing process.",
        whatToDoAR:
          "بعد اكتمال الرحلة، افتح قائمة عمل تسويات الشحن وأنشئ مستند تسوية شحن بالرجوع إلى أمر الشحن. يُطلِق ذلك عملية فوترة العميل.",
        whatSAPDoesEN:
          "Creates the forwarding settlement document (type ZSTL). Triggers automatic creation of the SD billing document in ERP.",
        whatSAPDoesAR:
          "ينشئ مستند تسوية الشحن (النوع ZSTL). يُطلِق الإنشاء التلقائي لمستند فوترة SD في ERP.",
        expectedOutputEN: "Forwarding settlement document created; billing triggered in ERP.",
        expectedOutputAR: "تم إنشاء مستند تسوية الشحن؛ تم تشغيل الفوترة في ERP.",
      },
      {
        id: "tm-lsp-7",
        stepNumber: 7,
        titleEN: "Billing Document Created Automatically in ERP",
        titleAR: "إنشاء مستند الفوترة تلقائياً في ERP",
        tCode: "Forwarding Settlements – Worklist",
        role: "Billing Clerk",
        whatToDoEN:
          "No manual action needed. SAP automatically creates the customer billing document (type ZBIL) in the ERP system based on the forwarding settlement document. Review to confirm the amounts are correct.",
        whatToDoAR:
          "لا يلزم أي إجراء يدوي. يُنشئ SAP تلقائياً مستند فوترة العميل (النوع ZBIL) في نظام ERP بناءً على مستند تسوية الشحن. راجع للتأكد من صحة المبالغ.",
        whatSAPDoesEN:
          "Integration with SD module creates the customer invoice automatically in ERP. Accounting entries are posted to FICO.",
        whatSAPDoesAR:
          "يُنشئ التكامل مع وحدة SD فاتورة العميل تلقائياً في ERP. يتم ترحيل قيود المحاسبة إلى FICO.",
        expectedOutputEN: "Customer billing document posted in ERP; accounting entries created.",
        expectedOutputAR: "تم ترحيل مستند فوترة العميل في ERP؛ تم إنشاء قيود المحاسبة.",
      },
      {
        id: "tm-lsp-8",
        stepNumber: 8,
        titleEN: "Print Billing Document",
        titleAR: "طباعة مستند الفوترة",
        tCode: "Create Billing Document",
        role: "Billing Clerk",
        whatToDoEN:
          "Print the billing document to send to the external customer as their invoice. The form is designed using the custom billing document form (Enhancement 002).",
        whatToDoAR:
          "اطبع مستند الفوترة لإرساله إلى العميل الخارجي كفاتورتهم. النموذج مُصمَّم باستخدام نموذج مستند الفوترة المخصص (التحسين 002).",
        whatSAPDoesEN:
          "Generates the customer invoice printout using the custom billing form.",
        whatSAPDoesAR:
          "يُنشئ مطبوعة فاتورة العميل باستخدام نموذج الفوترة المخصص.",
        expectedOutputEN: "Billing document printed and sent to the customer.",
        expectedOutputAR: "تمت طباعة مستند الفوترة وإرساله للعميل.",
      },
    ],
  },

  // ─── TM: Group Logistic Scenario ────────────────────────────────────────────
  {
    id: "tm-group",
    module: "TM",
    icon: "🏭",
    duration: "1–2 days",
    titleEN: "Group Logistic Scenario (Internal Transport)",
    titleAR: "سيناريو اللوجستيات الجماعية (النقل الداخلي)",
    descriptionEN:
      "Transport products between Al-Watania Poultry (AWP) and its customers: sales/purchase orders flow from ERP to TM, freight orders are created and executed, internal fees are settled, and billing is posted automatically.",
    descriptionAR:
      "نقل المنتجات بين الوطنية للدواجن (AWP) وعملائها: تنتقل أوامر البيع/الشراء من ERP إلى TM، تُنشأ أوامر الشحن وتُنفَّذ، تُسوَّى الرسوم الداخلية، وتُرحَّل الفوترة تلقائياً.",
    roles: ["Sales Representative", "Shipping Specialist", "Transportation Planner", "Billing Clerk"],
    steps: [
      {
        id: "tm-group-1",
        stepNumber: 1,
        titleEN: "Create Sales Order / Purchase Order in ERP",
        titleAR: "إنشاء أمر مبيعات / أمر شراء في ERP",
        tCode: "Create Sales Order / Purchase Order",
        role: "Sales Representative / Purchasing",
        whatToDoEN:
          "In ERP create a sales order or purchase order for the required materials and quantities. This triggers the transportation planning process in SAP TM.",
        whatToDoAR:
          "في ERP أنشئ أمر مبيعات أو أمر شراء للمواد والكميات المطلوبة. يُطلِق ذلك عملية تخطيط النقل في SAP TM.",
        whatSAPDoesEN:
          "Creates the sales or purchase order in ERP. The order data is passed to TM to generate the transportation requirement.",
        whatSAPDoesAR:
          "ينشئ أمر المبيعات أو الشراء في ERP. تُمرَّر بيانات الأمر إلى TM لإنشاء متطلبات النقل.",
        expectedOutputEN: "Sales or purchase order created in ERP.",
        expectedOutputAR: "تم إنشاء أمر المبيعات أو الشراء في ERP.",
      },
      {
        id: "tm-group-2",
        stepNumber: 2,
        titleEN: "Create Delivery Document in ERP",
        titleAR: "إنشاء مستند التسليم في ERP",
        tCode: "Create Delivery Document",
        role: "Shipping Specialist",
        whatToDoEN:
          "Create an outbound or inbound delivery document in ERP based on the sales or purchase order. This is the trigger for the automatic creation of the Order Transportation Request (OTR) or Delivery Transportation Request (DTR) in TM.",
        whatToDoAR:
          "أنشئ مستند تسليم صادر أو وارد في ERP بناءً على أمر المبيعات أو الشراء. هذا هو مُحفِّز الإنشاء التلقائي لطلب نقل الأمر (OTR) أو طلب نقل التسليم (DTR) في TM.",
        whatSAPDoesEN:
          "Creates the delivery document in ERP and triggers replication to SAP TM as an OTR or DTR.",
        whatSAPDoesAR:
          "ينشئ مستند التسليم في ERP ويُطلِق النسخ إلى SAP TM كـ OTR أو DTR.",
        expectedOutputEN: "Delivery document created; OTR/DTR generated automatically in TM.",
        expectedOutputAR: "تم إنشاء مستند التسليم؛ تم إنشاء OTR/DTR تلقائياً في TM.",
      },
      {
        id: "tm-group-3",
        stepNumber: 3,
        titleEN: "OTR / DTR Created Automatically in TM",
        titleAR: "إنشاء OTR / DTR تلقائياً في TM",
        tCode: "Automatically Created",
        role: "Transportation Planner",
        whatToDoEN:
          "No manual action required. SAP TM automatically creates the Order Transportation Request (OTR) or Delivery Transportation Request (DTR) from the ERP delivery document. Review the created request to confirm details.",
        whatToDoAR:
          "لا يلزم أي إجراء يدوي. يُنشئ SAP TM تلقائياً طلب نقل الأمر (OTR) أو طلب نقل التسليم (DTR) من مستند تسليم ERP. راجع الطلب المُنشأ للتأكد من التفاصيل.",
        whatSAPDoesEN:
          "Replicates the ERP delivery document into TM as an OTR or DTR (document type DTR1). This is the foundation for freight unit creation.",
        whatSAPDoesAR:
          "ينسخ مستند تسليم ERP إلى TM كـ OTR أو DTR (نوع المستند DTR1). هذا هو الأساس لإنشاء وحدات الشحن.",
        expectedOutputEN: "OTR or DTR visible in TM and ready for freight unit creation.",
        expectedOutputAR: "OTR أو DTR ظاهر في TM وجاهز لإنشاء وحدات الشحن.",
      },
      {
        id: "tm-group-4",
        stepNumber: 4,
        titleEN: "Freight Units Created Automatically",
        titleAR: "إنشاء وحدات الشحن تلقائياً",
        tCode: "Freight Units – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "No manual action required. SAP TM auto-generates freight units (FUs) from the OTR/DTR quantities. Review them in the Freight Units Worklist.",
        whatToDoAR:
          "لا يلزم أي إجراء يدوي. يُنشئ SAP TM وحدات الشحن (FU) تلقائياً من كميات OTR/DTR. راجعها في قائمة عمل وحدات الشحن.",
        whatSAPDoesEN:
          "Creates freight units (type ZAFU) from the OTR/DTR. Each FU is a transportable unit that can be assigned to a freight order.",
        whatSAPDoesAR:
          "ينشئ وحدات الشحن (النوع ZAFU) من OTR/DTR. كل وحدة شحن وحدة قابلة للنقل يمكن تعيينها لأمر شحن.",
        expectedOutputEN: "Freight units created and available for planning.",
        expectedOutputAR: "وحدات الشحن منشأة ومتاحة للتخطيط.",
      },
      {
        id: "tm-group-5",
        stepNumber: 5,
        titleEN: "Create Freight Order",
        titleAR: "إنشاء أمر الشحن",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "Use the Transportation Cockpit to assign freight units to a freight order (type ZAFO), or manually create and assign. Set the route and any special requirements (e.g., refrigerated truck for poultry products).",
        whatToDoAR:
          "استخدم قمرة قيادة النقل لتعيين وحدات الشحن لأمر شحن (النوع ZAFO)، أو أنشئ وعيّن يدوياً. حدد المسار وأي متطلبات خاصة (مثلاً شاحنة مبردة لمنتجات الدواجن).",
        whatSAPDoesEN:
          "Creates the freight order and links it to the OTR/DTR and the freight units. Applies the internal agreement rates for charge calculation.",
        whatSAPDoesAR:
          "ينشئ أمر الشحن ويربطه بـ OTR/DTR ووحدات الشحن. يطبّق أسعار الاتفاقية الداخلية لحساب الرسوم.",
        expectedOutputEN: "Freight order created with freight units and route assigned.",
        expectedOutputAR: "تم إنشاء أمر الشحن مع وحدات الشحن والمسار.",
      },
      {
        id: "tm-group-6",
        stepNumber: 6,
        titleEN: "Assign Driver and Vehicle Number",
        titleAR: "تعيين السائق ورقم المركبة",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "In the freight order, select and assign the driver and vehicle (truck/trailer/combination). The driver's mobile number is used to send an SMS via the Camion integration when the freight order is executed.",
        whatToDoAR:
          "في أمر الشحن، اختر وعيّن السائق والمركبة (شاحنة / مقطورة / تركيبة). يُستخدَم رقم هاتف السائق المحمول لإرسال رسالة SMS عبر تكامل Camion عند تنفيذ أمر الشحن.",
        whatSAPDoesEN:
          "Links driver and vehicle resources to the freight order. Sends an SMS to the driver via the Camion TMS integration to start the trip.",
        whatSAPDoesAR:
          "يربط موارد السائق والمركبة بأمر الشحن. يرسل رسالة SMS للسائق عبر تكامل Camion TMS لبدء الرحلة.",
        expectedOutputEN: "Driver and vehicle assigned; SMS sent to driver.",
        expectedOutputAR: "تم تعيين السائق والمركبة؛ تم إرسال رسالة SMS للسائق.",
      },
      {
        id: "tm-group-7",
        stepNumber: 7,
        titleEN: "Print Freight Order",
        titleAR: "طباعة أمر الشحن",
        tCode: "Freight Orders – Worklist",
        role: "Transportation Planner",
        whatToDoEN:
          "Print the freight order form (waybill) for the driver. The waybill includes all trip details and has space to record actual fuel collected from the petrol station.",
        whatToDoAR:
          "اطبع نموذج أمر الشحن (بوليصة الشحن) للسائق. تتضمن بوليصة الشحن جميع تفاصيل الرحلة ولديها مساحة لتسجيل الوقود الفعلي المجمَّع من محطة الوقود.",
        whatSAPDoesEN:
          "Generates the freight order waybill using the custom form. The waybill is the driver's trip document.",
        whatSAPDoesAR:
          "يُنشئ بوليصة شحن أمر الشحن باستخدام النموذج المخصص. بوليصة الشحن هي وثيقة رحلة السائق.",
        expectedOutputEN: "Freight order (waybill) printed and given to driver before departure.",
        expectedOutputAR: "تمت طباعة أمر الشحن (بوليصة الشحن) وتسليمه للسائق قبل المغادرة.",
      },
      {
        id: "tm-group-8",
        stepNumber: 8,
        titleEN: "Calculate Internal Transportation Fees",
        titleAR: "حساب رسوم النقل الداخلية",
        tCode: "Freight Orders – Worklist",
        role: "Billing Clerk",
        whatToDoEN:
          "After trip completion, calculate the internal transportation fees on the freight order. Fees are based on the internal calculation sheet (Z00001) covering transport price, loading/unloading wait time, route change fees, and applicable discounts.",
        whatToDoAR:
          "بعد اكتمال الرحلة، احسب رسوم النقل الداخلية على أمر الشحن. تستند الرسوم إلى ورقة الحساب الداخلية (Z00001) التي تشمل سعر النقل ووقت انتظار التحميل/التفريغ ورسوم تغيير المسار والخصومات المطبّقة.",
        whatSAPDoesEN:
          "Applies the internal rate calculation sheet to compute freight charges. Monthly costs (driver salary, fuel, maintenance) can be distributed by trip, driver, vehicle, and department (Enhancement 003).",
        whatSAPDoesAR:
          "يطبّق ورقة حساب السعر الداخلي لحساب رسوم الشحن. يمكن توزيع التكاليف الشهرية (راتب السائق، الوقود، الصيانة) حسب الرحلة والسائق والمركبة والقسم (التحسين 003).",
        expectedOutputEN: "Internal transportation fees calculated on the freight order.",
        expectedOutputAR: "تم حساب رسوم النقل الداخلية على أمر الشحن.",
      },
      {
        id: "tm-group-9",
        stepNumber: 9,
        titleEN: "Create Internal Settlement Document",
        titleAR: "إنشاء مستند التسوية الداخلية",
        tCode: "Forwarding Settlements – Worklist",
        role: "Billing Clerk",
        whatToDoEN:
          "Create the internal settlement document (type ZFIS) with reference to the OTR/DTR. This document records the inter-company transportation charges between Al-Watania Transportation and Al-Watania Poultry.",
        whatToDoAR:
          "أنشئ مستند التسوية الداخلية (النوع ZFIS) بالرجوع إلى OTR/DTR. يسجّل هذا المستند رسوم النقل بين الشركات بين الوطنية للنقل والوطنية للدواجن.",
        whatSAPDoesEN:
          "Creates the internal settlement document and triggers the automatic creation of the billing document in ERP.",
        whatSAPDoesAR:
          "ينشئ مستند التسوية الداخلية ويُطلِق الإنشاء التلقائي لمستند الفوترة في ERP.",
        expectedOutputEN: "Internal settlement document created; billing triggered in ERP.",
        expectedOutputAR: "تم إنشاء مستند التسوية الداخلية؛ تم تشغيل الفوترة في ERP.",
      },
      {
        id: "tm-group-10",
        stepNumber: 10,
        titleEN: "Billing Document Created Automatically in ERP",
        titleAR: "إنشاء مستند الفوترة تلقائياً في ERP",
        tCode: "Forwarding Settlements – Worklist",
        role: "Billing Clerk",
        whatToDoEN:
          "No manual action required. SAP automatically creates the billing document (type YATM) in the ERP system. Review to confirm the amounts are correct and accounting entries are posted.",
        whatToDoAR:
          "لا يلزم أي إجراء يدوي. يُنشئ SAP تلقائياً مستند الفوترة (النوع YATM) في نظام ERP. راجع للتأكد من صحة المبالغ وترحيل قيود المحاسبة.",
        whatSAPDoesEN:
          "SD/TM/FI integration creates the billing document in ERP. Accounting entries are posted to FICO for inter-company cost allocation.",
        whatSAPDoesAR:
          "يُنشئ تكامل SD/TM/FI مستند الفوترة في ERP. يتم ترحيل قيود المحاسبة إلى FICO لتخصيص التكاليف بين الشركات.",
        expectedOutputEN: "Internal billing document posted; inter-company accounts updated.",
        expectedOutputAR: "تم ترحيل مستند الفوترة الداخلية؛ تم تحديث حسابات ما بين الشركات.",
      },
      {
        id: "tm-group-11",
        stepNumber: 11,
        titleEN: "Print Billing Document",
        titleAR: "طباعة مستند الفوترة",
        tCode: "Create Billing Document",
        role: "Billing Clerk",
        whatToDoEN:
          "Print the billing document for the internal customer record using the custom billing document form (Enhancement 002).",
        whatToDoAR:
          "اطبع مستند الفوترة لسجل العميل الداخلي باستخدام نموذج مستند الفوترة المخصص (التحسين 002).",
        whatSAPDoesEN:
          "Generates the billing document printout using the custom form.",
        whatSAPDoesAR:
          "يُنشئ مطبوعة مستند الفوترة باستخدام النموذج المخصص.",
        expectedOutputEN: "Billing document printed for internal records.",
        expectedOutputAR: "تمت طباعة مستند الفوترة للسجلات الداخلية.",
      },
    ],
  },

  // ─── TM: Service and Rental Process ─────────────────────────────────────────
  {
    id: "tm-service",
    module: "TM",
    icon: "🔧",
    duration: "< 1 day",
    titleEN: "Service and Rental Process",
    titleAR: "عملية الخدمة والإيجار",
    descriptionEN:
      "Bill customers (internal or external) for transportation-related services: vehicle washing, daily/weekly/monthly/per-trip vehicle rental. A simple two-step process — create a service order, then generate the billing document.",
    descriptionAR:
      "فوترة العملاء (الداخليين أو الخارجيين) مقابل الخدمات المرتبطة بالنقل: غسيل المركبات، تأجير السيارات (يومي / أسبوعي / شهري / لكل رحلة). عملية بسيطة من خطوتين — إنشاء أمر خدمة، ثم إنشاء مستند الفوترة.",
    roles: ["Sales Representative", "Billing Clerk"],
    steps: [
      {
        id: "tm-svc-1",
        stepNumber: 1,
        titleEN: "Create Service Order",
        titleAR: "إنشاء أمر الخدمة",
        tCode: "Create Sales Order",
        role: "Sales Representative",
        whatToDoEN:
          "Create a sales order (type ZSRV) for the requested service: vehicle washing for Al-Watania Poultry, or vehicle rental (daily, weekly, monthly, or per trip) for internal or external customers. Enter the customer, service type, quantities/duration, and applicable rates.",
        whatToDoAR:
          "أنشئ أمر مبيعات (النوع ZSRV) للخدمة المطلوبة: غسيل مركبات للوطنية للدواجن، أو تأجير مركبات (يومي أو أسبوعي أو شهري أو لكل رحلة) للعملاء الداخليين أو الخارجيين. أدخل العميل ونوع الخدمة والكميات/المدة والأسعار المطبّقة.",
        whatSAPDoesEN:
          "Creates the service order document (type ZSRV). Calculates the service charges based on the applicable rate table.",
        whatSAPDoesAR:
          "ينشئ مستند أمر الخدمة (النوع ZSRV). يحسب رسوم الخدمة بناءً على جدول الأسعار المطبّق.",
        expectedOutputEN: "Service order created with charges calculated.",
        expectedOutputAR: "تم إنشاء أمر الخدمة مع احتساب الرسوم.",
      },
      {
        id: "tm-svc-2",
        stepNumber: 2,
        titleEN: "Create Billing Document",
        titleAR: "إنشاء مستند الفوترة",
        tCode: "Create Billing Document App",
        role: "Billing Clerk",
        whatToDoEN:
          "Create the billing document with reference to the service order. Print it using the custom billing form (Enhancement 002) and send it to the customer.",
        whatToDoAR:
          "أنشئ مستند الفوترة بالرجوع إلى أمر الخدمة. اطبعه باستخدام نموذج الفوترة المخصص (التحسين 002) وأرسله إلى العميل.",
        whatSAPDoesEN:
          "SD/FI integration creates and posts the billing document. Accounting entries are created in FI for revenue recognition.",
        whatSAPDoesAR:
          "يُنشئ تكامل SD/FI مستند الفوترة ويرحّله. يتم إنشاء قيود المحاسبة في FI للاعتراف بالإيراد.",
        expectedOutputEN: "Billing document created, printed, and sent to the customer.",
        expectedOutputAR: "تم إنشاء مستند الفوترة وطباعته وإرساله إلى العميل.",
      },
    ],
  },

  // ── SAP TM — End-to-End Transportation Management ────────────────────────
  {
    id: "tm-end-to-end",
    icon: "🚛",
    duration: "2–4 hours",
    titleEN: "End-to-End Transportation Management",
    titleAR: "عملية النقل الشاملة من البداية إلى النهاية",
    descriptionEN:
      "The complete SAP TM flow: create a sales order, generate a delivery, trigger freight unit planning, build and execute a freight order, calculate charges, and settle with the carrier.",
    descriptionAR:
      "دورة SAP TM الكاملة: إنشاء أمر مبيعات، توليد التسليم، تخطيط وحدة الشحن، بناء أمر الشحن وتنفيذه، احتساب الرسوم، والتسوية مع الناقل.",
    module: "TM",
    roles: ["TM Planner", "Sales Representative", "Accounts Payable"],
    steps: [
      {
        id: "tm-e2e-01",
        stepNumber: 1,
        titleEN: "Create Sales Order (VA01)",
        titleAR: "إنشاء أمر مبيعات (VA01)",
        tCode: "VA01",
        role: "Sales Representative",
        whatToDoEN: "Use VA01 to create a sales order with the correct order type, sold-to party, ship-to party, requested delivery date, material, and quantity. Save the order.",
        whatToDoAR: "استخدم VA01 لإنشاء أمر مبيعات بنوع الأمر الصحيح، الطرف البائع والمستلم، تاريخ التسليم المطلوب، المادة والكمية. احفظ الأمر.",
        whatSAPDoesEN: "SAP creates the sales order and evaluates transportation relevance. If relevant, a TM object will be created automatically upon delivery.",
        whatSAPDoesAR: "يُنشئ SAP أمر المبيعات ويقيّم صلته بالنقل. إذا كانت ذات صلة، سيُنشأ كائن TM تلقائياً عند إنشاء التسليم.",
        expectedOutputEN: "Sales order created and saved with a system-generated document number.",
        expectedOutputAR: "تم إنشاء أمر المبيعات وحفظه برقم مستند يولّده النظام.",
        screenshotUrl: "/process-charts/tm-e2e-p01.png",
      },
      {
        id: "tm-e2e-02",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery",
        titleAR: "إنشاء تسليم صادر",
        role: "TM Planner",
        whatToDoEN: "Navigate to 'Create Outbound Deliveries – From Sales Orders'. Filter by ship-to party, choose Go, then Create Deliveries.",
        whatToDoAR: "انتقل إلى 'إنشاء تسليمات صادرة – من أوامر المبيعات'. صفِّ حسب الطرف المستلم واختر Go ثم إنشاء تسليمات.",
        whatSAPDoesEN: "SAP creates the outbound delivery and automatically triggers freight unit creation in TM based on transportation relevance rules.",
        whatSAPDoesAR: "يُنشئ SAP التسليم الصادر ويُشغِّل تلقائياً إنشاء وحدة الشحن في TM بناءً على قواعد الصلة بالنقل.",
        expectedOutputEN: "Outbound delivery created and linked to the TM freight unit.",
        expectedOutputAR: "تم إنشاء التسليم الصادر وربطه بوحدة الشحن في TM.",
        screenshotUrl: "/process-charts/tm-e2e-p03.png",
      },
      {
        id: "tm-e2e-03",
        stepNumber: 3,
        titleEN: "Monitor TM Status & Freight Units",
        titleAR: "مراقبة حالة TM ووحدات الشحن",
        role: "TM Planner",
        whatToDoEN: "Display the delivery and verify the TM Status tab. Review the automatically created freight units and check their planning status.",
        whatToDoAR: "اعرض التسليم وتحقق من تبويب حالة TM. راجع وحدات الشحن المُنشأة تلقائياً وتحقق من حالة تخطيطها.",
        whatSAPDoesEN: "The system shows TM status information on the delivery and lists the freight units awaiting planning.",
        whatSAPDoesAR: "يعرض النظام معلومات حالة TM على التسليم ويُدرج وحدات الشحن التي تنتظر التخطيط.",
        expectedOutputEN: "Freight units visible in TM with status 'Not Started'.",
        expectedOutputAR: "وحدات الشحن مرئية في TM بالحالة 'لم تبدأ'.",
        screenshotUrl: "/process-charts/tm-e2e-p04.png",
      },
      {
        id: "tm-e2e-04",
        stepNumber: 4,
        titleEN: "Create & Plan Freight Order",
        titleAR: "إنشاء أمر الشحن وتخطيطه",
        role: "TM Planner",
        whatToDoEN: "Run planning to create a Freight Order (FO). Select the freight unit and assign it to the FO. Confirm vehicle, driver, and route information in the freight order header.",
        whatToDoAR: "نفِّذ التخطيط لإنشاء أمر شحن. حدد وحدة الشحن وعيِّنها للـ FO. أكِّد معلومات المركبة والسائق والمسار في رأس أمر الشحن.",
        whatSAPDoesEN: "SAP creates the freight order, assigns the freight unit, and calculates the estimated route and capacity utilisation.",
        whatSAPDoesAR: "يُنشئ SAP أمر الشحن ويُعيِّن وحدة الشحن ويحسب المسار المقدَّر ومعدل استخدام الطاقة الاستيعابية.",
        expectedOutputEN: "Freight order created and confirmed with vehicle/driver assigned.",
        expectedOutputAR: "تم إنشاء أمر الشحن وتأكيده مع تعيين المركبة/السائق.",
        screenshotUrl: "/process-charts/tm-e2e-p05.png",
      },
      {
        id: "tm-e2e-05",
        stepNumber: 5,
        titleEN: "Execute Transport (En Route)",
        titleAR: "تنفيذ النقل (أثناء الطريق)",
        role: "TM Planner",
        whatToDoEN: "Set the freight order status to 'In Execution'. Update actual pickup and delivery timestamps as the shipment progresses.",
        whatToDoAR: "اضبط حالة أمر الشحن على 'قيد التنفيذ'. حدِّث تواريخ وأوقات الاستلام والتسليم الفعلية مع تقدم الشحنة.",
        whatSAPDoesEN: "The system tracks freight unit status through each transportation stage and updates visibility for all stakeholders.",
        whatSAPDoesAR: "يتتبع النظام حالة وحدة الشحن في كل مرحلة من مراحل النقل ويحدِّث الرؤية لجميع أصحاب المصلحة.",
        expectedOutputEN: "Freight order status updated to 'In Execution'; actual event timestamps recorded.",
        expectedOutputAR: "تم تحديث حالة أمر الشحن إلى 'قيد التنفيذ'؛ تم تسجيل أوقات الأحداث الفعلية.",
        screenshotUrl: "/process-charts/tm-e2e-p08.png",
      },
      {
        id: "tm-e2e-06",
        stepNumber: 6,
        titleEN: "Calculate Charges & Settlement",
        titleAR: "احتساب الرسوم والتسوية",
        role: "Accounts Payable",
        whatToDoEN: "From the freight order, choose 'Calculate Charges'. Review the charge items, then choose 'Create Settlement Document' to initiate carrier billing.",
        whatToDoAR: "من أمر الشحن، اختر 'احتساب الرسوم'. راجع بنود الرسوم ثم اختر 'إنشاء مستند التسوية' لبدء فوترة الناقل.",
        whatSAPDoesEN: "SAP applies tariff tables and rate conditions to calculate carrier charges and prepares the settlement document.",
        whatSAPDoesAR: "يطبِّق SAP جداول التعريفة وشروط الأسعار لاحتساب رسوم الناقل ويُعِدّ مستند التسوية.",
        expectedOutputEN: "Charge items calculated and settlement document initiated.",
        expectedOutputAR: "تم احتساب بنود الرسوم وبدء مستند التسوية.",
        screenshotUrl: "/process-charts/tm-e2e-p10.png",
      },
      {
        id: "tm-e2e-07",
        stepNumber: 7,
        titleEN: "Post Freight Settlement Document",
        titleAR: "ترحيل مستند تسوية الشحن",
        role: "Accounts Payable",
        whatToDoEN: "Review and post the freight settlement document. The carrier invoice is matched against the settlement and accounting entries are created in FI.",
        whatToDoAR: "راجع مستند تسوية الشحن وارحِّله. تُطابَق فاتورة الناقل مع التسوية وتُنشأ قيود المحاسبة في FI.",
        whatSAPDoesEN: "SAP/FI posts the freight settlement document, creates accounting entries for the liability, and updates the freight order status to 'Settled'.",
        whatSAPDoesAR: "يرحِّل SAP/FI مستند تسوية الشحن ويُنشئ قيود محاسبية للالتزام ويحدِّث حالة أمر الشحن إلى 'تمت التسوية'.",
        expectedOutputEN: "Freight settlement posted; FI accounting entry created; freight order status = Settled.",
        expectedOutputAR: "تم ترحيل تسوية الشحن؛ تم إنشاء قيد FI المحاسبي؛ حالة أمر الشحن = تمت التسوية.",
        screenshotUrl: "/process-charts/tm-e2e-p12.png",
      },
      {
        id: "tm-e2e-08",
        stepNumber: 8,
        titleEN: "Review Document Flow",
        titleAR: "مراجعة تدفق المستندات",
        role: "TM Planner",
        whatToDoEN: "Open the Document Flow from the sales order or freight order to verify the complete chain: Sales Order → Delivery → Freight Unit → Freight Order → Settlement Document.",
        whatToDoAR: "افتح تدفق المستندات من أمر المبيعات أو أمر الشحن للتحقق من السلسلة الكاملة: أمر المبيعات ← التسليم ← وحدة الشحن ← أمر الشحن ← مستند التسوية.",
        whatSAPDoesEN: "The document flow displays all linked documents across SD and TM, confirming the end-to-end process is complete.",
        whatSAPDoesAR: "يعرض تدفق المستندات جميع المستندات المرتبطة عبر SD وTM، مما يؤكد اكتمال العملية الشاملة.",
        expectedOutputEN: "Complete document chain visible with all statuses green.",
        expectedOutputAR: "سلسلة المستندات الكاملة مرئية مع جميع الحالات باللون الأخضر.",
        screenshotUrl: "/process-charts/tm-e2e-p13.png",
      },
    ],
  },
  // ── TM: Create Freight Order ─────────────────────────────────────────────
  {
    id: "tm-create-fo",
    icon: "🚛",
    duration: "15–30 minutes",
    titleEN: "Create & Execute Freight Order",
    titleAR: "إنشاء أمر الشحن وتنفيذه",
    module: "TM",
    roles: ["TM Planner"],
    steps: [
      {
        id: "tm-create-fo-01",
        stepNumber: 1,
        titleEN: "Retrieve Freight Order",
        titleAR: "استرجاع أمر الشحن",
        role: "TM Planner",
        whatToDoEN: "Open the Freight Order (FO) using the FO number from the Transportation Cockpit or search.",
        whatToDoAR: "افتح أمر الشحن (FO) باستخدام رقم FO من لوحة تحكم النقل أو من خلال البحث.",
        whatSAPDoesEN: "SAP retrieves the freight order with all assigned freight units, carrier, and route details.",
        whatSAPDoesAR: "يسترجع SAP أمر الشحن مع جميع وحدات الشحن المعينة وتفاصيل الناقل والمسار.",
        expectedOutputEN: "Freight order opened and ready for review.",
        expectedOutputAR: "تم فتح أمر الشحن وهو جاهز للمراجعة.",        screenshotUrl: "/process-charts/tm-create-fo-p01.png",

      },
      {
        id: "tm-create-fo-02",
        stepNumber: 2,
        titleEN: "Check Header, Trailer & Driver",
        titleAR: "التحقق من الرأس والمقطورة والسائق",
        role: "TM Planner",
        whatToDoEN: "Verify the freight order header data, trailer assignment, and driver assignment are correct before execution.",
        whatToDoAR: "تحقق من صحة بيانات رأس أمر الشحن وتعيين المقطورة والسائق قبل التنفيذ.",
        whatSAPDoesEN: "SAP displays the header, resources (truck/trailer), and driver assigned to the freight order.",
        whatSAPDoesAR: "يعرض SAP الرأس والموارد (شاحنة/مقطورة) والسائق المعين لأمر الشحن.",
        expectedOutputEN: "Header, trailer, and driver verified and correct.",
        expectedOutputAR: "تم التحقق من الرأس والمقطورة والسائق وهي صحيحة.",        screenshotUrl: "/process-charts/tm-create-fo-p02.png",

      },
      {
        id: "tm-create-fo-03",
        stepNumber: 3,
        titleEN: "Set Freight Order to In Execution",
        titleAR: "تعيين أمر الشحن إلى 'قيد التنفيذ'",
        role: "TM Planner",
        whatToDoEN: "Click the 'Set In Execution' button to start the transport execution. This updates the FO status and locks the assignment.",
        whatToDoAR: "انقر على زر 'تعيين قيد التنفيذ' لبدء تنفيذ النقل. يؤدي ذلك إلى تحديث حالة FO وتأمين التعيين.",
        whatSAPDoesEN: "SAP transitions the freight order status to 'In Execution', triggering event management and notifications.",
        whatSAPDoesAR: "ينقل SAP حالة أمر الشحن إلى 'قيد التنفيذ'، مما يؤدي إلى تشغيل إدارة الأحداث والإشعارات.",
        expectedOutputEN: "Freight order status = In Execution.",
        expectedOutputAR: "حالة أمر الشحن = قيد التنفيذ.",        screenshotUrl: "/process-charts/tm-create-fo-p03.png",

      },
      {
        id: "tm-create-fo-04",
        stepNumber: 4,
        titleEN: "Print Output (Waybill/Documents)",
        titleAR: "طباعة المخرجات (بوليصة/المستندات)",
        role: "TM Planner",
        whatToDoEN: "Navigate to Output Management within the freight order to print the waybill or required shipping documents.",
        whatToDoAR: "انتقل إلى إدارة المخرجات داخل أمر الشحن لطباعة بوليصة الشحن أو مستندات الشحن المطلوبة.",
        whatSAPDoesEN: "SAP generates and queues the output documents for printing via Output Management.",
        whatSAPDoesAR: "يُنشئ SAP مستندات المخرجات ويضعها في قائمة الانتظار للطباعة عبر إدارة المخرجات.",
        expectedOutputEN: "Shipping documents/waybill printed.",
        expectedOutputAR: "تمت طباعة مستندات الشحن/البوليصة.",        screenshotUrl: "/process-charts/tm-create-fo-p04.png",

      },
      {
        id: "tm-create-fo-05",
        stepNumber: 5,
        titleEN: "Set Freight Order to Completed",
        titleAR: "تعيين أمر الشحن إلى 'مكتمل'",
        role: "TM Planner",
        whatToDoEN: "After delivery, click 'Set to Completed' to close the freight order and trigger the settlement process.",
        whatToDoAR: "بعد التسليم، انقر على 'تعيين إلى مكتمل' لإغلاق أمر الشحن وتشغيل عملية التسوية.",
        whatSAPDoesEN: "SAP sets the freight order to Completed status, enabling charge calculation and carrier settlement.",
        whatSAPDoesAR: "يعيِّن SAP حالة أمر الشحن إلى مكتمل، مما يتيح احتساب الرسوم وتسوية الناقل.",
        expectedOutputEN: "Freight order completed and ready for settlement.",
        expectedOutputAR: "تم اكتمال أمر الشحن وهو جاهز للتسوية.",        screenshotUrl: "/process-charts/tm-create-fo-p05.png",

      },
    ],
  },

  // ── TM: Create Sales Order ────────────────────────────────────────────────
  {
    id: "tm-create-so",
    icon: "🛒",
    duration: "10–20 minutes",
    titleEN: "Create Sales Order (Distributor)",
    titleAR: "إنشاء أمر مبيعات (موزع)",
    module: "TM",
    roles: ["Sales Representative"],
    steps: [
      {
        id: "tm-create-so-01",
        stepNumber: 1,
        titleEN: "Open VA01 – Create Sales Order",
        titleAR: "فتح VA01 – إنشاء أمر مبيعات",
        role: "Sales Representative",
        whatToDoEN: "Run transaction VA01 and select the order type 'Distributer Order'. Enter the required initial data on the overview screen.",
        whatToDoAR: "شغِّل معاملة VA01 واختر نوع الأمر 'أمر الموزع'. أدخل البيانات الأولية المطلوبة على شاشة النظرة العامة.",
        whatSAPDoesEN: "SAP opens the Create Sales Document screen for the selected order type.",
        whatSAPDoesAR: "يفتح SAP شاشة إنشاء مستند المبيعات لنوع الأمر المحدد.",
        expectedOutputEN: "Sales document creation screen opened.",
        expectedOutputAR: "تم فتح شاشة إنشاء مستند المبيعات.",        screenshotUrl: "/process-charts/tm-create-so-p01.png",

      },
      {
        id: "tm-create-so-02",
        stepNumber: 2,
        titleEN: "Enter Sold-To Party & Materials",
        titleAR: "إدخال الطرف المُباع إليه والمواد",
        role: "Sales Representative",
        whatToDoEN: "Enter the Sold-To party (customer), add the required materials (items) with quantities and the route.",
        whatToDoAR: "أدخل الطرف المُباع إليه (العميل)، وأضف المواد المطلوبة (البنود) مع الكميات والمسار.",
        whatSAPDoesEN: "SAP populates pricing, shipping, and delivery data from customer and material master records.",
        whatSAPDoesAR: "يملأ SAP بيانات التسعير والشحن والتسليم من سجلات العميل والمادة الرئيسية.",
        expectedOutputEN: "Items and customer data entered on the order.",
        expectedOutputAR: "تم إدخال البنود وبيانات العميل في الأمر.",        screenshotUrl: "/process-charts/tm-create-so-p02.png",

      },
      {
        id: "tm-create-so-03",
        stepNumber: 3,
        titleEN: "Review Header Data & Credit Check",
        titleAR: "مراجعة بيانات الرأس وفحص الائتمان",
        role: "Sales Representative",
        whatToDoEN: "Navigate to the Header Data tab to review shipping and billing details. The system performs a credit check automatically.",
        whatToDoAR: "انتقل إلى علامة تبويب بيانات الرأس لمراجعة تفاصيل الشحن والفوترة. يُجري النظام فحص الائتمان تلقائيًا.",
        whatSAPDoesEN: "SAP runs an automatic credit check against the customer's credit limit and flags any blocks.",
        whatSAPDoesAR: "يُجري SAP فحصًا تلقائيًا للائتمان مقابل الحد الائتماني للعميل ويُعلِّم أي حجب.",
        expectedOutputEN: "Header data reviewed; credit check passed.",
        expectedOutputAR: "تمت مراجعة بيانات الرأس؛ اجتاز فحص الائتمان.",        screenshotUrl: "/process-charts/tm-create-so-p05.png",

      },
      {
        id: "tm-create-so-04",
        stepNumber: 4,
        titleEN: "Save the Sales Order",
        titleAR: "حفظ أمر المبيعات",
        role: "Sales Representative",
        whatToDoEN: "Click Save to create the sales order. The system assigns a sales order number.",
        whatToDoAR: "انقر على حفظ لإنشاء أمر المبيعات. يقوم النظام بتعيين رقم أمر مبيعات.",
        whatSAPDoesEN: "SAP saves the sales order, assigns a document number, and generates freight units in TM.",
        whatSAPDoesAR: "يحفظ SAP أمر المبيعات ويعيِّن رقم المستند ويُنشئ وحدات شحن في TM.",
        expectedOutputEN: "Sales order saved with document number; freight units created in TM.",
        expectedOutputAR: "تم حفظ أمر المبيعات برقم المستند؛ تم إنشاء وحدات الشحن في TM.",        screenshotUrl: "/process-charts/tm-create-so-p09.png",

      },
    ],
  },

  // ── TM: Create Outbound Delivery ─────────────────────────────────────────
  {
    id: "tm-create-delivery",
    icon: "📦",
    duration: "10–20 minutes",
    titleEN: "Create Outbound Delivery",
    titleAR: "إنشاء أمر التسليم الصادر",
    module: "TM",
    roles: ["TM Planner", "Warehouse Staff"],
    steps: [
      {
        id: "tm-create-dlv-01",
        stepNumber: 1,
        titleEN: "Open VL10C – Create Outbound Delivery with Order Reference",
        titleAR: "فتح VL10C – إنشاء التسليم الصادر بمرجع الأمر",
        role: "TM Planner",
        whatToDoEN: "Run transaction VL10C. Enter the sales order reference and the delivery date to select relevant order lines.",
        whatToDoAR: "شغِّل معاملة VL10C. أدخل مرجع أمر المبيعات وتاريخ التسليم لاختيار بنود الأمر ذات الصلة.",
        whatSAPDoesEN: "SAP lists open sales order lines eligible for delivery creation.",
        whatSAPDoesAR: "يسرد SAP بنود أوامر المبيعات المفتوحة المؤهلة لإنشاء التسليم.",
        expectedOutputEN: "Delivery-eligible lines displayed.",
        expectedOutputAR: "تم عرض البنود المؤهلة للتسليم.",        screenshotUrl: "/process-charts/tm-create-delivery-p01.png",

      },
      {
        id: "tm-create-dlv-02",
        stepNumber: 2,
        titleEN: "Fill Delivery Data & Create",
        titleAR: "تعبئة بيانات التسليم والإنشاء",
        role: "TM Planner",
        whatToDoEN: "Select the relevant lines, enter shipping point and delivery date, then click Create to generate the outbound delivery.",
        whatToDoAR: "حدِّد البنود ذات الصلة وأدخل نقطة الشحن وتاريخ التسليم ثم انقر على إنشاء لتوليد التسليم الصادر.",
        whatSAPDoesEN: "SAP creates the outbound delivery document and links it to the sales order.",
        whatSAPDoesAR: "يُنشئ SAP مستند التسليم الصادر ويربطه بأمر المبيعات.",
        expectedOutputEN: "Outbound delivery document created.",
        expectedOutputAR: "تم إنشاء مستند التسليم الصادر.",        screenshotUrl: "/process-charts/tm-create-delivery-p03.png",

      },
      {
        id: "tm-create-dlv-03",
        stepNumber: 3,
        titleEN: "Review Outbound Delivery & TM Document Flow",
        titleAR: "مراجعة التسليم الصادر وتدفق مستندات TM",
        role: "TM Planner",
        whatToDoEN: "Open the outbound delivery overview to verify quantities and shipping data. Navigate to Document Flow to confirm the TM freight unit was created.",
        whatToDoAR: "افتح نظرة عامة على التسليم الصادر للتحقق من الكميات وبيانات الشحن. انتقل إلى تدفق المستندات للتأكد من إنشاء وحدة شحن TM.",
        whatSAPDoesEN: "SAP displays the delivery and the linked TM document flow showing the freight unit.",
        whatSAPDoesAR: "يعرض SAP التسليم وتدفق مستند TM المرتبط الذي يُظهر وحدة الشحن.",
        expectedOutputEN: "Delivery confirmed; TM freight unit visible in document flow.",
        expectedOutputAR: "تم تأكيد التسليم؛ وحدة شحن TM مرئية في تدفق المستندات.",        screenshotUrl: "/process-charts/tm-create-delivery-p07.png",

      },
    ],
  },

  // ── TM: Customer Pickup Freight Order ────────────────────────────────────
  {
    id: "tm-customer-pickup",
    icon: "🏪",
    duration: "15–25 minutes",
    titleEN: "Customer Pickup Freight Order",
    titleAR: "أمر شحن الاستلام بواسطة العميل",
    module: "TM",
    roles: ["TM Planner"],
    steps: [
      {
        id: "tm-pickup-01",
        stepNumber: 1,
        titleEN: "Open Transportation Cockpit",
        titleAR: "فتح لوحة تحكم النقل",
        role: "TM Planner",
        whatToDoEN: "Navigate to the Transportation Cockpit using the ZAWP_LAYOUT layout to view available freight units pending assignment.",
        whatToDoAR: "انتقل إلى لوحة تحكم النقل باستخدام تخطيط ZAWP_LAYOUT لعرض وحدات الشحن المتاحة في انتظار التعيين.",
        whatSAPDoesEN: "SAP opens the Transportation Cockpit with freight units and resources visible.",
        whatSAPDoesAR: "يفتح SAP لوحة تحكم النقل مع ظهور وحدات الشحن والموارد.",
        expectedOutputEN: "Transportation Cockpit opened with pending freight units.",
        expectedOutputAR: "تم فتح لوحة تحكم النقل مع وحدات الشحن المعلقة.",        screenshotUrl: "/process-charts/tm-customer-pickup-p01.png",

      },
      {
        id: "tm-pickup-02",
        stepNumber: 2,
        titleEN: "Select Freight Units & Create Customer Pick-Up FO",
        titleAR: "تحديد وحدات الشحن وإنشاء FO استلام العميل",
        role: "TM Planner",
        whatToDoEN: "Select the relevant freight units and use drag-and-drop to assign them to a Customer Pick-Up Freight Order. Alternatively, right-click to create a Customer Pick-Up FO.",
        whatToDoAR: "حدِّد وحدات الشحن ذات الصلة واستخدم السحب والإفلات لتعيينها إلى أمر شحن استلام العميل. بدلاً من ذلك، انقر بزر الماوس الأيمن لإنشاء FO استلام العميل.",
        whatSAPDoesEN: "SAP creates a Customer Pick-Up Freight Order and assigns the selected freight units to it.",
        whatSAPDoesAR: "يُنشئ SAP أمر شحن استلام العميل ويعيِّن وحدات الشحن المحددة إليه.",
        expectedOutputEN: "Customer Pick-Up Freight Order created.",
        expectedOutputAR: "تم إنشاء أمر شحن استلام العميل.",        screenshotUrl: "/process-charts/tm-customer-pickup-p05.png",

      },
      {
        id: "tm-pickup-03",
        stepNumber: 3,
        titleEN: "Assign Details & Save",
        titleAR: "تعيين التفاصيل والحفظ",
        role: "TM Planner",
        whatToDoEN: "Open the newly created Customer Pick-Up FO, assign the customer pickup location, time windows, and any additional details, then save.",
        whatToDoAR: "افتح FO استلام العميل المُنشأ حديثًا، وعيِّن موقع الاستلام ونوافذ الوقت وأي تفاصيل إضافية، ثم احفظ.",
        whatSAPDoesEN: "SAP saves the Customer Pick-Up FO with all assignments and updates freight unit statuses.",
        whatSAPDoesAR: "يحفظ SAP FO استلام العميل مع جميع التعيينات ويحدِّث حالات وحدات الشحن.",
        expectedOutputEN: "Customer Pick-Up Freight Order saved with details.",
        expectedOutputAR: "تم حفظ أمر شحن استلام العميل مع التفاصيل.",        screenshotUrl: "/process-charts/tm-customer-pickup-p12.png",

      },
    ],
  },

  // ── TM: Create Internal Settlement Document (ISD) ────────────────────────
  {
    id: "tm-create-isd",
    icon: "📋",
    duration: "15–25 minutes",
    titleEN: "Create Internal Settlement Document (ISD)",
    titleAR: "إنشاء مستند التسوية الداخلية (ISD)",
    module: "TM",
    roles: ["TM Planner", "Accounts Payable"],
    steps: [
      {
        id: "tm-isd-01",
        stepNumber: 1,
        titleEN: "Navigate to Forwarding Orders Internal Settlement Worklist",
        titleAR: "الانتقال إلى قائمة عمل تسوية أوامر الشحن الداخلية",
        role: "TM Planner",
        whatToDoEN: "From the Home screen, navigate to Forwarding Orders Internal Settlement Worklist to see freight orders ready for internal settlement.",
        whatToDoAR: "من الشاشة الرئيسية، انتقل إلى قائمة عمل تسوية أوامر الشحن الداخلية لرؤية أوامر الشحن الجاهزة للتسوية الداخلية.",
        whatSAPDoesEN: "SAP displays the list of freight orders eligible for internal settlement document creation.",
        whatSAPDoesAR: "يعرض SAP قائمة أوامر الشحن المؤهلة لإنشاء مستند التسوية الداخلية.",
        expectedOutputEN: "Forwarding Orders Internal Settlement Worklist displayed.",
        expectedOutputAR: "تم عرض قائمة عمل تسوية أوامر الشحن الداخلية.",        screenshotUrl: "/process-charts/tm-create-isd-p01.png",

      },
      {
        id: "tm-isd-02",
        stepNumber: 2,
        titleEN: "Select Orders & Create Internal Forwarding Settlement Document",
        titleAR: "تحديد الأوامر وإنشاء مستند التسوية الداخلية للشحن",
        role: "TM Planner",
        whatToDoEN: "Select the relevant freight orders from the worklist, then click Create Internal Forwarding Settlement Document. Add items via drag-and-drop if needed.",
        whatToDoAR: "حدِّد أوامر الشحن ذات الصلة من قائمة العمل، ثم انقر على إنشاء مستند التسوية الداخلية للشحن. أضف البنود عبر السحب والإفلات إذا لزم الأمر.",
        whatSAPDoesEN: "SAP creates a draft Internal Settlement Document linking the selected freight orders.",
        whatSAPDoesAR: "يُنشئ SAP مسودة مستند التسوية الداخلية يربط أوامر الشحن المحددة.",
        expectedOutputEN: "Internal Settlement Document draft created.",
        expectedOutputAR: "تم إنشاء مسودة مستند التسوية الداخلية.",        screenshotUrl: "/process-charts/tm-create-isd-p08.png",

      },
      {
        id: "tm-isd-03",
        stepNumber: 3,
        titleEN: "Save & Display ISD",
        titleAR: "حفظ وعرض مستند التسوية الداخلية",
        role: "TM Planner",
        whatToDoEN: "Save the Internal Settlement Document. Note the ISD document number. Open the ISD to review the document flow and confirm all freight orders are linked.",
        whatToDoAR: "احفظ مستند التسوية الداخلية. دوِّن رقم مستند ISD. افتح مستند ISD لمراجعة تدفق المستندات والتأكد من ربط جميع أوامر الشحن.",
        whatSAPDoesEN: "SAP saves the ISD, assigns a document number, and links it to all selected freight orders in the document flow.",
        whatSAPDoesAR: "يحفظ SAP مستند ISD ويعيِّن رقم مستند ويربطه بجميع أوامر الشحن المحددة في تدفق المستندات.",
        expectedOutputEN: "ISD saved with document number; document flow confirmed.",
        expectedOutputAR: "تم حفظ ISD برقم المستند؛ تم تأكيد تدفق المستندات.",        screenshotUrl: "/process-charts/tm-create-isd-p20.png",

      },
    ],
  },

  // ── TM: Cancel ISD Document ───────────────────────────────────────────────
  {
    id: "tm-cancel-isd",
    icon: "❌",
    duration: "10–15 minutes",
    titleEN: "Cancel Internal Settlement Document (ISD)",
    titleAR: "إلغاء مستند التسوية الداخلية (ISD)",
    module: "TM",
    roles: ["TM Planner", "Accounts Payable"],
    steps: [
      {
        id: "tm-cancel-isd-01",
        stepNumber: 1,
        titleEN: "Navigate to Forwarding Settlements Worklist",
        titleAR: "الانتقال إلى قائمة عمل تسويات الشحن",
        role: "TM Planner",
        whatToDoEN: "From the Home screen, navigate to the Forwarding Settlements Worklist to locate the ISD document to be cancelled.",
        whatToDoAR: "من الشاشة الرئيسية، انتقل إلى قائمة عمل تسويات الشحن لتحديد موقع مستند ISD المراد إلغاؤه.",
        whatSAPDoesEN: "SAP displays the list of settlement documents with their current statuses.",
        whatSAPDoesAR: "يعرض SAP قائمة مستندات التسوية مع حالاتها الحالية.",
        expectedOutputEN: "Forwarding Settlements Worklist displayed.",
        expectedOutputAR: "تم عرض قائمة عمل تسويات الشحن.",        screenshotUrl: "/process-charts/tm-cancel-isd-p01.png",

      },
      {
        id: "tm-cancel-isd-02",
        stepNumber: 2,
        titleEN: "Filter & Find the ISD Document",
        titleAR: "تصفية وإيجاد مستند ISD",
        role: "TM Planner",
        whatToDoEN: "Use the filter options to search for the specific ISD document by document number, date, or freight order reference.",
        whatToDoAR: "استخدم خيارات التصفية للبحث عن مستند ISD المحدد برقم المستند أو التاريخ أو مرجع أمر الشحن.",
        whatSAPDoesEN: "SAP filters the list and returns the matching ISD document.",
        whatSAPDoesAR: "يصفِّي SAP القائمة ويُرجع مستند ISD المطابق.",
        expectedOutputEN: "ISD document located in the list.",
        expectedOutputAR: "تم تحديد موقع مستند ISD في القائمة.",        screenshotUrl: "/process-charts/tm-cancel-isd-p04.png",

      },
      {
        id: "tm-cancel-isd-03",
        stepNumber: 3,
        titleEN: "Select & Cancel the ISD",
        titleAR: "تحديد وإلغاء مستند ISD",
        role: "TM Planner",
        whatToDoEN: "Select the ISD document and choose the Cancel action. Confirm the cancellation in the dialog box.",
        whatToDoAR: "حدِّد مستند ISD واختر إجراء الإلغاء. أكِّد الإلغاء في مربع الحوار.",
        whatSAPDoesEN: "SAP cancels the Internal Settlement Document and reverses any accounting entries, restoring the freight orders to their previous state.",
        whatSAPDoesAR: "يلغي SAP مستند التسوية الداخلية ويعكس أي قيود محاسبية، مستعيدًا أوامر الشحن إلى حالتها السابقة.",
        expectedOutputEN: "ISD cancelled; freight orders returned to previous status.",
        expectedOutputAR: "تم إلغاء ISD؛ عادت أوامر الشحن إلى حالتها السابقة.",        screenshotUrl: "/process-charts/tm-cancel-isd-p08.png",

      },
    ],
  },

  // ── TM: Create Transportation Resource (Truck) ───────────────────────────
  {
    id: "tm-create-resource",
    icon: "🚚",
    duration: "10–20 minutes",
    titleEN: "Create Transportation Resource (Truck)",
    titleAR: "إنشاء مورد النقل (شاحنة)",
    module: "TM",
    roles: ["TM Administrator"],
    steps: [
      {
        id: "tm-resource-01",
        stepNumber: 1,
        titleEN: "Navigate to Define Resource",
        titleAR: "الانتقال إلى تعريف المورد",
        role: "TM Administrator",
        whatToDoEN: "Go to Master Data → Define Resource in the TM menu to create a new transportation resource.",
        whatToDoAR: "انتقل إلى البيانات الرئيسية ← تعريف المورد في قائمة TM لإنشاء مورد نقل جديد.",
        whatSAPDoesEN: "SAP opens the Create Resources screen where you define the resource header data.",
        whatSAPDoesAR: "يفتح SAP شاشة إنشاء الموارد حيث تقوم بتعريف بيانات رأس المورد.",
        expectedOutputEN: "Create Resources screen opened.",
        expectedOutputAR: "تم فتح شاشة إنشاء الموارد.",        screenshotUrl: "/process-charts/tm-create-resource-p01.png",

      },
      {
        id: "tm-resource-02",
        stepNumber: 2,
        titleEN: "Enter Resource Header Data (Truck Type)",
        titleAR: "إدخال بيانات رأس المورد (نوع الشاحنة)",
        role: "TM Administrator",
        whatToDoEN: "Enter the resource name, select type = Truck, assign the home location, and set the time zone.",
        whatToDoAR: "أدخل اسم المورد واختر النوع = شاحنة وعيِّن الموقع الرئيسي واضبط المنطقة الزمنية.",
        whatSAPDoesEN: "SAP records the resource type and location for route planning purposes.",
        whatSAPDoesAR: "يسجِّل SAP نوع المورد والموقع لأغراض تخطيط المسار.",
        expectedOutputEN: "Resource header data entered with type and location.",
        expectedOutputAR: "تم إدخال بيانات رأس المورد مع النوع والموقع.",        screenshotUrl: "/process-charts/tm-create-resource-p04.png",

      },
      {
        id: "tm-resource-03",
        stepNumber: 3,
        titleEN: "Configure Transportation Tab & Assign Driver",
        titleAR: "تهيئة علامة تبويب النقل وتعيين السائق",
        role: "TM Administrator",
        whatToDoEN: "Navigate to the Transportation tab, assign the default driver to this resource.",
        whatToDoAR: "انتقل إلى علامة تبويب النقل وعيِّن السائق الافتراضي لهذا المورد.",
        whatSAPDoesEN: "SAP links the driver record to the truck resource for automated assignment during freight order creation.",
        whatSAPDoesAR: "يربط SAP سجل السائق بمورد الشاحنة للتعيين التلقائي أثناء إنشاء أمر الشحن.",
        expectedOutputEN: "Default driver assigned to the truck resource.",
        expectedOutputAR: "تم تعيين السائق الافتراضي لمورد الشاحنة.",        screenshotUrl: "/process-charts/tm-create-resource-p11.png",

      },
      {
        id: "tm-resource-04",
        stepNumber: 4,
        titleEN: "Set Capacity & Save",
        titleAR: "ضبط السعة والحفظ",
        role: "TM Administrator",
        whatToDoEN: "Navigate to the Capacity tab and enter the truck's load capacity in KG (mass). Save the resource.",
        whatToDoAR: "انتقل إلى علامة تبويب السعة وأدخل سعة حمولة الشاحنة بالكيلوغرام (الكتلة). احفظ المورد.",
        whatSAPDoesEN: "SAP saves the resource with full configuration, making it available for freight order assignment in the Transportation Cockpit.",
        whatSAPDoesAR: "يحفظ SAP المورد بالتهيئة الكاملة مما يجعله متاحًا لتعيين أمر الشحن في لوحة تحكم النقل.",
        expectedOutputEN: "Transportation resource created and available for use.",
        expectedOutputAR: "تم إنشاء مورد النقل وهو متاح للاستخدام.",        screenshotUrl: "/process-charts/tm-create-resource-p20.png",

      },
    ],
  },

  // ── TM: Create Transportation Lane ───────────────────────────────────────
  {
    id: "tm-create-lane",
    icon: "🛣️",
    duration: "10–20 minutes",
    titleEN: "Create Transportation Lane",
    titleAR: "إنشاء مسار النقل",
    module: "TM",
    roles: ["TM Administrator"],
    steps: [
      {
        id: "tm-lane-01",
        stepNumber: 1,
        titleEN: "Navigate to Define Transportation Lane",
        titleAR: "الانتقال إلى تعريف مسار النقل",
        role: "TM Administrator",
        whatToDoEN: "Go to Master Data → Define Transportation Lane in the TM menu. Set the Start and End locations for the lane.",
        whatToDoAR: "انتقل إلى البيانات الرئيسية ← تعريف مسار النقل في قائمة TM. اضبط مواقع البداية والنهاية للمسار.",
        whatSAPDoesEN: "SAP opens the transportation lane definition screen.",
        whatSAPDoesAR: "يفتح SAP شاشة تعريف مسار النقل.",
        expectedOutputEN: "Transportation lane definition screen opened with start/end locations set.",
        expectedOutputAR: "تم فتح شاشة تعريف مسار النقل مع ضبط مواقع البداية والنهاية.",        screenshotUrl: "/process-charts/tm-create-lane-p01.png",

      },
      {
        id: "tm-lane-02",
        stepNumber: 2,
        titleEN: "Create Lane & Set Means of Transport",
        titleAR: "إنشاء المسار وضبط وسيلة النقل",
        role: "TM Administrator",
        whatToDoEN: "Click Create to open the lane details. Select the Means of Transport (e.g., truck) for this lane.",
        whatToDoAR: "انقر على إنشاء لفتح تفاصيل المسار. اختر وسيلة النقل (مثل الشاحنة) لهذا المسار.",
        whatSAPDoesEN: "SAP creates the lane record and associates it with the selected means of transport.",
        whatSAPDoesAR: "يُنشئ SAP سجل المسار ويربطه بوسيلة النقل المحددة.",
        expectedOutputEN: "Lane created with means of transport assigned.",
        expectedOutputAR: "تم إنشاء المسار مع وسيلة النقل المعيَّنة.",        screenshotUrl: "/process-charts/tm-create-lane-p04.png",

      },
      {
        id: "tm-lane-03",
        stepNumber: 3,
        titleEN: "Enter Dates, Duration & Distance",
        titleAR: "إدخال التواريخ والمدة والمسافة",
        role: "TM Administrator",
        whatToDoEN: "Enter the validity start and end dates, the fixed transit duration (e.g., 2:00 hours), and the distance (e.g., 250 km). Save the lane.",
        whatToDoAR: "أدخل تواريخ بداية ونهاية الصلاحية ومدة العبور الثابتة (مثلًا 2:00 ساعة) والمسافة (مثلًا 250 كم). احفظ المسار.",
        whatSAPDoesEN: "SAP saves the transportation lane with transit time and distance, enabling automated scheduling and cost calculation.",
        whatSAPDoesAR: "يحفظ SAP مسار النقل مع وقت العبور والمسافة مما يتيح الجدولة التلقائية وحساب التكلفة.",
        expectedOutputEN: "Transportation lane saved and active.",
        expectedOutputAR: "تم حفظ مسار النقل وهو نشط.",        screenshotUrl: "/process-charts/tm-create-lane-p10.png",

      },
    ],
  },

  // ── TM: Create Driver ─────────────────────────────────────────────────────
  {
    id: "tm-create-driver",
    icon: "👤",
    duration: "10–20 minutes",
    titleEN: "Create Driver",
    titleAR: "إنشاء سجل السائق",
    module: "TM",
    roles: ["TM Administrator", "HR Administrator"],
    steps: [
      {
        id: "tm-driver-01",
        stepNumber: 1,
        titleEN: "Open Person Record & Set Driver Role",
        titleAR: "فتح سجل الشخص وتعيين دور السائق",
        role: "TM Administrator",
        whatToDoEN: "Open or create a Person record in the system. Navigate to the role section and assign the role of 'Driver'.",
        whatToDoAR: "افتح أو أنشئ سجل شخص في النظام. انتقل إلى قسم الدور وعيِّن دور 'سائق'.",
        whatSAPDoesEN: "SAP creates or updates the person record and enables driver-specific fields.",
        whatSAPDoesAR: "يُنشئ SAP سجل الشخص أو يحدِّثه ويتيح الحقول الخاصة بالسائق.",
        expectedOutputEN: "Person record opened with Driver role assigned.",
        expectedOutputAR: "تم فتح سجل الشخص مع تعيين دور السائق.",        screenshotUrl: "/process-charts/tm-create-driver-p01.png",

      },
      {
        id: "tm-driver-02",
        stepNumber: 2,
        titleEN: "Fill Personal Data & License Details",
        titleAR: "تعبئة البيانات الشخصية وتفاصيل الرخصة",
        role: "TM Administrator",
        whatToDoEN: "Enter the driver's full name, license number, license type, and expiry date. Fill any additional personal data fields required.",
        whatToDoAR: "أدخل الاسم الكامل للسائق ورقم الرخصة ونوعها وتاريخ انتهاء صلاحيتها. املأ أي حقول بيانات شخصية إضافية مطلوبة.",
        whatSAPDoesEN: "SAP stores the driver's personal details and license information for compliance tracking.",
        whatSAPDoesAR: "يخزِّن SAP البيانات الشخصية للسائق ومعلومات الرخصة لتتبع الامتثال.",
        expectedOutputEN: "Driver personal data and license details entered.",
        expectedOutputAR: "تم إدخال البيانات الشخصية للسائق وتفاصيل الرخصة.",        screenshotUrl: "/process-charts/tm-create-driver-p04.png",

      },
      {
        id: "tm-driver-03",
        stepNumber: 3,
        titleEN: "Save Driver Record",
        titleAR: "حفظ سجل السائق",
        role: "TM Administrator",
        whatToDoEN: "Review all entered data and save the driver record.",
        whatToDoAR: "راجع جميع البيانات المدخلة واحفظ سجل السائق.",
        whatSAPDoesEN: "SAP saves the driver record and makes it available for assignment to transportation resources and freight orders.",
        whatSAPDoesAR: "يحفظ SAP سجل السائق ويجعله متاحًا للتعيين إلى موارد النقل وأوامر الشحن.",
        expectedOutputEN: "Driver record saved and available for resource assignment.",
        expectedOutputAR: "تم حفظ سجل السائق وهو متاح لتعيين المورد.",        screenshotUrl: "/process-charts/tm-create-driver-p12.png",

      },
    ],
  },

  // ── TM: Display Location Master Data ─────────────────────────────────────
  {
    id: "tm-display-location",
    icon: "📍",
    duration: "5–10 minutes",
    titleEN: "Display Location Master Data",
    titleAR: "عرض البيانات الرئيسية للموقع",
    module: "TM",
    roles: ["TM Planner", "TM Administrator"],
    steps: [
      {
        id: "tm-location-01",
        stepNumber: 1,
        titleEN: "Navigate to Define Location",
        titleAR: "الانتقال إلى تعريف الموقع",
        role: "TM Planner",
        whatToDoEN: "Go to Master Data → Define Location in the TM menu to access location master data.",
        whatToDoAR: "انتقل إلى البيانات الرئيسية ← تعريف الموقع في قائمة TM للوصول إلى البيانات الرئيسية للموقع.",
        whatSAPDoesEN: "SAP opens the location search screen.",
        whatSAPDoesAR: "يفتح SAP شاشة البحث عن الموقع.",
        expectedOutputEN: "Location search screen opened.",
        expectedOutputAR: "تم فتح شاشة البحث عن الموقع.",        screenshotUrl: "/process-charts/tm-display-location-p01.png",

      },
      {
        id: "tm-location-02",
        stepNumber: 2,
        titleEN: "Search & Display Location",
        titleAR: "البحث وعرض الموقع",
        role: "TM Planner",
        whatToDoEN: "Enter the location name or code in the search fields and execute. Click the location to open and display its master data.",
        whatToDoAR: "أدخل اسم الموقع أو رمزه في حقول البحث ونفِّذ. انقر على الموقع لفتح وعرض بياناته الرئيسية.",
        whatSAPDoesEN: "SAP retrieves and displays the location record with Address, TM-specific, and General tab details.",
        whatSAPDoesAR: "يسترجع SAP ويعرض سجل الموقع مع تفاصيل علامات تبويب العنوان والخاصة بـ TM والعامة.",
        expectedOutputEN: "Location master data displayed with all tabs.",
        expectedOutputAR: "تم عرض البيانات الرئيسية للموقع مع جميع علامات التبويب.",        screenshotUrl: "/process-charts/tm-display-location-p04.png",

      },
    ],
  },

  // ── TM: Change STO Shipping Point ────────────────────────────────────────
  {
    id: "tm-sto-shipping-point",
    icon: "🔄",
    duration: "5–10 minutes",
    titleEN: "Change STO Shipping Point",
    titleAR: "تغيير نقطة شحن أمر نقل المخزون (STO)",
    module: "TM",
    roles: ["TM Planner", "Purchasing"],
    steps: [
      {
        id: "tm-sto-01",
        stepNumber: 1,
        titleEN: "Open ME22N – Change Purchase Order",
        titleAR: "فتح ME22N – تغيير أمر الشراء",
        role: "TM Planner",
        whatToDoEN: "Run transaction ME22N to open the Change Purchase Order screen. Enter the STO number you need to modify.",
        whatToDoAR: "شغِّل معاملة ME22N لفتح شاشة تغيير أمر الشراء. أدخل رقم STO الذي تريد تعديله.",
        whatSAPDoesEN: "SAP opens the STO document for editing.",
        whatSAPDoesAR: "يفتح SAP مستند STO للتحرير.",
        expectedOutputEN: "STO document opened in change mode.",
        expectedOutputAR: "تم فتح مستند STO في وضع التغيير.",        screenshotUrl: "/process-charts/tm-sto-shipping-point-p01.png",

      },
      {
        id: "tm-sto-02",
        stepNumber: 2,
        titleEN: "Navigate to Shipping & Change Shipping Point",
        titleAR: "الانتقال إلى الشحن وتغيير نقطة الشحن",
        role: "TM Planner",
        whatToDoEN: "Navigate to the Shipping tab/menu in the STO. Change the Shipping Point to the correct value before any delivery is created.",
        whatToDoAR: "انتقل إلى علامة تبويب/قائمة الشحن في STO. غيِّر نقطة الشحن إلى القيمة الصحيحة قبل إنشاء أي تسليم.",
        whatSAPDoesEN: "SAP updates the shipping point on the STO header for delivery processing.",
        whatSAPDoesAR: "يحدِّث SAP نقطة الشحن في رأس STO لمعالجة التسليم.",
        expectedOutputEN: "Shipping point updated on STO.",
        expectedOutputAR: "تم تحديث نقطة الشحن في STO.",        screenshotUrl: "/process-charts/tm-sto-shipping-point-p02.png",

      },
      {
        id: "tm-sto-03",
        stepNumber: 3,
        titleEN: "Save the STO",
        titleAR: "حفظ STO",
        role: "TM Planner",
        whatToDoEN: "Save the changes to the STO. The new shipping point will be used when the outbound delivery is created.",
        whatToDoAR: "احفظ التغييرات في STO. ستُستخدم نقطة الشحن الجديدة عند إنشاء التسليم الصادر.",
        whatSAPDoesEN: "SAP saves the STO with the updated shipping point.",
        whatSAPDoesAR: "يحفظ SAP STO بنقطة الشحن المحدَّثة.",
        expectedOutputEN: "STO saved with correct shipping point.",
        expectedOutputAR: "تم حفظ STO بنقطة الشحن الصحيحة.",        screenshotUrl: "/process-charts/tm-sto-shipping-point-p02.png",

      },
    ],
  },

  // ── TM: Invoice Posting via MIRO ─────────────────────────────────────────
  {
    id: "tm-miro",
    icon: "💳",
    duration: "10–20 minutes",
    titleEN: "Invoice Posting via MIRO (TM)",
    titleAR: "ترحيل الفاتورة عبر MIRO (TM)",
    module: "TM",
    roles: ["Accounts Payable"],
    steps: [
      {
        id: "tm-miro-01",
        stepNumber: 1,
        titleEN: "Open MIRO & Enter Invoice Details",
        titleAR: "فتح MIRO وإدخال تفاصيل الفاتورة",
        role: "Accounts Payable",
        whatToDoEN: "Run transaction MIRO. Enter the Invoice Date, Posting Date, and reference to the Freight Order.",
        whatToDoAR: "شغِّل معاملة MIRO. أدخل تاريخ الفاتورة وتاريخ الترحيل والمرجع إلى أمر الشحن.",
        whatSAPDoesEN: "SAP opens the Invoice Verification screen and links to the freight order data.",
        whatSAPDoesAR: "يفتح SAP شاشة التحقق من الفاتورة ويرتبط ببيانات أمر الشحن.",
        expectedOutputEN: "MIRO screen open with invoice and freight order reference.",
        expectedOutputAR: "شاشة MIRO مفتوحة مع الفاتورة ومرجع أمر الشحن.",        screenshotUrl: "/process-charts/tm-miro-p01.png",

      },
      {
        id: "tm-miro-02",
        stepNumber: 2,
        titleEN: "Enter Tax Amount & Verify",
        titleAR: "إدخال مبلغ الضريبة والتحقق",
        role: "Accounts Payable",
        whatToDoEN: "Enter the Tax Amount (e.g., K5 tax code) and the freight amount. Check Tax Data to verify the tax calculation.",
        whatToDoAR: "أدخل مبلغ الضريبة (مثلًا رمز الضريبة K5) ومبلغ الشحن. تحقق من بيانات الضريبة للتحقق من حساب الضريبة.",
        whatSAPDoesEN: "SAP calculates the tax amounts based on the entered tax code and displays the total invoice value.",
        whatSAPDoesAR: "يحسب SAP مبالغ الضريبة بناءً على رمز الضريبة المدخل ويعرض إجمالي قيمة الفاتورة.",
        expectedOutputEN: "Tax and invoice amounts verified.",
        expectedOutputAR: "تم التحقق من مبالغ الضريبة والفاتورة.",        screenshotUrl: "/process-charts/tm-miro-p05.png",

      },
      {
        id: "tm-miro-03",
        stepNumber: 3,
        titleEN: "Post the Invoice",
        titleAR: "ترحيل الفاتورة",
        role: "Accounts Payable",
        whatToDoEN: "Click Post to complete the invoice verification. The system creates the accounting document.",
        whatToDoAR: "انقر على ترحيل لاستكمال التحقق من الفاتورة. يُنشئ النظام مستند المحاسبة.",
        whatSAPDoesEN: "SAP posts the invoice, creates an FI accounting document, and updates the freight order settlement status.",
        whatSAPDoesAR: "يرحِّل SAP الفاتورة ويُنشئ مستند محاسبة FI ويحدِّث حالة تسوية أمر الشحن.",
        expectedOutputEN: "Invoice posted; accounting document created; FO settlement updated.",
        expectedOutputAR: "تم ترحيل الفاتورة؛ تم إنشاء مستند المحاسبة؛ تم تحديث تسوية FO.",        screenshotUrl: "/process-charts/tm-miro-p12.png",

      },
    ],
  },

  // ── TM: Fresh Shipping Process ────────────────────────────────────────────
  {
    id: "tm-fresh-shipping",
    icon: "🌿",
    duration: "30–60 minutes",
    titleEN: "Fresh Shipping Process",
    titleAR: "عملية شحن المنتجات الطازجة",
    module: "TM",
    roles: ["TM Planner", "Sales Representative"],
    steps: [
      {
        id: "tm-fresh-01",
        stepNumber: 1,
        titleEN: "Select Truck & Driver by Region",
        titleAR: "اختيار الشاحنة والسائق حسب المنطقة",
        role: "TM Planner",
        whatToDoEN: "Select the appropriate truck and assign the driver based on the delivery region and route.",
        whatToDoAR: "اختر الشاحنة المناسبة وعيِّن السائق بناءً على منطقة التسليم والمسار.",
        whatSAPDoesEN: "SAP displays available trucks and drivers filtered by region for assignment.",
        whatSAPDoesAR: "يعرض SAP الشاحنات والسائقين المتاحين مُصفَّين حسب المنطقة للتعيين.",
        expectedOutputEN: "Truck and driver selected for the region.",
        expectedOutputAR: "تم اختيار الشاحنة والسائق للمنطقة.",        screenshotUrl: "/process-charts/tm-fresh-shipping-p01.png",

      },
      {
        id: "tm-fresh-02",
        stepNumber: 2,
        titleEN: "Create Outbound Delivery (VL10C)",
        titleAR: "إنشاء التسليم الصادر (VL10C)",
        role: "TM Planner",
        whatToDoEN: "Run VL10C to create the outbound delivery for the fresh product orders. Confirm the delivery document.",
        whatToDoAR: "شغِّل VL10C لإنشاء التسليم الصادر لأوامر المنتجات الطازجة. أكِّد مستند التسليم.",
        whatSAPDoesEN: "SAP creates the outbound delivery and generates the associated TM freight unit.",
        whatSAPDoesAR: "يُنشئ SAP التسليم الصادر ويولِّد وحدة شحن TM المرتبطة.",
        expectedOutputEN: "Outbound delivery created.",
        expectedOutputAR: "تم إنشاء التسليم الصادر.",        screenshotUrl: "/process-charts/tm-fresh-shipping-p01.png",

      },
      {
        id: "tm-fresh-03",
        stepNumber: 3,
        titleEN: "Create Waybill in TM Cockpit",
        titleAR: "إنشاء بوليصة الشحن في لوحة تحكم TM",
        role: "TM Planner",
        whatToDoEN: "In the Transportation Cockpit, create the waybill (Bayan) by assigning the freight units to the selected truck and driver.",
        whatToDoAR: "في لوحة تحكم النقل، أنشئ بوليصة الشحن (البيان) عبر تعيين وحدات الشحن للشاحنة والسائق المختارَين.",
        whatSAPDoesEN: "SAP creates the freight order waybill with all delivery details and carrier assignment.",
        whatSAPDoesAR: "يُنشئ SAP بوليصة شحن أمر الشحن مع جميع تفاصيل التسليم وتعيين الناقل.",
        expectedOutputEN: "Waybill (Bayan) created in TM.",
        expectedOutputAR: "تم إنشاء بوليصة الشحن (البيان) في TM.",        screenshotUrl: "/process-charts/tm-fresh-shipping-p01.png",

      },
      {
        id: "tm-fresh-04",
        stepNumber: 4,
        titleEN: "Send Bayan to Customer",
        titleAR: "إرسال البيان للعميل",
        role: "TM Planner",
        whatToDoEN: "Print or send the Bayan document to the customer/driver for confirmation of the fresh product delivery.",
        whatToDoAR: "اطبع أو أرسل مستند البيان إلى العميل/السائق لتأكيد تسليم المنتجات الطازجة.",
        whatSAPDoesEN: "SAP outputs the Bayan document via the configured output channel (print/email).",
        whatSAPDoesAR: "يُخرج SAP مستند البيان عبر قناة المخرجات المُهيَّأة (طباعة/بريد إلكتروني).",
        expectedOutputEN: "Bayan document sent to customer.",
        expectedOutputAR: "تم إرسال مستند البيان إلى العميل.",        screenshotUrl: "/process-charts/tm-fresh-shipping-p01.png",

      },
    ],
  },

  // ── TM: Maintain Shipping Condition ──────────────────────────────────────
  {
    id: "tm-shipping-condition",
    icon: "⚙️",
    duration: "5–10 minutes",
    titleEN: "Maintain Shipping Condition on Sales Order",
    titleAR: "صيانة شرط الشحن في أمر المبيعات",
    module: "TM",
    roles: ["Sales Representative", "TM Planner"],
    steps: [
      {
        id: "tm-shpcond-01",
        stepNumber: 1,
        titleEN: "Open Create/Change Sales Order",
        titleAR: "فتح إنشاء/تغيير أمر المبيعات",
        role: "Sales Representative",
        whatToDoEN: "Open VA01 (Create) or VA02 (Change) for the Distributor Order. Navigate to the Header Data section.",
        whatToDoAR: "افتح VA01 (إنشاء) أو VA02 (تغيير) لأمر الموزع. انتقل إلى قسم بيانات الرأس.",
        whatSAPDoesEN: "SAP opens the sales order with all header-level shipping fields visible.",
        whatSAPDoesAR: "يفتح SAP أمر المبيعات مع ظهور جميع حقول الشحن على مستوى الرأس.",
        expectedOutputEN: "Sales order header screen open.",
        expectedOutputAR: "شاشة رأس أمر المبيعات مفتوحة.",        screenshotUrl: "/process-charts/tm-shipping-condition-p01.png",

      },
      {
        id: "tm-shpcond-02",
        stepNumber: 2,
        titleEN: "Set Shipping Condition & Means of Transport",
        titleAR: "ضبط شرط الشحن ووسيلة النقل",
        role: "Sales Representative",
        whatToDoEN: "Navigate to the Shipping tab in the header. Set Shipping Condition to '01 Standard' and Means of Transport Type to 'Y1 TM: Shipping product'.",
        whatToDoAR: "انتقل إلى علامة تبويب الشحن في الرأس. اضبط شرط الشحن على '01 قياسي' وحدِّد نوع وسيلة النقل على 'Y1 TM: منتج الشحن'.",
        whatSAPDoesEN: "SAP records the shipping condition and transport mode, which are used by TM to determine the freight order type.",
        whatSAPDoesAR: "يسجِّل SAP شرط الشحن ووضع النقل، اللذان يستخدمهما TM لتحديد نوع أمر الشحن.",
        expectedOutputEN: "Shipping condition and means of transport set.",
        expectedOutputAR: "تم ضبط شرط الشحن ووسيلة النقل.",        screenshotUrl: "/process-charts/tm-shipping-condition-p01.png",

      },
      {
        id: "tm-shpcond-03",
        stepNumber: 3,
        titleEN: "Save the Sales Order",
        titleAR: "حفظ أمر المبيعات",
        role: "Sales Representative",
        whatToDoEN: "Save the sales order to apply the shipping condition. TM will use this condition when creating freight orders.",
        whatToDoAR: "احفظ أمر المبيعات لتطبيق شرط الشحن. سيستخدم TM هذا الشرط عند إنشاء أوامر الشحن.",
        whatSAPDoesEN: "SAP saves the order with the updated shipping condition, triggering TM to apply the correct freight order type.",
        whatSAPDoesAR: "يحفظ SAP الأمر مع شرط الشحن المحدَّث، مما يُشغِّل TM لتطبيق نوع أمر الشحن الصحيح.",
        expectedOutputEN: "Sales order saved with correct shipping condition.",
        expectedOutputAR: "تم حفظ أمر المبيعات بشرط الشحن الصحيح.",        screenshotUrl: "/process-charts/tm-shipping-condition-p01.png",

      },
    ],
  },

  // ── TM: Transfer SO via External Work ────────────────────────────────────
  {
    id: "tm-transfer-so-external",
    icon: "🔀",
    duration: "15–25 minutes",
    titleEN: "Transfer Sales Order via External Work",
    titleAR: "نقل أمر المبيعات عن طريق عمل خارجي",
    module: "TM",
    roles: ["TM Planner", "Sales Representative"],
    steps: [
      {
        id: "tm-transfer-ext-01",
        stepNumber: 1,
        titleEN: "Identify External Work Order",
        titleAR: "تحديد أمر العمل الخارجي",
        role: "TM Planner",
        whatToDoEN: "Identify the sales order that needs to be transferred via external carrier or subcontractor. Verify the order details and quantities.",
        whatToDoAR: "حدِّد أمر المبيعات الذي يجب نقله عبر ناقل خارجي أو مقاول من الباطن. تحقق من تفاصيل الأمر والكميات.",
        whatSAPDoesEN: "SAP retrieves the sales order and freight unit details for external transfer processing.",
        whatSAPDoesAR: "يسترجع SAP تفاصيل أمر المبيعات ووحدة الشحن لمعالجة النقل الخارجي.",
        expectedOutputEN: "Sales order identified for external transfer.",
        expectedOutputAR: "تم تحديد أمر المبيعات للنقل الخارجي.",
        screenshotUrl: "/process-charts/tm-transfer-so-external-p01.png",
      },
      {
        id: "tm-transfer-ext-02",
        stepNumber: 2,
        titleEN: "Create External Carrier Freight Order",
        titleAR: "إنشاء أمر شحن الناقل الخارجي",
        role: "TM Planner",
        whatToDoEN: "In the Transportation Cockpit, assign the freight units to an external carrier freight order. Select the subcontractor/external carrier.",
        whatToDoAR: "في لوحة تحكم النقل، عيِّن وحدات الشحن لأمر شحن الناقل الخارجي. اختر المقاول من الباطن/الناقل الخارجي.",
        whatSAPDoesEN: "SAP creates a freight order assigned to the external carrier, with the relevant freight units.",
        whatSAPDoesAR: "يُنشئ SAP أمر شحن مُعيَّن للناقل الخارجي مع وحدات الشحن ذات الصلة.",
        expectedOutputEN: "External carrier freight order created.",
        expectedOutputAR: "تم إنشاء أمر شحن الناقل الخارجي.",
        screenshotUrl: "/process-charts/tm-transfer-so-external-p01.png",
      },
      {
        id: "tm-transfer-ext-03",
        stepNumber: 3,
        titleEN: "Save & Confirm Transfer",
        titleAR: "حفظ وتأكيد النقل",
        role: "TM Planner",
        whatToDoEN: "Save the freight order and confirm the transfer to the external work carrier. Issue the waybill/documents to the external carrier.",
        whatToDoAR: "احفظ أمر الشحن وأكِّد النقل لناقل العمل الخارجي. أصدر بوليصة الشحن/المستندات للناقل الخارجي.",
        whatSAPDoesEN: "SAP saves and confirms the freight order for external work, updating the TM document flow.",
        whatSAPDoesAR: "يحفظ SAP أمر الشحن للعمل الخارجي ويؤكده مع تحديث تدفق مستند TM.",
        expectedOutputEN: "Transfer confirmed; documents issued to external carrier.",
        expectedOutputAR: "تم تأكيد النقل؛ تم إصدار المستندات للناقل الخارجي.",
        screenshotUrl: "/process-charts/tm-transfer-so-external-p02.png",
      },
    ],
  },

  // ── TM: Transfer SO via Al Wataniyah / External Client ───────────────────
  {
    id: "tm-transfer-so-wataniyah",
    icon: "🚚",
    duration: "15–25 minutes",
    titleEN: "Transfer Sales Order via Al Wataniyah or External Client",
    titleAR: "نقل أمر المبيعات عن طريق الوطنية للنقل أو عميل خارجي",
    module: "TM",
    roles: ["TM Planner", "Sales Representative"],
    steps: [
      {
        id: "tm-wataniyah-01",
        stepNumber: 1,
        titleEN: "Identify Sales Order for External Transfer",
        titleAR: "تحديد أمر المبيعات للنقل الخارجي",
        role: "TM Planner",
        whatToDoEN: "Identify the sales order (SO) to be transferred via Al Wataniyah transport company or another external client carrier. Verify quantities and route.",
        whatToDoAR: "حدِّد أمر المبيعات (SO) المراد نقله عبر شركة الوطنية للنقل أو ناقل عميل خارجي آخر. تحقق من الكميات والمسار.",
        whatSAPDoesEN: "SAP retrieves the sales order and associated freight unit for external carrier assignment.",
        whatSAPDoesAR: "يسترجع SAP أمر المبيعات ووحدة الشحن المرتبطة لتعيين الناقل الخارجي.",
        expectedOutputEN: "Sales order identified for Al Wataniyah / external client transfer.",
        expectedOutputAR: "تم تحديد أمر المبيعات لنقل الوطنية / العميل الخارجي.",
        screenshotUrl: "/process-charts/tm-transfer-so-wataniyah-p01.png",
      },
      {
        id: "tm-wataniyah-02",
        stepNumber: 2,
        titleEN: "Assign to External Carrier in TM Cockpit",
        titleAR: "التعيين للناقل الخارجي في لوحة تحكم TM",
        role: "TM Planner",
        whatToDoEN: "In the Transportation Cockpit, create or update the freight order to assign Al Wataniyah or the external client as the carrier. Confirm truck and driver from the external company.",
        whatToDoAR: "في لوحة تحكم النقل، أنشئ أمر الشحن أو حدِّثه لتعيين الوطنية أو العميل الخارجي كناقل. أكِّد الشاحنة والسائق من الشركة الخارجية.",
        whatSAPDoesEN: "SAP assigns the external carrier to the freight order and updates routing and cost determination.",
        whatSAPDoesAR: "يعيِّن SAP الناقل الخارجي لأمر الشحن ويحدِّث المسار وتحديد التكلفة.",
        expectedOutputEN: "External carrier assigned to freight order.",
        expectedOutputAR: "تم تعيين الناقل الخارجي لأمر الشحن.",
        screenshotUrl: "/process-charts/tm-transfer-so-wataniyah-p01.png",
      },
      {
        id: "tm-wataniyah-03",
        stepNumber: 3,
        titleEN: "Save & Issue Documents",
        titleAR: "الحفظ وإصدار المستندات",
        role: "TM Planner",
        whatToDoEN: "Save the freight order and print/issue the waybill and shipping documents to the external carrier (Al Wataniyah or external client).",
        whatToDoAR: "احفظ أمر الشحن واطبع/أصدر بوليصة الشحن ومستندات الشحن للناقل الخارجي (الوطنية أو العميل الخارجي).",
        whatSAPDoesEN: "SAP saves the freight order and generates output documents for the external carrier.",
        whatSAPDoesAR: "يحفظ SAP أمر الشحن ويُنشئ مستندات المخرجات للناقل الخارجي.",
        expectedOutputEN: "Freight order saved; documents issued to external carrier.",
        expectedOutputAR: "تم حفظ أمر الشحن؛ تم إصدار المستندات للناقل الخارجي.",
        screenshotUrl: "/process-charts/tm-transfer-so-wataniyah-p02.png",
      },
    ],
  },

  // ── TM: Waiting Fees Calculation ─────────────────────────────────────────
  {
    id: "tm-waiting-fees",
    icon: "⏱️",
    duration: "15–30 minutes",
    titleEN: "Waiting Fees Calculation",
    titleAR: "احتساب رسوم الانتظار",
    module: "TM",
    roles: ["TM Planner"],
    steps: [
      {
        id: "tm-waiting-01",
        stepNumber: 1,
        titleEN: "Open Freight Order & Set In Execution / Arrived",
        titleAR: "فتح أمر الشحن وتعيينه قيد التنفيذ / وصل",
        role: "TM Planner",
        whatToDoEN: "Open the Freight Order (FO). Click 'Set In Execution' to start execution, then click 'Set Arrived' to record truck arrival at the loading/unloading point.",
        whatToDoAR: "افتح أمر الشحن (FO). انقر على 'تعيين قيد التنفيذ' لبدء التنفيذ ثم انقر على 'تعيين وصل' لتسجيل وصول الشاحنة إلى نقطة التحميل/التفريغ.",
        whatSAPDoesEN: "SAP transitions the FO to In Execution status and records the arrival timestamp.",
        whatSAPDoesAR: "ينقل SAP FO إلى حالة قيد التنفيذ ويسجِّل طابع زمني الوصول.",
        expectedOutputEN: "FO set to In Execution and Arrived.",
        expectedOutputAR: "تم تعيين FO إلى قيد التنفيذ ووصل.",
        screenshotUrl: "/process-charts/tm-waiting-fees-p02.png",
      },
      {
        id: "tm-waiting-02",
        stepNumber: 2,
        titleEN: "Enter Loading Begin & Loading End",
        titleAR: "إدخال بداية التحميل ونهاية التحميل",
        role: "TM Planner",
        whatToDoEN: "Enter Loading Begin: actual date, time, and loading location. Then enter Loading End: actual date, time, and loading location (H&M).",
        whatToDoAR: "أدخل بداية التحميل: التاريخ والوقت الفعليَّين وموقع التحميل. ثم أدخل نهاية التحميل: التاريخ والوقت الفعليَّين وموقع التحميل (H&M).",
        whatSAPDoesEN: "SAP records the actual loading timestamps and calculates waiting time at the loading point.",
        whatSAPDoesAR: "يسجِّل SAP الطوابع الزمنية الفعلية للتحميل ويحسب وقت الانتظار عند نقطة التحميل.",
        expectedOutputEN: "Loading begin and end times recorded.",
        expectedOutputAR: "تم تسجيل وقتَي بداية التحميل ونهايته.",
        screenshotUrl: "/process-charts/tm-waiting-fees-p03.png",
      },
      {
        id: "tm-waiting-03",
        stepNumber: 3,
        titleEN: "Enter Unloading Begin & End for Each Stop",
        titleAR: "إدخال بداية ونهاية التفريغ لكل محطة",
        role: "TM Planner",
        whatToDoEN: "For each unloading stop: enter Unloading Begin (actual date, time, location) and Unloading End (actual date, time, location). Repeat for each delivery stop (1st, 2nd, etc.).",
        whatToDoAR: "لكل محطة تفريغ: أدخل بداية التفريغ (التاريخ والوقت والموقع الفعلية) ونهاية التفريغ (التاريخ والوقت والموقع الفعلية). كرِّر لكل محطة توصيل (الأولى والثانية وما إلى ذلك).",
        whatSAPDoesEN: "SAP records the actual unloading timestamps at each stop and calculates total waiting time across all stops.",
        whatSAPDoesAR: "يسجِّل SAP الطوابع الزمنية الفعلية للتفريغ في كل محطة ويحسب إجمالي وقت الانتظار عبر جميع المحطات.",
        expectedOutputEN: "All unloading begin and end times recorded for each stop.",
        expectedOutputAR: "تم تسجيل جميع أوقات بداية التفريغ ونهايته لكل محطة.",
        screenshotUrl: "/process-charts/tm-waiting-fees-p04.png",
      },
      {
        id: "tm-waiting-04",
        stepNumber: 4,
        titleEN: "Save & Verify Waiting Fees Settlement",
        titleAR: "الحفظ والتحقق من تسوية رسوم الانتظار",
        role: "TM Planner",
        whatToDoEN: "Save the FO with all time entries. The system will calculate waiting fees based on the time differences. Verify in the settlement that the waiting fees appear correctly. Ensure times are entered correctly — if fees are not appearing in the settlement, cancel and re-enter the data.",
        whatToDoAR: "احفظ FO مع جميع إدخالات الوقت. سيحسب النظام رسوم الانتظار بناءً على فوارق الوقت. تحقق في التسوية من ظهور رسوم الانتظار بشكل صحيح. تأكد من صحة إدخال الأوقات — إذا لم تظهر الرسوم في التسوية، ألغِ وأعِد إدخال البيانات.",
        whatSAPDoesEN: "SAP calculates waiting fees based on agreed tariffs and time differences, and includes them in the freight settlement document.",
        whatSAPDoesAR: "يحسب SAP رسوم الانتظار بناءً على التعريفات المتفق عليها والفوارق الزمنية ويدرجها في مستند تسوية الشحن.",
        expectedOutputEN: "Waiting fees calculated and visible in freight settlement.",
        expectedOutputAR: "تم احتساب رسوم الانتظار وهي مرئية في تسوية الشحن.",
        screenshotUrl: "/process-charts/tm-waiting-fees-p05.png",
      },
    ],
  },

  // ── TM: Create Waybill for External Client ────────────────────────────────
  {
    id: "tm-create-waybill-external",
    icon: "📄",
    duration: "10–20 minutes",
    titleEN: "Create Waybill for External Client",
    titleAR: "إنشاء بوليصة شحن لعميل خارجي",
    module: "TM",
    roles: ["TM Planner"],
    steps: [
      {
        id: "tm-waybill-ext-01",
        stepNumber: 1,
        titleEN: "Open Freight Order for External Client",
        titleAR: "فتح أمر الشحن للعميل الخارجي",
        role: "TM Planner",
        whatToDoEN: "Navigate to the Transportation Cockpit and open the freight order assigned to the external client (e.g., Al Wataniyah Dawajin).",
        whatToDoAR: "انتقل إلى لوحة تحكم النقل وافتح أمر الشحن المعيَّن للعميل الخارجي (مثلًا الوطنية للدواجن).",
        whatSAPDoesEN: "SAP opens the freight order with all assigned freight units and carrier details.",
        whatSAPDoesAR: "يفتح SAP أمر الشحن مع جميع وحدات الشحن المعيَّنة وتفاصيل الناقل.",
        expectedOutputEN: "Freight order opened for external client.",
        expectedOutputAR: "تم فتح أمر الشحن للعميل الخارجي.",
        screenshotUrl: "/process-charts/tm-create-waybill-external-p01.png",
      },
      {
        id: "tm-waybill-ext-02",
        stepNumber: 2,
        titleEN: "Create Waybill (Bayan)",
        titleAR: "إنشاء بوليصة الشحن (البيان)",
        role: "TM Planner",
        whatToDoEN: "Within the freight order, navigate to Output Management and create the waybill (Bayan) document for the external client.",
        whatToDoAR: "داخل أمر الشحن، انتقل إلى إدارة المخرجات وأنشئ مستند بوليصة الشحن (البيان) للعميل الخارجي.",
        whatSAPDoesEN: "SAP generates the waybill document with shipment details, quantities, carrier, and client information.",
        whatSAPDoesAR: "يُنشئ SAP مستند بوليصة الشحن مع تفاصيل الشحنة والكميات وبيانات الناقل والعميل.",
        expectedOutputEN: "Waybill (Bayan) created for external client.",
        expectedOutputAR: "تم إنشاء بوليصة الشحن (البيان) للعميل الخارجي.",
        screenshotUrl: "/process-charts/tm-create-waybill-external-p02.png",
      },
      {
        id: "tm-waybill-ext-03",
        stepNumber: 3,
        titleEN: "Print & Send Waybill",
        titleAR: "طباعة وإرسال بوليصة الشحن",
        role: "TM Planner",
        whatToDoEN: "Print or send the waybill to the external client and driver. Retain a copy for records.",
        whatToDoAR: "اطبع أو أرسل بوليصة الشحن إلى العميل الخارجي والسائق. احتفظ بنسخة للسجلات.",
        whatSAPDoesEN: "SAP outputs the waybill via the configured output channel and records the output in the freight order.",
        whatSAPDoesAR: "يُخرج SAP بوليصة الشحن عبر قناة المخرجات المُهيَّأة ويسجِّل المخرجات في أمر الشحن.",
        expectedOutputEN: "Waybill printed/sent; record retained.",
        expectedOutputAR: "تمت طباعة/إرسال بوليصة الشحن؛ تم الاحتفاظ بالسجل.",
        screenshotUrl: "/process-charts/tm-create-waybill-external-p03.png",
      },
    ],
  },

  // ── TM: Add & Edit Prices on Waybill ─────────────────────────────────────
  {
    id: "tm-waybill-prices",
    icon: "💰",
    duration: "10–20 minutes",
    titleEN: "Add & Edit Prices on Waybill (Al Wataniyah)",
    titleAR: "إضافة وتعديل الأسعار على البوليصة (الوطنية للدواجن)",
    module: "TM",
    roles: ["TM Planner", "Accounts Payable"],
    steps: [
      {
        id: "tm-prices-01",
        stepNumber: 1,
        titleEN: "Enter Price in Delivery",
        titleAR: "إدخال السعر في التسليم",
        role: "TM Planner",
        whatToDoEN: "Open the delivery document and add or update the price within the delivery. This may be done directly in the delivery or through a freight order (DTR).",
        whatToDoAR: "افتح مستند التسليم وأضف أو حدِّث السعر داخل التسليم. يمكن القيام بذلك مباشرةً في التسليم أو عبر أمر شحن (DTR).",
        whatSAPDoesEN: "SAP records the freight price against the delivery item.",
        whatSAPDoesAR: "يسجِّل SAP سعر الشحن مقابل بند التسليم.",
        expectedOutputEN: "Price entered in delivery.",
        expectedOutputAR: "تم إدخال السعر في التسليم.",
        screenshotUrl: "/process-charts/tm-waybill-prices-p01.png",
      },
      {
        id: "tm-prices-02",
        stepNumber: 2,
        titleEN: "Navigate via Document Flow to DTR",
        titleAR: "التنقل عبر تدفق المستندات إلى DTR",
        role: "TM Planner",
        whatToDoEN: "Open the Document Flow from the waybill and navigate to the DTR (freight order). If multiple deliveries exist, the route price is split across them (e.g., total 1000 SAR split equally across 2 deliveries = 500 SAR each).",
        whatToDoAR: "افتح تدفق المستندات من البوليصة وانتقل إلى DTR (أمر الشحن). إذا كانت هناك تسليمات متعددة، يتم تقسيم سعر الرحلة عليها (مثلًا إجمالي 1000 ريال يُقسَّم بالتساوي على تسليمَين = 500 ريال لكل منهما).",
        whatSAPDoesEN: "SAP displays the document flow and the DTR with current pricing details.",
        whatSAPDoesAR: "يعرض SAP تدفق المستندات وDTR مع تفاصيل التسعير الحالية.",
        expectedOutputEN: "DTR (freight order) opened with pricing visible.",
        expectedOutputAR: "تم فتح DTR (أمر الشحن) مع ظهور التسعير.",
        screenshotUrl: "/process-charts/tm-waybill-prices-p01.png",
      },
      {
        id: "tm-prices-03",
        stepNumber: 3,
        titleEN: "Edit Second Delivery Price to Match",
        titleAR: "تعديل سعر التسليم الثاني للتطابق",
        role: "TM Planner",
        whatToDoEN: "After updating the first delivery price, enter the same price structure on the second delivery in the DTR so the total matches the route price. Save the changes.",
        whatToDoAR: "بعد تحديث سعر التسليم الأول، أدخل نفس هيكل السعر في التسليم الثاني في DTR حتى يتطابق الإجمالي مع سعر الرحلة. احفظ التغييرات.",
        whatSAPDoesEN: "SAP updates the pricing on both deliveries and confirms the total matches the route price.",
        whatSAPDoesAR: "يحدِّث SAP التسعير على كلا التسليمَين ويؤكد تطابق الإجمالي مع سعر الرحلة.",
        expectedOutputEN: "Both delivery prices updated; total matches route price.",
        expectedOutputAR: "تم تحديث أسعار كلا التسليمَين؛ يتطابق الإجمالي مع سعر الرحلة.",
        screenshotUrl: "/process-charts/tm-waybill-prices-p02.png",
      },
      {
        id: "tm-prices-04",
        stepNumber: 4,
        titleEN: "Save & Submit Invoice",
        titleAR: "الحفظ وتقديم الفاتورة",
        role: "TM Planner",
        whatToDoEN: "After saving all data, the settlement invoice is submitted. The system verifies the price matches the route price before completing the settlement.",
        whatToDoAR: "بعد حفظ جميع البيانات، يُقدَّم فاتورة التسوية. يتحقق النظام من تطابق السعر مع سعر الرحلة قبل إتمام التسوية.",
        whatSAPDoesEN: "SAP finalizes the settlement with the verified prices and generates the settlement invoice.",
        whatSAPDoesAR: "يُنهي SAP التسوية بالأسعار المتحقق منها ويُنشئ فاتورة التسوية.",
        expectedOutputEN: "Settlement invoice submitted with verified prices.",
        expectedOutputAR: "تم تقديم فاتورة التسوية بالأسعار المتحقق منها.",
        screenshotUrl: "/process-charts/tm-waybill-prices-p02.png",
      },
    ],
  },

  // ── TM: Group Logistics – Full TM Process ────────────────────────────────
  {
    id: "tm-group-logistics",
    icon: "🏭",
    duration: "30–60 minutes",
    titleEN: "Group Logistics – Full TM Process",
    titleAR: "لوجستيات المجموعة – عملية TM الكاملة",
    module: "TM",
    roles: ["TM Planner", "Accounts Payable"],
    steps: [
      {
        id: "tm-group-01",
        stepNumber: 1,
        titleEN: "Open Transportation Cockpit (AWT_COOLER Layout)",
        titleAR: "فتح لوحة تحكم النقل (تخطيط AWT_COOLER)",
        role: "TM Planner",
        whatToDoEN: "Navigate to the Transportation Cockpit and select the AWT_COOLER layout to view Frozen freight orders.",
        whatToDoAR: "انتقل إلى لوحة تحكم النقل واختر تخطيط AWT_COOLER لعرض أوامر الشحن المجمَّدة.",
        whatSAPDoesEN: "SAP opens the Transportation Cockpit filtered for the AWT_COOLER (Frozen) planning segment.",
        whatSAPDoesAR: "يفتح SAP لوحة تحكم النقل مُصفَّاةً لقطاع تخطيط AWT_COOLER (المجمَّد).",
        expectedOutputEN: "Transportation Cockpit open with Frozen freight orders visible.",
        expectedOutputAR: "لوحة تحكم النقل مفتوحة مع ظهور أوامر الشحن المجمَّدة.",
        screenshotUrl: "/process-charts/tm-create-fo-p01.png",
      },
      {
        id: "tm-group-02",
        stepNumber: 2,
        titleEN: "Select & Edit Frozen Freight Order",
        titleAR: "تحديد وتعديل أمر الشحن المجمَّد",
        role: "TM Planner",
        whatToDoEN: "Select the relevant Frozen freight order and open it for editing. Review freight units, carrier, and truck/driver assignments.",
        whatToDoAR: "حدِّد أمر الشحن المجمَّد ذا الصلة وافتحه للتعديل. راجع وحدات الشحن والناقل وتعيينات الشاحنة/السائق.",
        whatSAPDoesEN: "SAP opens the freight order in edit mode with all assignments visible.",
        whatSAPDoesAR: "يفتح SAP أمر الشحن في وضع التعديل مع ظهور جميع التعيينات.",
        expectedOutputEN: "Freight order opened in edit mode.",
        expectedOutputAR: "تم فتح أمر الشحن في وضع التعديل.",
        screenshotUrl: "/process-charts/tm-create-fo-p02.png",
      },
      {
        id: "tm-group-03",
        stepNumber: 3,
        titleEN: "Navigate to Forwarding Orders Internal Settlement Worklist",
        titleAR: "الانتقال إلى قائمة عمل تسوية أوامر الشحن الداخلية",
        role: "TM Planner",
        whatToDoEN: "From the Home screen, navigate to Forwarding Orders Internal Settlement Worklist to find freight orders ready for ISD creation.",
        whatToDoAR: "من الشاشة الرئيسية، انتقل إلى قائمة عمل تسوية أوامر الشحن الداخلية للعثور على أوامر الشحن الجاهزة لإنشاء مستند ISD.",
        whatSAPDoesEN: "SAP lists all freight orders eligible for internal settlement.",
        whatSAPDoesAR: "يسرد SAP جميع أوامر الشحن المؤهلة للتسوية الداخلية.",
        expectedOutputEN: "Internal Settlement Worklist displayed with eligible freight orders.",
        expectedOutputAR: "تم عرض قائمة عمل التسوية الداخلية مع أوامر الشحن المؤهلة.",
        screenshotUrl: "/process-charts/tm-create-isd-p01.png",
      },
      {
        id: "tm-group-04",
        stepNumber: 4,
        titleEN: "Create Internal Settlement Document (ISD)",
        titleAR: "إنشاء مستند التسوية الداخلية (ISD)",
        role: "TM Planner",
        whatToDoEN: "Select the freight orders and click 'Create Internal Forwarding Settlement Document'. Review and save the ISD.",
        whatToDoAR: "حدِّد أوامر الشحن وانقر على 'إنشاء مستند التسوية الداخلية للشحن'. راجع واحفظ مستند ISD.",
        whatSAPDoesEN: "SAP creates the Internal Settlement Document linking all selected freight orders.",
        whatSAPDoesAR: "يُنشئ SAP مستند التسوية الداخلية يربط جميع أوامر الشحن المحددة.",
        expectedOutputEN: "ISD created and saved.",
        expectedOutputAR: "تم إنشاء مستند ISD وحفظه.",
        screenshotUrl: "/process-charts/tm-create-isd-p06.png",
      },
      {
        id: "tm-group-05",
        stepNumber: 5,
        titleEN: "Display & Verify ISD",
        titleAR: "عرض والتحقق من مستند ISD",
        role: "TM Planner",
        whatToDoEN: "Open the ISD and review the Document Flow to confirm all freight orders are correctly linked and settlement amounts are accurate.",
        whatToDoAR: "افتح مستند ISD وراجع تدفق المستندات للتأكد من ارتباط جميع أوامر الشحن بشكل صحيح وصحة مبالغ التسوية.",
        whatSAPDoesEN: "SAP displays the ISD with the complete document flow.",
        whatSAPDoesAR: "يعرض SAP مستند ISD مع تدفق المستندات الكامل.",
        expectedOutputEN: "ISD verified; document flow complete.",
        expectedOutputAR: "تم التحقق من مستند ISD؛ تدفق المستندات مكتمل.",
        screenshotUrl: "/process-charts/tm-create-isd-p19.png",
      },
    ],
  },
  // ── TM: Verify Delivery Transport Mode ────────────────────────────────────
  {
    id: "tm-verify-delivery-transport",
    icon: "🔍",
    duration: "5–10 minutes",
    titleEN: "Verify Transport Mode in Delivery",
    titleAR: "التأكد من طريقة النقل في الدليفري",
    module: "TM",
    roles: ["TM Planner", "Warehouse Staff"],
    steps: [
      {
        id: "tm-verify-transport-01",
        stepNumber: 1,
        titleEN: "Open the Delivery Document",
        titleAR: "فتح مستند التسليم",
        role: "TM Planner",
        whatToDoEN: "Open the outbound delivery document using VL03N (Display) or VL02N (Change). Enter the delivery number.",
        whatToDoAR: "افتح مستند التسليم الصادر باستخدام VL03N (عرض) أو VL02N (تغيير). أدخل رقم التسليم.",
        whatSAPDoesEN: "SAP opens the delivery document with all header and item data.",
        whatSAPDoesAR: "يفتح SAP مستند التسليم مع جميع بيانات الرأس والبند.",
        expectedOutputEN: "Delivery document opened.",
        expectedOutputAR: "تم فتح مستند التسليم.",
        screenshotUrl: "/process-charts/tm-verify-delivery-transport-p01.png",
      },
      {
        id: "tm-verify-transport-02",
        stepNumber: 2,
        titleEN: "Check Shipping Tab for Transport Mode",
        titleAR: "التحقق من علامة تبويب الشحن لطريقة النقل",
        role: "TM Planner",
        whatToDoEN: "Navigate to the Shipping tab in the delivery header. Verify the Shipping Condition and Means of Transport Type fields are correctly set (e.g., '01 Standard' and 'Y1 TM: Shipping product').",
        whatToDoAR: "انتقل إلى علامة تبويب الشحن في رأس التسليم. تحقق من ضبط حقلَي شرط الشحن ونوع وسيلة النقل بشكل صحيح (مثلًا '01 قياسي' و'Y1 TM: منتج الشحن').",
        whatSAPDoesEN: "SAP displays the current shipping condition and transport mode configured on the delivery.",
        whatSAPDoesAR: "يعرض SAP شرط الشحن ووضع النقل الحالي المُهيَّأ في التسليم.",
        expectedOutputEN: "Transport mode and shipping condition verified on delivery.",
        expectedOutputAR: "تم التحقق من طريقة النقل وشرط الشحن في التسليم.",
        screenshotUrl: "/process-charts/tm-verify-delivery-transport-p01.png",
      },
      {
        id: "tm-verify-transport-03",
        stepNumber: 3,
        titleEN: "Correct if Needed & Save",
        titleAR: "التصحيح إذا لزم الأمر والحفظ",
        role: "TM Planner",
        whatToDoEN: "If the transport mode is incorrect, switch to VL02N (Change) and update the Shipping Condition and Means of Transport Type to the correct values. Save the delivery.",
        whatToDoAR: "إذا كانت طريقة النقل غير صحيحة، انتقل إلى VL02N (تغيير) وحدِّث شرط الشحن ونوع وسيلة النقل إلى القيم الصحيحة. احفظ التسليم.",
        whatSAPDoesEN: "SAP saves the corrected delivery with the right transport mode, ensuring TM creates the correct type of freight order.",
        whatSAPDoesAR: "يحفظ SAP التسليم المُصحَّح بطريقة النقل الصحيحة مما يضمن إنشاء TM لنوع أمر الشحن الصحيح.",
        expectedOutputEN: "Delivery saved with correct transport mode.",
        expectedOutputAR: "تم حفظ التسليم بطريقة النقل الصحيحة.",
        screenshotUrl: "/process-charts/tm-verify-delivery-transport-p02.png",
      },
    ],
  },

  // ── FICO: General Ledger & Financial Close ─────────────────────────────────
  {
    id: "fi-gl-financial-close",
    icon: "📊",
    duration: "1-2 days",
    titleEN: "General Ledger & Financial Close",
    titleAR: "المحاسبة العامة وإغلاق الفترة المالية",
    descriptionEN: "Period-end and year-end closing activities for General Ledger including posting journal entries, carrying out recurring entries, running automatic clearing, performing foreign currency valuation, and producing financial statements.",
    descriptionAR: "أنشطة إغلاق نهاية الفترة ونهاية السنة للدفتر العام، تشمل ترحيل القيود اليومية والقيود الدورية والتسوية التلقائية وتقييم العملة الأجنبية وعرض البيانات المالية.",
    module: "FICO",
    roles: ["GL Accountant"],
    steps: [
      {
        id: "fi-gl-financial-close-s1",
        stepNumber: 1,
        titleEN: "Post General Journal Entries",
        titleAR: "ترحيل قيود اليومية العامة",
        tCode: "FB50",
        role: "GL Accountant",
        whatToDoEN: "Navigate to FB50 (Post General Journal Entries). Enter the posting date, document type, company code, and G/L account line items with debit/credit amounts. Enter the appropriate cost center and profit center as required.",
        whatToDoAR: "انتقل إلى FB50 (ترحيل قيود اليومية). أدخل تاريخ الترحيل ونوع المستند ورمز الشركة وبنود حساب دفتر الأستاذ العام مع المبالغ المدينة والدائنة، ثم أدخل مركز التكلفة ومركز الربح حسب الحاجة.",
        whatSAPDoesEN: "Creates a balanced FI document, updates G/L account balances, and triggers document splitting to update segment and profit center statistical postings in real time.",
        whatSAPDoesAR: "ينشئ مستند محاسبة متوازن، ويحدّث أرصدة حسابات دفتر الأستاذ العام، ويُشغّل تقسيم المستند لتحديث القطاعات ومراكز الربح بشكل آني.",
        expectedOutputEN: "Posted FI journal entry document with document number assigned.",
        expectedOutputAR: "مستند قيد يومية مرحّل مع رقم مستند معيّن.",
      },
      {
        id: "fi-gl-financial-close-s2",
        stepNumber: 2,
        titleEN: "Carry Out Recurring Entries",
        titleAR: "تنفيذ القيود الدورية",
        tCode: "F.14",
        role: "GL Accountant",
        whatToDoEN: "Run T-code F.14 (Carry Out Recurring Entries). Select the company code and settlement period. Execute the program to generate and post recurring entry documents for the current period.",
        whatToDoAR: "شغّل رمز المعاملة F.14 (تنفيذ القيود الدورية). حدد رمز الشركة وفترة التسوية، ثم نفّذ البرنامج لإنشاء وترحيل مستندات القيود الدورية للفترة الحالية.",
        whatSAPDoesEN: "Automatically generates and posts journal entry documents for all active recurring entry templates within the selected settlement period.",
        whatSAPDoesAR: "ينشئ تلقائياً ويرحّل مستندات قيود اليومية لجميع قوالب القيود الدورية النشطة ضمن فترة التسوية المحددة.",
        expectedOutputEN: "Recurring entry documents posted for the period.",
        expectedOutputAR: "مستندات القيود الدورية مرحّلة للفترة.",
      },
      {
        id: "fi-gl-financial-close-s3",
        stepNumber: 3,
        titleEN: "Run Automatic Clearing",
        titleAR: "تشغيل التسوية التلقائية",
        tCode: "F.13",
        role: "GL Accountant",
        whatToDoEN: "Execute F.13 (Run Automatic Clearing). Specify the company code, account types (D/K/S), and posting date. The system clears open items that match based on the configured clearing criteria (assignment field).",
        whatToDoAR: "نفّذ F.13 (التسوية التلقائية). حدد رمز الشركة وأنواع الحسابات (D/K/S) وتاريخ الترحيل. يقوم النظام بتسوية البنود المفتوحة المتطابقة بناءً على معايير التسوية المُعدّة (حقل التخصيص).",
        whatSAPDoesEN: "Matches and clears open items across G/L, customer, and vendor accounts using configured automatic clearing rules. Creates clearing documents for matched items.",
        whatSAPDoesAR: "يطابق ويسوّي البنود المفتوحة في حسابات دفتر الأستاذ والعملاء والموردين باستخدام قواعد التسوية التلقائية. ينشئ مستندات تسوية للبنود المتطابقة.",
        expectedOutputEN: "Open items cleared; clearing documents generated.",
        expectedOutputAR: "تسوية البنود المفتوحة وإنشاء مستندات التسوية.",
      },
      {
        id: "fi-gl-financial-close-s4",
        stepNumber: 4,
        titleEN: "Perform Foreign Currency Valuation",
        titleAR: "إجراء تقييم العملة الأجنبية",
        tCode: "FAGL_FCV",
        role: "GL Accountant",
        whatToDoEN: "Run FAGL_FCV (Perform Foreign Currency Valuation). Select company code, valuation method IFRS, and the key date (last day of the period). Execute in test mode first, then post.",
        whatToDoAR: "شغّل FAGL_FCV (تقييم العملة الأجنبية). اختر رمز الشركة وطريقة التقييم IFRS وتاريخ المرجع (آخر يوم في الفترة). نفّذ في وضع الاختبار أولاً ثم ارحّل.",
        whatSAPDoesEN: "Revalues all open items and G/L account balances in foreign currency using the current exchange rate. Posts valuation adjustment documents to the relevant exchange rate difference accounts.",
        whatSAPDoesAR: "يُعيد تقييم جميع البنود المفتوحة وأرصدة حسابات دفتر الأستاذ بالعملة الأجنبية باستخدام سعر الصرف الحالي. يرحّل مستندات تسوية التقييم إلى حسابات فروق أسعار الصرف المعنية.",
        expectedOutputEN: "Foreign currency valuation documents posted; exchange rate differences recorded.",
        expectedOutputAR: "ترحيل مستندات تقييم العملة الأجنبية وتسجيل فروق أسعار الصرف.",
      },
      {
        id: "fi-gl-financial-close-s5",
        stepNumber: 5,
        titleEN: "Display Financial Statement",
        titleAR: "عرض البيانات المالية",
        tCode: "S_ALR_87012284",
        role: "GL Accountant",
        whatToDoEN: "Run S_ALR_87012284 (Display Financial Statement). Select the financial statement version, company code, and reporting period. Review the balance sheet and P&L to confirm balances are complete and accurate before closing.",
        whatToDoAR: "شغّل S_ALR_87012284 (عرض البيانات المالية). اختر نسخة القوائم المالية ورمز الشركة وفترة التقرير. راجع الميزانية العمومية وقائمة الأرباح والخسائر للتحقق من اكتمال الأرصدة ودقتها قبل الإغلاق.",
        whatSAPDoesEN: "Generates the financial statement report using the configured financial statement version, showing balance sheet and income statement with period and cumulative figures.",
        whatSAPDoesAR: "ينشئ تقرير القوائم المالية باستخدام نسخة القوائم المالية المُعدّة، ويعرض الميزانية العمومية وقائمة الدخل مع أرقام الفترة والأرقام التراكمية.",
        expectedOutputEN: "Financial statements displayed; period-end closing confirmed.",
        expectedOutputAR: "عرض البيانات المالية وتأكيد إغلاق نهاية الفترة.",
      },
      {
        id: "fi-gl-financial-close-s6",
        stepNumber: 6,
        titleEN: "Carry Forward Balances (Year-End)",
        titleAR: "ترحيل الأرصدة (إغلاق نهاية السنة)",
        tCode: "FAGLGVTR",
        role: "GL Accountant",
        whatToDoEN: "After all period-end steps are complete, run FAGLGVTR (Carry Forward Balances). Select the company code, ledger (0L), and the fiscal year to be carried forward. Execute the balance carryforward to open the new fiscal year.",
        whatToDoAR: "بعد اكتمال جميع خطوات إغلاق نهاية الفترة، شغّل FAGLGVTR (ترحيل الأرصدة). اختر رمز الشركة والدفتر (0L) والسنة المالية المراد ترحيلها. نفّذ ترحيل الأرصدة لفتح السنة المالية الجديدة.",
        whatSAPDoesEN: "Carries forward balance sheet account balances to the opening balance of the new fiscal year, and resets P&L account balances to zero by posting to the retained earnings account.",
        whatSAPDoesAR: "يُرحّل أرصدة حسابات الميزانية العمومية إلى الرصيد الافتتاحي للسنة المالية الجديدة، ويُعيد تصفير أرصدة حسابات الأرباح والخسائر بالترحيل إلى حساب الأرباح المحتجزة.",
        expectedOutputEN: "Balances carried forward; new fiscal year opened in the system.",
        expectedOutputAR: "تمت ترحيل الأرصدة وفتح السنة المالية الجديدة في النظام.",
      },
    ],
  },

  // ── FICO: Accounts Receivable ──────────────────────────────────────────────
  {
    id: "fi-accounts-receivable",
    icon: "💳",
    duration: "30-60 min",
    titleEN: "Accounts Receivable Management",
    titleAR: "إدارة حسابات المدينين",
    descriptionEN: "Manage open customer receivables, monitor due dates, post incoming payments, and reconcile customer invoices. Covers standard collection process, customer down payments, and AR reporting.",
    descriptionAR: "إدارة ذمم العملاء المفتوحة ومتابعة تواريخ الاستحقاق وترحيل المدفوعات الواردة ومطابقة فواتير العملاء. يغطي عملية التحصيل القياسية والدفعات المقدمة للعملاء وتقارير الذمم المدينة.",
    module: "FICO",
    roles: ["AR Accountant", "AR Manager"],
    steps: [
      {
        id: "fi-accounts-receivable-s1",
        stepNumber: 1,
        titleEN: "Display Customer Balances",
        titleAR: "عرض أرصدة العملاء",
        tCode: "FD10N",
        role: "AR Accountant",
        whatToDoEN: "Navigate to FD10N (Display Customer Balances). Enter the customer account number and company code. Review the customer's total balance, debit/credit totals, and period breakdown to identify overdue items.",
        whatToDoAR: "انتقل إلى FD10N (عرض أرصدة العملاء). أدخل رقم حساب العميل ورمز الشركة. راجع إجمالي رصيد العميل والمجاميع المدينة والدائنة والتوزيع حسب الفترات لتحديد البنود المتأخرة.",
        whatSAPDoesEN: "Displays the customer's account balance summary by period, showing all posted debit/credit transactions and the net balance.",
        whatSAPDoesAR: "يعرض ملخص رصيد حساب العميل حسب الفترة، مُظهراً جميع المعاملات المدينة والدائنة المرحّلة والرصيد الصافي.",
        expectedOutputEN: "Customer balance overview displayed; overdue amounts identified.",
        expectedOutputAR: "عرض نظرة عامة على رصيد العميل وتحديد المبالغ المتأخرة.",
      },
      {
        id: "fi-accounts-receivable-s2",
        stepNumber: 2,
        titleEN: "Manage Customer Line Items",
        titleAR: "إدارة بنود حساب العميل",
        tCode: "FBL5N",
        role: "AR Accountant",
        whatToDoEN: "Run FBL5N (Manage Customer Line Items). Select the customer account, company code, and line item status (open/cleared/all). Review the list of individual invoice and payment line items to determine collection priorities.",
        whatToDoAR: "شغّل FBL5N (إدارة بنود حساب العميل). اختر حساب العميل ورمز الشركة وحالة البنود (مفتوحة/مسوّاة/الكل). راجع قائمة بنود الفواتير والمدفوعات الفردية لتحديد أولويات التحصيل.",
        whatSAPDoesEN: "Lists all individual line items for the customer account with document date, due date, amount, and clearing status to support collection follow-up.",
        whatSAPDoesAR: "يُدرج جميع البنود الفردية لحساب العميل مع تاريخ المستند وتاريخ الاستحقاق والمبلغ وحالة التسوية لدعم متابعة التحصيل.",
        expectedOutputEN: "Customer line items listed; open invoices and due dates identified.",
        expectedOutputAR: "قائمة بنود العميل مع الفواتير المفتوحة وتواريخ الاستحقاق.",
      },
      {
        id: "fi-accounts-receivable-s3",
        stepNumber: 3,
        titleEN: "Post Incoming Payment",
        titleAR: "ترحيل الدفعة الواردة",
        tCode: "F-28",
        role: "AR Accountant",
        whatToDoEN: "Navigate to F-28 (Post Incoming Payments). Enter the bank account, value date, amount received, and select the customer account. In the line item selection screen, choose the open invoices to be cleared by this payment.",
        whatToDoAR: "انتقل إلى F-28 (ترحيل المدفوعات الواردة). أدخل الحساب البنكي وتاريخ القيمة والمبلغ المستلم واختر حساب العميل. في شاشة اختيار البنود، حدد الفواتير المفتوحة المراد تسويتها بهذه الدفعة.",
        whatSAPDoesEN: "Posts the incoming payment to the bank account and automatically clears the selected open customer invoices. Creates a payment document and updates the customer's account balance.",
        whatSAPDoesAR: "يرحّل الدفعة الواردة إلى الحساب البنكي ويسوّي تلقائياً فواتير العميل المفتوحة المحددة. ينشئ مستند دفعة ويحدّث رصيد حساب العميل.",
        expectedOutputEN: "Incoming payment posted; customer invoices cleared.",
        expectedOutputAR: "الدفعة الواردة مرحّلة وفواتير العميل مسوّاة.",
      },
      {
        id: "fi-accounts-receivable-s4",
        stepNumber: 4,
        titleEN: "Create Customer Down Payment Request",
        titleAR: "إنشاء طلب دفعة مقدمة من العميل",
        tCode: "F-37",
        role: "AR Accountant",
        whatToDoEN: "Use F-37 (Create Down Payment Request) when a customer down payment is expected before invoice. Enter customer account, amount, due date, and special G/L indicator F. This creates a noted item visible on the customer account.",
        whatToDoAR: "استخدم F-37 (إنشاء طلب دفعة مقدمة) عند توقع دفعة مقدمة من العميل قبل الفاتورة. أدخل حساب العميل والمبلغ وتاريخ الاستحقاق والمؤشر الخاص F. ينشئ هذا بنداً ملاحظاً مرئياً في حساب العميل.",
        whatSAPDoesEN: "Creates a noted item (special G/L item type F) on the customer account to track the expected down payment. Does not affect G/L balances until the actual payment is posted.",
        whatSAPDoesAR: "ينشئ بنداً ملاحظاً (نوع البند الخاص F) في حساب العميل لتتبع الدفعة المقدمة المتوقعة. لا يؤثر على أرصدة دفتر الأستاذ حتى يتم ترحيل الدفعة الفعلية.",
        expectedOutputEN: "Down payment request created on customer account.",
        expectedOutputAR: "طلب الدفعة المقدمة منشأ في حساب العميل.",
      },
      {
        id: "fi-accounts-receivable-s5",
        stepNumber: 5,
        titleEN: "Post Customer Down Payment",
        titleAR: "ترحيل الدفعة المقدمة من العميل",
        tCode: "F-29",
        role: "AR Accountant",
        whatToDoEN: "After receiving the down payment, run F-29 (Post Incoming Payments with special G/L). Select the customer, enter the amount, and choose special G/L indicator A. Clear the down payment request created in F-37.",
        whatToDoAR: "بعد استلام الدفعة المقدمة، شغّل F-29 (ترحيل المدفوعات الواردة بمؤشر دفتر الأستاذ الخاص). اختر العميل وأدخل المبلغ واختر مؤشر دفتر الأستاذ الخاص A. سوّ طلب الدفعة المقدمة المُنشأ في F-37.",
        whatSAPDoesEN: "Posts the customer down payment to a special reconciliation account and clears the down payment request. The amount is tracked separately until final invoice clearing.",
        whatSAPDoesAR: "يرحّل الدفعة المقدمة من العميل إلى حساب مقاصة خاص ويسوّي طلب الدفعة المقدمة. يُتابع المبلغ بشكل منفصل حتى تسوية الفاتورة النهائية.",
        expectedOutputEN: "Customer down payment posted to special G/L; reconciliation account updated.",
        expectedOutputAR: "الدفعة المقدمة مرحّلة في دفتر الأستاذ الخاص وحساب المقاصة محدّث.",
      },
    ],
  },

  // ── FICO: Accounts Payable ─────────────────────────────────────────────────
  {
    id: "fi-accounts-payable",
    icon: "🧾",
    duration: "1-2 hours",
    titleEN: "Accounts Payable Management",
    titleAR: "إدارة حسابات الدائنين",
    descriptionEN: "Record vendor invoices, prepare and execute payment runs, manage supplier down payments, and print payment documents. Covers the full AP cycle from invoice entry to payment.",
    descriptionAR: "تسجيل فواتير الموردين وإعداد دورات الدفع وتنفيذها وإدارة الدفعات المقدمة للموردين وطباعة مستندات الدفع. يغطي دورة الحسابات الدائنة الكاملة من إدخال الفاتورة إلى الدفع.",
    module: "FICO",
    roles: ["AP Accountant", "AP Manager"],
    steps: [
      {
        id: "fi-accounts-payable-s1",
        stepNumber: 1,
        titleEN: "Enter Manual Vendor Invoice",
        titleAR: "إدخال فاتورة المورد يدوياً",
        tCode: "FB60",
        role: "AP Accountant",
        whatToDoEN: "Navigate to FB60 (Create Incoming Invoice). Enter the vendor account, invoice date, posting date, amount, payment terms, and G/L expense account line items. Verify tax code and cost center assignments before saving.",
        whatToDoAR: "انتقل إلى FB60 (إنشاء فاتورة واردة). أدخل حساب المورد وتاريخ الفاتورة وتاريخ الترحيل والمبلغ وشروط الدفع وبنود حساب دفتر الأستاذ للمصروفات. تحقق من رمز الضريبة وتخصيصات مركز التكلفة قبل الحفظ.",
        whatSAPDoesEN: "Posts the vendor invoice to the vendor reconciliation account and the expense G/L account. Creates an open item in the vendor account with the due date calculated from payment terms.",
        whatSAPDoesAR: "يرحّل فاتورة المورد إلى حساب المقاصة للمورد وحساب دفتر الأستاذ للمصروفات. ينشئ بنداً مفتوحاً في حساب المورد مع تاريخ الاستحقاق المحسوب من شروط الدفع.",
        expectedOutputEN: "Vendor invoice posted; open item created in vendor account.",
        expectedOutputAR: "الفاتورة مرحّلة وبند مفتوح منشأ في حساب المورد.",
      },
      {
        id: "fi-accounts-payable-s2",
        stepNumber: 2,
        titleEN: "Review Supplier Line Items",
        titleAR: "مراجعة بنود حساب المورد",
        tCode: "FBL1N",
        role: "AP Accountant",
        whatToDoEN: "Run FBL1N (Manage Supplier Line Items). Select the vendor account and company code. Filter for open items to see all unpaid invoices and their due dates. Identify items approaching due date or with payment block.",
        whatToDoAR: "شغّل FBL1N (إدارة بنود حساب المورد). اختر حساب المورد ورمز الشركة. صفّ على البنود المفتوحة لمشاهدة جميع الفواتير غير المدفوعة وتواريخ استحقاقها. تعرّف على البنود المقتربة من تاريخ الاستحقاق أو ذات حظر الدفع.",
        whatSAPDoesEN: "Displays all individual line items in the vendor account with document date, due date, amount, and payment block indicator. Allows direct management of payment blocks.",
        whatSAPDoesAR: "يعرض جميع البنود الفردية في حساب المورد مع تاريخ المستند وتاريخ الاستحقاق والمبلغ ومؤشر حظر الدفع. يتيح الإدارة المباشرة لحظر الدفع.",
        expectedOutputEN: "Vendor line items reviewed; payment priorities identified.",
        expectedOutputAR: "مراجعة بنود المورد وتحديد أولويات الدفع.",
      },
      {
        id: "fi-accounts-payable-s3",
        stepNumber: 3,
        titleEN: "Schedule Payment Proposal",
        titleAR: "جدولة مقترح الدفع",
        tCode: "F110",
        role: "AP Accountant",
        whatToDoEN: "Run F110 (Manage Automatic Payments). On the Parameters tab, enter the run date, identification, payment methods (1=Check, 2=Transfer), and the next payment date. Save parameters and execute the payment proposal.",
        whatToDoAR: "شغّل F110 (إدارة المدفوعات التلقائية). في تبويب المعاملات أدخل تاريخ الدورة والمعرّف وطرق الدفع (1=شيك، 2=تحويل) وتاريخ الدفع التالي. احفظ المعاملات ونفّذ مقترح الدفع.",
        whatSAPDoesEN: "Proposes a list of open vendor items due for payment based on the configured payment terms and next payment date. Groups items by payment method and house bank.",
        whatSAPDoesAR: "يقترح قائمة بالبنود المفتوحة للموردين المستحقة للدفع بناءً على شروط الدفع المُعدّة وتاريخ الدفع التالي. يُجمّع البنود حسب طريقة الدفع والبنك الداخلي.",
        expectedOutputEN: "Payment proposal generated listing all due items.",
        expectedOutputAR: "إنشاء مقترح الدفع بقائمة جميع البنود المستحقة.",
      },
      {
        id: "fi-accounts-payable-s4",
        stepNumber: 4,
        titleEN: "Release & Execute Payment Run",
        titleAR: "اعتماد وتنفيذ دورة الدفع",
        tCode: "F110",
        role: "AP Manager",
        whatToDoEN: "In F110, review the payment proposal list. Remove or adjust any items as needed. Release the payment proposal and execute the payment run to post payment documents. Review the payment run log for any exceptions.",
        whatToDoAR: "في F110، راجع قائمة مقترح الدفع. احذف أي بنود أو عدّلها حسب الحاجة. أفرج عن مقترح الدفع ونفّذ دورة الدفع لترحيل مستندات الدفع. راجع سجل دورة الدفع لأي استثناءات.",
        whatSAPDoesEN: "Executes the payment run: posts payment documents to vendor accounts, clears the open invoices, updates bank clearing accounts, and creates check/transfer data ready for printing or transmission.",
        whatSAPDoesAR: "ينفّذ دورة الدفع: يرحّل مستندات الدفع في حسابات الموردين ويسوّي الفواتير المفتوحة ويحدّث حسابات المقاصة البنكية وينشئ بيانات الشيكات/التحويلات جاهزةً للطباعة أو الإرسال.",
        expectedOutputEN: "Payment documents posted; vendor invoices cleared; bank clearing updated.",
        expectedOutputAR: "مستندات الدفع مرحّلة وفواتير الموردين مسوّاة وحسابات المقاصة البنكية محدّثة.",
      },
      {
        id: "fi-accounts-payable-s5",
        stepNumber: 5,
        titleEN: "Print Payment Checks",
        titleAR: "طباعة شيكات الدفع",
        tCode: "FCH5",
        role: "AP Accountant",
        whatToDoEN: "Run FCH5 (Print Payment Forms). Select the payment run date and identification. Choose the check lot number range and print program. Execute the print run to generate check forms for each payment document.",
        whatToDoAR: "شغّل FCH5 (طباعة نماذج الدفع). اختر تاريخ دورة الدفع والمعرّف. اختر نطاق أرقام دفتر الشيكات وبرنامج الطباعة. نفّذ دورة الطباعة لإنشاء نماذج الشيكات لكل مستند دفع.",
        whatSAPDoesEN: "Generates and prints check documents for all payment items in the selected payment run. Updates check register with check number assignments. Void checks can be managed via FCH8.",
        whatSAPDoesAR: "ينشئ ويطبع مستندات الشيكات لجميع بنود الدفع في دورة الدفع المحددة. يحدّث سجل الشيكات بأرقام الشيكات المخصصة. يمكن إدارة إلغاء الشيكات عبر FCH8.",
        expectedOutputEN: "Checks printed and check register updated.",
        expectedOutputAR: "الشيكات مطبوعة وسجل الشيكات محدّث.",
      },
    ],
  },

  // ── FICO: Asset Accounting ─────────────────────────────────────────────────
  {
    id: "fi-asset-accounting",
    icon: "🏭",
    duration: "Variable",
    titleEN: "Asset Accounting",
    titleAR: "محاسبة الأصول الثابتة",
    descriptionEN: "Manage fixed asset transactions including direct acquisition, unplanned depreciation, asset retirement, and period/year-end closing. Asset Accounting is a subsidiary ledger of the General Ledger.",
    descriptionAR: "إدارة معاملات الأصول الثابتة بما في ذلك الاقتناء المباشر والإهلاك غير المخطط والتخلص من الأصول وإغلاق نهاية الفترة/السنة. محاسبة الأصول دفتر مساعد لدفتر الأستاذ العام.",
    module: "FICO",
    roles: ["Asset Accountant", "Financial Manager"],
    steps: [
      {
        id: "fi-asset-accounting-s1",
        stepNumber: 1,
        titleEN: "Direct Asset Acquisition (Integrated AP)",
        titleAR: "الاقتناء المباشر للأصل (متكامل مع الحسابات الدائنة)",
        tCode: "F-90",
        role: "Asset Accountant",
        whatToDoEN: "Use F-90 (Acquisition without Order) when an urgent asset purchase is approved by top management. Enter the asset number, vendor account, amount, and G/L account. Post the document to record the acquisition and the corresponding vendor payable simultaneously.",
        whatToDoAR: "استخدم F-90 (الاقتناء بدون أمر) عند الموافقة على شراء أصل عاجل من قِبل الإدارة العليا. أدخل رقم الأصل وحساب المورد والمبلغ وحساب دفتر الأستاذ. ارحّل المستند لتسجيل الاقتناء والذمة الدائنة للمورد المقابلة في آنٍ واحد.",
        whatSAPDoesEN: "Posts the asset acquisition to the asset subledger and simultaneously records the vendor payable in Accounts Payable. Updates asset net book value and cost center statistical postings.",
        whatSAPDoesAR: "يرحّل اقتناء الأصل في دفتر الأصول المساعد ويسجّل في الوقت ذاته الذمة الدائنة للمورد في الحسابات الدائنة. يحدّث القيمة الدفترية الصافية للأصل وترحيلات مركز التكلفة الإحصائية.",
        expectedOutputEN: "Asset acquisition posted; vendor open item created.",
        expectedOutputAR: "اقتناء الأصل مرحّل وبند مفتوح للمورد منشأ.",
      },
      {
        id: "fi-asset-accounting-s2",
        stepNumber: 2,
        titleEN: "Post Unplanned Depreciation",
        titleAR: "ترحيل الإهلاك غير المخطط",
        tCode: "ABAA",
        role: "Asset Accountant",
        whatToDoEN: "After receiving a technical report and financial manager approval for asset devaluation, run ABAA (Asset Unplanned Depreciation). Select the asset, enter the depreciation amount or percentage, and the reason for unplanned depreciation. Post the document.",
        whatToDoAR: "بعد استلام التقرير الفني وموافقة المدير المالي على خفض قيمة الأصل، شغّل ABAA (الإهلاك غير المخطط للأصل). اختر الأصل وأدخل مبلغ الإهلاك أو النسبة المئوية وسبب الإهلاك غير المخطط. ارحّل المستند.",
        whatSAPDoesEN: "Posts unplanned depreciation to the selected depreciation area. The amount reduces the asset's net book value. The depreciation is transferred to Financial Accounting during the next depreciation posting run (AFAB).",
        whatSAPDoesAR: "يرحّل الإهلاك غير المخطط في منطقة الإهلاك المحددة. يُخفّض المبلغ القيمة الدفترية الصافية للأصل. يُنقل الإهلاك إلى المحاسبة المالية خلال دورة ترحيل الإهلاك التالية (AFAB).",
        expectedOutputEN: "Unplanned depreciation posted; asset book value reduced.",
        expectedOutputAR: "الإهلاك غير المخطط مرحّل والقيمة الدفترية للأصل مُخفّضة.",
      },
      {
        id: "fi-asset-accounting-s3",
        stepNumber: 3,
        titleEN: "Asset Retirement by Scrapping",
        titleAR: "التخلص من الأصل بالإهلاك الكامل (خردة)",
        tCode: "ABAVN",
        role: "Asset Accountant",
        whatToDoEN: "After receiving a technical report and financial manager approval, run ABAVN (Post Asset Retirement by Scrapping). Select the asset and retirement date. Post the scrapping document. Use ZABAVN for the custom scrapping transaction.",
        whatToDoAR: "بعد استلام التقرير الفني وموافقة المدير المالي، شغّل ABAVN (ترحيل التخلص من الأصل بالإهلاك الكامل). اختر الأصل وتاريخ التخلص. ارحّل مستند الخردة. استخدم ZABAVN للمعاملة المخصصة.",
        whatSAPDoesEN: "Retires the asset from the asset portfolio with no revenue. Writes off the remaining net book value to the loss on asset retirement G/L account (70200104). Asset is removed from the balance sheet.",
        whatSAPDoesAR: "يُخرج الأصل من محفظة الأصول بدون عائد. يشطب القيمة الدفترية الصافية المتبقية إلى حساب خسارة التخلص من الأصل في دفتر الأستاذ (70200104). يُحذف الأصل من الميزانية العمومية.",
        expectedOutputEN: "Asset retired from books; remaining book value written off to loss account.",
        expectedOutputAR: "خروج الأصل من الدفاتر وشطب القيمة الدفترية المتبقية إلى حساب الخسارة.",
      },
      {
        id: "fi-asset-accounting-s4",
        stepNumber: 4,
        titleEN: "Run Depreciation Posting (Month-End)",
        titleAR: "تشغيل دورة الإهلاك (نهاية الشهر)",
        tCode: "AFAB",
        role: "Asset Accountant",
        whatToDoEN: "Run AFAB (Manage Depreciation Run) at month-end. Select the company code, fiscal year, and posting period. Execute in test mode first to preview the depreciation amounts, then run in Post mode to create actual depreciation documents.",
        whatToDoAR: "شغّل AFAB (إدارة دورة الإهلاك) في نهاية الشهر. اختر رمز الشركة والسنة المالية وفترة الترحيل. نفّذ في وضع الاختبار أولاً لمعاينة مبالغ الإهلاك، ثم شغّل في وضع الترحيل لإنشاء مستندات الإهلاك الفعلية.",
        whatSAPDoesEN: "Calculates and posts planned depreciation for all active assets in the selected period to the depreciation expense account (60400101) and accumulated depreciation account. Generates a depreciation posting document.",
        whatSAPDoesAR: "يحسب ويرحّل الإهلاك المخطط لجميع الأصول النشطة في الفترة المحددة إلى حساب مصروف الإهلاك (60400101) وحساب مجمع الإهلاك. ينشئ مستند ترحيل الإهلاك.",
        expectedOutputEN: "Depreciation posted for all active assets for the period.",
        expectedOutputAR: "الإهلاك مرحّل لجميع الأصول النشطة للفترة.",
      },
      {
        id: "fi-asset-accounting-s5",
        stepNumber: 5,
        titleEN: "Asset Year-End Closing",
        titleAR: "إغلاق السنة المالية للأصول",
        tCode: "AJAB",
        role: "Asset Accountant",
        whatToDoEN: "After all depreciation is posted and the G/L fiscal year change is done, run AJAB (AA Year-End Closing). Select the company code and fiscal year to be closed. Review the asset history sheet (S_ALR_87011990) and depreciation reports first, then execute the closing.",
        whatToDoAR: "بعد ترحيل جميع الإهلاك وإتمام تغيير السنة المالية لدفتر الأستاذ، شغّل AJAB (إغلاق السنة المالية للأصول). اختر رمز الشركة والسنة المالية المراد إغلاقها. راجع كشف تاريخ الأصول (S_ALR_87011990) وتقارير الإهلاك أولاً ثم نفّذ الإغلاق.",
        whatSAPDoesEN: "Closes the fiscal year for Asset Accounting, preventing further postings to that year. Prerequisites: all depreciation must be posted (AFAB) and the fiscal year change (FAGLGVTR) must be completed.",
        whatSAPDoesAR: "يُغلق السنة المالية لمحاسبة الأصول مانعاً أي ترحيلات إضافية لتلك السنة. المتطلبات المسبقة: يجب ترحيل جميع الإهلاك (AFAB) وإتمام تغيير السنة المالية (FAGLGVTR).",
        expectedOutputEN: "Fiscal year closed for Asset Accounting; new year opened for asset postings.",
        expectedOutputAR: "السنة المالية مغلقة لمحاسبة الأصول والسنة الجديدة مفتوحة لترحيلات الأصول.",
      },
    ],
  },

  // ── FICO: Asset External Purchasing ───────────────────────────────────────
  {
    id: "fi-asset-external-purchasing",
    icon: "🏗️",
    duration: "2-5 days",
    titleEN: "Asset External Purchasing",
    titleAR: "شراء الأصول الثابتة من الموردين",
    descriptionEN: "End-to-end process for purchasing fixed assets from external vendors via purchase order integration. Covers creating the asset master, PR release, goods receipt, invoice verification, and locking the asset after acquisition.",
    descriptionAR: "عملية شاملة لشراء الأصول الثابتة من موردين خارجيين عبر تكامل أمر الشراء. تشمل إنشاء السجل الرئيسي للأصل وإفراج طلب الشراء واستلام البضاعة والتحقق من الفاتورة وقفل الأصل بعد الاقتناء.",
    module: "FICO",
    roles: ["Asset Accountant", "Asset Receiving Employee", "AP Accountant"],
    steps: [
      {
        id: "fi-asset-external-purchasing-s1",
        stepNumber: 1,
        titleEN: "Check Asset Purchase Requisitions",
        titleAR: "مراجعة طلبات شراء الأصول",
        tCode: "ME5A",
        role: "Asset Accountant",
        whatToDoEN: "Run ME5A (Display Purchase Requisitions) to review open asset purchase requisitions. Filter by purchasing group 004 (Assets). Identify PRs that require an asset master to be created before release.",
        whatToDoAR: "شغّل ME5A (عرض طلبات الشراء) لمراجعة طلبات شراء الأصول المفتوحة. صفّ حسب مجموعة الشراء 004 (أصول). تعرّف على الطلبات التي تستلزم إنشاء سجل رئيسي للأصل قبل الإفراج.",
        whatSAPDoesEN: "Displays a list of open purchase requisitions with item category A (Asset), showing requested quantity, delivery date, and assigned purchasing group.",
        whatSAPDoesAR: "يعرض قائمة بطلبات الشراء المفتوحة بفئة البند A (أصل)، مُظهراً الكمية المطلوبة وتاريخ التسليم ومجموعة الشراء المخصصة.",
        expectedOutputEN: "Asset PRs reviewed; items requiring asset master creation identified.",
        expectedOutputAR: "مراجعة طلبات شراء الأصول وتحديد البنود التي تستلزم إنشاء سجل رئيسي للأصل.",
      },
      {
        id: "fi-asset-external-purchasing-s2",
        stepNumber: 2,
        titleEN: "Create Asset Master Record",
        titleAR: "إنشاء السجل الرئيسي للأصل",
        tCode: "AS01",
        role: "Asset Accountant",
        whatToDoEN: "Run AS01 (Create Asset Master Record). Select the appropriate asset class (e.g. Y14000 Plant & Machinery, Y15000 Transportation & Vehicles). Enter description, cost center, and evaluation groups. Note the generated asset number.",
        whatToDoAR: "شغّل AS01 (إنشاء السجل الرئيسي للأصل). اختر فئة الأصل المناسبة (مثل Y14000 المصانع والآلات، Y15000 وسائل النقل). أدخل الوصف ومركز التكلفة ومجموعات التقييم. لاحظ رقم الأصل المُنشأ.",
        whatSAPDoesEN: "Creates the asset master record in the selected asset class with all required organizational data. The system assigns a unique asset number based on the number range defined for the asset class.",
        whatSAPDoesAR: "ينشئ السجل الرئيسي للأصل في فئة الأصل المحددة مع جميع البيانات التنظيمية المطلوبة. يُخصّص النظام رقماً فريداً للأصل بناءً على نطاق الأرقام المُعرَّف لفئة الأصل.",
        expectedOutputEN: "Asset master record created; asset number assigned.",
        expectedOutputAR: "السجل الرئيسي للأصل منشأ ورقم الأصل مُخصَّص.",
      },
      {
        id: "fi-asset-external-purchasing-s3",
        stepNumber: 3,
        titleEN: "Update PR with Asset Number & Release",
        titleAR: "تحديث طلب الشراء برقم الأصل وإفراجه",
        tCode: "ME52N / ME54N",
        role: "Asset Accountant",
        whatToDoEN: "In ME52N (Change Purchase Requisition), enter the asset number created in AS01 into the account assignment field of the PR line item. Save the PR. Then release the PR using ME54N (Release Purchase Requisition).",
        whatToDoAR: "في ME52N (تعديل طلب الشراء)، أدخل رقم الأصل المُنشأ في AS01 في حقل تخصيص الحساب لبند طلب الشراء. احفظ الطلب. ثم أفرج عن الطلب باستخدام ME54N (إفراج طلب الشراء).",
        whatSAPDoesEN: "Updates the purchase requisition with the asset account assignment, ensuring GR will automatically post to the asset. The release strategy approval enables the PR to be converted to a purchase order.",
        whatSAPDoesAR: "يحدّث طلب الشراء بتخصيص حساب الأصل مضموناً أن استلام البضاعة سيُرحَّل تلقائياً إلى الأصل. تُتيح موافقة استراتيجية الإفراج تحويل الطلب إلى أمر شراء.",
        expectedOutputEN: "PR updated with asset number and released for PO conversion.",
        expectedOutputAR: "طلب الشراء محدّث برقم الأصل ومُفرَج للتحويل إلى أمر شراء.",
      },
      {
        id: "fi-asset-external-purchasing-s4",
        stepNumber: 4,
        titleEN: "Post Goods Receipt for Asset",
        titleAR: "ترحيل استلام البضاعة للأصل",
        tCode: "MIGO",
        role: "Asset Receiving Employee",
        whatToDoEN: "When the asset arrives, run MIGO (Post Goods Movement) with movement type 101 against the purchase order. Inspect the physical asset and verify serial number if applicable. Post the goods receipt document.",
        whatToDoAR: "عند وصول الأصل شغّل MIGO (ترحيل حركة البضاعة) بنوع الحركة 101 مقابل أمر الشراء. افحص الأصل المادي وتحقق من الرقم التسلسلي إن أمكن. ارحّل مستند استلام البضاعة.",
        whatSAPDoesEN: "Posts the goods receipt to the asset subledger, increasing the asset's acquisition value. Creates a GR/IR clearing entry. The asset is now capitalised in the system.",
        whatSAPDoesAR: "يرحّل استلام البضاعة في دفتر الأصول المساعد مُزيداً قيمة اقتناء الأصل. ينشئ قيد مقاصة استلام البضاعة/الفاتورة. رُسمل الأصل الآن في النظام.",
        expectedOutputEN: "Asset goods receipt posted; asset capitalised with acquisition value.",
        expectedOutputAR: "استلام بضاعة الأصل مرحّل والأصل مرسمل بقيمة الاقتناء.",
      },
      {
        id: "fi-asset-external-purchasing-s5",
        stepNumber: 5,
        titleEN: "Post Asset Vendor Invoice",
        titleAR: "ترحيل فاتورة المورد للأصل",
        tCode: "MIRO",
        role: "AP Accountant",
        whatToDoEN: "After receiving the original vendor invoice, PO document, and asset receipt, run MIRO (Create Supplier Invoice). Reference the purchase order, verify quantities and amounts, and post the invoice. Use AS05 to lock the asset from further acquisition postings if the purchase is complete.",
        whatToDoAR: "بعد استلام الفاتورة الأصلية للمورد ومستند أمر الشراء ومستند استلام الأصل، شغّل MIRO (إنشاء فاتورة المورد). استرجع أمر الشراء وتحقق من الكميات والمبالغ وارحّل الفاتورة. استخدم AS05 لقفل الأصل من ترحيلات اقتناء إضافية إذا اكتمل الشراء.",
        whatSAPDoesEN: "Clears the GR/IR clearing account and posts the vendor payable. The three-way match (PO / GR / Invoice) is verified automatically. After posting, AS05 locks the asset from further acquisition postings.",
        whatSAPDoesAR: "يُسوّي حساب مقاصة استلام البضاعة/الفاتورة ويرحّل الذمة الدائنة للمورد. يُتحقق تلقائياً من المطابقة الثلاثية (أمر الشراء/استلام البضاعة/الفاتورة). بعد الترحيل يقفل AS05 الأصل من ترحيلات اقتناء إضافية.",
        expectedOutputEN: "Vendor invoice posted; GR/IR cleared; asset acquisition complete.",
        expectedOutputAR: "الفاتورة مرحّلة ومقاصة استلام البضاعة/الفاتورة مسوّاة واقتناء الأصل مكتمل.",
      },
    ],
  },

  // ── FICO: Cash Journals ────────────────────────────────────────────────────
  {
    id: "fi-cash-journals",
    icon: "💵",
    duration: "15-30 min",
    titleEN: "Cash Journal (Petty Cash)",
    titleAR: "دفتر النقدية (الصندوق)",
    descriptionEN: "Record daily cash transactions in the petty cash journal, including payments to vendors/employees, receipts from customers, and check management. The cash journal is a subledger of Bank Accounting.",
    descriptionAR: "تسجيل المعاملات النقدية اليومية في دفتر النقدية، بما في ذلك المدفوعات للموردين/الموظفين والمقبوضات من العملاء وإدارة الشيكات. دفتر النقدية هو دفتر مساعد لمحاسبة البنوك.",
    module: "FICO",
    roles: ["Cashier", "Cash Manager"],
    steps: [
      {
        id: "fi-cash-journals-s1",
        stepNumber: 1,
        titleEN: "Record Cash Journal Payment",
        titleAR: "تسجيل مدفوعات دفتر النقدية",
        tCode: "FBCJ",
        role: "Cashier",
        whatToDoEN: "Open FBCJ (Cash Journal). Select the cash journal (1A49 - Petty Cash Admin). On the Payments tab, choose the predefined transaction type (e.g. 'صرف نقدى لمورد' for vendor payment or 'صرف عهد موظفين' for employee imprest). Enter the amount, G/L account or vendor number, and a description. Post the entry.",
        whatToDoAR: "افتح FBCJ (دفتر النقدية). اختر دفتر النقدية (1A49 - عهدة نقدية إدارية). في تبويب المدفوعات اختر نوع المعاملة المُعرَّف مسبقاً (مثل 'صرف نقدى لمورد' أو 'صرف عهد موظفين'). أدخل المبلغ ورقم حساب دفتر الأستاذ أو المورد وبياناً. ارحّل القيد.",
        whatSAPDoesEN: "Posts a cash payment: debits the G/L or vendor account and credits the petty cash account (10100101). Updates the daily cash journal totals and closing balance automatically.",
        whatSAPDoesAR: "يرحّل دفع نقدي: مدين في حساب دفتر الأستاذ أو المورد ودائن في حساب النقدية (10100101). يحدّث مجاميع دفتر النقدية اليومي والرصيد الختامي تلقائياً.",
        expectedOutputEN: "Cash payment recorded in journal; petty cash balance updated.",
        expectedOutputAR: "الدفع النقدي مسجّل في الدفتر ورصيد الصندوق محدّث.",
      },
      {
        id: "fi-cash-journals-s2",
        stepNumber: 2,
        titleEN: "Record Cash Receipt from Customer",
        titleAR: "تسجيل المقبوضات النقدية من العميل",
        tCode: "FBCJ",
        role: "Cashier",
        whatToDoEN: "In FBCJ on the Receipts tab, select transaction type 'أستلام نقدى من عميل'. Enter the customer account number and the amount received. Post the receipt.",
        whatToDoAR: "في FBCJ في تبويب المقبوضات اختر نوع المعاملة 'أستلام نقدى من عميل'. أدخل رقم حساب العميل والمبلغ المستلم. ارحّل المقبوضة.",
        whatSAPDoesEN: "Posts a cash receipt: debits the petty cash account and credits the customer receivable account. Clears or partially clears the customer's open invoice depending on the amount.",
        whatSAPDoesAR: "يرحّل مقبوضة نقدية: مدين في حساب النقدية ودائن في حساب الذمم المدينة للعميل. يسوّي أو يسوّي جزئياً الفاتورة المفتوحة للعميل حسب المبلغ.",
        expectedOutputEN: "Customer cash receipt posted; petty cash balance increased.",
        expectedOutputAR: "المقبوضة النقدية من العميل مرحّلة ورصيد الصندوق متزايد.",
      },
      {
        id: "fi-cash-journals-s3",
        stepNumber: 3,
        titleEN: "Record Check Receipt & Bank Deposit",
        titleAR: "تسجيل استلام الشيك وإيداعه بالبنك",
        tCode: "FBCJ",
        role: "Cashier",
        whatToDoEN: "In FBCJ, use transaction type 'أستلام شيك من عميل' to record the check receipt (debit cash, credit customer). When the check is presented to the bank, use 'إداع شيك عميل بالبنك' to transfer from the cash account to the bank incoming clearing account.",
        whatToDoAR: "في FBCJ استخدم نوع المعاملة 'أستلام شيك من عميل' لتسجيل استلام الشيك (مدين نقدية، دائن عميل). عند تقديم الشيك للبنك استخدم 'إداع شيك عميل بالبنك' للتحويل من حساب النقدية إلى حساب المقاصة الواردة للبنك.",
        whatSAPDoesEN: "Two-step process: first records the check receipt clearing the customer receivable, then records the bank deposit transferring the check value from the cash account to the bank incoming clearing account.",
        whatSAPDoesAR: "عملية من خطوتين: أولاً تسجيل استلام الشيك مع تسوية ذمة العميل، ثم تسجيل الإيداع البنكي بتحويل قيمة الشيك من النقدية إلى حساب المقاصة الواردة للبنك.",
        expectedOutputEN: "Check receipt and bank deposit recorded in cash journal.",
        expectedOutputAR: "استلام الشيك والإيداع البنكي مسجّلان في دفتر النقدية.",
      },
      {
        id: "fi-cash-journals-s4",
        stepNumber: 4,
        titleEN: "Verify Daily Cash Position",
        titleAR: "التحقق من المركز النقدي اليومي",
        role: "Cash Manager",
        whatToDoEN: "At end of day, the Cash Manager reviews the FBCJ journal to verify that opening balance + receipts - payments = closing balance. Confirm that the physical cash count matches the system closing balance.",
        whatToDoAR: "في نهاية اليوم، يراجع مدير النقدية دفتر FBCJ للتحقق من أن الرصيد الافتتاحي + المقبوضات - المدفوعات = الرصيد الختامي. تأكد من توافق عدّ النقدية الفعلي مع الرصيد الختامي في النظام.",
        whatSAPDoesEN: "FBCJ displays daily opening balance, all transactions, and closing balance with totals calculated automatically. Any discrepancy between the system and physical cash must be investigated and corrected.",
        whatSAPDoesAR: "يعرض FBCJ الرصيد الافتتاحي اليومي وجميع المعاملات والرصيد الختامي مع المجاميع المحسوبة تلقائياً. يجب التحقيق في أي فرق بين النظام والنقدية الفعلية وتصحيحه.",
        expectedOutputEN: "Daily cash journal balanced; physical cash verified against system balance.",
        expectedOutputAR: "دفتر النقدية اليومي متوازن والنقدية الفعلية محقّقة مقابل رصيد النظام.",
      },
    ],
  },

  // ── FICO: Bank Reconciliation ──────────────────────────────────────────────
  {
    id: "fi-bank-reconciliation",
    icon: "🏦",
    duration: "1-2 hours",
    titleEN: "Bank Reconciliation",
    titleAR: "المطابقة البنكية",
    descriptionEN: "Record and reconcile bank statements, post bank loans and facilities, and clear bank clearing accounts. Ensures the G/L bank account balances match the physical bank statement.",
    descriptionAR: "تسجيل ومطابقة كشوفات الحسابات البنكية وترحيل القروض والتسهيلات البنكية وتسوية حسابات المقاصة البنكية. تضمن توافق أرصدة حسابات البنوك في دفتر الأستاذ مع كشف الحساب البنكي الفعلي.",
    module: "FICO",
    roles: ["Bank Accountant", "AR Accountant", "AP Accountant"],
    steps: [
      {
        id: "fi-bank-reconciliation-s1",
        stepNumber: 1,
        titleEN: "Prepare Bank Statement",
        titleAR: "إعداد كشف الحساب البنكي",
        role: "Bank Accountant",
        whatToDoEN: "Receive the bank statement by email or online banking. Prepare it in the SAP upload format, mapping each line to the configured bank transaction codes: BT01 (Incoming Checks), BT02 (Incoming Transfer), BT04 (Outgoing Checks), BT05 (Outgoing Transfer), BT07 (Loans), BT08 (Bank Charges).",
        whatToDoAR: "استلم كشف الحساب البنكي عبر البريد الإلكتروني أو الخدمات المصرفية الإلكترونية. جهّزه بتنسيق رفع SAP، مُعيّناً كل سطر لرموز المعاملات البنكية المُعدّة: BT01 (شيكات واردة)، BT02 (تحويل وارد)، BT04 (شيكات صادرة)، BT05 (تحويل صادر)، BT07 (قروض)، BT08 (رسوم بنكية).",
        whatSAPDoesEN: "N/A — this step is a manual preparation activity prior to SAP entry.",
        whatSAPDoesAR: "لا ينطبق — هذه الخطوة نشاط تحضير يدوي قبل الإدخال في SAP.",
        expectedOutputEN: "Bank statement prepared and formatted for SAP upload.",
        expectedOutputAR: "كشف الحساب البنكي مُعدّ ومُنسَّق لرفعه إلى SAP.",
      },
      {
        id: "fi-bank-reconciliation-s2",
        stepNumber: 2,
        titleEN: "Record Manual Bank Statement",
        titleAR: "تسجيل كشف الحساب البنكي يدوياً",
        tCode: "FF67",
        role: "Bank Accountant",
        whatToDoEN: "Navigate to FF67 (Manage Bank Statements). Select the house bank and account ID. Enter the statement date, opening balance, and individual bank statement lines using the configured transaction codes. Save the bank statement.",
        whatToDoAR: "انتقل إلى FF67 (إدارة كشوفات الحسابات البنكية). اختر البنك الداخلي ومعرّف الحساب. أدخل تاريخ الكشف والرصيد الافتتاحي وسطور كشف الحساب البنكي الفردية باستخدام رموز المعاملات المُعدّة. احفظ كشف الحساب.",
        whatSAPDoesEN: "Records the bank statement in SAP and attempts automatic clearing for items already in the system (e.g. outgoing payments). Unmatched items are flagged for manual post-processing.",
        whatSAPDoesAR: "يسجّل كشف الحساب البنكي في SAP ويحاول التسوية التلقائية للبنود الموجودة في النظام (مثل المدفوعات الصادرة). تُعلَّم البنود غير المتطابقة للمعالجة اليدوية اللاحقة.",
        expectedOutputEN: "Bank statement recorded; automatically matched items cleared.",
        expectedOutputAR: "كشف الحساب البنكي مسجّل والبنود المتطابقة تلقائياً مسوّاة.",
      },
      {
        id: "fi-bank-reconciliation-s3",
        stepNumber: 3,
        titleEN: "Post-Process Bank Statement Items",
        titleAR: "معالجة بنود كشف الحساب البنكي لاحقاً",
        tCode: "FEBA_BANK_STATEMENT",
        role: "Bank Accountant",
        whatToDoEN: "Run FEBA_BANK_STATEMENT (Reprocess Bank Statement Items). Review unprocessed bank statement lines. For each item, post the appropriate FI document by selecting the correct G/L account or open item to clear. Repeat until all lines are processed.",
        whatToDoAR: "شغّل FEBA_BANK_STATEMENT (إعادة معالجة بنود كشف الحساب البنكي). راجع سطور الكشف غير المعالجة. لكل بند ارحّل مستند المحاسبة المناسب باختيار حساب دفتر الأستاذ الصحيح أو البند المفتوح المراد تسويته. كرّر حتى تتم معالجة جميع السطور.",
        whatSAPDoesEN: "Provides a worklist of unprocessed bank statement items. For each item, allows posting a clearing document that links the bank statement line to the corresponding open item in G/L or subledger.",
        whatSAPDoesAR: "يوفر قائمة عمل ببنود كشف الحساب البنكي غير المعالجة. لكل بند يتيح ترحيل مستند تسوية يربط سطر الكشف البنكي بالبند المفتوح المقابل في دفتر الأستاذ أو الدفتر المساعد.",
        expectedOutputEN: "All bank statement items processed; no unresolved exceptions remaining.",
        expectedOutputAR: "معالجة جميع بنود كشف الحساب البنكي ولا استثناءات غير محلولة متبقية.",
      },
      {
        id: "fi-bank-reconciliation-s4",
        stepNumber: 4,
        titleEN: "Clear Bank Clearing Accounts",
        titleAR: "تسوية حسابات المقاصة البنكية",
        tCode: "F-03",
        role: "Bank Accountant",
        whatToDoEN: "Run F-03 (Clear G/L Accounts) for the bank incoming and outgoing clearing accounts. The AR Accountant clears the incoming clearing account; the AP Accountant clears the outgoing clearing account. Match open items by amount and reference to complete the reconciliation.",
        whatToDoAR: "شغّل F-03 (تسوية حسابات دفتر الأستاذ) لحسابات المقاصة البنكية الواردة والصادرة. يسوّي محاسب الذمم المدينة حساب المقاصة الوارد ويسوّي محاسب الذمم الدائنة حساب المقاصة الصادر. طابق البنود المفتوحة حسب المبلغ والمرجع لإتمام المطابقة.",
        whatSAPDoesEN: "Clears open items in the bank clearing accounts by matching debits and credits. Creates a clearing document that removes the items from the open item list. G/L bank account balance should now equal the bank statement closing balance.",
        whatSAPDoesAR: "يسوّي البنود المفتوحة في حسابات المقاصة البنكية بمطابقة المدينة والدائنة. ينشئ مستند تسوية يُزيل البنود من قائمة البنود المفتوحة. يجب أن يتساوى رصيد حساب البنك في دفتر الأستاذ الآن مع الرصيد الختامي في كشف الحساب البنكي.",
        expectedOutputEN: "Bank clearing accounts cleared; G/L balance matches bank statement.",
        expectedOutputAR: "حسابات المقاصة البنكية مسوّاة ورصيد دفتر الأستاذ مطابق لكشف الحساب البنكي.",
      },
    ],
  },

  // ── FICO: Cash Management ──────────────────────────────────────────────────
  {
    id: "fi-cash-management",
    icon: "💹",
    duration: "15-30 min",
    titleEN: "Cash Position & Liquidity Management",
    titleAR: "إدارة المركز النقدي والسيولة",
    descriptionEN: "Monitor real-time cash position across all bank accounts and generate liquidity forecasts. Cash Management is fed by all FI modules, MM Purchase Orders, and SD Sales Orders.",
    descriptionAR: "متابعة المركز النقدي الفوري عبر جميع الحسابات البنكية وإعداد توقعات السيولة. تُغذّي إدارة النقدية جميع وحدات المحاسبة المالية وأوامر الشراء في إدارة المواد وأوامر المبيعات في المبيعات والتوزيع.",
    module: "FICO",
    roles: ["Cash Manager"],
    steps: [
      {
        id: "fi-cash-management-s1",
        stepNumber: 1,
        titleEN: "Display Cash Position",
        titleAR: "عرض المركز النقدي",
        tCode: "FF7AN",
        role: "Cash Manager",
        whatToDoEN: "Run FF7AN (Display Cash Position). Select the company code and date range. The report shows current bank account balances grouped by planning level: F0 (Main Bank), B1 (Incoming Checks), B2 (Incoming Transfer), B4 (Outgoing Checks), B5 (Outgoing Transfer), B9 (Letter of Guarantee), B10 (Letter of Credit).",
        whatToDoAR: "شغّل FF7AN (عرض المركز النقدي). اختر رمز الشركة ونطاق التاريخ. يعرض التقرير أرصدة الحسابات البنكية الحالية مُجمَّعةً حسب مستوى التخطيط: F0 (البنك الرئيسي)، B1 (شيكات واردة)، B2 (تحويل وارد)، B4 (شيكات صادرة)، B5 (تحويل صادر)، B9 (خطاب ضمان)، B10 (اعتماد مستندي).",
        whatSAPDoesEN: "Displays a real-time summary of bank account balances from all posted bank transactions, broken down by bank account and planning level. Includes expected inflows and outflows from open payment items.",
        whatSAPDoesAR: "يعرض ملخصاً فورياً لأرصدة الحسابات البنكية من جميع المعاملات البنكية المرحّلة، مُصنَّفةً حسب الحساب البنكي ومستوى التخطيط. يشمل التدفقات الواردة والصادرة المتوقعة من بنود الدفع المفتوحة.",
        expectedOutputEN: "Cash position overview displayed for all bank accounts.",
        expectedOutputAR: "عرض نظرة عامة على المركز النقدي لجميع الحسابات البنكية.",
      },
      {
        id: "fi-cash-management-s2",
        stepNumber: 2,
        titleEN: "Display Liquidity Forecast",
        titleAR: "عرض توقعات السيولة",
        tCode: "FF7BN",
        role: "Cash Manager",
        whatToDoEN: "Run FF7BN (Display Liquidity Forecast). Select company code and a future date range (next 30 or 90 days). The report aggregates expected cash flows from open vendor invoices (M-level), sales orders (S-level), and other planned items to project future liquidity.",
        whatToDoAR: "شغّل FF7BN (عرض توقعات السيولة). اختر رمز الشركة ونطاق تاريخ مستقبلي (30 أو 90 يوماً التالية). يُجمّع التقرير التدفقات النقدية المتوقعة من الفواتير المفتوحة للموردين (المستوى M) وأوامر المبيعات (المستوى S) والبنود المخططة الأخرى للتنبؤ بالسيولة المستقبلية.",
        whatSAPDoesEN: "Generates a forward-looking liquidity forecast by aggregating open items from AP, AR, MM purchase orders, and SD sales orders. Helps the Cash Manager identify future liquidity gaps or surpluses and plan accordingly.",
        whatSAPDoesAR: "ينشئ توقعات سيولة مستقبلية بتجميع البنود المفتوحة من الحسابات الدائنة والمدينة وأوامر الشراء في إدارة المواد وأوامر المبيعات. يساعد مدير النقدية على تحديد الفجوات أو الفوائض النقدية المستقبلية والتخطيط وفقاً لذلك.",
        expectedOutputEN: "Liquidity forecast generated; future cash needs identified.",
        expectedOutputAR: "توقعات السيولة منشأة واحتياجات النقدية المستقبلية محدّدة.",
      },
    ],
  },

];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Total step count for a process */
export function processStepCount(p: Process): number {
  return p.steps.length;
}

/** All unique roles across all processes */
export const allProcessRoles: string[] = Array.from(
  new Set(processes.flatMap((p) => p.roles))
).sort();
