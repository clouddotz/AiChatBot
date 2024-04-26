import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../Hooks/PromptContext';
import './sideBar.css';


const SideBar = () => {
  const { onSend, prevInputs, setRecent, newChat } = useContext(Context);

  const [sidebarVisibility, setSidebarVisibilty] = useState(false);

  const showPrev = async (prev) => {
    setRecent(prev);
    await onSend(prev);
  };

  const handleVisibilty = () => {
    setSidebarVisibilty(prevState => !prevState);
  };


  return (

    <div className='sidebar'>

      <div className="topDiv">

        <img onClick={handleVisibilty} className='menu' src={sidebarVisibility ? assets.cancel : assets.menu_icon} alt="" />

        {
          sidebarVisibility
            ?
            <div>

              <div onClick={newChat} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New Chat</p>
              </div>

              <p className="recent-title">Recent</p>

              <div className="recent">

                {
                  prevInputs.map((input, index) => {
                    return (
                      <div onClick={() => showPrev(input)} key={index} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{input}...</p>
                      </div>
                    )
                  })
                }

              </div>

            </div>
            :
            null
        }

        {/* {
          sidebarVisibility
          ?
          : 
          null
        } */}

      </div>

      <div className="bottomDiv">

        {/* <div className="bottom-item">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div> */}

        <div className="bottom-item">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
{/* 
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div> */}

      </div>

    </div>
  )
}

export default SideBar
