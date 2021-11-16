import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../pages/Home/Home";
import Header from "./Header/Header";
import Dropdown from "./Dropdown/Dropdown";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import Footer from "./Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from "../pages/Menu/Menu";
import BookTable from "../pages/Book/BookTable";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
function App() {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!IsOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])


  return (
    <Router>
      <GlobalStyle />
      <Header
        toggle={toggle}
        HeaderButtonData={HeaderButtonData}
        HeaderData={HeaderData}
      />
      {IsOpen && (
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

    </Router>
  );
}

export default App;
