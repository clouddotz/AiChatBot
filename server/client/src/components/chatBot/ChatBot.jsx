import React, { useEffect, useState } from "react";
import SideBar from "../sideBar/SideBar";
import ChatInterface from "../chatInterface/ChatInterface";
import Cookies from "js-cookie";
import "./ChatBot.css";
import { Link } from "react-router-dom";

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
        <div
          style={{
            background: "rgb(150, 154, 158)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
            <p>Session expired, please login again</p>
            <Link to={"/user"}>
              <p>Go Back Home</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
