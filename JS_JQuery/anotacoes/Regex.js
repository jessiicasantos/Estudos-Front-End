// Regex

// Expressões regulares são utilizadas para combinar partes de strings. Você cria padrões para ajudá-lo a fazer combinações.
// Ex.: /word/ é usado para fazer a regular expression, aspas não são necessárias.
// JS tem multiplos jeitos de usar regexes:

// .test();
// Verifica se um padrão existe ou não dentro de uma string.
// Não diferencia cases(maiusculas ou minusculas).

let testStr = 'freeCodeCamp';
let testRgx = /Code/;
testRgx.test(testStr); 
// ||
/Code/.test('freeCodeCamp');


// |
// Procure por multiplos padrões usando o "alternation" ou o operador "OR": |.
// /yes|no|maybe/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);


// .match();
// Extrai as combinações que você encontrar

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// ||
"Hello, World!".match(/Hello/);


// A sintaxe.match é o oposto do .test:
// 'string'.match(/regex/);
// /regex/.test('string');


//  *i flag / Ignore Case (uppercase and lowercase letters)
// Case (ou as vezes letter case) é a diferença entre letras maiúsculas e minúsculas. Combine ambos os casos usando o que é chamado de "flag". - A flag "i".
// /ignorecase/i. Este regex pode corresponder as strings ignorecase, igNoreCase, e IgnoreCase.

// *g flag / Pattern case
// Para procurar ou extrair um padrão recorrente, use a flag g.
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

// Junção das flags(i, g)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

console.log(result);


// . flag / combine qualquer coisa com o Wilcard Period
// Às vezes você não saberá(ou não precisará saber) os caracteres exatos em seus padrões. Pensar em todas as palavras que correspondem, digamos, a um erro ortográfico levaria muito tempo. Felizmente, você pode economizar tempo usando o caractere curinga: .

// O wildcard character . corresponderá à qualquer caractere. o Wildcard também é chamado de dot and period. 
// Se quiser corresponder a: hug, huh, hut e hum, use o regex / hu./ 
ex. 1: 
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);


// [] / combine caracteres unicos com multiplas possibilidades
// Ao contrário dos literal patterns /literal/ e wildcards /, que são extremos das expressões regulares, onde um encontra exatamente o correspondente e o outro corresponde a tudo. Há opções que são a balança dentre os dois extremos.
// Há um padrão literal com alguma flexibilidade: character classes: permite que você defina um grupo de caracteres, colocando-os entre brackets [].
// Ex.: junte bag, big, bug mas não bog (regex): /b[aiu]g/

// ex. 1:
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// ex. 2:
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
// let resultMatch = quoteSample.match(vowelRegex);
let resultTest = vowelRegex.test(quoteSample);

console.log(resultTest);


// [from - to] -  / Combinação de um intervalo de caracteres  (ex.: alfabeto, numeros)
// Para corresponder a letras minusculas, de a a e: [a - e].

// ex. 1:
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let eatStr = "eat";
let bgRgx = /[a-e]at/;
catStr.match(bgRgx);
batStr.match(bgRgx);
matStr.match(bgRgx);
eatStr.match(bgRgx);

// ex. 2:
let test = 'Test biscoitada Aleatorio Unicórnio'; // corta o "ó" por causa do acento
rgx = /[a-z]/ig;
test.match(rgx);

// ex. 3:
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result = quoteSample.match(alphabetRegex);

console.log(result);

// ex. 4
let frase = "Havia algo a ser inventado já há muito tempo na história.";
let rgx = /[h-s2-6]/ig;
frase.match(rgx);


// [^...] (Negated Character Sets) / Conjunto de caracteres negados
// Coloque um ^ após os colchetes abertos e antes dos caracteres que você não quer corresponder.
// /[^aeiou]/gi corresponde a os caracteres que não são uma vogal. 

// Ex: Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex:
let testString = 'Ola, estou testando caracteres sem numero ou vogal. Code: 932985430891-3429';
let rgx = /[^0-9aeiou]/ig;
testString.match(rgx);

// ^ / Corresponda à Padrões de início de strings
// Os desafios anteriores mostraram que as expressões regulares podem ser usadas para procurar várias correspondências.Eles também são usados ​​para procurar padrões em posições específicas em strings.
// Antes, você usou o circunflexo (^) dentro de um conjunto de caracteres para criar um conjunto de caracteres negados no formato [^thingsThatWillNotBeMatched]. Fora de um conjunto de caracteres [^...], o circunflexo é utilizado para procurar padrões no início de strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);

let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);


// + / Corresponda a caracteres (ou um grupo de caracteres) que ocorrem uma ou mais vezes seguidas, o que significa que ocorre pelo menos uma vez e pode ser repetido.
// Lembre-se, que o caractere ou padrão deve estar presente consecutivamente. Isto é, o caractere deve repetir um após o outro.
// Ex.: /a+/g encontraria uma correspondência em "abc" e retornaria ["a"]. Também retornaria uma correspondencia em "aabc" e retornaria ["aa"]. Se estivesse verificando "abab" encontraria duas correspondencias e retornaria ["a", "a"], por os caracteres não são seguidos - há um "b" entre eles.

// Ex.: Encontre quando a letra s ocorre uma ou mais vezes no Mississippi.:
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);

// * (asterisk, star) / Corresponda a caracteres que ocorrem 0 ou mais vezes
// ex. 1:
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

// ex. 2:
let chewieQuote =  "Testando o AAA amoor Aantaa"
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result);

// * || *? / Caracteres com greedy (ganancioso) matching || Lazy (preguiçoso) Matching
// Em expressões regulares, um >> greedy match << localiza a parte mais longa possível de uma string que se ajusta ao padrão regex e o retorna como uma correspondência.
// A alternativa é chamada >> lazy match <<, pois encontra a menor parte possível da string que satisfaz o padrão regex.

// Aplicando /t[a-z]*i/ à string "titanic": é basicamente um padrão que começa com t, termina com i e tem algumas letras no meio. A correspondência retornaria ["titani"]. Ele encontra a maior substring possível para ajustar o padrão.

// No entanto, você pode usar o ? caractere para alterá-lo para lazy matching. "titanic" comparado com o regex ajustado de /t[a-z]*?i/ retorna ["ti"].

// Resumo:
// Greedy match (correspondencia gananciosa) - acha a parte mais longa possivel da string que satisfaz o padrão regex. // t[a-z]*i
// Lazy match (... preguiçosa) - acha a menor parte possível da string que satisfaz o padrão regex - *?= || t[a-z]*?i

// exs. 1:
const string = 'titanic';
const rgxStr = /t[a-z]*i/;
// const rgxStr = /t[a-z]*?i/;
string.match(rgxStr);

// ex. 2:
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

console.log(result);


// $ (dollar) / Corresponda ao fim de padrões de strings
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);

let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);


// \w / Combine todas as letras e números
// \w - Este atalho é igual a [A-Za-z0-9_]. Esta class de caracteres corresponde a letras maiúsculas e minúsculas mais números e inclui o sublinhado _.
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);


// \W / Procure pelo oposto de \w com \W
// Este atalho é o mesmo que [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

// \d / Corresponda a todos os números
// é igual a classe de caracteres [0-9], e procura um único caractere de qualquer número entre 0 e 9.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

console.log(result);
console.log("2001: A Space Odyssey".match(numRegex));


// \D / Corresponda a todos os não números. É igual a [^0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

console.log(result);
console.log(movieName.match(noNumRegex));


// \s / whitespace

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

// \S / caracteres sem whitespace
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;


// {lowerNum, upperNum} / Certo limite de padrões
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

// ? / Cheque se há todos ou nenhum
// As vezes os padrões que você quer procurar talvez tenham partes que existem ou não. Especifique a possiblidade da existência do elemento com interrogação ?. Isto checa se há zero ou um dos elementos anteriores. Pense neste símbolo como se o elemento anterior fosse opcional.

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

// (?=...) || (?!...) / Antecipação positiva e negativa
// Padrões que dizem ao JS para olhar adiante em sua string para verificar padrões mais adiante.Pode ser útil quando você quer procurar varios padrões na mesma string. Há dois tipos de antecipações: antecipação positiva e antecipação negativa.

// Um lookahead positivo procurará certificar-se de que o elemento no padrão de pesquisa está lá, mas não corresponderá a ele. Um lookahead positivo é usado como (?=...) onde o ... é a parte necessária que não é correspondida.

// Por outro lado, um lookahead negativo procurará garantir que o elemento no padrão de pesquisa não esteja lá. Um lookahead negativo é usado como (?!...) onde o ... é o padrão que você não quer que esteja lá. O restante do padrão é retornado se a parte de antecipação negativa não estiver presente.
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);


// De(option 1| option 2)fault / Cheque por grupos de caracteres misturado
// Cheque grupos de caracteres usando ().
// Se quiser encontrar Penguin ou Pumpkin, use / P(engu | umpk) in /g
// ex. 1:
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

// ex. 2:
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result);
console.log(myString.match(myRegex));


// /(\w+)/ (ex.) / Reutilize padrões usando grupos de captura
// Você pode utilizar /row row row/ por ex., mas caso você não saiba a palavra repetida Capture groups podem ser usados.
let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]


let testString = "test test test test test test";
let reRegex = /(test)(\s)\1\2\1/g;
let result = reRegex.test(testString);

let repeatNum = "42 42 42";
let reRegex = /(^\d+) \1 \1$/; // Change this line
// let reRegex = /(^\d+) \1\s\1$/;
let result = reRegex.test(repeatNum);

console.log(repeatNum.match(reRegex));
console.log("42 42 42 42".match(reRegex));


// .replace() / Use grupos de captura para procurar e substituir
// str.replace(regexp, replacement)
// Procure e substitua um texto. 
// ex. 1:
let str = "Reposicionar Strings";
let rgx = /(\w+) (\w+)/;
console.log(str.replace(rgx, "$2 $1"));

// ex. 2:
let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
let str = "2019-10-30, 2020-01-01";
console.log(str.replace(regexp, '$<day>.$<month>.$<year>'));

// ex. 3:
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result);

// ex. 4:
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

console.log(result);

// Match first characters with white-space
// Or
// Match last characters with white-space

// Replace each match with "", removing those matches entirely




// https://javascript.info/regexp-group


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method