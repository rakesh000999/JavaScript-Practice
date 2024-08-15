const students = {
  firstName: "Rakesh",
  lastName: "Joshi",
  age: 29,
};
console.log(students);

// Access student key
console.log(students.firstName);
console.log(students["firstName"]);

// Student lastName
console.log(students.lastName);
// Student age
console.log(students.age);

//Add new property - fullName
// students.fullName = students.firstName + " " + students.lastName;
students.fullName = `${students.firstName}  ${students.lastName}`;
console.log(students);

// Modify last name
students.firstName = "Rahul";
console.log(students);

// Delete student key
delete students.age;
console.log(students);

const teacher = {
  firstName: "Ram",
  lastName: "Sharma",
  fullName: function () {
    const detail = `FullName of teacher is : ${this.firstName} ${this.lastName}`;
    console.log(detail);
  },
};

console.log(teacher);
console.log(teacher.fullName());
