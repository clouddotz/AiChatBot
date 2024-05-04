import React from "react";
import { assets } from "../../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <div id="footer-container-top">
          <div>
            <img id="sail_logo" src={assets.sail_logo} alt="sail_logo" />

            <div>facebook instagram twitter linkedIn</div>
          </div>

          <div>
            <h4>Meet our team</h4>
            <div id="footer-container-names">
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
        </div>

        <p>©️ 2024</p>
      </div>
    </>
  );
};

export default Footer;
