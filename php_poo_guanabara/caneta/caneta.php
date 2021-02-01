<?php
   class caneta {
       
       
       public function Caneta ($m, $c, $p, $v) {
           $this->modelo = $m;
           $this->cor = $c;
           $this->ponta = $p;
           $this->tampada = "";
       }

       
       public function rabiscar() {
           if ($c1->v === false) {
               echo "ok! pode rabiscar, a caneta está destampada";
           } else {
               echo "ERRO! a caneta está tampada";
           }
       }

       

   }   
?>