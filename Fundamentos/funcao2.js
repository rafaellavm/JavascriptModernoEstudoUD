//Armazenando uma função em uma variável
const imprimirSoma = function(a,b){ //função anônima = função sem nome
    console.log(a+b);
}

imprimirSoma(2,3);

//Armazenando uma função arrow em uma variável. Conceito novo que apareceu no ES5

const soma = (a,b) => {
    return a + b;
}

console.log(soma(10,11));

//retorno implícito

const subtracao = (a,b) => a - b; //quando não tem a chave é porque a função só tem uma sentença de código (uma linha)

console.log(subtracao(22,6)); 

const imprimir2 = a => console.log(a);

imprimir2('legal');