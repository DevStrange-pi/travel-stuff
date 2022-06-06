/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // const [navclass, setNavclass] = useState("nav-link");
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark"
      style={{ opacity: "0.9", backgroundColor: "#93bff2" }}
    >
      <div className="container container-fluid">
        <a
          href="/"
          className="navbar-brand"
          style={{
            color: "#f3fa57",
            textShadow: "2px 2px red",
            letterSpacing: "3px",
          }}
        >
          TRAVELSTUFF
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav nav ms-auto mb-2 mb-lg-0"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item me-5">
              <NavLink to="/" aria-current="page" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/bookings"
                //onClick={() => setNavclass("nav-link active")}
                className="nav-link"
              >
                Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
