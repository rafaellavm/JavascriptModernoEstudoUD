const peso1 = 1.0; //1.1 seria um valor falso
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 + peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2)); //(2) = > número de casas decimais que eu quero q ele imprima
console.log(media.toString());
console.log(media.toString(2)); //transformar media em string em valor binário
console.log(typeof media);
console.log(typeof Number);
