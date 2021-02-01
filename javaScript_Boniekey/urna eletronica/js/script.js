let seuVotoPara = document.querySelector('div.votopara span')
let candidato = document.querySelector('div.candidato span')
let infCandidato = document.querySelector('div.inf-candidato')
let avisos = document.querySelector('div.avisos')
let lateralFotos= document.querySelector('div.divisao-1-right')
let numCandidatos = document.querySelector('div.num-candidato')
let msgFinal = document.querySelector('div.tela')
let somFinal = document.querySelector('audio.audiofim')
let somTecla = document.querySelector('audio.clique')
let audioFimVoto = document.querySelector('audio.fimVoto')

let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = []

function comecarEtapa() {
    numCandidatos.style.display = 'block'
    seuVotoPara.style.display = 'inline'
    let etapa = etapas[etapaAtual]
    let numeroHtml = ''
    numero = ''
    votoBranco = false

    for(let i = 0; i < etapa.numeros; i++) {
        if (i === 0) {
            numeroHtml += '<div class="numero pisca"></div>'
        } else {
        numeroHtml+= '<div class="numero"></div>'
        }
    }

    
    candidato.innerHTML = etapa.titulo
    infCandidato.innerHTML = ''
    avisos.style.display = 'none'
    lateralFotos.innerHTML = ''
    numCandidatos.innerHTML = numeroHtml
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item) => {
        if (item.numero === numero) {
            return true
        } else {
            return false
        }
    })
    if (candidato.length > 0) {
        candidato = candidato[0]
        avisos.style.display = 'block'
        infCandidato.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`

        let fotosHtml = ''
        for(let i in candidato.fotos) {
            if (candidato.fotos[i].small === true) {
                fotosHtml += `<div class="foto-candit small">
            <img src="images/${candidato.fotos[i].url}">
            ${candidato.fotos[i].legenda}
            </div>`
            } else {
                fotosHtml += `<div class="foto-candit">
            <img src="images/${candidato.fotos[i].url}">
            ${candidato.fotos[i].legenda}
            </div>`
            }
            
        }
        lateralFotos.innerHTML = fotosHtml
    } else {
        avisos.style.display = 'block'
        infCandidato.innerHTML = `<div class="aviso-grande pisca">VOTO NULO</div>`
    }
}

function clicou(n) {
    let elNumero = document.querySelector('div.numero.pisca')
    if (elNumero !== null) {
        elNumero.innerHTML = n
        somTecla.currentTime = 0.2
        somTecla.play()
        numero = `${numero}${n}`
        elNumero.classList.remove('pisca')
        if (elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
        
    }
}
seuVotoPara.style.display = 'none'

function branco() {
    if (numero === '') {
        somTecla.currentTime = 0.2
        somTecla.play()
        votoBranco = true
        avisos.style.display = 'block'
        numero = ''
        numCandidatos.style.display = 'none'
        infCandidato.innerHTML = `<div class="aviso-grande pisca">VOTO EM BRANCO</div>`
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
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
            
        })
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        })
    }
    if (votoConfirmado === true) {
        etapaAtual++
        if (etapas[etapaAtual] !== undefined) {
            audioFimVoto.currentTime = 0.2
            audioFimVoto.play()
            comecarEtapa()
        } else {
            msgFinal.innerHTML = `<div class="msgFinal pisca">FIM</div>`
            somFinal.currentTime = 0.2
            somFinal.play()
            console.log(votos)
        }
    }
}
comecarEtapa()