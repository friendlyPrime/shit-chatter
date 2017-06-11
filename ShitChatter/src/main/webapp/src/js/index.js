/*var commonText = require('./common-text.js');

import Button from './components/button';
import Logo from './components/image';
import Spinner from './components/spinner';

var newMessage =() => (`
    <p>
        ${commonText.appName}
        ${Logo}
    </p>
  `);

var newButton =() => (Button.button);
class Layout extends React.Compontet{
    render(){
      return(
        <div>
          <p>Logga in</p>
        </div>
      )
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

*/


import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layout/layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

if(module.hot){
    module.hot.accept();
}
