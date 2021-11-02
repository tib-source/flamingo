import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../data/Color";
const Hero = ({ SliderData }) => {
  console.log(SliderData);
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent></HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};
const Text = styled.div`
  font-weight: 700;
  color: ${Color.white};

  span {
    color: ${Color.red};
  }
`;

const HeroContent = styled.div`
  width: 1000px;
  max-width: 90vw;
  height: 600px;
  background: ${Color.orange};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in;
  gap: 1rem;
`;
export default Hero;
