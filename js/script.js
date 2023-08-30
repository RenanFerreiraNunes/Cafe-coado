/*estrutura de dados js*/
const produtos = [
    {
      id: 1,
      nome: "Café Espresso",
      descricao: "Apresentamos o Café Espresso Supremo, a quintessência do sabor concentrado em uma xícara. Cada gole é uma jornada intensa e marcante, com notas de cacau profundo e um toque sutil de frutas maduras. Nossa mistura meticulosamente selecionada de grãos arábica é cuidadosamente torrada para liberar sabores e aromas únicos, criando uma experiência que satisfará até os paladares mais refinados. Permita-se explorar a essência do café em sua forma mais pura e deliciar-se com o nosso Café Espresso Supremo.",
      imagens: ["./img/imagens-produtos/bebidas/cafe-expresso-1.png",],
      preco: 4.99
    },
    {
      id: 2,
      nome: "Cappuccino",
      descricao: "Apresentamos o Café Espresso Supremo, a quintessência do sabor concentrado em uma xícara. Cada gole é uma jornada intensa e marcante, com notas de cacau profundo e um toque sutil de frutas maduras. Nossa mistura meticulosamente selecionada de grãos arábica é cuidadosamente torrada para liberar sabores e aromas únicos, criando uma experiência que satisfará até os paladares mais refinados. Permita-se explorar a essência do café em sua forma mais pura e deliciar-se com o nosso Café Espresso Supremo.",
      imagens: ["./img/imagens-produtos/bebidas/capuccino-1.png",],
      preco: 5.49
    },
    {
        id: 3,
        nome: "Machiatto",
        descricao: "Apresentamos o Café Espresso Supremo, a quintessência do sabor concentrado em uma xícara. Cada gole é uma jornada intensa e marcante, com notas de cacau profundo e um toque sutil de frutas maduras. Nossa mistura meticulosamente selecionada de grãos arábica é cuidadosamente torrada para liberar sabores e aromas únicos, criando uma experiência que satisfará até os paladares mais refinados. Permita-se explorar a essência do café em sua forma mais pura e deliciar-se com o nosso Café Espresso Supremo.",
        imagens: ["./img/imagens-produtos/bebidas/machiatto-1.png"],
        preco: 6.48
    }
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
    <section class="container-fluid mb-5">
        <div class="bg-escuro-2 row">
            <h1 class="display-3 text-center p-5 text-white">${produto.nome}</h1>
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
                    <h2 class="text-center my-4">Preço: R$ ${produto.preco.toFixed(2)}</h2>
                    <a href="#" class="btn btn-outline-dark text-center btn-lg">
                        Encomendar
                    </a>
                </article>
            </div>
        </div>
        <hr>
        <div class="row mx-lg-5">
            <p class=" my-5"><strong>Descrição:</strong> ${produto.descricao}</p>
        </div>
    </section>
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

