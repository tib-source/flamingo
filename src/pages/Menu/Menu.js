import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import {
  containerCss,
  contentCss,
  wrapperCss,
} from "../../components/Util/css";
import { flex } from "../../components/Util/flex";
import { Color } from "./../../data/Color";
import Kitfo from "./../../images/kitfo.jpg";

const Container = styled(flex)`
  ${containerCss}
  padding: 10rem;
  flex-flow: column;
  gap: 1rem;

  h4 {
    font-size: 1.25rem;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
`;

const Wrapper = styled.div`
  ${wrapperCss}
`;

const Content = styled.div`
  ${contentCss}
`;

const Filter = styled(flex)`
  flex-flow: wrap;
  gap: 0.5rem;

  .active {
    border-bottom: 3px solid ${Color.orange};
    color: ${Color.black};
    transform: translateY(-2px);
    filter: drop-shadow(2px 2px 0.1px ${Color.orange});
  }
  button {
    all: unset;
    padding: 0.5rem;
    transition: 200ms ease-in-out;
    color: ${Color.lightBlack};
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${Color.orange};
      color: ${Color.black};
      transform: translateY(-2px);
      filter: drop-shadow(2px 2px 0.1px ${Color.orange});
    }

    &:active {
      transform: scale(0.95);
    }
  }

  hr {
    padding: 0;
    margin: 0;
    width: 2px;
    height: 25px;
    opacity: 0.3;
    background: ${Color.lightBlack};
    border: ${Color.lightBlack};
    border-radius: 1rem;
  }
`;

const Food = styled.div`
  display: grid;
  width: 100%;
`;
const Card = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 2px 2px 1px ${Color.orange};
  transition: 300ms ease-in-out;
  cursor: pointer;
  .bg {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 1em;
    }
  }
  .info {
    position: relative;
    background: ${Color.lightBlack};
    color: ${Color.white};
    z-index: 2;
    padding: 0.5rem 1em;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    .name {
      font-size: 1.25rem;
    }
  }
  &:hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
const Menu = () => {
  return (
    <div>
      <Title title="Our Menu" />
      <Container>
        <h4>Meals</h4>
        <Filter>
          <button>Kids</button>
          <hr />
          <button>Chef's Special</button>
          <hr />
          <button>Rick</button>
          <hr />
          <button>Fish</button>
          <hr />

          <button>Vegeterian</button>
          <hr />

          <button>Chicken</button>
          <hr />

          <button>Lamb</button>
          <hr />

          <button>Beef</button>
          <hr />

          <button>Side/Apeetizer</button>
        </Filter>

        <Food>
          <Card>
            <div className="bg">
              <img src={Kitfo} alt="" srcset="" />
            </div>
            <div className="info">
              <h5 className="name">Kitfo</h5>
              <h5 className="price">£10</h5>
            </div>
          </Card>
        </Food>
      </Container>
    </div>
  );
};

export default Menu;
