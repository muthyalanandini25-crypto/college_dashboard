function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "student" &&
       password === "1234"){

        document.getElementById("msg")
        .innerHTML = "Login Successful";

    }else{

        document.getElementById("msg")
        .innerHTML = "Invalid Username or Password";
    }
}
