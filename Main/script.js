const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function validate(){
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if ( username == "username1" && password == "password1"){
		var search = document.getElementById("Work").value; 
         window.location = 'Main.html'
          alert("Password Correct!")
	  }
	  else{
		alert("Invalid username or password");
		}
	  return false;
	  }