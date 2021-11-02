import Header from "./Header/Header";
import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
import Hero from "./Hero/Hero";
import { SliderData } from "../data/SliderData";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header HeaderButtonData={HeaderButtonData} HeaderData={HeaderData} />
      <Hero SliderData={SliderData} />
    </Router>
  );
}

export default App;
