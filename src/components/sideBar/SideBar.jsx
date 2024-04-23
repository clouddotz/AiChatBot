import React from 'react'
import './sideBar.css'
import { assets } from '../../assets/assets'
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="topDiv">
        <img src={assets.menu_icon} alt="" />
      </div>
      <div className="bottomDiv"></div>
      
    </div>
  )
}

export default SideBar
