<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<pre>
<body>
    <?php
        require_once 'contaBanco.php';
        $p1 = new contaBanco();
        $p2 = new contaBanco();
        $p1->abrirConta("cc");
        $p1->setDono("Jubileu");
        $p1->setNumConta(111);
        $p1->depositar(250);
        $p1->sacar(125);
        $p1->sacar(150);
        $p1->sacar(30);
        $p1->sacar(15);
        $p1->depositar(2);
        $p1->pagarMensal();
        $p1->fecharConta();

        $p2->abrirConta("cp");
        $p2->setDono("creusa");
        $p2->setNumConta(222);
        $p2->depositar(325);
        $p2->sacar(287);
        $p2->sacar(50);
        $p2->depositar(127);
        $p2->pagarMensal();
        //$p2->pagarMensal();
        $p2->sacar(245);
        $p2->fecharConta();
        //$p2->fecharConta();
        $p2->depositar(150);
        //$p2->depositar(100);
        print_r($p1);
        print_r($p2);
    ?>
    </pre>
</body>
</html>