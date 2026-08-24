"use client";

import { useState, useEffect, useCallback } from "react";
import type { LearningPath } from "@/data/learning-paths";
import type { LogbookEntry } from "@/types/logbook";
import { useT } from "@/lib/i18n";
import { useLang } from "@/context/LangContext";

const PATHS_STORAGE_KEY = "pp-qm-paths-v1";

interface PathProgress {
  [pathId: string]: Set<string>; // Set of completed entry IDs
}

function loadProgress(): PathProgress {
  try {
    const raw = localStorage.getItem(PATHS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, string[]>;
    return Object.fromEntries(Object.entries(parsed).map(([k, v]) => [k, new Set(v)]));
  } catch { return {}; }
}

function saveProgress(p: PathProgress): void {
  try {
    const serializable = Object.fromEntries(Object.entries(p).map(([k, v]) => [k, [...v]]));
    localStorage.setItem(PATHS_STORAGE_KEY, JSON.stringify(serializable));
  } catch {}
}

interface Props {
  paths: LearningPath[];
  allEntries: LogbookEntry[];
  onSelectEntry: (entry: LogbookEntry) => void;
}

export function LearningPaths({ paths, allEntries, onSelectEntry }: Props) {
  const t = useT();
  const { lang } = useLang();
  const [progress, setProgress] = useState<PathProgress>({});
  const [activePath, setActivePath] = useState<string | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const toggleStep = useCallback((pathId: string, entryId: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      const set = new Set(next[pathId] ?? []);
      set.has(entryId) ? set.delete(entryId) : set.add(entryId);
      next[pathId] = set;
      saveProgress(next);
      return next;
    });
  }, []);

  const resetPath = useCallback((pathId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [pathId]: new Set<string>() };
      saveProgress(next);
      return next;
    });
  }, []);

  const activePathData = paths.find((p) => p.id === activePath);

  if (activePath && activePathData) {
    const pathProgress = progress[activePath] ?? new Set();
    const pathEntries = activePathData.entryIds
      .map((id) => allEntries.find((e) => e.id === id))
      .filter((e): e is LogbookEntry => Boolean(e));
    const completed = pathEntries.filter((e) => pathProgress.has(e.id)).length;
    const total = pathEntries.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
      <div>
        {/* Path header */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => setActivePath(null)}
            className="text-[#6B7A6F] hover:text-[#1C3A2B] transition-colors text-sm flex items-center gap-1"
            aria-label="Back to paths"
          >
            ← {t("paths.title")}
          </button>
          <span className="text-[#D9D4C8]">/</span>
          <span className="text-sm text-[#1C3A2B] font-medium">{activePathData.title[lang]}</span>
        </div>

        <div className="bg-[#E8F0E4] border border-[#C8DFC5] rounded-2xl p-6 mb-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-medium text-[#1C3A2B] mb-1">{activePathData.title[lang]}</h2>
              <p className="text-sm text-[#6B7A6F] leading-relaxed">{activePathData.description[lang]}</p>
            </div>
            <button
              onClick={() => resetPath(activePath)}
              className="text-xs text-[#6B7A6F] hover:text-[#9B3030] transition-colors shrink-0"
            >
              {t("paths.resetPath")}
            </button>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-[#6B7A6F]">
              <span>{completed}/{total} {t("paths.steps")}</span>
              <span>{pct}% {t("paths.progress")}</span>
            </div>
            <div className="h-1.5 bg-[#C8DFC5] rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${pct}% complete`}>
              <div
                className="h-full bg-[#1C3A2B] transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <ol className="space-y-3">
          {pathEntries.map((entry, i) => {
            const done = pathProgress.has(entry.id);
            return (
              <li
                key={entry.id}
                className={`flex gap-4 p-4 rounded-2xl border transition-all ${
                  done ? "bg-[#E8F0E4] border-[#C8DFC5]" : "bg-[#FAFAF8] border-[#D9D4C8]"
                }`}
              >
                {/* Step number / check */}
                <button
                  onClick={() => toggleStep(activePath, entry.id)}
                  aria-label={done ? t("paths.markUndone") : t("paths.markDone")}
                  aria-pressed={done}
                  className={`shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all mt-0.5 ${
                    done
                      ? "bg-[#1C3A2B] border-[#1C3A2B] text-[#F7F5F0]"
                      : "border-[#C8DFC5] text-[#6B7A6F] hover:border-[#4E7862]"
                  }`}
                >
                  {done ? "✓" : i + 1}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-light text-[#1C3A2B]"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px" }}
                    >
                      {entry.transactionCode}
                    </span>
                    <span className="text-[10px] text-[#6B7A6F] bg-[#EDE9E1] px-2 py-0.5 rounded-full border border-[#D9D4C8]">
                      {entry.category}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#2A2E2B] leading-snug mb-1">{lang === "AR" && entry.titleAr ? entry.titleAr : entry.title}</p>
                  <p className="text-xs text-[#6B7A6F] leading-relaxed line-clamp-2">{entry.description}</p>
                </div>

                {/* Open detail */}
                <button
                  onClick={() => onSelectEntry(entry)}
                  aria-label={`Open ${entry.transactionCode} details`}
                  className="shrink-0 self-start text-xs text-[#4E7862] hover:text-[#1C3A2B] border border-[#C8DFC5] hover:border-[#4E7862] bg-[#E8F0E4] hover:bg-[#C8DFC5] px-2.5 py-1.5 rounded-full transition-colors mt-0.5"
                >
                  ↗
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  // Path list view
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-[#1C3A2B] mb-1">{t("paths.title")}</h2>
        <p className="text-sm text-[#6B7A6F]">{t("paths.subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {paths.map((path) => {
          const pathProgress = progress[path.id] ?? new Set();
          const pathEntries = path.entryIds.filter((id) => allEntries.some((e) => e.id === id));
          const completed = pathEntries.filter((id) => pathProgress.has(id)).length;
          const total = pathEntries.length;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
          const started = completed > 0;

          return (
            <button
              key={path.id}
              onClick={() => setActivePath(path.id)}
              className="text-left bg-[#FAFAF8] border border-[#D9D4C8] hover:border-[#4E7862] hover:bg-[#E8F0E4] rounded-2xl p-6 transition-all group"
              aria-label={`${path.title[lang]}: ${pct}% complete`}
            >
              {/* Color indicator */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: path.dotColor }}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="text-base font-medium text-[#1C3A2B] group-hover:text-[#1C3A2B] leading-snug">
                    {path.title[lang]}
                  </h3>
                  <p className="text-[10px] text-[#6B7A6F] mt-0.5">{lang === "AR" ? path.roleAr : path.role}</p>
                </div>
                <span className="text-xs text-[#6B7A6F] shrink-0">
                  {path.estimatedDuration[lang]}
                </span>
              </div>

              <p className="text-xs text-[#6B7A6F] leading-relaxed mb-4 line-clamp-2">
                {path.description[lang]}
              </p>

              {/* Progress */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-[#6B7A6F]">
                  <span>{total} {t("paths.steps")}</span>
                  {started && <span>{pct}%</span>}
                </div>
                <div className="h-1 bg-[#EDE9E1] rounded-full overflow-hidden" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: path.dotColor }}
                  />
                </div>
              </div>

              <div className="mt-4 text-xs font-medium text-[#4E7862] group-hover:text-[#1C3A2B] transition-colors">
                {pct === 100 ? t("paths.completed") : started ? t("paths.continuePath") : t("paths.startPath")} →
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
