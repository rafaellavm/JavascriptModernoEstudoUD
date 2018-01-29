function rand({min = 0, max = 1000}){
    const valor = Math.random() * [max - min] + min;
    //console.log('random = ', valor );
    return Math.floor(valor); //A função Math.floor(x) retorna o menor número inteiro dentre o número "x". // Ex: Math.floor(-45.95); // -46
}

const obj = {max: 50, min: 40};
console.log(rand(obj));

console.log(rand({min: 955}));
console.log(rand({}));

//console.log(rand()); //dá erro