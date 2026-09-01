import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { awpCategories, getCategoryBySlug } from "@/data/awp-categories";
import { processes } from "@/data/processes";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return awpCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.nameEN} — AWP SAP Central Learning Hub`,
    description: cat.descriptionEN,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();
  const resolvedCat = cat!;

  // Processes in this category that exist in data
  const catProcesses = resolvedCat.processIds
    .map((id) => processes.find((p) => p.id === id))
    .filter(Boolean) as typeof processes;

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#2A2E2B]">
      {/* Header */}
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
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">AWP Processes</Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">{resolvedCat.nameEN}</span>
          </nav>
        </div>
      </header>

      {/* Hero band */}
      <div className="bg-[#1C3A2B] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center gap-4">
            <span className="text-5xl select-none">{resolvedCat.icon}</span>
            <div>
              <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-1">
                AWP SAP · Process Category
              </p>
              <h1
                className="text-3xl sm:text-4xl font-light leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {resolvedCat.nameEN}
              </h1>
              <p className="text-sm text-[#A8C4A8] mt-0.5" dir="rtl" lang="ar">
                {resolvedCat.nameAR}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[#A8C4A8] max-w-2xl leading-relaxed italic">
            {resolvedCat.descriptionEN}
          </p>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
        {catProcesses.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#D9D4C8] rounded-2xl">
            <p className="text-4xl mb-4">🚧</p>
            <p className="font-medium text-[#1C3A2B] text-lg mb-2">Processes Coming Soon</p>
            <p className="text-sm text-[#6B7A6F] max-w-sm mx-auto">
              Training documents for this category are being prepared. Check back soon or
              explore another category.
            </p>
            <Link
              href="/hub"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#D9D4C8] bg-white px-4 py-2.5 text-sm font-medium text-[#2A2E2B] hover:border-[#047836] transition-colors"
            >
              ← Back to Hub
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm text-[#6B7A6F]">
                {catProcesses.length} {catProcesses.length === 1 ? "process" : "processes"} in this category
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {catProcesses.map((proc) => (
                <Link
                  key={proc.id}
                  href={`/hub/awp-processes/${resolvedCat.slug}/${proc.id}`}
                  className="group bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-5 hover:border-[#047836] hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl select-none shrink-0">{proc.icon}</span>
                    <div className="min-w-0">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                        style={{ background: proc.module === "PP" ? "#1C3A2B" : "#C49A1A" }}
                      >
                        {proc.module}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-[#1C3A2B] leading-snug">
                        {proc.titleEN}
                      </h3>
                      <p className="text-xs text-[#6B7A6F] mt-0.5" dir="rtl" lang="ar">
                        {proc.titleAR}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7A6F] leading-relaxed flex-1 mb-4 line-clamp-3">
                    {proc.descriptionEN}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#EDE9E1] text-xs text-[#6B7A6F]">
                    <span>{proc.duration} · {proc.steps.length} steps</span>
                    <span className="text-[#047836] opacity-0 group-hover:opacity-100 transition-opacity">
                      Open →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="mt-8 border-t border-[#D9D4C8] bg-[#FAFAF8] py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-xs text-[#6B7A6F] flex items-center justify-between gap-4">
          <span>AWP SAP Central Learning Hub · {resolvedCat.nameEN}</span>
          <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors">← Hub</Link>
        </div>
      </footer>
    </div>
  );
}
