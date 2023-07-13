// adicionais

function onClick() {
	/* se o input estiver vazio 
	 * mostrar a mensagem  
	*/
	if (getEntrada1() === '' || getEntrada2() === '') {
		pSaida.textContent = "Um ou dois campos de texto está vazio. Favor inserir valores numéricos!";
		return;
	}
	showEntrada();
}

 function empty() {
 	if (showEntrada1() === '' || showEntrada2() === '') {
 		return true;
 	} else {
 		return false;
 	}
 }


// passo 2)
// processamento e saida de dados
function showEntrada() {
	var showEntrada1 = getEntrada1();
	var showEntrada2 = getEntrada2();
	var sum = parseFloat(showEntrada1) + parseFloat(showEntrada2);
	pSaida.textContent = showEntrada1 + " + " + showEntrada2 + " = " + sum;
	// console.log(sum); historico do valor total da soma
}

// passo 1)
// ler os dados
function getEntrada1() {
	return inputs[0].value;
}

function getEntrada2() {
	return inputs[1].value;
}

// get all inputs
var inputs = document.getElementsByTagName('input');
var pSaida = document.getElementById('saida');
var calc = document.getElementById('calc');

// vinculo event 'click' a funcao 'onclick'
calc.addEventListener('click', onClick);

/* Nota:
 * addEventListener é um metodo que anexa um manipulador de eventos
 * ao elemento especificado 
 */