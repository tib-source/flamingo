import { createGlobalStyle } from "styled-components";
import { Color } from "../data/Color";
export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

body, html{ 
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  overflow: auto;
  box-sizing: inherit;
  background-color: ${Color.black};
}
`;
