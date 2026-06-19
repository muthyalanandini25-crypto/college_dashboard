function login() {
  let id = document.getElementById("studentId").value;
  let pass = document.getElementById("password").value;

  if (id === "student123" && pass === "1234") {
    document.getElementById("msg").innerText = "Login Successful ✅";

    // go to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);

  } else {
    document.getElementById("msg").innerText = "Invalid ID or Password ❌";
  }
}
