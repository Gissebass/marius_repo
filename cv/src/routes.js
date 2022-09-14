import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import MainComponent from "./views/home/homeComponents/MainComponent.js";

const Routes = () => {
  return (
    <Route path="/">
      <MainComponent />
    </Route>
  );
};

export default Routes;
