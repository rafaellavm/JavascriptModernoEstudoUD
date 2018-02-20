const imprimirResultado = function (nota) {

    switch (Math.floor(nota)) { //arredonda a nota

        case 10: //pula esse
        case 9:
            console.log("Quadro de honra");
            break; //se não colocar o break ele vai passar por todos os cases
        case 8: case 7:
            console.log("Aprovado");
            break;
        case 6: case 5: case 4:
            console.log("Recuperação");
            break;
        case 3: case 4: case 2: case 1: case 0:
            console.log("Reprovado");
            break;
        default:
            console.log("Nota inválida");
    }

    console.log("Fim");
}

//imprimirResultado(10);
//imprimirResultado(8.9);
///imprimirResultado(6.55);
//imprimirResultado(2.3); //nota inválida
//imprimirResultado(-1);
//imprimirResultado(11);
imprimirResultado(3);