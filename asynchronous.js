/* 
JS Asynchronous
Técnica que permite que seu programa inicie uma tarefa potencialmente demorada e ainda seja capaz de responder a outros eventos enquanto essa tarefa é executada, em vez de ter que esperar até que a tarefa seja concluída.

São assincronos:

- HTTP request usando fetch()
- Acessar camera de user ou microfone (getUserMedia())
- Pedir a um user para selecionar arquivos (showOpenFilePicker())

Soluções:

1. Inicia uma operação de longa duração chamando uma function
2. Faça com que essa função inicie a operação e retorne imediatamente, para que nosso programa ainda possa responder a outros eventos
3. Notifique-nos com o resultado da operação quando eventualmente estiver completa.

Event Handlers (Manipuladores de Eventos)
Event Handlers são na verdade uma forma de programação assíncrona: você fornece uma função (o Event Handler) que será chamada, não imediatamente, mas sempre que o evento acontecer.
Se "o evento" for "a operação assíncrona foi concluída", então este evento poderá ser usado para notificar o chamador sobre o resultado da chamada de uma função assíncrona.

Asynchronous APIs
Algumas APIs assíncronas anteriores usavam eventos exatamente dessa maneira. A API XMLHTTPRequest permite que voçe faça solicitações para um server remoto usando JS.
Como isso pode levar muito tempo, é uma API assíncrona e você é notificado sobre o andamento e você é notificado sobre o andamento e eventual conclusão de uma solicitação anexando ouvintes de evento ao objeto XMLHttpRequest.
As vezes, ao invés de o evento ser uma ação do usuário, como o clique de um botão, o evento é uma alteração no estado de algum objeto.

Callbacks

Com este design, você chama a função assíncrona, passando sua função de retorno de chamada (callback). A função retorna imediatamente e chama seu callback quando a operação é concluída.
Um event handler é um tipo particular de callback.
Callbacks eram a principal forma de implementação de funções assíncronas em JS.
O código baseado em retorno de chamada (callback) pode ficar difícil de entender quando o próprio callback precisa chamar funções que aceitam um callback. Esta é uma situação comum se você precisar executar alguma operação que se decomponha em uma série de funções assíncronas.
Como temos callbacks dentro de callbacks, é muito mais difícil ler e debugar, o que chamamos de "Callback Hell" ou "Pyramid of Doom" (porque o recuo parece uma pirâmide de lado). 
*/

function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}

function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}

function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}

doOperation();
/* 
Quando aninhamos callbacks como o acima, é difícil lidar com erros: 
Geralmente você precisa lidar com erros em cada nível da "pirâmide", em vez de lidar com erros apenas uma vez no nível superior.

Por isso, as APIs assíncronas modernas não usam callbacks. Usam Promise.

Synchronous
Percorre ao longo do programa uma linha por vez, na ordem que foi escrito.
Em cada ponto, o browser espera a linha terminar seu trabalho antes de ir para a próxima linha. Tem que ser assim porque cada linha depende do trabalho feito nas linhas anteriores.

Pode ser usado para lidar efetivamente com operações de bloqueio, como buscar (fetch) recursos de um servidor.

Uma função assíncrona é uma função que retorna implicitamente uma promessa e que pode, em seu corpo, aguardar outras promessas de uma forma que pareça síncrona.
 */


/* 
Promises

São a base da programação assíncrona no JS moderno.
É um Object retornado por uma asynchronous function, que representa o estado atual da operação.
No momento em que a promise é retornada para o chamador, a operação geralmente não é concluída, mas o Promise Object fornece métodos para lidar com o eventual sucesso ou falha da operação.

Com uma API baseada em promessa (Promise-based API), a função assíncrona começa a operação e retorna um Object Promise. Você pode anexar manipuladores a este Promise Object, e esses manipuladores serão executados quando a operação for bem-sucedida ou falhar.

fetch() API

HTTP request: em uma Solicitação HTTP, enviamos uma mensagem de solicitação para um servidor remoto, e ele nos envia uma resposta (response).

* No exemplo, faremos o download do arquivo JSON https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json e registraremos algumas informações sobre ele.

Para fazer isso, faremos uma solicitação HTTP (HTTP Request) ao servidor. Em uma solicitação HTTP, enviamos uma mensagem de solicitação para um servidor remoto e ele nos envia uma resposta (response). Neste caso, enviaremos um request para pegar o Arquivo JSON do servidor. Ao invés de utilizar a API XMLHttpRequest, usaremos a API fetch(), que é a substituta moderna baseada em promessa (promise-based) para XMLHttpRequest.

Uma vez que você obtém um Object Response, você precisa chamar outra função para obter os dados de resposta. No caso de querer a resposta de dados como JSON, chamamos o método json() do Object Response. json() também é assíncrono. Portanto, este é um caso em que temos que chamar duas funçõies assíncronas sucessivas.
*/

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
});

/* 
O próprio then() retorna uma promise. que será completada com o resultado da função passada para ela. 
Podemos retornar a promise retornada por json(), e chamar o segundo then() nesse valor de retorno. Isso é chamado de Promise Chaining (Encadeamento de Promessas) e significa que podemos evitar níveis cada vez maiores de indentação quando precisamos fazer chamadas de função assíncronas consecutivas.

Precisamos checar se o server aceitou e foi capaz de lidar com a solicitação (request), antes de tentarmos lê-la. Fazemos isso verificando o código de status na resposta (response) e lançando um erro se não estiver "Ok".
*/

const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
  
fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    });
  
/* 
Catching Errors (capturando erros)

Como lidamos com erros? 
A API fetch() pode lançar um erro por vários motivos (ex: falta de conectividade com a rede ou URL malforma) e lançamos um erro nós mesmos se o server retornar um erro.
O tratamento de erros pode ser muito difícil com callbacks, fazendo que tratemos erros em todos os níveis de aninhamento.
Para dar suporte ao tratamento de erros, os promise Objects fornecem um métdodo catch().
Enquanto o manipulador passado para then() é chamado quando a operação assíncrona é bem-sucedida, o manipulador passado para catch() é chamado quando a operação assíncrona falha.

Assim, você pode implementar uma operação como várias chamadas de função assíncronas consecutivas e ter um único local para lidar com todos os erros.
*/

const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
  
fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });

/* 
Promise terminology

Three states:
Pending
Fulfilled (cumprido)
Rejected

fetch() considera uma solicitação bem-sucedida se o servidor retornar um erro como 404 Not Found, mas não se um erro de rede impedir o envio da solicitação.

Às vezes, usamos o termo settled (resolvido) para cobrir tanto o cumprido quanto o rejeitado.

Uma promise é resolvida se for liquidada ou se tiver sido "bloqueada" para seguir o estado de outra promise.

* Combinando multiplas promises

A cadeia de promises (promise chain) é o que você precisa quando sua operação consiste em várias funções assíncronas e você precisa que cada uma seja concluída antes de iniciar a próxima. Mas há outras maneiras para combinar chamadas de funções assíncronas, e a API promise fornece algum auxilio para elas. 

* Promise.all()

Quando você precisa que todas as promises sejam cumpridas, mas que elas não dependam umas das outras, é muito mais eficiente iniciá-las juntas, e ser notificado quando todas elas forem cumpridas.
O método Promise.all() é utilizado, ele pega um array de promises e retorna uma única promise, que é:

* fullfiled quando e se ALL promises no array forem fulfilled. 
Neste caso, o manipulador then() é chamado com um array de todas as respostas (responses), na mesma ordem em que as promises foram passados para all().
* rejected quando e se qualquer uma das promises no array forem rejeitadas. Neste caso, o manipulador catch() é chamado com o erro gerado pela promise rejected.
*/

// Exs:

/* 
Ex. 1 
*/
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

/* 
Ex. 2
*/
const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

/* 
* Promise.any()
 
As vezes, você pode precisar de qualquer uma de um conjunto de promises a serem cumpridas e não se importa com qual delas.
Você pode usar Promise.any(), é parecido com Promise.all() exceto que é cumprido (fulfilled) assim que qualquer um dos arrays de promises é cumprido (fulfilled), ou rejected se todos elas forem rejeitadas.
*/

const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

/* 
Async e Await

Adicionar a palavra-chave async no início de uma function a torna uma função assíncrona, é uma maneira mais simples de trabalhar com código assíncrono baseado em promessa (asynchronous promise-based code).
*/

async function myFunction() {
    // This is an async function
}
  
/* 
Dentro de uma async function, use a palavra-chave await antes de uma chamada para uma function que retorna uma promise. Fazendo com que o código espere nesse ponto até que a promise seja liquidada (settled), ponto em que o valor fulfilled (cumprido) da promessa é tratado como um valor de retorno ou o valor rejected é lançado. 

Isso permite que você escreva código que usa funções assíncronas, mas se parece com código síncrono.
*/

async function fetchProducts() {
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the parsed JSON object or throw an error
      const data = await response.json();
      console.log(data[0].name);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
fetchProducts();

/* 
Aqui, estamos chamando await fetch(), e ao invés de obter uma Promise, nosso chamador recebe de volta um Object Response totalmente completo, como se fetch() fosse uma função síncrona!

Podemos usar um bloco try... catch para tratamento de erros, exatamente como faríamos se o código fosse síncrono.

As funções assíncronas sempre retornam uma promessa, então você não pode fazer algo como:
*/
  
async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work
  
/* 
Em vez disso, você precisaria fazer algo como:
*/

async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
    
/* 
Além disso, observe que você só pode usar await dentro de uma função assíncrona, a menos que seu código esteja em um módulo JavaScript. Isso significa que você não pode fazer isso em um script normal:
*/
  
try {
    // using await outside an async function is only allowed in a module
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
}
  
/* 
Você provavelmente usará muito funções assíncronas onde, de outra forma, poderia usar cadeias de promessas, e elas tornam o trabalho com promessas muito mais intuitivo.

Tenha em mente que, assim como uma cadeia de promessas (promise chain), o await força as operações assíncronas a serem concluídas em série. Isso é necessário se o resultado da próxima operação depender do resultado da última, mas se não for esse o caso então algo como Promise.all() vai ter melhor desempenho.
*/

/* 
Conclusão:
* Promises, são a a base da programação assíncrona no JS moderno.
Tornam mais fácil expressar e raciocinar sobre sequências de operações assíncronas sem callbacks profundamente aninhados e suportam um estilo de tratamento de erros semelhante ao método síncrono try... catch.

* As palavras-chave async e await facilitam a criação de uma operação a partir de uma serie de chamadas de funções assíncronas consecutivas, evitando a necessidade de criar cadeias de promise (promise chains) explícitas e permitindo que você escreva codigo que se pareece com codigo sincrono.

* Many modern Web APIs are promise-based, including WebRTC, Web Audio API, Media Capture and Streams API, and many more.
*/




//   https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// tests: https://example.org/
// handle: manipular, lidar