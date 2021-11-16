import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home/Home";
import Header from "./Header/Header";
import Dropdown from "./Dropdown/Dropdown";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import Footer from "./Footer/Footer";
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
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer HeaderData={HeaderData} />

    </Router>
  );
}

export default App;
