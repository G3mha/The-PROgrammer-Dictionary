$("#SemNada-Nome").hide(20)
$("#SemNada-Email").hide(20)
$("#SemNada-Subject").hide(20)
$("#SemNada-msg").hide(20)

function SubmitF() {
    if (document.getElementById("name").value === "") {
        $("#SemNada-Nome").text("Por favor digite seu nome").show(500)
    } if (document.getElementById("email").value === "") {
        $("#SemNada-Email").text("Por favor digite um email").show(700)
    } if (document.getElementById("subject").value === "") {
        $("#SemNada-Subject").text("Por favor digite um assunto").show(900)
    } else if (document.getElementById("message").value === "") {
        $("SemNada-msg").text("Por favor digite a mensagem a ser enviada").show(1100)
        alert("Por favor digite uma mensagem")
    } else {
        $(".submitting").text("Sumitting...")
        setTimeout(5000)
        $(".submitting").hide(2000)
        $("#form-message-success").show(2000)
    }

}