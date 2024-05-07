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

            {/* <div>facebook instagram twitter linkedIn</div> */}
          </div>

          <div>
            <h4>Meet our team</h4>
            <div id="footer-container-names">
              <p>Lukmon Akingbade</p>
              <p>Isaiah Okon</p>
              <p>Toheeb Raji</p>
              <p>Teniola Jimoh</p>
              <p>Temitope Shodunola</p>
              <p>Elebute Semiu</p>
              <p>Onasanya Basit</p>
              <p>Toheeb Ajao</p>
            </div>
          </div>
        </div>

        <p>©️ 2024</p>
      </div>
    </>
  );
};

export default Footer;
