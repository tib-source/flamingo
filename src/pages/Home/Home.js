import React, { useState } from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { SliderData } from "../../data/SliderData";
import { InfoData } from "../../data/InfoData";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import { reviews } from "../../data/reviews";
import Footer from "../../components/Footer/Footer";
import { HeaderData } from "../../data/HeaderData";

const Home = () => {
  return (
    <div>
      <Hero SliderData={SliderData} />
      {InfoData.map((info) => (
        <InfoSection info={info} />
      ))}
      <Review reviews={reviews} />
    </div>
  );
};

export default Home;
