// Objective: Understand how to control the flow of execution using control statements.

// 1. Write if statements to perform conditional branching based on a given condition.

console.log("Conditional brancing:");

let number = 10;
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Implement a switch statement to handle different cases.
console.log("Switch statement:");

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
    break;
}

// 3. Use loop statements (for, while, do-while) to iterate over arrays or perform repeated
// actions.

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to " + n + " is: " + sum);

console.log("while");

let array = [1, 2, 3, 4, 5];
let i = 0;
while (i < array.length) {
  console.log(array[i]) * 2;
  i++;
}

console.log("do..while");

let j = 0;
do {
  console.log(array[j]) * 3;
  j++;
} while (j < array.length);
