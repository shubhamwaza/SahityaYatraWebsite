# SahityaYatra — Memory

**Document:** Memory.md  
**Purpose:** Durable project decisions, current state, and handover notes.  
**Rule:** This document preserves context. It must not silently override `PRD.md`, `Architecture.md`, `Rules.md`, or `Design.md`.

---

## Current Phase: Prototype Review & Father's Approval Gate (Phases 1–4 Complete ✓)

**Date:** 14 October 2026  
**Status:** Phases 1, 2, 3, and 4 Complete with 0 lint warnings and 0 build errors. Working bilingual prototype ready for preview.

---

## Confirmed Technical Decisions

| Decision | Value | Date confirmed |
|---|---|---|
| Framework | Next.js 16 + TypeScript | 14 Oct 2026 |
| Styling | Tailwind CSS v4 (CSS-based tokens) | 14 Oct 2026 |
| Hosting | Vercel | 14 Oct 2026 |
| Commerce | Shopify (deferred until father's approval) | 14 Oct 2026 |
| i18n library | next-intl | 14 Oct 2026 |
| Language routes | `/en/` and `/mr/` | 14 Oct 2026 |
| Fonts | Mukta (Devanagari) + IBM Plex Sans (Latin) via next/font/google | 14 Oct 2026 |
| Logo | Supplied PNG — saffron-orange→red gradient, green sprout motif | 14 Oct 2026 |
| Icons | lucide-react | 14 Oct 2026 |

---

## Open Decisions

| ID | Decision | Status |
|---|---|---|
| UD-01 | Domain name | Open |
| UD-02 | Shopify plan + cost approval | Awaiting father's approval |
| UD-03 | Payment provider (Razorpay?) | Open — verify after Shopify setup |
| UD-04 | Shipping aggregator (Shiprocket?) | Open — verify after Shopify setup |
| UD-05 | GitHub repository URL | Open — user to create/share |
| UD-06 | Vercel account setup | Open — user to set up |
| UD-07 | Hero images / photography | Pending — user will provide later |
| UD-08 | Sample book data for prototype | Pending — user will provide later |
| UD-09 | Analytics provider | Open |
| UD-10 | Contact form destination | Open |

---

## Phase Log

### Phase 0 — Project Control (Complete ✓)
- All 5 documents reviewed: PRD.md, Architecture.md, Rules.md, Phases.md, Design.md
- Logo received and saved to `public/images/logo.png`
- Build plan written and reviewed with project owner

### Phase 1 — App Scaffold (Complete ✓)
- Next.js 16 app initialised with TypeScript, Tailwind v4, ESLint
- next-intl installed and configured for bilingual routing (`/en` and `/mr`)
- Mukta (Devanagari) + IBM Plex Sans (Latin) Google Fonts loaded with display: swap
- Global design tokens configured in CSS (`src/app/globals.css`)
- Full English (`src/messages/en.json`) and Marathi (`src/messages/mr.json`) translations
- Core TypeScript types defined (`src/types/index.ts`)
- `.env.example` in place, `.gitignore` protects secrets
- `npm run build` and `npm run lint` pass with 0 errors

### Phase 2 — Design System & Shared Shell (Complete ✓)
- Search-led responsive Header (`src/components/layout/Header.tsx`):
  - Preserved authentic SahityaYatra logo
  - Prominent search bar on desktop & mobile
  - Category navigation bar for desktop
  - Language switcher toggles between `/en` and `/mr` preserving current path
  - Cart button with badge counter
  - Slide-out mobile drawer menu with all categories, policies, and Facebook link
- Responsive, rich Footer (`src/components/layout/Footer.tsx`):
  - Brand identity block with authentic logo
  - Community link to Facebook (`facebook.com/SahityaYatraShop`)
  - Curated categories column
  - About Us & Contact links
  - Legal & Policies links (Shipping, Returns, Privacy, Terms)
  - Dynamic copyright year
- UI Primitives (`src/components/ui/`):
  - `Button.tsx` (primary saffron, secondary ink, outline, ghost; loading spinner, disabled state)
  - `Badge.tsx` (saffron, sprout green, default, outline)
- Shell integrated into `src/app/[locale]/layout.tsx` so all current & future pages receive the shared experience
- Both `npm run build` and `npm run lint` pass with 0 errors

### Phase 3 — Homepage & Prototype Catalog (Complete ✓)
- Generated 12 real, iconic SVG book covers via `scripts/generate-book-covers.mjs` in `public/images/books/`
- Created authentic prototype dataset (`src/lib/sampleBooks.ts`) with 12 real Marathi & English classics (Pu La Deshpande, V. S. Khandekar, Vishwas Patil, Shivaji Sawant, R. K. Narayan, Arundhati Roy, etc.)
- Built Book Card (`src/components/product/BookCard.tsx`) with authentic ~2:3 aspect ratio, Marathi/English badges, quick-add action, pricing, and discount display
- Built Hero Carousel (`src/components/home/HeroCarousel.tsx`) with bold Devanagari typography, 3 curated slides, pause/play accessibility controls, and responsive banners
- Built Category Strip (`src/components/home/CategoryStrip.tsx`) for fast horizontal category browsing
- Built rich Homepage (`src/app/[locale]/page.tsx`):
  - Hero Carousel & Category Strip
  - New Arrivals / नवीन पुस्तके grid
  - Curated Recommendations / शिफारस केलेली पुस्तके
  - Marathi Spotlight / मराठी साहित्य दालन
  - Exhibition Heritage Story section celebrating physical exhibition legacy
- Zero fake claims or artificial scarcity countdowns

### Phase 4 — Catalog & Discovery Routes (Complete ✓)
- All Books Catalog (`src/app/[locale]/shop/page.tsx` & `src/components/shop/ShopClient.tsx`):
  - Bilingual quick-filters (All, Marathi, English)
  - Category filter pills with active state
  - Sorting (Newest, Price: Low to High, Price: High to Low, Title)
  - Empty state with reset trigger
- Product Detail Page (`src/app/[locale]/products/[handle]/page.tsx` & `src/components/product/ProductDetailClient.tsx`):
  - 2-column balanced layout (sticky book cover + details)
  - Smart mobile sticky purchase bar (IntersectionObserver)
  - Bibliographic specifications table (Publisher, ISBN, Pages, Format, Language)
  - Stock availability and delivery guarantees
  - Related books recommendations
- Instant Search Route (`src/app/[locale]/search/page.tsx` & `src/components/search/SearchClient.tsx`):
  - Client-side instant query filtering across titles, authors, categories, ISBNs
  - Language quick toggles
  - Clear query button and empty states
  - Wrapped in Suspense boundary for Next.js static generation
- Collections Overview & Dynamic Detail (`src/app/[locale]/collections/page.tsx`, `src/app/[locale]/collections/[slug]/page.tsx`)
- About Us Page (`src/app/[locale]/about/page.tsx`) with mission, exhibition roots, and values
- Contact Page & Interactive Form (`src/app/[locale]/contact/page.tsx` & `src/components/contact/ContactForm.tsx`)
- Bilingual Policy Pages (`src/app/[locale]/policies/[slug]/page.tsx`): Shipping, Returns, Privacy, Terms
- Quality: `npm run lint` = 0 errors, 0 warnings; `npm run build` = 64/64 routes compiled cleanly

---

## Colour Token Notes

Logo colours (provisional — validate contrast before locking):
- Primary gradient: saffron-orange `#F5A020` → warm red `#D93020`
- Green sprout: `#2E7D32`
- Selected working token: `--color-saffron: #E8850A`
- Secondary sprout token: `--color-sprout: #2E7D32`

---

## File Structure

```
SahityaYatraWebsite/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx              ← Fonts, html lang, Header, Footer
│   │   │   ├── page.tsx                ← Full homepage with hero & curated rails
│   │   │   ├── not-found.tsx           ← Bilingual 404
│   │   │   ├── shop/page.tsx           ← All books catalog
│   │   │   ├── products/[handle]/page.tsx ← Book detail page
│   │   │   ├── search/page.tsx         ← Search page
│   │   │   ├── collections/
│   │   │   │   ├── page.tsx            ← Collections index
│   │   │   │   └── [slug]/page.tsx     ← Dynamic collection page
│   │   │   ├── about/page.tsx          ← About SahityaYatra & heritage
│   │   │   ├── contact/page.tsx        ← Contact & inquiry page
│   │   │   └── policies/[slug]/page.tsx ← Shipping, returns, privacy, terms
│   │   ├── globals.css                 ← Tailwind v4 design tokens + base styles
│   │   ├── layout.tsx                  ← Root layout (minimal)
│   │   └── page.tsx                    ← Root redirect → /en
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Badge.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── product/
│   │   │   ├── BookCard.tsx
│   │   │   └── ProductDetailClient.tsx
│   │   ├── home/
│   │   │   ├── HeroCarousel.tsx
│   │   │   └── CategoryStrip.tsx
│   │   ├── shop/
│   │   │   └── ShopClient.tsx
│   │   ├── search/
│   │   │   └── SearchClient.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── routing.ts              ← Locale definitions
│   │   │   ├── request.ts              ← next-intl server request config
│   │   │   └── navigation.ts          ← Locale-aware Link, useRouter
│   │   └── sampleBooks.ts              ← 12 authentic bibliographic records
│   ├── messages/
│   │   ├── en.json                     ← Full English translations
│   │   └── mr.json                     ← Full Marathi translations
│   └── types/
│       └── index.ts                    ← Locale, Book, Collection, Cart types
├── public/
│   └── images/
│       ├── logo.png                    ← Preserved authentic logo
│       └── books/                      ← 12 generated SVG covers
├── scripts/
│   └── generate-book-covers.mjs        ← SVG cover generator script
├── .env.example
├── .gitignore
└── [project docs: PRD, Architecture, Rules, Phases, Design, Memory]
```

---

## Next Steps (Approval Gate & Phase 5)

1. **User & Father's Review Gate (Prerequisite to any spending):**
   - Review the working prototype locally (`npm run dev`) or on Vercel preview.
   - Confirm Devanagari typography readability (Mukta font), color scheme, and navigation hierarchy.
   - Gather feedback from user's father regarding catalog categories and tone of voice.
2. **Phase 5 (Upon Approval):**
   - Create Shopify Partner development store (zero-cost until transfer).
   - Set up custom Storefront API app with unauthenticated read-only access.
   - Configure Shopify Storefront GraphQL client in `src/lib/shopify/`.
   - Swap `sampleBooks.ts` prototype mock layer with live Shopify Storefront queries.
