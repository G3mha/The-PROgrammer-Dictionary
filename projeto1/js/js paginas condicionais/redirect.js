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

function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

function Exemplo() {
  window.location.replace("RelogionExemplo.html")
}

