let contador = 1 //contador
while(contador <= 10) { //expressão
    console.log(`contador = ${contador}`)
    contador++ // incremento
}

for(let i = 1/*contador*/; i <= 10/*expressão*/; i++/*incremento*/) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}