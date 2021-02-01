<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aula php</title>
</head>
<body>
    <?php

        /*$data = date('d/m/Y');
        function mostrarNome($nome, $idade) {
            date_default_timezone_set('America/Sao_Paulo');
            $horas = date('H:i:s');
            $data = date('d/m/Y');
            echo "meu nome é $nome e tenho $idade anos<br> e hoje é $data <br>e são $horas";
        }

        mostrarNome('laklaklaklaa', 38);

        $preco = $_GET['p'];
        echo "o preço do produto é R$". number_format($preco, 2);
        echo '<br>';
        $preco -= $preco * 10 / 100;
        echo "e o novo preço com desconto de 10% é R$". number_format($preco, 2);*/
        /*date_default_timezone_set('America/Sao_Paulo');
        $data = date('d/m/Y H:i:s');

        echo $data

        $titulo_site = 'aula php danki';
        include('header.php');
    ?>

    <h1>Meu conteudo da home</h1>

    <?php
        include('footer.php');*/

        //$conteudo = 'lorem ipsum dolor ait amet, conectuer adipsing alit. Gremeam placert, dfdg,g fdgfhgf, fhfhfh,f hf, hfhfhf
        //fh,f hfh';

        //echo substr($conteudo, 0, 30);

        $nome = 'guilherme lopes armindo';
        $nomes = explode(' ',$nome);

        print_r($nomes);

        echo htmlentities('<div><h3>sjhsjdhfjshd</h3></div>')
    ?>
</body>
</html>