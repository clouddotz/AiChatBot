import React, { useEffect, useState } from "react";
import SideBar from "../sideBar/SideBar";
import ChatInterface from "../chatInterface/ChatInterface";
import Cookies from "js-cookie";
import "./ChatBot.css";

const ChatBot = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = Cookies.get("authorized");
    console.log(`chatToken: `, token);
    setToken(token);
  }, []);
  return (
    <>
      {token ? (
        <div id="chatBot-container">
          <SideBar />
          <ChatInterface />
        </div>
      ) : (
        <p>Session expired, please login again</p>
      )}
    </>
  );
};

export default ChatBot;
