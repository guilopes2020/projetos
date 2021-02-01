<div>
    <?php

        $n = isset($_GET["num"]) ? $_GET["num"] : 0;
        for ($c = 0; $c <= 10 ; $c++) {
            $r = $n * $c;

            echo "$n X $c = $r<br>";
        }
    ?>


</div>