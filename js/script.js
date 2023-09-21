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
    preco: 12.50,
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
    preco: 16.75,
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
    preco: 10.25,
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
    preco: 14.90,
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
    preco: 7.50,
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
    preco: 9.75,
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
    preco: 18.95,
  },
  {
    id: 8,
    nome: "Café Etíope",
    descricao:
      "Um café etíope tradicional, preparado na cerimônia do café, com grãos moídos na hora e temperado com especiarias. Uma experiência única.",
    imagens: [
      "./img/imagens-produtos/etiopia/bebidas/ethiopian-macchiato/ethiopian-macchiato-01.jpg",
      "./img/imagens-produtos/etiopia/bebidas/ethiopian-macchiato/ethiopian-macchiato-02.jpg",
      "./img/imagens-produtos/etiopia/bebidas/ethiopian-macchiato/ethiopian-macchiato-03.jpg",
      "./img/imagens-produtos/etiopia/bebidas/ethiopian-macchiato/ethiopian-macchiato-04.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/etiopia/bebidas/ethiopian-macchiato/ethiopian-macchiato-04.jpg",
    preco: 11.95,
  },
  {
    id: 9,
    nome: "Bolo de mel",
    descricao:
      "Um bolo etíope de mel, aromatizado com especiarias e servido com uma cobertura de iogurte e mel.",
    imagens: [
      "./img/imagens-produtos/etiopia/doces/bolo-de-mel/bolo-de-mel-01.jpg",
      "./img/imagens-produtos/etiopia/doces/bolo-de-mel/bolo-de-mel-02.jpg",
      "./img/imagens-produtos/etiopia/doces/bolo-de-mel/bolo-de-mel-03.jpg",
      "./img/imagens-produtos/etiopia/doces/bolo-de-mel/bolo-de-mel-04.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/etiopia/doces/bolo-de-mel/bolo-de-mel-03.jpg",
    preco: 8.95,
  },
  {
    id: 10,
    nome: "Injera com Doro Wat",
    descricao:
      "Pão injera macio e fermentado, acompanhado de um saboroso ensopado de frango Doro Wat.",
    imagens: [
      "./img/imagens-produtos/etiopia/doces/injera-com-doro-wat/injera-com-doro-wat-01.jpg",
      "./img/imagens-produtos/etiopia/doces/injera-com-doro-wat/injera-com-doro-wat-02.jpg",
      "./img/imagens-produtos/etiopia/doces/injera-com-doro-wat/injera-com-doro-wat-03.jpg",
      "./img/imagens-produtos/etiopia/doces/injera-com-doro-wat/injera-com-doro-wat-04.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/etiopia/doces/injera-com-doro-wat/injera-com-doro-wat-04.jpg",
    preco: 19.50,
  },
  {
    id: 11,
    nome: "Kolo",
    descricao:
      "Amendoins torrados com especiarias etíopes, um acompanhamento perfeito para qualquer bebida.",
    imagens: [
      "./img/imagens-produtos/etiopia/doces/kolo/kolo-01.jpg",
      "./img/imagens-produtos/etiopia/doces/kolo/kolo-02.jpg",
      "./img/imagens-produtos/etiopia/doces/kolo/kolo-03.jpg",
      "./img/imagens-produtos/etiopia/doces/kolo/kolo-04.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/etiopia/doces/kolo/kolo-01.jpg",
    preco: 6.25,
  },
  {
    id: 12,
    nome: "Café Kyoto",
    descricao:
      "Amendoins torrados com especiarias etíopes, um acompanhamento perfeito para qualquer bebida.",
    imagens: [
      "./img/imagens-produtos/japao/bebidas/cafe-kyoto/cafe-kyoto-1.jpg",
      "./img/imagens-produtos/japao/bebidas/cafe-kyoto/cafe-kyoto-2.jpg",
      "./img/imagens-produtos/japao/bebidas/cafe-kyoto/cafe-kyoto-3.jpg",
      "./img/imagens-produtos/japao/bebidas/cafe-kyoto/cafe-kyoto-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/bebidas/cafe-kyoto/cafe-kyoto-2.jpg",
    preco: 10.95,
  },
  {
    id: 13,
    nome: "Matcha Latte",
    descricao:
      "Chá matcha em pó misturado com leite vaporizado, resultando em uma bebida cremosa e energizante.",
    imagens: [
      "./img/imagens-produtos/japao/bebidas/matcha-latte/matcha-latte-1.jpg",
      "./img/imagens-produtos/japao/bebidas/matcha-latte/matcha-latte-2.jpg",
      "./img/imagens-produtos/japao/bebidas/matcha-latte/matcha-latte-3.jpg",
      "./img/imagens-produtos/japao/bebidas/matcha-latte/matcha-latte-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/bebidas/matcha-latte/matcha-latte-1.jpg",
    preco: 14.75,
  },
  {
    id: 14,
    nome: "Sakura Sencha",
    descricao:
      "Um chá verde sencha com pétalas de sakura, criando uma infusão perfumada e refrescante.",
    imagens: [
      "./img/imagens-produtos/japao/bebidas/sakura-sencha/sakura-sencha-1.jpg",
      "./img/imagens-produtos/japao/bebidas/sakura-sencha/sakura-sencha-2.jpg",
      "./img/imagens-produtos/japao/bebidas/sakura-sencha/sakura-sencha-3.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/bebidas/sakura-sencha/sakura-sencha-1.jpg",
    preco: 12.50,
  },
  {
    id: 15,
    nome: "Yuzu Sparkler",
    descricao:
      "Uma bebida efervescente de yuzu, cítrica e revigorante.",
    imagens: [
      "./img/imagens-produtos/japao/bebidas/yuzu-splarker/yuzu-sparkler-1.jpg",
      "./img/imagens-produtos/japao/bebidas/yuzu-splarker/yuzu-sparkler-2.jpg",
      "./img/imagens-produtos/japao/bebidas/yuzu-splarker/yuzu-sparkler-3.jpg",
      "./img/imagens-produtos/japao/bebidas/yuzu-splarker/yuzu-sparkler-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/bebidas/yuzu-splarker/yuzu-sparkler-2.jpg",
    preco: 9.25,
  },
  {
    id: 16,
    nome: "Dorayaki",
    descricao:
      "Panquecas recheadas com anko (pasta de feijão vermelho), um doce clássico do Japão.",
    imagens: [
      "./img/imagens-produtos/japao/doces/dorayaki/dorayaki-1.jpg",
      "./img/imagens-produtos/japao/doces/dorayaki/dorayaki-2.jpg",
      "./img/imagens-produtos/japao/doces/dorayaki/dorayaki-3.jpg",
      "./img/imagens-produtos/japao/doces/dorayaki/dorayaki-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/doces/dorayaki/dorayaki-3.jpg",
    preco: 7.75,
  },
  {
    id: 17,
    nome: "Mochi",
    descricao:
      "Bolinhos de arroz glutinoso recheados com uma variedade de sabores, como matcha, morango ou chocolate.",
    imagens: [
      "./img/imagens-produtos/japao/doces/mochi/mochi-1.jpg",
      "./img/imagens-produtos/japao/doces/mochi/mochi-2.jpg",
      "./img/imagens-produtos/japao/doces/mochi/mochi-3.jpg",
      "./img/imagens-produtos/japao/doces/mochi/mochi-4.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/doces/mochi/mochi-2.jpg",
    preco: 8.50,
  },
  {
    id: 18,
    nome: "Tayaki",
    descricao:
      "Peixes recheados com massa de panqueca e recheados com creme ou chocolate, um lanche adorável.",
    imagens: [
      "./img/imagens-produtos/japao/doces/taiyaki/taiyaki-1.jpg",
      "./img/imagens-produtos/japao/doces/taiyaki/taiyaki-2.jpg",
      "./img/imagens-produtos/japao/doces/taiyaki/taiyaki-3.jpg",
    ],
    imagem_thumb:
    "./img/imagens-produtos/japao/doces/taiyaki/taiyaki-2.jpg",
    preco: 11.95,
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
                    <a class="icon-link icon-link-hover btn btn-outline-primary mt-2" href="./produtos.html">
                    Voltar
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
