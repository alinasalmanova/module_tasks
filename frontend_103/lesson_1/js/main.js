console.log("Welcome to main page");
const name = "Alina";
let city = "Almaty";
console.log(name,city);
alert("Hello to main page!");
const fruits = ["яблоко", "банан"];
fruits.push("апельсин");
fruits.unshift("груша");
console.log(fruits);
fruits.pop();
fruits.shift();
console.log(fruits);
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
const uppercased = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercased);
const filtered = fruits.filter(fruit => fruit.startsWith("б"));
console.log(filtered);
function greet(name) {
    return "Привет, " + name + "!";
}
console.log(greet("Alina"));

const greet2 = (name) => "Привет, " + name + "!";
console.log(greet2("Alinchik"));