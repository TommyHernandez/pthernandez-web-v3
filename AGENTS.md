# AGENTS.md

Guidance for AI agents working in this repository. Read this before editing.

## Project

Personal portfolio for **Pedro T. Hernandez** — a single-page site (hero → about →
skills → experience → books → contact → footer). Content is mostly hardcoded in
components; the reading list is sourced from markdown files.

## Tech stack

- **Next.js 16** (App Router, Turbopack) — `next 16.2.9`
- **React 19** (`react`/`react-dom` 19.2.4)
- **TypeScript 5** (strict)
- **Tailwind CSS v4** — configured via `@theme inline` in `app/globals.css` (no
  `tailwind.config.*` file; PostCSS plugin `@tailwindcss/postcss`)
- **react-icons** — Lucide set only, imported with `Lu*` aliases
- **gray-matter** — frontmatter parsing for markdown content

## Commands

```bash
npm run dev     # next dev (Turbopack) — usually already running on :3000
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint (eslint-config-next)
```

There is **no test suite**. Verify UI changes by running the app and looking at the
rendered result, not just by type-checking.

## Structure

```
app/
  layout.tsx            # root layout, fonts (Geist / Geist Mono), <html>/<body>
  page.tsx              # composes all sections in order
  globals.css           # Tailwind entry + design tokens (@theme inline)
  components/           # one file per section (Hero, About, Skills, Experience,
                        #   BookRecommendations, Contact, Footer) + shared bits
                        #   (SocialLinks)
  types/                # shared TypeScript types — book.ts, social.ts, index.ts
lib/
  books.ts              # server-only: reads content/books/<locale>/*.md
content/
  books/{en,es}/*.md    # book entries — frontmatter (title, author, image,
                        #   excerpt, link, order) + markdown body
  journey/*.md          # career entries (reference material)
public/images/books/    # book cover images referenced by frontmatter `image`
```

## Conventions

- **Server Components by default.** Add `"use client"` only when a component uses
  hooks or browser APIs (currently only `Contact.tsx`, for its form state). If you
  remove the last hook from a component, drop the `"use client"` directive too.
- **Types live in `app/types/`.** Components and `lib/` modules do not declare their
  own domain types — add them to the matching file there (or a new one, re-exported
  from `index.ts`) and import with `import type { X } from "@/app/types"`. Use
  `import type` so the import is erased at build and never crosses the server/client
  boundary.
- **Social links** come from `socialLinks` in `app/components/SocialLinks.tsx` — the
  single source of truth for URLs. Render them with `<SocialLinks variant="icon" />`
  (hero) or `variant="labelled"` (contact); never hand-roll the anchors again.
- **Icons:** react-icons Lucide only, aliased on import
  (`import { LuHeart as Heart } from "react-icons/lu"`). Do not mix icon libraries
  or use emoji as icons.
- **Content:** `lib/books.ts` is `server-only` and reads the filesystem at
  render/build time — call it from Server Components only. Add a book by dropping a
  new markdown file in `content/books/<locale>/` with the right frontmatter and a
  cover in `public/images/books/`.
- **`app/globals.css` is append-only.** Keep the `@import "tailwindcss"` at the top
  and the `@theme inline` token block intact. Never overwrite this file wholesale —
  doing so un-styles the entire app.

## Design tokens (source of truth: `app/globals.css`)

**Always reference tokens by name** (`bg-white`, `text-ink`, `border-ink/10`,
`style={{ background: "var(--color-teal)" }}`). Never hardcode hex values in
components.

- Surfaces: `--color-background` (`#F7F4EE` cream, page base) · `--color-surface`
  (`#FDFBF7` off-white raised) · `--color-surface-muted` (`#EDE9E0`) · `--color-white`
- Ink / text: `--color-ink` (primary + dark button surface) · `--color-muted`
  (secondary) · `--color-subtle` (tertiary) · `--color-placeholder`
- Accents, each with `-soft` / base / `-strong` variants:
  `teal` (primary brand green) · `amber` · `terracotta` · `blue`

Fonts: Geist / Geist Mono are loaded in `layout.tsx` (`next/font`), exposed as CSS
variables, and mapped to `--font-sans` / `--font-mono` in `@theme`. `body` uses
`var(--font-sans)` (Geist) as the base family. Use `font-mono` for numerals / meta
lines.

## Design house-style (IMPORTANT — this is the established voice)

Sections were reworked with the **Hallmark** design skill into a single editorial
voice. Match it; do not regress to generic AI-template patterns. Reworked components
carry a `/* Hallmark · macrostructure: … */` stamp at the top — preserve it.

**The editorial-ledger voice:**
- **No decorative cards where a hairline does the job.** About / Experience / Skills
  use `border-t` / `border-b` `border-ink/10` ledger rows, not boxed cards.
- **Section head pattern (consistent across all sections):** a small uppercase
  `tracking-widest` eyebrow, then a row with the `text-5xl font-bold` headline on the
  left and a light `text-subtle` descriptor right-aligned (`md:flex-row`, collapses to
  one column on mobile).
- **No hover decoration.** No `hover:shadow-*`, no `hover:scale-*`, no
  `transition-all`, no hover-reveal of content. The site is static by design.
  (Genuine affordance hovers on links/buttons — colour shifts — are fine.)
- **Single teal accent**, used sparingly. Skills is the one exception: it keeps a
  subtle per-category colour (teal / amber / terracotta / blue) as a small tinted
  **icon** only — not colour blocks, strips, or filled chips.
- **Typography purity:** headings are roman (never italic). Carry emphasis with weight
  or accent colour. Italic is allowed only for body/pull-quote text.
- **Honest copy — no invented metrics.** Do not fabricate stats, years, counts, or
  testimonials. (Skill proficiency is shown by type weight, not by invented "N years";
  invented project/mentee counts were deliberately removed.) If a number isn't real,
  leave it out.
- **Curly quotes / apostrophes** in copy (`don't`, `"…"`), not straight ones. Real
  em-dashes (`—`).

**Section background alternation (cream ↔ white).** The page alternates surfaces;
keep this rhythm when adding/reordering sections:

| Section | Background | Card fill (if any) |
|---|---|---|
| Hero | `bg-background` (cream) | — |
| About | `bg-white` | hairline ledger (no cards) |
| Skills | `bg-background` (cream) | hairline ledger (no cards) |
| Experience | `bg-white` | hairline ledger (no cards) |
| BookRecommendations | `bg-background` (cream) | `bg-white` cards |
| Contact | `bg-white` | `bg-surface` cards |
| Footer | `bg-background` (cream) | — |

Card-fill convention: **cream section → white cards; white section → `surface`
(off-white) cards** so cards stay distinct from their background.

Each main section shares the shell `py-28 px-6 relative overflow-hidden`, an inner
`max-w-5xl mx-auto`, and a subtle ambient blob (`opacity-[0.05]`) tinted with an
accent token.

## Responsive

Every change must hold at 375 px with no horizontal scroll. Section heads and ledger
rows collapse to a single column below the `sm`/`md` breakpoints — preserve that.

## Known TODOs / gotchas

- Contact form only `console.log`s + `alert`s on submit; email/social links are
  placeholders (`your.email@example.com`, `https://github.com`). Not yet wired.
- Production domain is **https://pedrotomas.dev** (`metadataBase` in `app/layout.tsx`).
  There is no Open Graph image yet — add one and reference it (relative path resolves
  against `metadataBase`) for richer social cards.
- `.agents/skills/web-design-guidelines/` is a Vercel Web Interface Guidelines review
  skill available in this repo.
```
