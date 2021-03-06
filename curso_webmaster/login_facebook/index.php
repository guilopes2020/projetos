<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <title>Facebook Login</title>
</head>
<body>
    <header>
        <div class="center">
            <div class="logo">
                <h2><a href="index.htm">Facebook</a></h2>
            </div>

            <form method="POST" class="form-login">
                <div class="form-element">
                    <p>E-mail ou telefone:</p>
                    <input type="email">
                </div>
                <div class="form-element">
                    <p>Senha:</p>
                    <input type="password">
                </div>
                <div class="form-element">
                    <input type="submit" name="acao" value="Entrar">
                </div>

            </form>
            <div class="clear"></div>
        </div>
    </header>

    <section class="main">
        <div class="center">
            <div class="img-pessoas">
                <img src="images/img1.png">
            </div>

            <div class="abrir-conta">
                <h2>Abra sua conta</h2>
                <h3>É gratuito e sempre será!</h3>

                <form method="POST" class="criar-conta">
                    <div class="w50">
                        <input type="text" name="nome" placeholder="Nome">
                    </div>
                    <div class="w50">
                        <input type="text" name="sobrenome" placeholder="sebrenome">
                    </div>
                    <div class="w100">
                        <input type="email" name="email" placeholder="seu e-mail">
                    </div>
                    <div class="w100">
                        <input type="password" name="senha" placeholder="senha">
                    </div>
                    <div class="w100">
                        <p class="dt-nasc">Data de Nascimento</p>
                        <select class="nascimento" name="nascimento-dia">
                            <?php
                               for($i = 1; $i <= 31; $i++){ 
                            ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option><?php } ?>
                        </select>
                        <select class="nascimento" name="nascimento-mes">
                            <option value="0">Junho</option>
                        </select>
                        <select class="nascimento" name="nascimento-ano">
                            <?php
                                for ($i = 1960; $i <= 2020 ; $i++) { ?>
                                    <option value="<?php echo $i; ?>"> <?php echo $i; ?></option><?php
                                }
                            ?>
                            
                        </select>    
                                
                    </div> 
                    <div class="butao">
                        <input type="submit" name="cadastrar" value="Cadastrar">
                    </div>   
                </form>
            </div>
            <div class="clear"></div>
        </div>

    </section>
</body>
</html>