import { logbookEntries } from "@/data/qm-logbook";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const MODULE_COLORS: Record<string, string> = {
  PP: "bg-[#047836] text-white",
  QM: "bg-[#C49A1A] text-black",
  "PP/QM": "bg-[#D24918] text-white",
};

const RELEVANCE_COLORS: Record<string, string> = {
  High: "text-[#34d068] bg-[#047836]/20 border-[#047836]/40",
  Medium: "text-[#e8bc30] bg-[#C49A1A]/20 border-[#C49A1A]/40",
  Low: "text-slate-400 bg-slate-700/50 border-slate-600",
  "Not Used": "text-red-400 bg-red-900/20 border-red-800/40",
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
    <div className="min-h-screen bg-[#0f1117] text-slate-200">
      {/* Nav */}
      <header className="border-b border-slate-800 bg-[#0f1117]/90 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <Link
            href="/logbook"
            className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 text-sm"
          >
            ← Back to Logbook
          </Link>
          <span className="text-slate-700">/</span>
          <code className="text-[#C49A1A] font-mono text-sm">{entry.transactionCode}</code>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Hero */}
        <div className="bg-[#1a1f2e] border border-slate-700 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-bold px-2.5 py-1 rounded ${MODULE_COLORS[entry.module]}`}>
                {entry.module}
              </span>
              <span className="text-xs text-slate-500 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded">
                {entry.category}
              </span>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full border ${RELEVANCE_COLORS[entry.awpRelevance]}`}
              >
                AWP: {entry.awpRelevance}
              </span>
            </div>
          </div>

          <div className="flex items-end gap-4 flex-wrap mb-2">
            <code className="text-[#C49A1A] font-mono font-bold text-3xl sm:text-4xl">
              {entry.transactionCode}
            </code>
          </div>

          <h1 className="text-white font-bold text-xl sm:text-2xl leading-snug">{entry.title}</h1>
          {entry.titleAr && (
            <p
              className="text-slate-400 text-lg mt-1 text-right"
              style={{ fontFamily: "'Sakkal Majalla', 'Arial Unicode MS', serif", direction: "rtl" }}
            >
              {entry.titleAr}
            </p>
          )}

          <p className="text-slate-300 text-base leading-relaxed mt-4">{entry.description}</p>
        </div>

        {/* Details Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          <InfoCard title="Process Area">
            <p className="text-slate-200">{entry.processArea}</p>
          </InfoCard>

          <InfoCard title="Source">
            <p className="text-xs text-slate-500 mb-2">SAP Help Portal</p>
            {hasUrl ? (
              <a
                href={entry.sapDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#047836] hover:text-[#34d068] text-sm transition-colors flex items-center gap-1"
              >
                Open Official Documentation ↗
              </a>
            ) : (
              <span className="text-[#C49A1A] text-sm flex items-center gap-1.5">
                ⚠ Doc link pending verification
              </span>
            )}
            <p className="text-xs text-slate-600 mt-2">Last verified: {entry.lastVerified}</p>
          </InfoCard>

          {entry.notes && (
            <InfoCard title="AWP Notes" className="sm:col-span-2">
              <p className="text-slate-300 text-sm leading-relaxed">{entry.notes}</p>
            </InfoCard>
          )}
        </div>

        {/* Related Transactions */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xs text-slate-500 uppercase tracking-wider mb-3">
              Related Transactions
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((rel) => rel && (
                <Link
                  key={rel.id}
                  href={`/logbook/${rel.id}`}
                  className="bg-[#1a1f2e] border border-slate-700 hover:border-[#047836]/50 rounded-xl p-4 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${MODULE_COLORS[rel.module]}`}>
                      {rel.module}
                    </span>
                    <code className="text-[#C49A1A] font-mono text-sm font-semibold">
                      {rel.transactionCode}
                    </code>
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug">
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
            <h2 className="text-xs text-slate-500 uppercase tracking-wider mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/logbook?tag=${tag}`}
                  className="text-sm bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700 hover:border-slate-500 px-3 py-1 rounded-full transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between py-4 border-t border-slate-800">
          <div className="text-xs text-slate-600">
            Entry ID: <code className="text-slate-500">{entry.id}</code>
          </div>
          <Link
            href="/logbook"
            className="text-sm text-[#047836] hover:text-[#34d068] transition-colors"
          >
            ← Back to all entries
          </Link>
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
    <div className={`bg-[#1a1f2e] border border-slate-700 rounded-xl p-5 ${className}`}>
      <h3 className="text-xs text-slate-500 uppercase tracking-wider mb-3">{title}</h3>
      {children}
    </div>
  );
}
