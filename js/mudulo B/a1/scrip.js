function contar() {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('if')
    var passo = document.getElementById('ip')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) {
        // window.alert('ERRO faltam dados.')
        res.innerHTML = 'Impossivel contar!'
    }
    else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            alert('Passo invalido, considerando que ele vale 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👑 `
            }
            res.innerHTML += '💤'  
        }
        else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👑 `
            }
            res.innerHTML += '💤'  
        }
            
        }
        
    }
