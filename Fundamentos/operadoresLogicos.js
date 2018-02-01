function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); //bitwise

    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; //operador unário

    return{comprarSorvete: comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}; //duas formas de fazer

}

//console.log(compras(true, true));
console.log(compras(true, false));