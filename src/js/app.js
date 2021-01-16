import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';

import "../sass/main.scss";
import "../sass/theme-colors.scss";
//PAGES IMPORTS
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

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

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/sobre-mim" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  </ HashRouter>, 
  documentRoot);
