import React from "react";
import * as ReactBootStrap from "react-bootstrap";
export const NavBar = () => (
  <div>
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="/">
        CodeLife
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/contact">
            ContactUse
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  </div>
);
