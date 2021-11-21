import React from "react";
import Title from "../../components/Title/Title";
import ImageOne from "../../images/background.jpg";
import ImageTwo from "../../images/Injera-1.jpg";
import ImageThree from "../../images/Injera-2.jpg";
import ImageFour from "../../images/inside.jpg";
import ImageFive from "../../images/kitfo.jpg";
import ImageSix from "../../images/Cake.jpg";
import { flex } from "../../components/Util/flex";
import styled from "styled-components";
import { Color } from "../../data/Color";

const Container = styled(flex)`
  padding: 5rem;
  flex-flow: column;
  color: ${Color.lightBlack};
  background: ${Color.white};
  gap: 2rem;
`;
const ImageList = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImageFive,
  ImageSix,
];

const StyledGallery = styled(flex)`
  display: block;
  width: min(1300px, 90vw);
  column-count: 3;
  column-width: 33%;
  @media screen and (max-width: 948px) {
    display: flex;
    column-count: 1;
    column-width: 100%;
  }
  img {
    margin: 1rem;
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
    box-shadow: 3px 3px 10px ${Color.lightBlack};
  }
`;
const Gallery = () => {
  return (
    <div>
      <Title title="Gallery" />
      <Container>
        <h2>Our Random Gallery </h2>
        <StyledGallery>
          {ImageList.map((image) => (
            <img src={image} alt="gallery" />
          ))}
        </StyledGallery>
      </Container>
    </div>
  );
};

export default Gallery;
