import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import Home from "./components/home";
import Calculator from "./components/calculator";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cs">
            <Calculator branch="cs" />
          </Route>
          <Route path="/it">
            <Calculator branch="it" />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
