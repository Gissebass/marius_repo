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
        <a className="navbar_elements" href="#">Prosjekter</a>
        <a className="navbar_elements" href="#">Kontakt</a>
        <div className="links" style={{border:"none"}}>
        <img className="navbar_plante" src="/plante.png" alt="plante"></img>
        </div>
        <a className="navbar_elements" href="#">Burgermeny</a>
      </div>
    </nav>
  );
};

export default Navbar;
