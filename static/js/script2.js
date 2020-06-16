function login(){

	var input1 = document.getElementById('username').value;
	var input2 = document.getElementById('password').value;


	if ((input1 == "123") && (input2 == "123")){
		window.open('https://www.google.com');
	}
	else
		alert("Invalid Username & Password! Username & Password is 123")
		window.open('index2.html');
}

