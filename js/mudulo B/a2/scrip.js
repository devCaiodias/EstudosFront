function tabuada() {
    var numero = document.getElementById('in')
    var tab = document.getElementById('itabu')
    
    if (numero.value.length == 0){
        alert('Por favor, digite um numero')
    }else{
        let n = Number(numero.value)
        tab.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${i} X ${n} = ${n*i}`
            tab.appendChild(item)
        }
    }
}