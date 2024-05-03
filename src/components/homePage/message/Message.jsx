import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <>
      <div>
        <div>
          <img src={assets.chat} alt="icon" />
        </div>

        <div>
          <h3>What have you in mind?</h3>
          <p>
            Unlock limitless conversations with SAIL ChatBot. Your intelligent
            companion for insightful discussions! Where curiosity meets
            knowledge, anytime, anywhere!"
          </p>
          <Link to={"/chat"}>
            <p>Get Started</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Message;
