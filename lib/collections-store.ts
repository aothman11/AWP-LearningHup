/**
 * Collections store adapter — localStorage backed, versioned, migration-safe.
 *
 * Storage key: "pp-qm-collections-v1"
 * Format version: 1
 *
 * The exported CollectionsAdapter interface allows a future authenticated
 * persistence layer to be swapped in without changing consumer code.
 */

const STORAGE_KEY = "pp-qm-collections-v1";
const SCHEMA_VERSION = 1;

export interface Collection {
  id: string;
  name: string;
  createdAt: string; // ISO 8601
}

export interface CollectionsState {
  version: number;
  collections: Collection[];
  /** Map of collectionId → Set of entry IDs */
  memberships: Record<string, string[]>;
}

const EMPTY_STATE: CollectionsState = {
  version: SCHEMA_VERSION,
  collections: [{ id: "default", name: "Saved", createdAt: new Date().toISOString() }],
  memberships: { default: [] },
};

// ─── Internal helpers ─────────────────────────────────────────────────────────

function load(): CollectionsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(EMPTY_STATE);
    const parsed = JSON.parse(raw) as Partial<CollectionsState>;
    // Migration: version mismatch falls back to empty (safe default)
    if (!parsed || typeof parsed !== "object" || parsed.version !== SCHEMA_VERSION) {
      return structuredClone(EMPTY_STATE);
    }
    // Validate structure
    if (!Array.isArray(parsed.collections) || typeof parsed.memberships !== "object") {
      return structuredClone(EMPTY_STATE);
    }
    return parsed as CollectionsState;
  } catch {
    return structuredClone(EMPTY_STATE);
  }
}

function save(state: CollectionsState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage quota exceeded or not available — fail silently
  }
}

function generateId(): string {
  return `col-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ─── Public adapter interface ─────────────────────────────────────────────────

export interface CollectionsAdapter {
  getState(): CollectionsState;
  createCollection(name: string): Collection;
  renameCollection(id: string, name: string): void;
  deleteCollection(id: string): void;
  addToCollection(collectionId: string, entryId: string): void;
  removeFromCollection(collectionId: string, entryId: string): void;
  getCollectionsForEntry(entryId: string): string[];
  isInAnyCollection(entryId: string): boolean;
  clearAll(): void;
}

export const collectionsStore: CollectionsAdapter = {
  getState(): CollectionsState {
    return load();
  },

  createCollection(name: string): Collection {
    const state = load();
    const col: Collection = { id: generateId(), name: name.trim() || "Untitled", createdAt: new Date().toISOString() };
    state.collections.push(col);
    state.memberships[col.id] = [];
    save(state);
    return col;
  },

  renameCollection(id: string, name: string): void {
    const state = load();
    const col = state.collections.find((c) => c.id === id);
    if (col) { col.name = name.trim() || col.name; save(state); }
  },

  deleteCollection(id: string): void {
    if (id === "default") return; // protect default collection
    const state = load();
    state.collections = state.collections.filter((c) => c.id !== id);
    delete state.memberships[id];
    save(state);
  },

  addToCollection(collectionId: string, entryId: string): void {
    const state = load();
    if (!state.memberships[collectionId]) state.memberships[collectionId] = [];
    if (!state.memberships[collectionId].includes(entryId)) {
      state.memberships[collectionId].push(entryId);
      save(state);
    }
  },

  removeFromCollection(collectionId: string, entryId: string): void {
    const state = load();
    if (state.memberships[collectionId]) {
      state.memberships[collectionId] = state.memberships[collectionId].filter((id) => id !== entryId);
      save(state);
    }
  },

  getCollectionsForEntry(entryId: string): string[] {
    const state = load();
    return state.collections
      .filter((col) => state.memberships[col.id]?.includes(entryId))
      .map((col) => col.id);
  },

  isInAnyCollection(entryId: string): boolean {
    const state = load();
    return state.collections.some((col) => state.memberships[col.id]?.includes(entryId));
  },

  clearAll(): void {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  },
};
