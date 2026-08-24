/**
 * Normalizes a search query for matching:
 * - Trims whitespace
 * - Converts to lowercase (handles Latin and Arabic alike)
 * - Collapses multiple whitespace into single space
 */
export function normalizeQuery(q: string): string {
  return q.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Build the searchable haystack string for an entry.
 * All fields that should be searched are concatenated here.
 */
export function buildHaystack(fields: string[]): string {
  return fields.join(" ").toLowerCase();
}

/**
 * Returns true if the query matches the haystack.
 * Supports multi-word queries (all words must be present, in any order).
 */
export function matchesQuery(haystack: string, normalizedQuery: string): boolean {
  if (!normalizedQuery) return true;
  const words = normalizedQuery.split(" ").filter(Boolean);
  return words.every((word) => haystack.includes(word));
}
