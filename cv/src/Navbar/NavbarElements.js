import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"

const NavbarElements = ({ label, link, index }) => {
  return (
    <Link to={link} className="navbar_elements" alt={label}>
      {label}
    </Link>
  );
};

export default NavbarElements;
