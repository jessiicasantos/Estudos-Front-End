// Debug

// Os problemas geralmente vem em tres formas:
/*
* Erros de Sintaxe - impedem a execução do programa;
* Erros de Tempo de Execução - o código tem um comportamente inesperado;
* Erros Lógicos - o código não faz o que foi pretendido. 
*/

// Alguns métodos console:
/* 
* Log
* Warn
* Clear 
*/

// typeof
// Erros de tipo podem estar ocultos em cálculos ou chamadas de função. Tenha cuidado especialmente ao acessar e trabalhar com dados externos na forma de Objetos JSON.

// Sete tipos de dados primitivos:
// Boolean, Null, Undefined, Number, String, Symbol(ES6), e BigInt(ES2020, e um tipo para items mutáveis: Object.Arrays são técnicamente um tipo de objeto.

// * Catch (Capturar) nomes de variáveis e funções com erros ortográficos
// Spelling error (erro de ortografia) - (ReferenceError: item is not defined)
// Caracteres transpostos, ausentes ou capitalizados incorretamente em um nome de variável ou função farão com que o navegador procure um objeto que não existe - e reclame na forma de um erro de referência.

// * Catch parênteses, colchetes, colchetes e aspas não fechados
// Syntax Error - (SyntaxError: unknown: Unexpected token)
// Outro erro de sintaxe a ser observado é que todos os parênteses de abertura, colchetes, chaves e aspas têm um par de fechamento.

// * Catch uso misturado de aspas únicas e aspas duplas
// Syntax Error - SyntaxError: unknown: Missing semicolon.
// ** Você pode escapar as aspas dentro da string usando backslash(\) escape character:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

// * Catch uso do operador de atribuição ao invés de operador de igualdade
// Atribuir (=) um valor a um nome variável e operadores de igualdade (== e ===) são diferentes, causando um fluxo de controle inesperado em seu programa:

// controle inesperado:
// let x = 7;
// let y = 9;
// let result = "to come";

// if(x = y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

// controle esperado:
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);


// Catch Falta de parenteses abertos e fechados após a chamada de uma Função - // [Function: myFunction]
// Este erro pode ser detectado registrando valores de variáveis (ouu seus tipos) no console e verificando se um deles está definido para uma referência de função, em vez do valor esperado que a função retorna.

function myFunction() {
    return "You rock!";
}
  // referencia de função 
  let varOne = myFunction;
  // Valor esperado de retorno da função
let varTwo = myFunction();
  

// Catch argumentos passados na ordem errada ao chamar a Função
// Se os argumentos forem de tipos diferentes, como uma func. esperando um array e um número inteiro, retornará um error runtime (erro de tempo de execução).
// Se os argumentos forem do mesmo tipo (todos inteiros, por exemplo), então a logica do código não fará sentido.

// Catch por um arro ao utilizar index (Off by one errors OBOE)
// Surge quando você tenta direcionar um index específico de uma string ou array, ou ao fazer um loop sobre os índices deles.
// A indexação JavaScript começa em zero, não em um, o que significa que o último índice é sempre um a menos que o comprimento(length) do item.Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um "index out or range" reference error ou imprimir undefined - "índice fora do intervalo".

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

// O exemplo acima é repetido muitas vezes e o segundo é repetido poucas vezes (falta o primeiro índice, 0). O terceiro exemplo está correto.


// Cuidado ao reinicializar variáveis dentro de um loop
// As vezes é necessário salvar informação, incrementar contadores, ou redefinir variaveís dentro de um loop.
// Um problema potencial é quando variáveis devem ser reinicializadas, e não são, ou vice-versa. Isso é particularmente perigoso se você redefinir acidentalmente a variável que está sendo usada para a condição do terminal, causando um loop infinito.
// Imprimir valores de variáveis ​​com cada ciclo de seu loop usando console.log() pode revelar comportamento de bug relacionado à redefinição ou falha ao redefinir uma variável.

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    // row estava aqui antes
    // let row = [];

    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
  
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
let matrix = zeroArray(3, 2);
console.log(matrix);
  
// Previna loops infinitos com uma condição de terminal válida
// Um erro é incrementar ou decrementar uma variável de contador na direção errada da condição terminal. Outro é redefinir acidentalmente um contador ou variável de índice dentro do código de loop, em vez de incrementá-lo ou decrementá-lo.