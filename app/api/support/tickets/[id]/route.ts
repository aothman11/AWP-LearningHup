import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { notifyStatusChange } from "@/lib/teams-notifier";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

/** Simple bearer-token guard — matches ADMIN_SECRET env var. */
function isAdmin(req: NextRequest): boolean {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return !!process.env.ADMIN_SECRET && token === process.env.ADMIN_SECRET;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  if (!isAdmin(req)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = params;

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
