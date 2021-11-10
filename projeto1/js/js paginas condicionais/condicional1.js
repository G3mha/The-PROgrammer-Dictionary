function check() {
    if (document.getElementById("SelectEscola").checked === true || document.getElementById("SelectTrabalho").checked === true || document.getElementById("SelectCG").checked === true) {
        window.location.replace("pagina3.html");
    } else if (document.getElementById("SelectOutros").checked === true) {
        window.location.replace("pagina2-1.html");
    } else {
        alert("Por favor selecione uma opção");
    }
}

var animData = {
    wrapper: document.querySelector('#animationWindow'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);