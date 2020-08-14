import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { NavBar } from "./Components/NavBar";
import { Jumbotron } from "./Components/Jumbotron";

import Contact from "./pages/Contact";

function App() {
  const navBarItems = [
    {
      link: "/",
      value: "Home",
    },
    {
      link: "/about",
      value: "About",
    },
    {
      link: "/contact",
      value: "ContactUs",
    },
  ];
  return (
    <div>
      <div>
        <NavBar NavBrandValue="CodeLife" NavBrandLink="/" items={navBarItems} />
        <Jumbotron />
      </div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
