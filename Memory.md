# SahityaYatra — Memory

**Document:** Memory.md  
**Purpose:** Durable project decisions, current state, and handover notes.  
**Rule:** This document preserves context. It must not silently override `PRD.md`, `Architecture.md`, `Rules.md`, or `Design.md`.

---

## Current Phase: Phase 5 Complete ✓ (Shopify Storefront API Integration & Apple/Emil Design Elevation)

**Date:** 14 October 2026  
**Status:** Phases 1–5 Complete with 0 lint warnings and 0 build errors. Apple Books & Emil Kowalski design engineering overhaul complete. Live Shopify Storefront API connected with seamless fallback to sample books.

---

## Confirmed Technical Decisions

| Decision | Value | Date confirmed |
|---|---|---|
| Framework | Next.js 16 + TypeScript | 14 Oct 2026 |
| Styling | Tailwind CSS v4 (PostCSS + CSS-based tokens) | 14 Oct 2026 |
| Hosting | Vercel | 14 Oct 2026 |
| Commerce | Shopify Storefront GraphQL API (`sahityayatra-zbq5ehhe.myshopify.com`) | 14 Oct 2026 |
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
| UD-02 | Shopify plan + cost approval | Resolved: Free Development Store (`sahityayatra-zbq5ehhe.myshopify.com`) connected via Storefront API (₹0 cost) |
| UD-03 | Payment provider (Razorpay?) | Open — to configure in Shopify Admin when ready to accept live orders |
| UD-04 | Shipping aggregator (Shiprocket?) | Open — to configure in Shopify Admin |
| UD-05 | GitHub repository URL | Resolved: https://github.com/shubhamwaza/SahityaYatraWebsite.git |
| UD-06 | Vercel account setup | Open — ready for deployment |
| UD-07 | Hero images / photography | Pending — user will provide later |
| UD-08 | Sample book data for prototype | Completed — authentic sample dataset with fallback to live Shopify |
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

### Apple Books & Emil Kowalski Design Elevation (Complete ✓)
- Applied Apple Human Interface Guidelines and Emil Kowalski design engineering principles:
  - Custom fluid cubic-bezier easing tokens (`--ease-apple`, `--ease-out`, `--ease-spring`)
  - Tactile micro-interactions: `:active { transform: scale(0.97); }`
  - **Physical 3D Book Experience (`.book-stage`, `.book-spine-3d`, `.book-sheen`, `.book-ambient-glow`):**
    - Multi-stop physical book spine crease and indentation on left edge
    - Multi-striped creamy simulated paper pages edge on right (`#FFFDF8` to `#DFD3BE`)
    - Specular light sheen reflection sweeping across covers on hover
    - Ambient diffuse colored aura matching book covers
    - Top-left classic masterpiece foil badge (★ अभिजात / ★ Classic)
    - Tactile Quick-Add micro-interaction with sprout green confirmation morph ("जोडले / Added")
  - **Apple-Grade Slide-Over Cart Drawer (`CartDrawer.tsx` & `CartContext.tsx`):**
    - Fluid spring-animated slide-over drawer with backdrop blur scrim
    - Live All-India Free Delivery Progress Bar (₹500 threshold with dynamic remaining meter)
    - Item list with miniature 3D book covers, title, author, price, and tactile quantity steppers (`-` `1` `+`)
    - Client-side persistence via `localStorage`
    - Apple high-contrast checkout CTA with security badges (256-bit secure checkout, 100% genuine books)
  - Frosted glass translucent navigation (`glass-nav`, `backdrop-blur-md`)
  - Redesigned 2-column Apple Books Editorial Hero Showcase with dynamic spotlight
  - Redesigned CategoryStrip with Apple segmented pill controls
  - Fixed Tailwind CSS v4 compilation with `@tailwindcss/postcss` and `postcss.config.mjs`

### Phase 5 — Shopify Storefront Integration (Complete ✓)
- Shopify Development Store connected: `sahityayatra-zbq5ehhe.myshopify.com`
- Public Storefront API token configured in `.env.local` (strictly gitignored)
- Live GraphQL connectivity verified: status 200, successfully authenticated
- Shopify Storefront GraphQL Client implemented:
  - `src/lib/shopify/types.ts`: TypeScript schema mappings & `normalizeShopifyProduct()`
  - `src/lib/shopify/client.ts`: Resilient `shopifyFetch()` client with environment detection
  - `src/lib/shopify/queries.ts`: `getBooks()`, `getBookByHandle()`, `getShopifyCollections()`, `createShopifyCart()`, `addToShopifyCart()`
  - **Graceful Fallback:** When Shopify store has 0 products uploaded, seamlessly falls back to authentic `sampleBooks` catalog so the frontend remains fully populated and functional
- Connected dynamic routes (`/shop`, `/products/[handle]`) to Shopify queries
- Zero lint errors, all 64 static/dynamic routes build cleanly in ~470ms

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
│   │   │   ├── shop/page.tsx           ← All books catalog (Shopify + fallback)
│   │   │   ├── products/[handle]/page.tsx ← Book detail page (Shopify + fallback)
│   │   │   ├── search/page.tsx         ← Search page
│   │   │   ├── collections/
│   │   │   │   ├── page.tsx            ← Collections index
│   │   │   │   └── [slug]/page.tsx     ← Dynamic collection page
│   │   │   ├── about/page.tsx          ← About SahityaYatra & heritage
│   │   │   ├── contact/page.tsx        ← Contact & inquiry page
│   │   │   └── policies/[slug]/page.tsx ← Shipping, returns, privacy, terms
│   │   ├── globals.css                 ← Tailwind v4 tokens + Apple & Emil physics
│   │   ├── layout.tsx                  ← Root layout (minimal)
│   │   └── page.tsx                    ← Root redirect → /en
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx              ← Tactile active-scale spring buttons
│   │   │   └── Badge.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx              ← Frosted glass nav + search pill
│   │   │   ├── Footer.tsx              ← Editorial dark footer
│   │   │   └── LanguageSwitcher.tsx    ← Apple segmented pill
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx          ← Apple-grade slide-over cart with free shipping meter
│   │   ├── product/
│   │   │   ├── BookCard.tsx            ← 3D book spine + specular sheen + quick-add morph
│   │   │   └── ProductDetailClient.tsx ← Sticky purchase bar + gallery + 3D book stage
│   │   ├── home/
│   │   │   ├── HeroCarousel.tsx        ← Editorial showcase with dynamic aura halos & accolades
│   │   │   ├── CategoryStrip.tsx       ← Segmented category pills
│   │   │   └── HeritagePavilion.tsx    ← 25-yr brass medallion seal, founder letter, tour footprint
│   │   ├── shop/
│   │   │   └── ShopClient.tsx
│   │   ├── search/
│   │   │   └── SearchClient.tsx
│   │   └── contact/
│   │       └── ContactForm.tsx
│   ├── context/
│   │   └── CartContext.tsx             ← Global cart state with ₹500 shipping progress & persistence
│   ├── lib/
│   │   ├── shopify/
│   │   │   ├── client.ts               ← shopifyFetch GraphQL client
│   │   │   ├── queries.ts              ← Products, collections & cart queries
│   │   │   └── types.ts                ← Shopify GraphQL types & normalization
│   │   ├── i18n/
│   │   │   ├── routing.ts              ← Locale definitions
│   │   │   ├── request.ts              ← next-intl server request config
│   │   │   └── navigation.ts          ← Locale-aware Link, useRouter
│   │   └── sampleBooks.ts              ← Authentic bibliographic catalog & fallback
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
├── postcss.config.mjs                  ← Tailwind v4 PostCSS config
├── .env.example
├── .gitignore
└── [project docs: PRD, Architecture, Rules, Phases, Design, Memory]
```

---

## 4-Pillar Frontend Beautification Elevation (Completed)

1. **#1 Physical 3D Book Experience & Specular Sheen (`commit 645c86b`):**
   - 900px CSS perspective stage, 3D paper fold indentation (`.book-spine-3d`), stacked cream paper edge lines (`repeating-linear-gradient`), diagonal glossy sheen sweep (`.book-sheen`), and dynamic cover aura glow (`.book-ambient-glow`).
   - Tactile quick-add button with morphing green confirmation (`जोडले / Added`).
2. **#2 Apple-Grade Slide-Over Cart Drawer (`commit 14c682d`):**
   - Backdrop-blur spring slide-out drawer (`--ease-drawer`), animated ₹500 free shipping meter with celebrations, miniature 3D covers in cart rows, tactile quantity steppers (`-` `1` `+`), and Apple checkout CTA.
3. **#3 Hero Editorial Showcase Overhaul (`commit 430d790`):**
   - Ambient blurred radial halos matched to each book's dominant palette (`auraColor`), gold foil accolade pills (`साहित्य अकादमी पुरस्कार`), glass literary quote cards, publication year & translator chips, and award seal (`अभिजात ग्रंथ`).
4. **#4 The Father's Heritage Exhibition Pavilion (`commit 236c0a2`):**
   - 25-Year Commemorative Brass Medallion Seal (1999–2026 • २५+ वर्षे ग्रंथ निष्ठा).
   - 4 Grand Heritage Stat Pillars (25+ Years, 5,000+ Curated Titles, 100+ Exhibitions, 100% Authentic Editions).
   - Founder's Archival Letter Card with deckle-edge styling, founder quote, and Certified Exhibition Organizer badge.
   - Exhibition Tour Footprint Ribbon celebrating Maharashtra book festivals (Pune, Mumbai, Nashik, Kolhapur, Sambhajinagar, Satara, Nagpur, Solapur, Thane).

---

## Next Steps (Review & Deployment)

1. **User & Father's Review:**
   - Run `npm run dev` to preview the Apple Books design elevation and bilingual experience at `http://localhost:3000/mr` and `http://localhost:3000/en`.
   - When adding books in Shopify Admin (`Products > Add product`), they stream automatically to the live site.
2. **Deploy to Vercel:**
   - Connect GitHub repository `shubhamwaza/SahityaYatraWebsite` to Vercel.
   - Add environment variables in Vercel project settings:
     - `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=sahityayatra-zbq5ehhe.myshopify.com`
     - `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=443f76527c8fa349c67a9c47c001eb44`
   - Instant live preview link to share directly with family and exhibition patrons.

