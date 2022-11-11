import React from "react";
import NavbarElements from "./NavbarElements";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

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
        {links.map(({ obj, index }) => (
          <NavbarElements link={obj.link} label={obj.label} key={index} />
        ))}
        <li className="navbar_elements" to="#">
          <AiOutlineMenu style={{ fontSize: "2rem" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
