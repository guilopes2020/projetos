<?php

    class contaBanco {
        public $numConta;
        protected $tipo;
        private $dono;
        private $saldo;
        private $status;

        //métodos especiais
        public function __construct() {
            $this->setSaldo(0);
            $this->setStatus(false);
        }
        public function getNumconta() {
            return $this->numConta;
        }
        public function setNumConta($numConta) {
            $this->numConta = $numConta;
        }
        public function getTipo() {
            return $this->tipo;
        }
        public function setTipo($tipo) {
            $this->tipo = $tipo;
        }
        public function getDono() {
            return $this->dono;
        }
        public function setDono($dono) {
            $this->dono = $dono;
        }
        public function getSaldo() {
            return $this->saldo;
        }
        public function setSaldo($saldo) {
            $this->saldo = $saldo;
        }
        public function getStatus() {
            return $this->status;
        }
        public function setStatus($status) {
            $this->status = $status;
        }
        //métodos
        public function abrirConta($t) {
            $this->setTipo($t);
            $this->setStatus(true);
            if ($t == "cc") {
                $this->setSaldo(50);
                echo "<p>conta criada com sucesso e você tem 50 reais!</p>";
            } elseif ($t == "cp") {
                $this->setSaldo(150);
                echo "<p>conta criada com sucesso e cocê tem 150 reais!</p>";
            }
        }
        public function fecharConta() {
            if ($this->getSaldo() > 0) {
                echo "<p>".$this->getDono()." sua conta ainda tem dinheiro, impossivel encerra-la</p>";
            } elseif ($this->getSaldo() < 0) {
                echo "conta está em débito";
            } else {
                $this->setStatus(false);
                echo "<p>conta de ".$this->getDono()." encerrada com sucesso!</p>";
            }
        }
        public function depositar($v) {
            if ($this->getStatus() == true) {
                $this->setSaldo($this->getSaldo() + $v);
                echo "<p>depósito de $v na conta de ".$this->getDono()." realizado com sucesso</p>";
            } else {
                echo "<p>conta fechada. imposiivel depositar</p>";
            }
        }
        public function sacar($v) {
            if ($this->getStatus() == true) {
                if ($this->getSaldo() >= $v) {
                    $this->setSaldo($this->getSaldo() - $v);
                    echo "<p>saque de $v autorizado na conta de ".$this->getDono()."</p>";
                } else {
                    echo "<p>".$this->getDono().", saldo insuficiente para saque";
                }
            } else {
                echo "<p>Não posso sacar de uma conta fechada!</p>";
            }
        }
        public function pagarMensal() {
            if ($this->getTipo() == "cc") {
                $v = 12;
            } elseif ($this->getTipo() == "cp") {
                $v = 20;
            }
            if ($this->getStatus() == true && $v <= $this->getSaldo()) {
                $this->setSaldo($this->getSaldo() - $v);
                echo "<p>mensalidade no valor de $v de ".$this->getDono()." paga com sucesso!</p>";
            } else {
                echo "<p>problemas com a conta, não posso cobrar!</p>";
            }
        }
        
    }

?>