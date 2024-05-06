import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { Context } from '../Hooks/PromptContext';
import './sideBar.css';
import { list } from 'postcss';


const SideBar = () => {
  const { setData, newChat,  setPrevToggle, setShowPrev, sidebarData, prevToggle
} = useContext(Context);

  const [sidebarVisibility, setSidebarVisibilty] = useState(false);
  const[botResponseIndex, setBotResponseIndex]=useState("")
  const [prevIndex, setPrevIndex]=useState("")

  const showPrev = (index, user, bot) => {
    setPrevIndex(index)
  
    if (prevToggle===false){
      setPrevToggle(prev=>!prev)}
      // setData([{
      //   userInput:"",
      //   aiResponse:""
      // }])
  
    // else(
    //   setData([{
    //     userInput:"",
    //     aiResponse:""
    //   }])

    // )
    
    
    if (prevIndex!==index){
      setData([{
        userInput: user,
        aiResponse:bot

      }])
    }
    
  };

  const showAiResponse=(index)=>{
    if (botResponseIndex===index){
      setBotResponseIndex(null)
    } else{setBotResponseIndex(index)}
    
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
                  sidebarData.map((values, index) => 
                   {if(values.userInput!==""||values.aiResponse!==""){
                      
                    return (
            
                      <div  key={index} className="recentData">
                        <div className="userEntry">
                          <img onClick={()=>showPrev(index, values.userInput, values.aiResponse)} src={assets.show} alt="" />
                          <img onClick={()=>showAiResponse(index)} src={botResponseIndex!==index?assets.add_new:assets.minus_icon} alt="" />
                          <p> {values.userInput}</p>
                        </div>
                        <div className={botResponseIndex===index?"botResponse":"botResponse1"}>
                          <p>{values.aiResponse}...</p>
                        </div> 
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
