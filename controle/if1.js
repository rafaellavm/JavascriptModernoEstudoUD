function soBoaNoticia(nota){

    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
}

//soBoaNoticia(8.1);
//soBoaNoticia(6.1);

function soForVerdadeEuFalo(valor){

    if(valor){
        console.log('É verdade... ' + valor);
    }
}

//soForVerdadeEuFalo(); //false
//soForVerdadeEuFalo(null);//false
//soForVerdadeEuFalo(undefined); //false
//soForVerdadeEuFalo(NaN); //not a number //false
//soForVerdadeEuFalo(''); //false
//soForVerdadeEuFalo(0); //false

//soForVerdadeEuFalo(-1); //true
//soForVerdadeEuFalo(' '); //true
//soForVerdadeEuFalo('?'); //true
//soForVerdadeEuFalo([]); //true
//soForVerdadeEuFalo([1,2]); //true
//soForVerdadeEuFalo({}); //true