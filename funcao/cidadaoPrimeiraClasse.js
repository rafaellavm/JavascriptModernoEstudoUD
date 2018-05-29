//criar na forma literal
function func1(){}

//armazenar em uma variável
var func2 = function(){return "opa"} //função anônima

//armazenar em um array
const array = [function(a,b){return a+b;}, func1, func2];
//console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function(){return "olá"};
//console.log(obj.falar());

//passar função como parâmetro
function run(func){
    func();
}
//run(function(){console.log('Executando...')})

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}
//soma(2,3)(4);
const cincoMais = soma(2,3);
cincoMais(4);
