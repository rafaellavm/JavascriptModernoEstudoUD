//estratégia 1 pra gerar valor padrão
function soma1(a,b,c){
    console.log("a = ", a);
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a+b+c;
}

//console.log(soma1(), soma1(3), soma1(1,2,3)); // 3  5  6
//console.log(soma1(0,0,0)); //retorna 3

//estratégia 2 pra gerar valor padrão

function soma2(a,b,c){
    console.log("a = ", a, "b = ", b);

    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;  // dentro de argumentos existe parametro de índice 1? 
    c = isNaN(c)? 1 : c;

    return a+b+c;

}

//console.log(soma2(),soma2(3),soma2(1,2,3), soma2(0,0,0));// 3  5  6  0//

//valor padrao do e32015

function soma3(a = 1, b = 1, c = 1){
    return a+b+c;
}

console.log(soma3(1,1,1), soma3(0,0,0));