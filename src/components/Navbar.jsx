import React from "react";
import CCIS_LOGO from "/CCIS_LOGO.webp";
const Navbar = () => {
  return (
    <div className=" bg-white   flex items-center justify-center shadow-sm relative z-20">
      <div className="flex items-center    px-5 justify-start w-full ">
        <img src={CCIS_LOGO} alt="" className="w-12 h-12 my-2" />
        <div className=" text-gray-800">
          <h1 className="text-sm font-bold">COMSOC</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
