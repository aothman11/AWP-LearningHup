"use client";

/**
 * AwpProcessesTab — category-first layout for the AWP Processes tab.
 *
 * Shows a grid of category cards. Clicking a card navigates to
 * /hub/awp-processes/[categorySlug] where the process list lives.
 *
 * All category data is driven by data/awp-categories.ts — add new
 * categories or processes there without touching this component.
 */

import Link from "next/link";
import { awpCategories } from "@/data/awp-categories";
import { processes } from "@/data/processes";
import { useLang } from "@/context/LangContext";
import { useT } from "@/lib/i18n";

export function AwpProcessesTab() {
  const { lang } = useLang();
  const t = useT();

  return (
    <div>
      {/* Section header */}
      <div className="mb-8">
        <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1">
          {t("awp.processes.heading")}
        </p>
        <h3
          className="text-2xl font-light text-[#1C3A2B] mb-1"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {lang === "AR" ? "استعراض العمليات حسب الفئة" : "Browse Processes by Category"}
        </h3>
        <p className="text-sm text-[#6B7A6F]">
          {t("awp.processes.subheading")}
        </p>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {awpCategories.map((cat) => {
          // Count how many processes in this category actually exist in the data
          const count = cat.processIds.filter((id) =>
            processes.some((p) => p.id === id)
          ).length;

          return (
            <Link
              key={cat.slug}
              href={`/hub/awp-processes/${cat.slug}`}
              className="group relative bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl p-6 hover:border-[#047836] hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 select-none">{cat.icon}</div>

              {/* Name */}
              <div className="mb-2">
                <h4 className="text-base font-semibold text-[#1C3A2B] leading-snug">
                  {lang === "AR" ? cat.nameAR : cat.nameEN}
                </h4>
                {lang === "EN" && (
                  <p
                    className="text-xs text-[#6B7A6F] mt-0.5"
                    dir="rtl"
                    lang="ar"
                  >
                    {cat.nameAR}
                  </p>
                )}
                {lang === "AR" && (
                  <p className="text-xs text-[#6B7A6F] mt-0.5">{cat.nameEN}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-[#6B7A6F] leading-relaxed flex-1 mb-4 line-clamp-3">
                {lang === "AR" ? cat.descriptionAR : cat.descriptionEN}
              </p>

              {/* Footer: count + arrow */}
              <div className="flex items-center justify-between pt-3 border-t border-[#EDE9E1]">
                <span className="text-xs font-medium text-[#4E7862]">
                  {count === 0
                    ? (lang === "AR" ? "قريباً" : "Coming soon")
                    : count === 1
                    ? t("awp.processes.count.one")
                    : t("awp.processes.count.other").replace("{n}", String(count))}
                </span>
                <span className="text-[#047836] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
