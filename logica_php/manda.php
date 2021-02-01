<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>media</title>
</head>
<body>
    <!--<p>Média</p>
    primeira nota<br>
    <form method="post" action="recebe.php">
    <input type="number" name="n1"><br>
    segunda nota<br>
    <input type="number" name="n2"><br>
    <input type="submit" value="enviar">    
    

    <h2>Tabuada</h2>
    <form method="POST" action="recebe.php">

    escolha um número<br>
        <select name="numTab">
            <?php
                /*for ($num_ini = 1; $num_inic <= 100; $num_inic++) { 
                    echo"<option>$num_inic</option>";
                }*/

                function soma ($a, $b) {
                    $s = $a + $b;
                    echo "<p>a soma vale $s</p>";
                }
                soma(3,4);
                soma(8,2);
                $x = 9;
                $y = 15;
                soma($x, $y);

                echo 'olá';

            ?>

        </select><br><br>
    
        <input type="submit" value="enviar">

    </form>

    
    
</body>
</html>