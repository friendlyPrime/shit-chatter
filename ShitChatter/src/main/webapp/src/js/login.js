import React from "react";
import ReactDOM from "react-dom";
import { Glyphicon } from 'react-bootstrap';

import Logo from './components/logo';

require('../scss/login.scss');

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <Logo />
        <div className="grid">
        <form action="/api/users" method="POST" className="form login">
            <div className="form__field">
              <label htmlFor="login__username"><Glyphicon glyph="user"/><span className="hidden">Username</span></label>
              <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required=""/>
            </div>

            <div className="form__field">
              <label htmlFor="login__password"><svg className="icon"></svg><span className="hidden">Password</span></label>
              <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required="" />
            </div>

            <div className="form__field">
              <input type="submit" value="Sign In"></input>
            </div>
        </form>

      </div></div>
      )
    }
}
