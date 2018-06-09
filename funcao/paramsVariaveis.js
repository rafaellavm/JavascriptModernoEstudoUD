function soma(){

    let soma = 0;

    //pega o índice de cada argumento. Os argumentos são os parametros
    for(i in arguments){
        soma+= arguments[i];
    }

    return soma;
}

console.log(soma()); //0
console.log(soma(1)); //1
console.log(soma(1,2,3)); //6