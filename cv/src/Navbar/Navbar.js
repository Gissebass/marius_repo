import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import PokemonAPI from "./NavbarComponents/pokemonAPI";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <Link className="navbar_elements" to="./" alt="Home">
          Home
        </Link>
        <Link className="navbar_elements" to="./omMeg" alt="omMeg">
          Om meg
        </Link>
        <Link className="navbar_elements" to="./Projects" alt="Prosjekter">
          Prosjekter
        </Link>
        <Link className="navbar_elements" to="./contact" alt="Kontakt">
          Kontakt
        </Link>
        <div className="navbar_elements" width="200" height="200" style={{backgroundColor: "red"}}>
          <PokemonAPI />
        </div>
        <div className="links" style={{ border: "none" }}></div>
        <Link className="navbar_elements" style={{ margin: "3rem" }} to="#">
          Burgermeny
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
