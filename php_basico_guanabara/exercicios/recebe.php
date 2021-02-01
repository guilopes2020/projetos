<!DOCTYPE html>
<html lang="pt-br">
<head>
    <?php

        $txt = isset($_GET["t"]) ? $_GET["t"] : "não definido";
        $tam = isset($_GET["tam"]) ? $_GET["tam"] : "12pt";
        $cor = isset($_GET["cor"]) ? $_GET["cor"] : "#ccc666";

    ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Recebido</title>
    <style>
        .texto {
            font-size: <?php echo $tam; ?>;
            color: <?php echo $cor; ?>;
        }
    </style>
</head>
<body>

    <div class="recebe">
    <?php

        $recebido = isset($_GET["env"]) ? $_GET["env"] : "valor não informado";
        $rq = sqrt($recebido);
        echo "O valor recebido foi $recebido <br><br>e a Raiz quadrada de $recebido é " .number_format($rq,2);

    ?>
    <a href="index.html"><input type="button" value="Voltar"></a>
    </div>

    <div class="recebe-ano">
        <?php

            $nome = isset($_GET["nome"]) ?  $_GET["nome"] : "valor não informado";
            $ano = isset($_GET["ano_nasc"]) ? $_GET["ano_nasc"] : "valor não informado";
            $sexo = isset($_GET["sexo"]) ? $_GET["sexo"] : "valor não informado";
            $idade = date("Y") - $ano;
            
            echo "<h2>$nome, nasceu em $ano, tem $idade anos e é $sexo<h2>";
        
        ?>
    </div>

    <h3 class="receb-text">Recebdendo texto digitado</h3>    
    <div class="recebe-textcor">
        <?php
            echo "<span class='texto'>$txt</span>";
        ?>
    </div>

    <div class="receb-vot">
        <h2>Vota ou Não?!</h2>
        <?php
            $nome = isset($_GET["nome"]) ? $_GET["nome"] : "nome indefinido";
            $ano_nasc = isset($_GET["ano_nasc"]) ? $_GET["ano_nasc"] : "idade não definida";
            $idadeee = date("Y") - $ano_nasc;
            if ($idadeee >= 18 && $idadeee < 65) {
                $voto = "Seu voto é obrigatório!";
            } elseif (($idadeee >= 16 && $idadeee < 18) || ($idadeee > 65)) {
                $voto = "seu voto é opcional";
            } else {
                $voto = "você ainda não tem idade suficiente para votar!";
            }
            echo "<p>Olá $nome, você nasceu em $ano_nasc, tem $idadeee anos e $voto</p>";
        ?>
    </div>

    <div class="receb_aprov">
        <h2>Aprovado ou Reprovado?</h2>
        <?php
            $nombre = isset($_GET["nombre"]) ? $_GET["nombre"] : "nome não informado";
            $n1 = isset($_GET["n1"]) ? $_GET["n1"] : "nota não informada";
            $n2 = isset($_GET["n2"]) ? $_GET["n2"] : "nota não informada";
            $mediaa = ($n1 + $n2) / 2;
            if ($mediaa <= 7) {
                $sit_aluno = "REPROVADO!";
            } else {
                $sit_aluno = "APROVADO";
            }
            echo "<p>O aluno $nombre, teve a média de $mediaa e ele está $sit_aluno</p>";

        ?>
    </div>

    <div class="receb_operac_matem">
        <h2>Resultado da operação matemática</h2>
        <?php
            $dig1 = isset($_GET["dig-num"]) ? $_GET["dig-num"] : "valor não informado";
            $dig2 = isset($_GET["dig-num2"]) ? $_GET["dig-num2"] : "valor não informado";
            $oper = isset($_GET["operacao"]) ? $_GET["operacao"] : "valor não informado";

            switch ($oper) {
                case '1':
                    $result_oper = $dig1 + $dig2;
                    echo "<p>A soma entre $dig1 e $dig2 é = $result_oper</p>";
                    break;
                case '2':
                    if ($dig1 >= $dig2) {
                        $result_oper = $dig1 - $dig2;
                        echo "<p>a subtração entre os números $dig1 e $dig2 -e = $result_oper</p>";
                    } else {
                        $result_oper = $dig2 - $dig1;
                        echo "<p>a subtração entre os números $dig2 e $dig1 é = $result_oper</p>";
                    }
                    break;
                case '3':
                    if ($dig2 >= $dig1) {
                        $result_oper = $dig2 / $dig1;
                        echo "<p>a divisão entre os números $dig2 e $dig1 é = $result_oper</p>";
                    } else {
                        $result_oper = $dig1 / $dig2;
                        echo "<p>a divisão entre os números $dig1 e $dig2 é = $result_oper</p>";
                    }
                    
                    break;
                case '4':
                    $result_oper = $dig1 * $dig2;
                    echo "<p>A multiplicação entre os números $dig1 e $dig2 é = $result_oper</p>";
                    break;            
                
                default:
                    $result_oper = "<p>[ERRO!] não foi possivel realizar a operação!</p>";
                    break;
            }

            $operacao2 = isset($_GET["operacao2"]) ? $_GET["operacao2"] : "não informado";

            switch ($operacao2) {
                case '1':
                    $re_opera = $dig1 * 2;
                    echo "<p>o dobro de $dig1 = $re_opera</p>";
                    break;
                case '2':
                    $re_opera = $dig1 ^ 3;
                    echo "<p>o cubo de $dig1 = $re_opera</p>";
                    break;
                case '3':
                    $re_opera = sqrt($dig1);
                    echo "<p> a raiz quadrada de $dig1 = $re_opera</p>";
                    break;        
                
                default:
                    echo "nenhum dado recebido!";
                    break;
            }
        ?>
    </div>

    <div class="estudouno">
        <h2>Estudar ou não?</h2>
            <?php
                $estud = isset($_GET["diasem"]) ? $_GET["diasem"] : 0;

                switch ($estud) {
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                        echo "<p>levanta e vai estudar!</p>";
                        break;
                    case '7':
                    case '8':
                        echo "<p>Pode descansar, já é final de semana!</p>"; 
                    break;      
                    default:
                        echo "<p>dados inválidos</p>";
                        break;
                }
            ?>
    </div>

    <div class="receb-reg">
        <h2>Qual região você mora?</h2>
            <?php
                $regiao = isset($_GET["escolha-estado"]) ? $_GET["escolha-estado"] : "estado não informado";
                
                switch ($regiao) {
                    case '1':
                    case '2':
                    case '4':
                    case '14':
                    case '22':
                    case '23':
                    case '27':                    
                        echo "<p>você mora na região Norte</p>";
                        break;
                    case '8':
                    case '13':
                    case '19':
                    case '25':               
                        echo "<p>Você mora na região Sudeste</p>";
                        break;
                    default:
                        echo "<p>vc mora nas outras regiões!</p>";
                        break;
                }
            ?>
    </div>

    <div class="caixas_cont">
        <form>
            <?php
                $contador = 1;
                while ($contador <= 5) {
                    echo "<input type='number' name='v$contador' max='100' min='0' placeholder='digite um número'>";
                    $contador++;
                }
            ?>
            <input type="submit" value="Enviar">
        </form>
    </div>
    
</body>
</html>