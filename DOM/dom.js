const studentName = document.getElementById("student-name");
studentName.textContent = "Bikash ";
// studentName.style.backgroundColor = "#0F0";
// studentName.style.fontSize = "20px";

studentName.style = {
  padding: "20px",
  backgroundColor: "red",
};

Object.assign(studentName.style, {
  padding: "30px",
  backgroundColor: "lightblue",
  color: "white",
  fontWeight: "bold",
});

// get the button
const button = document.getElementById("myButton");

// Add the event listener too the button  - click
button.addEventListener("click", function () {
  studentName.style.backgroundColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
});

// button.addEventListener("click", function () {
//   studentName.style.backgroundColor = `${rgb}`+
//     ${Math.floor(Math.random() * 256)}
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256)
//   )}`;
// });

const newElement = document.createElement("span");
newElement.textContent = "I'm a student";
newElement.style.display = "block";
newElement.style.fontSize = "12px";
document.body.appendChild(newElement);

// append newElement to the stydentName
studentName.appendChild(newElement);

// remove the newElement from DOM
// studentName.remove();

document.addEventListener("keypress", function (e) {
  if (e.key == "f" || e.key == "F") {
    studentName.style.height = "100vh";
  }
});

document.addEventListener("keydown", function (e) {
  console.log("Key down: ", e.key);
  if (e.key == "Escape") {
    studentName.style.height = "auto";
  }
});

document.addEventListener("keyup", function (e) {
  console.log("Key up: ", e.key);
});

// mouseup, mousedown, mouseenter. mouseleave, ... 

button.addEventListener("mouseenter", function () {
  button.style.backgroundColor = "red";
});
