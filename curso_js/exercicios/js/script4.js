let num = document.getElementById('nument')
    let lista = document.getElementById('flistaa')
    let resss = document.getElementById('resss')
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
          resss.innerHTML = '' 
       } else {
           alert('valor inválido ou ja encontrado na lista.')
       }
       num.value = ''
       num.focus()
    }

    function finalizarr() {
        if (valores.length == 0) {
            alert('adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                menor =valores[pos]    
            }
            media = soma / tot
            resss.innerHTML = ''
            resss.innerHTML += `ao todo, temos ${tot} números cadastrados.<br><br>`
            resss.innerHTML += `o maior valor informado foi ${maior}<br><br>`
            resss.innerHTML += `o menor valor informado foi ${menor}<br><br>`
            resss.innerHTML += `somando todos os valores, temos ${soma}<br><br>`
            resss.innerHTML += `a média dos valores digitados é ${media}<br><br>`
        }
        
    }