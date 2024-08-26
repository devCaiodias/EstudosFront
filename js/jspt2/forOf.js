// forOF

const numero = [1,2,3,45,5]

for (const numeros of numero) {
    console.log(numeros)
}

// For in

const pessoa = {
    nome: 'Caio',
    idade: 56,
    profissão: 'dev'
}

for (const propriedade in pessoa) {
    console.log(propriedade + ': ' + pessoa[propriedade])
}



// forEach

const numeross = [1,2,5,6,9,8,7]

numeross.forEach(function(numero){
    console.log(numero)
})