import styled, { css } from "styled-components";
import { Color } from "../../data/Color";
import { flex } from "./flex";

export const Container = styled(flex)`
  width: 100%;
`;
export const heightCss = css`
  height: min(600px, 50vh);
  width: min(100%, 1000px);
`;
export const contentCss = css`
  align-items: flex-start;
  flex: 1;
  padding: 2rem;
  background: ${Color.white};
  height: 100%;
  width: 100%;
`;

export const wrapperCss = css`
  width: min(100%, 1000px);
  margin: 5rem 0;
  @media screen and (max-width: 948px) {
    flex-direction: column-reverse;
  }
`;
