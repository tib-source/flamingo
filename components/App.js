import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { Suspense, lazy } from "react";
import "aos/dist/aos.css";
import Header from "./Header/Header";
import About from "./../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import BookTable from "../pages/Book/BookTable";
import Dropdown from "./Dropdown/Dropdown";

const Home = lazy(() => import("../pages/Home/Home"));

function App() {


  return (
    <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/book" component={BookTable} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
