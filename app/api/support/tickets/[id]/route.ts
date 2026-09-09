import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { isAdmin } from "@/lib/admin-auth";
import { notifyStatusChange } from "@/lib/teams-notifier";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { status, admin_note } = body as Record<string, string | undefined>;

  const allowedStatuses = ["open", "in_progress", "closed"] as const;
  if (status && !allowedStatuses.includes(status as (typeof allowedStatuses)[number])) {
    return NextResponse.json({ error: "Invalid status value." }, { status: 422 });
  }

  const patch: Record<string, string> = {};
  if (status) patch.status = status;
  if (typeof admin_note === "string") patch.admin_note = admin_note;

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ error: "Nothing to update." }, { status: 422 });
  }

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("support_tickets")
    .update(patch)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }
    console.error("[PATCH /api/support/tickets/:id]", error);
    return NextResponse.json({ error: "Failed to update ticket." }, { status: 500 });
  }

  // Notify Teams when ticket is closed
  if (status === "closed") {
    notifyStatusChange({
      id: data.id,
      submittedBy: data.submitted_by,
      subject: data.subject,
      newStatus: "closed",
      adminNote: data.admin_note ?? undefined,
    }).catch(() => {});
  }

  return NextResponse.json({ ticket: data });
}
