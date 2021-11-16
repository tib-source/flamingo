import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Util/Button";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "./../Header/HeaderStyle";

const fadeInMenu = keyframes`
  from{
    transform: translateX(25px);
  }
  to{
    transform: translateX(0px);
  }
`;
const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${Color.white};
  overflow: hidden;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInMenu} 1s cubic-bezier(0.165, 0.84, 0.44, 1);
`;
const DropdownMenu = styled.div`
  width: 80%;
  display: flex;
  overflow: hidden;
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
  color: ${Color.black};
  font-size: 1.5rem;
  font-weight: 500;
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
  overflow: hidden;
`;

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3.4rem;
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
  console.log(props)
  return (
    <DropdownWrapper>
      <Icon onClick={props.toggle}>
        <FaTimes />
      </Icon>
      <DropdownMenu>
        <DropdownContent>
          {props.HeaderData.map((elem, indx) => (
            <DropdownLinks key={indx} to={elem.link} >
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
