function rand([min = 0, max = 1000]){

    if(min > max) [min,max] = [max,min] //criando um array;

    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

console.log(rand([50,40]));
console.log(rand([992])); // seria o mínimo
console.log(rand([,10])); // seria o máximo
console.log(rand([])); // fica entre 0 e 1000
console.log(rand()); // DÁ ERRO