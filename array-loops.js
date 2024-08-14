let studentss = ["Rakesh", "Ram", "Radhika", "Nishu"];

console.log("Hi: " + studentss[0]);
for (let i = 0; i < studentss.length; i++) {
  console.log("Hi: " + studentss[i]);
}

for (let student of studentss) {
  console.log("Hello, ", student);
}
