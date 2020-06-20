function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final') // quando não coloca as chaves ele associa a primeira sentença de código ao 'if'
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
} // não usar ';' na definição de estruturas de controle

teste2(6)
teste2(8)