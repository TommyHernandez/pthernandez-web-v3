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
  actions/
    contact.ts           # "use server" — submitContactMessage, the Contact form's action
  components/           # one file per section (Hero, About, Skills, Experience,
                        #   BookRecommendations, Contact, Footer) + shared bits
                        #   (SocialLinks, ContactCaptcha)
  types/                # shared TypeScript types — book.ts, social.ts, contact.ts, index.ts
lib/
  books.ts              # server-only: reads content/books/<locale>/*.md
  contact/
    constants.ts          # field names, length limits, INITIAL_CONTACT_FORM_STATE
                          #   (client-safe — no `server-only`, shared with the form)
    validate.ts           # readContactMessage / validateContactMessage
    email.ts              # server-only: sends via Resend's REST API (fetch, no SDK)
    captcha.ts             # server-only: hCaptcha verification (no-op until configured)
content/
  books/{en,es}/*.md    # book entries — frontmatter (title, author, image,
                        #   excerpt, link, order) + markdown body
  journey/*.md          # career entries (reference material)
public/images/books/    # book cover images referenced by frontmatter `image`
```

## Conventions

- **Server Components by default.** Add `"use client"` only when a component uses
  hooks or browser APIs (currently `Contact.tsx`, for `useActionState`/form state,
  `ContactCaptcha.tsx`, for the hCaptcha script/widget, and `ScrollToTop.tsx`). If you
  remove the last hook from a component, drop the `"use client"` directive too.
- **Types live in `app/types/`.** Components and `lib/` modules do not declare their
  own domain types — add them to the matching file there (or a new one, re-exported
  from `index.ts`) and import with `import type { X } from "@/app/types"`. Use
  `import type` so the import is erased at build and never crosses the server/client
  boundary.
- **Mutations are Server Actions in `app/actions/`.** A `"use server"` module may
  only export async functions — shared constants/initial state it needs (e.g.
  `INITIAL_CONTACT_FORM_STATE`) live in the matching `lib/` module instead and get
  imported by both the action and the client component. Validate on the server
  regardless of client-side `required`/`type` attributes; never trust `FormData`.
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

## Contact form

`Contact.tsx` posts to the `submitContactMessage` Server Action
(`app/actions/contact.ts`) via `useActionState`, so it works with JavaScript
disabled (progressive enhancement) and re-renders with per-field errors and the
visitor's typed values on failure. On success the form resets via a `formRef`
effect (uncontrolled inputs only read `defaultValue` on mount, so a plain
re-render can't clear them).

Anti-bot layers, both server-enforced:
- **Honeypot** — a visually + `aria-hidden` hidden field (`CONTACT_FIELDS.honeypot`,
  currently named `website`). Any value in it is treated as a bot; the action
  returns the normal success state so the bot has no signal it was caught.
- **hCaptcha** — wired but inert until configured. `ContactCaptcha.tsx` renders
  nothing unless `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` is set; `lib/contact/captcha.ts`
  only enforces the check once **both** that and `HCAPTCHA_SECRET_KEY` are set —
  requiring both avoids a half-configured deploy silently rejecting every
  submission. To turn it on: create a site at
  https://dashboard.hcaptcha.com and set both env vars — nothing else to change.

Required env vars (see `.env.template`) for mail delivery via Resend's REST API
(`lib/contact/email.ts`, plain `fetch`, no SDK dependency):
- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (sender — must be on a domain verified in
  Resend), `CONTACT_TO_EMAIL` (inbox the messages land in).
- With these unset, `sendContactEmail` logs the message to the server console in
  development instead of failing; in production it throws instead of pretending
  to succeed.

## Known TODOs / gotchas

- Production domain is **https://pedrotomas.dev** (`metadataBase` in `app/layout.tsx`).
  There is no Open Graph image yet — add one and reference it (relative path resolves
  against `metadataBase`) for richer social cards.
- `.agents/skills/web-design-guidelines/` is a Vercel Web Interface Guidelines review
  skill available in this repo.
```
