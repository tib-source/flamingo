import React from "react";
import Title from "../../components/Title/Title";
import { flex } from "../../components/Util/flex";
import styled from "styled-components";
import { Color } from "../../data/Color";

const Container = styled(flex)`
  flex-flow: column;
  background: ${Color.white};
`;
const Wrapper = styled(flex)`
  width: min(90%, 1200px);
  height: min(450px, 50vh);
  margin: 5rem 0;

  @media screen and (max-width: 948px) {
    flex-direction: column;
  }
  iframe {
    height: min(450px, 50vh);
  }
`;
const Content = styled(flex)`
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  background: ${Color.white};
  height: 100%;
`;
const About = () => {
  return (
    <div>
      <Title title="About Us" />
      <Container>
        <Wrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sed
          rerum ullam alias commodi non, eos fugit ea aspernatur totam ipsum at
          maxime repellendus, laborum eveniet esse quam eius voluptate unde
          quisquam saepe quas veritatis. Debitis totam nobis minima ab.
        </Wrapper>
      </Container>
    </div>
  );
};

export default About;
