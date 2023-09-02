<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
    
    $para = "renan.nunes1904@gmail.com"; // Endereço de email da empresa
    $assunto = "Mensagem de Contato do Site";

    $mensagem_completa = "Nome: $nome\n";
    $mensagem_completa .= "Email: $email\n\n";
    $mensagem_completa .= "Mensagem:\n$mensagem";

    // Enviar o email
    mail($para, $assunto, $mensagem_completa);

    // Redirecionar de volta para a página de contato
    header("Location: contato.html");
    exit();
}
?>
