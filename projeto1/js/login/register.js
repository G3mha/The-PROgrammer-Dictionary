const RegisterForm = document.getElementById("login-form");
const RegisterButton = document.getElementById("register-form-submit");
var contador = 1

RegisterButton.addEventListener("click", (e) => {
    e.preventDefault();
    const user = RegisterForm.username.value;
    const pssw = RegisterForm.password.value;
    const confirmpssw = RegisterForm.password2.value;

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
        var users = JSON.parse(localStorage.getItem('Users')) || [];
        var userData = [{Username:document.getElementById("username-field").value}, {Password:document.getElementById("password-field").value}]
        users.push(userData)
        localStorage.setItem('Users', JSON.stringify(users));
    }
})

function clear() {
    localStorage.clear()
}