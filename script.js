document.addEventListener("DOMContentLoaded", () => {
    console.log("Crypto Dashboard carregado com sucesso.");
    setInterval(() => {
        const randomVariation = (Math.random() * 0.1 - 0.05).toFixed(2);
        console.log(`Atualizando feed de mercado... Variação simulada: ${randomVariation}%`);
    }, 5000);
});