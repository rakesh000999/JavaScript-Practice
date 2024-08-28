let isValid = false;

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const isbn = document.querySelector("#isbn");
const quantity = document.querySelector("#quantity");
const rate = document.querySelector("#rate");
const total = document.querySelector("#total");
const country = document.querySelector("#country");

firstName.addEventListener("input", function (e) {
  const firstNameError = document.querySelector(".firstNameError");
  const namePattern = /^[A-Za-z]+$/;
  if (firstName.value == "" || firstName.value.trim() == "") {
    firstNameError.textContent = "First name is required!";
  } else if (firstName.value.length > 20 || firstName.value.length < 2) {
    firstNameError.textContent =
      "First name must be greater then 2 characters and less than 20 characters!";
  } else if (!firstName.value.match(namePattern)) {
    firstNameError.textContent = "First name must be characters.";
  } else {
    firstNameError.textContent = "";
    isValid = true;
  }
});

lastName.addEventListener("input", function (e) {
  const lastNameError = document.querySelector(".lastNameError");
  const lastNamePattern = /^[A-Za-z]+$/;

  if (lastName.value == "" || lastName.value.trim() == "") {
    lastNameError.textContent = "Last name is required!";
  } else if (lastName.value.length > 20 || lastName.value.length < 2) {
    lastNameError.textContent =
      "Last name must be greater the 2 characters and less than 20 characters!";
  } else if (!lastName.value.match(lastNamePattern)) {
    lastNameError.textContent = "Last name must be character!";
  } else {
    lastNameError.textContent = "";
    isValid = true;
  }
});

email.addEventListener("input", function () {
  const emailError = document.querySelector(".emailError");
  const emailPattern = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  if (email.value == "" || email.value.trim() == "") {
    emailError.textContent = "Last name is required!";
  } else if (email.value.length > 20 || email.value.length < 2) {
    emailError.textContent =
      "Email name must be greater the 2 characters and less than 20 characters!";
  } else if (!email.value.match(emailPattern)) {
    emailError.textContent = "Email name must be in proper format!";
  } else {
    emailError.textContent = "";
    isValid = true;
  }
});

isbn.addEventListener("input", function (e) {
  const isbnError = document.querySelector(".isbnError");

  if (isbn.value == "" || isbn.value.trim() == "") {
    isbnError.textContent = "ISBN  is required!";
  } else {
    isbnError.textContent = "";
    isValid = true;
  }
});

quantity.addEventListener("input", function () {
  let quantityValue = quantity.value;
  const quantityError = document.querySelector(".quantityError");

  if (quantityValue == "") {
    quantityError.textContent = "Please enter the quantity!";
  } else {
    quantityError.textContent = "";
    total.value = quantityValue * rate.value;
  }
});

rate.addEventListener("input", function () {
  let rateValue = rate.value;
  const rateError = document.querySelector(".rateError");

  if (rateValue == "") {
    rateError.textContent = "Please enter the rate!";
  } else {
    rateError.textContent = "";
    total.value = rateValue * rate.value;
  }
});

document.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isValid) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Please fill the required fields!");
  }
});

// phone nunber validation
// const phonePattern = /^([0-9]{10})$/;
