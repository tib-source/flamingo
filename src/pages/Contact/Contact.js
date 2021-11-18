import React from "react";
import styled, { css } from "styled-components";
import Title from "../../components/Title/Title";
import { flex } from "../../components/Util/flex";
import { MapApiKey } from "../../data/constants";
import { Color } from "../../data/Color";
import { BsArrowRight } from "react-icons/bs";
const Container = styled(flex)`
  flex-flow: column;
  background: ${Color.white};
`;

const heightCss = css`
  height: min(600px, 50vh);
`;
const contentCss = css`
  align-items: flex-start;
  flex: 1;
  padding: 2rem;
  background: ${Color.white};
  height: 100%;
  width: 100%;
`;

const wrapperCss = css`
  width: min(90%, 1000px);
  margin: 5rem 0;
  @media screen and (max-width: 948px) {
    flex-direction: column-reverse;
  }
`;
const Wrapper = styled(flex)`
  ${heightCss}
  width: min(90%, 1000px);
  margin: 0 0 5rem 0;

  @media screen and (max-width: 948px) {
    flex-direction: column;
  }
  iframe {
    ${heightCss}
  }
`;
const Content = styled(flex)`
  ${contentCss}
`;

const Second = styled(flex)`
  ${wrapperCss}
  margin-bottom: 0;
`;
const PlaceHolder = styled(flex)`
  ${heightCss}
  flex: 1;
  background: ${Color.black};
  color: ${Color.orange};

  .second {
    width: 60%;
    justify-content: flex-start;
    text-align: left;

    a {
      cursor: pointer;
      all: unset;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;
      padding: 0.5rem 1rem 0.5rem 0rem;
      transition: 400ms ease-in;
      color: ${Color.gray};
      &:hover {
        color: red;
      }
    }
  }
`;

const FormDiv = styled(flex)`
  ${heightCss}
  background: ${Color.white};
  flex-flow: column;
  flex: 1;
  gap: 1rem;
  border: 2px solid ${Color.black};
  h3 {
    font-size: min(3vw, 2rem);
    padding-bottom: 1rem;
    color: ${Color.black};
    filter: drop-shadow(2px 2px 1px ${Color.orange});
  }
  @media screen and (max-width: 948px) {
    padding: 2rem;
    label {
      width: 100%;
    }
  }
  label {
    display: grid;
    gap: 0.2rem;
  }
  form {
    display: grid;
    gap: 1rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    font-weight: 550;
    color: ${Color.lightBlack};
  }

  input {
    border: none;
    background: inherit;
    border-bottom: 1px solid ${Color.gray};
    padding: 0.5rem 0.75rem;
    outline: none;
    font-family: inherit;

    &:focus {
      border-bottom: 2px solid ${Color.black};
      border-radius: 0.1rem;
    }
  }

  button {
    cursor: pointer;
    all: unset;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    padding: 0.5rem 1rem 0.5rem 0rem;
    transition: 400ms ease-in;
    &:hover {
      color: red;
    }
  }
`;

const Group = styled(flex)`
  gap: 1rem;
`;
const Email = styled.div`
  align-self: flex-start;
  display: flex;
  flex-flow: column;
  font-size: 0.75rem;
  font-weight: 550;
  padding: 0rem 3.5rem;
  color: ${Color.lightBlack};
  a {
    all: unset;
    font-weight: 500;
    color: ${Color.green};
    transition: 400ms ease-in;
    &:hover {
      color: ${Color.red};
    }
  }

  @media screen and (max-width: 948px) {
    padding: 0;
  }
`;
const Contact = () => {
  return (
    <Container>
      <Title title="Contact" />
      <Second>
        <PlaceHolder className="text">
          <p>We would love to hear from you</p>
        </PlaceHolder>
        <FormDiv className="form">
          <h3> Contact Flamingo </h3>
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
                <input type="tel" placeholder="phone number" />
              </label>
            </Group>
            <label>
              Message
              <input type="text" placeholder="Enter your message" />
            </label>
            <button>
              Submit <BsArrowRight />
            </button>
          </form>
          <Email className="email">
            EMAIL US
            <a href="mailto:admin@flamingo-restaurant.com">
              admin@flamingo-restaurant.com
            </a>
          </Email>
        </FormDiv>
      </Second>
      <Wrapper>
        <iframe
          width="540px"
          height="500px"
          title="map"
          style={{ border: "0", flex: 1 }}
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=${MapApiKey}
            &q=Flamingo+Ethiopian+Restaurant`}
        ></iframe>
        <PlaceHolder>
          <Group className="second">
            <h3>Find US</h3>
            <p>Address: 31 Goldhawk Rd, Sheperd’s bush, W12 8QQ, London. </p>
            <p>Phone No: 020 8740 7865 </p>
            <p>
              Email:
              <a href="mailto:admin@flamingo-restaurant.com">
                admin@flamingo-restaurant.com
              </a>
            </p>
          </Group>
        </PlaceHolder>
      </Wrapper>
    </Container>
  );
};

export default Contact;
