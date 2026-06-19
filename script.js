function login() {
  let id = document.getElementById("id").value;
  let pass = document.getElementById("pass").value;

  if (id === "student" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login ❌";
  }
}
