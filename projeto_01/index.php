<?php include('config.php'); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Projeto 01</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="descrição do site">
	<meta name="keywords" content="palavras, chaves, do, site">
	<link rel="stylesheet" type="text/css" href="<?php echo INCLUDE_PATH; ?>css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
</head>
<body>
	
	<header>
		<div class="center">
		<div class="logo left"><a href="<?php echo INCLUDE_PATH; ?>">Logomarca</a></div>	
			<nav class="desktop right">
				<ul>
					<li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>sobre">Sobre</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>servicos">Serviços</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>contato">Contato</a></li>
				</ul>
			</nav>
		
			<nav class="mobile right">
				<div class="botao-menu-mobile">
					<i class="fas fa-bars"></i>
				</div>
				<ul>
					<li><a href="<?php echo INCLUDE_PATH; ?>">Home</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>Sobre">Sobre</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>Servicos">Serviços</a></li>
					<li><a href="<?php echo INCLUDE_PATH; ?>Contato">Contato</a></li>
				</ul>
			</nav>
			<div class="clear"></div>
		</div><!--center-->
	</header>

	<?php

		$url = isset($_GET['url']) ? $_GET['url'] : 'home';

		if (file_exists('pages/'.$url.'.php')) {
			include('pages/'.$url.'.php');
		} else {
			include('pages/not_found.php');
		}

	?>

	<footer class="rodape">
		<div class="center">
			<p>Todos os direitos reservados</p>
			
		</div><!--center-->
	</footer>

	<script src="<?php echo INCLUDE_PATH; ?>js/jquery.js"></script>
	<script src="js/script.js"></script>
</body>
</html>