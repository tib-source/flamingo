import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../data/Color";
import { flex } from "../Util/flex";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Button } from "../Util/Button";

const Container = styled(flex)`
  width: 100%;
  background: ${Color.black};
  color: ${Color.orange};
  flex-direction: column;
`;

const Wrapper = styled(flex)`
  width: 90%;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0rem 1rem;
`;
const Top = styled(flex)`
  font-style: italic;
  text-transform: uppercase;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: 700;
  }
`;
const Bottom = styled(flex)`
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Socials = styled(flex)`
  color: white;
  font-size: 1.5rem;
  gap: 1rem;
`;

export const HeaderContent = styled(flex)`
  gap: 2rem;

  @media screen and (max-width: 914px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const NavLink = css`
  color: ${Color.white};
  font-size: 1rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  z-index: 15;

  &:hover {
    color: ${Color.orange};
  }
`;
export const HeaderLinks = styled(Link)`
  ${NavLink}
`;
const Footer = (props) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h2>Flamingo</h2>
          <Socials>
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
          </Socials>
        </Top>
        <Bottom>
          <HeaderContent>
            {props.HeaderData.map((elem, indx) => (
              <HeaderLinks key={indx} to={elem.link}>
                {elem.title}
              </HeaderLinks>
            ))}
          </HeaderContent>
          <Button reverse={true} to="/book">
            Book A Table
          </Button>
        </Bottom>
        Flamingo Inc © 2021 . All rights reserved
      </Wrapper>
    </Container>
  );
};

export default Footer;
