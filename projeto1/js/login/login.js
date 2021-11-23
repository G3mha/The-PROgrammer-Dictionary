const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var users = JSON.parse(localStorage.getItem('Users'))
var array = users[0]
var usuario = array[0]
var senha = array[1]
// console.log(usuario["Username"] + " " + senha["Password"])

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === usuario["Username"] && password === senha["Password"]) {
        alert("logado com sucesso");
        window.location.replace("percurso2.html");
        stop
    } else {
        loginErrorMsg.style.opacity = 1;
    }

})