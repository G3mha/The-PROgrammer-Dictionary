var users = JSON.parse(localStorage.getItem('Users'))
var array = users[0]
var usuario = array[0]
var senha = array[1]

document.getElementById("trocar-texto").innerHTML=usuario["Username"]