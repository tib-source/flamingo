import styled from "styled-components";
import { Color } from "../../data/Color";

type ButtonType = {
  $reverse?: boolean
  $big?: boolean
}

export const Button = styled.a<ButtonType>`
  padding: 0.5rem 1rem;
  background-color: ${({ $reverse }) =>
    $reverse === true ? "transparent" : Color.lightBlack};
  color: ${({ $reverse }) =>
    $reverse === true ? Color.orange : Color.trueWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-decoration: none;
  font-size: ${({ $big }) => ($big === true ? "1.05rem" : "0.9rem")};
  font-weight: 500;
  border-radius: 2px;
  border: ${({ $reverse }) =>
    $reverse === true ? `2px solid ${Color.trueWhite}` : "none"};
  &:hover {
    /* transform: translateY(-3px); */
    color: ${({ $reverse }) =>
    $reverse === false || $reverse === undefined
      ? Color.orange
      : Color.black};
    background-color: ${({ $reverse }) =>
    $reverse === false || $reverse === undefined ? Color.black : Color.red};
  }
`;
