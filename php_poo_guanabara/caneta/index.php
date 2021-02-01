<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canetas-POO</title>
</head>
<body>
<pre>
   <?php
        require_once 'caneta.php';
        $c1 = new caneta("lic", "verde", 0.8, true);
        $c1->rabiscar();
        
        print_r($c1);
        
    ?>
</pre>        
</body>
</html>