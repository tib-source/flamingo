import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "../data/Color";
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  max-width: 1300px;
  margin: auto;
  height: 10vh;
  z-index: 15;
`;

export const Icon = styled(Link)`
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
export const HeaderContent = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 914px) {
    display: none;
  }
`;
export const HeaderLinks = styled(Link)`
  ${NavLink}
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 1rem;
  z-index: 15;

  @media screen and (max-width: 914px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
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
