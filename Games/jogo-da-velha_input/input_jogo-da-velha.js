$(document).ready(function() {
	function values() {
		//count elements class ".square" and choose "x" or "o"
		for (var i = 0; i < $(".square").length; i++) {
			if ($(".square")[i].value == "x") {
				console.log("Square " + [i] + " - " + "\n" + "Valor escolhido: " + $(".square")[i].value);
			} else if ($(".square")[i].value == "o") {
				console.log("Square " + [i] + " - " + "\n" + "Valor escolhido: " + $(".square")[i].value);
			}
		}

		//se forem 3 elements nos eixos: "x", "y" ou diagonal = venceu.
		
		//line 1 (x)
		if ($("input[name=square1]").val() == "x" && $("input[name=square2]").val() == "x" && $("input[name=square3]").val() == "x" || 
			$("input[name=square1]").val() == "x" && $("input[name=square4]").val() == "x" && $("input[name=square7]").val()  == "x" ||
			$("input[name=square3]").val() == "x" && $("input[name=square6]").val() == "x" && $("input[name=square9]").val() == "x" ||
		//line 1 diagonal
		$("input[name=square1]").val() == "x" && $("input[name=square5]").val() == "x" && $("input[name=square9]").val() == "x"||
		$("input[name=square3]").val() == "x" && $("input[name=square5]").val() == "x" && $("input[name=square7]").val() == "x" ||
		//line 2 (x)
		$("input[name=square4]").val() == "x" && $("input[name=square5]").val() == "x" && $("input[name=square6]").val() == "x" ||
			//line 3 (x)
			$("input[name=square7]").val() == "x" && $("input[name=square8]").val() == "x" && $("input[name=square9]").val() == "x" ||
			//line 3 diagonal
			$("input[name=square7]").val() == "x" && $("input[name=square5]").val() == "x" && $("input[name=square3]").val() == "x" ||
			//middle (y)
			$("input[name=square2]").val() == "x" && $("input[name=square5]").val() == "x" && $("input[name=square8]").val()
			== "x") {
				console.log("Venceu!");
			} else if ($("input[name=square1]").val() == "o" && $("input[name=square2]").val() == "o" && $("input[name=square3]").val() == "o" || 
			$("input[name=square1]").val() == "o" && $("input[name=square4]").val() == "o" && $("input[name=square7]").val()  == "o" ||
			$("input[name=square3]").val() == "o" && $("input[name=square6]").val() == "o" && $("input[name=square9]").val() == "o" ||
			// line 1 diagonal
			$("input[name=square1]").val() == "o" && $("input[name=square5]").val() == "o" && $("input[name=square9]").val() == "o" ||
			$("input[name=square3]").val() == "o" && $("input[name=square5]").val() == "o" && $("input[name=square7]").val() == "o" ||
			// line 2 (x)
			$("input[name=square4]").val() == "o" && $("input[name=square5]").val() == "o" && $("input[name=square6]").val() == "o" ||
			// line 3 (x)
			$("input[name=square7]").val() == "o" && $("input[name=square8]").val() == "o" && $("input[name=square9]").val() == "o" ||
			// line 3 diagonal
			$("input[name=square7]").val() == "o" && $("input[name=square5]").val() == "o" && $("input[name=square3]").val() == "o" ||
			//middle (y)
			$("input[name=square2]").val() == "o" && $("input[name=square5]").val() == "o" && $("input[name=square8]").val()
			== "o") {
			console.log("Venceu!"); 
			}
	}
		
		console.log("\n" + "Escolha 'x' ou 'o': ");

	$("#btnValida").on("click", values);
});