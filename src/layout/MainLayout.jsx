import React from 'react';
import SideBar from '../components/sideBar/SideBar';
import ChatInterface from '../components/chatInterface/ChatInterface';
import "./MainLayout.css"
const MainLayout = () => {
  return (
    <>

      <div id="layoutContainer">
        <SideBar />
        <ChatInterface />
      </div>


    </>
  )
}

export default MainLayout
