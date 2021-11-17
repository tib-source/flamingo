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

const PlaceHolder = styled.div`
  height: 450px;
  flex: 1;
  background: red;
`;

const FormDiv = styled(flex)`
  height: 100%;
  background: ${Color.white};
  flex-flow: column;
  flex: 1;
  padding: 3rem;
  gap: 1rem;
  label {
    display: grid;
    gap: 0.2rem;
  }
  form {
    display: grid;
    gap: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  input {
    border: none;
    background: inherit;
    border-bottom: 1px solid ${Color.gray};
    padding: 0.25rem 0.75rem;
    outline: none;

    &:focus {
      border-bottom: 2px solid ${Color.black};
    }
  }
`;

const Group = styled(flex)`
  gap: 1rem;
`;
const Contact = () => {
  return (
    <Container>
      <Title title="Contact" />
      <Wrapper>
        <PlaceHolder className="text"></PlaceHolder>
        <FormDiv className="form">
          <h3> Contact us </h3>
          <form>
            <Group>
              <label>
                FIRST NAME
                <input type="text" placeholder="Enter your first name" />
              </label>
              <label>
                Last NAME
                <input type="text" placeholder="Enter your last name" />
              </label>
            </Group>
            <Group>
              <label>
                Email
                <input type="email" placeholder="Enter your email" />
              </label>
              <label>
                Phone Number
                <input type="tel" placeholder="Enter your phone number" />
              </label>
            </Group>
            <label>
              Message
              <input type="text" placeholder="Enter your message" />
            </label>
            <button> Submit -></button>
          </form>
          <div className="email">
            EMAIL US
            <a href="mailto:admin@flamingo-restaurant.com">
              admin@flamingo-restaurant.com
            </a>
          </div>
        </FormDiv>
      </Wrapper>
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
