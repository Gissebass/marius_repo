import { Route, Routes } from "react-router-dom";
import React from "react";
import MainComponent from "./views/home/homeComponents/MainComponent.js";
import Contact from "./views/Contact/Contact.js";
import Projects from "./views/projects/Projects.js";
import About from "./views/about/About";
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/Contact" index element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/omMeg" element={<About />} />
      </Routes>
  );
};

export default AppRoutes;