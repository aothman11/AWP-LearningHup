"use client";

import { useState, useMemo } from "react";

interface LiveItem {
  area: "PP" | "QM" | "Integration";
  title: string;
  summary: string;
  url: string;
  date: string;
  relevance: "high" | "medium";
}

interface Update {
  area: "PP" | "QM" | "Integration";
  title: string;
  summary: string;
  relevance: "high" | "medium";
  release: string;
  topics: string[];
}

const ALL_UPDATES: Update[] = [
  // ── PP ──────────────────────────────────────────────────────────────────────
  {
    area: "PP",
    title: "MRP Live — Real-Time Planning on HANA",
    summary:
      "MRP Live replaces the classic MRP run (MD01) with an in-memory engine that completes in minutes instead of hours. It supports single-item/multi-level planning and is the strategic MRP path for all S/4HANA customers. Classic MRP remains available but receives no further functional investment.",
    relevance: "high",
    release: "S/4HANA 2020+",
    topics: ["MRP & Demand Planning"],
  },
  {
    area: "PP",
    title: "Demand-Driven MRP (DDMRP)",
    summary:
      "DDMRP is natively integrated in S/4HANA 2021 and later. It positions strategic decoupling points with demand-driven buffers, reducing shortages and excess inventory simultaneously. The Manage Decoupling Points Fiori app replaces manual planning tables.",
    relevance: "high",
    release: "S/4HANA 2021+",
    topics: ["MRP & Demand Planning"],
  },
  {
    area: "PP",
    title: "Production Operator Cockpit (Fiori F3669)",
    summary:
      "A role-based Fiori app that gives shop-floor operators a single view of their work orders, component availability, and confirmations. Replaces scattered use of CO11N / CO27 / MIGO for operators, reducing training time and touch points.",
    relevance: "high",
    release: "S/4HANA 2022+",
    topics: ["Production Orders", "S/4HANA Fiori Apps"],
  },
  {
    area: "PP",
    title: "Manage Production Orders (Fiori F2338)",
    summary:
      "The planner-facing Fiori app for creating, releasing, and monitoring production orders — replaces CO01/CO03 for most planning workflows. Supports mass release, exception filtering, and deep-links into component and operation details.",
    relevance: "high",
    release: "S/4HANA 2021+",
    topics: ["Production Orders", "S/4HANA Fiori Apps"],
  },
  {
    area: "PP",
    title: "Simplified Goods Issue via Backflush",
    summary:
      "In S/4HANA, backflush processing is optimised for HANA parallel posting. Components flagged for backflush post movement type 261 automatically during CO11N confirmation, eliminating the separate CO27 step and reducing posting errors.",
    relevance: "medium",
    release: "S/4HANA 2020+",
    topics: ["Production Orders"],
  },
  {
    area: "PP",
    title: "Predictive MRP — Early Shortage Detection",
    summary:
      "Available from S/4HANA 2023, Predictive MRP uses embedded analytics to flag future shortages before the MRP run. Planners see at-risk materials in a Fiori overview and can act before shortages propagate through the BOM.",
    relevance: "medium",
    release: "S/4HANA 2023+",
    topics: ["MRP & Demand Planning"],
  },
  {
    area: "PP",
    title: "SAP Digital Manufacturing (DMC) Integration",
    summary:
      "S/4HANA 2022 tightened the integration between Production Planning and SAP Digital Manufacturing Cloud. Shop-floor orders, confirmations, and quality data flow bidirectionally without custom middleware, replacing older SAP ME/MII setups.",
    relevance: "medium",
    release: "S/4HANA 2022+",
    topics: ["Production Orders"],
  },

  // ── QM ──────────────────────────────────────────────────────────────────────
  {
    area: "QM",
    title: "Manage Quality Notifications (Fiori F2169)",
    summary:
      "The primary Fiori app for creating and processing QM notifications (Q1/Q2/Q3). Replaces QM01/QM02 for most users, with guided task lists, defect recording, and corrective action tracking in one screen. Available since S/4HANA 1909.",
    relevance: "high",
    release: "S/4HANA 1909+",
    topics: ["QM Notifications", "S/4HANA Fiori Apps"],
  },
  {
    area: "QM",
    title: "Inspection Lot Cockpit — Streamlined Usage Decisions",
    summary:
      "The Inspect Lot (Fiori) app consolidates result recording (QE51N) and usage decision (QA11) into a single workflow. Inspectors record characteristic results and post the usage decision without switching transactions, cutting cycle time by up to 40%.",
    relevance: "high",
    release: "S/4HANA 2021+",
    topics: ["Quality Inspection Lots", "S/4HANA Fiori Apps"],
  },
  {
    area: "QM",
    title: "QM in Procurement — Automatic Inspection Lots at GR",
    summary:
      "When a quality info record (QI01) activates inspection type 01, the goods receipt via MIGO automatically creates an inspection lot and moves stock to quality inspection. S/4HANA 2022 improved the activation logic so QMAT entries are auto-created during material extension, reducing setup effort.",
    relevance: "high",
    release: "S/4HANA 2022+",
    topics: ["Quality Inspection Lots"],
  },
  {
    area: "QM",
    title: "Certificate of Analysis — Digital Delivery (QV51/F2225)",
    summary:
      "The Manage Quality Certificates Fiori app (F2225) lets QC teams generate and email Certificates of Analysis directly from the inspection lot, pulling results automatically. Replaces manual QV51 print output and eliminates re-keying in customer portals.",
    relevance: "medium",
    release: "S/4HANA 2021+",
    topics: ["QM Notifications", "S/4HANA Fiori Apps"],
  },
  {
    area: "QM",
    title: "Statistical Process Control (SPC) in QM",
    summary:
      "S/4HANA 2023 extended embedded SPC charts (control charts, Cp/Cpk) accessible directly from characteristic results in QE51N and the Inspect Lot app. Eliminates the need for standalone SPC software for standard monitoring.",
    relevance: "medium",
    release: "S/4HANA 2023+",
    topics: ["Quality Inspection Lots"],
  },
  {
    area: "QM",
    title: "Audit Management Integration with QM Notifications",
    summary:
      "SAP Audit Management now links audit findings directly to QM notifications for corrective/preventive actions (CAPA). S/4HANA 2022 introduced a standard integration that closes the loop between audit programmes and shop-floor quality events.",
    relevance: "medium",
    release: "S/4HANA 2022+",
    topics: ["QM Notifications"],
  },

  // ── Integration ─────────────────────────────────────────────────────────────
  {
    area: "Integration",
    title: "Batch Traceability — Where-Used in Real Time",
    summary:
      "S/4HANA's in-memory batch where-used list (MB57 / Batch Information Cockpit) now executes in seconds regardless of batch volume. The Fiori Batch Where-Used app replaces the classic MBGR report and supports multi-level genealogy for recall scenarios.",
    relevance: "high",
    release: "S/4HANA 2020+",
    topics: ["Batch Management"],
  },
  {
    area: "Integration",
    title: "Batch Classification Simplified",
    summary:
      "In S/4HANA 2023, batch classification values can be inherited from the inspection lot characteristics at usage decision, removing the need for manual batch classification updates after QM release. This tightens the PP–QM–SD traceability chain.",
    relevance: "high",
    release: "S/4HANA 2023+",
    topics: ["Batch Management", "Quality Inspection Lots"],
  },
  {
    area: "Integration",
    title: "In-Process Inspection Triggered from Routing Operations",
    summary:
      "Inspection type 03 (in-process) lots are created automatically when a production order operation is confirmed, if an inspection plan is linked in the routing. S/4HANA 2022 improved the trigger logic to support partial confirmations and rework scenarios.",
    relevance: "high",
    release: "S/4HANA 2022+",
    topics: ["Production Orders", "Quality Inspection Lots"],
  },
  {
    area: "Integration",
    title: "Goods Receipt for Production Order — Automatic FG Inspection Lot",
    summary:
      "When inspection type 04 is active for a finished material, confirming yield in CO11N triggers both the FG goods receipt and the inspection lot creation in a single posting. S/4HANA eliminates the need for a separate QA01 manual lot creation step.",
    relevance: "high",
    release: "S/4HANA 2020+",
    topics: ["Production Orders", "Quality Inspection Lots"],
  },
  {
    area: "Integration",
    title: "Stock Segment Visibility — PP and QM Aligned",
    summary:
      "S/4HANA 2023 introduced stock segmentation improvements that make quality-inspection, blocked, and unrestricted stock visible in a single Fiori overview for both planners (MD04 equivalent) and QM managers, removing the need to cross-check MB52 and QA33 separately.",
    relevance: "medium",
    release: "S/4HANA 2023+",
    topics: ["MRP & Demand Planning", "Quality Inspection Lots"],
  },
];

const TOPICS = [
  "MRP & Demand Planning",
  "Production Orders",
  "Quality Inspection Lots",
  "S/4HANA Fiori Apps",
  "Batch Management",
  "QM Notifications",
];

const AREA_COLORS: Record<string, string> = {
  PP: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  QM: "bg-blue-900/60 text-blue-300 border border-blue-700",
  Integration: "bg-violet-900/60 text-violet-300 border border-violet-700",
};

const AREA_COLORS_LIVE: Record<string, string> = {
  PP: "bg-emerald-900/60 text-emerald-300 border border-emerald-700",
  QM: "bg-blue-900/60 text-blue-300 border border-blue-700",
  Integration: "bg-violet-900/60 text-violet-300 border border-violet-700",
};

export function ResearchDrawer() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [tab, setTab] = useState<"curated" | "live">("curated");
  const [liveItems, setLiveItems] = useState<LiveItem[]>([]);
  const [liveLoading, setLiveLoading] = useState(false);
  const [liveError, setLiveError] = useState<string | null>(null);

  function toggleTopic(t: string) {
    setSelected((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  async function fetchLive() {
    setLiveLoading(true);
    setLiveError(null);
    try {
      const res = await fetch("/api/sap-research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topics: selected }),
      });
      const data = await res.json();
      if (!res.ok) setLiveError(data.error ?? `Error ${res.status}`);
      else setLiveItems(data.items ?? []);
    } catch {
      setLiveError("Network error — please try again.");
    } finally {
      setLiveLoading(false);
    }
  }

  const filtered = useMemo(() => {
    if (selected.length === 0) return ALL_UPDATES;
    return ALL_UPDATES.filter((u) =>
      u.topics.some((t) => selected.includes(t))
    );
  }, [selected]);

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => (a.relevance === b.relevance ? 0 : a.relevance === "high" ? -1 : 1)),
    [filtered]
  );

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-6 z-40 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#047836" }}
        aria-label="Open SAP updates reference"
      >
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        S/4HANA updates
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-zinc-800 px-5 pt-4 pb-0">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-white">S/4HANA PP/QM Updates</h2>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Tabs */}
          <div className="flex gap-0">
            {(["curated", "live"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors ${
                  tab === t
                    ? "border-emerald-500 text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {t === "curated" ? `📚 Curated (${ALL_UPDATES.length})` : "🌐 Live News"}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {/* Topic filter chips */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
            Filter by topic {selected.length > 0 && <span className="text-zinc-400">· {sorted.length} shown</span>}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => toggleTopic(t)}
                className={`rounded-full px-3 py-1 text-xs transition-colors ${
                  selected.includes(t)
                    ? "bg-emerald-700 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {t}
              </button>
            ))}
            {selected.length > 0 && (
              <button
                onClick={() => setSelected([])}
                className="rounded-full px-3 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Curated tab */}
          {tab === "curated" && (
            <div className="space-y-4">
              {sorted.map((item, i) => (
                <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${AREA_COLORS[item.area]}`}>
                        {item.area}
                      </span>
                      {item.relevance === "high" && <span className="text-amber-400 text-xs">★</span>}
                    </div>
                    <span className="text-[10px] text-zinc-600 shrink-0">{item.release}</span>
                  </div>
                  <h3 className="mb-1.5 text-sm font-medium text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          )}

          {/* Live tab */}
          {tab === "live" && (
            <div>
              <button
                onClick={fetchLive}
                disabled={liveLoading}
                className="mb-5 w-full rounded-xl py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
                style={{ background: "#047836" }}
              >
                {liveLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Fetching from SAP Community…
                  </span>
                ) : liveItems.length > 0 ? "Refresh" : "Fetch latest posts"}
              </button>

              {liveError && (
                <div className="mb-4 rounded-xl border border-red-800/60 bg-red-950/40 p-4 text-sm text-red-300">
                  {liveError}
                </div>
              )}

              {liveItems.length > 0 && (
                <div className="space-y-4">
                  {liveItems.map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-600 transition-colors"
                    >
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${AREA_COLORS_LIVE[item.area]}`}>
                            {item.area}
                          </span>
                          {item.relevance === "high" && <span className="text-amber-400 text-xs">★</span>}
                        </div>
                        <span className="text-[10px] text-zinc-600 shrink-0">{item.date}</span>
                      </div>
                      <h3 className="mb-1.5 text-sm font-medium text-white leading-snug">{item.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{item.summary}</p>
                      <p className="mt-2 text-[10px] text-emerald-600">Read full article ↗</p>
                    </a>
                  ))}
                </div>
              )}

              {!liveLoading && !liveError && liveItems.length === 0 && (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-3 text-4xl opacity-30">🌐</div>
                  <p className="text-sm text-zinc-500">
                    Pulls the latest SAP PP/QM news from Google News — no API key needed. Results are cached for 1 hour.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-800 px-5 py-3">
          <p className="text-[10px] text-zinc-600 leading-relaxed">
            {tab === "curated"
              ? "Curated from SAP release notes. Verify against your S/4HANA version's release note."
              : "Live news via Google News RSS · cached 1 h · no API key required."}
          </p>
        </div>
      </div>
    </>
  );
}
