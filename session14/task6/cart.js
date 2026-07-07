import { formatPrice, getDiscountedPrice } from "./utils.js";

const items = [
    { name: "Laptop", price: 50000, discount: 10 },
    { name: "Headphones", price: 2000, discount: 20 },
    { name: "Smart Watch", price: 5000, discount: 15 }
];

items.forEach(item => {
    console.log("Item:", item.name);
    console.log("Original Price:", formatPrice(item.price));
    console.log(
        "Discounted Price:",
        formatPrice(getDiscountedPrice(item.price, item.discount))
    );
    console.log("----------------------");
});