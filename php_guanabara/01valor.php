<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Funççoes aritméticas</title>
</head>
<body>

<div>
	<?php  
    
   $nome = $_GET["nome"];
   $ano = $_GET["ano"];
   $sexo = $_GET["sexo"];
   $idade = date("Y") - $ano;

   echo "$nome é $sexo e tem $idade anos<br>";
   ?>
   <a href="index.html">Voltar</a>
</div>

</body>
</html>