var login = require('./login.js');

var app = document.getElementById("app");
app.innerHTML = "<p>login with username: "+ login.username + " and password: "+ login.password +"</p>";
