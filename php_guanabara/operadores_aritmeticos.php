<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Funççoes aritméticas</title>
</head>
<body>

<div>
	<?php  
		
	$ano = $_GET["an"];
	$idade = 2020 - $ano;
	$tipo = ($idade >= 18 && $idade < 65) ? "OBRIGATORIO" : "NAO OBRIGATORIO";
	
	echo "quem nasceu em $ano tem idade de $idade anos!<br>";
	echo "e seu voto é $tipo";



		

	?>
</div>

</body>
</html>