import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a className="navbar_elements" href="./">
          Home
        </a>
        <a className="navbar_elements" href="#">
          About
        </a>
        <a className="navbar_elements" href="#">
          Prosjekter
        </a>
        <a className="navbar_elements" href="#">
          Kontakt
        </a>
        <div className="links" style={{ border: "none" }}>
        </div>
        <a className="navbar_elements" href="#">
          Burgermeny
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
