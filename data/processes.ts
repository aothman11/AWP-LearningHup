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
}

export interface Process {
  id: string;
  icon: string;
  duration: string;
  titleEN: string;
  titleAR: string;
  descriptionEN: string;
  descriptionAR: string;
  module: "PP" | "QM";
  roles: string[];
  steps: ProcessStep[];
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
    module: "PP",
    roles: ["Warehouse", "PP Planner"],
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

  // ── 5. Quota Arrangement ─────────────────────────────────────────────────
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
    module: "PP",
    roles: ["PP Planner", "Farm Coordinator"],
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
