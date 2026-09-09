/**
 * TeamNotifier — sends Adaptive Card messages to a Microsoft Teams channel
 * via an Incoming Webhook URL (env: TEAMS_WEBHOOK_URL).
 *
 * All methods are fire-and-forget; they log errors but never throw so that
 * a Teams failure never blocks the main request flow.
 */

import { formatDate } from "@/lib/format";

const WEBHOOK_URL = process.env.TEAMS_WEBHOOK_URL ?? "";

export interface NewTicketPayload {
  id: string;
  submittedBy: string;
  department: string;
  subject: string;
  description: string;
  createdAt: string; // ISO string
}

export interface StatusChangePayload {
  id: string;
  submittedBy: string;
  subject: string;
  newStatus: "open" | "in_progress" | "closed";
  adminNote?: string;
}


async function post(body: object): Promise<void> {
  if (!WEBHOOK_URL) {
    console.warn("[TeamNotifier] TEAMS_WEBHOOK_URL is not set — skipping notification.");
    return;
  }
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error(`[TeamNotifier] Webhook responded with ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    console.error("[TeamNotifier] Failed to send Teams notification:", err);
  }
}

/**
 * Notify the Teams channel when a new support ticket is submitted.
 */
export async function notifyNewTicket(payload: NewTicketPayload): Promise<void> {
  const truncated =
    payload.description.length > 200
      ? payload.description.slice(0, 200) + "…"
      : payload.description;

  const shortId = payload.id.slice(0, 8).toUpperCase();

  await post({
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.4",
          body: [
            {
              type: "TextBlock",
              size: "Large",
              weight: "Bolder",
              text: "New Support Ticket — AWP Learning Hub",
              color: "Accent",
            },
            {
              type: "FactSet",
              facts: [
                { title: "Ticket ID", value: shortId },
                { title: "From", value: payload.submittedBy },
                { title: "Department", value: payload.department },
                { title: "Subject", value: payload.subject },
                { title: "Time", value: formatDate(payload.createdAt) },
              ],
            },
            {
              type: "TextBlock",
              text: "Description",
              weight: "Bolder",
              spacing: "Medium",
            },
            {
              type: "TextBlock",
              text: truncated,
              wrap: true,
            },
          ],
        },
      },
    ],
  });
}

/**
 * Notify the Teams channel when an admin closes a ticket.
 */
export async function notifyStatusChange(payload: StatusChangePayload): Promise<void> {
  if (payload.newStatus !== "closed") return;

  const shortId = payload.id.slice(0, 8).toUpperCase();

  const facts: { title: string; value: string }[] = [
    { title: "Ticket ID", value: shortId },
    { title: "Submitted By", value: payload.submittedBy },
    { title: "Subject", value: payload.subject },
    { title: "New Status", value: "Closed" },
  ];

  if (payload.adminNote) {
    facts.push({ title: "Admin Note", value: payload.adminNote });
  }

  await post({
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.4",
          body: [
            {
              type: "TextBlock",
              size: "Large",
              weight: "Bolder",
              text: "Support Ticket Closed — AWP Learning Hub",
              color: "Good",
            },
            {
              type: "FactSet",
              facts,
            },
          ],
        },
      },
    ],
  });
}
