let num1 = 1;
let num2 = 2;

num1++;
//console.log(num1);

--num1;
//console.log(num1);

console.log('num1 = ', num1, ' num2 = ', num2);
console.log(++num1 === num2--); // true porque o num1 varia antes de chegar à igualdade
console.log(num1 === num2);