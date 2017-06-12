import React from "react";

import Footer from "./footer";
import Header from "./header";
import Login from "../login";
var style = require('../../scss/style.scss');

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
      :D
        <Login />
      </div>
    );
  }
}
