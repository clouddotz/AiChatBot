import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./components/homePage/main/Home";
import ChatBot from "./components/chatBot/ChatBot";
import About from "./components/about/About";
import Login from "./components/login/Login";
import ResetPassword from "./components/reset-password/ResetPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <Login />,
      },
      {
        path: "/chat",
        element: <ChatBot />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: "Seems you hit the wrong url...",
      },
    ],
  },
]);

export default Router;
