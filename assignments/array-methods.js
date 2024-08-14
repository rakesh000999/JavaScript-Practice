//  1. How would you find the index of the number 5 in the array [1,3,5,7,9]

const numbers = [1, 3, 5, 7, 9];

const index = numbers.indexOf(5);
console.log("Index: ", index);

//  * 2. WAP to find the even numbers from an array.

const numbersArray = [1, 2, 3, 4, 4, 5, 66, , 6, 77, 44, 8, 9, 54];

console.log("The even numbers are:");
for (number of numbersArray) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

//  3. How would you find the maximum value in an array of numbers.
let max = numbersArray[0];
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > max) {
    max = numbersArray[i];
  }
}

console.log("The maximun number in the array is: ", max);
