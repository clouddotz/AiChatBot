import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
}

export default App
