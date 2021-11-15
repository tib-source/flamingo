import React, { useState } from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { SliderData } from "../../data/SliderData";
import { InfoData } from "../../data/InfoData";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero SliderData={SliderData} />
      {InfoData.map((info) => (
        <InfoSection info={info} />
      ))}
    </div>
  );
};

export default Home;
