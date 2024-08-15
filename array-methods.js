// console.log("array");

// const students = ["Sagar", "Jagdish", "Sunita", "Anil"];
const students = new Array("Sagar", "Jagdish", "Sunita", "Anil");

students[2] = "Radha";
// students[6] = "Prakash";
console.log(students);

// Array Mthods:

// 1. length
console.log("Length of students: " + students.length);

// 2. toString()
console.log("ArrAY toString: " + students.toString());

// 3 join()
console.log("Array join: " + students.join("-"));

// 4. pop()
console.log("Array pop: " + students.pop());

console.log("Array after pop():" + students);
console.log(students);

// 5. push()
students.push("Radhika");
console.log("Array push: " + students.push("Darpan"));
console.log("Array after push(): " + students);

// 6. shift()
console.log("Shift: " + students.shift());
console.log(students);

// 7. unShift()
console.log("unShift: " + students.unshift("Mohan"));
console.log(students);

//8. indexOf() - searches the index of the element in the array
const persons = ["Ram", "Shyam", "Sita", "Gita"];
const person = "Ram";

// console.log("Index: ", persons.indexOf(person));
const index = persons.indexOf(person);

if (index >= 0) {
  console.log("Person is found:", persons[index]);
} else {
  console.log("Person is not found!");
}

// delete Ram from persons array:
persons.splice(index, 1);
console.log(persons);

// 9. splice()
const childrens = ["John", "Harry", "Bhim", "Tommy", "Gopal"];
console.log(childrens);

// childrens.splice(0, 2);
console.log(childrens.splice(0, 2));

childrens.splice(0, 0, "Rakesh");
childrens.splice(0, 3, "Rakesh", "Pratik");

console.log(childrens);

// 10. slice()
console.log(childrens.slice());
// console.log(childrens.slice(0, 1));
console.log(childrens.slice(0, -1));
console.log(childrens);
