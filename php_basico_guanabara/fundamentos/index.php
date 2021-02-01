<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Document</title>
</head>
<body>

<div class="laka">
    <?php

        $idade = 25;
        $nome = 'Guilherme';
        $fuma = true;
        if ($fuma == false) {
            $fuma = 'sim';
        } else {
            $fuma = 'não';
        }
        echo "meu nome é $nome e tenho $idade anos e $fuma fumo.<br>";

        $n1 = 7;
        $n2 = 4;
        $soma = $n1 + $n2;
        $subt = $n1 - $n2;
        $div = $n1 / $n2;
        $mult = $n1 * $n2;
        echo "<br>a soma entre $n1 e $n2 é $soma<br>";
        echo "<br>a subtração entre $n1 e $n2 é $subt<br>";
        echo "<br>a divisão entre $n1 e $n2 é $div<br>";
        echo "<br>a multiplicação entre $n1 e $n2 é $mult<br><br>";
        if ($soma % 2 == 0) {
            echo "e o resultado da soma que é o número $soma é par";
        } else {
            echo "e o resultado da soma que é o número $soma é ímpar";
        }

        echo '<br><br><br>';
        echo "contado de $n2 e $n2... a partir do resultado da soma que é $soma até 300";
        echo '<br><br>';

        while ($soma <= 300) {
            echo "$soma ";
            $soma += $n2;
        }

        echo '<br><br>';

        $l1 = $_GET["a"];
        $l2 = $_GET["b"];

        $som = $l1 + $l2;

        echo "a soma entre $l1 e $l2 é = $som<br>";
        echo "o valor absoluto de $som é " . abs($som);
        echo '<br';
        //echo "o valor de $som<sup>2</sup> é " . pow($som);
        echo '<br>';
        echo "<br>a raiz quadrada de $som é " . sqrt($som);
        echo '<br>';
        echo "o valor de $som arredondado é " . round($som);
        echo '<br>';
        echo "o alor inteiro de $som é " . intval($som);
        echo '<br>';
        echo "o valor de $som em moeda é R$" . number_format($som, 2, ",", ".");
        echo '<br><br><br>';

        $preco = $_GET["pre"];
        echo "o preço do produto é R$ " . number_format($preco, 2, ",", ".");
        $preco -= ($preco * 30 / 100);
        echo '<br>';
        echo "e o preço com 30% de deconto é R$ " . number_format($preco, 2, ",", ".");
        echo '<br>';
        $ano_atual = $_GET["aa"];
        echo "o ano atual é $ano_atual e o ano passado foi " . --$ano_atual . " e o ano que vem vai ser " . $ano_atual+= 2;
        echo '<br><br>';

        $a = 3;
        $b = &$a;
        $a += $b;
        $c = $b / $a;
        echo $a;
        echo '<br>';
        echo $b;
        echo '<br>';
        echo $c;
        echo '<br><br>';
        $site = "cursoemvideo";
        $$site = "curso PHP";
        echo $site;
        echo '<br>';
        echo $cursoemvideo;
        echo '<br><br>';
        $d = 8;
        $e = 9;
        $media = ($d + $e) / 2;
        $sit = $media >= 8 ? 'APROVADO' : 'REPROVADO';
        echo " sua primeira nota foi $d, e sua segunda nota foi $e, e sua média foi $media, então você está: $sit";
        echo '<br><br>';
        $f = $_GET["f"];
        $g = $_GET["g"];
        $tipo = $_GET["op"];
        echo "os valores passados foram $f e $g<br>";
        $resul = ($tipo == "s") ? $f + $g : $f * $g;
        echo "o resultado é $resul";
        echo '<br><br>';
        $nota1 = $_GET["n1"];
        $nota2 = $_GET["n2"];
        $med = ($nota1 + $nota2) / 2;
        echo "a media entre $nota1 e $nota2 é = $med";
        echo '<br>';
        //$situacao = ($med >= 7.5) ? 'APROVADO' : 'REPROVADO';
        echo "o aluno está: " . (($med >= 7.5) ? "APROVADO" : "REPROVADO");
        echo '<br><br>';
        $ano_nasci = $_GET["anonasc"];
        $anoatual = $_GET["anoatual"];
        $idadee = $anoatual - $ano_nasci;
        $voto = ($idadee >= 18 && $idadee <= 65) ? 'VOTO É OBRIGATÓRIO' : 'VOTO É OPCIONAL';
        //$voto = ($anoatual - $ano_nasci >= 18 && $anoatual - $ano_nasci < 65) ? 'VOTO OBRIGATÓRIO' : 'VOTO OPCIONAL';
        //echo "seu voto é $voto";
        echo "você tem $idadee anos, e seu $voto";
        echo '<br><br>';
        $nomee = "";
        $nomee = ($nomee) ?: "sem nome";
        echo $nomee;
    ?>
</div>
    
</body>
</html>