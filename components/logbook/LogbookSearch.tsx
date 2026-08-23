"use client";

interface Props {
  value: string;
  onChange: (v: string) => void;
  count: number;
  total: number;
  sort: string;
  onSortChange: (s: string) => void;
}

const SORT_OPTIONS = [
  { value: "module", label: "Module" },
  { value: "category", label: "Category" },
  { value: "transactionCode", label: "T-code" },
  { value: "awpRelevance", label: "AWP Relevance" },
];

export function LogbookSearch({ value, onChange, count, total, sort, onSortChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      {/* Search input */}
      <div className="relative flex-1 min-w-0">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search by T-code, title, description, tags…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#1a1f2e] border border-slate-700 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#047836] focus:ring-1 focus:ring-[#047836]/50 transition-colors"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs text-slate-500 whitespace-nowrap">Sort by</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-[#1a1f2e] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-[#047836] cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      <div className="shrink-0 text-xs text-slate-500 whitespace-nowrap">
        <span className="text-slate-300 font-medium">{count}</span> / {total} entries
      </div>
    </div>
  );
}
