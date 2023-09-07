// # Promise

let promise = new Promise(function (resolve, reject) {
    // func executed automatically when promise is constructed

    // 1 sec after signal: job is done with result 'done'
    setTimeout(() => resolve('done'), 5000);
})


// promise Object returned by the new Promise constructor.
    // Promise: [
    //     {
    //         state: ['pending', 'fulfilled']
    //     },
    //     {
    //         result: [undefined || value || error]
    //     },
    // ]

// ## Constructor Syntax for a promise object

let promise = new Promise(function (resolve, reject) {
    // executor (the producing code, o código de produção)
});

// Os argumentos resolve e reject são callbacks providenciados pelo JavaScript.

resolve(value)
reject(error)

// o executor é executado automaticamente e tenta executar um trabalho. Ao terminar a tentativa, chama resolver se foi bem-sucedida ou rejeitar se houve um erro.

// ## Propriedades state e result do Object Promise são internos

// Podemos utilizar os métodos .then / .catch / .finally para acessá-las
// Um Object Promise serve como um link entre o executor (producing code) e as consuming function, que receberão o result ou error. Consuming function podem ser registradas usando os métodos .then e .catch.

// ### .then
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});
  
// reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);

// ### .catch()

// Se estivermos interessados apenas em erros, podemos usar null como primeiro argumento .then(null, errorHandlingFunction). Ou .catch(errorHandlingFunction), que é o mesmo.

// A chamada .catch(f) é um análogo completo de .then(null, f), é apenas uma abreviação.

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('Whoops!')), 3000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert);

  





// *errorHandlingFunction = função de tratamento de erros