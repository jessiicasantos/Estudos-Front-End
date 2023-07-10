$(document).ready(function () {
	// "X" or "O"
	$(".btnOption").on("click", function () {
		if ($(this).hasClass("btnX")) {
			$("#playerVal").removeClass("textO");
			$("#playerVal").toggleClass("textX");
		} else if ($(this).hasClass("btnO")) {
			$("#playerVal").removeClass("textX");
			$("#playerVal").toggleClass("textO");
		}
	});

	$(".square").on("click", function () {
		// "X" || "O"
		if ($(this).hasClass("squareX") || $(this).hasClass("squareO")) {
			return;
		}
		
		if ($("#playerVal").hasClass("textX")) {
			$(this).addClass("squareX");
		} else if ($("#playerVal").hasClass("textO")) {
			$(this).addClass("squareO");
		}
		
		// Next Player ("X" || "O")
		if ($(this).hasClass("squareX")) {
			$("#playerVal").removeClass("textX");
			$("#playerVal").toggleClass("textO");
		} else if ($(this).hasClass("squareO")) {
			$("#playerVal").removeClass("textO");
			$("#playerVal").toggleClass("textX");
		}
		
		// Win (horizontal, vertical, diagonal) // POOR CODE >.<
		if ($("#line1 .squareX").length == 3 || $("#line2 .squareX").length == 3 || $("#line3 .squareX").length == 3) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 #square1").hasClass("squareX") && $("#line2 #square4").hasClass("squareX") && $("#line3 #square7").hasClass("squareX")) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 #square2").hasClass("squareX") && $("#line2 #square5").hasClass("squareX") && $("#line3 #square8").hasClass("squareX")) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 #square3").hasClass("squareX") && $("#line2 #square6").hasClass("squareX") && $("#line3 #square9").hasClass("squareX")) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 #square1").hasClass("squareX") && $("#line2 #square5").hasClass("squareX") && $("#line3 #square9").hasClass("squareX")) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 #square3").hasClass("squareX") && $("#line2 #square5").hasClass("squareX") && $("#line3 #square7").hasClass("squareX")) {
			return $("#playerVal").toggleClass("textXWin");
		} else if ($("#line1 .squareO").length == 3 || $("#line2 .squareO").length == 3 || $("#line3 .squareO").length == 3) {
			return $("#playerVal").toggleClass("textOWin");
		} else if ($("#line1 #square1").hasClass("squareO") && $("#line2 #square4").hasClass("squareO") && $("#line3 #square7").hasClass("squareO")) {
			return $("#playerVal").toggleClass("textOWin");
		} else if ($("#line1 #square2").hasClass("squareO") && $("#line2 #square5").hasClass("squareO") && $("#line3 #square8").hasClass("squareO")) {
			return $("#playerVal").toggleClass("textOWin");
		} else if ($("#line1 #square3").hasClass("squareO") && $("#line2 #square6").hasClass("squareO") && $("#line3 #square9").hasClass("squareO")) {
			return $("#playerVal").toggleClass("textOWin");
		} else if ($("#line1 #square1").hasClass("squareO") && $("#line2 #square5").hasClass("squareO") && $("#line3 #square9").hasClass("squareO")) {
			return $("#playerVal").toggleClass("textOWin");
		} else if ($("#line1 #square3").hasClass("squareO") && $("#line2 #square5").hasClass("squareO") && $("#line3 #square7").hasClass("squareO")) {
			return $("#playerVal").toggleClass("textOWin");
		} else {
			return $("#playerVal").toggleClass("textChoice");
		}
	});

	$(".btnReset").on("click", function () {
		$(".square").removeClass("squareX");
		$(".square").removeClass("squareO");
		$("#playerVal").removeClass();
	});
});