//your JS code here. If required.
var name1 = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPass = document.getElementById("confirm-password").value;
var btn = document.getElementById("submit");

btn.addEventListener("click",function(){
	if(password===confirmPass){
		sessionStorage.setItem(name1,email,password, JSON.stringify(name1,email,password));
		alert("Sign up successful!")
	}
	else{
		alert("Passwords do not match");
	}}
})