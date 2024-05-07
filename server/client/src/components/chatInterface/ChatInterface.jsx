import React, { useContext } from "react";
// import config from '../../config';
import { assets } from "../../assets/assets";
import { Context } from "../Hooks/PromptContext";
import "./ChatInterface.css";

const ChatInterface = () => {
  const { onSend, input, setInput, display, loading, data } =
    useContext(Context);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div className="chatInterface">
      {/* <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        /> */}

      <div className="nav">
        <div className="logo">
          <img src={assets.sail_logo} alt="" />
        </div>
      </div>

      <div className="main-container">
        {!display ? (
          <>
            <div className="greet">
              <p>
                <span>SAIL..</span>
              </p>
              <p>Where dreamers are turned achievers</p>
            </div>

            <div className="cardsDiv">
              {/* <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.bulb_icon} alt="" />
                </div> */}

              <div className="card1">
                <dl>
                  <dt>
                    <b>What is SAIL about?</b>
                  </dt>
                  <dd>
                    <b>Senator Abiru Innovative Lab</b> (SAIL), an initiative of
                    the SAIL Foundation is a dedicated Innovation and tech lab
                    that is providing relevant technology, business, and digital
                    skills to tech enthusiasts and young entrepreneurs across
                    the Lagos East Senatorial District. <br /> <br />
                    In driving <b>SAIL</b>, <b>Abiru</b> partnered with{" "}
                    <b>Co-creation Hub</b> (Cc-Hub), a dedicated Innovation and
                    tech company that makes use of social capital & technology
                    to accelerate economic prosperity. In order to develop
                    training programmes that will be most impactful, in 2021,
                    Cc-Hub, with the Senator’s team conducted a survey using a
                    human-centered design approach across selected locations in
                    the Lagos East Senatorial District. The preponderance of
                    responses from constituents surveyed informed the design of
                    the 5 pilot programmes.
                  </dd>
                </dl>

                {/* <img src={assets.message_icon} alt="" /> */}
              </div>

              <div className="card">
                {/* <div className="cardText"> */}
                <dl>
                  <dt>
                    <b>
                      Project: AI Chatbot with Gemini Generative API (React.js)
                    </b>
                  </dt>
                  <dd>
                    <li>
                      cloudDotz, a team at the SAIL tech talent program,
                      developed an AI chatbot using React.js. This chatbot
                      leverages the power of Google's Gemini Generative API to
                      provide users with an interactive and informative
                      experience.
                    </li>
                  </dd>
                  <dt>
                    <b>Key Features:</b>
                  </dt>
                  <dd>
                    <li>Built with React.js for a smooth user interface.</li>
                  </dd>
                  <dd>
                    <li>
                      Utilizes the Gemini Generative API for intelligent and
                      engaging conversation.
                    </li>
                  </dd>
                  <dd>
                    <li>
                      Allows users to interact with the AI through text input.
                    </li>
                  </dd>
                  <dt>
                    <b>Project Benefits:</b>
                  </dt>
                  <dd>
                    <li>
                      Demonstrates expertise in building web applications with
                      React.js.
                    </li>
                  </dd>
                  <dd>
                    <li>
                      Showcases the ability to integrate cutting-edge AI
                      technology (Gemini API).
                    </li>
                  </dd>
                  <dd>
                    <li>
                      Provides a user-friendly platform for interaction with AI.
                    </li>
                  </dd>
                  <dd>
                    <li>
                      This project highlights cloudDotz's proficiency in web
                      development and their exploration of advanced AI
                      capabilities.
                    </li>
                  </dd>
                </dl>

                {/* </div>Text */}
                {/* <img src={assets.code_icon} alt="" /> */}
              </div>
            </div>
          </>
        ) : (
          <div className="outerDisplay">
            {data.map((values, index) => {
              if (values.userInput !== "" || values.aiResponse !== "") {
                return (
                  <div key={index} className="chatDisplay">
                    <div className="bot">
                      <img src={assets.sail_logo} alt="" />
                      <div className="botText">
                        <div className="black"></div>
                        <div className="text">
                          {loading ? (
                            <div className="loading">
                              <p>loading...</p>
                            </div>
                          ) : (
                            // <p dangerouslySetInnerHTML={{__html: values.aiResponse}}></p>
                            <p>{values.aiResponse}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="user">
                      <div className="userText">
                        <div className="text">
                          <p>{values.userInput}</p>
                        </div>
                        <div className="black"></div>
                      </div>
                      <img src={assets.user_icon} alt="" />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>

      <div className="inputDiv">
        <div className="input">
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder="Type a new message here"
          />

          <div className="inputIcon">
            {/* <img src={assets.gallery_icon} alt="" title="Attach photo" />
            <img src={assets.mic_icon} alt="" title="Record audio" /> */}
            {input ? (
              <img
                onClick={onSend}
                src={assets.send_icon}
                alt=""
                title="Send"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
