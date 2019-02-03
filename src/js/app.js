import React from "react";
import ReactDOM from "react-dom";
import "../sass/main.scss";
//PAGES IMPORTS
import Home from "./pages/home";

let documentRoot = document.getElementById("appRoot");


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Home/>
    )
  }
}

ReactDOM.render(<App />, documentRoot);
