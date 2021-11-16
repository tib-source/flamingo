import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html{ 

  width: 100%;
  font-family: 'Poppins', sans-serif;
  overflow: auto;
  box-sizing: inherit;
 }
`;
