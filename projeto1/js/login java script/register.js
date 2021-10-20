const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = loginForm.username.value;
    const pssw = loginForm.password.value;
    const confirmpssw = loginForm.password2.value;

    if (user === "" || user === null) {
        alert("Digite um username");
        location.reload();
    } else if (pssw == "" || pssw == null) {
        alert("Digite uma senha")
        location.reload();
    } else if (pssw != confirmpssw) {
        alert("As senhas nao sao iguais")
        location.reload();
    } else {
        alert("Registrado com sucesso")
    }
})
