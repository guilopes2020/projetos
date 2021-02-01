<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Controle Remoto</title>
</head>
<body>
<pre>
    <?php
        require_once 'controleRemoto.php';
        $c = new controleRemoto();
        $c->ligar();
        $c->maisVolume();
        $c->abrirMenu();    
    ?>
</pre>    
</body>
</html>