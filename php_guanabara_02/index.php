<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>aulas PHP</title>
</head>
<body>
    <div class="main">
        <?php
            $idade = 38;
            $nome = $_GET["nome"];
            echo "<p class='nome'>O $nome tem $idade anos!</p>";
            $n1 = $_GET["a"];
            $n2 = $_GET["b"];
            $soma = $n1 + $n2;
            $media = ($n1 + $n2) / 2;
            $desc = ($n1 * 10) / 100;
            $valorpag = $n1 - $desc;
            $precoaument = $n1 + $desc;
            $a = 3;
            $b = 7;
            $b = &$a;
            $somando = $a + $b;
            echo "<p class='soma1'>Olá $nome, a soma entre $n1 e $n2 é igual a $soma</p>";
            echo "<p class='subt'>Olá $nome, a subtração vale: ". ($n2 - $n1)."</p>";
            echo "<p class='subt'>Olá $nome, a multiplicação vale: ". ($n1 * $n2)."</p>";
            echo "<p class='subt'>Olá $nome, a divisão vale: ". ($n2 / $n1)."</p>";
            echo "<p class='subt'>Olá $nome, o módulo vale: ". ($n2 % $n1)."</p>";
            echo "<p class='subt'>Olá $nome, a média entre $n1 e $n2 vale: $media</p>";
            echo "<p class='subt'>Olá $nome, o produto é $n1 reais, e seu desconto de a vista é de 10% q é ".number_format($desc, 2)." , por isso vai pagar ".number_format($valorpag, 2)."</p>";
            echo "<p class='subt'>Olá $nome, o produto é $n1 reais, com 10% de acrescimo, o valor a ser pago será : " .number_format((($n1 * 10) /100 + $n1), 2). "</p>";
            echo "<p class='subt'>Olá $nome, o ano atual é $n2, e o ano anterior foi ".--$n2." e o ano que vem será: ".($n2 + 2). "</p>";
            echo $somando;
             
        ?>
        
    </div>
</body>
</html>