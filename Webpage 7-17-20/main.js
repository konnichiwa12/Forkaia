function alerttest(nextpage){
	alert("Now taking you to the " + nextpage + " page");
}

function alerttestSM(nextpage){
	alert("Opening " + nextpage + " in a new window.");
}



function choose1st(first, second){
	document.getElementById(first).style.backgroundColor = "darkgray";
	document.getElementById(second).style.backgroundColor = "white";
}

function choose2nd(first, second){
	document.getElementById(first).style.backgroundColor = "white";
	document.getElementById(second).style.backgroundColor = "darkgray";
}

function enable(target){
	document.getElementById(target).disabled = false;
	document.getElementById('Yes').style.backgroundColor = "darkgray";
	document.getElementById('No').style.backgroundColor = "white";
}

function disable(target){
	document.getElementById(target).disabled = true;
	document.getElementById('Yes').style.backgroundColor = "white";
	document.getElementById('No').style.backgroundColor = "darkgray";
}

function check(check, uncheck){
	document.getElementById(check).checked = true;
	document.getElementById(uncheck).checked = false;
}

function alertstatus(){
	if(document.getElementById('method1').checked == true){
		alert("Searching Games based on name: \n" + document.getElementById('fname').value + " " + document.getElementById('lname').value + "\nAnd email: \n" +  document.getElementById('email').value)
	}
	else if(document.getElementById('method2').checked == true){
		alert("Searching Games based on ID: \n" + document.getElementById('id').value)
	}
}

function CreateGamesPageCheck(){
	//date check
	let errorreport = "";
	var error = false;
	var month = document.getElementById('month').value;
	var day = document.getElementById('day').value;
	var year = document.getElementById('year').value;
	var hour = document.getElementById('timebox1').value;
	var minute = document.getElementById('timebox2').value;
	//month check
	if (month < 1||month > 12){
		errorreport += "Month is Invalid \n";
		error = true;
	}
	//day check
	if (month == 1||month == 3||month == 5||month == 7||month == 8||month == 10||month == 12){
		if(day < 0||day > 31){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
	else if (month != 2){
		if(day < 0||day > 30){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
	else if (month == 2){
		if(day < 0||day > 28){
			errorreport += "Day is Invalid \n";
			error = true;
		}
	}
	//year check
	if (year < 2020){
		errorreport += "Year is Invalid \n";
		error = true;
	}
	//hour check
	if (hour < 1||hour > 12){
		errorreport += "Hours is Invalid \n";
		error = true;
	}
	//minute check
	if (minute < 0||minute > 59){
		errorreport += "Minutes is Invalid"
		error = true;
	}
	//determine action
	if (error == true){
		document.getElementById("link").setAttribute("href", "#");
		alert(errorreport);
	}
	else{
		document.getElementById("link").setAttribute("href", "CreateGameConfirm.html");
	}
}
