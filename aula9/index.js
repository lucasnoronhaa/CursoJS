// Aula Let vs Var - Primeira diferença
/* Basicamente explica que não é recomendado o uso de var, e sim let
* Pois o var tem um escopo de função, ou seja, se você criar uma variavel com var dentro de um bloco
* Ela estará disponível fora do bloco, o que pode gerar erros no código
* Já o let tem escopo de bloco, ou seja, se você criar uma variavel com let dentro de um bloco
* Ela não estará disponível fora do bloco, evitando assim possíveis erros no código
* Exemplo:
*/

{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // A variavel sera está disponível fora do bloco

{
    {
        {
            {
                let sera2 = 'Será???'
                console.log(sera2)
            }
        }
    }
}
//console.log(sera2) // A variavel sera2 não está disponível fora do bloco, gerando um erro