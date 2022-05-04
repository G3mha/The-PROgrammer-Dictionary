// var users = JSON.parse(localStorage.getItem('Users'))
// var array = users[0]
// var usuario = array[0]
// var senha = array[1]

// document.getElementById("Mensagem-Aparecer").innerHTML="Welcome, " + usuario["Username"] + ", to The-PROgrammer Dictionary<br>You will be redirect, plese wait a moment"

function pageRedirect() {
    window.location.replace("paginas/pagina2.html");
}      
setTimeout("pageRedirect()", 10000);