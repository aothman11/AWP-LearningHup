/**
 * i18n.test.ts
 * Verifies that all translation keys are present in both EN and AR locales.
 */

import { translations } from "../lib/i18n";

describe("i18n translation dictionary", () => {
  const keys = Object.keys(translations) as Array<keyof typeof translations>;

  test("has at least 50 translation keys", () => {
    expect(keys.length).toBeGreaterThanOrEqual(50);
  });

  keys.forEach((key) => {
    test(`key "${key}" has both EN and AR values`, () => {
      const entry = translations[key];
      expect(typeof entry.EN).toBe("string");
      expect(entry.EN.length).toBeGreaterThan(0);
      expect(typeof entry.AR).toBe("string");
      expect(entry.AR.length).toBeGreaterThan(0);
    });
  });

  test("no EN value equals the key itself (i.e., is a real translation)", () => {
    keys.forEach((key) => {
      // EN value should not be exactly the raw key string
      expect(translations[key].EN as string).not.toBe(key as string);
    });
  });

  test("AR values are distinct from EN values (indicating real translation)", () => {
    // At least 90% of keys should have different EN and AR values
    const different = keys.filter((k) => (translations[k].EN as string) !== (translations[k].AR as string));
    expect(different.length / keys.length).toBeGreaterThanOrEqual(0.9);
  });
});
