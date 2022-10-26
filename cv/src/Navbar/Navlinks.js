import React from "react";
import NavbarElements from "./NavbarElements";
import { AiOutlineMenu } from "react-icons/ai";

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
    <nav className="navbar">
      <ul className="links">
        {links.map(({ link, label, index }) => (
          <NavbarElements link={link} label={label} index={index} />
        ))}
        <li className="navbar_elements" to="#">
          <AiOutlineMenu style={{ fontSize: "2rem" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Navlinks;
