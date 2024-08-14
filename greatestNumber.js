// WAP to find the greatest number between two numbers
const num1 = 55;
const num2 = 443;
const num3 = 23;

if (num1 > num2) {
  console.log(num1 + " is greater number");
} else {
  console.log(num2 + " is greater number");
}

// wap to find if the given number is positive, negative or zero
if (num1 > 0) {
  console.log(num1 + " is positive.");
} else if (num1 < 0) {
  console.log(num1 + " is negative.");
} else {
  console.log(num1 + " is zero.");
}

// wap to find the lowest and highest number between three numbers

// if (num1 > num2 && num1 > num3) {
//   console.log(num1 + " is greatest number.");

//   if (num2 > num3) {
//     console.log(num3 + " is lowest number.");
//   } else {
//     console.log(num2 + " is lowest number.");
//   }
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2 + " is gretest number");

//   if (num1 > num3) {
//     console.log(num3 + " is lowest number.");
//   } else {
//     console.log(num1 + " is lowest number.");
//   }
// } else {
//   console.log(num3 + " is greatest number.");

//   if (num1 > num2) {
//     console.log(num2 + " is lowest number.");
//   } else {
//     console.log(num1 + " is lowest number.");
//   }
// }

let highest = num1;
let lowest = num1;

if (num2 > highest) {
  highest = num2;
}
if (num3 > highest) {
  highest = num3;
}
if (num2 < lowest) {
  lowest = num2;
}
if (num3 < lowest) {
  lowest = num3;
}

console.log("Highest no " + highest);
console.log("Lowest no " + lowest);

// wap  to check whether a number is divisible by 5
if (num1 % 5 === 0) {
  console.log(num1 + " is divisible by 5.");
} else {
  console.log(num1 + " is not divisible by 5.");
}

// wap  to check whether a number is divisible by 5 and 11 or not.
if (num1 % 5 === 0 && num1 % 11 === 0) {
  console.log(num1 + " is divisible by 5 and 11.");
} else {
  console.log(num1 + " is not divisible by 5 and 11.");
}

// wap  to check whether a number odd or even.
if (num2 % 2 === 0) {
  console.log(num2 + " is even.");
} else {
  console.log(num2 + " is odd.");
}

/**
 * Wap  to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, calcualte percentage and grade according to given conditions:
 *
 * If percentage >= 90% : Grade A
 * If percentage >= 80% : Grade B
 * If percentage >= 70% : Grade C
 * If percentage >= 60% : Grade D
 * If percentage >= 40% : Grade E
 * If percentage < 40% : Grade F
 */

const physics = 88;
const chemistry = 89;
const biology = 87;
const mathematics = 78;
const computer = 98;

const fullMarks = 500;

const totalMarks = physics + biology + mathematics + computer;
const percentage = (totalMarks / fullMarks) * 100;

console.log("Percentage:" + percentage);

if (percentage >= 90) {
  console.log("Grade A");
} else if (percentage >= 80) {
  console.log("Grade B");
} else if (percentage >= 70) {
  console.log("Grade C");
} else if (percentage >= 60) {
  console.log("Grade D");
} else if (percentage >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}
