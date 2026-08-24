/**
 * search.test.ts
 * Tests for search normalization utilities.
 */

import { normalizeQuery, buildHaystack, matchesQuery } from "../lib/search";

describe("normalizeQuery()", () => {
  test("trims whitespace", () => {
    expect(normalizeQuery("  MRP  ")).toBe("mrp");
  });

  test("converts to lowercase", () => {
    expect(normalizeQuery("MD01")).toBe("md01");
    expect(normalizeQuery("Quality Management")).toBe("quality management");
  });

  test("collapses multiple whitespace to single space", () => {
    expect(normalizeQuery("production  order  create")).toBe("production order create");
  });

  test("handles Arabic text without modification (lowercase is safe for Arabic)", () => {
    const arabic = "التخطيط";
    expect(normalizeQuery(arabic)).toBe(arabic.toLowerCase());
  });

  test("returns empty string for empty input", () => {
    expect(normalizeQuery("")).toBe("");
    expect(normalizeQuery("   ")).toBe("");
  });
});

describe("buildHaystack()", () => {
  test("joins all fields into a single lowercase string", () => {
    const hay = buildHaystack(["MD01", "MRP Run", "planning"]);
    expect(hay).toBe("md01 mrp run planning");
  });

  test("handles empty array", () => {
    expect(buildHaystack([])).toBe("");
  });
});

describe("matchesQuery()", () => {
  test("returns true when query is empty", () => {
    expect(matchesQuery("anything", "")).toBe(true);
  });

  test("single-word match", () => {
    const hay = buildHaystack(["MD01", "MRP Run Total Planning"]);
    expect(matchesQuery(hay, "mrp")).toBe(true);
    expect(matchesQuery(hay, "qa32")).toBe(false);
  });

  test("multi-word query — all words must be present", () => {
    const hay = buildHaystack(["Production Order", "Create", "CO01"]);
    expect(matchesQuery(hay, "production create")).toBe(true);
    expect(matchesQuery(hay, "production qa")).toBe(false);
  });

  test("partial match within a field (substring)", () => {
    const hay = buildHaystack(["inspection lot"]);
    expect(matchesQuery(hay, "insp")).toBe(true);
  });

  test("case-insensitive match via normalized inputs", () => {
    const hay = buildHaystack(["MRP Planning"]);
    expect(matchesQuery(hay, normalizeQuery("MRP"))).toBe(true);
  });

  test("Arabic text match", () => {
    const hay = buildHaystack(["تشغيل التخطيط"]);
    expect(matchesQuery(hay, "التخطيط")).toBe(true);
    expect(matchesQuery(hay, "الجودة")).toBe(false);
  });
});
