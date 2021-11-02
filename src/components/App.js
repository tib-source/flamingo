import Header from "./Header/Header";
import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import Hero from "./Hero/Hero";
import { SliderData } from "../data/SliderData";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

function App() {
  const [IsOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!IsOpen);
  };
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
      <Hero SliderData={SliderData} />
    </Router>
  );
}

export default App;
