import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { notifyNewTicket } from "@/lib/teams-notifier";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { submitted_by, department, subject, description } = body as Record<
    string,
    string
  >;

  // Basic validation
  if (!submitted_by?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 422 });
  }
  const allowedDepts = ["PP", "QM", "MM", "MDG", "Other"] as const;
  if (!allowedDepts.includes(department as (typeof allowedDepts)[number])) {
    return NextResponse.json({ error: "Invalid department." }, { status: 422 });
  }
  if (!subject?.trim()) {
    return NextResponse.json({ error: "Subject is required." }, { status: 422 });
  }
  if (!description || description.trim().length < 20) {
    return NextResponse.json(
      { error: "Description must be at least 20 characters." },
      { status: 422 },
    );
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("support_tickets")
    .insert({
      submitted_by: submitted_by.trim(),
      department,
      subject: subject.trim(),
      description: description.trim(),
    })
    .select()
    .single();

  if (error) {
    console.error("[POST /api/support/tickets]", error);
    return NextResponse.json({ error: "Failed to save ticket." }, { status: 500 });
  }

  // Fire-and-forget — never let Teams failure fail the request
  notifyNewTicket({
    id: data.id,
    submittedBy: data.submitted_by,
    department: data.department,
    subject: data.subject,
    description: data.description,
    createdAt: data.created_at,
  }).catch(() => {});

  return NextResponse.json({ ticket: data }, { status: 201 });
}
