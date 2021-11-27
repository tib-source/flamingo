import type { NextPage } from "next";
import React from "react";
import InfoSection from "../components/InfoSection/InfoSection";
// import { InfoData } from "../data/InfoData";
import Hero from "../components/Hero/Hero";
import Review from "../components/Review/Review";
// import { reviews } from "../data/reviews";
import { InfoType } from "../components/types";
import Head from "next/head";
import { attributes as homeData } from "./../content/home.md";
import { attributes as reviewData } from "./../content/review.md";
import { reviewItem } from "../components/types";

const Home: NextPage = () => {
  let { infoData }: { infoData: InfoType[] } = homeData;
  let { reviews }: { reviews: reviewItem[] } = reviewData
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Hero />
      {infoData.map((info: InfoType, index: React.Key) => (
        <InfoSection key={index} info={info} />
      ))}
      <Review reviews={reviews} />
    </>
  );
};

export default Home;