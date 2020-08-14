import React from "react";
import * as ReactBootStrap from "react-bootstrap";
export const NavBar = (props) => (
  <div>
    <ReactBootStrap.Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href={props.NavBrandLink}>
        {props.NavBrandValue}
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          {props.items.map((item, index) => {
            return (
              <ReactBootStrap.Nav.Link key={index} href={item.link}>
                {item.value}
              </ReactBootStrap.Nav.Link>
            );
          })}
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  </div>
);
