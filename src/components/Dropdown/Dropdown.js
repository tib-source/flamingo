import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Button";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "./../Header/HeaderStyle";
const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${Color.black};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropdownMenu = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  hr {
    width: 150px;
    opacity: 0.6;
  }
`;
const DropdownLinks = styled(Link)`
  ${NavLink}
  font-size: 1.5rem;
`;
const DropdownButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2.4rem;
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-style: italic;
  color: ${Color.orange};
  z-index: 15;
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

const Dropdown = (props) => {
  return (
    <DropdownWrapper>
      <Icon>
        <FaTimes />
      </Icon>
      <DropdownMenu>
        <DropdownContent>
          {props.HeaderData.map((elem, indx) => (
            <DropdownLinks key={indx} to={elem.link}>
              {elem.title}
            </DropdownLinks>
          ))}
        </DropdownContent>
        <hr />
        <DropdownButtons>
          {props.HeaderButtonData.map((elem, indx) => (
            <Button big={true} key={indx} reverse={elem.reverse} to={elem.link}>
              {elem.title}
            </Button>
          ))}
        </DropdownButtons>
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default Dropdown;
