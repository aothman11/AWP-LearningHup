import { notFound } from "next/navigation";
import {
  parseBusinessProcessDoc,
  loadProcessQuiz,
  getAllProcessSlugs,
} from "@/lib/parseBusinessProcessDoc";
import { QuizEngine } from "@/components/business-processes/QuizEngine";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Only generate quiz pages for processes that have a quiz JSON file
  return getAllProcessSlugs()
    .filter((slug) => loadProcessQuiz(slug) !== null)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sections = parseBusinessProcessDoc();
  const section = sections.find((s) => s.slug === slug);
  if (!section) return { title: "Not Found" };
  return {
    title: `Quiz: ${section.label} — AWP Learning Hub`,
    description: `Test your knowledge of the ${section.label} business process.`,
  };
}

export default async function ProcessQuizPage({ params }: PageProps) {
  const { slug } = await params;
  const sections = parseBusinessProcessDoc();
  const section = sections.find((s) => s.slug === slug);

  if (!section) notFound();

  const quiz = loadProcessQuiz(slug);
  if (!quiz) notFound();

  // notFound() throws — these casts are safe
  const resolvedSection = section!;
  const resolvedQuiz = quiz!;

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
            <Link href="/learning/business-processes" className="hover:text-[#1C3A2B] transition-colors">
              Business Processes
            </Link>
            <span>›</span>
            <Link
              href={`/learning/business-processes/${slug}`}
              className="hover:text-[#1C3A2B] transition-colors truncate max-w-[160px]"
            >
              {resolvedSection.label}
            </Link>
            <span>›</span>
            <span className="text-[#2A2E2B] font-medium">Quiz</span>
          </nav>
        </div>
      </header>

      {/* Quiz engine (client component) */}
      <QuizEngine
        quiz={resolvedQuiz}
        processSlug={slug}
        processLabel={resolvedSection.label}
      />
    </div>
  );
}
