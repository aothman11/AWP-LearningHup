import { NextResponse } from "next/server";
import { parseBusinessProcessDoc } from "@/lib/parseBusinessProcessDoc";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sections = parseBusinessProcessDoc();
    const docs = sections.map((s) => ({
      id: String(s.id),
      slug: s.slug,
      title: s.label,
      module: "General",
    }));
    return NextResponse.json(docs);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
