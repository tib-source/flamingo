import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Title from "../components/Title/Title";
import { flex } from "../components/Util/flex";
import { MapApiKey } from "../data/constants";
import { Color } from "../data/Color";
import { BsArrowRight } from "react-icons/bs";
import Meta from "../components/Meta";

const Container = styled(flex)`
  flex-flow: column;
  background: ${Color.white};
`;

const heightCss = css`
  height: 50vh;
  width: min(100%, 1000px);
`;
// const contentCss = css`
//   align-items: flex-start;
//   flex: 1;
//   padding: 2rem;
//   background: ${Color.white};
//   height: 100%;
//   width: 100%;
// `;

const wrapperCss = css`
  width: min(90vw, 1000px);
  margin: 5rem 0;
  @media screen and (max-width: 948px) {
    flex-direction: column-reverse;
  }
`;
const Wrapper = styled(flex)`
  ${wrapperCss}
  margin: 0 0 5rem 0;

  @media screen and (max-width: 948px) {
    flex-direction: column;
  }
  iframe {
    width: 100%;
    height: 50vh;
  }
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
  @media screen and (max-width: 948px) {
    padding: 1rem 0;

    .second {
      width: 90%;
    }
  }
  .second {
    width: 90%;
    display: grid;
    justify-content: center;
    text-align: left;

    a {
      cursor: pointer;
      all: unset;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      margin-left: 0.3rem;
      cursor: pointer;
      padding: 0.5rem 1rem 0.5rem 0rem;
      transition: 400ms ease-in;
      color: ${Color.gray};
      &:hover {
        color: ${Color.red};
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
    font-size: min(5vw, 2rem);
    padding-bottom: 1rem;
    color: ${Color.black};
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
      color: ${Color.red};
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
  cursor: pointer;
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
      <Meta title="Contact | Flamingo Restaurant" />
      <Title title="Contact" />
      <Second>
        <PlaceHolder className="text">
          <p>We would love to hear from you</p>
        </PlaceHolder>
        <FormDiv className="form">
          <h3> Contact Flamingo </h3>
          <form name='Contact' data-netlify="true" method="POST">
            <input type="hidden" name="form-name" value="Contact" />
            <Group>
              <label>
                FIRST NAME
                <input type="text" name="first name" placeholder="Enter your first name" />
              </label>
              <label>
                LAST NAME
                <input type="text" name="last name" placeholder="Enter your last name" />
              </label>
            </Group>
            <Group>
              <label>
                Email
                <input type="email" name="email" placeholder="Enter your email" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone number" placeholder="phone number" />
              </label>
            </Group>
            <label>
              Message
              <input name="message" type="text" placeholder="Enter your message" />
            </label>
            <button type="submit" >
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
          title="map"
          style={{ border: "0", flex: 1 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${MapApiKey}
            &q=Flamingo+Ethiopian+Restaurant`}
        ></iframe>
        <PlaceHolder>
          <Group className="second">
            <h3>Find US</h3>
            <p>Address: 31 Goldhawk Rd, Sheperd’s bush, W12 8QQ, London. </p>
            <p>Phone No: <a href='tel:02087407865'>020 8740 7865</a> </p>
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
