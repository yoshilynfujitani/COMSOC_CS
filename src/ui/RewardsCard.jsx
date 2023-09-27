import React from "react";
import { GiTwoCoins } from "react-icons/gi";

const RewardsCard = ({ content }) => {
  const { Name, Price, RequiredPts } = content;

  return (
    <div className="bg-white rounded-md p-5 shadow-md  bg-opacity-90 flex flex-col justify-between">
      <div className=""></div>
      <div className="">
        {" "}
        <h1 className="font-bold text-lg">{Name}</h1>
        <p className="text-sm flex items-center gap-1">
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
