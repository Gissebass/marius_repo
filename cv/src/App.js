import "./App.css";
import Navbar from "./components/Navbar.js";
import "./components/Navbar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import React from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
