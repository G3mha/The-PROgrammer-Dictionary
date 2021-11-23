$("#register-form-submit").hide(2000)

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var users = JSON.parse(localStorage.getItem('Users'));
var tamanho = Object.keys(users)
var array = users[1]
var usuario = array[0]
var senha = array[1]

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    for (var i = 0; i < tamanho.length; i++) {

        var array = users[i]
        var usuario = array[0]
        var senha = array[1]

        if (username === usuario["Username"] && password === senha["Password"]) {
            alert("logado com sucesso");
            localStorage.setItem("UserLogado", JSON.stringify(username))
            window.location.replace("percurso2.html");
            stop
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    }
})
