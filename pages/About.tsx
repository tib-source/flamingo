import React from "react";
import Title from "../components/Title/Title";
import { flex } from "../components/Util/flex";
import styled from "styled-components";
import { Color } from "../data/Color";
import { aboutUs } from "../data/AboutUsData";
const Container = styled(flex)`
  flex-flow: column;
  background: ${Color.white};
`;
const Wrapper = styled(flex)`
  width: min(80%, 1000px);
  margin: 10rem 0;

  h4 {
    font-size: 1.25rem;
  }
  img {
    flex: 1;
    height: min(450px, 50vh);
    object-fit: cover;
  }
`;
const Content = styled(flex)`
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 2rem;

  text-align: justify;
  gap: 1rem;
  background: ${Color.white};
  height: 100%;

  @media screen and (max-width: 600px) {
    padding: 0;
    padding-bottom: 2rem;
  }
`;
const About = () => {
  return (
    <div>
      <Title title={aboutUs.title} />
      <Container>
        <Wrapper>
          <Content>
            <h4>Who we are</h4>
            {aboutUs.paragraphs.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </Content>

          <img src={aboutUs.image} alt="flamingo restaurant interiour" />
        </Wrapper>
      </Container>
    </div>
  );
};

export default About;