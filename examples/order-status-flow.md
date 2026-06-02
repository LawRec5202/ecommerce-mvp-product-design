# Order Status Flow

This file describes the basic order status transition design for the e-commerce MVP system.

## Status Definitions

| Status | Meaning | Description |
|---|---|---|
| PENDING_PAYMENT | Pending Payment | The order has been created, but the customer has not paid yet. |
| PAID | Paid | The customer has successfully completed the payment. |
| SHIPPED | Shipped | The merchant has shipped the order. |
| COMPLETED | Completed | The customer has received the product, or the system has automatically completed the order. |
| CANCELLED | Cancelled | The order has been cancelled before payment or due to payment timeout. |
| REFUNDING | Refunding | The customer has requested a refund, and the refund is being processed. |
| REFUNDED | Refunded | The refund has been completed. |

## Normal Order Flow

PENDING_PAYMENT → PAID → SHIPPED → COMPLETED

## Cancellation Flow

PENDING_PAYMENT → CANCELLED

This happens when:

- The customer cancels the order before payment.
- The customer does not pay within the payment time limit.
- The system cancels an abnormal unpaid order.

## Refund Flow

PAID → REFUNDING → REFUNDED

SHIPPED → REFUNDING → REFUNDED

COMPLETED → REFUNDING → REFUNDED

Refund availability depends on the refund policy, order status, shipment status, and after-sales rules.

## Product Manager Notes

The order status design should make the transaction process clear, traceable, and controllable.

The backend order status should be treated as the final source of truth. The frontend should display order status based on backend data, especially for payment, shipment, cancellation, and refund scenarios.
