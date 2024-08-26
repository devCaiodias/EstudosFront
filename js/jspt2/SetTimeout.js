
setTimeout(() => {
    console.log('Espere 3 seg');
}, 3000)

let contador = 10;

const intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador === 0) {
        clearInterval(intervalo);
        console.log('Contagem Regressica concluida..')
    }
}, 1000)

