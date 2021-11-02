import React from "react";
import { Button } from "../Button";
import * as S from "./HeaderStyle";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
  return (
    <S.HeaderWrapper>
      <S.Icon to="/">
        <h2>FLAMINGO</h2>
        <small>Shepherd Bush</small>
      </S.Icon>
      <S.Hamburger>
        <FaBars />
      </S.Hamburger>
      <S.HeaderContent>
        {props.HeaderData.map((elem, indx) => (
          <S.HeaderLinks key={indx} to={elem.link}>
            {elem.title}
          </S.HeaderLinks>
        ))}
      </S.HeaderContent>
      <S.HeaderButtons>
        {props.HeaderButtonData.map((elem, indx) => (
          <Button key={indx} reverse={elem.reverse} to={elem.link}>
            {elem.title}
          </Button>
        ))}
      </S.HeaderButtons>
    </S.HeaderWrapper>
  );
};

export default Header;
