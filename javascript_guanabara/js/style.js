/*var p1 = document.getElementsByTagName('p')[0]
var p2 = document.getElementsByTagName('p')[1]
var corpo = document.body
var d = document.getElementsByClassName('n1')[0]

document.write(`no primeiro paragrafo está escroto assim: ${p1.innerText}<br>`)
document.write(`no paragrafo 2 esta escrito assim: ${p2.innerHTML}`)
corpo.style.background = 'blue'
p1.style.color = 'white'
p2.style.color = 'orange'
document.querySelector('div.n1').style.background = 'green'
document.querySelector('div.n1').innerText = 'estou aguardando...'*/

var a = document.querySelector('div.area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerText = 'entrou!'
}

function sair() {
    a.innerText = 'saiu!'
    a.style.background = 'green'
}

function somar() {
    var tn1 = document.querySelector('input.txtn1')
    var tn2 = document.querySelector('input.txtn2')
    var res = document.querySelector('div.res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    res.innerHTML = `a soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}

function veloc() {
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var veldig = document.querySelector('input.velocidade')
    var resultvel = document.querySelector('p.result')
    var diasem = agora.getDay()
    var dia = ""

    switch (diasem) {
        case 0:
            dia = 'domingo'
            break
        case 1:
            dia = 'segunda'
            break
        case 2:
            dia = 'terça'
            break
        case 3:
            dia = 'quarta'
            break
        case 4:
            dia = 'quinta'
            break
        case 5:
            dia = 'sexta'
            break
        case 6:
            dia = 'sábado'
            break
        default:
            dia = '[ERRO] Valor inválido!'
            break;
    }

    if (veldig.value == 0 || veldig.value == "") {
        alert('digite uma velocidade!')
        
    }  else if (veldig.value <= 75) {
        resultvel.innerText = `agora são ${hora}:${minutos}hs, de ${dia}, ok! você passou a ${veldig.value} KM/h, está dentro do limite, boa viajem!`

    } else {
        resultvel.innerText = ` agora são ${hora}:${minutos}hs, de ${dia}, você passou a ${veldig.value} KM/h, você está multado! `
    }
    
    
}

