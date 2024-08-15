const numbers = [1, 2, 3, 4];

// map()
const mapSq = numbers.map((number) => {
  return number * number;
});
console.log(mapSq);

// filter()
const numGreater = numbers.filter((number) => {
  return number > 2;
});
console.log(numGreater);

// reduce()
const sum = numbers.reduce((a, c) => {
  return (c += a);
}, 0);
console.log(sum);

// find()
const findMethod = numbers.find((number) => {
  return number > 2;
});
console.log(findMethod);

// findIndex()
const findIndexMethod = numbers.findIndex((number) => {
  return number === 3;
});
console.log("Index is: " + findIndexMethod);

// some()
const someMethod = numbers.some((number) => {
  return number > 3;
});
console.log(someMethod);

// every()
const everyMethod = numbers.every((number) => {
  return number > 0;
});
console.log(everyMethod);
