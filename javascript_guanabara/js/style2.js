function carregar() {
    var msg = document.querySelector('p.msg')
    var msg1 = document.querySelector('p.msg1')
    var img = document.getElementById('imagem')
    var tit_site = document.querySelector('h1.titulo-site')
    var rodape = document.querySelector('p.rodape')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `agora são ${hora} horas e ${minutos} minutos!`
    
    if (hora >= 5 && hora < 12) {
        img.src = 'images/fotomanha.png'
        msg1.style.color = 'white'
        msg1.innerHTML = 'Bom dia!'
        document.body.style.background = '#f0ed4f'
        tit_site.style.color = 'black'
        rodape.style.color = 'black'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/fototarde.png'
        msg1.style.color = 'rgb(70, 56, 13)'
        msg1.innerHTML = 'Boa tarde!'
        document.body.style.background = '#a37b2f'    
    } else if (hora >= 18 && hora <= 23) {
        img.src = 'images/fotonoite.png'
        msg1.innerHTML = 'Boa noite!'
        document.body.style.background = '#000000'
    } else {
        img.src = 'images/fotonoite.png'
        msg1.innerHTML = 'Boa madrugada!'
        document.body.style.background = '#000000'
    }
}

function verif_idade() {
    var nasc = document.querySelector ('input.ano-nasc')
    var data = new Date()
    var ano = data.getFullYear()
    var result = document.querySelector('div.resultado')

    if (nasc.value == "" || nasc.value > ano) {
        alert ('[ERRO] preencha os dados corretamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - nasc.value
        var genero = ""
        var fotogen = document.createElement('img')
        fotogen.setAttribute('id', 'foto')
        if (fsex[0].checked && idade > 65) {
            genero = 'um idoso'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute('src', 'images/homem_idoso.png')
            
        } else if (fsex[1].checked && idade > 65) {
            genero = 'uma idosa'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute('src', 'images/mulher_idosa.png')
        } else if (fsex[0].checked && idade <= 65 && idade > 18) {
            genero ='um adulto'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute('src', 'images/jovem_homem.png')
        } else if (fsex[1].checked && idade <= 65 && idade > 18) {
            genero = 'uma adulta'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute ('src', 'images/jovem_mulher.png')
        } else if (fsex[0].checked && idade <= 18 && idade > 13) {
            genero = 'um adolescente'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute ('src', 'images/jovem_homem.png')
        } else if (fsex[1].checked && idade <= 18 && idade > 13) {
            genero = 'uma adolescente'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute ('src', 'images/jovem_mulher.png')
        } else if (fsex[0].checked && idade <= 13 && idade > 0) {
            genero = 'um menino'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute ('src', 'images/menino.png')
            result.style.color = 'blue'
        } else if (fsex[1].checked && idade <= 13 > 0) {
            genero = 'uma menina'
            fotogen.style.marginTop = '15px'
            fotogen.setAttribute ('src', 'images/menina.png')
            result.style.color = 'white'
        }
        result.style.textAlign = 'center'
        result.style.fontSize = '16px'
        result.style.color = 'blue'
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(fotogen)
        fotogen.style.borderRadius = '50%'
        
        
    }
}

function calc_enqto() {
    var prim_num = document.querySelector('input.one')
    var seg_num = document.querySelector('input.two')
    var terc_num = document.querySelector('input.three')
    var res_eqnto = document.querySelector('div.res-enqto')
    var numm1 = Number(prim_num.value)
    var numm2 = Number(seg_num.value)
    var numm3 = Number(terc_num.value)
    res_eqnto.innerHTML = ""

    if (numm1 == 0 || numm2 == 0 || numm3 == 0) {
        res_eqnto.innerHTML = 'Imposível contar'
        alert ('[ERRO] PREENCHA OS VALORES!')
    } else if (numm1 < numm2) {
        for (numm1; numm1 <= numm2; numm1 += numm3) {
            res_eqnto.innerHTML += `${numm1} `    
        }
    } else {
        for (numm1; numm1 >= numm2; numm1 -= numm3) {
            res_eqnto.innerHTML += `${numm1} `    
        }
    }
    
}

function tabuada() {
    var numtab = document.querySelector('input.tab')
    var seltab = document.querySelector('select.sel-tab')
    if (numtab.value.length == 0) {
        alert ('[ERRO] por favor digite um número!')
    } else {
        var n = Number(numtab.value)
        seltab.innerHTML = ""
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            seltab.appendChild(item)
            
        }
    }
}

function recebe_arrays() {
    let val1 = [document.querySelector('input.v1'), document.querySelector('input.v2'), document.querySelector('input.v3')]
    let result_arrays = document.querySelector('p.res-arrays')
    //let valores = val1
    val1[3] = document.querySelector('input.v4')
    val1.push(document.querySelector('input.v5'))
    result_arrays.innerHTML = `o vetor tem ${val1.length} posições.<br><br>`
    //result_arrays.innerHTML += `os valores são ${valores.value}`
    //console.log(val1)
    //console.log(valores.length)

    /*for(let pos = 0; pos <= val1.length; pos++) {
        result_arrays.innerHTML += `o valor do vetor na posição ${pos} é: ${val1[pos].value}<br>`
            }*/   
            
        for (let pos in val1) {
            result_arrays.innerHTML += `o valor do vetor na posição ${pos} é: ${val1[pos].value}<br>` 
            }
            let posicao = val1.indexOf(4)
            if (posicao == -1) {
                result_arrays.innerHTML += "o valor 4 não foi encontrado"
            } else {
                result_arrays.innerHTML += `o valor 4 está na posição ${posicao}`
            }
            
        }


    
    /*let result_parouimp = document.querySelector('p.result_parimp')     
    function parOuImpar(n) {
    
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    } 
    
} let result_parouimp = document.querySelector('p.result_parimp') 
  result_parouimp.innerHTML = (parOuImpar(document.querySelector('input.npouimp')))
  
let resuu = parOuImpar(document.querySelector('input.npouimp'))  
result_parouimp.innerHTML += parOuImpar()*/

let numer = document.querySelector('input.fnum')
let lista = document.querySelector('select.flista')
let resultad = document.querySelector('div.resull')
let valoress = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(numer.value) && inlista(numer.value, valoress)) {
        alert('tudo ok')
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}

function parImpar(n) {
    if (n % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
} let rest = parImpar(6) 
  console.log(rest) 
  
function soma(n1, n2) {
    if (n1 + n2 <= 7.5) {
        return "Reprovado!"
    } else {
        return "Aprovado!"
    }
}   let result_soma = soma(5, 4)
    console.log(`o resultado foi: ${result_soma}`)

let y = function(x) {
    return x*2
} 
console.log(y(5))

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

let nu = [8, 5, 15, "olá", true, 3.75 ]

for(let pos in nu){
    console.log(`a posição ${pos} tem o valor ${nu[pos]}`)
}

let posi = nu.indexOf(3.78)
if (posi == -1) {
    console.log('o valor não foi encontrado')
} else {
    console.log(`o valor 3.75 está na posição ${posi}`)
}

function somandoo() {
    alert('ok')
    let numeross = document.querySelector('.numero1, .numero2, .numero3')
    let resultt = document.querySelector('div.resultade')
    

    for (let cont = 0; cont < 5; cont++) {
        if (cont > numeross.length) {
            console.log(numeross)
            //numeross.innerHTML = `<input class="numero${cont}" type="number" name="numero${cont}" placeholder="digite um numero">`
        } else{
            console.log('nao encontrado')
        }
        
        //let soma = somando[cont].length
        //resultt.innerHTML = numero3[cont].value
    }
}

function mediaAluno() {
    let nomeAluno = document.querySelector('.nomeAluno')
    let notaaluno = document.querySelector('.notaAluno')
    let resultadoSituacao = document.querySelector('.resultadoMedia')
    if (nomeAluno.value.length == 0 || notaaluno.value.length == 0) {
        alert('[ERRO] digite os valores')
    } else{
        function notas() {
        let nota1 = Number(notaaluno.value)
        for(let ind = 1; ind <= 5; ind++){
            let notas = document.createElement('div')
            notas.text = `<input class="notaAluno${ind}" type="number" name="notaAluno${ind}" placeholder="digite sua nota ${ind}">`
        }
      }
    }
}

function tabuada2() {
    let numerdigitado = document.querySelector('.numerotabuada')
    let mostrarnatela = document.querySelector('.slecttab')
    if (numerdigitado.value.length == 0) {
        alert('[ERRO] digite um número')
    } else {
        let numeroint = Number(numerdigitado.value)
        mostrarnatela.innerHTML = ""
        for(let contador = 1; contador <= 10; contador++){
            let opt = document.createElement('option')
            opt.text = `${numeroint} X ${contador} = ${numeroint * contador}`
            opt.value = `tab${contador}`
            mostrarnatela.appendChild(opt)
        }
    }
}