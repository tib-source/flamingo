import React from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Util/Button";
import { flex } from "../Util/flex";
import Background from "./../../images/background-min.jpg";

const Container = styled.section`
  width: 100%;
  height: 30vh;
  max-height: 1100px;
  position: relative;
  z-index: 1;
  display: block;
`;

const BG = styled.div`
  position: absolute;
  top: -10vh;
  left: 0;
  background: url(${Background}) no-repeat center;
  width: 100%;
  height: 40vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 40vh;
    background: linear-gradient(0deg, #ffffff2b 0%, #ffffff2b 50%, #000 100%);
    opacity: 0.6;
    z-index: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  h1 {
    z-index: 1;
    font-size: min(10vw, 5rem);
    text-transform: uppercase;
    filter: drop-shadow(3px 3px 1px ${Color.orange});
  }
`;
const Title = (props) => {
  return (
    <Container>
      <BG></BG>
      <Wrapper>
        <h1>{props.title}</h1>
      </Wrapper>
    </Container>
  );
};

export default Title;
