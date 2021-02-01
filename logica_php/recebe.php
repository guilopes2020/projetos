<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Lógica PHP</title>
</head>
<body>

	<div style="text-align: center; margin-top: 20px;">
	<?php

		$num_ini = isset($_POST['numini']) ? $_POST['numini'] : 1;
		$num_icrem = isset($_POST['incre']) ? $_POST['incre'] : 1;
		$num_final = isset($_POST['numfinal']) ? $_POST['numfinal'] : 1;

		while ($num_ini <= $num_final) {
			echo "<br>$num_ini";
			$num_ini += $num_icrem;

		}
		//$nota1 = isset($_POST["num"]) ? $_POST['num'] : 1;
		//$nota2 = isset($_POST["outro"]) ? $_POST['outro'] : 1;
		//$media = ($nota1 + $nota2) / 2;
		//echo "A média entre $nota1 e $nota2 é $media<br>";
		//$sit = ($media < 7) ? "reprovado" : "aprovado";
		//echo "a situação do aluno é: $sit";

		/*$num_tab = isset($_POST['num']) ? $_POST['num'] : 1;
		
		echo "<h2>Tabuada de $num_tab</h2>";
				
		for ($cont = 1; $cont <= 10; $cont++) { 
			$resul = $num_tab * $cont;	
			echo"<br>$num_tab X $cont = $resul";
			}*/
			
				

	?>
	</div>

</body>
</html>