function gerarPets(pets) {
//arrumar e botar input
		var pets = [
		{
			nome: "sr. coelho",
			tipo: "coelho",
			age: "2"
		},{
			nome: "nina",
			tipo: "dog",
			age: "4"
		},
		];
		//array[0,1]	//bolas.length - 1 return last array element
			console.log(pets);
}
//arrumar logica daqui
function petAleatorio(pets) {
	var pets = [
	{
		nome: "Sr. Coelho",
		tipo: "Coelho",
		age: "2"
	},{
		nome: "Nina",
		tipo: "Dog",
		age: "4"
	},{
		nome: "Cupcake",
		tipo: "Chihuahua",
		age: "16"
	},{
		nome: "Dollynho",
		tipo: "Psicopata",
		age: "12"
	},{
		nome: "Srta. Nininha",
		tipo: "Pokemon",
		age: "13"
	},{
		nome: "Sir Lai",
		tipo: "Lendario",
		age: "150"
	},
	];
	
	var randomPet = [];
	
	for (var i = 0; i <  pets.length; i++) {
		randomPet.push(Math.floor(Math.random() * pets.length));
		//!!arrumar aqui >> fazer as infos do aparecerem pet
		demo.innerHTML = pets.toString();
		// demo.innerHTML = randomPet[0];
	// demo.innerHTML = "";


		if (inputNumPet.value <= 0) {
			//!!arrumar aqui >> quando nao houver valor n pode gerar um pet
			demo.innerHTML = "Digite um número acima de 0 e veja um pet!";

		}
	}
	console.log(pets[randomPet[0]]);
}
	// console.log(pets[0]);

	// var percorrePets = 0;
	// var pet = "";

	// percorrePets += pets;
	
	// demo.innerHTML = percorrePets;



	// 	for (var percorrePets = 0; percorrePets <= pets.length; percorrePets++) {
	// 	pets[percorrePets];
	// }

	// demo.innerHTML = percorrePets;

	//array[0,1]
	//percorre tamanho e cada elemento array [.length]
	//pega value do input
	//btn show indice(elemento) do array
	// document.getElementById("inputNumPet").value;

//input.value, pets.length
//input percorre o pets.length
	// for (var i = 0; i <= pets.length; i++) {
	// 	pets.length[i]
	// // 	i = inputNumPet;
	// 	if (inputNumPet.value <= 1) {
	// 		var getNumPet = document.getElementById("demo").innerHTML = pets[0];
	// 		// console.log(pets[0])
	// 	} else {
	// 		console.log(pets[1])
	// 	}

	// var getNumPet = document.getElementById("demo").innerHTML = inputNumPet.value;
