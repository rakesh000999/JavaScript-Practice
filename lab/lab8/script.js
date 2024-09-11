// Objective: Learn how to define and use functions in JavaScript.

console.log("Simple Function:");

function sum(num1, num2) {
  return num1 + num2;
}
console.log("The sum is:", sum(5, 31));

// 2. Implement an anonymous function and assign it to a variable.
console.log("Anonymous function result:");

const multiply = function (num1, num2) {
  return num1 * num2;
};
console.log("The product is:", multiply(4, 8));

// 3. Explore arrow functions and their concise syntax.
console.log("Arrow function result:");
const divide = (num1, num2) => num1 / num2;
console.log("The quotient is:", divide(15, 3));
