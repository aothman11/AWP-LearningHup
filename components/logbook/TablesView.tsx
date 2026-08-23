"use client";

import { useState, useMemo } from "react";
import { sapTables, tableModules, categoriesByModule } from "@/data/sap-tables";
import type { TableModule, SapTable } from "@/data/sap-tables";

const MODULE_STYLES: Record<TableModule, { pill: string; header: string; bg: string }> = {
  PP: { pill: "bg-[#1C3A2B] text-[#F7F5F0]", header: "text-[#1C3A2B]", bg: "bg-[#E8F0E4] border-[#C8DFC5]" },
  QM: { pill: "bg-[#4E7862] text-[#F7F5F0]", header: "text-[#4E7862]", bg: "bg-[#E8F0E4] border-[#C8DFC5]" },
  MM: { pill: "bg-[#6B5A2A] text-[#F7F5F0]", header: "text-[#6B5A2A]", bg: "bg-[#F8EBC5] border-[#e5d08a]" },
};

function TableCard({ table }: { table: SapTable }) {
  const [open, setOpen] = useState(false);
  const s = MODULE_STYLES[table.module];

  return (
    <div className="bg-[#FAFAF8] border border-[#D9D4C8] rounded-2xl overflow-hidden hover:border-[#4E7862] transition-colors">
      <button
        className="w-full text-left px-5 pt-5 pb-4 flex items-start gap-4"
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide ${s.pill}`}>
              {table.module}
            </span>
            <span className="text-[10px] text-[#6B7A6F] bg-[#EDE9E1] border border-[#D9D4C8] px-2.5 py-1 rounded-full">
              {table.category}
            </span>
          </div>
          <div
            className={`text-3xl font-light leading-none tracking-wide mb-1.5 ${s.header}`}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {table.name}
          </div>
          <p className="text-xs text-[#6B7A6F] leading-relaxed line-clamp-2">{table.description}</p>
        </div>
        <span className={`text-[#6B7A6F] text-sm mt-1 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="border-t border-[#EDE9E1] px-5 py-4 space-y-4">
          <div>
            <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-2">Key Fields</p>
            <div className="flex flex-wrap gap-1.5">
              {table.keyFields.map((f) => (
                <span
                  key={f}
                  className="text-xs text-[#2A2E2B] bg-[#EDE9E1] border border-[#D9D4C8] px-2.5 py-1 rounded-lg font-mono"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          {table.notes && (
            <div>
              <p className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-1.5">Notes</p>
              <p className="text-xs text-[#4E7862] leading-relaxed italic">{table.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function TablesView() {
  const [activeModule, setActiveModule] = useState<TableModule>("PP");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return sapTables.filter((t) => {
      if (t.module !== activeModule) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.keyFields.some((f) => f.toLowerCase().includes(q)) ||
        t.notes.toLowerCase().includes(q)
      );
    });
  }, [activeModule, search]);

  const categories = categoriesByModule(activeModule);

  return (
    <div className="space-y-6">
      {/* Module tabs + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex gap-1 p-1 bg-[#EDE9E1] rounded-2xl w-fit">
          {tableModules.map((m) => (
            <button
              key={m}
              onClick={() => { setActiveModule(m); setSearch(""); }}
              className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-colors ${
                activeModule === m
                  ? MODULE_STYLES[m].pill
                  : "text-[#6B7A6F] hover:text-[#2A2E2B]"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search tables…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 max-w-xs text-sm bg-[#FAFAF8] border border-[#D9D4C8] rounded-full px-4 py-1.5 text-[#2A2E2B] placeholder-[#D9D4C8] focus:outline-none focus:border-[#4E7862]"
        />
        <span className="text-xs text-[#6B7A6F]">
          {filtered.length} table{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Intro */}
      <div className={`rounded-2xl border p-5 ${MODULE_STYLES[activeModule].bg}`}>
        <h2
          className={`text-4xl font-light mb-1 ${MODULE_STYLES[activeModule].header}`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {activeModule} Database Tables
        </h2>
        <p className="text-xs text-[#6B7A6F] leading-relaxed">
          {activeModule === "PP" && "Key tables for Production Planning: production orders, routings, BOMs, and MRP planning data. Essential for custom reports, debugging, and data extraction."}
          {activeModule === "QM" && "Key tables for Quality Management: inspection lots, results, usage decisions, notifications, and master data. Used for quality reporting and audit trails."}
          {activeModule === "MM" && "Key tables for Materials Management: material master, stock quantities, goods movements, and purchasing documents. Foundation for inventory and procurement reporting."}
        </p>
      </div>

      {/* Tables grouped by category */}
      {categories.map((cat) => {
        const tables = filtered.filter((t) => t.category === cat);
        if (tables.length === 0) return null;
        return (
          <section key={cat}>
            <h3 className="text-[10px] font-semibold text-[#6B7A6F] uppercase tracking-widest mb-3">{cat}</h3>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
              {tables.map((t) => (
                <TableCard key={t.name} table={t} />
              ))}
            </div>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#6B7A6F]">
          <p className="text-3xl mb-2 font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            No tables found
          </p>
          <p className="text-sm">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
