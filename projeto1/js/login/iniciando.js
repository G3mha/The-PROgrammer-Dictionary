function confere_inicio() {
    if (JSON.parse(localStorage.getItem("UserLogado")) != null) {
        localStorage.removeItem("UserLogado")
    }
}

confere_inicio();
