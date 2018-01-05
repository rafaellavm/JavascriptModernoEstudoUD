let isAtivo = false;

console.log(isAtivo);

isAtivo = true;

console.log(isAtivo);

isAtivo = 1;

console.log(!!isAtivo); //assim mostra q o resultado é verdadeiro. 1 é verdadeiro

console.log('os verdadeiros...');
console.log(!!3); //forçando pra verdadeiro ou falso. verdadeiro
console.log(!!-1); //verdadeiro
console.log(!!' '); //verdadeiroc
console.log(!!{}); //verdadeiro
console.log(!!Infinity); //verdadeiro
console.log(!!(isAtivo = true)); //verdadeiro

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar... ');
console.log(!!('' || null || 0 || 'epa' || 123)); //verdadeiro // retorna o PRIMEIRO (o 123 tb é verdadeiro) valor verdadeiro q ele encontrou: 'epa'

let  nome = ''; //se colocasse 'Lucas' ele retornaria 'Lucas' primeiro
console.log(nome || 'Desconhecido'); // o 'nome' deu falso, então ele retorna o 'Desconhecido'

