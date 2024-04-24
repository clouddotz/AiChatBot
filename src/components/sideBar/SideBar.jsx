import React, { useContext, useState } from 'react'
import './sideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../Hooks/PromptContext'
const SideBar = () => {
  const {onSend, prevInputs, setRecent, newChat}=useContext(Context)

  const [sidebarVisibility, setSidebarVisibilty]= useState(false)
  // const newChat=document.getElementsByClassName('new-chat')
  // const recentChat=document.getElementsByClassName('recent')
  const showPrev= async(prev)=>{
    setRecent(prev)
    await onSend(prev)
  }


  const handleVisibilty=()=>{
    
    setSidebarVisibilty(prevState=>!prevState)
    
  }
  return (
    <div className='sidebar'>
      <div className="topDiv">
        <img onClick={handleVisibilty} className='menu' src={assets.menu_icon} alt="" />
        {sidebarVisibility 
        ? 
        <div onClick={newChat} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>
        :null}
        
        {sidebarVisibility?
        <div className="recent">
        <p className="recent-title">Recent</p>
        {prevInputs.map((input, index)=>{
          return(
            <div onClick={()=>showPrev(input)} key={index} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{input}...</p>
            </div>
          )
        })}
        
      </div>
      : null
        
      }
        
      </div>
      <div className="bottomDiv">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
      
    </div>
  )
}

export default SideBar
