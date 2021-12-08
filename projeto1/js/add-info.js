function AddInfo() {

    var infos = document.getElementById("adicione-info")

    document.getElementById("info-perfil").innerHTML=infos.value

    $("#adicione-info").hide(2000)

    $("#some-botao").hide(2000)
}