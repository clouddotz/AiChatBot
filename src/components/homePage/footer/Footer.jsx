import React from "react";
import { assets } from "../../../assets/assets";

const Footer = () => {
  return (
    <>
      <div>
        <div>
          <img src={assets.sail_logo} alt="sail_logo" />

          <div>facebook instagram twitter linkedIn</div>
        </div>

        <div>
          <h4>Meet our team</h4>
          <div>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
            <p>Name</p>
          </div>
        </div>

        <p>©️ 2024</p>
      </div>
    </>
  );
};

export default Footer;
