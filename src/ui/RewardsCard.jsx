import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { motion } from "framer-motion";

const RewardsCard = ({ content }) => {
  const { Name, Price, RequiredPts, BG } = content;
  console.log(BG);
  return (
    <div className="bg-white rounded-md p-5  shadow-md bg-opacity-90  relative overflow-clip">
      <div className="absolute opacity-10 -right-12 -top-8 md:-top-16 md:-right-20">
        <img src={BG} alt="" className="w-48 h-48 md:h-60 md:w-60" />
      </div>
      <div className="relative">
        <h1 className=" font-semibold ">{Name}</h1>
        <p className="flex items-center text-sm gap-1">
          <span className="text-yellow-500">
            <GiTwoCoins />
          </span>
          {Price}
        </p>
      </div>
    </div>
  );
};

export default RewardsCard;
