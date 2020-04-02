import React from "react";
import { Link, useEffect } from "react-router-dom";
import "./style.css";

function Navbar() {
  // useEffect(() => {
  //   $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });
  // }, []);

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

            <li className="nav-item">
              <Link
                to="/portfolio"
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
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
            </Link>
            </li>

            {/* <li className="nav-item dropdown">
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
                <Link to="/portfolio/#good-cuisine" className="dropdown-item">Good-Cuisine</Link>
                <Link to="/portfolio/#pack-it" className="dropdown-item">Pack-It</Link>
                <Link to="/portfolio/#employee-directory" className="dropdown-item">Employee-Directory</Link>
              </div>
            </li> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
