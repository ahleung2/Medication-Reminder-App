// store reference into constant variable
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-btn");
const userError = document.getElementById("userError");
const passwordError = document.getElementById("passwordError");


loginButton.onclick = async function test() {
    const data = {
        email: email.value, 
        password: password.value,
    };

    // input validation
    if(!username.value) {
        // return error message
        userError.innerHTML = "Please fill in field!"
    } else if (!password.value) {
        // input username by no password
        passwordError.innerHTML = "Please fill in field!"
    } else {
        let userData = await fetch("/sign-in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }
}
