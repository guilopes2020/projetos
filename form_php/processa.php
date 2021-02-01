<?php

include_once("conexao.php");

	$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
	$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

	echo "Cadastrado com sucesso";
	

	$result_usuario = "INSERT INTO usuarios (nome, email, created) VALUES ('$nome', '$email', now())";
	$result_usuario = mysqli_query($conn, $result_usuario);

?>