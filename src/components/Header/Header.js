import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../../data/Color";
import { Button } from "../Button";

const HeaderWrapper = styled.div`
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-style: italic;
  color: ${Color.orange};
  h2 {
    margin: 0;
    padding: 0;
    font-size: 26px;
    font-weight: 700;
  }
  small {
    margin: -5px 0px;
    padding: 0;
  }
`;

const NavLink = css`
  color: ${Color.white};
  font-size: 1rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${Color.orange};
  }
`;
const HeaderContent = styled.div`
  display: flex;
  gap: 2rem;
`;
const HeaderLinks = styled(Link)`
  ${NavLink}
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Icon>
        <h2>FLAMINGO</h2>
        <small>Shepher Bush</small>
      </Icon>
      <HeaderContent>
        {props.HeaderData.map((elem, indx) => (
          <HeaderLinks to={elem.link}>{elem.title}</HeaderLinks>
        ))}
      </HeaderContent>
      <HeaderButtons>
        {props.HeaderButtonData.map((elem, indx) => (
          <Button reverse={elem.reverse} to={elem.link}>
            {elem.title}
          </Button>
        ))}
      </HeaderButtons>
    </HeaderWrapper>
  );
};

export default Header;
