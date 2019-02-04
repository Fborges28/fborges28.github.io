import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre-mim" component={About} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
  </ BrowserRouter>, 
  documentRoot);
