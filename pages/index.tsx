import type { NextPage } from "next";
import React from "react";
import InfoSection from "../components/InfoSection/InfoSection";
// import { InfoData } from "../data/InfoData";
import Hero from "../components/Hero/Hero";
import Review from "../components/Review/Review";
import { reviews } from "../data/reviews";
import { InfoType } from "../components/types";
import { attributes, react as HomeContent } from "./../content/home.md"
const Home: NextPage = () => {
  let { title, infoData } = attributes
  return (
    <div>
      <Hero />
      {infoData.map((info: any, index: React.Key) => (
        <InfoSection key={index} info={info} />
      ))}
      <Review reviews={reviews} />
    </div>
  );
};

export default Home;


