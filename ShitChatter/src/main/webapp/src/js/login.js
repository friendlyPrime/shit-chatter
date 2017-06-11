import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Compontet{
    render(){
      return(
        <div>
        <p>Logga in/p>
        </div>
      )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
