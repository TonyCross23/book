import React from "react";
import Banner from "./banner";
import TopSeller from "./topSeller";
import Recommened from "./recommened";
import News from "./news";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSeller />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
