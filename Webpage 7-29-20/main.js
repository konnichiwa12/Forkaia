let gameList = new Array(5);
let numGames = 0;


function alerttestSM(returnpage, nextpage){//all pages
	if (confirm("Now opening " + nextpage + " in a new window.")){
		document.getElementById(returnpage).setAttribute("href", returnpage);
		document.getElementById(returnpage).setAttribute("target", returnpage);
	}
	else{
		document.getElementById(returnpage).setAttribute("href", "#");
		document.getElementById(returnpage).setAttribute("target", "");
	}
}

function alerttest(returnpage, nextpage){//index.html
	if (confirm("Now taking you to the " + nextpage + " page")){
		document.getElementById(returnpage).setAttribute("href", returnpage);
	}
	else{
		document.getElementById(returnpage).setAttribute("href", "#");
	}
}

function choose1st(first, second){//CreateGames.html
	document.getElementById(first).style.backgroundColor = "darkgray";
	document.getElementById(second).style.backgroundColor = "white";
}

function choose2nd(first, second){//CreateGames.html
	document.getElementById(first).style.backgroundColor = "white";
	document.getElementById(second).style.backgroundColor = "darkgray";
}

function enable(target){//CreateGames.html and SearchGames.html
	document.getElementById(target).disabled = false;
	document.getElementById('Yes').style.backgroundColor = "darkgray";
	document.getElementById('No').style.backgroundColor = "white";
}

function disable(target){//CreateGames.html and SearchGames.html
	document.getElementById(target).disabled = true;
	document.getElementById('Yes').style.backgroundColor = "white";
	document.getElementById('No').style.backgroundColor = "darkgray";
}

function check(check, uncheck){//SearchGames.html
	document.getElementById(check).checked = true;
	document.getElementById(uncheck).checked = false;
}

function alertstatus(){//SearchGames.html
	if(document.getElementById('method1').checked == true){
		if(document.getElementById('fname').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		if(document.getElementById('lname').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		if(document.getElementById('email').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		alert("Searching Games based on name: \n" + document.getElementById('fname').value + " " + document.getElementById('lname').value + "\nAnd email: \n" +  document.getElementById('email').value)
		document.getElementById('ButtonConfirm').setAttribute('href', 'CreateGameConfirm.html');

	}
	else if(document.getElementById('method2').checked == true){
		if(document.getElementById('id').value.length == 0){
			alert("Please enter necessary information.");
			document.getElementById('ButtonConfirm').setAttribute('href', '#');
			return;
		}
		alert("Searching Games based on ID: \n" + document.getElementById('id').value);
		document.getElementById('ButtonConfirm').setAttribute('href', 'CreateGameConfirm.html');
	}
}

function CreateGameConfirm(){//CreateGames.html
	document.getElementById("body").innerHTML = '<h1 id="Title">Create Games</h1> <p class="Use">Game Creation Successful! Check your email inbox for a confirmation email! You could also check the <a href="MyGames.html">MyGames</a> page to see the status of your pick up game!</p>'
}

function SearchGameConfirm(){//SearchGames.html
	document.getElementById("body").innerHTML = '<h1 id="Title">Search Games</h1> <p class="Use">Search Successful! Here are the search results!</p>'
}

function SearchGamePageCheck(){//SearchGames.html
	var errorreport = "";
	var error = false;
	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var id = document.getElementById("id");
	if(document.getElementById("PrivatePW1").disabled == false){
		if(document.getElementById("PrivatePW1").value.length == 0){
			errorreport += "Please enter a password \n";
			error = true;
		}
	}
	if (document.getElementById("method1").checked){
		if (fname.value.length == 0){
			errorreport += "Please enter a first name \n";
			error = true;
		}
		if (lname.value.length == 0){
			errorreport += "Please enter a last name \n";
			error = true;
		}
	}
	else{
		if (id.value.length == 0){
			errorreport += "Please enter an ID \n";
			error = true;
			console.log("fuck");
		}
	}
	if (error){
		alert(errorreport);
	}
	else{
		SearchGameConfirm();
	}
}

function CreateGamesPageCheck(){//CreateGames.html
	//date check
	let errorreport = "";
	var error = false;
	var month = document.getElementById('month').value;
	var day = document.getElementById('day').value;
	var year = document.getElementById('year').value;
	var hour = document.getElementById('timebox1').value;
	var minute = document.getElementById('timebox2').value;
	var pn = document.getElementById('pn').value;
	var ad = document.getElementById('Address').value;
	var city = document.getElementById('Cty').value;
	var state = document.getElementById('State').value;
	var zc = document.getElementById('ZipC').value;
	var name = document.getElementById('Area').value;
	var bio = document.getElementById('Bio').value;
	var mp = document.getElementById('MaxPeople').value;
	var pw = document.getElementById('PrivatePW').value;
	var pwc = document.getElementById('PassConf').value;
	{
	//month check
	if (month < 1||month > 12){
		errorreport += "Month is Invalid \n";
		error = true;
	}
	//day check
	if (document.getElementById('day').value.length == 0){
		errorreport += "Day is Invalid \n";
		error = true;
	}
	else if (month == 1||month == 3||month == 5||month == 7||month == 8||month == 10||month == 12){
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
		errorreport += "Minutes is Invalid \n";
		error = true;
	}
	else if (minute.length == 0){
		errorreport += "Minutes is Invalid \n";
		error = true;
	}
	//Phone Number check
	if(pn.length == 0){
		errorreport += "Please enter a phone number \n";
		error = true;
	}
	else{
		pn = pn.split("");
		if (pn.length != 10){
			errorreport += "Please enter a valid phone number \n";
			error = true;
		}
		else{
			for (var i = 0; i < pn.length; i++){
				if (checkNum(pn[i]) == false){
					errorreport += "Please enter a valid phone number \n";
					error = true;
					break;
				}
			}
		}
	}
	}
	if (ad.length == 0){
		errorreport += "Please enter an address \n";
		error = true;
	}
	if (city.length == 0){
		errorreport += "Please enter a city \n";
		error = true;
	}
	if (state.length == 0){
		errorreport += "Please enter a state \n";
		error = true;
	}
	if (zc.length == 0){
		errorreport += "Please enter a zip code \n";
		error = true;
	}
	if (document.getElementById('Yes').style.backgroundColor == "darkgray"){
		if (pw.length == 0){
			errorreports += "Please enter a password \n";
			error = true;
		}
		else if (pw.value != pwc.value){
			errorreports += "Passwords do not match \n";
			error = true;
		}
	}
	if (document.getElementById('am').style.backgroundColor == "darkgray"){
		var ampm = true;
	}
	else{
		var ampm = false;
	}
	//determine action
	if (error == true){
		alert(errorreport);
	}
	else{
		newGame(month, day, year, hour, minute, ampm, pn, ad, city, zc, name, bio, mp, pw);
		CreateGameConfirm();
	}
}

//check if element is a number
function checkNum(item){
	if ((item == 0)||(item == 1)||(item == 2)||(item == 3)||(item == 4)||(item == 5)||(item == 6)||(item == 7)||(item == 8)||(item == 9)){
		return true;
	}
	return false;
}

//Object Stuff
function newGame(month, day, year, hour, minute, ampm, phone, address, city, zip, area, info, max, pw){
	let newCase = new Game(month, day, year, hour, minute, ampm, phone, address, city, zip, area, info, max, pw);
	gameList[numGames++] = newCase;
	for(var i = 0; i < numGames; i++){
		console.dir(gameList[i]);
	}
}

function Game(month, day, year, hour, minute, ampm, phone, address, city, zip, area, info, max, pw){
	this.month = month;
	this.day = day;
	this.year = year;
	this.hour = hour;
	this.minute = minute;
	this.isam = ampm;
	this.phone = phone;
	this.address = address;
	this.city = city;
	this.zip = zip;
	this.area = area;
	this.info = info;
	this.maxp = max;
	this.pw = pw;
}
