# SahityaYatra — Architecture

**Document:** Architecture.md  
**Version:** 0.2  
**Status:** Revised draft for review  
**Created:** 14 October 2026  
**Depends on:** `PRD.md` (Version 1.0, Approved)  
**Project:** SahityaYatra bilingual book-commerce website

---

## 1. Purpose

This document defines the proposed technical architecture for SahityaYatra’s online bookstore. It describes system boundaries, application responsibilities, data flows, integrations, security, deployment, testing, and the key technical decisions that must be confirmed before implementation.

The approved `PRD.md` is the product source of truth. If an architectural proposal conflicts with an approved PRD requirement, the PRD takes precedence until the documents are deliberately revised.

This is a draft architecture. Items labelled **Proposed** are recommendations, not approved decisions. Items labelled **Open** require confirmation or implementation research.

## 1.1 Confirmed technical decisions

The following choices were confirmed by the project owner on 14 October 2026:

- **Frontend:** Next.js + TypeScript
- **Hosting:** Vercel
- **Styling:** Tailwind CSS with shared design tokens
- **Language URL paths:** separate `/en/` and `/mr/` paths
- **Payments:** provider remains open until compatibility, eligibility, fees and settlement are verified
- **Shipping:** aggregator/provider remains open until coverage, integration and operational requirements are verified

The confirmed choices establish the implementation baseline. They do not remove the need to verify current platform compatibility, account access, pricing, API versions and deployment configuration before launch.

## 2. Architecture goals

The system should:

1. Deliver a fast, mobile-first, fully bilingual Marathi and English storefront.
2. Use Shopify as the commerce system of record.
3. Keep product, price, stock, cart, checkout and order data consistent with Shopify.
4. Support a small initial catalogue of approximately 100–300 books while allowing growth toward the wider catalogue of approximately 5,000–6,000 SKUs.
5. Make product discovery, categories, search, filters and book metadata easy to maintain.
6. Integrate a shipping aggregator before launch.
7. Avoid unnecessary infrastructure and custom backend services in the first release.
8. Be maintainable by a small team using Google Antigravity and Git-based workflows.
9. Protect customer and order data, provide clear failure states, and make operational issues observable.
10. Avoid locking the project into unverified providers or unsupported assumptions.

## 3. Architecture principles

### 3.1 Shopify owns commerce data

Shopify is the authoritative system for:

- Products and variants
- Prices and availability exposed to the storefront
- Inventory quantities and stock status
- Cart and checkout
- Orders and payment status
- Customer accounts, if enabled
- Discounts and promotions configured in Shopify
- Fulfilment and shipping information supported by the selected setup

The custom storefront must not create an independent database of product prices, inventory quantities, carts or orders that can drift from Shopify.

### 3.2 The storefront owns the presentation layer

The custom frontend is responsible for:

- Page layouts and responsive behaviour
- Navigation and information architecture
- Marathi and English user interface
- Search and product-discovery presentation
- Product cards and product detail pages
- Editorial landing pages and curated collections
- Accessibility and interaction states
- Search-engine presentation and structured metadata, subject to framework and Shopify capabilities

Editorial content should be managed in Shopify where practical, or in a clearly documented content source if Shopify is insufficient. Avoid creating a separate content system without a demonstrated need.

### 3.3 Use managed services first

Prefer Shopify and established managed integrations over a custom commerce backend. Do not introduce a separate database, authentication service, queue, search engine or server layer unless a verified requirement justifies it.

### 3.4 Fail safely

If a request fails, the interface must show a useful error or recovery path. It must not invent prices, show stale stock as confirmed availability, duplicate an order, or imply that payment or fulfilment succeeded without confirmation from the relevant system.

### 3.5 Separate decisions from implementation

Keep API credentials, provider configuration and environment-specific values outside committed source code. Record final providers and account ownership in the project’s configuration/runbook documentation.

## 4. Proposed high-level architecture

```text
Customer
   |
   v
Web browser / mobile browser
   |
   v
Custom storefront
(Proposed: Next.js + TypeScript)
   |
   | Shopify Storefront API
   | products, collections, availability, cart
   v
Shopify
   |-------------------------------|
   | Products / inventory          |
   | Cart / checkout                |
   | Orders / payment status        |
   | Customer accounts (optional)   |
   |-------------------------------|
          |                 |
          v                 v
 Payment provider      Shipping aggregator
 (provider open)       (provider open)
          |                 |
          v                 v
 Payment updates       Labels / tracking /
                       fulfilment updates

Shopify and approved integrations
          |
          v
 Customer notifications
 (email/SMS/WhatsApp provider to be decided)

Storefront
   |-------------------------------|
   | Analytics                     |
   | Search-engine metadata        |
   | Error/performance monitoring  |
   |-------------------------------|
```

This is a logical view, not a claim that every connection is direct. The selected Shopify plan, payment provider, shipping aggregator and integration method may alter the final implementation.

## 5. Recommended technology direction

| Layer | Recommendation | Status | Notes |
|---|---|---|---|
| Development environment | Google Antigravity | Existing project choice | Use it as the AI-assisted development environment, not as the commerce database. |
| Commerce platform | Shopify | Required by PRD | System of record for commerce. Store plan and account setup remain open. |
| Storefront framework | Next.js with TypeScript | **Approved** | Confirmed project choice. Use the current stable, compatible versions when implementation begins. |
| Styling | Tailwind CSS with shared design tokens | **Approved** | Use a documented token system for colour, typography, spacing, borders, radii and responsive behaviour. Avoid ad hoc values and competing styling systems. |
| Commerce connection | Shopify Storefront API using the supported current API version | Required direction | Exact API version and client/library to be selected during implementation. |
| Checkout | Shopify-hosted checkout | Proposed | Reduces custom payment and checkout handling. Confirm compatibility with selected plan and payment setup. |
| Hosting | Vercel | **Approved** | Use Vercel for the Next.js storefront, subject to account access, plan/cost review, environment configuration and deployment verification. |
| Source control | Git and GitHub | Recommended | Commit reviewed changes and use branches or small commits for recoverability. |
| Shipping | Shipping aggregator integration | Required before launch | Provider, serviceability, rate calculation, label creation and tracking behaviour remain open. |
| Payments | Shopify-supported provider appropriate for India | Open | Verify current availability, fees, settlement, refunds and supported payment methods before choosing. |
| Analytics | Privacy-conscious web analytics plus Shopify reporting | Open | Tool, consent requirements and event plan need confirmation. |
| Monitoring | Hosting logs and error/performance monitoring | Recommended | Select tools appropriate to the chosen hosting platform. |
| Content management | Shopify products, collections and pages where suitable | Proposed | Avoid a separate CMS unless the content workflow requires it. |

**Important:** The technology choices above are recommendations. Do not install dependencies, create production accounts or build provider-specific logic on the assumption that open decisions have already been approved.

## 6. System boundaries and responsibilities

### 6.1 Custom storefront

The storefront should:

- Render the home page, navigation, category/collection pages, search results, product detail pages, cart and supporting content.
- Present Marathi and English UI consistently.
- Request live commerce data from Shopify through supported APIs.
- Display loading, empty, unavailable and error states.
- Provide accessible keyboard navigation, focus states, readable typography and responsive layouts.
- Keep secrets out of browser-delivered code.
- Provide page titles, canonical URLs, language metadata, structured data where valid, and social sharing metadata.
- Send analytics events only through the approved analytics configuration.

The storefront must not:

- Store Shopify Admin API credentials in client code.
- treat a cached product response as authoritative proof of current stock at checkout.
- process or store raw payment-card data.
- mark an order as paid based only on a browser redirect.
- independently calculate final taxes or shipping charges if Shopify/provider checkout is responsible for those amounts.

### 6.2 Shopify

Shopify should own commerce workflows, including:

- Product and variant records
- Product pricing and inventory
- Collections and merchandising structures
- Cart and checkout state
- Checkout and order creation
- Payment status exposed through supported Shopify workflows
- Discounts and promotions
- Customer accounts if enabled
- Order and fulfilment records

Admin-side operations should be performed through Shopify Admin and approved integrations, not by exposing Admin credentials to the storefront.

### 6.3 Shipping aggregator

The chosen shipping service should support the operational needs confirmed in the PRD, such as:

- Indian delivery address/serviceability checks
- Shipment creation and label generation
- Tracking reference retrieval
- Fulfilment or tracking updates to Shopify, where supported
- Handling of failed pickups, cancellations, returns and delivery exceptions

The exact division of responsibility between Shopify shipping settings and the aggregator must be confirmed after provider selection. Do not assume live rate calculation, automatic label creation, reverse pickup or every carrier is supported by every integration.

### 6.4 Payments

The payment solution must be supported by the selected Shopify setup and suitable for India. Before selection, verify:

- Availability for the merchant’s business and account type
- Supported methods, including any desired UPI, card, net-banking or wallet options
- Transaction and settlement fees
- Settlement timing and reconciliation
- Refund and cancellation workflows
- Failure, pending and webhook behaviour
- Required compliance, KYC and business documentation

Payment status must come from Shopify/provider-confirmed records, not client-side assumptions.

### 6.5 Notifications

Order confirmation, payment updates, shipping updates and cancellation/refund communications should use Shopify’s supported notification capabilities or a selected integration. Avoid sending duplicate messages from multiple systems. The authoritative trigger and template owner for each notification must be documented.

### 6.6 Analytics and monitoring

Analytics should measure the approved business metrics without collecting unnecessary personal data. Operational monitoring should make storefront errors, API failures and deployment problems discoverable. Access to logs and analytics should be limited to people who need it.

## 7. Data ownership and data flow

| Data | Authoritative owner | Storefront behaviour |
|---|---|---|
| Product title, description, images and variants | Shopify, unless a specific editorial field is deliberately managed elsewhere | Fetch and render through supported Storefront API fields. |
| Price and compare-at price | Shopify | Display values returned by Shopify; do not hardcode catalogue prices. |
| Inventory and availability | Shopify/inventory integration | Display returned availability with appropriate uncertainty; checkout revalidates. |
| Collections and product taxonomy | Shopify, subject to approved information architecture | Render the agreed navigation and collection structure. |
| Cart | Shopify cart API | Use the supported cart identifier and API flow; recover gracefully from expired or invalid carts. |
| Checkout | Shopify | Redirect or hand off through the supported Shopify checkout URL. |
| Order and payment status | Shopify/payment provider | Show only confirmed state returned through supported workflows. |
| Customer account data | Shopify, if accounts are enabled | Use supported account functionality; do not create duplicate credentials. |
| Shipping label and tracking | Selected aggregator and/or Shopify fulfilment records | Display tracking information only after it is returned and validated. |
| Editorial page copy | Shopify pages or an explicitly selected content source | Keep the source documented and avoid duplicate competing copies. |
| UI translations | Version-controlled locale files or an approved equivalent | Treat interface translations separately from book metadata. |
| Analytics events | Approved analytics platform | Send only defined events and required properties. |

### 7.1 Book metadata and bilingual content

A book’s language, original title, display title, author, publisher, ISBN, format, edition, publication date, page count, price and stock status should be represented consistently wherever the source data supports them.

Do not assume that every Marathi title has a verified English translation or transliteration. Keep original title, optional transliteration and translated/display title in separate fields when the chosen product data model supports it. Never overwrite an original-language title merely to improve search.

Before bulk import, define and test a product CSV/data template with required fields, optional fields, field formats and duplicate handling.

### 7.2 Inventory integrity

- Shopify remains the online inventory source of truth.
- Establish who updates physical stock, how often, and how exhibition sales are reconciled.
- If books are sold offline while also listed online, define a reliable stock-update process before accepting online orders.
- Do not claim that Shopify automatically knows about offline sales unless a POS or other integration is actually configured.
- Define a low-stock and out-of-stock operating procedure.
- Test overselling and simultaneous checkout behaviour with the actual Shopify configuration.

## 8. Storefront application structure

The proposed frontend should be modular, with clear separation between routes, reusable UI, commerce access and content.

A possible structure after framework approval:

```text
src/
  app/
    [locale]/
      page
      shop/
      collections/
      products/
      search/
      pages/
  components/
    layout/
    navigation/
    product/
    collection/
    search/
    cart/
    forms/
    feedback/
  features/
    catalog/
    cart/
    localization/
    search/
  lib/
    shopify/
    analytics/
    seo/
    validation/
  messages/
    en/
    mr/
  styles/
  types/
```

This is a proposed example, not a mandatory final folder tree. Adapt it to the framework’s current conventions. Do not create empty layers or abstractions that do not solve a real need.

### 8.1 Route and language strategy

**Approved:** Use stable, indexable locale-specific routes, for example:

- `/en/...` for English
- `/mr/...` for Marathi

Implement the approved URL strategy consistently before launch. Keep product/collection identity stable across languages where possible, add appropriate `hreflang` relationships, and avoid producing duplicate indexable pages for the same content without a clear language distinction. Confirm the exact route implementation against the chosen Shopify integration and framework conventions.

Language switching should preserve the current page or equivalent content when a translated counterpart exists. If it does not exist, route to a sensible fallback and make the change understandable to the user.

### 8.2 Translation boundaries

Translate interface elements such as navigation, buttons, labels, validation, filters, empty states and policy content into both supported languages. Product metadata should remain faithful to the actual book and available source data. Use a consistent terminology glossary and review Marathi copy for naturalness and readability.

## 9. Shopify API and integration design

### 9.1 Storefront API

Use Shopify’s supported Storefront API and a maintained integration approach compatible with the chosen framework.

- Select a supported API version and document the upgrade process.
- Request only the fields the page needs.
- Use environment variables for public configuration and secrets, respecting which values are safe to expose to the browser.
- Keep private tokens and Admin API credentials server-side only.
- Add typed data handling and graceful API error states.
- Use Shopify’s cart and checkout flow rather than implementing a parallel cart/order system.

### 9.2 API resilience

The storefront should handle:

- Network timeouts and temporary API failures
- Missing or unpublished products
- Deleted or unavailable variants
- Invalid/expired cart identifiers
- Changed prices or stock between browsing and checkout
- Rate limits and provider errors
- Malformed or incomplete product data

Retry only operations where retrying is safe. Do not blindly retry order creation, payment actions or other non-idempotent operations.

### 9.3 Caching and freshness

- Cache public, non-sensitive catalogue content only where appropriate.
- Establish a freshness strategy for product and collection pages.
- Avoid long-lived caching of cart, customer, checkout or order-specific information.
- Use supported revalidation/webhook mechanisms if required and available.
- Treat Shopify checkout as the final validation point for price, availability and order totals.

The precise caching strategy depends on the selected framework, hosting and Shopify API behaviour.

### 9.4 Webhooks

If webhooks are needed for revalidation, fulfilment or integration workflows:

- Subscribe only to required topics.
- Verify webhook authenticity according to Shopify’s current documentation.
- Make handlers idempotent.
- Log outcomes without logging secrets or unnecessary personal data.
- Handle retries and out-of-order delivery safely.
- Document how failed events are detected and replayed.

Do not add a webhook server unless a real integration requirement calls for it.

## 10. Search, collections and filtering

The first release should favour a simple, maintainable discovery system.

- Use Shopify products and collections as the primary catalogue source.
- Decide whether initial search and filters can be supported by Shopify’s capabilities or require a dedicated search integration.
- Filter options should reflect fields actually populated and maintained in the catalogue.
- Search should handle the real product data, including Marathi script and English text where supported by the chosen implementation.
- Transliteration, typo tolerance, synonyms and cross-script search are not guaranteed by default; validate them against representative queries.
- Do not advertise filters that return incomplete or unreliable results.
- Use curated collections for editorial discovery without manually duplicating product records.

Search quality should be tested with real Marathi and English queries before launch.

## 11. Security and privacy

### 11.1 Secrets and access

- Keep tokens, API secrets and credentials in the selected platform’s environment-variable/secret-management facility.
- Never commit secrets to Git or include them in browser bundles, screenshots or logs.
- Use least-privilege access for Shopify, hosting, GitHub and third-party integrations.
- Enable multi-factor authentication for administrative accounts where available.
- Remove access promptly when a collaborator no longer needs it.
- Use separate development and production credentials when supported.

### 11.2 Customer and order data

- Minimise collection and retention of personal data.
- Do not store payment-card data in the custom application.
- Do not log full addresses, phone numbers, access tokens or other sensitive values unnecessarily.
- Use HTTPS for production traffic.
- Document the privacy policy, retention practices and the role of third-party providers before launch.
- Follow applicable Indian legal requirements and the actual provider/Shopify terms; obtain qualified advice where necessary.

### 11.3 Application security

- Validate untrusted input at appropriate boundaries.
- Avoid rendering untrusted HTML.
- Use secure, framework-supported patterns for cookies, redirects and request handling.
- Apply rate limiting or abuse controls to any custom public endpoints if introduced.
- Keep dependencies updated and review security advisories.
- Test error paths so stack traces, secrets and internal details are not shown to customers.

## 12. Performance, accessibility and SEO

### 12.1 Performance

- Optimise product imagery and responsive image delivery.
- Avoid unnecessary JavaScript and oversized client-side libraries.
- Use framework-supported rendering and caching where appropriate.
- Load non-critical third-party scripts only when needed.
- Test representative low-end mobile devices and constrained network conditions.
- Measure real performance rather than relying only on local development speed.

### 12.2 Accessibility

Target WCAG 2.2 AA as stated in the PRD. Verify:

- Keyboard access and visible focus
- Correct headings and landmarks
- Labels and understandable form errors
- Sufficient contrast
- Screen-reader names for controls and meaningful images
- Dialog and cart interaction behaviour
- Marathi and English language attributes
- Text resizing and mobile zoom
- Accessible loading, empty and error states

### 12.3 SEO

- Provide unique titles and descriptions for indexable pages.
- Use canonical URLs and appropriate language alternates.
- Generate a valid sitemap and robots directives.
- Use structured data only where it matches visible, accurate page content.
- Keep unavailable, filtered and paginated pages’ indexing behaviour deliberate.
- Ensure product metadata and availability shown to search engines reflect the current source data.
- Avoid generating large numbers of thin or duplicate pages.

## 13. Environments and deployment

### 13.1 Environments

At minimum, separate:

- **Local development:** work in Antigravity with local environment variables and non-production testing.
- **Preview/staging:** review builds and integrations without exposing unfinished work as the live storefront.
- **Production:** the public customer-facing website connected to the live Shopify store.

If Shopify’s available development-store or test-mode features are used, document their limits and ensure production orders cannot be accidentally created during testing.

### 13.2 Deployment flow

Proposed flow:

1. Make a small, scoped change.
2. Run formatting, linting, type checks and relevant tests.
3. Review the diff and verify no credentials or unrelated files were included.
4. Commit the change to Git.
5. Deploy a preview build where available.
6. Test affected routes and critical customer journeys.
7. Merge or promote through the agreed release process.
8. Verify production health and the critical flows after deployment.

The exact branch model and deployment provider remain open.

### 13.3 Rollback

- Keep changes in version control.
- Know how to roll back the storefront deployment.
- Document how to revert configuration changes safely.
- Recognise that rolling back frontend code does not automatically reverse Shopify product, inventory, order or payment changes.
- Avoid running destructive catalogue imports without a backup/export and a tested recovery process.

## 14. Testing strategy

### 14.1 Unit and component tests

Test translation helpers, product formatting, price/availability presentation, validation, route utilities and other deterministic logic.

### 14.2 Integration tests

Test the boundary between the storefront and Shopify using supported test/development data. Cover API errors, unavailable products, cart updates, checkout hand-off and language-specific rendering.

### 14.3 End-to-end tests

Before launch, exercise at least:

- Browse a collection and open a product
- Search in Marathi and English
- Switch languages while browsing
- Add, update and remove cart items
- Handle an unavailable or changed item
- Continue from cart to Shopify checkout
- Complete a supported test order/payment flow
- Verify order confirmation and shipping workflow in the selected configuration
- Use guest checkout
- Test optional account functionality if enabled
- Navigate with keyboard and inspect mobile layouts

### 14.4 Operational tests

- Import a representative sample of products and validate fields.
- Reconcile sample online and offline stock changes.
- Test a shipping label/tracking workflow with the selected aggregator.
- Test cancellation, refund and failed-payment handling where supported.
- Confirm analytics events do not fire with incorrect or duplicate values.
- Test backups/exports and documented recovery steps.

## 15. Observability and support

Record enough operational information to diagnose failures without exposing sensitive data.

Track where available:

- Storefront availability and deployment health
- Frontend exceptions
- Shopify API errors and latency
- Checkout hand-off failures
- Shipping integration failures
- Webhook delivery and processing failures, if webhooks exist
- Unexpected changes in conversion or checkout completion

Create a short operational runbook before launch that identifies who checks orders, stock, shipping exceptions, failed payments, customer queries and integrations.

## 16. Cost and complexity controls

The first release should avoid unnecessary custom infrastructure.

Do not introduce these unless justified by evidence:

- A separate commerce database
- A custom authentication system
- A custom checkout/payment processor
- A separate CMS
- A dedicated search platform
- A microservices architecture
- A custom order-management system
- A custom inventory system duplicating Shopify

Any proposed additional service should have a written reason, cost owner, security implications and failure/recovery plan.

## 17. Key risks and mitigations

| Risk | Consequence | Mitigation |
|---|---|---|
| Framework or hosting chosen before requirements are confirmed | Rework or avoidable costs | Approve the technology baseline before scaffolding. |
| Offline sales are not reflected in online stock | Overselling and cancellations | Define stock ownership and reconciliation; integrate POS if required. |
| Inconsistent Marathi/English metadata | Poor discovery and customer confusion | Define field rules, import templates and language QA. |
| Search does not handle real user queries | Users cannot find books | Test real queries in both scripts; choose search capability based on results. |
| Shipping provider limitations emerge late | Launch delay or manual fulfilment | Validate serviceability, labels, tracking, returns and Shopify integration before committing. |
| Payment provider is incompatible or costly | Failed launch or reduced conversion | Verify Shopify compatibility, eligibility, fees and settlement early. |
| API limits or stale caching | Missing or incorrect catalogue data | Request minimal fields, design cache freshness, test error states. |
| Credentials are exposed | Account compromise | Use secret storage, least privilege, MFA and repository scanning. |
| Unreviewed AI-generated code introduces defects | Security, stability or maintainability issues | Review diffs, run tests, keep commits small and avoid blind bulk changes. |
| Scope expands before launch | Delayed release | Prioritise PRD P0 requirements and defer nonessential features. |

## 18. Technical decisions register

These decisions must be recorded as they are made. Until approved, do not treat proposed values as final.

| Decision | Current status | Proposed next action |
|---|---|---|
| Commerce platform | Confirmed: Shopify | Create/configure the store when ready. |
| Custom storefront | Confirmed direction | Build separately from Shopify’s commerce backend. |
| Framework | **Approved: Next.js + TypeScript** | Use as the storefront baseline. |
| Styling system | **Approved: Tailwind CSS + shared design tokens** | Define and document tokens; avoid inconsistent one-off values. |
| Hosting | **Approved: Vercel** | Verify plan, project access, environment variables and deployment workflow. |
| Domain and DNS | Open | Confirm domain ownership and deployment setup. |
| Shopify plan/store configuration | Open | Verify required features and total recurring costs. |
| Storefront API version/client | Open | Select supported versions at implementation time. |
| Payment provider | **Open by decision** | Verify Shopify compatibility, eligibility, supported methods, fees and settlement before selecting. |
| Shipping aggregator | **Required before launch; provider open by decision** | Compare India coverage, rates, tracking, returns and Shopify integration before selecting. |
| Product search solution | Open | Prototype with representative Marathi/English queries. |
| Locale URL structure | Separate `/en/` and `/mr/` paths | **Approved** | Implement locale-aware routing and language metadata; preserve equivalent page context when switching languages where a translated counterpart exists. |
| Analytics | Open | Select platform, events and privacy approach. |
| Error monitoring | Open | Choose a tool compatible with hosting and budget. |
| Customer accounts | Confirmed: optional at launch | Keep guest checkout available. |
| Inventory process | Open | Define offline/online reconciliation and ownership. |
| Notifications | Open | Define which system sends each transactional message. |
| CI/test automation | Open | Choose checks supported by the repository and hosting setup. |

## 19. Implementation sequence

### Phase A — Confirm the foundation

- Review and approve this architecture.
- Framework (Next.js + TypeScript), styling (Tailwind CSS with shared design tokens), hosting (Vercel) and locale URL paths (`/en/` and `/mr/`) are confirmed.
- Verify account ownership, access, pricing and deployment requirements for Vercel.
- Create or configure the Shopify store and test environment.
- Confirm domain ownership and access controls.
- Define product data template and inventory operating process.

### Phase B — Establish the application

- Create the repository structure and application scaffold.
- Configure environment variables and safe API access.
- Establish shared design tokens, typography and bilingual UI foundations.
- Connect to Shopify using a minimal read-only product/collection request.
- Add linting, type checks and initial tests.

### Phase C — Build core commerce journeys

- Implement navigation, collections, search and product pages.
- Implement Shopify cart and checkout hand-off.
- Build loading, empty, error and unavailable states.
- Add metadata, accessibility and analytics foundations.
- Test guest checkout and optional account behaviour.

### Phase D — Integrations and operations

- Configure the selected payment setup.
- Integrate the selected shipping aggregator.
- Verify notifications, tracking, cancellations and refunds.
- Validate inventory reconciliation and product imports.
- Configure monitoring and operational runbooks.

### Phase E — Launch readiness

- Complete mobile, bilingual, accessibility, SEO and performance testing.
- Run end-to-end test orders.
- Verify policies, customer support details and delivery information.
- Check analytics and privacy configuration.
- Confirm rollback and recovery procedures.
- Launch only after all PRD P0 acceptance criteria are satisfied.

## 20. Architecture acceptance checklist

This document is ready to be marked **Approved** when:

- [ ] It matches the approved PRD and introduces no conflicting product requirements.
- [ ] Shopify’s role as commerce source of truth is clear.
- [ ] The custom storefront and Shopify responsibilities are clearly separated.
- [x] The team has approved Next.js + TypeScript, Vercel, Tailwind CSS with shared design tokens, and `/en/` and `/mr/` locale paths.
- [ ] Payment and shipping provider selection remains explicit until verified.
- [ ] Bilingual route, translation and product-metadata strategy is agreed.
- [ ] Inventory ownership and offline/online reconciliation are assigned.
- [ ] Security, test, deployment and recovery expectations are understood.
- [ ] Open decisions have owners or agreed next actions.

## 21. Governance

- `PRD.md` remains the approved product source of truth.
- `Architecture.md` records the technical implementation direction.
- Do not silently change an approved architectural decision; record the reason and impact.
- When a technical decision changes a product requirement, update the PRD as well.
- Keep this document concise enough to maintain and detailed enough to guide implementation.
- Update the version and status whenever a reviewed change is accepted.

---

**End of revised draft — Architecture.md**
