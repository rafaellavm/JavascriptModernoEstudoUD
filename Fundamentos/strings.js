const escola = 'Coder';

console.log(escola.charAt(4)); //traz o [4] string = 'r'
console.log(escola.charAt(5)); //não tem o valor [5] retorna vazio
console.log(escola.charCodeAt(3)); //retorna o valor ASCII do número 3 = 51
console.log(escola.indexOf('o')); //retorna valor do índice do valor 'e' = 1 (array)

console.log(escola.substring(1)); //retorna 'oder'
console.log(escola.substring(0,3)); //Cod - indo do valor 0 contanto 3 casas

console.log('Escola '.concat(escola).concat('!')); //Escolacoder!
console.log('3' + 2);

console.log(escola.replace('o','0')); //C0der

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array
