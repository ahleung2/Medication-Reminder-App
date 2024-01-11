// -- No longer require --> updated to registerLogin.js
// store reference into constant variable
const email = document.getElementById("email");
const password = document.getElementById("password");
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const registerButton = document.getElementById("register-btn");
const userError = document.getElementById("userError");
const passwordError = document.getElementById("passwordError");

registerButton.onclick = async function test() {
  const data = {
    firstName: userFirstName.value,
    lastName: userLastName.value,
    email: email.value,
    password: password.value,
  };

  console.log(firstName, userFirstName.value);
  // input validation
  if (!username.value) {
    // return error message
    userError.innerHTML = "Please fill in field!";
  } else if (!password.value) {
    // input username by no password
    passwordError.innerHTML = "Please fill in field!";
  } else {
    let userData = await fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};
