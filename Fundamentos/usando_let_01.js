var numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero); // dentro = 2; Ele vai procurar a primeira variável com o nome.
}
console.log('fora = ', numero); //fora = 1;

// as variáveis têm o mesmo nome, mas estão em escopos diferentes, então funciona

// variáveis definidas como 'var' tem escopo global e de função

// variáveis definidas como 'let' tem escopo global, de função e de bloco
