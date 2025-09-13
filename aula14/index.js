/* Nesta aula foi explicado melhor sobre strings como a utilização da \ para "escapar" caracteres especiais. Também foi explicado que strings são indexadas ou seja cada caractere tem um índice começando do 0. Também é possivel acessar um caractere específico de uma string utilizando colchetes e o índice do caractere desejado exemplo: let nome = 'Lucas' console.log(nome[0]) // L 
*/
// indice        0123456789 
let umaString = "Lucas Noronha Alves";

// pegando um indice específico da string
console.log(umaString[4]); // maneira de pegar apenas o indice 4 da string
console.log(umaString.charAt(6)); // outra maneira de pegar o indice 6 da string

// concatenando strings
console.log(umaString.concat(' em um lindo dia')); // maneira de concatenar uma string com outra
console.log(umaString + ' em um lindo dia'); // outra maneira de concatenar uma string com outra
console.log(`${umaString} em um lindo dia`); // outra maneira de concatenar uma string com outra

// pesqeuisando um indice específico de uma string
console.log(umaString.indexOf('Lucas')); // retorna o indice onde começa a palavra 'texto'
console.log(umaString.indexOf('o', 3)); // retorna o indice onde começa a letra 'o' a partir do indice 3
console.log(umaString.lastIndexOf('o')); // retorna o indice onde começa a letra 'o' começando do final da string

// expressões regulares
console.log(umaString.match(/[a-z]/g)); // retorna um array com todas as letras minusculas da string
console.log(umaString.match(/[a-z]/)); // retorna a primeira letra minuscula da string
console.log(umaString.search(/x/)); // retorna o indice onde começa a letra 'x'
console.log(umaString.replace('u', '#')); // substitui a palavra 'Um' por 'Outra'
console.log(umaString.replace(/a/g, 'A')); // substitui todas as letras 't' por 'T'

// extraindo partes de uma string
console.log(umaString.length); // retorna o tamanho da string
console.log(umaString.slice(3, 6)); // retorna a string do indice 3 ao 5 (o 6 não é incluso)
console.log(umaString.slice(-3)); // retorna os últimos 3 caracteres da string
console.log(umaString.slice(-5, -1)); // retorna os caracteres do 5º ao 2º (o -1 não é incluso
console.log(umaString.substring(umaString.length - 5)); // retorna os últimos 5 caracteres da string
console.log(umaString.substring(2, 6)); // retorna a string do indice 2 ao 5 (o 6 não é incluso)

// dividindo uma string
console.log(umaString.split(' ')); // divide a string em um array de strings utilizando o espaço como separador
console.log(umaString.split('a')); // divide a string em um array de strings utilizando a letra 'a' como separador
console.log(umaString.split('')); // divide a string em um array de caracteres

// transformando uma string
console.log(umaString.toUpperCase()); // transforma a string em maiúscula
console.log(umaString.toLowerCase()); // transforma a string em minúscula
console.log(umaString.trim()); // remove os espaços em branco do início e do fim da string
console.log(umaString.normalize('NFD').replace(/[\u0300-\u036f]/g, '')); // remove os acentos da string
console.log(umaString.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()); // remove os acentos e transforma a string em minúscula
console.log(umaString.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase()); // remove os acentos e transforma a string em maiúscula

// repetindo uma string
console.log(umaString.repeat(3)); // repete a string 3 vezes
console.log(`${umaString} `.repeat(3)); // repete a string 3 vezes com um espaço no final