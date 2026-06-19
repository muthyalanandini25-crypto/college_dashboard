function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "Nandini" &&
       password === "24AFAIMz081"){

        document.getElementById("msg")
        .innerHTML = "Login Successful";

        setTimeout(function(){
            window.location.href =
            "dashboard.html";
        },1000);

    }else{

        document.getElementById("msg")
        .innerHTML =
        "Invalid Username or Password";
    }
}
