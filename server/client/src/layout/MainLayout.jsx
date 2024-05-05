import React from "react";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <div id="layoutContainer">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
