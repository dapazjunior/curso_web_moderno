const escola = 'Cod3r'

console.log(escola.charAt(4)) // pega um caractere na string
console.log(escola.charAt(5)) // não dá erro, retorna um valor vazio
console.log(escola.charCodeAt(3)) // pega o código Unicode do caractere
console.log(escola.indexOf('3')) // pega o índice da string

console.log(escola.substring(1)) // passando o índice inicial
console.log(escola.substring(0, 3)) // passsando índice inicial e final; não inclui o índice final

console.log('Escola '.concat(escola).concat("!")) // concatenação
console.log('Escola ' + escola + "!") // concatenação com '+' 
console.log(escola.replace(3, 'e')) // substituição
console.log(escola.replace(/\d/, 'e')) // /\d/ -> substitua todos os dígitos dentro do texto por 'e' (sub 3) <- RegExp


console.log('Ana,Maria,Pedro'.split(','))