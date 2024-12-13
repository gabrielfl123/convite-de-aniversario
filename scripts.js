window.onload = function () {
    const fireworks = new Fireworks({
        target: document.body, // Onde os fogos de artifício serão renderizados
        hue: { min: 0, max: 360 },
        count: 5,
        speed: 1,
        delay: 0,
    });

    fireworks.start(); // Inicia os fogos de artifício quando a página carregar
};

function confirmarPresenca() {
    // Redireciona para o WhatsApp com uma mensagem personalizada
    window.location.href = 'https://wa.me/5516988440632?text=Confirmo%20minha%20presença%20para%20o%20aniversário%20do%20Henri';  // Mensagem personalizada
}

function mostrarPresentes() {
    const lista = document.getElementById("lista-presentes");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    } else {
        lista.style.display = "none";
    }
}
