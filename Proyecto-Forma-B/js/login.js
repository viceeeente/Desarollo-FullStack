document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();

    const inputUserName = document.getElementById("user").value.trim();
    const inputPassword = document.getElementById("password").value.trim();
    const errorLogin = document.getElementById("error");

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if(!storedUserData){
        errorLogin.textContent = "No hay usuarios registrados";
        return;
    }

    if(
        inputUserName === storedUserData.username &&
        inputPassword === storedUserData.password
    ){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("nameUser", storedUserData.username);
        window.location.href = "index.html";
    } else{
        errorLogin.textContent = "Usuario o contraseña incorrectos";
    }
});