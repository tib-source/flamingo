import React, { useRef } from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Util/Button";
import { flex } from "../Util/flex";
import { attributes as Data } from "../../content/home.md"

const HeroContainer = styled.section`
  width: 100%;
  height: 90vh;
  max-height: 1100px;
  position: relative;
  z-index: 1;
  display: block;
  @media screen and (max-width: 948px) {
    height: 80vh;
  }
`;

const BG = styled.div`
  position: absolute;
  top: -10vh;
  left: 0;
  background: url(${Data.background}) no-repeat center;
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

  @media screen and (max-width: 948px) {
    height: 90vh;
    &::before {
      height: 90vh;
    }
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
  @media screen and (max-width: 796px) {
    padding: 3rem 0;
    margin-bottom: 3rem;
  }
  h1 {
    font-size: min(12vw, 4rem);
    color: ${Color.black};
    padding: 0;
    margin: 0;
    filter: drop-shadow(3px 3px 0.5px ${Color.orange});
    font-style: italic;
    font-weight: 900;
  }
  p {
    font-size: min(4vw, 1.25rem);
    padding: 0;
    margin: 0;
    color: ${Color.white};
    font-weight: 700;
    filter: drop-shadow(2px 2px 0.5px ${Color.lightBlack});
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
  const title = useRef(null);
  return (
    <HeroContainer>
      <BG></BG>
      <Wrapper>
        <Content>
          <Text>
            <h1 data-aos="fade-out" data-aos-offset="200" ref={title}>
              {Data.title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: Data.body }}>
            </p>
          </Text>
          {Data.button &&
            (<CTAButtons>
              {Data.buttonList.map((buttonData: any, index: React.Key) => {
                return (
                  <Button key={index} href={buttonData.buttonPath} $big data-aos={buttonData.animation} data-aos-offset="300">
                    {buttonData.buttonName}
                  </Button>
                )
              })}
              {/* <Button href="/menu" $big data-aos="fade-right" data-aos-offset="300">
                Menu
              </Button>
              <Button href="/book" $big data-aos="fade-left" data-aos-offset="300">
                Book A Table
              </Button> */}
            </CTAButtons>)
          }
        </Content>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;
