//função sem retorno

function imprimirSoma(a,b){
    //console.log(a+b);
}

/*console.log(imprimirSoma(2,3));
console.log(imprimirSoma(2));
console.log(imprimirSoma(2,3,5,6)); //vai pegar os dois primeiros,vai somar e o resto ignorar
console.log(imprimirSoma()); */

//não precisa passar exatamente todos os parâmetros como nas outras linguagens

//função com retorno
function soma(a=1, b=1){ //b=0 valor padrão que veio com ES5
    return a + b;
}

/*console.log(soma(2,3)); //5:  soma os dois valores
console.log(soma(2)); //3:  soma os dois valores, mas coloca o '3' no lugar do 'a'
console.log(soma()); //2:  soma os dois valores*/

//função com retorno 2
function soma(a, b=1){ //b=0 valor padrão que veio com ES5
    return a + b;
}

console.log(soma(2,3)); //5:  soma os dois valores
console.log(soma(2)); //3:  soma os dois valores, mas coloca o '3' no lugar do 'a'
console.log(soma()); //NaN