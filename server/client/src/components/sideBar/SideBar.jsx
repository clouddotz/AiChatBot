import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../Hooks/PromptContext';
import './sideBar.css';
import { list } from 'postcss';


const SideBar = () => {
  const { onSend, setRecent, newChat, data } = useContext(Context);

  const [sidebarVisibility, setSidebarVisibilty] = useState(false);
  const[botresponse, setBotResponse]=useState(false)

  const showPrev = async (prev) => {
    setRecent(prev);
    await onSend(prev);
  };

  const showAiResponse=()=>{
    setBotResponse(prev=>!prev)
  }


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
                <img src={assets.add_new} alt="" />
                <p>New Chat</p>
              </div>

              <p className="recent-title">Recent</p>

              <div className="recent">

                { 
                  data.map((value, index) => 
                   {if(value.userInput!==""||value.aiResponse!==""){
                      
                    return (
                      <div key={index} className="recentData">
                        <div onClick={() => showPrev(input)} className="userEntry">
                        <img onClick={showAiResponse} src={!botresponse?assets.add_new:assets.minus_icon} alt="" />
                        <p> {value.userInput}</p>
                        </div>
                        {
                          botresponse?<div className="botResponse">
                          <p>{value.aiResponse}...</p>
                        </div> :null
                        }
                      </div>
                      
                    )
                  }})
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
          {/* <img src={assets.history_icon} alt="" />
          <p>Activity</p> */}
          <img src={assets.user_icon} alt="" />

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
