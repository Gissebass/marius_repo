import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import MainComponent from "./views/home/homeComponents/MainComponent.js";
import Contact from "./views/Contact/Contact.js";
import Projects from "./views/projects/Projects.js"

const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <MainComponent />
      </Route>
      <Route exact path="/Contact">
        <Contact />
      </Route>
      <Route exact path="/Projects">
        <Projects />
      </Route>
    </>
  );
};

export default Routes;
