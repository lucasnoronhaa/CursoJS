/* Aula explicando sobre operadores aritméticos de atribuição e incremento/decremento
* Operadores de atribuição: =, +=, -=, *=, /=, %=, **=
* Operadores de incremento/decremento: ++, --
// Operadores de atribuição e incremento/decremento
* Exemplo:
const num1 = 10;
let num2 = 10;

num2 += num1; // num2 = num2 + num1
console.log(num2);

num2 -= num1; // num2 = num2 - num1
console.log(num2);

num2 *= num1; // num2 = num2 * num1
console.log(num2);

num2 /= num1; // num2 = num2 / num1
console.log(num2);

num2 %= num1; // num2 = num2 % num1
console.log(num2);

num2 **= num1; // num2 = num2 ** num1
console.log(num2);

num2++; // num2 = num2 + 1
console.log(num2);

num2--; // num2 = num2 - 1
console.log(num2);
*/
/* NaN -> Not a Number (Não é um número) | Exemplo:
const num1 = 10;
const num2 = 'Lucas';
console.log(num1 * num2); // Retorna NaN, pois não é possível multiplicar um número por uma string
// Infinity -> Infinito | Exemplo:
const num3 = 10;
const num4 = 0;
console.log(num3 / num4); // Retorna Infinity, pois não é possível dividir um número por zero
parseInt() -> Converte uma string para um número inteiro | Exemplo:
const num5 = '5';
console.log(parseInt(num5)); // Retorna 5, que é um número inteiro
parseFloat() -> Converte uma string para um número decimal | Exemplo:
const num6 = '5.5';
console.log(parseFloat(num6)); // Retorna 5.5, que é um número decimal
Number() -> Converte uma string para um número (inteiro ou decimal) | Exemplo:
const num7 = '10';
const num8 = '10.5';
console.log(Number(num7)); // Retorna 10, que é um número inteiro
console.log(Number(num8)); // Retorna 10.5, que é um número decimal
.toString() -> Converte um número para uma string | Exemplo:
const num9 = 10;
console.log(num9.toString()); // Retorna '10', que é uma string
.toFixed() -> Formata um número com um número específico de casas decimais | Exemplo:
const num10 = 10.123456;
console.log(num10.toFixed(2)); // Retorna '10.12', que é uma string com 2 casas decimais
*/