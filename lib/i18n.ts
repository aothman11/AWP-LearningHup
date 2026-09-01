"use client";

import { useLang } from "@/context/LangContext";

// ─── Translation dictionary ──────────────────────────────────────────────────
export const translations = {
  // Header
  "header.title": { EN: "PP/QM Knowledge", AR: "دليل PP/QM" },
  "header.subtitle": { EN: "Production Planning & Quality Management", AR: "دليل وحدات الإنتاج وإدارة الجودة" },
  "header.shortcuts": { EN: "Shortcuts", AR: "اختصارات" },
  "header.exportPdf": { EN: "Export PDF", AR: "تصدير PDF" },
  "header.filters": { EN: "Filters", AR: "تصفية" },
  "header.switchLang": { EN: "Switch language", AR: "تبديل اللغة" },

  // Tab bar
  "tabs.tcodes": { EN: "T-Code Reference", AR: "مرجع رموز المعاملات" },
  "tabs.integrations": { EN: "PP Integrations", AR: "تكاملات PP" },
  "tabs.tables": { EN: "Database Tables", AR: "جداول قاعدة البيانات" },
  "tabs.flow": { EN: "Process Flow", AR: "تدفق العملية" },
  "tabs.saved": { EN: "Saved", AR: "المحفوظات" },
  "tabs.paths": { EN: "Learning Paths", AR: "مسارات التعلم" },
  "tabs.compare": { EN: "Compare", AR: "مقارنة" },

  // Stat bar
  "stats.total": { EN: "Total Entries", AR: "إجمالي الإدخالات" },
  "stats.high": { EN: "High", AR: "مرتفعة" },

  // Filters
  "filters.title": { EN: "Filters", AR: "عوامل التصفية" },
  "filters.clearAll": { EN: "Clear all", AR: "مسح الكل" },
  "filters.module": { EN: "Module", AR: "الوحدة" },
  "filters.category": { EN: "Category", AR: "الفئة" },
  "filters.relevance": { EN: "Relevance", AR: "الصلة" },
  "filters.keywords": { EN: "Keywords", AR: "الكلمات المفتاحية" },
  "filters.moreFilters": { EN: "More filters", AR: "مزيد من التصفية" },
  "filters.activeFilters": { EN: "Active filters", AR: "التصفية النشطة" },
  "filters.contentStatus": { EN: "Content", AR: "المحتوى" },
  "filters.all": { EN: "All", AR: "الكل" },
  "filters.sidebar.collapse": { EN: "Collapse sidebar", AR: "طي الشريط الجانبي" },
  "filters.sidebar.expand": { EN: "Expand sidebar", AR: "توسيع الشريط الجانبي" },

  // Search
  "search.placeholder": { EN: "Search T-codes, titles, keywords… ( / )", AR: "ابحث عن رموز المعاملات أو العناوين أو الكلمات المفتاحية… ( / )" },
  "search.sortBy": { EN: "Sort by", AR: "ترتيب حسب" },
  "search.sort.module": { EN: "Module", AR: "الوحدة" },
  "search.sort.category": { EN: "Category", AR: "الفئة" },
  "search.sort.tcode": { EN: "T-code", AR: "رمز المعاملة" },
  "search.sort.relevance": { EN: "Relevance", AR: "الصلة" },

  // Result summary
  "results.count": { EN: "results", AR: "نتائج" },
  "results.of": { EN: "of", AR: "من" },
  "results.entries": { EN: "entries", AR: "إدخال" },
  "results.matching": { EN: "matching", AR: "تطابق مع" },
  "results.module": { EN: "module", AR: "وحدة" },

  // No-results
  "noResults.title": { EN: "No results", AR: "لا نتائج" },
  "noResults.body": { EN: "Try adjusting filters or search terms.", AR: "حاول تعديل عوامل التصفية أو مصطلحات البحث." },
  "noResults.resetAll": { EN: "Reset all filters", AR: "إعادة ضبط جميع عوامل التصفية" },
  "noResults.activeFilters": { EN: "Active filters:", AR: "عوامل التصفية النشطة:" },

  // Favorites
  "favorites.title": { EN: "Favorites", AR: "المفضلة" },
  "favorites.add": { EN: "Add to favorites", AR: "إضافة إلى المفضلة" },
  "favorites.remove": { EN: "Remove from favorites", AR: "إزالة من المفضلة" },

  // Card
  "card.sapDocs": { EN: "SAP Docs", AR: "وثائق SAP" },
  "card.docPending": { EN: "Doc pending", AR: "الوثائق قيد الانتظار" },
  "card.related": { EN: "Related:", AR: "ذات صلة:" },

  // Drawer
  "drawer.copyTcode": { EN: "Copy T-code", AR: "نسخ رمز المعاملة" },
  "drawer.copied": { EN: "Copied", AR: "تم النسخ" },
  "drawer.close": { EN: "Close", AR: "إغلاق" },
  "drawer.description": { EN: "Description", AR: "الوصف" },
  "drawer.whenToUse": { EN: "When to Use", AR: "متى تستخدمه" },
  "drawer.prerequisites": { EN: "Prerequisites", AR: "المتطلبات المسبقة" },
  "drawer.howToUse": { EN: "How to Use", AR: "كيفية الاستخدام" },
  "drawer.keyFields": { EN: "Key Fields", AR: "الحقول الأساسية" },
  "drawer.output": { EN: "Output / Result", AR: "النتيجة / المخرج" },
  "drawer.commonMistakes": { EN: "Common Mistakes", AR: "الأخطاء الشائعة" },
  "drawer.whatNext": { EN: "What to Do Next", AR: "ما الخطوة التالية" },
  "drawer.details": { EN: "Details", AR: "التفاصيل" },
  "drawer.processArea": { EN: "Process Area", AR: "منطقة العملية" },
  "drawer.module": { EN: "Module", AR: "الوحدة" },
  "drawer.category": { EN: "Category", AR: "الفئة" },
  "drawer.relatedTcodes": { EN: "Related T-Codes", AR: "رموز المعاملات ذات الصلة" },
  "drawer.tags": { EN: "Tags", AR: "الكلمات المفتاحية" },
  "drawer.notes": { EN: "Notes", AR: "ملاحظات" },
  "drawer.sapDocumentation": { EN: "SAP Documentation", AR: "وثائق SAP" },
  "drawer.openDocs": { EN: "Open Official Documentation", AR: "فتح الوثائق الرسمية" },
  "drawer.sapHelpPortal": { EN: "SAP Help Portal", AR: "بوابة مساعدة SAP" },
  "drawer.lastVerified": { EN: "Last verified:", AR: "آخر تحقق:" },
  "drawer.docPending": { EN: "Doc link pending verification", AR: "رابط الوثيقة قيد التحقق" },
  "drawer.saveToWorkspace": { EN: "Save to workspace", AR: "حفظ في مساحة العمل" },

  // Content status
  "status.quickReference": { EN: "Quick Reference", AR: "مرجع سريع" },
  "status.detailedGuide": { EN: "Detailed Guide", AR: "دليل مفصل" },
  "status.inProgress": { EN: "In Progress", AR: "قيد التطوير" },
  "status.filter.all": { EN: "All content", AR: "كل المحتوى" },
  "status.filter.detailedGuide": { EN: "Detailed guides only", AR: "الأدلة المفصلة فقط" },
  "status.filter.excludeInProgress": { EN: "Exclude in-progress", AR: "استثناء قيد التطوير" },

  // Keyboard shortcuts
  "shortcuts.title": { EN: "Keyboard Shortcuts", AR: "اختصارات لوحة المفاتيح" },
  "shortcuts.focusSearch": { EN: "Focus search", AR: "التركيز على البحث" },
  "shortcuts.closeDrawer": { EN: "Close drawer / blur search", AR: "إغلاق اللوحة / البحث" },
  "shortcuts.toggleShortcuts": { EN: "Toggle this shortcut panel", AR: "تبديل لوحة الاختصارات" },

  // Saved workspace
  "saved.title": { EN: "Saved Workspace", AR: "مساحة العمل المحفوظة" },
  "saved.empty.title": { EN: "Nothing saved yet", AR: "لا توجد حفظات بعد" },
  "saved.empty.body": { EN: "Save T-codes to workspace from the catalog.", AR: "احفظ رموز المعاملات من الفهرس." },
  "saved.newCollection": { EN: "New collection", AR: "مجموعة جديدة" },
  "saved.defaultCollection": { EN: "Saved", AR: "محفوظات" },
  "saved.rename": { EN: "Rename", AR: "إعادة تسمية" },
  "saved.delete": { EN: "Delete", AR: "حذف" },
  "saved.remove": { EN: "Remove", AR: "إزالة" },
  "saved.addToCollection": { EN: "Add to collection", AR: "إضافة إلى مجموعة" },
  "saved.collectionName": { EN: "Collection name", AR: "اسم المجموعة" },
  "saved.create": { EN: "Create", AR: "إنشاء" },
  "saved.cancel": { EN: "Cancel", AR: "إلغاء" },
  "saved.entries": { EN: "entries", AR: "إدخال" },
  "saved.entry": { EN: "entry", AR: "إدخال" },
  "saved.confirmDelete": { EN: "Delete this collection?", AR: "حذف هذه المجموعة؟" },
  "saved.savePopover.title": { EN: "Save to workspace", AR: "حفظ في مساحة العمل" },
  "saved.savePopover.selectCollection": { EN: "Choose a collection", AR: "اختر مجموعة" },
  "saved.savePopover.newCollection": { EN: "New collection…", AR: "مجموعة جديدة…" },
  "saved.savePopover.done": { EN: "Done", AR: "تم" },

  // Learning paths
  "paths.title": { EN: "Learning Paths", AR: "مسارات التعلم" },
  "paths.subtitle": { EN: "Structured guides by role", AR: "أدلة منظمة حسب الدور" },
  "paths.progress": { EN: "progress", AR: "تقدم" },
  "paths.steps": { EN: "steps", AR: "خطوات" },
  "paths.duration": { EN: "Estimated time", AR: "الوقت المقدر" },
  "paths.startPath": { EN: "Start path", AR: "بدء المسار" },
  "paths.continuePath": { EN: "Continue", AR: "متابعة" },
  "paths.resetPath": { EN: "Reset", AR: "إعادة ضبط" },
  "paths.completed": { EN: "Completed", AR: "مكتمل" },
  "paths.markDone": { EN: "Mark complete", AR: "تحديد كمكتمل" },
  "paths.markUndone": { EN: "Mark incomplete", AR: "تحديد كغير مكتمل" },

  // Compare
  "compare.title": { EN: "Compare T-codes", AR: "مقارنة رموز المعاملات" },
  "compare.subtitle": { EN: "Side-by-side reference for similar transactions", AR: "مرجع مقارن لمعاملات متشابهة" },
  "compare.useCase": { EN: "Use Case", AR: "حالة الاستخدام" },
  "compare.scope": { EN: "Scope", AR: "النطاق" },
  "compare.typicalUser": { EN: "Typical User", AR: "المستخدم النموذجي" },
  "compare.outcome": { EN: "Outcome", AR: "النتيجة" },
  "compare.related": { EN: "Related", AR: "ذات صلة" },

  // Process flow
  "flow.clickToOpen": { EN: "Click to view details", AR: "انقر لعرض التفاصيل" },

  // Hub tabs
  "hub.tabs.tcodes":    { EN: "T-Codes",       AR: "رموز المعاملات" },
  "hub.tabs.critical":  { EN: "Command Centre", AR: "مركز القيادة" },
  "hub.tabs.processes": { EN: "Processes",     AR: "العمليات" },
  "hub.tabs.paths":     { EN: "Learning Paths",AR: "مسارات التعلم" },
  "hub.tabs.completed": { EN: "Completed",     AR: "المكتملة" },

  // Process onboarding — tab header
  "proc.heading":        { EN: "Choose a Process",                     AR: "اختر عملية" },
  "proc.subheading":     { EN: "Follow each process from start to finish, track your progress, and earn a certificate — your guided onboarding to SAP PP/QM at Al-Watania Poultry.", AR: "اتبع كل عملية من البداية إلى النهاية، تتبع تقدمك، واحصل على شهادة — دليلك التدريبي لنظام SAP PP/QM في الوطنية للدواجن." },
  "proc.step1":          { EN: "STEP 1",                               AR: "الخطوة 1" },

  // Process cards
  "proc.filter.all":    { EN: "All",            AR: "الكل" },
  "proc.steps":         { EN: "steps",          AR: "خطوات" },
  "proc.start":         { EN: "Start",          AR: "ابدأ" },
  "proc.review":        { EN: "Review",         AR: "مراجعة" },
  "proc.completed":     { EN: "Completed",      AR: "مكتملة" },
  "proc.search.placeholder": {
    EN: "Search processes or T-codes…",
    AR: "ابحث عن العمليات أو رموز T-Code…",
  },
  "proc.noResults.title": { EN: "No processes found.", AR: "لم يتم العثور على عمليات." },
  "proc.noResults.body":  { EN: "Try a different search.", AR: "جرب بحثاً مختلفاً." },
  "proc.foundInStep":     { EN: "Found in Step", AR: "وُجد في الخطوة" },

  // Process detail view
  "proc.detail.back":        { EN: "← Back",          AR: "← العودة" },
  "proc.detail.stepOf":      { EN: "of",              AR: "من" },
  "proc.detail.step":        { EN: "Step",            AR: "الخطوة" },
  "proc.detail.role":        { EN: "Role",            AR: "الدور" },
  "proc.detail.whatToDo":    { EN: "What to do",      AR: "ماذا تفعل" },
  "proc.detail.whatSAPDoes": { EN: "What SAP does",   AR: "ما يفعله SAP" },
  "proc.detail.output":      { EN: "Expected output", AR: "المخرج المتوقع" },
  "proc.detail.markDone":    { EN: "✓ Mark as Done",  AR: "✓ تحديد كمكتمل" },
  "proc.detail.markUndone":  { EN: "Undo",            AR: "تراجع" },
  "proc.detail.yes":         { EN: "Yes →",           AR: "نعم →" },
  "proc.detail.no":          { EN: "No →",            AR: "لا →" },
  "proc.detail.guided":      { EN: "Guided Mode",     AR: "الوضع الإرشادي" },
  "proc.detail.next":        { EN: "Next Step →",     AR: "الخطوة التالية →" },
  "proc.detail.decision":    { EN: "Decision Point",  AR: "نقطة قرار" },

  // Chat
  "proc.chat.button":   { EN: "Ask about this process", AR: "اسأل عن هذه العملية" },
  "proc.chat.send":     { EN: "Send",    AR: "إرسال" },
  "proc.chat.clear":    { EN: "Clear",   AR: "مسح" },
  "proc.chat.close":    { EN: "Close",   AR: "إغلاق" },
  "proc.chat.placeholder": {
    EN: "Ask about any step or T-code…",
    AR: "اسأل عن أي خطوة أو رمز T-Code…",
  },
  "proc.chat.error":    {
    EN: "Could not reach the assistant. Please try again.",
    AR: "تعذر الوصول إلى المساعد. يرجى المحاولة مرة أخرى.",
  },
  "proc.chat.title":    { EN: "Process Assistant", AR: "مساعد العمليات" },

  // Completed tab
  "completed.empty.title": { EN: "Nothing completed yet",  AR: "لم يكتمل شيء بعد" },
  "completed.empty.body":  { EN: "Mark steps as done in a process to see it here.", AR: "قم بتحديد الخطوات كمكتملة في عملية لتظهر هنا." },

  // General
  "general.sapDocs": { EN: "SAP Docs", AR: "وثائق SAP" },
  "general.back": { EN: "Back to Logbook", AR: "العودة إلى السجل" },
  "general.backAll": { EN: "Back to all entries", AR: "العودة إلى جميع الإدخالات" },
  "general.notFound": { EN: "Not Found", AR: "غير موجود" },
  "general.loading": { EN: "Loading…", AR: "جار التحميل…" },
} as const;

export type TranslationKey = keyof typeof translations;

// ─── Dev-time key guard ───────────────────────────────────────────────────────
function warnMissing(key: string): void {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] Missing translation key: "${key}"`);
  }
}

// ─── Translate function factory ───────────────────────────────────────────────
export function makeTFunc(lang: "EN" | "AR") {
  return function t(key: TranslationKey | string, fallback?: string): string {
    const entry = translations[key as TranslationKey];
    if (!entry) {
      warnMissing(key);
      return fallback ?? key;
    }
    return entry[lang] ?? entry.EN ?? fallback ?? key;
  };
}

// ─── useT hook ────────────────────────────────────────────────────────────────
export function useT() {
  const { lang } = useLang();
  return makeTFunc(lang);
}
