// novo recurso no ES2015

const pessoa = {
    nome: 'Rafaela',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa; //'tire de dentro do objeto o atributo 'nome' e 'idade' de 'pessoa''
console.log(nome,idade);

//ou

const {nome: nome1, idade: idade1} = pessoa;
console.log(nome1,idade1);

const { sobrenome, oi = true} = pessoa; //lembrando que 'sobrenome' não tem na variável pessoa
//console.log(sobrenome, oi); // dá erro

const { endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro,numero,cep); //Rua ABC 1000 undefined

const {conta: { ag, num}} = pessoa;
console.log(ag,num); //dá erro, não existe conta, muito menos o que existe dentro dele