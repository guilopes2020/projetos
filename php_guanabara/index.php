<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!--
        for ($i = 0; $i <= 10; $i++) {
            echo "$i ";
        }

        echo '<br><br>';

        for ($i = 10; $i >= 0; $i--) {
            echo "$i ";
        }
        
        echo '<br><br>';

        for ($i = 0; $i <= 500 ; $i += 5) { 
            echo "$i ";
        }

        echo '<br><br>';

        for ($i = 1000; $i >= 0 ; $i -= 10) { 
            echo "$i ";
        }-->
        
        <div>
            <form method="GET" action="02_tabu.php">
                <select name="num">
                    <?php
                        for ($c=0; $c <= 10; $c++) {
                            echo "<option>$c</option>";
                        }
                    ?>
                </select>
                <input type="submit" value="tabuada">
            </form>

        </div>

        <?php

            $nomee = "guanabara";
            $nuevo = str_pad($nomee, 30, " ", STR_PAD_RIGHT);
            print("meu professor $nuevo é laklaklak<br>");

            $txt = str_repeat("php",5);
            print("o texto gerado foi $txt");
            print(str_repeat("-",20));
            echo'<br>';
            $frase = "gosto de estudar matematica";
            $novafrase = str_ireplace("Matematica", "PHP", $frase);
            echo "$novafrase";
        
        ?>
    
</body>
</html>