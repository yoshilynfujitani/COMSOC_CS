import React from "react";
import CCIS_LOGO from "/CCIS_LOGO.webp";
const Navbar = () => {
  return (
    <div className="bg-blue-900 border  flex items-center justify-center z-20">
      <div className="flex items-center gap-2">
        <img src={CCIS_LOGO} alt="" className="w-12 h-12 my-2" />
        <div className=" text-white">
          <h1 className="text-sm font-bold">Computer Science Society</h1>
          <h1 className="text-sm font-light">A.Y 2023-2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
