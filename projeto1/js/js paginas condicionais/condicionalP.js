$("#animetionR").hide(1)

function Aws() {
    var txt = $("#LCheck").val()
    if (txt === "Hello World") {
        window.location.replace("Parabens1.html")
    } else {
        $("#animetionR").show(2000)
    }
}

function Parabens() {
    var txtP = $("#LExec").val()
    alert(txtP)
}

function ParabensJ() {
    var txtJ = $("#LExec2").val()
    console.log(txtJ)
}

function Relatorio() {
    var checkText = $("#LCheck").val()
    if (checkText.length < 20) {
        $("#animetionR").show(1000)
    } else {
        alert("Relatorio enviado, ele sera avaliado e uma resposta sera enviada para voce, caso queira entre em contato com nossa equipe")
        window.location.replace("pagina3.html")
    }
}

function Relatorio2() {
    var checkText = $("#LCheck").val()
    if (checkText.length < 20) {
        $("#animetionR").show(1000)
    } else {
        alert("Relatorio enviado, ele sera avaliado e uma resposta sera enviada para voce, caso queira entre em contato com nossa equipe")
        window.location.replace("pagina5.html")
    }
}
