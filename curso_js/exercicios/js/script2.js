function contador() {
    var inic = 3//document.querySelector('select#numinic')
    var final = 500//document.querySelector('input#numfim')
    var passo = 2//document.querySelector('input#passo')
    var resultado = document.querySelector('p#result')
    
    while (inic <= final) {
        resultado.innerHTML += `<br>${inic}`
        inic += passo
        
        
    } 
    
    
}