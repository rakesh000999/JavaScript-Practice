// 1. Declaring variables with different data types

// String
let greeting = "Hello, Rakesh!";
console.log("String:", greeting);

// Number
let age = 20;
console.log("Number:", age);

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// Object
let person = {
  name: "John",
  age: 20,
  isStudent: true,
};
console.log("Object:", person);

// 3. Performing type conversions
let numString = "123";
let num = Number(numString); // Converts string to number
console.log("Converted Number:", num);

let boolString = "true";
let bool = Boolean(boolString); // Converts string to boolean
console.log("Converted Boolean:", bool);

let numValue = 486;
let str = String(numValue); // Converts number to string
console.log("Converted String:", str);

// 2. Experimenting with variable scoping

let num1 = 23; // global variable
function sum() {
  let num2 = 21; // local variable

  console.log(num1 + num2);
}
sum();
console.log(num2);
