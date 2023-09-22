import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen  justify-between">
      <div className="">
        <Navbar />
        <div className="container w-screen flex flex-col items-center">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
