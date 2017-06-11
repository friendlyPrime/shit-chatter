import React from "react";

import Footer from "./footer";
import Header from "./header";

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
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div>
          <input type="text"/>
          <input type="password"/>
        </div>
        <Footer />
      </div>
    );
  }
}
