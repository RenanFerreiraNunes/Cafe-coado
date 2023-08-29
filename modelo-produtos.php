<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Café Coado - Produtos</title>
    <!--Favicon-->
    <link rel="shortcut icon" href="./img/favicon.png" type="image/x-icon" />

    <!--Fontes-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

    <!--Css-->
    <link rel="stylesheet" href="./css/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
</head>

<body>
    <!--Navbar-->
    <nav class="navbar navbar-expand-md navbar-light" id="navbar">
        <?php
        // Inclui o arquivo de conexão
        include './conexao.php';

        // Consulta SQL para selecionar os produtos da tabela
        $query = "SELECT * FROM produtos";
        $resultado = mysqli_query($conn, $query);
        ?>
        <div class="container-fluid">
            <div class="d-flex flex-row-reverse align-items-center">
                <a class="navbar-brand" href="./index.html">
                    <img src="./img/logo.png" alt="" class="img-fluid" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel" style="max-width: 250px">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" id="nav-item">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" id="nav-item">
                            <a href="./index.html" class="nav-link">HOME</a>
                        </li>
                        <li class="nav-item" id="nav-item">
                            <a href="./produtos.html" class="nav-link active" aria-current="page">PRODUTOS</a>
                        </li>
                        <li class="nav-item" id="nav-item">
                            <a href="./contato.html" class="nav-link">CONTATO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </nav>
    <main class="my-5">
        <section class="container mt-5">
            <h1 class="display-3 text-center m-5">nome do produto</h1>
            <div class="row">
                <div class="col-md-6">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="./img/cafeteria-1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/cafeteria-2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="./img/cafeteria-3.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <article class="d-flex flex-column align-items-center">
                        <?php
                        while ($row = mysqli_fetch_assoc($resultado)) {
                            $nomeProduto = $row['nome']; // Replace 'nome' with the actual column name for the product name
                            $descricaoProduto = $row['descricao']; // Replace 'descricao' with the actual column name for the product description
                            $precoProduto = $row['preco']; // Replace 'preco' with the actual column name for the product price
                        ?>
                            <h2 class="text-center my-5"><?php echo $nomeProduto; ?></h2>
                            <p class=""><?php echo $descricaoProduto; ?></p>
                            <h1 class="text-center my-4">Preço: <?php echo $precoProduto; ?> real</h1>
                            <a href="#" class="btn btn-outline-dark text-center">Encomendar</a>
                        <?php
                        }
                        ?>
                    </article>
                </div>

            </div>
        </section>
    </main>

    <!--Footer-->
    <footer class="bg-escuro text-secondary py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 my-4">
                    <h4>Menu</h4>
                    <ul class="nav nav-underline">
                        <li class="nav-item"><a href="#" class="text-white nav-link">Produtos</a></li>
                        <li class="nav-item"><a href="#" class="text-white nav-link">Contato</a></li>
                        <li class="nav-item"><a href="#" class="text-white nav-link">Sobre nós</a></li>
                    </ul>
                </div>
                <div class="col-md-4 my-4">
                    <h4>Redes Sociais</h4>
                    <ul class="nav nav-underline">
                        <li class="nav-item"><a href="" class="text-white nav-link"><i class="bi bi-facebook"></i><span class="ms-2">Facebook</span></a></li>
                        <li class="nav-item"><a href="" class="text-white nav-link"><i class="bi bi-instagram"></i><span class="ms-2">Instagram</span></a></li>
                        <li class="nav-item"><a href="" class="text-white nav-link"><i class="bi bi-twitter"></i><span class="ms-2">Twitter</span></a></li>
                    </ul>
                </div>
                <div class="col-md-4 my-5">
                    <h4>Converse com a gente</h4>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" aria-describedby="button-addon">
                        <button type="button" class="btn btn-outline-success" id="button-addon"><i class="bi bi-envelope"></i></button>
                    </div>
                </div>
            </div>
            <hr class="mt-4">
            <div class="text-center">
                <p>&copy; 2023 Café coado. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    <!-- No final do corpo do documento -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>