import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Login from "../../login/Login";

const HeroSection = () => {
  const [logged, setLogged] = useState(false);

  const toggleLog = () => {
    setLogged(!logged);
  };

  return (
    <>
      {logged ? <Login /> : null}

      <div id="heroContainer">
        <nav>
          <img id="sail_logo" src={assets.sail_logo} alt="logo" />

          <Link to={"/about"} id="hero-about">
            <p>About SAIL</p>
          </Link>

          <Link to={"/user"} className="hero-startNav" onClick={toggleLog}>
            <p>Get Started</p>
          </Link>
        </nav>

        <div id="hero-main">
          <h1 id="hero-main-top-text">Experience the power of AI</h1>
          <p id="hero-main-bottom-text">
            A project built by cloudDotz, a team at the SAIL tech talent program
          </p>
          <Link to={"/user"} className="hero-start">
            <p>Get Started</p>
          </Link>
          <img src={assets.ai_img} id="ai-img" alt="AI_img" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
