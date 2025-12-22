function isBigEnough(value) {
  return value >= 40;
};

const products = [
    { name: "Яблоко", price: 50 },
    { name: "Банан", price: 30 },
    { name: "Апельсин", price: 70 },
];

const increased = products.map(fruit => fruit.price * 1.1);
const expensiveProducts = products.filter(product => product.price > 40);

console.log(expensiveProducts);
console.log(increased);
console.log(Object.keys(products));
console.log(Object.values(products));
console.log(Object.entries(products));