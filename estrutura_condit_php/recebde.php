

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>

    <?php
    
        $regiao = isset($_POST["regiao"]) ? $_POST["regiao"] : 0;

        switch ($regiao) {
            case '1':
            case '2':
            case '3':
            case '4':
            
                    echo "Você está na região Sudeste";        
                break;
            case '5':
            case '6':
            case '7':    
                    echo "você está na região nordeste";
            break;
            
            case '8':
            case '9':
                    echo "você está na região sul";
                     
                     
                
        }
    
    ?>

    </div>
</body>
</html>