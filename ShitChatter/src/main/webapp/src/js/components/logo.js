import React from "react";
const icon = require('../../img/poop-emoji.png');
const Image = `<img src="${icon}">`;

export default class Logo extends React.Component {
  render() {
    return (
      <div>
      <img className="login-logo" src={ require('../../img/poop-emoji.png') }/>
      </div>
      )
    }
}
