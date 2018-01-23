//par nome valor

const saudacao = 'Opa'; //contexto léxico: é o local no qual sua variável foi definida fisicamente no código

function exec(){

    const saudacao = 'Falaaa'; //outro contexto léxico
    return saudacao;
    //como saudacao estão em contextos diferentes não gera conflito
    //se fosse o var sobrescrevia o valor
}

//objetos são grupos alinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 38,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 123
    }
}

console.log(saudacao); //Opaa
console.log(exec()); //Falaaa
console.log(cliente); //imoprime o objeto