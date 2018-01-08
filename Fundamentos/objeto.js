//um par de chaves representa um objeto
//um objeto é uma coleção de chaves e valores
const prod1 = {};
prod1.nome = 'Celular ultra mega';
prod1.preco = 4890.90;

//pode ter espaços
prod1['Desconto legal'] = 0.40; //evitar atributos com espaço, mas pode usar

console.log('produto 1: ' , prod1);

console.log('--------------------------------------');

//outra forma de declarar:
const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blablabla: 1,
        obj: {  //posso ter somente um atributo com mesmo nome dentro de um objeto
            oi: 20
        }
    }
}

prod2['Desconto'] = 30;

console.log('produto 2: ' , prod2);

//NÃO É A MESMA COISA QUE JSON!
//json é texto, objeto é um elemento com atributos e chaves
//JSON:

//'{"nome": "Camisa polo", "preco": 79.90}'