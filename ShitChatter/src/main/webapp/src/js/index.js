var commonText = require('./common-text.js');

var newMessage =() => (`<p>${commonText.appName} är kung i baren</p>`);

var app = document.getElementById("app");
app.innerHTML = newMessage();

if(module.hot){
    module.hot.accept();
}
