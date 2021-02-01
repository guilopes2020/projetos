<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UEC</title>
</head>
<body>
    <div>
        <?php
            require_once 'lutador.php';
            $l = array();
            $l[0] = new lutador("Pretty Boy", "França", 30, 68.9, 11, 2, 1);
            $l[1] = new lutador("Putscrypt", "Brasil", 27, 75.3, 14, 3, 5);
            $l[0]->status();
            $l[0]->apresentar();
            $l[1]->status();
            $l[1]->apresentar();
            $l[0]->perderLuta();
            $l[0]->apresentar();
        ?>
    </div>    
</body>
</html>