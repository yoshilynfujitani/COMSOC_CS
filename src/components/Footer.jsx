import React from "react";
import CCIS_LOGO from "/CCIS_LOGO.webp";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" bg-white   flex items-center justify-center shadow-sm relative z-10 py-2">
      <div className="flex justify-start w-full flex-col px-5">
        <div className="flex items-center       ">
          <img src={CCIS_LOGO} alt="" className="w-12 h-12 " />
          <div className=" text-gray-800">
            <h1 className="text-sm font-bold">COMSOC</h1>
            <p className="text-sm">A.Y 2023-2023</p>
          </div>
        </div>
        <BsFacebook className="transition-all text-2xl mx-2 text-slate-700 hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Footer;
