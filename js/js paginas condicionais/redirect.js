function Formulario() {
    window.location.replace("loading.html");
}

function Dropbox() {
    document.getElementById("Dropbox").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
            }
        }
    }
}

function Exemplo() {
  window.location.replace("RelogionExemplo.html")
}

function logout() {
    localStorage.removeItem("UserLogado")
}

