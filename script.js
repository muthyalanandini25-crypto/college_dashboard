function login() {
  let id = document.getElementById("sid").value;
  let pass = document.getElementById("spass").value;

  if (id === "student" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText =
      "Invalid Student ID or Password ❌";
  }
}
