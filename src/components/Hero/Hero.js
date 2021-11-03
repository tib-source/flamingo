import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../data/Color";
import { HeroData } from "../../data/HeroData";
import { Button } from "../Button";
const Hero = ({ SliderData }) => {
  console.log(SliderData);
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <Text>
            <h1>{HeroData.title}</h1>
            <span>{HeroData.paragraph}</span>
            <Button reverse={false} to={HeroData.buttonPath}>
              {HeroData.buttonLabel}
            </Button>
          </Text>
          <Image>
            <img src={HeroData.image} alt="injera" />
          </Image>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  );
};
const Text = styled.div`
  justify-self: flex-start;
  z-index: 2;
  color: ${Color.white};
  display: grid;
  justify-content: center;
  place-items: start;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    padding: 0px;
    margin: 0px;
    border: 0;
    font-weight: 700;
  }
  span {
    font-size: clamp(1rem, 4vw, 2rem);
    margin: 0 0 1rem 0;
    color: ${Color.red};
  }
  .Button {
    background: red;
  }
`;

const Image = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid ${Color.black};
  }

  &::before {
    content: "";
    display: block;
    z-index: 999;
    background: linear-gradient(0deg, ${Color.black} 0%, ${Color.white} 100%);
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const HeroContent = styled.div`
  width: 1500px;
  max-width: 90vw;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  } ;
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
