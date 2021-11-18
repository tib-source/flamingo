import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import React, { Suspense, lazy } from "react";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import About from "./../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import BookTable from "../pages/Book/BookTable";
import Dropdown from "./Dropdown/Dropdown";

const Home = lazy(() => import("../pages/Home/Home"));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (element = null) => {
    if (isOpen && element.current) {
      element.current.classList.add("fadeout");
      setTimeout(() => {
        element.current.classList.add("fadeout");
        setIsOpen(!isOpen);
      }, 200);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div className="loader">
            <svg className="loading" viewBox="25 25 50 50">
              <circle cx="50" cy="50" r="20"></circle>
            </svg>
          </div>
        }
      >
        <GlobalStyle />
        <Header
          toggle={toggle}
          HeaderButtonData={HeaderButtonData}
          HeaderData={HeaderData}
        />
        {isOpen && (
          <Dropdown
            toggle={toggle}
            HeaderButtonData={HeaderButtonData}
            HeaderData={HeaderData}
          />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/book" component={BookTable} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer HeaderData={HeaderData} />
      </Suspense>
    </Router>
  );
}

export default App;
