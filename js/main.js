var Fname = document.getElementById("fname");
var Email = document.getElementById("email");
var Msg = document.getElementById("msg");
var btn = document.getElementById("submit-button");

var re = /[A-Z0-9._%+\-]+@[A-Z0-9.\-]+.[A-Z]{2,4}/igm;

function canSubmit(e) {

	e.preventDefault();
	var data = {};
	var error = [];

	if (Fname.value !== "") {
		data.name = Fname.value;
	} else {
		error.push("no fname");
	}

	if (Email.value !== "") {
		data.email = Email.value;
	} else {
		error.push("no email");
	}

	if (Msg.value !== "") {
		data.msg = Msg.value;
	} else {
		error.push("no msg");
	}

	if (error.length >= 1) {
		console.log(error);
	}

	console.log(data);

}

btn.addEventListener("click", canSubmit);

