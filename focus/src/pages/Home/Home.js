import React from "react";
import { Landing } from "../../components";
import LandingPoints from "../../components/LandingPoints/LandingPoints";
import { Header } from "./Home.elements";

const Home = () => {
  return (
    <>
      <Landing></Landing>
      <LandingPoints></LandingPoints>
    </>
  );
};

export default Home;
