console.log(typeof console); //object

console.log(Math.ceil(6.1)); //'arredondar pra cima' 7

const obj1 = {};

obj1.nome = 'Bola1'; //ou
//obj1['nome'] = 'Bola2';

console.log(obj1.nome);

function Obj(nome){

    this.nome = nome; //se fosse var não poderia ser visto fora da função
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2);
console.log(obj3);