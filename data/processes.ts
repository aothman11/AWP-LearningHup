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
  HCM:  "Human Capital Management",
  FICO: "Finance & Controlling",
  TM:   "Transportation Management",
  EHS:  "Environment, Health & Safety",
};

/** Display order for module groups in the Processes tab */
export const MODULE_ORDER: ProcessModule[] = [
  "PP", "QM", "MM", "PM", "HCM", "FICO", "TM", "EHS",
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
