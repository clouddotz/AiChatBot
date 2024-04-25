import React, { useContext } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import ActionProvider from '../../ActionProvider';
import MessageParser from '../../MessageParser';
// import config from '../../config';
import './ChatInterface.css';
import { assets } from '../../assets/assets';
import { Context } from '../Hooks/PromptContext';


const ChatInterface = () => {

  const { onSend,
    input,
    setInput,
    prevInputs,
    recent,
    display,
    displayData,
    loading
  } = useContext(Context);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div className='chatInterface'>

      {/* <Chatbot 
        config={config}
        messageParser={MessageParser}
         actionProvider={ActionProvider}
        /> */}

      <div className='nav'>

        <div className='logo'>
          <h1>SAIL</h1>
          <img src={assets.sail_logo} alt="" />
        </div>

        <img src={assets.user_icon} alt="" />

      </div>

      <div className="main-container">

        {
          !display
            ?
            <>
              <div className="greet">
                <p><span>Hello, Dev..</span></p>
                <p>How can I help you today?</p>
              </div>

              <div className="cardsDiv">

                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                  <p>Suggest beautiful places to see on an upcoming road trip</p>
                  <img src={assets.code_icon} alt="" />
                </div>

              </div>

            </>
            :
            <div className="chatDisplay">

              <div className="user">
                <img src={assets.user_icon} alt="" />
                <p>{recent}</p>
              </div>

              <div className="bot">

                <img src={assets.sail_logo} alt="" />

                {
                  loading
                    ?
                    <div className='loading'>
                      <p>loading...</p>
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{ __html: displayData }}></p>

                }

              </div>

            </div>
        }

      </div>

      <div className="inputDiv">

        <div className="input">

          <input onChange={handleInput} value={input} type="text" placeholder='Type a new message here' />

          <div className="inputIcon">
            <img src={assets.gallery_icon} alt="" title="Attach photo" />
            <img src={assets.mic_icon} alt="" title="Record audio" />
            {
              input
                ?
                <img onClick={onSend} src={assets.send_icon} alt="" title="Send" />
                :
                null
            }
          </div>

        </div>

      </div>

    </div>
  )



}

export default ChatInterface
