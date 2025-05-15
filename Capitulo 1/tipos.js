// Objeto

// E uma colecao de pares nome/valor ou uma string para mapa de valores

// O tipo de dados mais importante de JavaScript é o objeto.

var book = {                    // Objetos sao colocados entre chaves.
    topic: 'JavaScript',        // A propriedade "topic" tem o valor "JavaScript". 
    fat: true                   // A propriedade "fat" tem o valor true.            
                                // A chave marca o fim do objeto.
};

// Acesse as propriedades de um objeto com . ou []:
book.topic                          // return = JavaScript
book['fat']                         // true
book.author = "Flanagan";           // cria nova propriedade por meio de atribuicao
book.contents = {};                 // um objeto vazio sem propriedade

console.log(book);
console.log(book.topic);

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.


var primes = [2, 3, 5, 7];      // Um array de 4 valores, delimitados com [ e ].
primes[0]                       // => 2: o primeiro elemento (índice 0) do array.
primes.lenght                   // => 4: quantidade de elementos no array.
primes[primes.lenght-1]         // => 7: o último elemento do array.
primes[4] = 9;                  // => 7: o último elemento do array.
primes[4] = 11;                 // Ou altera um elemento existente por meio de atribuição.
var empty = [];                 // [] é um array vazio, sem qualquer elemento.
empty.lenght                    // => 0


console.log(primes);
console.log(primes.length);

// Os arrays e objetos podem conter outros arrays e objetos:

var points = [ 
    {x:0, y:0},
    {x:1, y:1}
];
// Um array com 2 elementos. // Cada elemento é um objeto.

var data = {
    trial1: [[1,2], [3,4]],
    trial2: [[2,3], [4,5]], 
};   
// Um objeto com 2 propriedades // O valor de cada propriedade é um array. // Os elementos dos arrays são arrays.


// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são os mais comuns: 
// 3 + 2	// => 5: adição
// 3 – 2 
// 3 * 2 
// 3 / 2 
// points[1].x – points[0].x 
// "3" + "2"


// JavaScript define alguns operadores aritméticos de forma abreviada


var count = 0; // define uma variavel
count++; // incrementa a variavel
count--; // decrementa a variavel
count += 2; // soma 2; o mesmo que count = count + 2;
count *+ 3;
count


// Os operadores de igualdade relacionais testam se dois valores sao iguais

// desiguais, menores que, maiores que , etc. Sao avaliados como verdadeiros ou falsos.

var x = 2, y = 3;    // Esses sinais = são atribuições e não testes

x == y // => falso: igualdade
x != y   // => verdadeiro: desigualdade
x < y  // => verdadeiro: menor que
x <= y   // => verdadeiro: menor ou igual a
x > y  // => falso: maior que
x >= y
`two` == `three`
'two' > 'three'
false == (x > y)  // => verdadeiro: falso é igual a falso

// Os operadores lógicos combinam ou invertem valores booleanos

(x == 2) && (y == 3)  // => verdadeiro: as duas comparações são verdadeiras. && // é E

(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. barra reta dupla significa OU

!(x == y)  // => verdadeiro: ! inverte um valor booleano

  