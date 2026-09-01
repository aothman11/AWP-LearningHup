import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AWP SAP Central Learning Hub",
  description:
    "Privacy policy for the AWP SAP Central Learning Hub — how we handle data collected through this internal training platform.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alwatania-logo-white.png" alt="Al-Watania Poultry" className="h-8 w-auto shrink-0" />
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F]" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">Hub</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">Privacy Policy</span>
          </nav>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-4xl font-light text-[#1C3A2B] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6B7A6F] mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-[#2A2E2B] leading-relaxed">
          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              1. Overview
            </h2>
            <p>
              The AWP SAP Central Learning Hub (&ldquo;Platform&rdquo;) is an internal training tool operated by Al-Watania Poultry.
              This policy describes what information is collected when you use the Platform and how it is used.
              The Platform is intended for authorised Al-Watania Poultry employees and contractors only.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Usage data:</strong> Pages visited, features used, and time spent on the Platform — collected automatically via analytics.</li>
              <li><strong>Quiz responses:</strong> Answers submitted during knowledge quizzes, stored locally in your browser and not transmitted to our servers.</li>
              <li><strong>Technical data:</strong> Browser type, device type, and approximate region — used to maintain and improve the Platform.</li>
            </ul>
            <p className="mt-3 text-sm">
              We do <strong>not</strong> collect your SAP credentials, personal financial information, or any sensitive personal data through this Platform.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>To operate and maintain the Platform.</li>
              <li>To understand how learners engage with content and quizzes.</li>
              <li>To improve learning material relevance and coverage.</li>
              <li>To diagnose and fix technical issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              4. Cookies and Local Storage
            </h2>
            <p className="text-sm">
              The Platform uses browser local storage to save your quiz progress and UI preferences (such as the selected audience mode).
              This data is stored only on your device and is not sent to our servers.
              Standard session cookies may be set by hosting infrastructure for load balancing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              5. Third-Party Services
            </h2>
            <p className="text-sm">
              The Platform may use Google Analytics to collect aggregated, anonymised usage statistics.
              This data is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E7862] underline underline-offset-2 hover:text-[#1C3A2B]"
              >
                Google&apos;s Privacy Policy
              </a>
              . No personally identifiable information is shared with Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              6. Data Retention and Security
            </h2>
            <p className="text-sm">
              Aggregated analytics data is retained for up to 24 months.
              Browser-local data is retained until you clear your browser storage.
              We use HTTPS for all data in transit and rely on Vercel&apos;s infrastructure security for hosting.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              7. Your Rights
            </h2>
            <p className="text-sm">
              As an authorised user you may request access to or deletion of any personal data we hold about you.
              Contact the platform administrator at your Al-Watania Poultry department.
            </p>
          </section>

          <section>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-light text-[#1C3A2B] mb-3 pb-2 border-b border-[#D9D4C8]">
              8. Changes to This Policy
            </h2>
            <p className="text-sm">
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              Continued use of the Platform after changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D9D4C8] flex gap-4">
          <Link href="/hub" className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors">← Back to Hub</Link>
          <Link href="/terms" className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors">Terms of Use →</Link>
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
