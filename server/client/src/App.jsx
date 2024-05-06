import { RouterProvider } from 'react-router-dom'
// import MainLayout from './layout/MainLayout'
import Router from './Router'
import "tailwindcss/tailwind.css";

function App() {
  

  return (
    <>
      
      {/* <MainLayout/> */}
      <RouterProvider router={Router}/>

    </>
      
  )
}

export default App
