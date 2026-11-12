# 🏛️ Sahitya Yatra — Master Project BLUEPRINT

> **Role for AI Assistants & Collaborators:**
> Read this BLUEPRINT before planning, generating, or modifying code, copy, or styles in this repository. Follow the standards and quality gates defined below without exception.

---

## 1. 🎯 Project Identity & Purpose

- **Project Name:** Sahitya Yatra (साहित्य यात्रा)
- **Tagline:** Celebrating Marathi Literature, Heritage & Timeless Books
- **Target Audience:** Readers of Marathi literature, students, diaspora seeking classic and contemporary Marathi literature, book collectors, and cultural enthusiasts.
- **Languages:** Bilingual — Marathi (`mr`) primary + English (`en`) secondary via `next-intl`.
- **Commerce Mode:** Direct-to-consumer online bookstore powered by Shopify headless integration.

---

## 2. ⚡ Architecture & Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Server components by default, Turbopack / Webpack dev |
| **Language** | TypeScript 5 + React 19 | Strict type safety, clean interfaces |
| **Styling** | Tailwind CSS v4 | Semantic color tokens, responsive utilities |
| **Internationalization** | `next-intl` | Locale-based routing (`/[locale]/...`), messages in `src/messages/` |
| **Icons** | `lucide-react` | Clean, accessible icon system |
| **State & UI** | Curated Primitives | Advised by `pick-ui-library` (Sonner, base-ui, clsx) |
| **Catalog & Commerce** | Shopify Storefront API | Products, collections, inventory, and cart checkout |

---

## 3. 🎨 Visual World & Design System

### Mood & Atmosphere
**Warm, literary, dignified, and culturally authentic.** Like entering a storied, sunlit Indian library filled with classic hardcover Marathi books.

### Color Palette
- **Primary / Brand:** Heritage Maroon (`#8B1E1E` / `#7B1818`) — evokes classic Marathi book cloth and royal seals.
- **Accent / Warmth:** Saffron Gold (`#D97706` / `#F59E0B`) — celebratory, warm accents, badges, and CTAs.
- **Canvas / Backgrounds:** 
  - Primary canvas: Ivory Cream (`#FFFDF9`)
  - Secondary card surface: Soft Parchment (`#FBF7F0`)
  - Muted borders: Warm Sand (`#E5DFD5`)
- **Text:**
  - Headings & Primary Body: Deep Charcoal Ink (`#1C1917`)
  - Secondary / Metadata: Warm Slate (`#57534E`)

### Typography Discipline
- **Devanagari (Marathi):** Mukta / Noto Sans Devanagari with generous line-height (`1.6`–`1.8`) for diacritics.
- **Latin (English):** Inter / Geist with balanced tracking.
- **Maximum 2 Font Families.** No random typography imports.

---

## 4. 🚫 Absolute Anti-AI Slop Rules (Strictly Enforced)

1. **NO Generic AI Tropes:** Zero purple-on-black neon gradients, zero generic glowing spheres, zero floating meaningless blobs.
2. **NO Hallucinated Copy:** Never invent dummy books, fake author quotes, or generic "Empower your reading journey" jargon. Use real Marathi authors (V.S. Khandekar, Pu. La. Deshpande, Shivaji Sawant, Kusumagraj) and real book covers from `/public/images/books/`.
3. **NO Broken i18n Strings:** Every single user-facing string MUST exist in both `src/messages/mr.json` and `src/messages/en.json`. Never hardcode plain text into JSX.
4. **NO Inaccessible Buttons:** Every interactive element must be a native `<button>` or `<Link>` with an explicit focus ring and hover treatment.

---

## 5. 🧰 Loaded AI Skills & When to Use Them

When assisting on this project, invoke these specialized skills:

| Phase | Specialized Skill | Action |
|---|---|---|
| **UI Polish & Quality** | `impeccable` | Run for design reviews, high-craft components, and layout refinements |
| **Anti-Slop Greenfield** | `hallmark` | Run when building new landing pages, heroes, or marketing sections |
| **Library Choices** | `pick-ui-library` | Run before adding dependencies (pick Sonner, Virtuoso, base-ui) |
| **Accessibility Audit** | `better-accessibility` | Run to verify WCAG AA compliance and screen reader support |
| **Design Polish** | `better-ui` / `better-typography` | Fine-tune spacing, radius, optical alignment, and measure |
| **Pre-Flight Gate** | `preflight-check` | **Mandatory gate before finishing any task or committing** |

---

## 6. ✈️ Pre-Flight Verification Routine

Before completing any task, answering that work is finished, or pushing to Git:

1. **Build Verification:** Run `npm run build` or `npm run lint` — must compile with zero errors.
2. **i18n Completeness:** Confirm both `mr.json` and `en.json` are synchronized.
3. **8-State Check:** Hover, active, focus-visible, and disabled states implemented.
4. **Mobile Responsiveness:** Verified on 375px (iPhone) and desktop viewports.
5. **Pre-flight Skill:** Run `preflight-check` and report the status block.

---

*Authored for Sahitya Yatra · Built with pride and authentic craft.*
