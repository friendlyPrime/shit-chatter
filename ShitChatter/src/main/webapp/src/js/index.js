var commonText = require('./common-text.js');

import Button from './components/button';
import Logo from './components/image';

var newMessage =() => (`
    <p>
        ${commonText.appName}
        ${Logo}
    </p>
  `);

var newButton =() => (Button.button);

var app = document.getElementById("app");
app.innerHTML = newMessage();

Button.attachEl();

if(module.hot){
    module.hot.accept();
}
