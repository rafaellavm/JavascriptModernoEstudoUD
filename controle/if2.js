function teste1(num) {
    if (num > 7)
        console.log(num); //está associada ao bloco if (não tem chaves)
    console.log('Final'); //não está associada ao bloc if

}

//teste1(6);
//teste1(8);

function teste2(num) {
    if (num > 7); //sentença de código vazia
    {
        console.log(num);
    }
}

teste2(6);
teste2(8);