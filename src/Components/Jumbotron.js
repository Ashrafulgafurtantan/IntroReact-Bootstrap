import React from "react";
import "./Jumbotron.css";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

export const Jumbotron = () => (
  <Jumbo>
    <div className="overly"></div>
    <Container>
      <h1 className="display-4 ">Welcome</h1>
      <p className="lead ">Here You Can Learn Code From Stratch!!!</p>
    </Container>
  </Jumbo>
);
