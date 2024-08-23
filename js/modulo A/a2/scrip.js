function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var iAno = document.getElementById('iano')
    var res = document.getElementById('res')
    
    if (iAno.value.length == 0 || iAno.value > ano) {
        window.alert(`[Erro]`)
    }
    else {
        var iSexo  = document.getElementsByName('sx')
        var idade = ano - Number(iAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (iSexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //  Criança
                img.setAttribute('src', `crianca.jpeg`)
            } else if (idade < 40) {
                // Homem
                img.setAttribute('src', 'adolecentem.jpeg')
            }
            else {
                img.setAttribute('src', 'velhom.jpeg')
                
                // velho
            }
            
        }else if (iSexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //  Criança
                img.setAttribute('src', `criancaf.jpeg`)
            } else if (idade < 40) {
                // Mulher
                img.setAttribute('src', 'adolecentef.jpeg')
            }
            else {
                // velha
                img.setAttribute('src', 'velhaf.jpeg')
            }
        }
        
        res.innerHTML = `Detectando ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}