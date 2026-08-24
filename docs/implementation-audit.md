# PP/QM Guide — Implementation Audit

_Recorded: 2026-08-24 | Author: Engineering audit_

---

## Architecture Map

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3.2 (App Router, Turbopack) |
| Language | TypeScript 5, strict mode |
| Styling | Tailwind CSS v4 (PostCSS plugin, literal hex tokens) |
| State | React `useState`/`useMemo` (client components); no external store |
| Persistence | `localStorage` (lang, favorites) |
| Routing | App Router — `/` (redirect), `/logbook` (main), `/logbook/[id]` (static detail) |
| Data | Static TypeScript arrays in `data/` — no API, no DB |
| Localization | `context/LangContext.tsx` — `useLang()` → `{ lang: "EN"|"AR", toggle }` |
| Build | `npm run build` (Next.js static export) |
| Tests | None configured at audit time |
| Fonts | Cormorant Garamond (T-code display), Sakkal Majalla (Arabic) — loaded via CSS/system |

---

## Current User-Flow Map

```
/ → /logbook (redirect)
/logbook
  ├── Header (title, lang toggle, shortcuts, export PDF)
  ├── Tab bar: T-Code Reference | PP Integrations | Database Tables | Process Flow
  ├── Stat bar (counts)
  └── T-Code Reference tab:
        ├── Desktop sidebar (collapsible): Module / Category / Relevance / Keywords filters
        ├── Mobile filter drawer (overlay)
        ├── LogbookSearch (text input + sort + count)
        ├── Pinned favorites strip
        └── Results grid (LogbookCard × N)
              └── Click → EntryDrawer (slide-in, full detail)

/logbook/[id] — static SSG detail page (same content as drawer, shareable URL)
```

---

## Technical Constraints

- **No auth, no DB, no external services** — localStorage only
- Tailwind v4 uses PostCSS plugin (`@tailwindcss/postcss`); no `tailwind.config.js` — uses CSS variables directly
- All design tokens are literal hex values (no Tailwind theme file)
- `"use client"` on all interactive components; layout and static pages can be server components
- Arabic font (Sakkal Majalla) is a system font — no CDN import; fallback to serif
- Next.js App Router pages under `app/` — `layout.tsx` wraps in `LangProvider`
- Build produces SSG output (61 detail pages pre-generated via `generateStaticParams`)

---

## File Mapping by Phase

### Phase 1 — Discovery & Filter
- Modify: `components/logbook/LogbookSearch.tsx` — result summary, localized placeholder
- Modify: `components/logbook/LogbookFilters.tsx` — active filter chips, clear-all
- Modify: `app/logbook/page.tsx` — no-results state, keyboard shortcuts, search normalization
- Create: `lib/search.ts` — normalized search utility

### Phase 2 — i18n & RTL
- Create: `lib/i18n.ts` — translation dictionary + `useT()` hook
- Modify: all components to replace hard-coded EN strings with `t()` calls

### Phase 3 — Content Quality
- Modify: `types/logbook.ts` — add `contentStatus`, `prerequisites`, `whenToUse`, `commonMistakes`, `whatNext`
- Create: `lib/content-status.ts` — status derivation utility
- Modify: `data/qm-logbook.ts` — populate 9 high-value T-codes
- Modify: `components/logbook/LogbookCard.tsx` — status badge
- Modify: `components/logbook/EntryDrawer.tsx` — extended detail sections
- Modify: `app/logbook/[id]/page.tsx` — extended detail sections

### Phase 4 — Collections Workspace
- Create: `lib/collections-store.ts` — localStorage adapter
- Create: `components/logbook/SavePopover.tsx` — save-to-workspace UI
- Create: `components/logbook/SavedView.tsx` — saved tab view
- Modify: `app/logbook/page.tsx` — add "Saved" tab, wire save state

### Phase 5 — Learning Paths & Comparison
- Create: `data/learning-paths.ts` — 4 learning paths
- Create: `components/logbook/LearningPaths.tsx` — paths UI
- Create: `components/logbook/CompareView.tsx` — comparison table
- Modify: `components/logbook/ProcessFlow.tsx` — T-code click opens drawer

### Phase 6 — Hardening
- Create: `__tests__/i18n.test.ts`
- Create: `__tests__/collections-store.test.ts`
- Create: `__tests__/search.test.ts`
- Create: `__tests__/content-status.test.ts`
- Create: `docs/feature-guide.md`
- Modify: `package.json` — add jest configuration

---

## Existing Features

- T-code reference with 61 entries (PP + QM modules)
- Module/Category/Relevance/Keyword filters with collapsible sections
- Full-text search across T-code, title (EN+AR), description, tags, notes
- Sort by module, category, T-code, relevance
- Favorites (star) persisted in localStorage
- Entry detail drawer (slide-in) with steps, key fields, output, related T-codes
- Static detail pages at `/logbook/[id]` for shareable URLs
- Language toggle (EN/AR) with RTL direction on `<html>`
- Keyboard shortcuts: `/` focuses search, `Esc` blurs, `?` opens shortcuts panel
- PDF export via `window.print()`
- PP Integrations tab (`IntegrationMap`)
- Database Tables tab (`TablesView`)
- Process Flow tab (`ProcessFlow`) — 5-phase diagram with T-codes

---

## UX Gaps Identified

1. Hard-coded English strings throughout all components (not using i18n layer)
2. No active filter chips — users cannot see what's filtered at a glance
3. Result summary is minimal ("22 / 61 entries" only, no context)
4. No-results state lacks suggestions or one-click reset
5. No content quality signals on cards (no way to know if entry is a stub or detailed guide)
6. Favorites (star) is the only save mechanism — no named collections
7. Tab labels in T-Code Reference are hard-coded English
8. Process flow T-code buttons close the flow and set search; they don't open a detail drawer
9. No learning paths or guided workflows for new users
10. No comparison view for similar T-codes (MD01/02/03, QA11/16/QGA1)

---

## Build Baseline (pre-changes)

```
Command: npm run build
Result: ✓ Compiled successfully
Pages: 66 static (/, /logbook, 61 detail pages, /not-found + others)
TypeScript: ✓ No errors
Warnings: None
```
