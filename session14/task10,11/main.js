import {
    addToCart,
    removeFromCart,
    calculateTotal
} from "./cartUtils.js";

addToCart("Laptop");

removeFromCart("Headphones");

const total = calculateTotal(50000, 2000);

console.log("Total Price: ₹" + total);