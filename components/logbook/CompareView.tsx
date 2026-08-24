"use client";

import { useState } from "react";
import type { LogbookEntry } from "@/types/logbook";
import { useT } from "@/lib/i18n";

interface ComparisonGroup {
  id: string;
  title: { EN: string; AR: string };
  codes: string[];
  rows: ComparisonRow[];
}

interface ComparisonRow {
  label: { EN: string; AR: string };
  values: Record<string, string>;
}

const COMPARISON_GROUPS: ComparisonGroup[] = [
  {
    id: "mrp-run",
    title: { EN: "MRP Run Types", AR: "أنواع تشغيل MRP" },
    codes: ["MD01", "MD02", "MD03"],
    rows: [
      {
        label: { EN: "Use Case", AR: "حالة الاستخدام" },
        values: {
          MD01: "Full plant-wide planning run — all materials re-planned",
          MD02: "Single material including all BOM sub-levels — multi-level",
          MD03: "Single material at top BOM level only — fastest option",
        },
      },
      {
        label: { EN: "Scope", AR: "النطاق" },
        values: {
          MD01: "All materials in a plant (or MRP area)",
          MD02: "One material + all lower BOM levels (complete explosion)",
          MD03: "One material only — sub-components NOT re-planned",
        },
      },
      {
        label: { EN: "Typical User", AR: "المستخدم النموذجي" },
        values: {
          MD01: "MRP controller / planning scheduler (overnight batch)",
          MD02: "Production planner (urgent single-item replan)",
          MD03: "Planner doing a quick top-level check",
        },
      },
      {
        label: { EN: "Outcome", AR: "النتيجة" },
        values: {
          MD01: "All planned orders & PRs for plant refreshed",
          MD02: "Planned orders & PRs for material + all components refreshed",
          MD03: "Planned orders for material only — component PRs unchanged",
        },
      },
      {
        label: { EN: "When to Avoid", AR: "متى تتجنبه" },
        values: {
          MD01: "Do not run NEUPL during business hours — deletes all planned orders first",
          MD02: "Avoid for top-level quick check — use MD03 instead",
          MD03: "Not suitable if sub-components also need replanning",
        },
      },
    ],
  },
  {
    id: "usage-decision",
    title: { EN: "Usage Decision Options", AR: "خيارات قرار الاستخدام" },
    codes: ["QA11", "QA16", "QGA1"],
    rows: [
      {
        label: { EN: "Use Case", AR: "حالة الاستخدام" },
        values: {
          QA11: "Usage decision for a single inspection lot",
          QA16: "Collective usage decision — same code applied to multiple lots",
          QGA1: "General batch usage decision — across batches/lots without individual stock posting",
        },
      },
      {
        label: { EN: "Scope", AR: "النطاق" },
        values: {
          QA11: "One lot at a time — full control over each posting",
          QA16: "Multiple lots selected from a worklist — same decision applied to all",
          QGA1: "Batch-level decision not tied to individual inspection lots",
        },
      },
      {
        label: { EN: "Typical User", AR: "المستخدم النموذجي" },
        values: {
          QA11: "QC inspector reviewing individual high-value or complex lots",
          QA16: "QM coordinator processing many routine lots at end of day",
          QGA1: "QM supervisor managing batch dispositions at batch level",
        },
      },
      {
        label: { EN: "Outcome", AR: "النتيجة" },
        values: {
          QA11: "Stock transferred from QI to unrestricted/blocked per decision code",
          QA16: "Multiple lots closed simultaneously with same stock posting rule",
          QGA1: "Batch status updated; may not post stock depending on configuration",
        },
      },
      {
        label: { EN: "Related", AR: "ذات صلة" },
        values: {
          QA11: "QA32 (worklist), QE51N (results), QM01 (notification if reject)",
          QA16: "QA32 (selection), QA11 (individual if needed)",
          QGA1: "MSC1N (batch classification), QA11 (lot-level decisions)",
        },
      },
    ],
  },
];

interface Props {
  allEntries: LogbookEntry[];
  onSelectEntry: (entry: LogbookEntry) => void;
}

export function CompareView({ allEntries, onSelectEntry }: Props) {
  const t = useT();
  const [activeGroup, setActiveGroup] = useState(COMPARISON_GROUPS[0].id);
  const group = COMPARISON_GROUPS.find((g) => g.id === activeGroup) ?? COMPARISON_GROUPS[0];

  // Filter to codes that actually exist in data
  const availableCodes = group.codes.filter((code) =>
    allEntries.some((e) => e.transactionCode === code)
  );

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-[#1C3A2B] mb-1">{t("compare.title")}</h2>
        <p className="text-sm text-[#6B7A6F]">{t("compare.subtitle")}</p>
      </div>

      {/* Group selector */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {COMPARISON_GROUPS.map((g) => (
          <button
            key={g.id}
            onClick={() => setActiveGroup(g.id)}
            aria-pressed={activeGroup === g.id}
            className={`text-sm px-4 py-2 rounded-full border transition-all ${
              activeGroup === g.id
                ? "bg-[#1C3A2B] text-[#F7F5F0] border-[#1C3A2B]"
                : "border-[#D9D4C8] text-[#6B7A6F] hover:border-[#4E7862] hover:text-[#2A2E2B] bg-[#FAFAF8]"
            }`}
          >
            {g.codes.join(" · ")}
          </button>
        ))}
      </div>

      {availableCodes.length === 0 ? (
        <p className="text-sm text-[#6B7A6F]">No data available for this comparison.</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Sticky header row */}
          <div className="min-w-[600px]">
            <div
              className="grid gap-3 mb-3"
              style={{ gridTemplateColumns: `180px repeat(${availableCodes.length}, 1fr)` }}
            >
              <div /> {/* empty corner */}
              {availableCodes.map((code) => {
                const entry = allEntries.find((e) => e.transactionCode === code);
                return (
                  <div key={code} className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-4">
                    <div
                      className="text-3xl font-light text-[#1C3A2B] leading-none mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {code}
                    </div>
                    {entry && (
                      <>
                        <p className="text-xs text-[#6B7A6F] leading-snug mb-2 line-clamp-2">{entry.title}</p>
                        <button
                          onClick={() => onSelectEntry(entry)}
                          className="text-[10px] text-[#4E7862] hover:text-[#1C3A2B] border border-[#C8DFC5] hover:border-[#4E7862] px-2 py-1 rounded-full transition-colors"
                        >
                          {t("general.sapDocs")} ↗
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Comparison rows */}
            {group.rows.map((row, ri) => (
              <div
                key={ri}
                className={`grid gap-3 py-3 ${ri < group.rows.length - 1 ? "border-b border-[#EDE9E1]" : ""}`}
                style={{ gridTemplateColumns: `180px repeat(${availableCodes.length}, 1fr)` }}
              >
                {/* Row label */}
                <div className="flex items-start pt-1">
                  <span className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest leading-snug">
                    {row.label.EN}
                  </span>
                </div>

                {/* Values */}
                {availableCodes.map((code) => (
                  <div key={code} className="bg-[#FAFAF8] border border-[#EDE9E1] rounded-xl p-3">
                    <p className="text-xs text-[#2A2E2B] leading-relaxed">
                      {row.values[code] ?? "—"}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
