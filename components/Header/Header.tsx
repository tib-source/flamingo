import React from "react";
import { Button } from "../Util/Button";
import { FaBars } from "react-icons/fa";
import { HeaderDataType } from "../types";
import styled, { css } from "styled-components";
import  Link  from "next/link";
import { Color } from "../../data/Color";

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
max-width: 1300px;
margin: auto;
height: 10vh;
z-index: 15;
`;

const Icon = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
font-style: italic;
color: ${Color.orange};
z-index: 1000;
user-select: none;
cursor: pointer;

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
const HeaderContent = styled.div`
display: flex;
gap: 2rem;

@media screen and (max-width: 914px) {
  display: none;
}
`;
const HeaderLinks = styled(Link)`
${NavLink}
`;

const HeaderButtons = styled.div`
display: flex;
gap: 1rem;
z-index: 15;

@media screen and (max-width: 914px) {
  display: none;
}
`;

const Hamburger = styled.div`
color: ${Color.white};
font-size: 1rem;
padding: 1rem;
cursor: pointer;
z-index: 15;
display: none;

@media screen and (max-width: 914px) {
  display: block;
  font-size: 1.5rem;
}
`;

const Header = (props: {
  toggle: any;
  HeaderData: HeaderDataType[];
  HeaderButtonData: any[];
}) => {
  return (
      <HeaderWrapper>
        <Icon href="/">
          <a>
            <h2>FLAMINGO</h2>
            <small>Shepherd Bush</small>
          </a>
        </Icon>
        <Hamburger onClick={props.toggle}>
          <FaBars />
        </Hamburger>
        <HeaderContent>
          {props.HeaderData.map((elem, indx: React.Key | null | undefined) => (
            <HeaderLinks key={indx} href={elem.link}>
              {elem.title}
            </HeaderLinks>
          ))}
        </HeaderContent>
        <HeaderButtons>
          {props.HeaderButtonData.map(
            (elem, indx: React.Key | null | undefined) => (
              <Button key={indx} $reverse={elem.reverse} href={elem.link}>
                {elem.title}
              </Button>
            )
          )}
        </HeaderButtons>
      </HeaderWrapper>
  );
};

export default Header;
