const submit = document.getElementById("submitBtn");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  validateFName();
  validateLName();
  validateEmail();
  validatePassword();
});

const validateFName = () => {
  const error = fName.nextElementSibling;
  if (fName.value == "") {
    fName.setCustomValidity("Invalid field");
    fName.placeholder = "";
    error.textContent = "First Name cannot be empty";
  } else {
    fName.setCustomValidity("");
    error.textContent = "";
  }
};

const validateLName = () => {
  const error = lName.nextElementSibling;
  if (lName.value == "") {
    lName.setCustomValidity("Invalid field");
    lName.placeholder = "";
    error.textContent = "Last Name cannot be empty";
  } else {
    lName.setCustomValidity("");
    error.textContent = "";
  }
};

const validateEmail = () => {
  const error = email.nextElementSibling;
  if (email.value == "" || email.validity.typeMismatch) {
    email.setCustomValidity("Invalid field");
    email.placeholder = "";
    error.textContent = "Looks like this is not an email";
  } else {
    email.setCustomValidity("");
    error.textContent = "";
  }
};

const validatePassword = () => {
  const error = password.nextElementSibling;
  if (password.value == "") {
    password.setCustomValidity("Invalid field");
    password.placeholder = "";
    error.textContent = "Password cannot be empty";
  } else {
    password.setCustomValidity("");
    error.textContent = "";
  }
};
