import { NextResponse } from "next/server";
import { parseBusinessProcessDoc } from "@/lib/parseBusinessProcessDoc";
import { externalBpDocs } from "@/data/bp-external-docs";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sections = parseBusinessProcessDoc();
    const internal = sections.map((s) => ({
      id: String(s.id),
      slug: s.slug,
      title: s.label,
      module: s.label.match(/^PP\b/) ? "PP"
            : s.label.match(/^QM\b/) ? "QM"
            : s.label.match(/^MM\b/) ? "MM"
            : s.label.match(/^PM\b/) ? "PM"
            : s.label.match(/^HCM\b/i) ? "HCM"
            : s.label.match(/^FICO\b/i) ? "FICO"
            : s.label.match(/^SD\b/) ? "SD"
            : s.label.match(/^TM\b/) ? "TM"
            : s.label.match(/^EHS\b/i) ? "EHS"
            : "General",
      viewUrl: null as string | null,
    }));

    const external = externalBpDocs.map((d) => ({
      id: d.id,
      slug: null as string | null,
      title: d.title,
      module: d.module,
      viewUrl: d.viewUrl,
    }));

    return NextResponse.json([...internal, ...external]);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
