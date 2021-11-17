import { createGlobalStyle, keyframes } from "styled-components";

const fadeOutMenu = keyframes`
  0%{
    transform: translateX(0px);
  }
  100%{    opacity: 0;

  }
`;

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




 .fadeout {
    animation: ${fadeOutMenu} 0.5s cubic-bezier(0,.92,0,.93);
  }
`;
