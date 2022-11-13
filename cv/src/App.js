import "./App.css";
import "./Navbar/Navbar.css";
import AppRoutes from "./routes";
import React from "react";
import Navbar from "./Navbar/Navbar";
import "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
            <AppRoutes />
      </div>
    </div>
  );
}

export default App;
