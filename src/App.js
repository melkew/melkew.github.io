import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Works from "./Components/Works/Works";
import About from "./Components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Header */}
        <Header />
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* Works */}
          <Route exact path="/works">
            <Works />
          </Route>

          {/* About */}
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
