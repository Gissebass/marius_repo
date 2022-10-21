import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navlinks = () => {
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
        <div className="links" style={{ border: "none" }}></div>
        <Link className="navbar_elements" style={{ margin: "3rem" }} to="#">
          <AiOutlineMenu style={{ fontSize: "3rem"}} />
        </Link>
      </div>
    </nav>
  )
}

export default Navlinks