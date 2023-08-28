// Selecionar a barra de navegação
const navbar = document.getElementById("navbar");
const banner = document.getElementById("banner");
const bannerHeight = banner.clientHeight;

let prevScrollPos = window.pageYOffset;
let isScrollingUp = false;

// Definir a posição vertical na qual você deseja alterar o estado da barra (em pixels)
const scrollThreshold = bannerHeight;

// Função para comparar a altura da barra de navegação com scrollThreshold
function compareHeight() {
  const navbarHeight = navbar.clientHeight;

  if (navbarHeight > scrollThreshold) {
    console.log('A altura da barra de navegação é maior do que scrollThreshold.');
    // Faça algo aqui, como adicionar uma classe CSS ou realizar ação específica
  } else if (navbarHeight < scrollThreshold) {
    console.log('A altura da barra de navegação é menor do que scrollThreshold.');
    // Faça algo aqui, como remover uma classe CSS ou realizar ação específica
  } else {
    console.log('A altura da barra de navegação é igual a scrollThreshold.');
    // Faça algo aqui, como ajustar o estilo de acordo com a igualdade
  }
}

// Monitorar o evento de rolagem da página
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  // Verificar a direção da rolagem
  if (prevScrollPos > currentScrollPos) {
    isScrollingUp = true;
  } else {
    isScrollingUp = false;
  }

  // Atualizar a classe CSS com base na direção do scroll
  if (isScrollingUp || currentScrollPos < scrollThreshold) {
    navbar.classList.add("scrolling-up");
  } else {
    navbar.classList.remove("scrolling-up");
  }

  prevScrollPos = currentScrollPos;

  // Comparar a altura da barra de navegação com scrollThreshold
  compareHeight();
};

document.addEventListener('DOMContentLoaded', function() {
  const botaoRemoverClasse = document.getElementById('botaozinho');
  const barraNavegacao = document.querySelector('.navbar');

  botaoRemoverClasse.addEventListener('click', function() {
    // Remove a classe CSS da barra de navegação
    barraNavegacao.classList.toggle('removida');
  });
});