let num1 = 8;
let num2 = 2;

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + num1 * num2);
console.log("Division: " + num1 / num2);

// assignment operators
let x = 10;
x += 5;
console.log("x is now: " + x);
x -= 3;
console.log("x is now: " + x);
x *= 2;

// Compare values using comparison operators and combine conditions using logical
// operators.

let a = 5;
let b = 10;
let c = "5";

console.log("a == c:", a == c); // true, double equals doesn't check data type
console.log("a === c:", a === c); // false, triple equals checks data type
console.log("a != b:", a != b); // true, not equal value
console.log("a !== c:", a !== c); // true, not equal value or data type
console.log("a < b:", a < b); // true, less than
console.log("a >= b:", a >= b); // false, greater than or equal to
console.log("a < b && b > a: ", a < b && b > a); // true, both conditions are true
console.log("a > b || b > a:", a > b || b > a); // true, at least one condition is true
console.log("!(a > b):", !(a > b)); // true, not greater than
