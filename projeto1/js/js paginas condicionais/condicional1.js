function check() {
    if (document.getElementById("SelectEscola").checked === true || document.getElementById("SelectTrabalho").checked === true || document.getElementById("SelectCG").checked === true) {
        window.location.replace("pagina3.html");
    } else if (document.getElementById("SelectOutros").checked === true) {
        window.location.replace("pagina2-1.html");
    } else {
        alert("Por favor selecione uma opção");
    }
}