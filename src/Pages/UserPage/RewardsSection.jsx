import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import RewardsCard from "../../ui/RewardsCard";
import WATER_BG from "/WATER_BG.webp";
import PRINTER_BG from "/PRINTER_BG.webp";
import MERCH_BG from "/MERCH_BG.webp";
import { motion } from "framer-motion";

const RewardsSection = ({ currentPoints }) => {
  const Rewards = [
    {
      id: 1,
      Name: "Hydro-Charge",
      RequiredPts: 5,
      Price: "5-20 Credit Points",
      BG: WATER_BG,
    },
    {
      id: 2,
      Name: "Printing Station",
      RequiredPts: 5,
      Price: "Minimum of 5 Credit Points",
      BG: PRINTER_BG,
    },
    {
      id: 3,
      Name: "COMSOC Merchandise",
      RequiredPts: 100,
      Price: "Minimum of 100 Credit Points",
      BG: MERCH_BG,
    },
  ];
  return (
    <motion.section
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.25 }}
      className="relative my-5"
    >
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
    </motion.section>
  );
};

export default RewardsSection;
