import { NextResponse } from "next/server";
import { parseBusinessProcessDoc } from "@/lib/parseBusinessProcessDoc";
import { externalBpDocs } from "@/data/bp-external-docs";

export const dynamic = "force-dynamic";

function moduleFromLabel(label: string): string {
  const t = label.toUpperCase();
  if (t.startsWith("PP") || t.includes("PRODUCTION") || t.includes("MRP")) return "PP";
  if (t.startsWith("QM") || t.includes("QUALITY")) return "QM";
  if (t.startsWith("MM") || t.includes("MATERIAL") || t.includes("PROCUREMENT")) return "MM";
  if (t.startsWith("PM") || t.includes("MAINTENANCE")) return "PM";
  if (t.includes("HCM") || t.includes("PAYROLL") || t.includes("EMPLOYEE")) return "HCM";
  if (t.includes("FICO") || t.includes("FINANCE") || t.includes("ACCOUNT")) return "FICO";
  if (t.startsWith("SD") || t.includes("SALES")) return "SD";
  if (t.startsWith("TM") || t.includes("TRANSPORT")) return "TM";
  if (t.includes("EHS") || t.includes("SAFETY")) return "EHS";
  return "General";
}

export async function GET() {
  try {
    const sections = parseBusinessProcessDoc();
    const internal = sections.map((s) => ({
      id: s.slug,
      slug: s.slug,
      title: s.label,
      module: moduleFromLabel(s.label),
      /** null = internal reader at /learning/business-processes/[slug] */
      driveId: null as string | null,
    }));

    const external = externalBpDocs.map((d) => ({
      id: d.id,
      slug: null as string | null,
      title: d.title,
      module: d.module,
      /** non-null = blueprint viewer at /learning/bp/[id] */
      driveId: d.id,
    }));

    return NextResponse.json([...internal, ...external]);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
