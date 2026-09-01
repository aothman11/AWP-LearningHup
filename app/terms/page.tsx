import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — AWP SAP Central Learning Hub",
  description:
    "Terms of use for the AWP SAP Central Learning Hub — conditions governing access and use of this internal SAP PP/QM training platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alwatania-logo-white.png" alt="Al-Watania Poultry" className="h-8 w-auto shrink-0" />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F]" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">Terms of Use</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-4xl font-light text-[#1C3A2B] mb-2">Terms of Use</h1>
        <p className="text-sm text-[#6B7A6F] mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-[#2A2E2B] leading-relaxed">
          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm">
              By accessing or using the AWP SAP Central Learning Hub (&ldquo;Platform&rdquo;), you agree to be bound by these Terms of Use.
              If you do not agree to these terms, please do not use the Platform.
              Access is restricted to authorised Al-Watania Poultry employees and approved contractors.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              2. Authorised Use
            </h2>
            <p className="text-sm mb-2">You may use the Platform solely for internal training and learning purposes related to your role at Al-Watania Poultry. You agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Share access credentials or links with unauthorised parties.</li>
              <li>Reproduce, distribute, or republish Platform content outside the organisation without written approval.</li>
              <li>Use the Platform in any way that could harm Al-Watania Poultry or its systems.</li>
              <li>Attempt to reverse-engineer, scrape, or extract content at scale.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              3. Intellectual Property
            </h2>
            <p className="text-sm">
              All content on this Platform — including process documentation, quiz questions, diagrams, and written material —
              is the property of Al-Watania Poultry or its licensors. SAP® is a registered trademark of SAP SE.
              Reference to SAP T-codes and functionality is for educational purposes only.
              Nothing on this Platform grants you any rights to SAP software or its documentation.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              4. Accuracy of Content
            </h2>
            <p className="text-sm">
              Process documentation and quiz content reflect AWP configurations and procedures as of the last update date.
              SAP functionality and AWP processes may change over time.
              Always verify critical procedures against the current live system and official SAP documentation before action.
              Al-Watania Poultry makes no warranty regarding the completeness or accuracy of Platform content.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              5. Limitation of Liability
            </h2>
            <p className="text-sm">
              The Platform is provided &ldquo;as is&rdquo; without warranty of any kind.
              Al-Watania Poultry shall not be liable for any damages arising from your use of the Platform or reliance on its content,
              including but not limited to errors in SAP procedures or process documentation.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              6. Termination of Access
            </h2>
            <p className="text-sm">
              Al-Watania Poultry reserves the right to revoke access to the Platform at any time, without notice, for violation of these terms
              or for any other reason at the organisation&apos;s discretion.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              7. Governing Law
            </h2>
            <p className="text-sm">
              These terms are governed by the laws of the Kingdom of Saudi Arabia.
              Any disputes arising from use of the Platform shall be subject to the jurisdiction of the competent courts in the Kingdom of Saudi Arabia.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              8. Changes to Terms
            </h2>
            <p className="text-sm">
              We reserve the right to update these Terms of Use at any time.
              The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              Continued use after changes constitutes acceptance.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D9D4C8] flex gap-4">
          <Link href="/privacy" className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors">← Privacy Policy</Link>
          <Link href="/hub" className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors">Back to Hub →</Link>
        </div>
      </main>

      <footer className="mt-8 border-t border-[#D9D4C8] bg-[#FAFAF8] py-8">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center text-xs text-[#6B7A6F]">
          <p>© {new Date().getFullYear()} Al-Watania Poultry · Internal Learning Platform</p>
        </div>
      </footer>
    </div>
  );
}
