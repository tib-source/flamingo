import Header from "./Header/Header";
import { GlobalStyle } from "./globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderData, HeaderButtonData } from "../data/HeaderData";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header HeaderButtonData={HeaderButtonData} HeaderData={HeaderData} />
    </Router>
  );
}

export default App;
