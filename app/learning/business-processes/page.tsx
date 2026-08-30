import { parseBusinessProcessDoc, loadProcessQuiz } from "@/lib/parseBusinessProcessDoc";
import { ProcessCard } from "@/components/business-processes/ProcessCard";
import Link from "next/link";

export const metadata = {
  title: "Business Processes — AWP Learning Hub",
  description:
    "Structured reference and quizzes for all 10 AWP business process diagrams — from Supply Chain to Slaughterhouse.",
};

export default function BusinessProcessesIndexPage() {
  const sections = parseBusinessProcessDoc();

  // Check which processes have a quiz file
  const hasQuizMap = Object.fromEntries(
    sections.map((s) => [s.slug, loadProcessQuiz(s.slug) !== null])
  );

  const totalTcodes = Array.from(
    new Set(sections.flatMap((s) => s.tcodes))
  ).length;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alwatania-logo-white.png"
            alt="Al-Watania Poultry"
            className="h-8 w-auto shrink-0"
          />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F]" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">Business Processes</span>
          </nav>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C3A2B] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-3">
            AWP DT Initiative 2025 · SAP S/4HANA
          </p>
          <h1
            className="text-4xl sm:text-5xl font-light leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Business Process Documentation
          </h1>
          <p className="text-[#A8C4A8] text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            Structured reference for all AWP process diagrams — from the top-level supply chain
            to detailed SAP swim-lanes. Each process includes a knowledge quiz.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-10">
            {[
              { value: sections.length, label: "Processes" },
              { value: sections.filter((s) => hasQuizMap[s.slug]).length, label: "Quizzes" },
              { value: totalTcodes, label: "Unique T-Codes" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-3xl font-light text-white"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {value}
                </div>
                <div className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Grid ─────────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
        {/* Quick nav */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/learning/business-processes/${s.slug}`}
              className="text-xs px-3 py-1.5 rounded-full border border-[#D9D4C8] bg-[#FAFAF8]
                         hover:border-[#4E7862] hover:bg-[#E8F0E4] text-[#6B7A6F] hover:text-[#1C3A2B]
                         transition-colors"
            >
              {s.id}. {s.label.replace(/_/g, " ").split(" ").slice(0, 3).join(" ")}
            </Link>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sections.map((section) => (
            <ProcessCard
              key={section.slug}
              section={section}
              hasQuiz={!!hasQuizMap[section.slug]}
            />
          ))}
        </div>

        {/* Appendix links */}
        <div className="mt-10 p-6 bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl">
          <h2 className="text-sm font-semibold text-[#2A2E2B] mb-3">Appendix References</h2>
          <div className="flex flex-wrap gap-4 text-sm text-[#6B7A6F]">
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C49A1A]" />
              T-Code Reference: {totalTcodes} unique transaction codes across all processes
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4E7862]" />
              Plant Reference: 16 AWP plants mapped (GP, Parent, Hatchery, Broiler, Processing, Layer)
            </span>
          </div>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#D9D4C8] mt-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between gap-4 text-xs text-[#6B7A6F]">
          <span>AWP Business Process Documentation · SAP S/4HANA DT Initiative 2025</span>
          <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">← Back to Hub</Link>
        </div>
      </footer>
    </div>
  );
}
