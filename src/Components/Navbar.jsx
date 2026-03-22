import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    const collapse = document.getElementById("mainNavbar");
    if (collapse && collapse.classList.contains("show")) {
      document.querySelector(".navbar-toggler")?.click();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "nav-solid" : "nav-transparent"
      }`}
    >
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <span className="logo-icon">⬡</span> Gruhhlaxmi
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-4">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>HOME</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>ABOUT US</Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown hover-dropdown">
              <span 
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/real-estate" onClick={closeMenu}>
                    Real Estate
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/interior" onClick={closeMenu}>
                    Interior & Exterior
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/vastu" onClick={closeMenu}>
                    Vastu Consultations
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/temple-designs" onClick={closeMenu}>
                    Temple Designs
                  </Link>
                </li>
              </ul>
            </li>

            {/* PROJECTS */}
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeMenu}>PROJECTS</Link>
            </li>
          </ul>

          {/* CALL BUTTON */}
          <a href="tel:+919876543210" className="btn btn-touch">
            <span className="icon-circle">
              <i className="bi bi-telephone-fill"></i>
            </span>
            Call Anytime
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
