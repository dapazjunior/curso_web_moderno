const valores = [7.7 , 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10 // adiciona valor ao índice 4
console.log(valores)

// valores[10] = 10 - colocar que há itens vazios
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o último elemento
delete valores[0] // retira um elemento no caso com indice 0
console.log(valores)

console.log(typeof valores) // array é do tipo 'object'