import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../data/Color";
const Hero = ({ SliderData }) => {
  console.log(SliderData);
  return (
    <HeroContainer>
      <HeroWrapper>
        {SliderData.map((elem, indx) => (
          <HeroContent key={indx}>
            <Text>
              <h2>{elem.title}</h2>
              <p>{elem.paragraph}</p>
            </Text>
            <img src={elem.image} alt="home" />
          </HeroContent>
        ))}
      </HeroWrapper>
    </HeroContainer>
  );
};
const Text = styled.div``;

const HeroContent = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeroWrapper = styled.div`
  z-index: 1;
  background-color: ${Color.red};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
export default Hero;
