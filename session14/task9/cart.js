import getDiscountedPrice, { formatPrice } from "./utils.js";

const price = 1000;
const discount = 20;

const finalPrice = getDiscountedPrice(price, discount);

console.log("Original Price:", formatPrice(price));
console.log("Discounted Price:", formatPrice(finalPrice));