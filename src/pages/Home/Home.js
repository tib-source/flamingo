import React, { useState } from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import { SliderData } from "../../data/SliderData";
import Hero from "../../components/Hero/Hero";
const Home = () => {
  return (
    <div>
      <Hero SliderData={SliderData} />
      <InfoSection />
    </div>
  );
};

export default Home;
