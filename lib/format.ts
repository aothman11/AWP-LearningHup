/**
 * Shared date/string formatting utilities.
 */

/**
 * Formats an ISO timestamp as DD/MM/YYYY HH:MM in the browser's local time.
 * Returns the raw string unchanged if parsing fails.
 */
export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}
