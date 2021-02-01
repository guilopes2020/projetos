let seuVotoPara = document.querySelector('.parte-cima-left-1 span')
let cargo = document.querySelector('.parte-cima-left-2')
let descricao = document.querySelector('.parte-cima-left-4')
let aviso = document.querySelector('.parte-baixo')
let lateral = document.querySelector('.parte-cima-right')
let numeros = document.querySelector('.parte-cima-left-3')
let somFinal = document.querySelector('audio.audiofim')
let somTecla = document.querySelector('audio.clique')
let audioFimVoto = document.querySelector('audio.fimVoto')
let votos = []

let etapaAtual = 0
let numero = ""
let votoBranco = false

function comecarEtapa() {
    let etapa = etapas[etapaAtual]
    let numeroHtml = ""
    numero = ""
    votoBranco = false

    for(let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
            numeroHtml += '<div class="numero"></div>'
        }
    }

    //seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ""
    aviso.style.display = 'none'
    lateral.innerHTML = ""
    numeros.innerHTML = numeroHtml
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true
        } else {
            return false
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        aviso.style.display = 'block'
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`

        let fotosHtml = ""
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="parte-cima-right-image">
            <img src="images/${candidato.fotos[i].url}" alt="">
            ${candidato.fotos[i].legenda}
        </div>`
        }
        lateral.innerHTML = fotosHtml
    } else {
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO NULO</div>'
    }
}

function clicou(n) {
    let elnumero = document.querySelector('.numero.pisca')
    if (elnumero !== null) {
        elnumero.innerHTML = n
        somTecla.currentTime = 0.2
        somTecla.play()
        numero = `${numero}${n}`
        elnumero.classList.remove('pisca')
        if (elnumero.nextElementSibling !== null) {
            elnumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
        
    }
}

function branco() {
    if (numero === "") {
        votoBranco = true
        somTecla.currentTime = 0.2
        somTecla.play()
        aviso.style.display = 'block'
        numeros.innerHTML = ""
        descricao.innerHTML = '<div class="aviso-grande pisca">VOTO EM BRANCO</div>'
    }
}

function corrige() {
    somTecla.currentTime = 0.2
    somTecla.play()
    comecarEtapa()
}

function confirma() {
    somTecla.currentTime = 0.2
    somTecla.play()
    let etapa = etapas[etapaAtual]
    let votoConfirmado = false

    if (votoBranco === true) {
        votoConfirmado = true
        votos.push(
            {
                etapa: etapas[etapaAtual].titulo,
                voto: 'branco'
            }
        )
        //console.log("confirmando voto em BRANCO...")
    } else if (numero.length === etapa.numeros) {
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
        //console.log(`confirmando voto para ${numero}`)
    }
    if (votoConfirmado) {
        etapaAtual++
        if (etapas[etapaAtual] !== undefined) {
            audioFimVoto.currentTime = 0.2
            audioFimVoto.play()
            comecarEtapa()
        } else {
            somFinal.currentTime = 0.2
            somFinal.play()
            console.log(votos)
            document.querySelector('.tela').innerHTML = '<div class="pisca fim">FIM</div>'
        }
    }
}

comecarEtapa()