import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container w-screen flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
