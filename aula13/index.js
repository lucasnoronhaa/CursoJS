// Excercicio 1 - Troca de Valores
// Crie três variáveis, varA, varB e varC e atribua os valores A, B e C a elas respectivamente.
// Em seguida, troque os valores delas, de forma que varA passe a ter o valor de B, varB passe a ter o valor de C e varC passe a ter o valor de A.
// Ao final, exiba os valores trocados no console.

let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);