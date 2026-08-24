/**
 * collections-store.test.ts
 * Tests for the collections storage adapter — CRUD, migration safety, corrupt data.
 */

// Mock localStorage for Node environment
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(global, "localStorage", { value: localStorageMock });

// Must import after mock is set up
import { collectionsStore } from "../lib/collections-store";

beforeEach(() => {
  localStorageMock.clear();
  collectionsStore.clearAll();
});

describe("collectionsStore", () => {
  describe("getState()", () => {
    test("returns default state when storage is empty", () => {
      const state = collectionsStore.getState();
      expect(state.collections).toHaveLength(1);
      expect(state.collections[0].id).toBe("default");
      expect(state.memberships["default"]).toEqual([]);
    });

    test("handles corrupt JSON gracefully — returns empty state", () => {
      localStorageMock.setItem("pp-qm-collections-v1", "{{not valid json}");
      const state = collectionsStore.getState();
      expect(state.collections).toHaveLength(1);
      expect(state.collections[0].id).toBe("default");
    });

    test("handles wrong schema version — returns empty state", () => {
      localStorageMock.setItem("pp-qm-collections-v1", JSON.stringify({ version: 99, collections: [], memberships: {} }));
      const state = collectionsStore.getState();
      expect(state.collections).toHaveLength(1);
    });
  });

  describe("createCollection()", () => {
    test("creates a new collection with the given name", () => {
      const col = collectionsStore.createCollection("My MRP Work");
      expect(col.name).toBe("My MRP Work");
      expect(col.id).not.toBe("default");
      const state = collectionsStore.getState();
      expect(state.collections).toHaveLength(2);
    });

    test("trims whitespace from collection name", () => {
      const col = collectionsStore.createCollection("  QM Setup  ");
      expect(col.name).toBe("QM Setup");
    });

    test("falls back to 'Untitled' for empty name", () => {
      const col = collectionsStore.createCollection("");
      expect(col.name).toBe("Untitled");
    });

    test("initialises empty membership list for new collection", () => {
      const col = collectionsStore.createCollection("Test");
      const state = collectionsStore.getState();
      expect(state.memberships[col.id]).toEqual([]);
    });
  });

  describe("addToCollection() / removeFromCollection()", () => {
    test("adds an entry to a collection", () => {
      collectionsStore.addToCollection("default", "pp-md01");
      const state = collectionsStore.getState();
      expect(state.memberships["default"]).toContain("pp-md01");
    });

    test("does not add duplicate entry", () => {
      collectionsStore.addToCollection("default", "pp-md01");
      collectionsStore.addToCollection("default", "pp-md01");
      const state = collectionsStore.getState();
      expect(state.memberships["default"].filter((id) => id === "pp-md01")).toHaveLength(1);
    });

    test("removes an entry from a collection", () => {
      collectionsStore.addToCollection("default", "pp-md01");
      collectionsStore.removeFromCollection("default", "pp-md01");
      const state = collectionsStore.getState();
      expect(state.memberships["default"]).not.toContain("pp-md01");
    });

    test("entry can be in multiple collections", () => {
      const col = collectionsStore.createCollection("Secondary");
      collectionsStore.addToCollection("default", "pp-md01");
      collectionsStore.addToCollection(col.id, "pp-md01");
      const ids = collectionsStore.getCollectionsForEntry("pp-md01");
      expect(ids).toContain("default");
      expect(ids).toContain(col.id);
    });
  });

  describe("renameCollection()", () => {
    test("renames an existing collection", () => {
      collectionsStore.renameCollection("default", "Primary");
      const state = collectionsStore.getState();
      expect(state.collections[0].name).toBe("Primary");
    });
  });

  describe("deleteCollection()", () => {
    test("deletes a non-default collection", () => {
      const col = collectionsStore.createCollection("Temp");
      collectionsStore.deleteCollection(col.id);
      const state = collectionsStore.getState();
      expect(state.collections.find((c) => c.id === col.id)).toBeUndefined();
    });

    test("does NOT delete the default collection", () => {
      collectionsStore.deleteCollection("default");
      const state = collectionsStore.getState();
      expect(state.collections.find((c) => c.id === "default")).toBeDefined();
    });

    test("removes memberships when collection is deleted", () => {
      const col = collectionsStore.createCollection("Temp");
      collectionsStore.addToCollection(col.id, "pp-md01");
      collectionsStore.deleteCollection(col.id);
      const state = collectionsStore.getState();
      expect(state.memberships[col.id]).toBeUndefined();
    });
  });

  describe("isInAnyCollection()", () => {
    test("returns false for unsaved entry", () => {
      expect(collectionsStore.isInAnyCollection("pp-md01")).toBe(false);
    });

    test("returns true after entry is added", () => {
      collectionsStore.addToCollection("default", "pp-md01");
      expect(collectionsStore.isInAnyCollection("pp-md01")).toBe(true);
    });
  });
});
