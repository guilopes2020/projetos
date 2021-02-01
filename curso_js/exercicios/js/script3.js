function verifContador() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resul = document.getElementById('resuContar')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || fim.value == 0 || passo.value == 0 ) {
        alert("[ERRO] Dados incorretos")
    } else {
        resul.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resul.innerHTML += ` ${c}` 
                }
        } else {
            for (let c = i; c >= f; c -= p) {
                resul.innerHTML += ` ${c}`
                }         
            }
        }

       
    }

    function tabuada() {
        let num = document.getElementById('txt1')
        let tab = document.getElementById('seltab')

        if (num.value.length == '' || num.value == '' || num.value > 10 ) {
            alert("campo vazio ou maior que 10. (digite um número)")
        } else {
            let numer = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <= 10) {
                let item = document.createElement('option')
                item.text = `${numer} X ${c} = ${numer*c}`
                tab.appendChild(item)
                c++
            }
        }
    }

    let numray = [09, 05, 02, 07, 04, 15, 14, 11, 30, 'cavalo', 'burro']
    let mostrar = document.getElementById('aray')
    
    
    
    
    numray[5]=6
    numray.push(3)

    mostrar.innerHTML = `os valores do array são: ${numray}<br><br>`
    mostrar.innerHTML += `a quantidade de elementos dentro do array é de: ${numray.length}<br><br>`
    mostrar.innerHTML += `o valor do elemento da posição 5 é: ${numray[5]}<br><br>`
    mostrar.innerHTML += `os valores ordenados do array são: ${numray.sort()}<br><br>`
    mostrar.innerHTML += `o valor do elemento da posição 3 com o array ordenado é: ${numray[3]}<br>`
    
    for (let pos in numray) {
        mostrar.innerHTML += `a posição ${pos} tem o valor de: ${numray[pos]}<br>`
    }
    let pos = 0
    while (pos < numray.length) {
        mostrar.innerHTML += `a posição ${pos} tem o valor de: ${numray[pos]}<br>`
        pos++
    }
    let pos = 0
    do {
      mostrar.innerHTML += `a posição ${pos} tem o valor de ${numray[pos]}<br><br>`
      pos++   
    } while (pos < numray.length)

    for (let pos = 0; pos < numray.length; pos++) {
        mostrar.innerHTML += ` a posição ${pos} tem o valor de ${numray[pos]}<br><br>`   
    }
    let posit = numray.indexOf(14)
    let valorDeIndex = posit.indexOf().value
    let valposit = posit.value.text
    if (posit < 0 ) {
        //mostrar.innerHTML += 'o valor não foi encontrado'
    } else {
        mostrar.innerHTML += `o valor ${valorDeIndex} está na posição: ${posit}`
    }

    let re = document.getElementById('fun')

    function parImpar(n) {
        if (n % 2 == 0) {
            return 'par'
        } else {
            return 'impar'
        }
    } let resulta = parImpar(350)

    re.innerHTML = `o valor é ${resulta}<br><br>`

    function soma(s) {
        if (s + 3 == 10) {
            return 'valor certo'
        } else {
            return 'valor errado'
        }
    } let som = soma(5 + 3)
    re.innerHTML += `a soma é ${som}<br><br>`

    let resfato = document.getElementById('resfat')
    function fatorial() {
        alert('ola')
        let fa = document.getElementById('numfat')
        let fat = 1
        for (let c = fa; c > 1; c--) {
            fat *= c
        } return fat
    } resfato.innerHTML += `o fatorial é ${fatorial(fa)}`

    function calcentre() {
        let addnum = document.getElementById('nument')
        let resultadocont = document.getElementById('resultcont')

        if (addnum.value >= 10 &&  addnum.value <= 25) {
           while (addnum.value <= 25) {
              resultadocont.innerHTML += ` ${addnum.value}`
              addnum.value++
           } 
        } else {
            while (addnum.value >= 25){
                resultadocont.innerHTML += ` ${addnum.value}`
                addnum.value-- 
            }
            
        }
        //resultadocont.innerHTML = `${addnum.value}`
        
    }

    let num = document.getElementById('nument')
    let lista = document.getElementById('flistaa')
    let res = document.getElementById('resss')
    let valores = []

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
          return true  
        } else {
            return false
        }
    }

    function adicionar() {
        if (isNumero(num.value) && !inLista(num.value, valores)) {
          valores.push(Number(num.value))
          let item = document.createElement('option')
          item.text = `valor ${num.value} adicionado`
          lista.appendChild(item) 
       } else {
           alert('valor inválido ou ja encontrado na lista.')
       }
       num.value = ''
       num.focus()
    }
    
    
    
   