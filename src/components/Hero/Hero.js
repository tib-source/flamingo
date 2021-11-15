import React from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Util/Button";
import { flex } from "../Util/flex";
import Background from "./../../images/background.jpg";

const HeroContainer = styled.section`
  width: 100%;
  height: 90vh;
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
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100vh;
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
  align-items: center;
`;

const Content = styled(flex)`
  flex-direction: column;
  border: 3px solid ${Color.trueWhite};
  backdrop-filter: brightness(1) blur(3px) sepia(0.7);
  width: min(90vw, 1000px);
  padding: 7rem 0;
  text-align: center;
  gap: 2rem;
  h1 {
    font-size: 5rem;
    color: ${Color.black};
    padding: 0;
    margin: 0;
    filter: drop-shadow(3px 3px 0.5px ${Color.orange});
    font-style: italic;
  }
  small {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
    color: ${Color.white};
    font-weight: 700;
    filter: drop-shadow(2px 2px 0.5px ${Color.black});
  }
  span {
    color: ${Color.orange};
  }
`;

const CTAButtons = styled(flex)`
  gap: 1rem;

  & > * {
    width: 145px;
  }
`;

const Text = styled(flex)`
  flex-direction: column;
`;
const Hero = () => {
  return (
    <HeroContainer>
      <BG></BG>
      <Wrapper>
        <Content>
          <Text>
            <h1>Flamingo Restaurant</h1>
            <small>
              Experience <span>Authentic</span> Ethiopian cuisine
            </small>
          </Text>
          <CTAButtons>
            <Button to="/" big>
              Menu
            </Button>
            <Button to="/" big>
              Book A Table
            </Button>
          </CTAButtons>
        </Content>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
