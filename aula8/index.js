/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924
*/

const nome = 'Lucas Noronha';
const sobrenome = 'Alves';
const idade = 28;
const peso = 108;
const alturaEmM = 1.78;
let imc;
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2025 - idade;

/* Resolução utilizando concatenação de strings 
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc);
console.log(nome + ' nasceu em ' + anoNascimento);
*/

// Resolução utilizando template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);