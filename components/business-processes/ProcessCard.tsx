import Link from "next/link";
import type { ProcessSection } from "@/lib/parseBusinessProcessDoc";

interface ProcessCardProps {
  section: ProcessSection;
  hasQuiz: boolean;
}

const PROCESS_ICONS: Record<number, string> = {
  1: "🗺️",
  2: "🔄",
  3: "🧬",
  4: "🥚",
  5: "🐔",
  6: "📊",
  7: "⚙️",
  8: "🏭",
  9: "📋",
  10: "🔪",
};

export function ProcessCard({ section, hasQuiz }: ProcessCardProps) {
  const icon = PROCESS_ICONS[section.id] ?? "📄";

  return (
    <article
      className="group relative flex flex-col bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl overflow-hidden
                 hover:border-[#4E7862] hover:shadow-md transition-all duration-200"
    >
      {/* Card header strip */}
      <div className="bg-[#1C3A2B] px-5 py-4 flex items-start gap-3">
        <span className="text-2xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
        <div className="min-w-0">
          <span className="block text-[#C8DFC5] text-[10px] font-semibold uppercase tracking-widest mb-1">
            Process {section.id} of 10
          </span>
          <h2
            className="text-white text-base font-light leading-snug break-words"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {section.label}
          </h2>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 flex flex-col px-5 py-4 gap-4">
        {/* Diagram type */}
        {section.diagramType && (
          <p className="text-xs text-[#6B7A6F] leading-relaxed">{section.diagramType}</p>
        )}

        {/* Topics */}
        {section.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {section.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#E8F0E4] text-[#1C3A2B] border border-[#C8DFC5]"
              >
                {topic.length > 30 ? topic.slice(0, 28) + "…" : topic}
              </span>
            ))}
          </div>
        )}

        {/* T-Codes */}
        {section.tcodes.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-wider shrink-0">
              T-Codes:
            </span>
            {section.tcodes.map((tc) => (
              <span
                key={tc}
                className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#F8EBC5] text-[#7A5E0A] border border-[#E8D585]"
              >
                {tc}
              </span>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex gap-2 pt-2 border-t border-[#EDE9E1]">
          <Link
            href={`/learning/business-processes/${section.slug}`}
            className="flex-1 text-center text-xs font-medium py-2 px-3 rounded-lg
                       bg-[#1C3A2B] text-white hover:bg-[#2D5A42] transition-colors"
          >
            Read Docs →
          </Link>
          {hasQuiz && (
            <Link
              href={`/learning/business-processes/${section.slug}/quiz`}
              className="flex-1 text-center text-xs font-medium py-2 px-3 rounded-lg
                         border border-[#C49A1A] text-[#7A5E0A] bg-[#F8EBC5]
                         hover:bg-[#F0DC90] hover:border-[#C49A1A] transition-colors"
            >
              Take Quiz ✦
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
