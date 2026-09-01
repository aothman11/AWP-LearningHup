import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — AWP Learning Hub",
  description:
    "Frequently asked questions about the AWP Central Learning Hub — SAP PP/QM training, T-codes, business processes, and platform usage.",
};

const FAQ_ITEMS = [
  {
    q: "What is the AWP Learning Hub?",
    a: "The AWP Central Learning Hub is an internal training platform for Al-Watania Poultry's SAP PP/QM users. It provides structured learning paths, T-code documentation, business process guides, and knowledge quizzes — all tailored to AWP's specific SAP configuration.",
  },
  {
    q: "Who can use this platform?",
    a: "The platform is intended for authorised Al-Watania Poultry employees and approved contractors who work with or need to learn SAP PP (Production Planning) and QM (Quality Management) processes.",
  },
  {
    q: "How do the knowledge quizzes work?",
    a: "Each business process module has an optional quiz. You can choose to focus on SAP T-code questions, process-flow questions, or both. Answers are revealed immediately after each selection, with an explanation. Your quiz score is shown at the end — no data is sent to any server.",
  },
  {
    q: "What is the difference between 'SAP Detail' and 'Ops Overview' modes in the process docs?",
    a: "SAP Detail mode shows full documentation including T-code references, SAP table names, and system-specific steps — intended for key users and SAP power users. Ops Overview mode strips out the technical SAP detail and focuses on role responsibilities, decision points, and handoffs — designed for operations supervisors and new joiners.",
  },
  {
    q: "What T-codes are covered?",
    a: "The platform covers core PP/QM T-codes including MD01/MD02 (MRP), CO01/CO11N (Production Orders), QA01/QA32 (Inspection Lots), MB31/MIGO (Goods Movements), and many more. The T-Code Library in the logbook section provides searchable access to all documented transactions.",
  },
  {
    q: "How current is the content?",
    a: "Process documentation reflects AWP's SAP configuration as of the last update. SAP functionality evolves — always verify critical procedures against the live system and official SAP documentation before execution. The S/4HANA Updates panel in the research drawer surfaces recent SAP release notes relevant to PP/QM.",
  },
  {
    q: "My quiz progress isn't saving — what's wrong?",
    a: "Quiz progress and UI preferences are stored in your browser's local storage. If you're using a private/incognito window, or your browser is configured to block site data, local storage may not be available. Try switching to a regular browser window.",
  },
  {
    q: "Can I use this platform on mobile?",
    a: "Yes — the platform is fully responsive and works on smartphones and tablets. The sidebar navigation collapses on smaller screens, and the process documentation viewer adapts to narrow viewports.",
  },
  {
    q: "How do I report an error in the documentation?",
    a: "If you spot an error or outdated information, contact the platform administrator or your SAP PP/QM key user. The documentation is maintained centrally and updates are rolled out periodically.",
  },
  {
    q: "Is my data private?",
    a: "Quiz answers and progress are stored only in your browser — nothing is transmitted to our servers. Aggregated, anonymised usage analytics (pages visited, features used) may be collected to improve the platform. See our Privacy Policy for full details.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alwatania-logo-white.png" alt="Al-Watania Poultry" className="h-8 w-auto shrink-0" />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F]" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">FAQ</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4E7862] mb-3">Support</p>
          <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-4xl sm:text-5xl font-light text-[#1C3A2B] mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#6B7A6F] text-lg leading-relaxed">
            Common questions about the AWP Learning Hub, SAP PP/QM training, and platform usage.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-[#D9D4C8] rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none select-none hover:bg-[#F7F5F0] transition-colors">
                <span className="font-medium text-[#1C3A2B] text-sm leading-snug">{item.q}</span>
                <span className="shrink-0 text-[#4E7862] transition-transform group-open:rotate-45 text-lg leading-none">+</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-[#6B7A6F] leading-relaxed border-t border-[#EDE9E1]">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white border border-[#D9D4C8] rounded-xl">
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-2">Still have questions?</h2>
          <p className="text-sm text-[#6B7A6F] mb-4">
            Reach out to your SAP PP/QM key user or the platform administrator within Al-Watania Poultry.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/learning/business-processes"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C3A2B] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#14291e] transition-colors"
            >
              Browse Process Docs →
            </Link>
            <Link
              href="/hub"
              className="inline-flex items-center gap-2 rounded-lg border border-[#D9D4C8] bg-white px-4 py-2.5 text-sm font-medium text-[#2A2E2B] hover:border-[#4E7862] transition-colors"
            >
              Back to Hub
            </Link>
          </div>
        </div>
      </main>

      <footer className="mt-8 border-t border-[#D9D4C8] bg-[#FAFAF8] py-8">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center text-xs text-[#6B7A6F]">
          <p className="mb-2">© {new Date().getFullYear()} Al-Watania Poultry · Internal Learning Platform</p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="hover:text-[#1C3A2B] transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-[#1C3A2B] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1C3A2B] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
