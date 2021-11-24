function check() {
    if (document.getElementById("SelectEscola").checked === true || document.getElementById("SelectTrabalho").checked === true || document.getElementById("SelectCG").checked === true) {
        window.location.replace("pagina3.html");
    } else if (document.getElementById("SelectOutros").checked === true) {
        window.location.replace("pagina2-1.html");
    } else {
        alert("Por favor selecione uma opção");
    }
}

// var animData = {
//     wrapper: document.querySelector('#animationWindow'),
//     animType: 'svg',
//     loop: true,
//     prerender: true,
//     autoplay: true,
//     path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
// };
// var anim = bodymovin.loadAnimation(animData);
// anim.setSpeed(3.4);

function check2() {
    if (document.getElementById("Select1").checked === true || document.getElementById("Select1+").checked === true) {
        window.location.replace("pagina4.html");
    } else {
        alert("Por favor selecione uma opção");
    }
}

function check3() {
    if (document.getElementById("Select-True").checked === true) {
        window.location.replace("pagina4-2.html")
    } else if (document.getElementById("Select-False").checked === true) {
        window.location.replace("pagina5.html")
    } else {
        alert("Por favor selecione uma opção");
    }
}

var valor_trocavel = 0

var selec_menu = document.getElementById("selecionado")
selec_menu.onchange=function() {
    var chosenoption = this.options[this.selectedIndex]
    console.log(chosenoption.value)
    if (chosenoption.value === "java") {
        valor_trocavel = 1
    } if (chosenoption.value === "c/c++") {
        valor_trocavel = 2
    } if (chosenoption.value === "web") {
        valor_trocavel = 3
    } else {
        valor_trocavel = 0
    }
}

function check4() {
    if (valor_trocavel === 0) {
        alert("Etapa 1 funcionando")
    } if (valor_trocavel === 1) {
        alert("Etapa 2 funcionando")
    }
}
