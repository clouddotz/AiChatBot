import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = () => {
  return (
    <>
      <div id="message-container">
        <div>
          <img id="message-img" src={assets.chat} alt="icon" />
        </div>

        <div id="message-right">
          <h3>What have you in mind?</h3>
          <p>
            Unlock limitless conversations with SAIL ChatBot. Your intelligent
            companion for insightful discussions! Where curiosity meets
            knowledge, anytime, anywhere!"
          </p>
          <Link to={"/user"} id="message-link">
            <p>Get Started</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Message;
