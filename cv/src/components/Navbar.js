import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="navbar_elements" to="./" alt="Home">
          Home
        </Link>
        <Link className="navbar_elements" to="#" alt="About">
          About
        </Link>
        <Link className="navbar_elements" to="./Projects" alt="Prosjekter">
          Prosjekter
        </Link>
        <Link className="navbar_elements" to="./contact" alt="Kontakt">
          Kontakt
        </Link>
        <div className="links" style={{ border: "none" }}></div>
        <Link className="navbar_elements" style={{margin: "3rem"}} to="#">
          Burgermeny
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
