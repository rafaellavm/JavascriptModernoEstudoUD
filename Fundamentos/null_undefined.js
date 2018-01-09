let valor; //não inicializada
console.log(valor); //undefined. Porque não foi inicializada

//console.log(valor2); //is not defined. Porque nem foi declarado

valor = null; //ausência de valor. Não está apontando pra nenhum objeto na memória// Sempre usar quando quiser zerar uma variável
console.log(valor);
//console.log(valor.toString()); //dá erro

const produto = {};
console.log(produto.preco); //undefined
console.log(produto); //{}

produto.preco = 3;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco); //false
console.log(produto); //{preco: undefined}

produto.preco = null; //sem preco
console.log(!!produto.preco); //false

console.log(produto); //{preco: null}