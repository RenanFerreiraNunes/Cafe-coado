<?php
$servername = "localhost";
$username = "cafe_coado";
$password = "Jrr190404@";
$dbname = "cafe_coado";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>

