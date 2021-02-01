<?php

	session_start();
	
	$_SESSION['x'] = 'oi, sou um valor de sessão!';
	print_r($_SESSION);
	echo "<hr>";


	//variavel que verifica se a autenticação foi realizada
	$usuario_autenticado = false;

	//usuários do sistema
	$usuarios_app = array(
		array('email' => 'adm@teste.com.br', 'senha' => '123456'),
		array('email' => 'user@teste.com.br', 'senha' => 'abcd'),
		array('email' => 'antunes@hotmail.com', 'senha' => '123abc'),
	);

	foreach ($usuarios_app as $user) {
		
		if ($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']) {
			$usuario_autenticado = true;
		}
	}

	if ($usuario_autenticado) {
		echo 'usuário autenticado';
	} else {
		header('Location: index.php?login=erro');
	}
	
?>