# SahityaYatra — Implementation Phases

**Document:** Phases.md  
**Version:** 0.2  
**Status:** Revised draft for review  
**Created:** 14 October 2026  
**Depends on:** `PRD.md` (Version 1.0, Approved), `Architecture.md` (Version 0.2, Approved), `Rules.md` (Version 0.2, Approved)  
**Project:** SahityaYatra bilingual book-commerce website

---

## 1. Purpose

This document turns the approved SahityaYatra product requirements and architecture into a practical implementation sequence. It defines phases, dependencies, deliverables, exit criteria and launch gates so the project can be built in small, reviewable steps.

**Budget and sequencing constraint:** Build and review the frontend prototype before starting a paid Shopify subscription. Shopify store setup and paid plan activation are deferred until the project owner has approval from their father. Before that approval, use clearly labelled sample data for design and interaction work; never represent the prototype as a live shop or claim that real checkout, stock, payments or shipping work.

A phase is not complete because code has been generated. It is complete when its deliverables exist, have been reviewed, and meet the exit criteria.

## 2. Planning principles

1. **Security before convenience.** No phase may bypass the security and privacy rules in `Rules.md`.
2. **Validate foundations early.** Confirm the Shopify setup, framework, hosting, data model and provider constraints before building dependent features.
3. **Build vertical slices.** Whenever practical, make a small end-to-end feature work before expanding it.
4. **Test with real catalogue examples.** Include Marathi, English, mixed-script titles, long titles and missing optional metadata.
5. **Keep Shopify authoritative.** Do not build duplicate commerce state.
6. **Defer unverified integrations.** Payment and shipping providers remain open until compatibility and business terms are verified.
7. **Avoid premature complexity.** Add infrastructure only when a proven requirement needs it.
8. **Human review is mandatory.** AI-generated design, copy and code require review and testing.
9. **Maintain the documents.** If implementation reveals a change to product or architecture assumptions, record and approve it in the relevant document.
10. **Use release gates.** Critical security, privacy, checkout, payment or inventory defects block launch.

## 3. Phase overview

<text>Proposed sequence: complete the foundation and core storefront first, then add commerce integrations, validate the full customer journey, and launch only after the release checklist passes.</text>

| Phase | Name | Outcome | Gate |
|---|---|---|---|
| 0 | Project control and decisions | Approved documents, access and decision register | Scope and owners are clear |
| 1 | Frontend prototype foundation | Next.js app, Tailwind tokens, bilingual routes and preview | Prototype works without paid Shopify |
| 2 | Design system and shared shell | Responsive header, footer, navigation and UI foundations | Design reviewed in both languages |
| 3 | Catalogue and discovery prototype | Home, collections, search interactions and product layouts using labelled sample data | Core discovery journeys reviewed |
| 4 | Frontend usability and design approval | Responsive, bilingual prototype tested and approved | Owner approves before Shopify spend |
| 5 | Shopify setup and catalogue integration | Shopify configured and real product data connected | Approval and costs confirmed |
| 6 | Cart and checkout | Shopify cart and checkout hand-off | Test purchase flow verified |
| 7 | Payments, shipping and notifications | Selected integrations configured | Provider workflows verified |
| 8 | Content, trust and growth foundations | Policies, contact, SEO, analytics and support | Content and privacy approved |
| 9 | Quality assurance and launch readiness | Full regression, security and operations review | All launch gates pass |
| 10 | Launch and stabilisation | Controlled production launch and issue monitoring | Critical journeys stable |
| 11 | Post-launch improvement | Evidence-based iteration and catalogue expansion | Priorities set from real data |

Phases may overlap where dependencies permit, but do not skip a gate. The frontend prototype may use sample data before Shopify is subscribed to; sample data must be identified as prototype-only and never mistaken for live inventory, pricing, reviews or checkout. Do not purchase a domain or activate a paid Shopify plan until approval and costs are understood. Exact dates should be assigned only after scope, business-data availability and provider lead times are understood.

## 3.1 Required sequencing decision: frontend first, Shopify later

The project owner has confirmed that the frontend will be designed and built first. A Shopify subscription will be taken later, only after the project owner has received approval from their father.

Follow this practical sequence:

1. Build the Next.js + TypeScript frontend foundation using Tailwind CSS and shared design tokens.
2. Implement `/en/` and `/mr/` routes, shared navigation, responsive layouts and the main storefront screens.
3. Use a small, clearly labelled prototype dataset to review product cards, product details, search/filter interactions and empty/error states.
4. Test the design on mobile, desktop, keyboard navigation and both languages. Review against `Rules.md`, including the anti-AI-slop and pre-launch checklists.
5. Present the prototype and the expected Shopify/domain costs for approval.
6. Only after approval, configure Shopify, import a representative catalogue and replace prototype data with verified live Shopify data.
7. Implement and test cart, checkout, payment and shipping integrations after the relevant platform and provider decisions are confirmed.

**Cost guardrails before approval**
- Do not start a paid Shopify subscription.
- Do not purchase a domain solely for the prototype.
- Use a Vercel preview only if it can be done within the available account/plan and without unapproved spending.
- Do not connect real payments, accept orders or claim live inventory/shipping works.
- Keep prototype data obviously separate from production data. Do not use fake reviews or unsupported claims to make the prototype appear live.

This changes the sequence, not the approved architecture: Shopify remains the intended commerce source of truth when the real store is set up.

## 4. Phase 0 — Project control and decisions

### Objectives
Establish a controlled source of truth and avoid building on assumptions.

### Tasks
- Keep approved `PRD.md`, `Architecture.md` and `Rules.md` in the project root.
- Confirm the repository, branch conventions and current application status.
- Confirm access ownership for GitHub, Shopify, Vercel, domain/DNS and business email as relevant.
- Create a decision register for unresolved items.
- Confirm who approves design, catalogue data, policy wording, launch and production changes.
- Record the intended launch region as India, consistent with the PRD.
- Identify the real customer support contact and business details to publish.
- Keep payment and shipping providers open until verified.

### Deliverables
- Approved core documents in version control
- Access/ownership checklist (no passwords or secrets recorded)
- Decision register with owner and next action
- Agreed review and approval workflow

### Exit criteria
- [ ] Documents are present and consistent.
- [ ] Account ownership and required access are understood.
- [ ] Open decisions have owners or a deliberate “defer” status.
- [ ] No credentials are stored in project documentation.

## 5. Phase 1 — Commerce and data foundation (deferred until approval)

### Objectives
After the frontend prototype is approved and the project owner has approval to incur the cost, configure Shopify and prove that the product data can support the initial catalogue.

### Tasks
- Confirm approval and expected subscription costs before creating or activating a paid Shopify store.
- Create/configure the Shopify store and appropriate development/test setup.
- Confirm the plan and required features against the approved PRD.
- Define the product-data template and import process.
- Map fields for title, original title, optional transliteration/display title, author, publisher, ISBN where available, language, format, edition, page count, publication date, price, images, collection and inventory.
- Mark required versus optional fields; do not fabricate missing metadata.
- Review duplicate-product and identifier-handling rules.
- Import a small representative sample before attempting a larger import.
- Verify images, prices, variants, collections, product status and inventory.
- Define who updates physical stock and how exhibition/offline sales reconcile with online stock.
- Document export and recovery steps before destructive catalogue operations.

### Deliverables
- Configured Shopify development/test environment
- Approved product-data template
- Validated sample catalogue
- Inventory ownership and reconciliation procedure
- Initial catalogue import notes

### Exit criteria
- [ ] Representative Marathi, English and mixed-script products display accurate data.
- [ ] Price and inventory are managed in Shopify.
- [ ] Duplicate and missing-data cases have a documented handling method.
- [ ] Offline/online stock ownership is assigned.
- [ ] A safe export/recovery process is documented.

## 6. Phase 2 — Application foundation

### Objectives
Create a minimal, secure, repeatable Next.js + TypeScript storefront and deploy it to Vercel.

### Tasks
- Scaffold the application using a current stable, compatible Next.js and TypeScript setup.
- Use the existing repository structure where appropriate; do not replace or delete unrelated files.
- Configure Tailwind CSS and a central shared design-token foundation.
- Set up `/en/` and `/mr/` locale-aware routing.
- Configure environment variables and a safe `.env.example`.
- Ensure secrets are server-side only and excluded from Git.
- Add linting, type checking, formatting and baseline tests appropriate to the chosen setup.
- Add useful loading, not-found and error boundaries.
- Connect to Shopify with a minimal read-only product/collection request.
- Deploy a preview to Vercel and document the deployment process.
- Verify that no private credentials are exposed in browser bundles or build output.

### Deliverables
- Working application scaffold
- Bilingual route skeleton
- Tailwind tokens baseline
- Safe environment configuration
- CI/local quality checks
- Vercel preview deployment

### Exit criteria
- [ ] Both locale routes render and set the correct document language.
- [ ] The application builds and deploys successfully.
- [ ] Lint/type/test results are recorded.
- [ ] Shopify read-only integration works or has a clearly documented blocker.
- [ ] No secrets are exposed.
- [ ] Mobile layout has no obvious overflow at baseline viewports.

## 7. Phase 3 — Design system and shared shell

### Objectives
Implement the approved visual foundation and shared site structure before building every page independently.

### Tasks
- Complete and approve `Design.md` before finalising the visual system.
- Establish typography, colour, spacing, sizing, radii, borders, focus and state tokens.
- Use authentic SahityaYatra brand assets and approved logo files.
- Build shared header, desktop navigation, mobile menu, footer and language switcher.
- Ensure logo and applicable contact details are clickable.
- Build reusable accessible buttons, form controls, alerts, empty states and loading states.
- Confirm all navigation destinations exist or are deliberately marked as not yet available.
- Test long Marathi labels, long English labels and mixed-script content.
- Review the page against the anti-AI-slop criteria in `Rules.md`.

### Deliverables
- Shared design-token system
- Responsive header, navigation and footer
- Language switcher
- Reusable accessible UI primitives
- Visual review notes and fixes

### Exit criteria
- [ ] Design direction is approved and traceable to `Design.md`.
- [ ] Shared shell works at mobile, tablet and desktop widths.
- [ ] Navigation and footer links work in both locales.
- [ ] Keyboard focus, contrast and mobile menu behaviour are tested.
- [ ] No placeholder branding or generic/fabricated claims remain.

## 8. Phase 4 — Catalogue and discovery

### Objectives
Let customers discover books and understand product details before adding them to the cart.

### Tasks
- Implement home-page discovery sections based on real catalogue and merchandising needs.
- Build shop/collection listing pages.
- Build product detail pages using live Shopify data.
- Implement search using verified capabilities of the selected Shopify/API approach.
- Add filters only for product fields that are reliably populated.
- Handle loading, empty results, unavailable products and API errors.
- Display accurate title, author, publisher, language, edition/format, price, image and availability where data exists.
- Preserve original-language book titles and separate transliteration/translation when available.
- Add SEO metadata and structured data only where accurate.
- Test representative queries in Marathi and English, including mixed-script searches.
- Check image sizing, page performance and keyboard interaction.

### Deliverables
- Home page
- Shop/collection pages
- Search results
- Product detail pages
- Verified filters and empty/error states
- Search and catalogue test notes

### Exit criteria
- [ ] Product details come from Shopify, not hardcoded production content.
- [ ] Real sample books render accurately in both language contexts.
- [ ] Search and filters have been tested against representative catalogue data.
- [ ] Unavailable and missing-data states are understandable.
- [ ] Mobile and accessibility checks pass for core catalogue journeys.
- [ ] No fabricated reviews, claims or book details are present.

## 9. Phase 5 — Cart and checkout

### Objectives
Implement the customer’s path from product selection to Shopify checkout.

### Tasks
- Implement cart creation and updates through the supported Shopify cart flow.
- Support add, remove and quantity changes.
- Handle invalid variants, changed prices, changed inventory and expired cart state.
- Display a clear subtotal and only display other amounts when returned by the authoritative commerce flow.
- Hand off to Shopify checkout using the supported checkout URL and integration.
- Preserve locale intent where the supported checkout configuration permits it.
- Keep guest checkout available; optional customer accounts must not block guest purchase.
- Do not store payment-card information in the custom storefront.
- Test success, failure, cancellation and pending states supported by the configured checkout.
- Test duplicate-click and retry behaviour.

### Deliverables
- Functional cart
- Shopify checkout hand-off
- Cart and checkout error states
- End-to-end test scenarios and results

### Exit criteria
- [ ] Cart changes are reflected correctly through Shopify.
- [ ] Checkout hand-off works in the test setup.
- [ ] Price and availability changes are handled safely.
- [ ] Guest checkout remains possible.
- [ ] Payment success is not inferred solely from a browser redirect.
- [ ] Critical checkout failures block launch.

## 10. Phase 6 — Payments, shipping and notifications

### Objectives
Configure verified providers and validate the real operational workflow.

### Dependencies
This phase depends on provider selection, account eligibility, business documentation and the provider’s current Shopify integration capabilities. Payment and shipping providers are intentionally open until verified.

### Tasks
- Compare eligible payment providers for Shopify compatibility, supported methods, fees, settlement, refunds and failure handling.
- Confirm business KYC and setup requirements.
- Compare shipping aggregators for India coverage, rates, serviceability, labels, tracking, cancellations, returns and Shopify integration.
- Confirm whether shipping rates are live-calculated, rule-based or configured by another supported method.
- Configure the selected integrations in the appropriate test mode first.
- Define which system sends each order, payment and shipping notification.
- Avoid duplicate notifications from Shopify and third-party services.
- Test shipment creation, tracking updates and exception handling.
- Test payment failure, pending, cancellation and refund paths as supported.
- Verify provider permissions and secrets are stored securely.

### Deliverables
- Provider selection record with verified trade-offs
- Configured payment workflow
- Configured shipping workflow
- Notification ownership and template plan
- Integration test results and exception procedures

### Exit criteria
- [ ] Providers are selected based on verified current terms and compatibility.
- [ ] Test payment flows behave as expected.
- [ ] Shipping serviceability, label and tracking flows are tested as applicable.
- [ ] Notifications are accurate and not duplicated.
- [ ] Failed/pending states have a clear operational process.
- [ ] No provider credentials or sensitive data are exposed.

## 11. Phase 7 — Content, trust and growth foundations

### Objectives
Prepare the information customers need to trust the business, complete a purchase and get help.

### Tasks
- Publish business-owner-approved About, Contact and relevant help content.
- Publish approved privacy, terms, shipping/delivery and refund/return/cancellation policies.
- Verify all contact details and business claims.
- Ensure the contact form works and routes submissions to an approved destination.
- Configure phone, email and WhatsApp links only when correct contact details are confirmed.
- Add favicon and accurate page titles, descriptions, canonical metadata and locale alternates.
- Configure sitemap, robots rules and social-sharing previews.
- Set up analytics after privacy and consent review.
- Define the approved analytics event list and verify event firing.
- Set up business-domain email if required and test deliverability.
- Submit the sitemap to relevant search-engine tools where appropriate.
- Audit third-party SDKs and remove unnecessary scripts.

### Deliverables
- Approved trust and policy pages
- Working contact channels
- SEO and social metadata
- Privacy-reviewed analytics
- Domain email setup, if required
- Content QA report

### Exit criteria
- [ ] Policy and business information has been approved by the responsible owner.
- [ ] Contact channels and forms have been tested.
- [ ] Metadata and language alternates are accurate.
- [ ] Analytics respects the approved privacy/consent configuration.
- [ ] No unsupported claims or placeholder content remain.

## 12. Phase 8 — Quality assurance and launch readiness

### Objectives
Test the complete experience and confirm that critical customer and operational journeys work.

### Tasks
- Execute the complete pre-launch checklist in `Rules.md`.
- Test all pages in Marathi and English.
- Test current supported Chrome and Safari, including iOS Safari where available.
- Test real mobile devices and narrow viewport sizes.
- Check every link, button, form, menu and footer destination.
- Test for horizontal overflow and clipped content.
- Check image optimisation, page titles, meta descriptions, favicon, sitemap and social previews.
- Perform keyboard, screen-reader and contrast checks.
- Test contact, email, WhatsApp, analytics and search-engine setup.
- Run test orders and validate payment, order confirmation, shipping, tracking and refund/cancellation paths.
- Review security configuration, secrets, dependencies, access controls and third-party SDKs.
- Verify backups/exports and test a practical recovery step where feasible.
- Confirm production domain, HTTPS, rollback and monitoring.
- Record issues, severity, owner and resolution evidence.

### Deliverables
- QA matrix and results
- Security/privacy review results
- Performance and accessibility findings
- Test-order evidence with sensitive data redacted
- Launch issue register
- Rollback and operational runbook

### Exit criteria
- [ ] All critical customer journeys pass.
- [ ] No unresolved critical security, privacy, payment, order, inventory or checkout defect remains.
- [ ] P0 requirements and their acceptance criteria are satisfied.
- [ ] Mobile, bilingual and accessibility checks are complete.
- [ ] Production configuration and rollback are verified.
- [ ] Accountable owner explicitly approves the launch.

## 13. Phase 9 — Launch and stabilisation

### Objectives
Release in a controlled manner and detect issues quickly.

### Tasks
- Confirm the production deployment and domain configuration.
- Confirm the live Shopify store, products, inventory and checkout are correct.
- Run a final production smoke test in both locales.
- Confirm contact and transactional notification channels work.
- Confirm analytics and monitoring are functioning without exposing private data.
- Keep a named person responsible for checking orders, inventory and shipping exceptions.
- Monitor errors, checkout completion, payment failures, search behaviour and customer support requests.
- Fix critical issues before lower-priority polish.
- Keep a dated record of launch state and any accepted non-critical issues.

### Deliverables
- Production release
- Launch verification notes
- Monitoring and order-check routine
- Known-issue list and prioritised fixes

### Exit criteria
- [ ] Production home, collection, product, cart and checkout journeys work.
- [ ] Both language paths work.
- [ ] Orders, payment status and fulfilment can be monitored.
- [ ] Critical errors are addressed and rollback remains available.
- [ ] Business operations have an owner and routine.

## 14. Phase 10 — Post-launch improvement

### Objectives
Improve the storefront using evidence from real customers and operations.

### Tasks
- Review search queries and zero-result searches.
- Review product discovery, product-page engagement and checkout funnel.
- Identify catalogue-data gaps and inventory discrepancies.
- Review customer questions, contact-form submissions and returns/cancellations.
- Collect usability feedback without pressuring customers or exposing personal data.
- Prioritise fixes by customer harm, conversion impact, operational effort and confidence.
- Expand the catalogue in controlled batches after import quality is proven.
- Add new integrations or features only when evidence supports the need.
- Revisit AI-generated design and copy with real user behaviour and human editorial review.

### Deliverables
- Post-launch findings
- Prioritised improvement backlog
- Catalogue expansion plan
- Updated decision and risk registers

### Exit criteria
- [ ] Improvements are tied to observed evidence or a clear business need.
- [ ] Catalogue expansion has data-quality and inventory checks.
- [ ] Changes follow the same security and QA rules as launch work.

## 15. Cross-phase workstreams

Some work continues throughout the project rather than belonging to one phase.

### Security and privacy
Threat review, least-privilege access, secret handling, SDK audits, data minimisation, policy accuracy and incident/recovery planning.

### Accessibility and bilingual quality
Keyboard access, contrast, semantic markup, Marathi language review, locale metadata and long-text layout checks.

### Catalogue and inventory operations
Product-data accuracy, duplicate checks, stock reconciliation, image rights and recovery exports.

### Design quality and anti-AI-slop
Human review of visual direction and copy; testing real content and devices; rejecting generic, misleading or decorative elements that do not serve the user.

### Documentation and decision management
Keep `PRD.md`, `Architecture.md`, `Rules.md`, `Design.md`, `Phases.md` and `Memory.md` consistent. Record significant changes and why they were made.

## 16. Priority and severity rules

Use the following simple priority scheme for the build and launch backlog.

| Priority | Meaning | Typical examples |
|---|---|---|
| P0 — Launch blocker | Must work before launch; high customer, security or business risk | Checkout failure, exposed secret, incorrect price, unreliable stock, broken language route, missing required policy |
| P1 — Required soon | Important for a complete and usable launch, but not necessarily a blocker if a safe alternative is approved | Weak search filters, incomplete non-critical metadata, missing lower-priority editorial section |
| P2 — Enhancement | Useful improvement that can follow once core journeys are stable | Advanced recommendations, additional discovery features, non-essential animation |

Priority labels do not override legal obligations, security requirements or provider terms. A required compliance or security fix cannot be deferred just because it is inconvenient.

## 17. Change control

When new information changes the plan:

1. Identify the affected requirement or assumption.
2. Explain customer, security, cost, schedule and maintenance impact.
3. Identify affected documents and phases.
4. Obtain approval for material changes.
5. Update the decision register and relevant document.
6. Re-plan dependencies rather than silently skipping a gate.

A new AI-generated idea is not automatically a requirement. Add it only when it solves a demonstrated user or business need.

## 18. Phase completion report template

Use this concise template when closing a phase:

```text
Phase:
Status: Complete / Blocked / In progress

Deliverables completed:
- ...

Acceptance criteria:
- Passed:
- Not passed:

Tests actually run:
- Command or scenario:
- Result:

Known issues and risks:
- ...

Decisions required:
- ...

Evidence or links:
- ...

Recommended next phase:
- ...
```

Never report a phase as complete if its exit criteria have not been verified.

## 19. Open dependencies and assumptions

The schedule and some implementation details remain dependent on:

- Shopify store setup, plan and required features
- Final product data and image rights
- Physical/online inventory reconciliation process
- Payment provider eligibility, terms and configuration
- Shipping aggregator capabilities, service coverage and integration
- Final domain, DNS and business email setup
- Approved policy and business contact information
- Analytics and consent configuration
- Final design direction documented in `Design.md`
- Actual implementation status and available development time

Do not invent deadlines or promise a launch date until these dependencies are understood.

## 20. Governance

- `PRD.md` defines the approved product scope.
- `Architecture.md` defines the approved technical baseline.
- `Rules.md` defines security, development, privacy, quality and anti-AI-slop standards.
- `Design.md` defines the visual and interaction system once approved.
- `Phases.md` defines implementation sequencing and exit criteria.
- `Memory.md` preserves durable project context and handover notes.
- Update this document when phase order or exit criteria materially change.
- A phase may be marked complete only after evidence-based review.

---

**End of revised draft — Phases.md**
