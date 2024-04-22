import React from 'react'
import ChatInterface from '../components/chatInterface/ChatInterface'
import SideBar from '../components/sideBar/SideBar'

const MainLayout = () => {
  return (
    <>
    <div><SideBar></SideBar></div>
    <div><ChatInterface></ChatInterface></div>
      
    </>
  )
}

export default MainLayout
