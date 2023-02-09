function validate() {
	let name = document.getElementById("a").value;
	let nregx = /^[a-z A-Z]{2,15}$/;
	let mail = document.getElementById("b").value;
	let eregx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-z A-Z]{2,4}$/;
	let date = document.getElementById("y").value;
	let person = document.getElementById("x").value;
	let pregx = /^[0-9]$/;
	let db = document.getElementById("package").value;
	if (name == "") {
		alert("Name field is mandatory");
		return false;
	} else if (!nregx.test(name)) {
		alert("Enter a valid name");
		return false;
	} else if (mail == "") {
		alert("Email field is mandatory");
		return false;
	} else if (!eregx.test(mail)) {
		alert("Enter a valid mail id");
		return false;
	} else if (date == "") {
		alert("Date field is mandatory");
		return false;
	} else if (db == "0") {
		alert("Please select any valid package");
		return false;
	} else if (person == "") {
		alert("Number of person field is mandatory");
		return false;
	} else if (!pregx.test(person)) {
		alert("Enter a valid number");
		return false;
	} else if (
		document.getElementById("agree").checked == false &&
		document.getElementById("disagree").checked == false
	) {
		alert("Do you agree or disagree");
		return false;
	} else if (
		document.getElementById("boarding").checked == false &&
		document.getElementById("fooding").checked == false &&
		document.getElementById("sightseeing").checked == false
	) {
		alert("Choose any option for what do you want to avail");
		return false;
	} else {
		return true;
	}
}
