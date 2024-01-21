function Register() {
  const userFirstname = document.getElementById("firstname");
  const userLastname = document.getElementById("lastname");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");
  const regBtn = document.getElementById("registerBtn");

  regBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let data = {
      firstname: userFirstname.value,
      lastname: userLastname.value,
      email: userEmail.value,
      password: userPassword.value,
    };

    const headers = new Headers({ "Content-Type": "application/json" });

    const opts = {
      method: "post",
      headers: headers,
      body: JSON.stringify(data),
    };

    try {
      let res = await fetch("/register", opts);
      let resUser = await res.json();

      if (resUser.success) {
        alert(`registration successful`);
        try {
          window.location.href = "sign-in";
        } catch (err) {
          console.log("error navigating to sign-in page", err);
        }
      } else {
        alert(`Error: ${resUser.msg}`);
      }
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });
}

Register();
