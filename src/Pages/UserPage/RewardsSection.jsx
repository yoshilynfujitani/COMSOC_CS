import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import RewardsCard from "../../ui/RewardsCard";

const RewardsSection = ({ currentPoints }) => {
  const Rewards = [
    {
      id: 1,
      Name: "Hydro-Charge",
      RequiredPts: 5,
      Price: "5-20 Credit Points",
    },
    {
      id: 2,
      Name: "Printing Station",
      RequiredPts: 5,
      Price: "Minimum of 5 Credit Points",
    },
    {
      id: 3,
      Name: "COMSOC Merchandise",
      RequiredPts: 100,
      Price: "Minimum of 100 Credit Points",
    },
  ];
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
      <div className="grid gap-2 my-5 gridcols-1 md:grid-cols-2">
        {Rewards.map((reward) =>
          reward.RequiredPts < currentPoints ? (
            <RewardsCard
              content={reward}
              points={currentPoints}
              key={reward.id}
            />
          ) : null
        )}
      </div>
    </section>
  );
};

export default RewardsSection;
