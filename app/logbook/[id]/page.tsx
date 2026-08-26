import { logbookEntries } from "@/data/qm-logbook";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BackButton } from "./back-button";

interface Props {
  params: Promise<{ id: string }>;
}

const MODULE_STYLES: Record<string, string> = {
  PP:     "bg-[#1C3A2B] text-[#F7F5F0]",
  QM:     "bg-[#4E7862] text-[#F7F5F0]",
  "PP/QM":"bg-[#C8DFC5] text-[#1C3A2B]",
};

const RELEVANCE_STYLES: Record<string, string> = {
  High:      "bg-[#D4EFE0] text-[#1C3A2B] border border-[#C8DFC5]",
  Medium:    "bg-[#F8EBC5] text-[#7A5E0A] border border-[#e5d08a]",
  Low:       "bg-[#EDE9E1] text-[#6B7A6F] border border-[#D9D4C8]",
  "Not Used":"bg-[#FCDEDE] text-[#9B3030] border border-[#f5b8b8]",
};

export async function generateStaticParams() {
  return logbookEntries.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const entry = logbookEntries.find((e) => e.id === id);
  if (!entry) return { title: "Not Found" };
  return {
    title: `${entry.transactionCode} – ${entry.title} | SAP PP/QM Logbook`,
    description: entry.description,
  };
}

export default async function EntryPage({ params }: Props) {
  const { id } = await params;
  const entry = logbookEntries.find((e) => e.id === id);
  if (!entry) notFound();

  const related = entry.relatedTransactions
    .map((tc) => logbookEntries.find((e) => e.transactionCode === tc || e.transactionCode.includes(tc)))
    .filter(Boolean);

  const hasUrl = Boolean(entry.sapDocUrl);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* Nav */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-3">
          <BackButton
            fallbackHref="/logbook"
            label="← Back"
            className="text-[#6B7A6F] hover:text-[#1C3A2B] transition-colors text-sm flex items-center gap-1.5 cursor-pointer"
          />
          <span className="text-[#D9D4C8]">/</span>
          <span
            className="text-[#1C3A2B] font-light"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px" }}
          >
            {entry.transactionCode}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Hero */}
        <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-7 sm:p-9">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${MODULE_STYLES[entry.module]}`}>
              {entry.module}
            </span>
            <span className="text-[10px] text-[#6B7A6F] bg-[#FAFAF8] border border-[#D9D4C8] px-2.5 py-1 rounded-full">
              {entry.category}
            </span>
            <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${RELEVANCE_STYLES[entry.awpRelevance]}`}>
              {entry.awpRelevance}
            </span>
          </div>

          <div
            className="text-6xl sm:text-7xl font-light text-[#1C3A2B] leading-none tracking-wide mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {entry.transactionCode}
          </div>

          <h1 className="text-[#2A2E2B] font-medium text-xl sm:text-2xl leading-snug">{entry.title}</h1>
          {entry.titleAr && (
            <p
              className="text-[#6B7A6F] text-lg mt-1.5 text-right leading-relaxed"
              style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
            >
              {entry.titleAr}
            </p>
          )}
          <p className="text-[#2A2E2B] text-sm leading-relaxed mt-5">{entry.description}</p>
        </div>

        {/* How to Use — Steps */}
        {entry.steps && entry.steps.length > 0 && (
          <section>
            <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">How to Use</h2>
            <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-6">
              <ol className="space-y-4">
                {entry.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#1C3A2B] text-[#F7F5F0] text-[11px] font-semibold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-[#2A2E2B] leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Key Fields */}
        {entry.keyFields && entry.keyFields.length > 0 && (
          <section>
            <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">Key Fields</h2>
            <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl overflow-hidden">
              {entry.keyFields.map((kf, i) => (
                <div
                  key={i}
                  className={`flex gap-4 px-5 py-3.5 text-sm ${i < entry.keyFields!.length - 1 ? "border-b border-[#EDE9E1]" : ""}`}
                >
                  <span className="shrink-0 font-mono text-xs text-[#1C3A2B] bg-[#E8F0E4] border border-[#C8DFC5] px-2.5 py-1 rounded-lg self-start mt-0.5 whitespace-nowrap">
                    {kf.field.split(" ")[0]}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#2A2E2B] mb-0.5">{kf.field.includes("(") ? kf.field.match(/\(([^)]+)\)/)?.[1] ?? kf.field : kf.field}</p>
                    <p className="text-xs text-[#6B7A6F] leading-relaxed">{kf.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Output */}
        {entry.output && (
          <section>
            <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">Output / Result</h2>
            <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-5">
              <p className="text-sm text-[#1C3A2B] leading-relaxed">{entry.output}</p>
            </div>
          </section>
        )}

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-4">
          <InfoCard title="Process Area">
            <p className="text-[#2A2E2B] text-sm">{entry.processArea}</p>
          </InfoCard>

          <InfoCard title="Source">
            <p className="text-[10px] text-[#6B7A6F] mb-2 uppercase tracking-wide">SAP Help Portal</p>
            {hasUrl ? (
              <a
                href={entry.sapDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4E7862] hover:text-[#1C3A2B] text-sm transition-colors"
              >
                Open Official Documentation ↗
              </a>
            ) : (
              <span className="text-[#7A5E0A] text-sm">⚠ Doc link pending</span>
            )}
            <p className="text-[10px] text-[#D9D4C8] mt-2">Last verified: {entry.lastVerified}</p>
          </InfoCard>

          {entry.notes && (
            <InfoCard title="Notes" className="sm:col-span-2">
              <p className="text-[#4E7862] text-sm leading-relaxed italic">{entry.notes}</p>
            </InfoCard>
          )}
        </div>

        {/* Related Transactions */}
        {related.length > 0 && (
          <section>
            <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-4">Related Transactions</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((rel) => rel && (
                <Link
                  key={rel.id}
                  href={`/logbook/${rel.id}`}
                  className="bg-[#FAFAF8] border border-[#D9D4C8] hover:bg-[#E8F0E4] hover:border-[#4E7862] rounded-2xl p-5 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${MODULE_STYLES[rel.module]}`}>
                      {rel.module}
                    </span>
                    <span
                      className="font-light text-[#1C3A2B]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px" }}
                    >
                      {rel.transactionCode}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B7A6F] group-hover:text-[#2A2E2B] transition-colors leading-snug">
                    {rel.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tags */}
        {entry.tags.length > 0 && (
          <section>
            <h2 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/logbook?tag=${tag}`}
                  className="text-xs text-[#4E7862] bg-[#E8F0E4] border border-[#C8DFC5] hover:bg-[#C8DFC5] hover:text-[#1C3A2B] px-3 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between py-5 border-t border-[#D9D4C8]">
          <div className="text-xs text-[#D9D4C8]">
            ID: <code className="text-[#6B7A6F]">{entry.id}</code>
          </div>
          <BackButton
            fallbackHref="/logbook"
            label="← Back to all entries"
            className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors cursor-pointer"
          />
        </div>
      </main>
    </div>
  );
}

function InfoCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-5 ${className}`}>
      <h3 className="text-[10px] text-[#6B7A6F] uppercase tracking-widest mb-3">{title}</h3>
      {children}
    </div>
  );
}
