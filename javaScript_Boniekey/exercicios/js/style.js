function menuToggle() {
    let abremenu = document.querySelector('div.menu-area')
    if (abremenu.style.width == '200px') {
        abremenu.style.width = '0px'
    } else {
        abremenu.style.width = '200px'
    }
}


/*function alterar(n1, n2) {
    document.querySelector('h2.ola').innerHTML = n1
    document.querySelector('p.parag').innerHTML = n2
}
alterar(5*3, 21/7)*/

/*function somar(x, y) {
    let total = x + y
    let toti = document.querySelector('p.parag')
    toti.innerHTML = total
}
somar(8, 7)*/

function somar(x, y) {
    let total = x + y
    return total
}
var result = document.querySelector('p.parag')
result.innerHTML = `o valor na função é: ${somar(10, 7)}`

function clicou() {
    result.innerHTML = "você clicou nobotão"
}

function digitou(e) {
    if (e.keyCode == 13 || e.ctrlKey == true) {
        let texto = document.querySelector('input.digit').value
        let resultp = document.querySelector('p.paragraf')
        resultp.innerHTML += texto
    }
}

function azul() {
    limpar()
    document.querySelector('h1.titulo').classList.add('azul')
    
}

function vermelho() {
    limpar()
    document.querySelector('h1.titulo').classList.add('vermelho')
    
}

function verde() {
    limpar()
    document.querySelector('h1.titulo').classList.add('verde')
    
}

function limpar() {
    document.querySelector('h1.titulo').classList.remove('azul')
    document.querySelector('h1.titulo').classList.remove('vermelho')
    document.querySelector('h1.titulo').classList.remove('verde')
}

function mostrafone(elem) {
    elem.style.display = "none"
    document.querySelector('p.telefone').style.display = "inline-block"
}

function mostr_array() {
    let primarray = document.querySelector('input.prim-array')
    let segarray = document.querySelector('input.seg-array')
    let tercarray = document.querySelector('input.terc-array')
    let carros = [primarray.value, segarray.value, tercarray.value]
    let mostraresul = document.querySelector('p.result')
    mostraresul.innerHTML = carros
}


//function mostr_array() {
//let mostraresul = document.querySelector('p.result')    
let carro = {
    marca: "fiat",
    moedelo: "uno",
    peso: "500kg",
    ligado: "",
    ligar: function() {
        this.ligado = false
        console.log("vrumm, rumm")
    },
    acelerar: function() {
        if(this.ligado == false) {
        console.log("o carro está desligado!")
        } else {
            console.log("rihh rihhh")
        }
    }
}
carro.ligar()
carro.acelerar()
console.log(`o modelo do carro é ${carro.moedelo}`)

//mostraresul.innerHTML = carro.marca.value
//mostraresul.innerHTML += carro.moedelo.value
//mostraresul.innerHTML += carro.peso.value

    
//}

let carros2 = [
    {marca: 'fiat', modelo: 'palio', ano: 2015, preco: 25.700},
    {marca: 'fiat', modelo: 'Uno', ano: 1995, preco: 23.800},
    {marca: 'cherolet', modelo: 'corsa', ano: 1997, preco: 15.350},
    {marca: 'Honda', modelo: 'Cvic', ano: 2020, preco: 74.800}
]

console.log(carros2[3].marca)


function diaSemana() {
    let diasem = document.querySelector('input.numdia')
    let resposta = document.querySelector('p.resposta')
    let nomedia = ""
    switch (diasem.value) {
        case '0':
            nomedia = 'domingo'
            break
        case '1':
            nomedia = 'Segunda'
            break
        case '2':
            nomedia = 'terça'
            break;   
        default:
            nomedia = 'valor inválido'
            break
    }
    resposta.innerHTML = `o valor ${diasem.value}, corresponde a ${nomedia}`
}



/*for(let i = 1; i <= 100; i++) {
    document.querySelector('p.resposta').innerHTML += `${i}<br>`
}*/

let carros3 = ['ferrari', 'fusca', 'palio', 'corolla']
let html = '<ul>'

for(let i in carros3) {
    html += '<li>' + carros3[i] + '</li>'
}

html += '</ul>'

document.querySelector('p.resposta').innerHTML = html

let lista = [45, 4, 9, 16, 25]
let lista2 = []
/*lista2 = lista.map(function(item) {
    return item / 2
})

for(let i in lista) {
    lista2.push(lista[i] * 2)
}
let resultade = lista2*/

/*lista2 = lista.some(function(item) {
    return (item > 47) ? true : false
})

lista2 = lista.findIndex(function(item) {
    return (item == 16) ? true : false
})

let resultade = lista2
console.log(resultade)

let listap = [
    {id: 1, nome: 'Bonieky', sobrenome: 'lacerda', idade: 18},
    {id: 2, nome: 'Guilherme', sobrenome: 'Lopes', idade: 38},
    {id: 3, nome:'burrito', sobrenome: 'da silva', idade: 150}
]

let pessoa = listap.find(function(item) {
    return (item.idade == 35 || item.idade == 150) ? true : false
})

console.log(pessoa)

let d = new Date()

console.log(d.getSeconds())

let novoValor = Math.floor(Math.random() * 100)
console.log(novoValor)*/
/*let timer = ''

function comecar() {
    timer = setInterval(horaAtual, 1000)
}

function parar() {
    clearInterval(timer)
}

setTimeout(function horaAtual() {
timer = setInterval(horaAtual, 1000)    
let d = new Date()
let h = d.getHours()
let m = d.getMinutes()
let s = d.getSeconds()
let mostrahora = document.querySelector('p.horaatual')
mostrahora.innerHTML = `agora são: ${h}:${m}:${s}`
}, 2000);*/

let pessoal = {
    nome: 'Guilherme',
    sobrenome: 'Lopes',
    idade: '38',
    social:{
        facebook: 'guilopes',
        instagram: 'lopesGui'
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

//let {nome, sobrenome, idade} = pessoal

//console.log(`o nome da pessoa é ${pessoal.nomeCompleto()}, tem ${pessoal.idade} anos, e o istagran dela é: ${pessoal.social.instagram}`)

//let {facebook: face, instagram: insta} = pessoal.social
//console.log(`o nome da pessoa é ${pessoal.nomeCompleto()} e a idade é ${pessoal.idade} anos, o facebook dela é ${
    
    /*function pegarNomeCompleto({nome='nome está vazio', sobrenome='sobrenome está vazio'}) {
        return `${nome} ${sobrenome}`
    }
    
    console.log(pegarNomeCompleto(pessoal))

    let info = ['bonieky lacerda', 'bony', 'lacerda', '@bony2020']

    let [a, b, c, d] = info
    console.log(c)

    function criar() {
        return [1, 2, 3]
    }

    let [a, b, c] = criar()

    console.log(a)

    function somar(x, y) {
        return x + y
    }
    console.log(somar(10, 5))*/

    let somando = function(x, y) {
        return x * y
    }
    console.log(somando(3, 7))

    const multiplica = (x, y) => {
        return x * y
    } 
    console.log(multiplica(10, 3))

    
    
    const divide = (x, y) => y / x

    console.log(divide(3, 15))

    const letrasNome = nome => nome.length

    console.log(letrasNome('Guilherme'))

    
    
    const numer = [1, 2, 3, 4]
    const outrosnum = [...numer, 5, 6, 7, 8]

    console.log(outrosnum)



    const info = {
        nome: 'Guilherme',
        sobrenom: 'Lopes',
        idade: 38,
        cidade: 'Gov. valadares'
    }

    const novaInfo = {
        ...info,
        estado: 'minas gerais',
        cidade: 'gov. valadares'
    }
    console.log(novaInfo)

    function adicionar(...numeros) {
        console.log(numeros)
    }
    adicionar(5, 6, 7, 8, 9)

    function adiciona(nomes, ...novosNomes) {
        const novoConjunto = [
            ...nomes,
            ...novosNomes
        ]
        return novoConjunto
    }
    const names = ['bonieky', 'paulo']
    const otrosnames = ['antonio', 'maria', 'josé']
    const outros = adiciona(names, ...otrosnames)
    //console.log(adiciona(names, ...otrosnames))
    console.log(outros)
    console.log(outros.indexOf('antonio'))

    const lakalaka = 'aoooooo'
    console.log(lakalaka.repeat(7))

    const listaaa = ['ovo', 'macarrao', 'carne', 'feijão', 'pipoca']
    console.log(Object.entries(listaaa))
    console.log(typeof(listaaa))

    const pesoales = {
        nome: 'Bonieky',
        sobrenome: 'lacerda',
        idade: 38,
        cidade: 'largatauris',
        estado: 'minas gerais'
    }
    
    console.log(Object.keys(pesoales))
    console.log(typeof(pesoales))
    console.log(Object.values(pesoales))
    console.log(Object.entries(pesoales))

    const telefone = '3415454'
    console.log(telefone.padStart(9, '*'))

    const cartao = '2569458745213589'
    const lastDigits = cartao.slice(12)
    const cartaoMascarado = lastDigits.padStart(16, '*')
    console.log(`este é o seu cartão? ${cartaoMascarado}`)

    /*function fazer() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('ok')
            }, 3000)
        })
        return promise
    }
    fazer().then((resposta) => {
        console.log(`a resposta é: ${resposta}`)
    })

    fetch('https://alunos.b7web.com.br/api/ping')

    fetch('https://alunos.b7web.com.br/api/ping')
    .then((resp) => resp.json())
    .then((json) => {
        console.log(json)
    })*/

    async function requisita2() {
        const url = 'https://alunos.b7web.com.br/api/ping'
        const params = {
            method: 'POST',
            body: JSON.stringify({
                nome: 'bonieky',
                idade: 99
            })
        }
        const r = await fetch(url, params)
        const json = await r.json()
        console.log(json)
        console.log('alguma coisa')
    }
    function Contando() {
        let numInic = Number(document.querySelector('.numeroInic').value)
        let pulando = Number(document.querySelector('.ateqto').value)
        let numFinal = Number(document.querySelector('.numFinal').value)
        let resultContador = document.querySelector('.resultContador')
        
        if (numInic === 0 || pulando === 0 || numFinal === 0) {
            alert('[ERRO] Valores incorretos')
        } else if(numFinal < numInic){
            resultContador.innerHTML = ""
            for(numInic; numInic >= numFinal; numInic -= pulando){
                resultContador.innerHTML += `-${numInic}, `
            }
            
        } else{
            resultContador.innerHTML = ""
            for(numInic; numInic <= numFinal; numInic += pulando){
                resultContador.innerHTML += `${numInic}, `
            }
            
        }
    }

    function calculandoNumeros() {
        let numeroone = Number(document.querySelector('.numeroCalcular1').value)
        let numerotwo = Number(document.querySelector('.numeroCalcular2').value)
        let operacaoMat = Number(document.querySelector('.operacaomat').value)
        let resultCalculo = document.querySelector('.resultCalculo')
        if (numeroone === 0 || numerotwo === 0) {
            alert('insira os números para calcular')
        } else{
            switch (operacaoMat) {
                case 1:
                    resultCalculo.innerHTML = `A soma de ${numeroone} + ${numerotwo} = ${numeroone + numerotwo}`
                break
            
                case 2:
                    resultCalculo.innerHTML = `A Subtração de ${numeroone} - ${numerotwo} = ${numeroone - numerotwo}` 
                break

                case 3:
                    resultCalculo.innerHTML = `A Multiplicação de ${numeroone} X ${numerotwo} = ${numeroone * numerotwo}`
                break

                case 4:
                    resultCalculo.innerHTML = `A Divisão de ${numeroone} / ${numerotwo} = ` + (numeroone / numerotwo).toFixed(2)
                break    
            }
        }
    }

    function qtdNumeros() {
        let qtdnumeros = Number(document.querySelector('.qtdnumeros').value)
        let inputenviando = document.querySelector('.inputenviando')
        inputenviando.innerHTML = ""
       for(let cont = 1; cont <= qtdnumeros; cont++){
            inputenviando.innerHTML += `<input class="enviandoNumeros${cont}" type="number" name="enviandoNumeros${cont}" placeholder="digite o ${cont}º número">`
            
       }
        
    }

    function qtde() {
        let qtdee = Number(document.querySelector('.qtde').value)
        let convert = document.querySelector('.convertendo')
        qtdee.innerHTML = ""
        for(let contt = 1; contt <= qtdee; contt++){
            convert.innerHTML += `<input class="conv${contt}" type="number" name="conv${contt}" placeholder="digite o valor"><button onclick="coverti()">ok</button>` 
        }
    }

    function converti() {
        alert(quantidadevez.value)
    }

    function verificNumAnalis() {
        let n1 = Number(document.querySelector('.n1').value)
        let n2 = Number(document.querySelector('.n2').value)
        let n3 = Number(document.querySelector('.n3').value)
        let n4 = Number(document.querySelector('.n4').value)
        let n5 = Number(document.querySelector('.n5').value)
        let resultanalis = document.querySelector('.resultAnalisValores')
        let somandU = n1 + n2 + n3 + n4 + n5
        let mediaNum = somandU / 5
        let divPorCinco = 0
        let numpares = 0
        resultanalis.innerHTML = ""
        if (n1 == 0 || n2 == 0 || n3 == 0 || n4 == 0 || n5 == 0) {
            alert('digite os números')
        } else {
        if (n1 % 5 == 0) {
            divPorCinco++ 
        }
        if (n2 % 5 == 0) {
            divPorCinco++ 
        }
        if (n3 % 5 == 0) {
            divPorCinco++ 
        }
        if (n4 % 5 == 0) {
            divPorCinco++ 
        }
        if (n5 % 5 == 0) {
            divPorCinco++ 
        }

        if (n1 % 2 == 0) {
            numpares++ 
        }
        if (n2 % 2 == 0) {
            numpares++ 
        }
        if (n3 % 2 == 0) {
            numpares++
        }
        if (n4 % 2 == 0) {
            numpares++
        }
        if (n5 % 2 == 0) {
            numpares++
        }

        resultanalis.innerHTML = `a soma dos valores é = ${somandU}<br>`
        resultanalis.innerHTML += `a média dos valores é ${mediaNum}<br>`
        resultanalis.innerHTML += ` valores digitados divisiveis por 5 são: ${divPorCinco}<br>`
        resultanalis.innerHTML += `números pares digitados foram ${numpares}`
        }
    }

    

    

    
    





