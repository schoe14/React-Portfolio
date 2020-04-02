import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Seohui's Portfolio
      </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
            </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className={window.location.pathname === "/portfolio"
                  ? "nav-link dropdown-toggle nav-link active"
                  : "nav-link dropdown-toggle"
                }
                id="navbarDropdownPortfolio" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"
              >
                Portfolio
            </Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                <Link to="/portfolio" className="dropdown-item">Good-Cuisine</Link>
                <Link to="/portfolio" className="dropdown-item">Pack-It</Link>
                <Link to="/portfolio" className="dropdown-item">Employee-Directory</Link>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
