//arrays em javascript aceita múltiplos valores, até por ser fracamente tipada
//é dinâmico, cresce e diminui
const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log('tamanho do array: ' + valores.length);

//se eu tentar um índice que não existe ele não dá errado, ele retorna como 'undefined'
console.log(valores[4]);

//posso atribuir depois:

valores[4] = 10;
console.log(valores[4]);
console.log('array: ' + valores);
console.log('tamanho do array: ' + valores.length);

//outra forma de adicionar um elemento com vários tipos diferentes:
valores.push({id: 3}, false, null, 'teste');
console.log('array: ' + valores);
console.log('tamanho do array: ' + valores.length);

//.pop() => retorna o último valor do array
console.log('retorna o último valor do array: ' + valores.pop());

//delete: caso eu deseje deletar um valor de um array:
delete valores[1];
console.log('array: ' + valores);

//dando um typeof no array ele retorna o tipo Object (ele é um objeto):
console.log(typeof valores);



