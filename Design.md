# SahityaYatra Design System

**Document:** `Design.md`  
**Version:** 0.1 — consolidated draft for review  
**Status:** Draft. Not approved for implementation as a final design specification.  
**Project:** SahityaYatra bilingual bookstore storefront  
**Date:** 14 October 2026

---

## 1. Purpose

This document consolidates the design direction approved during exploration into one practical foundation for the SahityaYatra storefront. It is intended to guide the frontend prototype and, after explicit approval, the production implementation.

The goal is a distinctive, modern, Marathi-first bookstore that makes book discovery and purchasing straightforward. It should feel editorial and culturally grounded without becoming ornamental, cluttered, or difficult to shop.

This document defines the design principles, visual system, page patterns, responsive behaviour, content rules, accessibility expectations, and implementation guidance. It does not authorise paid Shopify setup or production launch. Those remain governed by `PRD.md`, `Architecture.md`, `Rules.md`, and `Phases.md`.

## 2. Status and decision handling

### 2.1 Locked direction

The following decisions are approved and should not be reopened without a clear reason:

- **Overall style:** Modernist, structured, editorial, and mobile-first.
- **Audience:** Marathi readers first, with English-language books and a complete English interface equally supported.
- **Logo:** Preserve the existing SahityaYatra logo exactly. Do not redraw, recolour, crop, distort, or otherwise modify it.
- **Typography:** Mukta for Devanagari and IBM Plex Sans for Latin-script text.
- **Colour mood:** Warm paper, deep ink, and muted saffron.
- **Homepage hero:** A wide, full-width promotional carousel with bold Marathi campaign typography, editorial photography, and restrained saffron graphic shapes. Use the bolder second concept as the main direction.
- **Homepage header:** Search-led. Keep search prominent; show useful category links on desktop and simplify category browsing on mobile.
- **Mobile homepage categories:** A horizontally scrollable category strip directly below the campaign hero.
- **Book cards:** Editorial meets commerce: prominent, accurate covers with clear metadata and practical shopping controls.
- **Product page:** Balanced product panel. Cover and purchase information sit side by side on desktop and stack logically on mobile.
- **Mobile product purchase control:** A smart sticky purchase bar appears when the main purchase controls have scrolled out of view.
- **Responsive priority:** Mobile-first, while ensuring desktop is spacious and category-rich.

### 2.2 Decisions to validate during implementation

These details should be resolved by browser testing and actual assets rather than by additional abstract design discussions:

- Exact colour token values after inspecting the existing logo and checking contrast.
- Font files, weights, loading strategy, fallback stacks, and actual rendering on devices.
- Exact breakpoint values and responsive grid counts.
- Hero dimensions, cropping, carousel timing, and reduced-motion behaviour.
- Final icon set and the smallest useful set of shared component variants.
- Whether a particular catalogue field is available and reliable in Shopify.
- Shipping copy, delivery estimates, return claims, discount badges, ratings, and review content. These must only appear when supported by real data and approved policies.

Do not invent values or product facts to fill these gaps. Use explicit placeholders in the prototype where necessary.

## 3. Design principles

### 3.1 Marathi-first, fully bilingual

Marathi is the primary brand voice. Devanagari text must be treated as first-class content, not as a translated afterthought. English remains a fully supported language with equivalent functionality, information, and navigation.

- Provide complete Marathi and English versions of interface labels, navigation, forms, errors, empty states, product actions, and essential policy content.
- Keep each book's title and author name in the script and spelling supplied by the catalogue. Do not transliterate titles unless the source catalogue explicitly provides a transliteration.
- Do not mix languages arbitrarily within a sentence. Use language-appropriate copy.
- Keep the language switch easy to find and preserve the current page or relevant destination when switching language where a corresponding route exists.
- Avoid relying on flags as language selectors.

### 3.2 Editorial character with shopping clarity

The interface should evoke reading, discovery, and a carefully curated bookstore. Editorial photography and expressive Marathi campaign headlines provide personality; a consistent grid and predictable controls make shopping easy.

- Use strong composition, whitespace, and typography instead of decorative clutter.
- Product cards must remain easy to compare.
- Purchase actions, price, availability, and delivery information must be clear.
- Avoid excessive cards within cards, unnecessary borders, ornamental icons, and repeated promotional badges.
- Avoid generic SaaS-style layouts or a template-like appearance. Make the identity distinctive through the Marathi headline treatment, real book imagery, careful editorial composition, and restrained colour use.

### 3.3 Authenticity over decoration

- Use genuine catalogue cover images for products whenever available.
- Never replace real book covers with AI-generated approximations.
- Never modify text or artwork on book covers.
- Use editorial or AI-generated imagery only for campaign atmosphere, not to represent a specific book, edition, author, customer, stock condition, or product feature unless the asset is verified and appropriately licensed.
- Do not use fake reviews, invented ratings, false scarcity, misleading discounts, or unsupported delivery claims.
- Never represent prototype sample content as live inventory or real commercial data.

### 3.4 Accessible by default

Target **WCAG 2.2 AA** for the complete experience. Accessibility must be considered at design and implementation time, not added as a final patch.

- Ensure readable contrast and visible keyboard focus.
- Use semantic headings and controls.
- Make interactive targets comfortably usable on touch devices.
- Support keyboard navigation and screen readers.
- Respect reduced-motion preferences.
- Do not communicate state using colour alone.
- Ensure carousel controls are accessible and content remains available without animation.
- Provide clear labels and useful validation messages for forms.

### 3.5 Performance and restraint

- Prioritise fast loading, especially on mobile networks.
- Reserve image dimensions to avoid layout shifts.
- Use responsive image sizes and appropriate formats.
- Avoid large animations, autoplay video, heavy visual effects, gradients used only for decoration, and unnecessary client-side complexity.
- Do not make the site depend on a carousel for access to essential information.

## 4. Brand and visual system

### 4.1 Logo

The existing SahityaYatra logo is the source of truth.

- Use the supplied logo asset without alteration.
- Maintain its original proportions and adequate clear space.
- Do not recreate it as text or substitute a different Devanagari type treatment.
- Place it where it is clearly visible in the header.
- If the source asset has a transparent background, preserve it.
- If an alternate light/dark logo asset is needed, request or obtain an approved source asset rather than editing the existing logo.

### 4.2 Colour direction

The colour mood is **warm paper, deep ink, and muted saffron**. The following are provisional exploration values, not final tokens. Validate the actual logo and contrast before promoting them to production tokens.

| Role | Provisional value | Intended use |
|---|---|---|
| Paper background | `#F8F4EC` | Main page background and warm surfaces |
| White surface | `#FFFFFF` | Inputs, high-contrast panels, selected cards where needed |
| Deep ink | `#332D29` | Primary text and strong icons |
| Secondary ink | `#665A4E` | Secondary text when contrast permits |
| Muted saffron | `#C77735` | Brand accent, selected states, highlights |
| Action accent | To be validated | Buttons and links; must pass contrast requirements |
| Sand border | `#DED0BC` | Subtle separators and borders |
| Success | Accessible semantic green | Confirmed availability or success states only |
| Error | Accessible semantic red | Errors and destructive states only |
| Warning | Accessible semantic amber | Warnings where needed |

Rules:

- Do not treat provisional hex values as approved final brand values.
- Verify contrast for every text, icon, border, focus, and control combination.
- Do not use muted saffron for small text on paper backgrounds unless the exact combination passes contrast requirements.
- Use semantic colours consistently and sparingly.
- Do not introduce unrelated accent colours without a clear semantic or campaign reason.
- Do not use gradients as a default visual treatment.
- Product covers and editorial photography may introduce their own colours; the surrounding interface should remain restrained.

### 4.3 Typography

#### Devanagari: Mukta

Use Mukta for Marathi interface text, headings, navigation, buttons, product titles, forms, and supporting copy.

#### Latin: IBM Plex Sans

Use IBM Plex Sans for English interface text, navigation, headings, product information, forms, prices, and supporting copy.

#### Typography rules

- Use only the weights needed for a clear hierarchy, provisionally regular, medium, and bold.
- Establish a consistent type scale in code using shared tokens rather than arbitrary values on individual components.
- Prefer comfortable line heights and avoid tight line spacing, particularly for Devanagari.
- Avoid excessive all-caps English labels and unnecessary letter spacing.
- Do not force long Marathi headings into a single line if that harms readability.
- Use fluid or responsive sizing carefully; maintain readable minimum sizes.
- Verify font rendering, weight availability, Devanagari conjuncts, punctuation, numerals, and line wrapping in real browsers.
- Provide sensible system fallback stacks. Avoid invisible text during font loading; use an appropriate font-display strategy.
- Confirm font licensing and self-host approved font files when appropriate.

A proposed hierarchy to test, not final numeric tokens:

- Display: campaign headline.
- H1: page title or primary product title.
- H2: section heading.
- H3: card or subsection title.
- Body: standard reading and product copy.
- Small: secondary metadata, labels, and helper text.
- Price: clear, tabular-friendly presentation.
- Caption: low-priority metadata that still meets contrast and readability requirements.

## 5. Layout, spacing, and surfaces

### 5.1 Grid and spacing

Use a consistent spacing scale and shared layout primitives. Avoid one-off spacing values unless the composition has a documented reason.

- Mobile layouts should prioritise one clear vertical flow.
- Desktop layouts should use a consistent content container and grid.
- Allow wide promotional imagery to span the page where appropriate.
- Align section headings, product grids, and editorial panels consistently.
- Use whitespace to establish hierarchy rather than enclosing every region in a card.
- Avoid horizontal overflow except for intentionally scrollable components such as the mobile category strip and product carousels.

### 5.2 Borders, corners, and shadows

- Use subtle borders to distinguish controls and surfaces.
- Use a restrained, consistent corner-radius scale.
- Reserve shadows for meaningful elevation, such as a popover or sticky purchase bar when necessary.
- Avoid excessive rounded-card styling, glassmorphism, heavy shadows, and ornamental outlines.
- Do not make every section a separate floating card.

### 5.3 Icons

- Use a consistent, accessible icon family with predictable stroke and optical weight.
- Pair unfamiliar icons with visible text labels.
- Decorative icons should be hidden from assistive technology; actionable icons need accessible names.
- Do not use emojis as production navigation icons.
- Do not invent icon meanings or use an icon alone for a critical action if its meaning is unclear.

## 6. Navigation and global shell

### 6.1 Header

The header is search-led.

Desktop:
- Existing logo on the left.
- Prominent search field.
- Language switch, account, wishlist if implemented, and cart.
- A clear category navigation row.
- Avoid cramming every category into the primary navigation. Use a considered “More” menu when necessary.

Mobile:
- Compact top row with navigation/menu control, unchanged logo, and cart.
- Prominent search field near the top.
- Language switch remains discoverable and usable.
- Do not let the header consume so much vertical space that users cannot reach the hero or books.
- Use a menu or category route for less common categories.

### 6.2 Language switching

- Use explicit labels such as “मराठी” and “EN” or “English”; do not rely on flags.
- Make the selected language state visible.
- Ensure keyboard and screen-reader users can operate the switch.
- Preserve the user's current context where a translated equivalent exists.
- Use the approved `/mr/` and `/en/` route structure described in `Architecture.md`.
- Do not mix untranslated interface labels into an otherwise translated screen unless the text is a proper name, product title, or unavoidable source data.

### 6.3 Navigation states

Provide clear default, hover, focus-visible, active, and disabled states as appropriate. Active states must not rely on colour alone.

## 7. Homepage

### 7.1 Purpose and hierarchy

The homepage should support both discovery and immediate shopping. It must not force users through a long brand introduction before showing books.

Recommended order:

1. Compact, search-led header.
2. Category navigation appropriate to the viewport.
3. Wide campaign-led hero carousel.
4. Horizontally scrollable category strip on mobile; an appropriate category shortcut row/grid on larger screens.
5. New Arrivals.
6. Popular or curated collections.
7. Additional book sections based on actual catalogue quality and business priorities.
8. Trust and service information only when policies and operations substantiate the claims.
9. Footer with language, contact, policy, and navigation links.

The order may be adjusted based on real content and testing, but search and book discovery must remain prominent.

### 7.2 Hero carousel

The hero direction is locked: bold Marathi typography, editorial photography, restrained saffron geometry, and a wide full-width composition.

- Start with a small set of meaningful slides, typically three or four.
- Use the first slide to communicate SahityaYatra's literary identity; other slides may feature real collections, seasonal campaigns, genuine offers, or editorial themes.
- Each slide must have one clear primary action leading to a relevant collection, category, or campaign.
- Use text as HTML, not baked into the background image, so it remains responsive and accessible.
- Use suitable desktop and mobile crops; do not simply shrink the desktop banner.
- Ensure text remains readable over the image with adequate contrast.
- Provide visible previous/next and pagination controls.
- If automatic rotation is used, provide a pause mechanism, pause on keyboard focus and pointer hover where applicable, and respect reduced-motion settings. Do not rapidly rotate slides.
- Do not make essential information available only on a slide that rotates away.
- Do not use fake countdowns, false urgency, fabricated offers, or unverified discounts.
- Use genuine promotional terms and dates only when confirmed.
- Carousel controls must be keyboard accessible and have clear accessible names.

### 7.3 Category strip

On mobile, place a horizontally scrollable category strip below the hero.

- Show a useful initial set of high-priority categories.
- Make the horizontal overflow discoverable without relying only on a subtle scrollbar.
- Support touch, keyboard access where applicable, and visible focus.
- Avoid clipped labels and excessive category count.
- Provide a clear route to all categories.
- Use actual category names from the catalogue and approved translations.

On desktop, categories may appear in the primary navigation and/or a more spacious shortcut layout. Avoid duplicating the same navigation in several competing formats.

### 7.4 Homepage content modules

Use section headings and concise “View all” links. Each module should have a clear purpose.

Possible modules, only when supported by real catalogue data:
- New Arrivals.
- Popular books or bestsellers.
- Marathi literature.
- English books.
- Children’s books.
- Curated or seasonal collections.
- Author spotlights.
- Gift selections.

Do not label items “bestsellers,” “popular,” “new,” “award-winning,” or “staff picks” unless the label is truthful and supported.

## 8. Book cards and product grids

### 8.1 Card anatomy

A standard book card may contain:

1. Authentic cover image.
2. Language label where useful.
3. Book title in the source script.
4. Author name.
5. Price.
6. Genuine compare-at price or discount only if verified.
7. Add to Cart control where appropriate and supported.

Avoid adding every possible metadata field to the card. Keep detailed specifications on the product page.

### 8.2 Cover images

- Preserve original aspect ratio and crop.
- Use a consistent image frame without stretching or distorting covers.
- Prefer `object-fit: contain` when showing the complete cover is important.
- Reserve image dimensions to prevent layout shift.
- Use an explicit, tasteful fallback when a cover is unavailable; never substitute an unrelated book cover.
- Product-image alt text should identify the book and cover when useful. Avoid redundant alt text for purely decorative images.

### 8.3 Responsive grids

- Start with a two-column product grid on mobile where titles and controls remain readable.
- Use more columns on larger screens based on available width, cover legibility, and card content.
- Do not force a fixed number of columns at the expense of readability.
- Keep image sizes, text alignment, metadata hierarchy, and price placement consistent.
- Use line clamping only where it does not hide essential information; provide access to the full title on the product page.

### 8.4 Quick-add interaction

Quick-add may be used when it remains clear and accessible. On touch screens, do not depend on hover to reveal the only purchase action.

- Make the action's result clear.
- Show loading, success, and error states.
- Announce cart updates accessibly.
- Do not imply an item was added if the commerce action failed.
- If quick-add cannot be implemented reliably in the prototype, link the card to the product detail page instead.

## 9. Product-detail page

### 9.1 Composition

Use the approved balanced product panel.

Desktop:
- Book gallery and cover on one side.
- Purchase information on the other.
- Consistent alignment, readable text width, and clear hierarchy.

Mobile:
- Stack cover/gallery and purchase information in a logical order.
- Keep the cover prominent without letting it push all purchase information far below the fold.
- Place the main purchase controls close to the title, price, and availability.
- Use a smart sticky purchase bar only after the main purchase controls have left the viewport.

### 9.2 Product information hierarchy

Display available, verified fields in a sensible order:

- Language label where useful.
- Book title.
- Author.
- Rating and review count only if supplied by a real review system.
- Price.
- Genuine compare-at price and discount, if applicable.
- Availability based on current commerce data.
- Quantity control if appropriate.
- Add to Cart.
- Optional Buy Now only when the configured checkout flow supports it.
- Delivery estimate and shipping information only when supported by the actual integration and user context.
- Description.
- Specifications such as publisher, publication date/year, edition, ISBN, page count, format, and dimensions only when verified.
- Author information and related books when reliable data exists.
- Reviews only when real review data exists.

### 9.3 Image gallery

- Use only supplied or verified images for the specific edition.
- Show thumbnails only when multiple real images exist.
- Support a usable enlarged view where appropriate.
- Give controls clear accessible names.
- Do not create fake back-cover images, edition variants, or interior previews.

### 9.4 Sticky mobile purchase bar

The approved interaction is a smart sticky bar that appears when the primary purchase controls scroll out of view.

- Include price and a clear Add to Cart action.
- Avoid covering page content, system UI, or important navigation.
- Account for device safe areas.
- Keep keyboard focus and screen-reader behaviour correct.
- Do not duplicate focusable purchase controls in a confusing way.
- Hide or adjust the bar when a modal, keyboard, or relevant overlay would make it obstructive.
- Ensure the bar does not claim success before the commerce action succeeds.

### 9.5 Trust information

Shipping, returns, secure-payment messages, and service guarantees must be grounded in approved business policies and actual integrations. Do not display “free shipping,” “secure payment,” “easy returns,” or delivery dates unless they are true for the relevant order and supported by the implementation.

## 10. Search, category listings, and filters

### 10.1 Search

Search should be prominent and support the actual capabilities of the chosen search/catalogue implementation.

- Provide a clear search label or accessible name; placeholder text alone is insufficient.
- Support relevant searchable fields when available, such as title, author, publisher, and ISBN.
- Preserve the query when returning from a product page where feasible.
- Provide useful loading, results, no-results, and error states.
- Make suggestions keyboard accessible if suggestions are implemented.
- Avoid presenting fake autocomplete results as real catalogue data.
- Treat Marathi text carefully; do not silently change or transliterate a query in a way that changes its meaning.

### 10.2 Category and collection pages

- Clear page title and breadcrumbs where useful.
- Concise description when it helps users understand the collection.
- Result count only when derived from real results.
- Sort controls with understandable labels.
- Filters that reflect actual data availability, such as language, author, publisher, price, format, or category.
- Active filters must be visible and individually removable; include a clear-all action when useful.
- On mobile, filters may open in a drawer or full-screen panel with clear Apply and Reset actions.
- Preserve filter state when returning from a product page where feasible.
- Provide empty, loading, and error states.

Do not create filters for attributes that the catalogue does not reliably contain.

## 11. Cart and checkout handoff

Shopify is intended to own cart, checkout, orders, pricing, and inventory. The frontend must reflect the actual integration rather than simulate a successful purchase.

### 11.1 Cart

Include:
- Product cover, title, and variant/format where applicable.
- Unit price and quantity controls.
- Line total and order subtotal when supported.
- Remove action.
- Shipping or delivery note only when supported by current rules.
- Clear checkout action.
- Empty-cart state with a route back to browsing.

Behaviour:
- Reflect changes only after the commerce operation succeeds.
- Handle loading, error, and unavailable-item states.
- Do not silently lose cart contents after errors.
- Avoid claiming that a price or stock level is guaranteed unless the commerce backend confirms it.

### 11.2 Checkout

- Clearly explain when the customer is being handed off to Shopify checkout.
- Do not collect or store payment-card details in the custom frontend.
- Do not imitate Shopify checkout in a way that misleads users about where they are entering sensitive information.
- Use the approved commerce integration and provider configuration.
- Show clear recovery paths for failed checkout or returned sessions where supported.
- Do not state that payment succeeded unless the authoritative commerce system confirms it.

Guest checkout is supported by the product requirements; accounts remain optional.

## 12. Supporting pages and states

Design the following using the same visual and interaction system:

- All categories.
- Search results and no-results.
- Collection/listing pages.
- Product details.
- Cart and empty cart.
- Wishlist only if included in the approved implementation.
- Account and order history only if implemented.
- Contact and help.
- Shipping, returns, privacy, and terms pages using approved policy content.
- Not-found page.
- General error and offline/unavailable states.
- Loading states and skeletons that preserve layout.
- Form validation and success states.
- Unavailable product and out-of-stock states based on actual commerce data.

Do not create decorative placeholder links that appear functional but do nothing. If a page is not yet implemented, label it clearly in the prototype or omit the action.

## 13. Interaction and motion

- Keep transitions subtle and brief.
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking, parallax used only for decoration, animated text that harms readability, and unexpected movement.
- Provide visible hover and focus states where appropriate.
- Every interactive element must have a real, understandable action.
- Buttons must show disabled, loading, success, and error states where applicable.
- Prevent repeated submissions while a purchase action is in progress.
- Use confirmations for meaningful cart changes only when necessary; avoid excessive popups.
- Ensure modals and drawers manage focus correctly, close predictably, and return focus to the triggering control.
- Avoid destructive actions without a clear label and recovery path.

## 14. Accessibility and usability requirements

Target WCAG 2.2 AA throughout the storefront.

Minimum expectations:
- Correct semantic HTML and heading order.
- Keyboard access for all functionality.
- Visible focus indicators that are not obscured.
- Sufficient text and non-text contrast.
- Responsive zoom and reflow without unnecessary horizontal scrolling.
- Accessible names for icon-only controls.
- Form labels, instructions, and useful error identification.
- Meaningful alt text for informative images.
- Screen-reader announcements for cart changes and dynamic results.
- Accessible carousel controls and pause behaviour.
- No essential information communicated by colour alone.
- Touch targets and spacing that reduce accidental activation.
- Reduced-motion support.
- Tests with keyboard-only use and at least one screen reader.
- Real-device testing for Marathi and English font rendering and layout.

Do not claim accessibility compliance solely because a checklist was completed. Validate with automated checks and manual testing.

## 15. Responsive behaviour

Design mobile-first, then enhance for larger screens.

### Mobile

- Compact search-led header.
- Horizontally scrollable category strip below the hero.
- Two-column book grid when legible.
- Shorter hero crop with readable headline and CTA.
- Touch-friendly controls.
- Smart sticky purchase bar on product pages.
- Filter drawer or full-screen filter panel when useful.
- Avoid overlays that obscure content or conflict with the on-screen keyboard.

### Tablet

- Expand grid columns as space permits.
- Retain clear category and search access.
- Use balanced product layouts where the available width supports them.
- Avoid desktop navigation that wraps into several confusing rows.

### Desktop

- Wider content container with consistent alignment.
- Full category navigation without crowding.
- Hero composition with adequate negative space for text.
- Product-detail gallery and purchase panel side by side.
- Multi-column product grids based on actual card readability.
- Avoid stretching paragraphs or product metadata across excessively wide line lengths.

Breakpoints and exact dimensions are implementation decisions to be validated against real content and devices, not guessed independently in every component.

## 16. Content and localisation rules

- Marathi-first brand voice: clear, welcoming, respectful, and natural.
- Avoid overly formal, machine-translated, or awkward Marathi copy.
- Use a native-quality review process for important Marathi content.
- Maintain consistent terminology for navigation, cart, checkout, delivery, account, and errors.
- Ensure the English version communicates the same meaning and functionality, not necessarily a word-for-word translation.
- Preserve source-catalogue spelling for book titles, authors, and publishers.
- Use a consistent, locale-appropriate number, date, and currency format. Prices are displayed in Indian rupees for the India-only launch.
- Avoid unsubstantiated claims such as “best,” “number one,” “bestseller,” “limited stock,” or “fastest delivery.”
- Do not use fake testimonials, review quotes, star ratings, urgency timers, or discount percentages.
- Campaign copy should be concise and relevant to the collection it links to.

## 17. Data integrity and prototype rules

The initial online catalogue is expected to be a subset of the wider 5,000–6,000-SKU business, with an initial selection of roughly 100–300 books. Inventory is currently managed manually.

Therefore:
- Prototype sample data must be explicitly identified in code and development documentation.
- Do not represent sample prices, stock, ratings, discounts, delivery estimates, reviews, or product specifications as live data.
- Do not imply the site has live Shopify, payment, shipping, or inventory integration until it is implemented and tested.
- Prefer data structures that can later be mapped to Shopify without making the prototype dependent on fabricated fields.
- Avoid hard-coding commercial claims into reusable components.
- Treat Shopify as the source of truth for products, prices, inventory, cart, checkout, and orders once integrated.
- Handle missing catalogue fields gracefully rather than inventing content.

## 18. Implementation guidance

The approved architecture uses Next.js, TypeScript, Tailwind CSS, Vercel, and separate `/mr/` and `/en/` routes. Shopify commerce integration is planned for a later, explicitly approved phase.

Design implementation should follow these principles:

- Implement shared design tokens for colour, typography, spacing, radii, borders, shadows, and responsive containers.
- Build reusable components for header, search, language switch, category strip, hero, book card, product grid, price, quantity control, cart action, breadcrumbs, filters, and accessible dialogs/drawers.
- Keep content and presentation separate.
- Use typed data models and predictable loading/error/empty states.
- Prefer semantic server-rendered content where appropriate; add client interactivity only where needed.
- Use responsive image handling and reserve image dimensions.
- Keep secrets, private API credentials, and privileged operations out of client-side code.
- Do not implement payment collection or order creation through custom insecure client-side shortcuts.
- Follow the security, code review, Git, and deployment rules in `Rules.md`.
- Follow phase gates in `Phases.md`; do not subscribe to paid services or enable live commerce before the required approval.
- Test the prototype using clearly labelled sample data before connecting real commerce services.

## 19. Testing and acceptance criteria

The design foundation is ready for implementation review when:

1. The original logo is preserved without modification.
2. Mukta and IBM Plex Sans render correctly across supported browsers and both language routes.
3. Marathi and English interfaces are functionally equivalent.
4. The homepage provides prominent search, clear categories, the approved campaign hero, and early book discovery.
5. The mobile category strip scrolls horizontally without trapping the user or hiding the route to all categories.
6. Product cards preserve cover proportions and present readable titles, authors, and prices.
7. Product detail follows the balanced panel composition on desktop and a logical stacked layout on mobile.
8. The sticky purchase bar appears only when appropriate and does not obscure content.
9. Search, filters, cart, and checkout handoff have meaningful loading, success, empty, and error states as applicable.
10. No fabricated stock, ratings, reviews, offers, shipping promises, or live-commerce claims appear.
11. Keyboard, focus, screen-reader, contrast, reduced-motion, and responsive checks have been completed.
12. The site works without unnecessary horizontal overflow at supported viewport widths.
13. Every visible control has a real action or is clearly identified as unavailable in the prototype.
14. The prototype has been checked on real mobile devices or representative device/browser combinations.
15. No paid Shopify subscription, paid integration, or production launch occurs before the required project approval.

## 20. Open items

These items remain open and should be resolved only when necessary for implementation:

- Confirm exact logo colour values from the original asset.
- Confirm the final colour tokens after contrast testing.
- Confirm actual font files, weights, licences, and browser rendering.
- Confirm the final category taxonomy and available catalogue fields.
- Confirm which book images and product metadata are reliable enough for launch.
- Confirm the search implementation and supported search fields.
- Confirm shipping aggregator, delivery logic, payment provider, and return policy through the project's approval process.
- Confirm whether wishlist and customer accounts are included in the first release.
- Validate the final carousel interaction and mobile sticky bar with usability and accessibility testing.
- Confirm final breakpoints and responsive grid counts after real content is in place.

These open items do not block building the frontend prototype with clearly labelled sample content, provided the prototype does not misrepresent unavailable functionality as live.

## 21. Governing documents

Use this document alongside:

- `PRD.md` — product goals, scope, user requirements, acceptance criteria, and business constraints.
- `Architecture.md` — approved technical structure and integration boundaries.
- `Rules.md` — security, privacy, quality, accessibility, and AI-assisted development rules.
- `Phases.md` — sequencing, approval gates, and launch dependencies.

If there is a conflict, do not silently override security or project approval requirements. Raise the conflict and resolve it against the governing project documents.

---

**End of draft.** Review this document as one consolidated design foundation. Do not treat it as final approval for production design or commerce launch until the project owner explicitly approves it.
