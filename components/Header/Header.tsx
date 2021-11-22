import React, { RefObject } from "react";
import { Button } from "../Util/Button";
import * as S from "./HeaderStyle";
import { FaBars } from "react-icons/fa";
import { HeaderDataType } from "../types";

const Header = (props: {
  toggle: any;
  HeaderData: HeaderDataType[];
  HeaderButtonData: any[];
}) => {
  return (
    <S.HeaderWrapper>
      <S.Icon href="/">
        <div>
          <h2>FLAMINGO</h2>
          <small>Shepherd Bush</small>
        </div>
      </S.Icon>
      <S.Hamburger onClick={props.toggle}>
        <FaBars />
      </S.Hamburger>
      <S.HeaderContent>
        {props.HeaderData.map((elem, indx: React.Key | null | undefined) => (
          <S.HeaderLinks key={indx} href={elem.link}>
            {elem.title}
          </S.HeaderLinks>
        ))}
      </S.HeaderContent>
      <S.HeaderButtons>
        {props.HeaderButtonData.map(
          (elem, indx: React.Key | null | undefined) => (
            <Button key={indx} $reverse={elem.reverse} href={elem.link}>
              {elem.title}
            </Button>
          )
        )}
      </S.HeaderButtons>
    </S.HeaderWrapper>
  );
};

export default Header;
