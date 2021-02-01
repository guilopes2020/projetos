<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>PHP</title>
	<meta charset="utf-8">
	
</head>
<body>
	
	
		
		<?php 

			
			$c = isset($_POST['num']) ? $_POST['num'] : 0;
			$i = isset($_POST['incremento']) ? $_POST['incremento'] : 0;
			$fim = isset($_POST['fim']) ? $_POST['fim'] : 0;
			
			do {
				echo '<br>' . $c;
				$c += $i;
			} while ($c <= $fim);

			
			
			
	?>
	
	


</body>
</html>