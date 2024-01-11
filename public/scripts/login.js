function login() {
  const signinButton = document.getElementById("login-btn");

  function handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // user = Login data
    const user = {
      email: email,
      password: password,
    };

    return user;
  }

  signinButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = handleLogin();

    try {
      const res = await fetch("/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        alert("You have successfully signed in!");
        // redirect to sign-in screen
        window.location.href = "./dashboard.html";
      } else {
        alert("Wrong credentials. Please try again!");
      }
      //   if (res.ok) {
      //     alert("You have successfully signed in!");
      //     // Redirect to the sign-in screen
      //     // window.location.href = "./sign-in.html";
      //   } else if (res.status === 401) {
      //     alert("Unauthorized: Wrong credentials. Please try again!");
      //   } else if (res.status === 403) {
      //     alert("Forbidden: Access denied!");
      //   } else {
      //     alert(`Error: ${res.statusText}`);
      //   }
    } catch (err) {
      console.log(err.message);
    }
    // console.log(data);
  });

}

login()
