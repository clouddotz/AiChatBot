import React from "react";
import HeroSection from "../heroSection/HeroSection";
import Features from "../features/Features";
import Message from "../message/Message";
import Footer from "../footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="homeContainer">
        <HeroSection />
        <Features />
        <Message />
        <Footer />
      </div>
    </>
  );
};

export default Home;
