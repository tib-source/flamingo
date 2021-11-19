import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import { MenuData } from "../../data/Menu";
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
  width: 100%;
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

const Wrapper = styled(flex)`
  flex-flow: column;
  width: min(90%, 1000px);
  padding: 5rem 0rem;
  gap: 1rem;
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
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  justify-content: center;
  place-items: center;
`;
const Card = styled.div`
  width: 300px;
  height: 300px;
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
    opacity: 0.8 !important;
    transform: scale(1.02) !important;
  }
`;
const Menu = () => {
  const Orignial = MenuData;
  const [Menu, setMenu] = useState(MenuData);

  const handleFilter = (event) => {
    const filterTag = event.target.innerText;
    console.log(filterTag);
    const filteredMenu = Orignial.filter((item) =>
      item.tag.includes(filterTag)
    );

    if (filteredMenu.length === 0 || filterTag === "All") {
      return setMenu(Orignial);
    }

    setMenu(filteredMenu);
  };
  return (
    <div>
      <Title title="Our Menu" />
      <Container>
        <Wrapper>
          <h4>Meals</h4>
          <Filter>
            <button onClick={handleFilter}>All</button>
            <hr />
            <button onClick={handleFilter}>Kids</button>
            <hr />
            <button onClick={handleFilter}>Chef's Special</button>
            <hr />
            <button onClick={handleFilter}>Rice</button>
            <hr />
            <button onClick={handleFilter}>Fish</button>
            <hr />
            <button onClick={handleFilter}>Vegeterian</button>
            <hr />
            <button onClick={handleFilter}>Chicken</button>
            <hr />
            <button onClick={handleFilter}>Lamb</button>
            <hr />
            <button onClick={handleFilter}>Side</button>
            <hr />
            <button onClick={handleFilter}>Appetizer</button>
          </Filter>
          <Food>
            {Menu.map((food) => {
              console.log(Menu);
              if (Menu === "") {
                return "meow";
              } else {
                return (
                  <Card
                    data-aos-anchor-placement="top-bottom"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                  >
                    <div className="bg">
                      <img src={Kitfo} alt="" srcset="" />
                    </div>
                    <div className="info">
                      <h5 className="name">{food.name}</h5>
                      <small>{food.description}</small>
                      <h5 className="price">£{food.price}</h5>
                    </div>
                  </Card>
                );
              }
            })}
          </Food>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Menu;
