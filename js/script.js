/*estrutura de dados js*/
const produtos = [
  {
    id: 1,
    nome: "Café au Lait",
    descricao:
      "Uma combinação perfeita de café forte e leite quente, servido em uma xícara elegante. O sabor suave do café francês em sua melhor forma.",
    imagens: [
      "./img/imagens-produtos/franca/bebidas/cafe-au-lait/cafe-au-lait-1.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-au-lait/cafe-au-lait-2.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-au-lait/cafe-au-lait-3.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-au-lait/cafe-au-lait-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/bebidas/cafe-au-lait/cafe-au-lait-2.jpg",
    preco: 4.99,
  },
  {
    id: 2,
    nome: "Café Crème Brûlée",
    descricao:
      "Um café expresso coberto com uma camada de creme brûlée caramelizado. Uma explosão de sabor e textura em cada gole.",
    imagens: [
      "./img/imagens-produtos/franca/bebidas/cafe-creme-brule/cafe-creme-brulee-1.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-creme-brule/cafe-creme-brulee-2.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-creme-brule/cafe-creme-brulee-3.jpg",
      "./img/imagens-produtos/franca/bebidas/cafe-creme-brule/cafe-creme-brulee-4.jpg",

  ],
    imagem_thumb:
    "./img/imagens-produtos/franca/bebidas/cafe-creme-brule/cafe-creme-brulee-2.jpg",
    preco: 5.49,
  },
  {
    id: 3,
    nome: "Thé à la Lavande",
    descricao:
      "Um chá de lavanda suave e perfumado, perfeito para relaxar após uma refeição.",
    imagens: [
      "./img/imagens-produtos/franca/bebidas/the-a-lavande/The-a-la-Lavande-1.jpg",
      "./img/imagens-produtos/franca/bebidas/the-a-lavande/The-a-la-Lavande-2.jpg",
      "./img/imagens-produtos/franca/bebidas/the-a-lavande/The-a-la-Lavande-3.jpg",
      "./img/imagens-produtos/franca/bebidas/the-a-lavande/The-a-la-Lavande-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/bebidas/the-a-lavande/The-a-la-Lavande-1.jpg",
    preco: 6.48,
  },
  {
    id: 4,
    nome: "Chocolat Chaud",
    descricao:
      "Chocolate quente francês, preparado com chocolate amargo de alta qualidade e leite cremoso. Uma indulgência inesquecível.",
    imagens: [
      "./img/imagens-produtos/franca/bebidas/chocolat-chaud/Chocolat-Chaud-1.jpg",
      "./img/imagens-produtos/franca/bebidas/chocolat-chaud/Chocolat-Chaud-2.jpg",
      "./img/imagens-produtos/franca/bebidas/chocolat-chaud/Chocolat-Chaud-3.jpg",
      "./img/imagens-produtos/franca/bebidas/chocolat-chaud/Chocolat-Chaud-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/bebidas/chocolat-chaud/Chocolat-Chaud-3.jpg",
    preco: 6.48,
  },
  {
    id: 5,
    nome: "Croissant",
    descricao:
      "Um croissant fresco e crocante, assado na perfeição, servido com geleia de framboesa.",
    imagens: [
      "./img/imagens-produtos/franca/doces/croissant/Croissant-1.jpg",
      "./img/imagens-produtos/franca/doces/croissant/Croissant-2.jpg",
      "./img/imagens-produtos/franca/doces/croissant/Croissant-3.jpg",
      "./img/imagens-produtos/franca/doces/croissant/Croissant-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/doces/croissant/Croissant-4.jpg",
    preco: 6.48,
  },
  {
    id: 6,
    nome: "Mousse au Chocolat",
    descricao:
      "Uma mousse de chocolate incrivelmente cremosa, decorada com raspas de chocolate amargo.",
    imagens: [
      "./img/imagens-produtos/franca/doces/mousse-au-chocolat/Mousse-au-Chocolat-1.jpg",
      "./img/imagens-produtos/franca/doces/mousse-au-chocolat/Mousse-au-Chocolat-2.jpg",
      "./img/imagens-produtos/franca/doces/mousse-au-chocolat/Mousse-au-Chocolat-3.jpg",
      "./img/imagens-produtos/franca/doces/mousse-au-chocolat/Mousse-au-Chocolat-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/doces/mousse-au-chocolat/Mousse-au-Chocolat-3.jpg",
    preco: 6.48,
  },
  {
    id: 7,
    nome: "Tarte Tatin",
    descricao:
      "Uma deliciosa torta de maçã caramelizada, servida com uma bola de sorvete de baunilha.",
    imagens: [
      "./img/imagens-produtos/franca/doces/tarte-tatin/Tarte-Tatin-1.jpg",
      "./img/imagens-produtos/franca/doces/tarte-tatin/Tarte-Tatin-2.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/franca/doces/tarte-tatin/Tarte-Tatin-2.jpg",
    preco: 6.48,
  },
];

// No início do arquivo script.js
const produtoDetalhesContainer = document.getElementById("produto-detalhes");

// Função para carregar os detalhes de um produto
function carregarDetalhesDoProduto(produto) {
  const carouselInner = produto.imagens
    .map(
      (imagem, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${imagem}" class="d-block w-100" alt="Imagem ${produto.nome
        }">
        </div>
    `
    )
    .join("");

  const detalhesHTML = `
    <section class="container-fluid mb-5">
        <div class="row" id="fita-produtos">
            <h1 class="display-3 text-center p-5 text-white">${produto.nome
    }</h1>
        </div>
    </section>
    <section class="container my-5">
    <a class="icon-link icon-link-hover" href="./produtos.html" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
    <i class="bi bi-arrow-left my-3"></i>
    Voltar
    </a>
            <div class="row">
            <div class="col-md-6">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        ${carouselInner}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-6">
                <article class="d-flex flex-column align-items-center justify-content-center h-100">
                    <p class=" my-5"><strong>Descrição:</strong> ${produto.descricao
    }</p>
                    <h2 class="text-center my-4">Preço: R$ ${produto.preco.toFixed(
      2
    )}</h2>
                    <a href="#" class="btn btn-outline-dark text-center btn-lg">
                        Encomendar
                    </a>
                </article>
            </div>
        </div>  
    </section>
    `;

  produtoDetalhesContainer.innerHTML = detalhesHTML;
}

// Obtém o ID do produto a partir dos parâmetros da URL
function obterIdDoProduto() {
  const urlParams = new URLSearchParams(window.location.search);
  return parseInt(urlParams.get("id"));
}

// Encontra o produto pelo ID
function encontrarProdutoPorId(id) {
  return produtos.find((produto) => produto.id === id);
}

// Carrega os detalhes do produto ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const produtoId = obterIdDoProduto();
  const produtoSelecionado = encontrarProdutoPorId(produtoId);

  if (produtoSelecionado) {
    carregarDetalhesDoProduto(produtoSelecionado);
  } else {
    // Se o produto não for encontrado, exiba uma mensagem ou redirecione para uma página de erro
    produtoDetalhesContainer.innerHTML = "<p>Produto não encontrado.</p>";
  }
});

// Mostra o botão quando o usuário rolar uma certa quantidade para baixo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("voltar-ao-topo").style.display = "block";
  } else {
    document.getElementById("voltar-ao-topo").style.display = "none";
  }
}

// Faz a rolagem suave até o topo quando o botão é clicado
document.getElementById("backToTopBtn").addEventListener("click", function () {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
});
