import React from "react";

export const NavBar = () => (
  <nav className="navbar bg-dark navbar-expand-lg navbar-dark  ">
    <a className="navbar-brand" href="/">
      CodeLife
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
