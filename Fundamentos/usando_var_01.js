{{{{var sera = 'Será???';}}}}

console.log(sera); //consegue ser acessado

//----------------------------------------

function teste(){
    var local = 123; //declarada dentro da função não pode ser acessada fora dela
}

//teste();
//console.log(local); //d´erro, não está dentro do escopo
//evitar criar variáveis globais sem necessidade pois seu valor pode ser mudado facilmente