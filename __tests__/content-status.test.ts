/**
 * content-status.test.ts
 * Tests for content status derivation logic.
 */

import { deriveContentStatus, isComplete } from "../lib/content-status";
import type { LogbookEntry } from "../types/logbook";

function makeEntry(overrides: Partial<LogbookEntry> = {}): LogbookEntry {
  return {
    id: "test-entry",
    module: "PP",
    category: "MRP",
    transactionCode: "MD01",
    title: "Test",
    titleAr: "اختبار",
    description: "A test entry",
    processArea: "Test Area",
    sapDocUrl: "",
    relatedTransactions: [],
    tags: [],
    awpRelevance: "High",
    notes: "",
    lastVerified: "2025-01-01",
    ...overrides,
  };
}

describe("deriveContentStatus()", () => {
  test("returns 'detailed-guide' when steps, keyFields, and output are all present", () => {
    const entry = makeEntry({
      steps: ["Step 1", "Step 2"],
      keyFields: [{ field: "Plant", description: "The plant" }],
      output: "Planned orders created.",
    });
    expect(deriveContentStatus(entry)).toBe("detailed-guide");
  });

  test("returns 'quick-reference' when only description is present (no steps/fields/output)", () => {
    const entry = makeEntry({ description: "Executes an MRP run." });
    expect(deriveContentStatus(entry)).toBe("quick-reference");
  });

  test("returns 'quick-reference' when steps are present but keyFields or output is missing", () => {
    const entry = makeEntry({
      steps: ["Step 1"],
      output: "Some output",
      // no keyFields
    });
    expect(deriveContentStatus(entry)).toBe("quick-reference");
  });

  test("returns 'in-progress' when description is empty and no detail fields", () => {
    const entry = makeEntry({ description: "" });
    expect(deriveContentStatus(entry)).toBe("in-progress");
  });

  test("respects explicitly set contentStatus over derived value", () => {
    const entry = makeEntry({
      contentStatus: "in-progress",
      steps: ["Step 1"],
      keyFields: [{ field: "A", description: "b" }],
      output: "Output",
    });
    // Even though it would be 'detailed-guide' by derivation, explicit wins
    expect(deriveContentStatus(entry)).toBe("in-progress");
  });

  test("returns 'detailed-guide' for a fully populated entry", () => {
    const entry = makeEntry({
      steps: ["Enter plant", "Press F8"],
      keyFields: [
        { field: "Plant", description: "SAP plant" },
        { field: "Date", description: "Planning date" },
      ],
      output: "Planned orders generated.",
    });
    expect(deriveContentStatus(entry)).toBe("detailed-guide");
  });
});

describe("isComplete()", () => {
  test("returns true for 'detailed-guide'", () => {
    const entry = makeEntry({
      steps: ["Step"],
      keyFields: [{ field: "F", description: "d" }],
      output: "O",
    });
    expect(isComplete(entry)).toBe(true);
  });

  test("returns true for 'quick-reference'", () => {
    expect(isComplete(makeEntry({ description: "Some desc" }))).toBe(true);
  });

  test("returns false for 'in-progress'", () => {
    expect(isComplete(makeEntry({ description: "", contentStatus: "in-progress" }))).toBe(false);
  });
});
