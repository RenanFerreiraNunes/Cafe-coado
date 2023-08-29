/*estrutura de dados js*/
const produtos = [
    {
      id: 1,
      nome: "Café Espresso",
      descricao: "Um café forte e aromático.",
      imagens: ["./img/cafeteria-1.png", "img/espresso2.jpg"],
      preco: 4.99
    },
    {
      id: 2,
      nome: "Cappuccino",
      descricao: "Uma mistura de café, leite e espuma de leite.",
      imagens: ["./img/cafeteria-2.png", "img/cappuccino2.jpg"],
      preco: 5.49
    },
    // Adicione mais produtos aqui...
];
  
// No início do arquivo script.js
const produtoDetalhesContainer = document.getElementById('produto-detalhes');

// Função para carregar os detalhes de um produto
function carregarDetalhesDoProduto(produto) {
    const carouselInner = produto.imagens.map((imagem, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${imagem}" class="d-block w-100" alt="Imagem ${produto.nome}">
        </div>
    `).join('');

    const detalhesHTML = `
        <h1 class="display-3 text-center m-5">${produto.nome}</h1>
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
                <article class="d-flex flex-column align-items-center">
                    <h2 class="text-center my-5">${produto.nome}</h2>
                    <p class="">${produto.descricao}</p>
                    <h1 class="text-center my-4">Preço: R$ ${produto.preco.toFixed(2)}</h1>
                    <a href="#" class="btn btn-outline-dark text-center">
                        Encomendar
                    </a>
                </article>
            </div>
        </div>
    `;

    produtoDetalhesContainer.innerHTML = detalhesHTML;
}

// Obtém o ID do produto a partir dos parâmetros da URL
function obterIdDoProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Encontra o produto pelo ID
function encontrarProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

// Carrega os detalhes do produto ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const produtoId = obterIdDoProduto();
    const produtoSelecionado = encontrarProdutoPorId(produtoId);

    if (produtoSelecionado) {
        carregarDetalhesDoProduto(produtoSelecionado);
    } else {
        // Se o produto não for encontrado, exiba uma mensagem ou redirecione para uma página de erro
        produtoDetalhesContainer.innerHTML = '<p>Produto não encontrado.</p>';
    }
});

