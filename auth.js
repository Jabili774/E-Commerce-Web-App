// ===============================
// ShopEase Authentication
// ===============================

// ---------- Signup ----------
const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("signupName").value;

const email = document.getElementById("signupEmail").value;

const password = document.getElementById("signupPassword").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match!");

return;

}

const user = {

name,

email,

password

};

localStorage.setItem("user", JSON.stringify(user));

alert("Account created successfully!");

window.location.href = "login.html";

});

}

// ---------- Login ----------
const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("loginEmail").value;

const password = document.getElementById("loginPassword").value;

const user = JSON.parse(localStorage.getItem("user"));

if(user && user.email === email && user.password === password){

alert("Login Successful!");

window.location.href = "index.html";

}else{

alert("Invalid Email or Password!");

}

});

}
