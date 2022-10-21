import React from "react";
import "./Navbar.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div classname="navbar_elements">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default Navbar;
