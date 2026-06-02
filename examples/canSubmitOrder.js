/**
 * This function checks whether a customer can submit an order.
 * It is a simplified business logic example for an e-commerce MVP system.
 *
 * Main checks:
 * 1. The product must be on sale.
 * 2. The selected SKU must have available inventory.
 * 3. The purchase quantity must not exceed the available SKU stock.
 */

function canSubmitOrder(productStatus, skuStock, buyCount) {
  if (productStatus !== 'ON_SALE') {
    return {
      canSubmit: false,
      reason: 'Product is off sale'
    };
  }

  if (skuStock <= 0) {
    return {
      canSubmit: false,
      reason: 'Insufficient inventory'
    };
  }

  if (buyCount > skuStock) {
    return {
      canSubmit: false,
      reason: 'Purchase quantity exceeds available inventory'
    };
  }

  return {
    canSubmit: true,
    reason: ''
  };
}

// Example test cases
console.log(canSubmitOrder('ON_SALE', 3, 5));
// Expected:
// {
//   canSubmit: false,
//   reason: 'Purchase quantity exceeds available inventory'
// }

console.log(canSubmitOrder('ON_SALE', 10, 2));
// Expected:
// {
//   canSubmit: true,
//   reason: ''
// }

console.log(canSubmitOrder('OFF_SALE', 10, 1));
// Expected:
// {
//   canSubmit: false,
//   reason: 'Product is off sale'
// }

module.exports = canSubmitOrder;
