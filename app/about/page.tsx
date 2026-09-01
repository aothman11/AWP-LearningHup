import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — AWP Learning Hub",
  description:
    "Learn about the AWP Central Learning Hub — a dedicated SAP PP/QM training platform built for Al-Watania Poultry's operational teams and SAP users.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* Header */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/alwatania-logo-white.png"
            alt="Al-Watania Poultry"
            className="h-8 w-auto shrink-0"
          />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F]" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">About</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        {/* Hero */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#4E7862] mb-3">About the Platform</p>
          <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-4xl sm:text-5xl font-light text-[#1C3A2B] mb-4 leading-tight">
            AWP Central Learning Hub
          </h1>
          <p className="text-[#6B7A6F] text-lg leading-relaxed">
            A structured, role-aware training environment for SAP PP/QM at Al-Watania Poultry —
            built to close the gap between system knowledge and operational practice.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-10 p-6 bg-white rounded-xl border border-[#D9D4C8]">
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[#1C3A2B] mb-3">Our Mission</h2>
          <p className="text-[#2A2E2B] leading-relaxed mb-3">
            The AWP Learning Hub was created to accelerate SAP adoption across Al-Watania Poultry's
            production, quality, and operations teams. Rather than relying solely on external
            consultants or generic SAP documentation, this platform surfaces the exact T-codes,
            process flows, and decision logic relevant to AWP's specific configuration.
          </p>
          <p className="text-[#2A2E2B] leading-relaxed">
            Every module is grounded in real AWP business processes — from parent-flock management
            and hatchery operations to slaughterhouse processing and REM confirmations — so learners
            work with scenarios they'll encounter on the job.
          </p>
        </section>

        {/* What's inside */}
        <section className="mb-10">
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[#1C3A2B] mb-5">What's Inside</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: "📋",
                title: "Business Process Docs",
                desc: "10 end-to-end process modules with SAP T-code references, step-by-step procedures, and decision points.",
              },
              {
                icon: "🧠",
                title: "Knowledge Quizzes",
                desc: "SAP-focus and process-flow quiz modes per module, with instant feedback and explanations.",
              },
              {
                icon: "🗺️",
                title: "Process Flow Viewer",
                desc: "Visual swimlane diagrams mapping roles, systems, and handoff points across AWP operations.",
              },
              {
                icon: "📡",
                title: "S/4HANA Updates",
                desc: "Curated SAP release notes and feature changes relevant to PP/QM, surfaced through the research drawer.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-white rounded-xl border border-[#D9D4C8]">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-[#1C3A2B] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#6B7A6F] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="mb-10 p-6 bg-white rounded-xl border border-[#D9D4C8]">
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-light text-[#1C3A2B] mb-4">Who It's For</h2>
          <ul className="space-y-3">
            {[
              { role: "SAP PP/QM Key Users", desc: "Deep dives into T-code logic, configuration nuances, and exception handling." },
              { role: "Operations Supervisors", desc: "Process-level overviews without the SAP technicality — focused on roles and handoffs." },
              { role: "New Joiners", desc: "Structured onboarding through AWP's core processes before system access is granted." },
              { role: "Trainers & Change Managers", desc: "Ready-made quiz banks and documented processes to run internal workshops." },
            ].map((item) => (
              <li key={item.role} className="flex gap-3">
                <span className="mt-0.5 text-[#4E7862] shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-[#1C3A2B]">{item.role}</span>
                  <span className="text-[#6B7A6F]"> — {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/learning/business-processes"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1C3A2B] px-5 py-3 text-sm font-medium text-white hover:bg-[#14291e] transition-colors"
          >
            Browse Business Processes →
          </Link>
          <Link
            href="/hub"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#D9D4C8] bg-white px-5 py-3 text-sm font-medium text-[#2A2E2B] hover:border-[#4E7862] transition-colors"
          >
            Back to Hub
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#D9D4C8] bg-[#FAFAF8] py-8">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center text-xs text-[#6B7A6F]">
          <p className="mb-2">© {new Date().getFullYear()} Al-Watania Poultry · Internal Learning Platform</p>
          <div className="flex justify-center gap-4">
            <Link href="/privacy" className="hover:text-[#1C3A2B] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1C3A2B] transition-colors">Terms of Use</Link>
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
