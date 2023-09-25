import React from "react";
import { BsTrophyFill } from "react-icons/bs";

const RewardsSection = ({ currentPoints }) => {
  return (
    <section className="relative my-5">
      <h1 className="text-blue-700 font-semibold text-lg flex items-center gap-2">
        <span className="text-yellow-500">
          <BsTrophyFill />
        </span>
        Rewards
      </h1>
      <h2 className="text-gray-500">
        You are eligble for the following rewards!
      </h2>
      <div className="grid my-5 grid-cols-1">
        <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md  bg-opacity-90 flex flex-col justify-between "></div>
      </div>
    </section>
  );
};

export default RewardsSection;
