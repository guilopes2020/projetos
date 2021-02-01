
function carregar() {
    var mensagHora = document.getElementById('msg')
    var imag = document.getElementById('imagem')
    var saudacao = document.getElementById('saudac')
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    var tit_pag = document.getElementById('tit_pag')
    var msg_footer = document.getElementById('footer')
    mensagHora.innerHTML = `Agora são ${hora}:${minut}hs`
    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = 'Bom dia!'
        imag.src = 'images/fotomanha.png'
        document.body.style.backgroundColor = '#e9bd5b'
        saudacao.style.backgroundColor = '#e9bd5b'
        tit_pag.style.color = '#000000'
        msg_footer.style.color = '#000000'
        } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = 'Boa tarde!'
        imag.src = 'images/fototarde.png'
        document.body.style.backgroundColor = '#55421f'
        saudacao.style.backgroundColor = '#55421f'  
    } else {
        saudacao.innerHTML = 'Boa noite!'
        imag.src = 'images/fotonoite.png'
        document.body.style.backgroundColor = '#000000'
        saudacao.style.backgroundColor = '#000000'
        saudacao.style.color = '#ffffff'   
    }
}

function idadesexo() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var anonasc = document.getElementById('txtano')
    result_text = document.getElementById('resul_idade_sexo')

    if (anonasc.value.length == 0 || anonasc.value > ano) {
        alert('[ERRO!] Verifique os dados e tente noamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - anonasc.value
        var genero = ''
        var imgg = document.getElementById('fotoidade')
        imgg.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                imgg.src = 'images/menino.png'
                result_text.innerHTML = `Detectamos um ${genero} (menino) com ${idade} anos.`
            } else if (idade > 12 && idade <= 21) {
                imgg.src = 'images/jovem_homem.png'
                result_text.innerHTML = `Detectamos um ${genero} jovem com ${idade} anos.`
            } else if (idade > 21 && idade <= 50) {
                imgg.src = 'images/jovem_homem.png'
                result_text.innerHTML = `Detectamos um ${genero} adulto com ${idade} anos.`
            } else {
                imgg.src = 'images/homem_idoso.png'
                result_text.innerHTML = `Detectamos um ${genero} idoso com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                imgg.src = 'images/menina.png'
                result_text.innerHTML = `Detectamos uma ${genero}(menina) com ${idade} anos.`
                } else if (idade > 12 && idade <= 21) {
                imgg.src = 'images/jovem_mulher.png'
                result_text.innerHTML = `Detectamos uma ${genero} Jovem com ${idade} anos.`
                result_text.style.color = 'red'
            } else if (idade > 21 && idade <= 50) {
                imgg.src = 'images/jovem_mulher.png'
                result_text.innerHTML = `Detectamos uma ${genero} adulta com ${idade} anos.`
            } else {
                imgg.src = 'images/mulher_idosa.png'
                result_text.innerHTML = `Detectamos uma ${genero} idosa com ${idade} anos.`
            }
        }
        result_text.style.textAlign = 'center'
        
        
    }
    
}



var c = 1
var result = document.getElementById('enqto')

do {
    result.innerHTML += `<br>${c}`
    c++
} while (c <= 10 );


while (c <= 10) {
    result.innerHTML += `<br>${c}`
    c++ 
}

for (c = 1; c <= 10; c += 2) {
    result.innerHTML += `<br>${c}`
    
}

result.style.color = '#ffffff'


