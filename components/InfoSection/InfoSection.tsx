import React from "react";
import styled from "styled-components";
import { Color } from "../../data/Color";
import { Button } from "../Util/Button";
import { flex } from "../Util/flex";

const InfoContainer = styled(flex)`
  height: 600px;
  background-color: ${({ color }) => (color ? color : Color.white)};
  color: ${({ font }) => (font ? font : Color.black)};
  gap: 2rem;
  @media screen and (max-width: 948px) {
    flex-direction: column;
    height: auto;
    padding: 2rem 0;
  }
`;

const InfoText = styled.div`
  flex: 1;
  padding: 1rem;
  order: ${(props) => (props.reverse === true ? 2 : 1)};
  @media screen and (max-width: 948px) {
    order: 1;
  }
`;
const InfoImage = styled.div`
  flex: 1;
  height: 100%;
  order: ${(props) => (props.reverse === true ? 1 : 2)};

  @media screen and (max-width: 948px) {
    order: 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 5px 5px 1px ${Color.orange};
  }
`;
const TextWrapper = styled(flex)`
  gap: 1rem;
  flex-direction: column;
  text-align: justify;
  align-items: ${(props) =>
    props.reverse === true ? "flex-end" : "flex-start"};

  @media screen and (max-width: 948px) {
    align-items: flex-start;
    padding: 0 1.5rem;
  }
`;

const Wrapper = styled(flex)`
  width: min(90vw, 1100px);
  gap: 2rem;
  @media screen and (max-width: 948px) {
    flex-direction: column;
  }
`;

type InfoType = Readonly<{
  title: string;
  paragraphs: string[];
  button: boolean;
  buttonLabel: string;
  buttonPath: string;
  reverse: boolean;
  color: string;
  image: string;
  alt: string;
  font: string;
}>;

const InfoSection = ({ info: InfoType }) => {
  return (
    <InfoContainer font={info.font} color={info.color}>
      <Wrapper>
        <InfoText
          id="text"
          reverse={info.reverse}
          data-aos={`fade-${info.reverse === true ? "left" : "right"}`}
        >
          <TextWrapper reverse={info.reverse}>
            <h2>{info.title}</h2>
            {info.paragraphs.map((para, index) => {
              return index <= 5 && <p key={index}>{para}</p>;
            })}
            {info.button && (
              <Button to={info.buttonPath} $reverse={info.reverse}>
                {info.buttonLabel}
              </Button>
            )}
          </TextWrapper>
        </InfoText>
        <InfoImage reverse={info.reverse}>
          <img src={info.image} alt={info.alt} />
        </InfoImage>
      </Wrapper>
    </InfoContainer>
  );
};

export default InfoSection;
