<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

/*function soma ($a, $b) {
    $s = $a + $b;
    echo "<p>a soma vale $s</p>";
}
soma(3,4);
soma(8,2);
$x = 9;
$y = 15;
soma($x, $y);

function soma($a, $b) {
    return $a + $b;
}
$x = 15;
$y = 12;
$r = soma($x, $y);

echo "a soma entre $x e $y é igual a $r";

function soma() {
    $p = func_get_args();
    $t = func_num_args();
    $s = 0;

    for ($i = 0; $i < $t; $i++) { 
        $s += $p[$i];
    }
return $s;
}
$r = soma(3, 5, 2);
echo "a soma dos valores é $r";

$n = array(3, 5, 8, 2);
$n[] = 7;
print_r($n);

$c = range(5, 20, 2);
foreach ($c as $v) {
    echo "$v<br>";
}

    $v = array (1 => "a", 3 => "b", 6 => "c", 8 => "d");
    $v[] = "e";
    unset($v[0]);
    print_r ($v);*/

    $cad = array("nome" => "Ana", "idade" => 23, "peso" => 65.5);
    $cad["fuma"] = true;
    foreach($cad as $k => $c) {
        echo "o campo $k possui o conteudo $c<br>";
    }          


?>

    
</body>
</html>