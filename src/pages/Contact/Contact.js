import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import { flex } from "../../components/Util/flex";
import { MapApiKey } from "../../data/constants";
import { Color } from "../../data/Color";
const Container = styled(flex)``;
const Wrapper = styled(flex)`
  width: min(90%, 1200px);
  height: min(450px, 50vh);
  margin: 5rem 0;
  iframe {
    height: min(450px, 50vh);
  }

  @media screen and (max-width: 948px) {
    flex-direction: column;
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
const Contact = () => {
  return (
    <Container>
      <Title title="Contact" />
      <Wrapper>
        <iframe
          title="map"
          style={{ border: "0", flex: 1 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=${MapApiKey}
            &q=Flamingo+Ethiopian+Restaurant`}
        ></iframe>
        <Content>
          <h1>Find US</h1>
          <p>Address: 31 Goldhawk Rd, Sheperd’s bush, W12 8QQ, London. </p>
          <p>Phone No: 020 8740 7865 </p>
          <p>
            Email:
            <a href="mailto:admin@flamingo-restaurant.com">
              admin@flamingo-restaurant.com
            </a>
          </p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Contact;
