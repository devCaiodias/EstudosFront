function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'bomdia.jpeg'
        document.body.style.background = '#F2C12E'        
    }else if (hora >= 12 && hora < 18) {
        img.src = 'boatarde.jpeg'
        document.body.style.background = '#F2AE30'        
    }else {
        img.src = 'boanoite.jpeg'
        document.body.style.background = '#024959'        
        // boa noite
    }
}
