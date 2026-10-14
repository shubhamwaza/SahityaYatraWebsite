# SahityaYatra
## Product Requirements Document

**File:** `PRD.md`  
**Version:** 1.0  
**Status:** Approved  
**Approval date:** 14 October 2026  
**Business:** SahityaYatra  
**Product:** Bilingual Marathi and English Bookstore  
**Commerce Platform:** Shopify  
**Development Environment:** Google Antigravity  
**Launch Market:** India

---

## 1. Executive Summary

SahityaYatra is a Marathi and English books business that sells books through offline exhibitions and existing business channels. Its broader catalogue contains approximately 5,000–6,000 SKUs, while the initial online launch will feature 100–300 selected books.

The objective is to establish a dedicated e-commerce website that enables customers across India to discover and purchase books, expands SahityaYatra beyond physical exhibitions, and creates a foundation for sustainable business growth.

The website will use a custom-designed storefront developed with Google Antigravity, with Shopify serving as the commerce backend.

The experience will be fully bilingual, supporting Marathi and English throughout the customer-facing interface. Language presentation will be deliberate: selected headings and discovery sections may pair both languages, while interface elements will respect the customer's selected language.

The project will study established online bookstores, particularly Akshardhara, to understand information architecture, catalogue discovery, product presentation, and Marathi-English communication. SahityaYatra will use these insights to develop its own identity and improve usability rather than reproduce another website.

### 1.1 Product vision

To make discovering and purchasing Marathi and English books convenient, trustworthy, and enjoyable for readers across India.

### 1.2 Product mission

Build a scalable digital bookstore that combines literary curation, intuitive discovery, accurate product information, reliable checkout, and operationally responsible fulfilment.

### 1.3 Core principle

**Help readers find the right book, understand what they are buying, and complete their purchase with confidence.**

---

## 2. Business Context

### 2.1 Known business facts

- Existing business: SahityaYatra.
- Product category: Marathi and English books.
- Existing sales channel: Offline book exhibitions and other existing channels.
- Approximate total catalogue: 5,000–6,000 SKUs.
- Initial online catalogue: 100–300 selected titles.
- Current inventory process: Manual, without a centralised inventory system.
- Initial customer market: India.
- Existing Facebook presence: https://www.facebook.com/SahityaYatraShop.
- Existing brand asset: SahityaYatra logo featuring Devanagari lettering and an open-book-and-sprout motif.

These facts do not establish that every existing title has verified stock, complete metadata, suitable product images, or permission for unrestricted online sale.

### 2.2 Problems to address

1. The business needs a dedicated online sales channel.
2. Customers need effective ways to discover books without knowing exact titles.
3. Product information needs to be organised consistently.
4. Offline sales can create online inventory discrepancies.
5. Customers need clear information about pricing, availability, shipping, returns, and payment.
6. The website needs a distinctive identity that combines literary warmth with contemporary usability.
7. The platform must remain maintainable as the catalogue and order volume grow.

---

## 3. Product Goals

### Primary goals

**G1. Launch online sales:** Enable customers within India to purchase eligible books through the website.

**G2. Improve discovery:** Support browsing by language, category, author, title, and curated collection.

**G3. Deliver a bilingual experience:** Support Marathi and English across the core customer journey.

**G4. Establish reliable commerce operations:** Use Shopify as the authoritative source for online products, prices, inventory settings, carts, checkout, and orders.

**G5. Reduce overselling:** Introduce a documented inventory procedure that accounts for offline sales.

**G6. Enable expansion:** Support catalogue growth beyond the initial 100–300 books.

**G7. Measure performance:** Establish analytics for customer behaviour, completed purchases, revenue, and fulfilment quality.

### Non-goals for the initial launch

- Reproducing a competitor's website.
- Uploading the entire catalogue before data and inventory readiness.
- Building a custom payment processor.
- Building a separate inventory management platform.
- Launching a multi-vendor marketplace.
- Launching international shipping.
- Developing native mobile applications.
- Introducing loyalty programmes, subscriptions, or memberships without separate approval.
- Implementing AI recommendations or advanced personalisation before sufficient data and a clear business case exist.

---

## 4. Target Users

### 4.1 Marathi literature readers

Readers seeking Marathi novels, poetry, biographies, history, essays, and other available Marathi-language titles.

### 4.2 English literature readers

Readers seeking fiction, nonfiction, biographies, educational reading, and other available English-language titles.

### 4.3 Exploratory readers

Customers who want reading recommendations or know a subject but not a particular book.

### 4.4 Gift buyers

Customers looking for appropriate books for friends, family, and special occasions.

### 4.5 Returning customers

Existing SahityaYatra customers who want to find previously discovered titles or purchase books outside exhibition dates.

These segments represent intended audiences. Their behaviour and priorities should be validated through real customer feedback and analytics.

---

## 5. Competitive Reference: Akshardhara

**Reference:** https://akshardhara.com

Akshardhara will serve as a reference for understanding established Marathi bookstore conventions, not as a design template.

### 5.1 Reference areas

The project should study:

- Primary and secondary navigation.
- Marathi and English category organisation.
- Paired bilingual headings.
- Product cards and product detail pages.
- Collection and catalogue browsing.
- Search, sorting, and filtering.
- Cart, account, and checkout journeys.
- Trust information, delivery policies, and customer support.
- Mobile usability and accessibility.

### 5.2 Observations from the reference review

The reviewed public pages suggest several useful patterns:

- Marathi and English are used together in some section headings.
- Books are organised into multiple subject and language categories.
- Product grids use familiar e-commerce conventions, including book covers, prices, and shopping actions.
- Promotional and discounted product collections are part of the shopping experience.
- A large catalogue requires effective search and navigation.

The earlier reference review reported approximately 21,997 products on an all-products page and a large collection structure. These figures are snapshots from the reviewed pages, not permanent facts, independently audited catalogue totals, or requirements for SahityaYatra.

This review is a preliminary desk-based audit. Detailed interaction behaviour, accessibility, mobile performance, and checkout usability require separate testing.

### 5.3 Lessons for SahityaYatra

| Reference pattern | SahityaYatra requirement |
|---|---|
| Numerous categories | Create a compact, understandable navigation hierarchy |
| Paired Marathi-English headings | Establish consistent bilingual content rules |
| Large product grids | Make search, filters, and sorting easy to use |
| Promotional product cards | Prioritise readable book information and restrained promotion |
| Mixed-script product names | Separate original titles, display titles, and transliterations |
| Large catalogue | Use curated collections to guide discovery |
| Familiar cart conventions | Implement reliable Shopify-backed cart and checkout flows |

### 5.4 Competitive differentiation

SahityaYatra will not attempt to compete primarily through catalogue size or discount intensity.

Its intended differentiators are:

- Thoughtful book curation.
- A consistent Marathi-English experience.
- Clear product information.
- Effective discovery for a smaller initial catalogue.
- A warm, recognisable literary identity.
- Reliable inventory and fulfilment processes.
- A customer journey designed for mobile use.

---

## 6. Scope and Information Architecture

### 6.1 Homepage

Required sections:

- Brand header and primary navigation.
- Search entry point.
- Hero introducing SahityaYatra.
- Clear call to action to explore books.
- Marathi and English discovery paths.
- Selected curated collections.
- New arrivals, when supported by catalogue data.
- Bestsellers or trending books only when the designation has a defensible basis.
- SahityaYatra recommendations.
- Concise introduction to the business.
- Optional newsletter signup when an appropriate provider and consent workflow exist.
- Footer containing customer support and policy links.

The homepage must not rely on invented testimonials, fake rankings, unsupported statistics, or unverified discounts.

### 6.2 Primary navigation

The initial navigation should remain compact, with approximately 6–8 primary destinations as a design target rather than a fixed requirement.

Proposed destinations:

- Home.
- Marathi Books.
- English Books.
- All Books.
- Collections.
- About Us.
- Contact.

Search, account access, cart, and the language selector should be available through clearly recognisable controls.

Final navigation labels and category placement must be validated against the initial catalogue.

### 6.3 Shop and catalogue pages

Requirements:

- Responsive product grid.
- Product cover, title, author when available, and price.
- Search, sorting, and relevant filters.
- Clear stock and availability states.
- Pagination or another appropriate loading strategy.
- Useful empty and error states.
- Links to product detail pages.

Only eligible published products should be presented as purchasable.

### 6.4 Search

Search should support:

- Book title.
- Author.
- ISBN, when populated.
- Relevant product metadata where appropriate.
- Marathi and English queries.

The implementation should evaluate transliteration support, autocomplete, and typo tolerance. These are desired enhancements, not assumed native capabilities.

### 6.5 Collections and categories

Potential collections include:

- Marathi Classics.
- Modern Marathi Literature.
- English Fiction.
- Indian Literature in English.
- Poetry.
- Biographies and Memoirs.
- History.
- New Arrivals.
- SahityaYatra Recommends.

These are candidates, not a commitment to publish every category. Only categories supported by the actual catalogue should be launched.

The website should begin with a focused collection structure and expand as product breadth and customer behaviour justify it.

### 6.6 Product detail pages

Each product page should provide available, verified information:

- Original book title.
- Author.
- Cover image.
- Price.
- Availability.
- Language.
- Publisher, where available.
- ISBN, where available.
- Edition or format, where relevant.
- Page count, where available.
- Product description.
- Shipping and return guidance.
- Related books or relevant collections.

Required actions:

- Quantity selection subject to availability.
- Add to cart.
- Buy Now where supported and reliable.
- Clear cart feedback.
- Useful handling of unavailable products.

Unknown metadata must be omitted or explicitly marked as unavailable rather than fabricated.

### 6.7 Cart and checkout

The cart must allow customers to:

- Review products and quantities.
- Change quantities or remove items.
- View authoritative product prices and applicable totals.
- Understand relevant shipping charges and restrictions.
- Proceed to Shopify checkout.

Shopify must remain authoritative for checkout prices, inventory constraints, and order state.

Guest checkout and optional customer accounts must both be supported.

### 6.8 Customer accounts

Account creation must not be mandatory for purchasing.

Requirements:

- Guest checkout.
- Optional account registration and sign-in using a supported Shopify flow.
- Appropriate handling of authentication errors.
- Marathi and English account interfaces where supported.
- Clear privacy information.
- No automatic marketing consent through account creation.

### 6.9 About, contact, and policies

Required informational areas:

- About SahityaYatra.
- Contact and customer support.
- Shipping and delivery policy.
- Return, refund, and cancellation policy.
- Privacy policy.
- Terms and conditions.

All business facts and policy commitments must be verified and approved before publication.

### 6.10 Utility states

Implement:

- Not-found page.
- Loading and error states.
- Empty cart.
- No search results.
- Empty collection.
- Unavailable product.
- Form validation and submission feedback.

---

## 7. Bilingual Content and Language Experience

### 7.1 Core decision

The customer-facing website will support Marathi and English throughout the core experience.

The language system must be deliberate, consistent, and suitable for both scripts.

### 7.2 Language presentation model

Use **selective Marathi-English pairing** alongside a selectable interface language.

Examples of paired discovery headings:

- नवीन आगमन | New Arrivals
- मराठी पुस्तके | Marathi Books
- आमच्या शिफारसी | Our Recommendations

These are illustrative examples. Final Marathi copy must be reviewed and approved before publication.

### 7.3 Language selector

Requirements:

- Provide a visible Marathi/English selector.
- Use the selected language for the main interface.
- Preserve the preference during navigation where practical.
- Support appropriate language-specific routes or another documented URL strategy.
- Ensure selected-language content can be indexed appropriately where intended.
- Avoid unexpected language changes during shopping.

### 7.4 Content rules

**Navigation and controls:** Use the selected interface language.

**Discovery headings:** Pair Marathi and English when doing so improves comprehension or strengthens the brand experience.

**Book titles:** Preserve the published title. Store transliteration and translated display titles separately when available and useful.

**Descriptions:** Use verified original or approved translated content.

**Product metadata:** Clearly distinguish a book's actual language from the language of the website interface.

**Checkout:** Use supported Shopify language settings and verify the customer-facing experience.

**Policies:** Maintain reviewed Marathi and English versions.

**Notifications:** Verify the language options available through Shopify and connected providers. Do not assume every notification inherits the selected storefront language.

### 7.5 Typography and script support

- Use fonts that render Devanagari correctly.
- Ensure appropriate Unicode handling.
- Accommodate differences in text length.
- Prevent clipping, overlapping, and incorrect line breaks.
- Maintain readable hierarchy across both languages.
- Test representative long Marathi and English headings on mobile.

### 7.6 Acceptance criteria

- Customers can switch between Marathi and English.
- Core pages and controls are available in both languages.
- The selected language persists as intended.
- No major journey contains unintended untranslated interface elements.
- Both scripts render correctly across supported devices.
- Checkout, account, notification, and third-party language capabilities have been verified.

---

## 8. Visual and Interaction Principles

The final visual specification will be maintained in `Design.md`.

The PRD establishes the following experience principles:

1. **Literary rather than generic:** Present books as the primary focus.
2. **Clear rather than crowded:** Avoid excessive competing sections and controls.
3. **Curated rather than overwhelming:** Guide readers through useful collections.
4. **Trustworthy rather than promotional:** Use honest product data and restrained discount presentation.
5. **Bilingual by design:** Treat Marathi and English as first-class interface languages.
6. **Mobile-first:** Prioritise comfortable reading, browsing, and purchasing on smaller screens.
7. **Accessible:** Follow WCAG 2.2 AA as the target accessibility standard.
8. **Consistent:** Reuse components, spacing, typography, and interaction patterns.
9. **Transparent:** Explain availability, shipping, returns, and purchase status clearly.

### Specific UX improvements required

- Keep primary navigation compact.
- Place deeper categories within appropriate groups.
- Make search and filters prominent.
- Keep active filters visible and easy to clear.
- Use consistent product card hierarchy.
- Separate original titles, transliteration, and translations.
- Show genuine sale information without allowing it to dominate the interface.
- Surface relevant delivery and return information near purchase decisions.
- Provide clear feedback for cart actions and form submissions.
- Test mobile navigation, accessibility, and checkout usability.

---

## 9. Functional Requirements

Priority levels:

- **P0:** Mandatory for launch.
- **P1:** Important enhancement.
- **P2:** Future consideration.

### Catalogue

- FR-001 (P0): Retrieve published product data from Shopify.
- FR-002 (P0): Display available verified product metadata.
- FR-003 (P0): Support repeatable import of the initial 100–300 books.
- FR-004 (P0): Organise books using appropriate collections and structured metadata.
- FR-005 (P0): Respect Shopify product publication and availability settings.
- FR-006 (P1): Support expansion beyond the initial catalogue.

### Discovery

- FR-007 (P0): Provide product search.
- FR-008 (P0): Provide Marathi and English discovery paths.
- FR-009 (P0): Provide curated collection pages.
- FR-010 (P1): Provide relevant sorting and filters.
- FR-011 (P1): Provide related-book discovery where suitable data exists.
- FR-012 (P0): Keep primary navigation understandable and mobile-friendly.
- FR-013 (P1): Evaluate transliteration, autocomplete, and typo tolerance.

### Bilingual experience

- FR-014 (P0): Provide a Marathi/English language selector.
- FR-015 (P0): Localise core interface elements into both languages.
- FR-016 (P0): Maintain approved translations for required policies.
- FR-017 (P0): Support readable Devanagari rendering and responsive layouts.
- FR-018 (P0): Verify relevant checkout, account, and notification language capabilities.

### Shopping

- FR-019 (P0): Support add-to-cart.
- FR-020 (P0): Support cart quantity changes and removal.
- FR-021 (P0): Transfer the correct products and quantities into Shopify checkout.
- FR-022 (P0): Respect authoritative pricing and inventory constraints.
- FR-023 (P0): Support guest checkout.
- FR-024 (P0): Support optional customer accounts.
- FR-025 (P0): Handle unavailable products and failed checkout operations accurately.
- FR-026 (P0): Support approved Indian delivery destinations.

### Operations

- FR-027 (P0): Make orders available through Shopify for processing.
- FR-028 (P0): Configure and test relevant order notifications.
- FR-029 (P0): Document manual inventory management.
- FR-030 (P0): Define offline stock-update and reconciliation procedures.
- FR-031 (P0): Integrate and test an approved shipping aggregator before launch.
- FR-032 (P0): Configure approved shipping rates and serviceability.
- FR-033 (P0): Test shipment creation and tracking where supported.

### Trust and growth

- FR-034 (P0): Present the approved brand identity consistently.
- FR-035 (P0): Publish accurate customer policies.
- FR-036 (P0): Provide a functioning support contact method.
- FR-037 (P0): Establish an analytics implementation plan.
- FR-038 (P0): Implement appropriate SEO metadata and crawlability.
- FR-039 (P1): Track the agreed customer conversion funnel.
- FR-040 (P1): Support approved newsletter and retention integrations.

---

## 10. Shopify Integration

### 10.1 Commerce source of truth

Shopify will manage online products, pricing, inventory settings, collections, checkout, orders, and relevant fulfilment information through supported functionality.

The storefront must not create a competing source of truth for commerce data.

### 10.2 Preferred integration

Use Shopify's supported Storefront API and checkout mechanisms with a custom storefront.

The exact framework, API version, hosting platform, and server-side responsibilities will be defined in `Architecture.md`.

Requirements:

- Use supported API operations and appropriate access scopes.
- Keep private credentials outside client-side code.
- Handle API failures and rate limits.
- Validate relevant configuration and environment variables.
- Use authoritative commerce data for checkout.
- Avoid unnecessary duplication of customer and order data.

### 10.3 Payments

Select a payment provider supported by Shopify for the configured Indian store.

Razorpay or another eligible provider may be evaluated. No provider is selected until approved and tested.

Payment success must be based on authoritative order and payment state, not merely a button click or return URL.

### 10.4 Shipping aggregator

A shipping aggregator integration is mandatory before production launch.

Requirements:

- Evaluate providers appropriate for Indian book fulfilment.
- Compare serviceability, shipping rates, tracking, pickup, returns, costs, and Shopify compatibility.
- Select and approve a provider.
- Configure rates and applicable delivery regions.
- Test shipment creation and tracking.
- Document failed pickup, delivery exception, and return procedures.
- Provide accurate shipping guidance in both languages.

Shiprocket or another eligible provider may be evaluated. The final selection remains unresolved.

### 10.5 Commercial constraints

Before launch, confirm:

- Shopify plan and recurring charges.
- Payment provider fees and eligibility.
- Shipping integration costs.
- Domain and hosting costs.
- API capabilities and relevant limits.
- Account and checkout constraints.
- Required third-party subscriptions.

The project must not depend on unverified platform capabilities.

---

## 11. Inventory and Product Data

### 11.1 Initial inventory process

The business currently operates without a centralised inventory system.

The initial release will therefore use a controlled manual process with Shopify as the authoritative online inventory record.

Before publishing products:

1. Select the initial titles.
2. Verify product identifiers, titles, and prices.
3. Count the available physical stock.
4. Prepare and validate product metadata.
5. Import or enter products into Shopify.
6. Verify stock quantities.
7. Publish eligible products.
8. Update Shopify after offline sales.
9. Reconcile recorded and physical stock regularly.

### 11.2 Inventory risk

Manual stock management creates a risk of overselling when an offline sale is not reflected online promptly.

The business must assign responsibility for stock updates, define a reconciliation frequency, and document what happens when an ordered book is unavailable.

If the process proves unreliable, evaluate inventory synchronisation or a dedicated inventory solution before materially increasing online sales volume.

### 11.3 Product data model

Recommended fields:

- Stable product identifier or SKU.
- Original book title.
- Display title.
- Optional transliteration.
- Author.
- Language of the book.
- Publisher.
- ISBN, where available.
- Genre and categories.
- Edition or format, where relevant.
- Page count, where available.
- Original description.
- Approved Marathi description.
- Approved English description.
- Product images.
- Selling price.
- Verified stock quantity.
- Publication and availability status.

Not every field will be populated for every title. Required and optional fields will be defined during implementation.

### 11.4 Import requirements

The import workflow should:

- Support repeatable imports from an approved source format.
- Detect missing required fields.
- Identify duplicate identifiers where possible.
- Avoid unintended duplicate products on repeated imports.
- Preserve relevant SKU and variant relationships.
- Report rejected or incomplete records.
- Require stock verification before publication.

The source format and quality of the existing catalogue remain unresolved.

---

## 12. Shipping and Fulfilment Operations

Before launch, the business must establish a fulfilment workflow that covers:

- Order review.
- Stock verification.
- Picking and packing.
- Shipping label or shipment creation.
- Dispatch.
- Tracking updates.
- Failed pickup or delivery.
- Returns and refunds.
- Stock reconciliation.

The chosen aggregator and Shopify configuration must support the approved workflow.

The website must not promise delivery timelines or serviceability that the selected provider cannot support.

---

## 13. User Journeys

### Journey A: Purchase a known book

1. Customer opens a shared link or searches the website.
2. Customer opens the product detail page.
3. Customer reviews the book's details, language, price, and availability.
4. Customer adds the book to the cart.
5. Customer reviews the cart.
6. Customer proceeds to Shopify checkout.
7. Customer checks out as a guest or uses an optional account.
8. Customer enters delivery details and selects an available payment method.
9. Shopify processes the order.
10. SahityaYatra receives the order and fulfils it through the approved shipping workflow.

**Success:** The correct eligible products are ordered, and payment and order states are represented accurately.

### Journey B: Discover Marathi books

1. Customer enters the homepage.
2. Customer selects Marathi Books.
3. Customer browses collections or searches for a title.
4. Customer reviews a product.
5. Customer adds an eligible book to the cart.
6. Customer completes checkout.

**Success:** The customer can discover and purchase a Marathi book without unnecessary navigation.

### Journey C: Discover a book without knowing the title

1. Customer opens All Books or a relevant collection.
2. Customer browses categories, search results, and filters.
3. Customer compares relevant books.
4. Customer reads product information.
5. Customer adds a suitable title to the cart.

**Success:** Discovery works without requiring an exact title.

### Journey D: Switch website language

1. Customer opens the website in either language.
2. Customer selects Marathi or English.
3. The core interface updates appropriately.
4. The selected language remains consistent during navigation.
5. Customer proceeds through product discovery and the supported purchase flow.

**Success:** The selected language is respected throughout the supported journey, with third-party limitations handled transparently.

### Journey E: Handle unavailable stock

1. A product becomes unavailable.
2. The relevant commerce operation identifies the restriction.
3. The customer sees a clear message.
4. The customer cannot knowingly complete an invalid purchase.
5. The customer can continue browsing.

**Success:** The website does not represent an unavailable product as successfully purchased when Shopify prevents the transaction.

### Journey F: Fulfil an online order

1. Staff review the order in Shopify.
2. Staff verify stock and prepare the package.
3. Staff create the shipment using the approved aggregator workflow.
4. Dispatch and tracking information are updated where supported.
5. Stock records are reconciled.

**Success:** The order follows a documented, repeatable process.

---

## 14. Non-Functional Requirements

### Performance

Target Core Web Vitals at the 75th percentile, when sufficient field data exists:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Optimise images, avoid unnecessary JavaScript, and keep core browsing and purchasing interactions responsive.

### Security

- Use HTTPS in production.
- Never expose private credentials in browser code.
- Keep secrets out of Git.
- Validate user inputs and relevant server-side operations.
- Review dependencies.
- Avoid unnecessary customer-data logging.
- Use appropriate authentication and authorisation.
- Review applicable Indian privacy and consumer-protection obligations.

### Accessibility

Target WCAG 2.2 AA.

Include keyboard navigation, visible focus, appropriate contrast, semantic page structure, accessible forms, useful alternative text, and usable bilingual layouts.

### Scalability

Support catalogue growth beyond the initial 100–300 products using suitable pagination or loading strategies.

Catalogue scalability must not be confused with inventory or fulfilment scalability.

### Maintainability

Use understandable modules, reusable components, documented configuration, repeatable installation and deployment procedures, and version-controlled changes.

### SEO

Implement appropriate titles, descriptions, canonical handling, crawlability, sitemap and robots configuration, product structured data where accurate, and social preview metadata.

Bilingual routing and indexing must be defined in the technical architecture.

### Privacy and recovery

Collect only necessary customer data, disclose relevant practices, and configure marketing consent appropriately.

Document source-code recovery and appropriate procedures for business-critical Shopify data. Git alone is not a complete business-data backup strategy.

---

## 15. Analytics and Success Metrics

Measure:

- Qualified sessions.
- Product view rate.
- Search usage and no-result searches.
- Add-to-cart rate.
- Checkout initiation rate.
- Purchase conversion rate.
- Average order value.
- Revenue.
- Cancellation rate.
- Fulfilment error rate.
- Inventory discrepancy rate.
- Customer support burden.

Definitions and reporting denominators must remain consistent.

No current traffic, conversion, revenue, margin, or acquisition-cost baseline has been established in this document.

Set numerical targets only after baseline measurement and review of business economics.

### Launch success criteria

The initial release is operationally successful when:

- Customers can discover and purchase eligible books.
- Guest checkout and optional accounts work as approved.
- Marathi and English are supported across core pages.
- Orders and payment states are represented correctly.
- Shipping and fulfilment procedures work.
- Inventory responsibilities are documented.
- Customer policies and support details are complete.
- Analytics and relevant performance checks are operational.
- No unresolved critical defect prevents reliable purchasing.

Commercial success will be assessed separately using real customer and financial data.

---

## 16. Acceptance Criteria

### Storefront and discovery

- [ ] Homepage works on mobile and desktop.
- [ ] Primary navigation is understandable.
- [ ] Search and relevant collections work.
- [ ] Product cards and detail pages display accurate available information.
- [ ] Filtering and sorting behave correctly where implemented.
- [ ] Loading, empty, error, and unavailable states are handled.
- [ ] No critical broken routes remain.

### Bilingual experience

- [ ] Marathi and English language selection works.
- [ ] Core navigation and customer-facing interfaces are translated.
- [ ] Product titles preserve the published title.
- [ ] Transliteration and translated titles are stored separately where used.
- [ ] Policy translations are reviewed and approved.
- [ ] Devanagari renders correctly on supported devices.
- [ ] Checkout, account, and notification language behaviour is verified.

### Catalogue and inventory

- [ ] Initial catalogue contains 100–300 verified titles, subject to data readiness.
- [ ] Required product fields are validated.
- [ ] Prices and availability match Shopify.
- [ ] Repeat imports do not unintentionally duplicate products.
- [ ] Manual stock-update and reconciliation procedures are documented.

### Cart and checkout

- [ ] Products can be added, updated, and removed.
- [ ] Guest checkout works.
- [ ] Optional account functionality works through the approved implementation.
- [ ] Checkout receives the correct products and quantities.
- [ ] Unavailable products and invalid quantities are handled.
- [ ] Payment success is based on authoritative state.
- [ ] Orders appear correctly in Shopify.

### Shipping and operations

- [ ] A shipping aggregator is selected and configured.
- [ ] Rates and serviceable areas are approved.
- [ ] Shipment creation and tracking are tested where supported.
- [ ] Fulfilment exceptions and returns have documented procedures.
- [ ] Customer notifications work as configured.
- [ ] Policies and support details are accurate.

### Security and launch readiness

- [ ] No private secrets are committed or exposed.
- [ ] HTTPS is enabled.
- [ ] Critical purchase flows pass end-to-end testing.
- [ ] Accessibility checks are completed.
- [ ] Critical errors are resolved.
- [ ] Analytics and relevant SEO checks are completed.
- [ ] Deployment and recovery procedures are documented.
- [ ] The business explicitly approves production readiness.

---

## 17. Risks

### Inventory mismatch

**Risk:** Offline sales reduce stock still listed online.

**Mitigation:** Verify initial stock, assign responsibility for updates, reconcile regularly, and evaluate synchronisation when justified.

### Inconsistent product data

**Risk:** Mixed-script titles and incomplete metadata reduce search quality and trust.

**Mitigation:** Establish structured fields and a repeatable data-cleaning and import process.

### Excessive navigation complexity

**Risk:** Too many categories overwhelm customers.

**Mitigation:** Launch with a focused information architecture and expand based on catalogue and usage data.

### Weak bilingual consistency

**Risk:** Incomplete translations make the website feel inconsistent.

**Mitigation:** Maintain an approved translation workflow and test all core customer journeys in both languages.

### Shipping costs and serviceability

**Risk:** Delivery charges or unsupported destinations make orders impractical.

**Mitigation:** Evaluate aggregators, configure realistic rates, and verify serviceability before launch.

### Technical complexity

**Risk:** A custom storefront becomes unnecessarily expensive to maintain.

**Mitigation:** Prefer supported Shopify capabilities and introduce custom functionality only when justified.

### Unproven commercial demand

**Risk:** Website traffic fails to produce profitable orders.

**Mitigation:** Measure real behaviour, evaluate acquisition costs and contribution margin, and iterate using evidence.

---

## 18. Dependencies and Unresolved Decisions

### Confirmed decisions

| Decision | Approved direction |
|---|---|
| Initial catalogue | 100–300 books |
| Launch market | India |
| Commerce backend | Shopify |
| Development environment | Google Antigravity |
| Customer accounts | Guest checkout plus optional accounts |
| Website language | Fully bilingual Marathi and English |
| Language presentation | Selective paired headings plus a language selector |
| Shipping | Aggregator integration required before launch |
| Inventory | Manual process initially, with Shopify as the online inventory record |
| Reference website | Akshardhara, for research and usability insights only |

### Unresolved decisions

| ID | Decision |
|---|---|
| UD-01 | Frontend framework and rendering strategy |
| UD-02 | Shopify plan and total operating budget |
| UD-03 | Domain name and registrar |
| UD-04 | Payment provider |
| UD-05 | Shipping aggregator and commercial terms |
| UD-06 | Return, refund, and cancellation policy |
| UD-07 | Exact customer-account implementation |
| UD-08 | Source format and quality of product data |
| UD-09 | Stock reconciliation owner and frequency |
| UD-10 | Analytics provider and consent configuration |
| UD-11 | Email or WhatsApp marketing integrations |
| UD-12 | Customer support hours and response expectations |
| UD-13 | Delivery estimates and serviceable areas |
| UD-14 | Numerical growth and profitability targets |
| UD-15 | Final primary navigation and initial collection list |
| UD-16 | Final brand colour, typography, and component specifications |

Unresolved decisions must not be silently treated as established facts.

---

## 19. Implementation Roadmap

The detailed sequence will be maintained in `Phases.md`.

### Phase A: Foundation

- Approve project documentation.
- Establish the development environment and Git workflow.
- Finalise architecture and design principles.
- Prepare the initial product data.

### Phase B: Storefront

- Build navigation and bilingual infrastructure.
- Implement homepage, shop, collections, search, and product detail pages.
- Implement cart and Shopify checkout.
- Build customer accounts, informational pages, and policies.

### Phase C: Commerce and operations

- Configure payment processing.
- Integrate the shipping aggregator.
- Establish manual inventory operations.
- Test order creation, shipment handling, and customer notifications.

### Phase D: Quality assurance and launch

- Test mobile and desktop behaviour.
- Validate both language journeys.
- Complete security, accessibility, and performance checks.
- Configure analytics and deployment.
- Obtain business approval.

### Phase E: Growth

- Expand the catalogue.
- Improve discovery based on analytics.
- Evaluate inventory synchronisation.
- Introduce approved retention and recommendation features.
- Consider broader markets only after operational review.

---

## 20. Definition of Done

A feature is complete only when:

1. It satisfies the relevant requirements.
2. It follows the approved architecture and development rules.
3. It works with appropriate real or test data.
4. Its loading, empty, error, and success states are handled.
5. It works at relevant mobile and desktop sizes.
6. Security and accessibility requirements have been considered.
7. Relevant tests pass.
8. Critical defects are resolved.
9. Necessary documentation is updated.
10. The change has been reviewed.

The website is launch-ready only when the P0 acceptance criteria are met and SahityaYatra explicitly approves production readiness.

---

## 21. Document Governance

This PRD defines the approved product scope and requirements.

Related documents:

- `Architecture.md` — Technical architecture and integration design.
- `Rules.md` — Development constraints and working practices.
- `Phases.md` — Implementation sequence and phase acceptance criteria.
- `Design.md` — Visual identity, typography, layouts, and interaction specifications.
- `Memory.md` — Decisions, progress, issues, and current project state.

The PRD takes precedence for product requirements. The other documents must remain consistent with it.

Changes must be deliberate, reviewed, and reflected in all affected documents.

**Status:** Approved  
**Version:** 1.0  
**Approval date:** 14 October 2026
