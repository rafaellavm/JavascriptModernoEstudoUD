function tratarErroELancar(erro){
    //throw new Error('Ocorreu um erro de processamento!');

    //throw 10; //lançou um erro

    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){

    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch(e){
        tratarErroELancar(e);
    }
    finally{ //sempre será executado, com erro ou não
        console.log('final');
    }
    
}

const obj = {nome: 'Rafaela'};

imprimirNomeGritado(obj);