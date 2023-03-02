import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navlinks = () => {
  const links = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "./omMeg",
    },
    {
      label: "Projects",
      link: "./Projects",
    },
    {
      label: "Contact",
      link: "./contact",
    },
  ];

  const [p, setP] = useState(0);
  const [linksIndex, setLinksIndex] = useState(0);

  const handleClick = (index) => {
    setP(15 + (45 / links.length) * index);
    setLinksIndex(index);
    console.log(p);
    /*
    if (i === 0) {
      i = 1;
      let elem = document.getElementsByClassName("navbar_progressbar");
      let width = 1;
      let id = setInterval(frame, 10);
      function frame() {
        if (width >= 50) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem[0].style.width = width + "%";
          console.log("progressbar");
        }
      }
    } */
  };

  return (
    <nav>
      <ul className="links">
        {links.map((links, index) => (
          <Link
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            className="navbar_elements"
            to={links.link}
            alt={links.label}
          >
            {links.label}
          </Link>
        ))}
        <li className="navbar_elements">
          <AiOutlineMenu style={{ fontSize: "2rem" }} />
        </li>
        <div className="navbar_progressbar" style={{ width: p + "%" }}>
          {links[linksIndex].label}
        </div>
      </ul>
    </nav>
  );
};

export default Navlinks;
