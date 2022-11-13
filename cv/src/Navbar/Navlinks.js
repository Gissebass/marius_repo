import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navlinks = () => {
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Om meg",
      link: "./omMeg",
    },
    {
      label: "Prosjekter",
      link: "./Projects",
    },
    {
      label: "Kontakt",
      link: "./contact",
    },
  ];
  return (
    <nav>
      <ul className="links">
        {links.map((links, index) => (
          <Link
            className="navbar_elements"
            to={links.link}
            alt={links.label}
            key={index}
          >
            {links.label}
          </Link>
        ))}
        <li className="navbar_elements">
          <AiOutlineMenu style={{ fontSize: "2rem" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
