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