import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [path, setPath] = useState(window.location.pathname);
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  const handleToggle = () => {
    setToggle("hide");
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Seohui's Portfolio</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${toggle}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link
                to="/about"
                onClick={() => setPath("/about")}
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
            </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/portfolio"
                onClick={() => setPath("/portfolio")}
                className={
                  window.location.pathname === "/portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
            </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                onClick={() => setPath("/contact")}
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
            </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact"
                  ? "nav-link dropdown-toggle nav-link active"
                  : "nav-link dropdown-toggle"
                }
                id="navbarDropdownPortfolio" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"
              >
                Connect
            </Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <a href="https://github.com/schoe14" target="blank" className="dropdown-item"><i className="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/seohui-choe-009522b6/" target="blank" className="dropdown-item"><i
                  className="fa fa-linkedin"></i></a>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
