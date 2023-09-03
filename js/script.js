/*estrutura de dados js*/
const produtos = [
  {
    id: 1,
    nome: "Café Espresso",
    descricao:
      "Um tiro de café concentrado e encorpado, extraído rapidamente sob alta pressão. Possui sabor intenso e é a base para muitas outras bebidas de café.",
    imagens: ["./img/imagens-produtos/bebidas/cafe-expresso-1.png"],
    preco: 4.99,
  },
  {
    id: 2,
    nome: "Cappuccino",
    descricao:
      "Uma mistura de espresso, leite vaporizado e espuma de leite. O cappuccino tem um equilíbrio entre o sabor forte do espresso e a cremosidade do leite vaporizado.",
    imagens: ["./img/imagens-produtos/bebidas/capuccino-1.png"],
    preco: 5.49,
  },
  {
    id: 3,
    nome: "Machiatto",
    descricao:
      "Um espresso manchado com uma pequena quantidade de leite vaporizado. É uma opção mais forte e intensa para quem gosta do sabor do café puro.",
    imagens: ["./img/imagens-produtos/bebidas/machiatto-1.png"],
    preco: 6.48,
  },
  // Adicione mais produtos aqui...
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
            <h1 class="display-3 text-center p-5 text-white">${produto.nome}</h1>
        </div>
    </section>
    <section class="container my-5">
    <a class="icon-link icon-link-hover" href="./produtos.html" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);">
    <i class="bi bi-arrow-left"></i>
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
