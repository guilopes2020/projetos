<?php
require_once 'controlador.php';
    class controleRemoto implements controlador {
        //Atributos
        private $volume;
        private $ligado;
        private $tocando;

        //Métodos especiais
        public function __construct() {
            $this->volume = 50;
            $this->ligado = false;
            $this->tocando = false;
        }
        private function getVolume() {
            return $this->volume;
        }
        private function getLigado() {
            return $this->ligado;
        }
        private function getTocando() {
            return $this->tocando;
        }
        private function setVolume($volume) {
            $this->volume = $volume;
        }
        private function setLigado($ligado) {
            $this->ligado = $ligado;
        }
        private function setTocando($tocando) {
            $this->tocando = $tocando;
        }
        //métodos
        public function ligar() {
            $this->setLigado(true);
        }
        public function desligar() {
            $this->setLigado(false);
        }
        public function abrirMenu() {
            echo "<br>está ligado? ". ($this->getLigado() ?"sim" :"não");
            echo "<br>está tocando? ". ($this->getTocando() ?"sim" :"não");
            echo "<br>Volume " .$this->getVolume();
            for ($i = 0; $i <= $this->getVolume() ; $i += 10) { 
                echo "|";
            }
            echo "<br>";
        }
        public function fecharMenu() {
            echo "fechando meni...";
        }
        public function maisVolume() {
            if ($this->getLigado() == true) {
                $this->setVolume($this->getVolume() + 5);
            } else {
                echo "<p>Não posso aumentar o volume, pois a TV está desligada!</p>";
            }
        }
        public function menosVolume() {
            if ($this->getLigado() == true) {
                $this->setVolume($this->getVolume() - 5);
            }
        }
        public function ligarMudo() {
            if ($this->getLigado() == true && $this->getVolume() > 0) {
                $this->setVolume(0);
            }
        }
        public function desligarMudo() {
            if ($this->getLigado() == true && $this->getVolume() == 0) {
                $this->setVolume(50);
            }
        }
        public function play() {
            if ($this->getLigado() == true && $this->getTocando() == false) {
                $this->setTocando(true);
            }
        }
        public function pause() {
            if ($this->getLigado() == true && $this->getTocando() == true) {
                $this->setTocando(false);
            }
        }
    }
?>