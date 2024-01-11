// 1-9: userData is still empty when form is submitted -- resolved
// tested api on postman and am able to register new users sucessfully
// removed index.js, and separted individual routes into own file
// 1- 10: separated register and login into two separate js files to prevent conflict

function registerLogin() {
  const signupButton = document.getElementById("register-btn");
  //const signinButton = document.getElementById("login-btn");

  // function to handle login input
  // changed id of email and passowrd in sign-in.html
//   function handleLogin() {
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;

//     // user = Login data
//     const user = {
//       email: email,
//       password: password,
//     };

//     return user;
//   }

  // function to handle register input
  function handleRegister() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const userFirstName = document.getElementById("firstName").value;
    const userLastName = document.getElementById("lastName").value;

    const userData = {
      firstName: userFirstName,
      lastName: userLastName,
      email: email,
      password: password,
    };

    console.log(userData);
    return userData;
  }

  // -- this code causes register eventlistener to not work
//   signinButton.addEventListener("click", async (e) => {
//     e.preventDefault();
//     const data = handleLogin();

//     try {
//       const res = await fetch("/sign-in", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       if (res.status === 200) {
//         alert("You have successfully signed in!");
//         // redirect to sign-in screen
//         //window.location.href = "./sign-in.html";
//       } else {
//         alert("Wrong credentials. Please try again!");
//       }
//       //   if (res.ok) {
//       //     alert("You have successfully signed in!");
//       //     // Redirect to the sign-in screen
//       //     // window.location.href = "./sign-in.html";
//       //   } else if (res.status === 401) {
//       //     alert("Unauthorized: Wrong credentials. Please try again!");
//       //   } else if (res.status === 403) {
//       //     alert("Forbidden: Access denied!");
//       //   } else {
//       //     alert(`Error: ${res.statusText}`);
//       //   }
//     } catch (err) {
//       console.log(err.message);
//     }
//     // console.log(data);
//   });

  // addEventListerner should be "click" not "submit"
  // "submit" should be in form
  signupButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = handleRegister();

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        alert("You have successfully signed up! Please log in now");
        // redirect to sign-in screen
        window.location.href = "./sign-in.html";
      } else {
        alert("Please try again with valid email addresss");
      }
    } catch (err) {
      console.log(err.message);
    }
    // console.log(data);
  });
}

// this line is required; if this line is removed, input is {}
//document.addEventListener("DOMContentLoaded", registerLogin);
registerLogin();
