import React from "react";
import Title from "../components/Title/Title";
import ImageOne from "../public/images/background.jpg";
import ImageTwo from "../public/images/Injera-1.jpg";
import ImageThree from "../public/images/Injera-2.jpg";
import ImageFour from "../public/images/inside.jpg";
import ImageFive from "../public/images/kitfo.jpg";
import ImageSix from "../public/images/Cake.jpg";
import { flex } from "../components/Util/flex";
import styled from "styled-components";
import { Color } from "../data/Color";
import Image from 'next/image'
import Meta from "../components/Meta";

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
      <Meta title="Gallery | Flamingo Restaurant" />
      <Title title="Gallery" />
      <Container>
        <h2>Our Random Gallery </h2>
        <StyledGallery>
          {ImageList.map((image, index) => {
            // eslint-disable-next-line @next/next/no-img-element
            return <img key={index} src={image.src} alt="gallery image"></img>
          })}
        </StyledGallery>
      </Container>
    </div>
  );
};

export default Gallery;
