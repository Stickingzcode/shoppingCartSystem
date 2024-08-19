
let items = [

    {name: "wristWatch", price: 250, quantity: 5},
    {name: "shoes", price: 100, quantity: 6},
    {name: "laptop", price: 50, quantity: 4}

]

// subtotal = sum of price of each item * its quantity

let subTotal = 0;
function calculateSubTotal(cartItems){
    items.forEach(item => {
        subTotal += item.price * item.quantity
    })
    return subTotal;
}
console.log("subTotal = ",calculateSubTotal(items));

// discount = on the total items bought.
let percentageDiscount = 0.05;
let discountedTotal;
function applyDiscount(subTotal, percentageDiscount){
    let discount = subTotal * percentageDiscount;
    discountedTotal = subTotal - discount;
    return discountedTotal;
}
console.log("discounted total = ",applyDiscount(subTotal, percentageDiscount));

// calculate tax = on total items bought.
let taxRate = 0.07;
let totalAfterTax;
function calculateTax(discountedTotal, taxRate){
    let tax = discountedTotal * taxRate;
    totalAfterTax = discountedTotal + tax;
    return totalAfterTax;
}
console.log("total after tax = ",calculateTax(discountedTotal, taxRate));

// calculate Total

function calculateTotal(items, percentageDiscount, taxRate){
    const subOfTotal = calculateSubTotal(items);
    const appliedDiscount = applyDiscount(subOfTotal, percentageDiscount);
    const afterTaxTotal = calculateTax(appliedDiscount, taxRate);
    return afterTaxTotal;
}
console.log("total = " ,calculateTotal(items, percentageDiscount, taxRate));
