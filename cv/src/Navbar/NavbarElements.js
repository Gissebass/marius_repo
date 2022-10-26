import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

const NavbarElements = ({ label, link, index }) => {
  console.log("Navbar_elements")
  return (
    <Link to={link} alt={label} key={index}>
      {label}
    </Link>
  );
};

export default NavbarElements;
