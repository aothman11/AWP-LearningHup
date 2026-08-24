# PP/QM Knowledge Guide — Feature Guide

_Last updated: 2026-08-24_

---

## Overview

The PP/QM Knowledge Guide is a bilingual (EN/AR) reference application for SAP Production Planning and Quality Management. It provides structured access to 61 T-code definitions, process flow diagrams, integration maps, and learning paths — all running client-side with no external dependencies.

---

## Features by Phase

### Phase 1 — Discovery and Filter Experience

**Improved search:**
- Matches across T-code, EN title, AR title, description, category, tags, prerequisites, whatNext fields
- Multi-word queries supported (all words must be present)
- `normalizeQuery()` in `lib/search.ts` trims, lowercases, and collapses whitespace
- Arabic text searches correctly without special handling (lowercase is Unicode-safe)

**Result summary:**
- Dynamic text: "22 results · QM" or "4 results matching 'inspection lot'"
- Located next to the sort control, updates in real time

**Active filter chips:**
- Removable chips appear below the search bar when filters are active
- Each chip targets its specific filter; "Clear all" only shows when something is active

**No-results state:**
- Shows active criteria and a one-click "Reset all filters" button
- Fully localized in both languages

**Keyboard shortcuts:**
- `/` focuses search (existing)
- `Esc` clears or closes (drawer closes if open; search blurs if focused)
- `?` opens shortcuts panel

---

### Phase 2 — End-to-End Localization and RTL Quality

**Translation dictionary:** `lib/i18n.ts`
- 100+ keys covering all UI strings
- Both EN and AR values for every key
- Dev-time `console.warn` for any missing key at runtime

**`useT()` hook:**
- Consumes `useLang()` from `LangContext`
- Returns a `t(key)` function that reads from the dictionary

**Coverage:**
- Header, tab bar, stat bar, filters, search, result summary, cards, drawer (all sections), keyboard shortcuts dialog, saved workspace, collections, learning paths, comparison view, process flow, no-results states

**RTL quality:**
- `lang`/`dir` attributes set on `<html>` via `LangContext`
- T-codes rendered in `dir="ltr"` context within RTL page
- Arabic font (Sakkal Majalla) applied to Arabic text blocks with `lang="ar"` attribute
- Arrows (←/→/↗) are semantic in their context

---

### Phase 3 — Content Quality, Transparency, and Entry Detail

**New type fields** (`types/logbook.ts`):
- `contentStatus?: "quick-reference" | "detailed-guide" | "in-progress"`
- `prerequisites?: string[]`
- `whenToUse?: string`
- `commonMistakes?: string[]`
- `whatNext?: string[]`

**Status derivation** (`lib/content-status.ts`):
- `"detailed-guide"`: entry has `steps[]`, `keyFields[]`, AND `output`
- `"quick-reference"`: entry has description only
- `"in-progress"`: no content at all
- Explicit `contentStatus` field overrides derivation

**Status badge:**
- Visible on cards and in the drawer header
- Icon + text label (non-color-only)
- Localized in both languages

**Content filter in sidebar:**
- "All content" / "Detailed guides only" / "Exclude in-progress"

**Extended data for 9 high-value T-codes:**
MD01, MD04, CO01, MIGO, QA11, QA32, QE51N, QM01, QP01

Each has:
- `whenToUse` — when to choose this over alternatives
- `prerequisites` — what must be in place before running
- `commonMistakes` — frequent errors and how to avoid them
- `whatNext` — suggested follow-on steps

These appear in the drawer as structured sections.

---

### Phase 4 — Saved Workspace and Personal Collections

**Collections adapter** (`lib/collections-store.ts`):
- localStorage key: `pp-qm-collections-v1`
- Versioned format (schema version: 1)
- Corrupt data returns empty state, never crashes
- Exported `CollectionsAdapter` interface for future authenticated persistence

**Named collections:**
- Default collection "Saved" (cannot be deleted)
- Create, rename, delete additional collections
- Entry can be in multiple collections simultaneously

**Save action** (replaces simple star):
- "⊕" icon on cards opens a `SavePopover` with collection checkboxes and "New collection" input
- Keyboard accessible (Escape closes, Enter creates)
- Save button also appears in drawer footer with "Save to workspace"

**Saved tab:**
- Sidebar lists all collections with entry counts
- Main area shows entry cards for selected collection
- Remove entries individually; rename or delete collections in-place

**Coherent state:**
- `entryCollectionMap` is derived from `collectionsState` and passed to all cards
- State updates immediately on any add/remove/create/delete action

---

### Phase 5 — Guided Learning, Comparisons, and Process Integration

**Learning paths** (`data/learning-paths.ts`):
- 4 paths: PP Planner, QM Inspector, Production Supervisor, SAP PP/QM Consultant
- Each has EN+AR title and description, role label, estimated duration, ordered entry IDs
- Progress stored in localStorage key `pp-qm-paths-v1`
- Progress bar shows completion percentage
- Individual steps can be checked/unchecked; reset button clears path progress
- Steps link to entry drawer via ↗ button

**Comparison view** (`components/logbook/CompareView.tsx`):
- MRP Run Types: MD01 / MD02 / MD03
- Usage Decision: QA11 / QA16 / QGA1
- Rows: Use Case, Scope, Typical User, Outcome, When to Avoid / Related
- Only renders codes that exist in the data
- Responsive horizontal scroll on small screens
- Click a code header to open its drawer

**Process flow integration:**
- `ProcessFlow` T-code clicks now open the detail drawer directly (if entry exists)
- Falls back to search filter if entry is not in the dataset

---

### Phase 6 — Final Hardening, UX Quality, and Documentation

**Accessibility improvements:**
- All interactive elements have `aria-label` or visible text
- Filter buttons use `aria-pressed`
- Drawer uses `role="dialog" aria-modal="true"`
- Shortcuts modal uses `role="dialog" aria-modal="true"`
- Progress bars use `role="progressbar" aria-valuenow/min/max`
- Stat pills have `aria-label`
- Result list uses `role="list/listitem"`
- `aria-live="polite"` on result count
- Navigation uses `<nav>` with `aria-label`
- `aria-current="page"` on active tab
- Section headings inside drawer have `id` refs

**Tests** (`__tests__/`):
- `i18n.test.ts` — 100+ assertions: all keys have EN+AR; AR ≠ EN for 90%+
- `collections-store.test.ts` — CRUD, migration, corrupt data, multi-collection
- `search.test.ts` — normalization, multi-word, Arabic, partial match
- `content-status.test.ts` — derivation logic, explicit override, isComplete
- Total: 167 tests, all passing

---

## Manual QA Checklist

### Search and Filters
- [ ] Type "MD01" in search — only MD01 appears
- [ ] Type "inspection" — QM entries with inspection in title/description match
- [ ] Type Arabic: "تخطيط" — PP MRP entries match
- [ ] Multi-word: "production order create" — CO01 and similar match
- [ ] Active chips appear for each filter; ×  on chip removes only that filter
- [ ] "Clear all" resets search and all filters
- [ ] No-results state shows with reset button when nothing matches

### Filters
- [ ] Module buttons work (PP, QM, PP/QM, All)
- [ ] Category checkboxes are multi-select
- [ ] Relevance filter excludes lower-priority items correctly
- [ ] Content Status filter: "Detailed guides only" shows only MD01, MD04, CO01, MIGO, QA11, QA32, QE51N, QM01, QP01 (and others with all 3 detail fields)
- [ ] Keywords (tags) filter works

### Detail Drawer
- [ ] Click a card → drawer slides in
- [ ] Extended sections visible for MD01: "When to Use", "Prerequisites", "Common Mistakes", "What to Do Next"
- [ ] Status badge (●/◐/○) visible in drawer header
- [ ] "Save to workspace" opens popover with collections
- [ ] Copy T-code button copies to clipboard
- [ ] Related T-code buttons navigate
- [ ] Esc closes drawer

### Saved Workspace
- [ ] Save MD01 to "Saved" collection → appears in Saved tab
- [ ] Create new collection "My Work" → appears in sidebar
- [ ] Move MD01 to "My Work" → check both collections
- [ ] Rename collection → name updates
- [ ] Remove entry from collection → gone from that collection
- [ ] Delete collection (non-default) → gone; default preserved

### Learning Paths
- [ ] 4 paths visible on Paths tab
- [ ] Click a path → step list shown with progress bar
- [ ] Check a step → turns green, progress updates
- [ ] ↗ button on step → drawer opens for that entry
- [ ] Reset button → all steps unchecked
- [ ] Progress survives page reload (localStorage)

### Compare Tab
- [ ] MRP Run Types table shows MD01/MD02/MD03 columns
- [ ] Usage Decision table shows QA11/QA16/QGA1 columns
- [ ] Click entry header → opens drawer
- [ ] Horizontally scrollable on narrow screens

### Language Switch
- [ ] Toggle EN→AR: page text switches to Arabic; `dir="rtl"` on html
- [ ] Toggle AR→EN: reverts to LTR
- [ ] T-codes (MD01, CO01) stay LTR in AR mode
- [ ] Arabic titles display in Arabic font
- [ ] All tab labels, filter labels, drawer section labels translate

### Keyboard Navigation
- [ ] `/` focuses search from anywhere (non-input)
- [ ] `Esc` blurs search when focused; closes drawer when open
- [ ] `?` opens shortcuts panel; `Esc` closes it

### Process Flow
- [ ] Click a T-code in Process Flow → drawer opens (if entry exists in data)
- [ ] Flow phases render correctly in both languages

---

## Data and Migration Notes

- `data/qm-logbook.ts` — 9 entries extended with new optional fields; all other entries unchanged
- `data/learning-paths.ts` — new file; references entry IDs from qm-logbook.ts
- `lib/collections-store.ts` — localStorage key `pp-qm-collections-v1`; version field enables future schema migration
- `lib/search.ts` — stateless utility; no migration needed
- `lib/content-status.ts` — stateless utility; no migration needed
- Legacy `pp-qm-favorites` key is preserved and still works alongside collections

---

## Known Limitations

1. **ProcessFlow T-codes with spaces** (e.g., "QA01 + CO01", "MIGO + QA32"): these are combined entries in the data; the flow click handler searches by exact `transactionCode` field, so combined entries will open if the ProcessFlow uses the same combined string. A more robust handler could parse and open the first matching code.

2. **Arabic typography**: Sakkal Majalla is a system font (not web-loaded). If not installed on the viewer's device, it falls back to serif. A future iteration could load a Google Font (e.g., Noto Sans Arabic) via the existing Google Fonts CSP allowlist.

3. **Collections sync**: Collections are per-browser localStorage only. No cross-device or cross-session sync. The `CollectionsAdapter` interface in `lib/collections-store.ts` is designed to be replaced with an API-backed implementation without changing consumer components.

4. **Learning path progress**: Progress is per-browser. Resetting a path only clears progress for the current browser.

5. **Comparison data**: Only 2 comparison groups are hard-coded. Adding groups requires editing `CompareView.tsx`. A future version could read comparison groups from a data file.

6. **Static detail pages (`/logbook/[id]`)**: These pages do not yet include the extended fields (whenToUse, prerequisites, etc.) or the new drawer save button. The drawer on the main logbook page has full support; the static pages show a subset of the data. This is noted as a recommended next iteration item.

---

## Deployment Status

No deployment was performed. The application builds successfully as a Next.js static export. All code targets client-side rendering with no server-side data dependencies, external APIs, or hosted database.

**Build command:** `npm run build`  
**Build result:** ✓ Compiled successfully — 66 static pages, 0 TypeScript errors  
**Test command:** `npm test`  
**Test result:** 167 tests passing across 4 test suites
