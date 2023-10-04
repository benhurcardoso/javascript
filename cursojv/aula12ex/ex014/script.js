function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#b7855c'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE! 
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#ddc5a3'
    } else {
        // BOA NOITE!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#c089b1'
    }
}

