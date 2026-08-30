"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { ProcessSection } from "@/lib/parseBusinessProcessDoc";

interface ProcessDocViewerProps {
  section: ProcessSection;
  hasQuiz: boolean;
  allSections: Array<{ slug: string; label: string; id: number }>;
}

type AudienceMode = "full" | "ops";

export function ProcessDocViewer({ section, hasQuiz, allSections }: ProcessDocViewerProps) {
  const [audience, setAudience] = useState<AudienceMode>("full");
  const [activeHeading, setActiveHeading] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);

  // Extract headings from the rendered HTML for sidebar nav
  const headings = extractHeadings(section.htmlContent);

  // Observe which heading is in view
  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );
    const headingEls = contentRef.current.querySelectorAll("h2, h3, h4");
    headingEls.forEach((el, idx) => {
      const id = `h-${idx}`;
      el.id = id;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [section.slug]);

  // Filter content for Operations audience (hide SAP-specific details)
  const displayHtml = audience === "ops"
    ? filterForOps(section.htmlContent)
    : section.htmlContent;

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <header className="border-b border-[#D9D4C8] bg-[#FAFAF8] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4 flex-wrap">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#6B7A6F] min-w-0" aria-label="Breadcrumb">
            <Link href="/hub" className="hover:text-[#1C3A2B] transition-colors shrink-0">Hub</Link>
            <span className="shrink-0">›</span>
            <Link href="/learning/business-processes" className="hover:text-[#1C3A2B] transition-colors shrink-0">
              Business Processes
            </Link>
            <span className="shrink-0">›</span>
            <span className="text-[#2A2E2B] font-medium truncate">{section.label}</span>
          </nav>

          {/* Audience toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-[#6B7A6F] font-semibold uppercase tracking-wider">View:</span>
            <div className="flex rounded-full overflow-hidden border border-[#D9D4C8] text-xs font-medium">
              <button
                onClick={() => setAudience("full")}
                className={`px-3 py-1.5 transition-colors ${
                  audience === "full"
                    ? "bg-[#1C3A2B] text-white"
                    : "text-[#6B7A6F] hover:bg-[#E8F0E4]"
                }`}
              >
                SAP Detail
              </button>
              <button
                onClick={() => setAudience("ops")}
                className={`px-3 py-1.5 transition-colors ${
                  audience === "ops"
                    ? "bg-[#1C3A2B] text-white"
                    : "text-[#6B7A6F] hover:bg-[#E8F0E4]"
                }`}
              >
                Ops Overview
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 flex gap-8">
        {/* ── Sidebar ────────────────────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col gap-6 w-56 shrink-0">
          {/* This document nav */}
          <div className="sticky top-20">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mb-3">
              On this page
            </p>
            <nav className="flex flex-col gap-0.5" aria-label="Page sections">
              {headings.map((h, idx) => (
                <a
                  key={idx}
                  href={`#h-${idx}`}
                  className={`text-xs py-1 px-2 rounded transition-colors leading-snug ${
                    activeHeading === `h-${idx}`
                      ? "bg-[#E8F0E4] text-[#1C3A2B] font-medium"
                      : "text-[#6B7A6F] hover:text-[#2A2E2B]"
                  } ${h.level === "h3" || h.level === "h4" ? "pl-5" : ""}`}
                >
                  {h.text.length > 40 ? h.text.slice(0, 38) + "…" : h.text}
                </a>
              ))}
            </nav>

            {/* Other processes */}
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7A6F] mt-6 mb-3">
              Other Processes
            </p>
            <nav className="flex flex-col gap-0.5" aria-label="Other processes">
              {allSections
                .filter((s) => s.slug !== section.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/learning/business-processes/${s.slug}`}
                    className="text-xs py-1 px-2 rounded text-[#6B7A6F] hover:text-[#1C3A2B] hover:bg-[#E8F0E4] transition-colors leading-snug"
                  >
                    {s.id}. {s.label.length > 32 ? s.label.slice(0, 30) + "…" : s.label}
                  </Link>
                ))}
            </nav>
          </div>
        </aside>

        {/* ── Main content ───────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0">
          {/* Process header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-[#4E7862] text-xs font-semibold uppercase tracking-widest mb-3">
              <span>Process {section.id} of 10</span>
              {section.tcodes.length > 0 && (
                <>
                  <span className="text-[#D9D4C8]">·</span>
                  <span>{section.tcodes.length} T-Code{section.tcodes.length !== 1 ? "s" : ""}</span>
                </>
              )}
            </div>
            <h1
              className="text-3xl sm:text-4xl font-light text-[#1C3A2B] leading-tight mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {section.label}
            </h1>
            {section.diagramType && (
              <p className="text-sm text-[#6B7A6F] leading-relaxed">{section.diagramType}</p>
            )}

            {/* T-code badges */}
            {section.tcodes.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {section.tcodes.map((tc) => (
                  <span
                    key={tc}
                    className="px-2.5 py-1 rounded-lg font-mono text-xs bg-[#F8EBC5] text-[#7A5E0A] border border-[#E8D585]"
                  >
                    {tc}
                  </span>
                ))}
              </div>
            )}

            {/* Audience note */}
            {audience === "ops" && (
              <div className="mt-4 px-4 py-3 bg-[#E8F0E4] border border-[#C8DFC5] rounded-lg text-xs text-[#1C3A2B]">
                <strong>Operations Overview:</strong> SAP transaction codes and technical details are hidden.
                Switch to <strong>SAP Detail</strong> to see the full reference.
              </div>
            )}
          </div>

          {/* Document content */}
          <div
            ref={contentRef}
            className="awp-doc-content"
            dangerouslySetInnerHTML={{ __html: displayHtml }}
          />

          {/* Quiz CTA */}
          {hasQuiz && (
            <div className="mt-12 p-6 bg-[#1C3A2B] rounded-xl text-white">
              <p className="text-[#C8DFC5] text-xs font-semibold uppercase tracking-widest mb-2">
                Knowledge Check
              </p>
              <h3
                className="text-xl font-light mb-2"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Ready to test what you&apos;ve learned?
              </h3>
              <p className="text-[#A8C4A8] text-sm mb-5">
                Take the quiz for this process. Questions cover key steps, T-codes, and decision points.
              </p>
              <Link
                href={`/learning/business-processes/${section.slug}/quiz`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C49A1A] text-[#1C3A2B]
                           font-semibold text-sm rounded-lg hover:bg-[#E0B520] transition-colors"
              >
                Start Quiz ✦
              </Link>
            </div>
          )}

          {/* Prev / Next navigation */}
          <nav className="mt-8 flex gap-4 flex-wrap" aria-label="Process navigation">
            {allSections.find((s) => s.id === section.id - 1) && (
              <Link
                href={`/learning/business-processes/${allSections.find((s) => s.id === section.id - 1)!.slug}`}
                className="flex-1 min-w-[200px] group p-4 bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl
                           hover:border-[#4E7862] transition-colors"
              >
                <span className="block text-[10px] text-[#6B7A6F] font-semibold uppercase tracking-wider mb-1">
                  ← Previous
                </span>
                <span className="text-sm text-[#1C3A2B] font-medium group-hover:underline">
                  {allSections.find((s) => s.id === section.id - 1)!.label}
                </span>
              </Link>
            )}
            {allSections.find((s) => s.id === section.id + 1) && (
              <Link
                href={`/learning/business-processes/${allSections.find((s) => s.id === section.id + 1)!.slug}`}
                className="flex-1 min-w-[200px] group p-4 bg-[#FAFAF8] border border-[#D9D4C8] rounded-xl
                           hover:border-[#4E7862] transition-colors text-right"
              >
                <span className="block text-[10px] text-[#6B7A6F] font-semibold uppercase tracking-wider mb-1">
                  Next →
                </span>
                <span className="text-sm text-[#1C3A2B] font-medium group-hover:underline">
                  {allSections.find((s) => s.id === section.id + 1)!.label}
                </span>
              </Link>
            )}
          </nav>
        </main>
      </div>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

interface Heading {
  level: "h2" | "h3" | "h4";
  text: string;
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const re = /<(h2|h3|h4)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const level = m[1].toLowerCase() as "h2" | "h3" | "h4";
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    if (text) headings.push({ level, text });
  }
  return headings;
}

/**
 * For Operations Overview mode, strip rows/columns that are purely SAP-technical:
 * - Table cells containing T-Code patterns (CO01, MIGO, etc.)
 * - Table columns labeled "T-Code" or "SAP Step"
 * - <code> elements that look like T-codes or material numbers
 */
function filterForOps(html: string): string {
  // Remove T-Code column header and its corresponding data cells from tables
  // Strategy: remove entire <table> rows that are primarily SAP technical steps
  // and remove inline <code> elements that are T-codes
  return html
    // Remove rows where SAP Step column has only T-code content
    .replace(/<tr><th>SAP Step<\/th>[\s\S]*?<\/tr>/gi, "")
    // Remove T-Code column headers
    .replace(/<th>T-Code<\/th>/gi, "")
    // Remove T-Code data cells (contain known T-code patterns)
    .replace(/<td>(?:CO\d{2,3}[N]?|MIGO(?:_[A-Z]{2,3})?|MF42N|MFBF|QA\d{2,3}|ZPPH\w+|ZPPHL\w+|COOIS)<\/td>/gi, "<td>—</td>")
    // Remove inline code blocks that are T-codes (keep material number codes)
    .replace(/<code>(?:CO\d{2,3}[N]?|MIGO(?:_[A-Z]{2,3})?|MF42N|MFBF|QA\d{2,3}|ZPPH\w+|ZPPHL\w+|COOIS)<\/code>/gi, "");
}
