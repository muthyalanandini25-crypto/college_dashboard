function login(){

let id=document.getElementById("studentid").value;
let pass=document.getElementById("password").value;

if(id!=="" && pass!==""){
alert("Login Successful");
window.location.href="dashboard.html";
}
else{
alert("Enter Student ID and Password");
}

}
