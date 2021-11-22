import React from "react";
import Title from "../components/Title/Title";
import styled from "styled-components";
import { Color } from "../data/Color";
import { flex } from "../components/Util/flex";
import { wrapperCss, heightCss } from "../components/Util/css";
import { BsArrowRight } from "react-icons/bs";
import Meta from "../components/Meta";


const Container = styled(flex)`
  flex-flow: column;
  background: ${Color.white};
`;
const Second = styled(flex)`
  ${wrapperCss}
  width: min(1000px, 90vw);

  margin: 10rem;
`;
const PlaceHolder = styled(flex)`
  ${heightCss}
  flex: 1;
  background: ${Color.black};
  color: ${Color.orange};
  @media screen and (max-width: 948px) {
    padding: 2rem 0;

    .second {
      width: 90%;
    }
  }
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
    width: min(200px, 50vw);
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

const Group = styled(flex)`
  gap: 1rem;
`;
const BookTable = () => {
  return (
    <Container>
      <Meta title="Book a Table | Flamingo Restaurant" />
      <Title title="Book a Table" />
      <Second>
        <PlaceHolder className="text">
          <p>We would love to hear from you</p>
        </PlaceHolder>
        <FormDiv className="form">
          <h3> Book </h3>
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
                Party Size
                <input
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Party Size"
                />
              </label>
              <label>
                Date
                <input type="datetime-local" placeholder="phone number" />
              </label>
            </Group>
            <label>
              Message (Optional)
              <input
                type="text"
                style={{ width: "auto" }}
                placeholder="Enter your message"
              />
            </label>
            <button>
              Request Booking <BsArrowRight />
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
    </Container>
  );
};

export default BookTable;
