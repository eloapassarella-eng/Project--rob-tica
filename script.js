
// ===============================
// Glow Makeup - script.js
// ===============================

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Site Glow Makeup carregado com sucesso!");

    alert("Bem-vinda ao Glow Makeup ✨");
});

// ===============================
// Botão "Começar Agora"
// ===============================

const botao = document.querySelector(".btn");

if (botao) {
    botao.addEventListener("click", (e) => {
        e.preventDefault();

        alert("Você iniciou os tutoriais de maquiagem 💄");
    });
}

// ===============================
// Efeito nos cards
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

// ===============================
// Menu ativo ao clicar
// ===============================

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("click", () => {

        links.forEach((item) => {
            item.style.color = "#ff4f81";
        });

        link.style.color = "#d6336c";
    });

});

// ===============================
// Scroll suave
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

});

// ===============================
// Relógio simples no console
// ===============================

setInterval(() => {

    const agora = new Date();

    console.log(
        `Horário atual: ${agora.getHours()}:${agora.getMinutes()}:${agora.getSeconds()}`
    );

}, 1000);
