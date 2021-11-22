import { createGlobalStyle, keyframes } from "styled-components";
import { Color } from "../data/Color";

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
  background: ${Color.black}
 }

.loader{ 
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100vw;
  height: 100vh;

}

.loading{
  width: 3.75em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}




 .fadeout {
    animation: ${fadeOutMenu} 0.5s cubic-bezier(0,.92,0,.93);
  }
`;
