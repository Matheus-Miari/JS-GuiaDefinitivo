//Uma função é um bloco de código JavaScript nomeado e 
// parametrizado que você define uma vez e, 
// então, pode chamar repetidamente.

let y = 3 

function plus1(x) {         //Define uma função chamada "plus1", com o parâmetro "x"
    return x+1;             // Retorna um valor uma unidade maior do que o que foi passado
}                           // As funções são incluídas entre chaves


// console.log(plus1(y)); // => 4: y é 3; portanto, essa chamada retorna 3+1


var square = function(x) {              // As funcoes sao valores e podem ser atribuidas a variaveis
    return x*x;                         // Calcula o valor da funcao
};                                      // ponto e virgula marca o fim da atribuicao

console.log(square(plus1(y)));