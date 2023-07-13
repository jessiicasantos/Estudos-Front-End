var btn = document.getElementById("btnTest");

function sampleFunction() {
	var at = document.getElementById("email").value.indexOf("@");
	var age = document.getElementById("age").value;
	var fname = document.getElementById("fname").value;
	submitOk = "true";

	if (fname.length > 15) {
		alert("The name may have no more than 15 characters");
		submitOk = "false";
	}

	if (isNaN(age) || age < 1 || age > 100) {
		alert("The age must be a number between 1 and 100");
		submitOk = "false";
	}

	if (at == -1) {
		alert("Not a valid e-mail");
		submitOk = "false";
	}

	if (submitOk == "false") {
		return false;
	}
}

btn.addEventListener("click", sampleFunction);