import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}

body, html{ 
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  box-sizing: inherit;
}
`;
