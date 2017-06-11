console.log("Hejsan svejsan i lingon skogen");
import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component{
          render(){
            return (
              <h1>it works!</h1>
            );
          }
}

const app = document.getElementById('app');

ReatDOM.render(<Layout/>, app);
