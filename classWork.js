// ## WAP to check if a number is palindrome or not
const n = 232;
// const c = n.toString();

let number = 121;
let temp = number;
let r = 0;
let palin = 0;

while (number != 0) {
  r = number % 10;
  palin = palin * 10 + r;
  number = Math.floor(number / 10);
}

if (temp === palin) {
  console.log("Plindrome");
} else {
  console.log("Not Palindrome");
}

// ## WAP to find the reverse of a number
number = 1261;
temp = number;
r = 0;
palin = 0;

while (number != 0) {
  r = number % 10;
  palin = palin * 10 + r;
  number = Math.floor(number / 10);
}
console.log("The reverse of " + temp + " is : " + palin);

// WAP to find the reverse of a string
const name = "Rakesh";
let index = name.length - 1;
let rev = "";
while (index >= 0) {
  rev += name[index];
  index--;
}
console.log("Reverse is: ", rev);

// ## WAP to calculate the sum of digits of a number
num1 = 1241;
let sum = 0;
r = 0;
while (num1 > 0) {
  r = num1 % 10;
  sum += r;
  num1 = Math.floor(num1 / 10);
}
console.log("Sum: " + sum);

// ## WAP to count the number of digits in a number
let num2 = 12134212;
let count = 0;
r = 0;
while (num2 > 0) {
  num2 = Math.floor(num2 / 10);
  count++;
}
console.log("The number of digit/s in a number is/are: ", count);

// ## WAP to check if a number is Armstrong for three digit numbers

// let armNo = 13;

// let armString = armNo.toString();
// let power = armString.length;
// const armstrong =
//   armString[0] ** power + armString[1] ** power + armString[2] ** power;
// console.log(armstrong);

let armNo = 153;
let checkArm = 0;
temp = armNo;

while (armNo > 0) {
  rem = armNo % 10;
  checkArm = checkArm + rem ** 3;
  armNo = Math.floor(armNo / 10);
}
if (checkArm === temp) {
  console.log(`${temp} is an armstrong number.`);
} else {
  console.log(`${temp} is not an armstrong number.`);
}

// ## WAP to find the factorial of a number
function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
const factorial = fact(5);
console.log("The factorial is: ", factorial);
