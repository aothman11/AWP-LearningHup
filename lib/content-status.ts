import type { LogbookEntry, ContentStatus } from "@/types/logbook";

/**
 * Derives the content status of a logbook entry.
 *
 * Rules:
 * - If `contentStatus` is explicitly set on the entry, use it.
 * - Else if the entry has steps[], keyFields[], AND output → "detailed-guide"
 * - Else if description is non-empty → "quick-reference"
 * - Else → "in-progress"
 */
export function deriveContentStatus(entry: LogbookEntry): ContentStatus {
  if (entry.contentStatus) return entry.contentStatus;

  const hasSteps = Array.isArray(entry.steps) && entry.steps.length > 0;
  const hasKeyFields = Array.isArray(entry.keyFields) && entry.keyFields.length > 0;
  const hasOutput = Boolean(entry.output && entry.output.trim().length > 0);

  if (hasSteps && hasKeyFields && hasOutput) return "detailed-guide";
  if (entry.description && entry.description.trim().length > 0) return "quick-reference";
  return "in-progress";
}

/** Returns true if the entry should appear when excluding in-progress items. */
export function isComplete(entry: LogbookEntry): boolean {
  return deriveContentStatus(entry) !== "in-progress";
}
