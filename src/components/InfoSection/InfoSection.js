import React from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import ImageOne from "../../images/Cake.jpg";
const InfoContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => (color ? color : Color.white)};

  @media screen and (max-width: 914px) {
    flex-direction: column;
  }
`;

const InfoText = styled.div`
  padding: 1rem;

  width: 50%;
  order: ${({ reverse }) => (reverse === true ? 2 : 1)};
`;
const InfoImage = styled.div`
  width: 50%;
  height: 100%;
  order: ${({ reverse }) => (reverse === true ? 1 : 2)};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const TextWrapper = styled.div``;
const InfoSection = () => {
  return (
    <InfoContainer>
      <InfoText>
        <TextWrapper>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eum in,
          delectus, necessitatibus reiciendis commodi dolore quia hic aliquid
          fugit suscipit consequatur minima cumque aut porro accusantium maiores
          numquam. Dolorem!
        </TextWrapper>
      </InfoText>
      <InfoImage>
        <img src={ImageOne} alt="" />
      </InfoImage>
    </InfoContainer>
  );
};

export default InfoSection;
