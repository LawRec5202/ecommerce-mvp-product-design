# E-commerce System MVP Design and Technical Understanding

This repository contains my Product Manager assignment for an e-commerce system MVP design and basic technical understanding.

The assignment focuses on designing a basic e-commerce system from scratch and explaining the core product logic, business processes, API understanding, order status lifecycle, exception analysis, and data metrics.

The core transaction flow of the MVP system is:

Browse Products → Add to Cart / Buy Now → Submit Order → Pay → Ship → Complete Order

## Repository Structure

```text
ecommerce-mvp-product-design/
├── docs/
│   ├── Final-Version-Chinese.pdf
│   ├── Final-Version-English.pdf
│   ├── Appendix-Detailed-Version-Chinese.pdf
│   └── Appendix-Detailed-Version-English.pdf
├── examples/
│   ├── product-detail-response.json
│   ├── canSubmitOrder.js
│   ├── order-status-flow.md
│   └── core-metrics.md
└── README.md
```

## Documents

### Final Versions

* `docs/Final-Version-Chinese.pdf`
  Final submitted Chinese version of the product design document.

* `docs/Final-Version-English.pdf`
  Final submitted English version of the product design document.

### Appendix Versions

* `docs/Appendix-Detailed-Version-Chinese.pdf`
  Detailed Chinese appendix version, including extended explanations, diagrams, process design, API understanding, order status design, bug analysis, and metrics design.

* `docs/Appendix-Detailed-Version-English.pdf`
  Detailed English appendix version, provided as supplementary material for additional reference.

## Code and Technical Understanding Examples

The assignment does not require a complete production-ready e-commerce application.
The code and example files in this repository are provided to demonstrate basic technical understanding from a Product Manager perspective.

### `examples/product-detail-response.json`

This file provides an example API response for a product detail page.

It includes fields such as:

* product ID
* product name
* product status
* price and original price
* stock
* sales count
* product images
* SKU list

This example is used to demonstrate understanding of API fields, price unit conversion, product status, inventory, and SKU relationships.

### `examples/canSubmitOrder.js`

This file contains a simplified JavaScript function for checking whether a customer can submit an order.

The logic checks:

1. Whether the product is on sale.
2. Whether the selected SKU has available inventory.
3. Whether the purchase quantity exceeds available stock.

This demonstrates basic understanding of how business rules can be translated into simple conditional logic.

### `examples/order-status-flow.md`

This file explains the basic order status lifecycle of the e-commerce MVP system.

It covers:

* pending payment
* paid
* shipped
* completed
* cancelled
* refunding
* refunded

It also describes normal order flow, cancellation flow, and refund flow.

### `examples/core-metrics.md`

This file lists the key metrics that should be monitored after the e-commerce MVP is launched.

The metrics include:

* product detail page views
* add-to-cart rate
* order conversion rate
* payment success rate
* GMV
* order completion rate
* cancellation rate
* refund rate

These metrics help evaluate whether the core transaction flow works effectively.

## Main Topics Covered

1. User roles and core scenarios
2. MVP feature list and priority
3. Core process design
4. Simplified PRD
5. API understanding
6. Basic code logic understanding
7. Order status transition
8. Bug and exception analysis
9. Data metrics design
10. Future iteration direction

## Project Scope

This repository is not intended to be a complete e-commerce development project.

It is a Product Manager assignment focused on:

* MVP product design
* user role analysis
* feature prioritization
* business process design
* simplified PRD writing
* API field interpretation
* basic business logic understanding
* order status lifecycle design
* exception and bug analysis
* data metrics design

## Note

The final versions are the main submission documents.
The appendix versions are supplementary materials that provide more detailed explanations and supporting analysis.

The example code files are included only to demonstrate basic technical awareness and business logic understanding. They are not intended to represent a full backend or frontend implementation.
