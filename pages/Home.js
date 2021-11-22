import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { SliderData } from "../../data/SliderData";
import { InfoData } from "../../data/InfoData";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import { reviews } from "../../data/reviews";

const Home = () => {
  return (
    <div>
      <Hero SliderData={SliderData} />
      {InfoData.map((info, index) => (
        <InfoSection key={index} info={info} />
      ))}
      <Review reviews={reviews} />
    </div>
  );
};

export default Home;
