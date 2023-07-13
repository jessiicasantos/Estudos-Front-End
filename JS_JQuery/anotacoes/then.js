// > .then() (Promises)

// .then() => retorna uma Promise. Dois argumentos > ambos "callback functions" - arg um: > sucesso, - arg dois: > fracasso da promise.

// promise.then(whenRealize, whenReject);

// promise.then(function(valor) {
//     // successo
// }, function(motivo) {
//     // rejeitada
// })

// ex 1 
const p1 = new Promise(function(resolve, reject) {
    resolve('Success!');
    // or
    // reject ('Error!');
});

// ex 2
var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});

// test ex 3 
p2.then(function(value) {
    console.log(value);
 }).then(function(value) {
     console.log(value);
 });

//  ex 3
p2.then(function(value) {
    console.log(value);
     return value + 1; // 1
 }).then(function(value) {
     console.log(value); // result (value + 1) => 2
 });

 
//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// *Anotações:
// Steps: 
// > Async,
 // > Callback
// > Promise,
// > Fetch API
 // > then()

// assincrono => é uma técnica que permite que seu programa inicie uma tarefa potencialmente longa e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que a tarefa seja concluída. Assim que essa tarefa for concluída, seu programa é apresentado com o resultado. (ocorre em vários núcleos)
/* 
Promise - você a utiliza para fazer uma promessa para fazer algo, normalmente assincrono, ou você cumpre sua promessa ou deixa de cumprir. É uma função construtora, então você precisa da key "new" para cria-la. Pega uma função, como seu argumento, com dois parametros - resolve e reject. Estes são metodos usados para determinar o resultado da promise.
Uma promise tem três estados: pending, fulfilled (realizado) e rejected.
Os parametros "resolve" e "reject" são utilizados para que a promise não fique  eternamente no estado "pendente".
*/
