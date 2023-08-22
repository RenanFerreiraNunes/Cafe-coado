// Selecionar a barra de navegação
const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;
let isScrollingUp = false;

// Definir a posição vertical na qual você deseja alterar o estado da barra (em pixels)
const scrollThreshold = 300;

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
};