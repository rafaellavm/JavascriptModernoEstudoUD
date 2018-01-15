var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora = ', numero); // dentro = 2; fora = 2 // Funciona sobrescrevendo o valor. Pois está dentro do escopo.

//pode existir duas variáveis iguais desde que estejam em escopos diferentes
//evite escopos globais

