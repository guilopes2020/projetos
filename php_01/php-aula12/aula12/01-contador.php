<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="_css/estilo.css"/>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
<div>
    <?php

        $c = $_POST["num"];
    
       while ($c <= 10) {
           echo ',' . $c++;
       }
        
    ?>
</div>
</body>
</html>
 