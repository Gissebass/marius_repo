import "./App.css";
import "./Navbar/Navbar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import React from "react";
import Navlinks from "./Navbar/Navlinks";

function App() {
  return (
    <Router>
      <div className="App">
        <Navlinks />
        <div className="content">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
