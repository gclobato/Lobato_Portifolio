// Função para rolar suavemente de volta ao topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar o botão "Voltar ao Topo" com base no scroll
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-up-btn').style.display = "block";
    } else {
        document.querySelector('.scroll-up-btn').style.display = "none";
    }
};