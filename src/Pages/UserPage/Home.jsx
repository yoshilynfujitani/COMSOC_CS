import React from "react";
import { useUser } from "../Auth/useUser";

import { useLogout } from "../Auth/useLogout";
import { useUsers } from "../Dashboard/useUsers";
import Spinner from "../../ui/Spinner";
import Logout from "../../ui/Logout";
import Banner from "../../ui/Banner";

import { GiTwoCoins } from "react-icons/gi";
import { BiSolidCoinStack } from "react-icons/bi";
import RewardsSection from "./RewardsSection";
import MMSU_LOGO from "/MMSU_LOGO.png";

const Home = () => {
  const { logout, isLoading } = useLogout();
  const { user } = useUser();

  const { students_info, isLoading: Loading } = useUsers();

  if (Loading) return <Spinner />;

  const currentStud_info = students_info?.find(
    (stud) => stud.user_id === user.id
  );

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based (0 = January, 1 = February, ...)
  const currentDay = currentDate.getDate();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();
  console.log();

  return (
    <div className="container w-full  p-5  min-h-screen md:px-32 lg:px-52 xl:px-80">
      <div className="relative ">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "></div>
        <div className="absolute top-0 -right-8 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
        <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden md:block absolute -bottom-18 -right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        <div className="hidden md:block absolute top-56 right-64 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>

        <div className="relative">
          {" "}
          <div className="relative overflow-clip bg-white  rounded-md p-5 shadow-lg  bg-opacity-70 md:min-h-[200px]">
            <div className="absolute opacity-20 -right-12 top-8 md:-top-2">
              <img
                src={MMSU_LOGO}
                alt=""
                className="w-52 h-52 md:h-80 md:w-80"
              />
            </div>
            <div className="relative my-2 ">
              <h1 className="text-2xl font-bold bg-gradient-to-b from-slate-800 to-green-700 text-transparent bg-clip-text">
                Welcome Back! <span>{currentStud_info.Name}</span>
              </h1>
              <p className="text-xs text-gray-400 italic">
                As of latest records...
              </p>
              <h2 className="text-gray-700">
                You are from{" "}
                <span className="font-semibold text-black">
                  {currentStud_info.Year_Section}
                </span>
              </h2>
            </div>
            <Logout />
          </div>
          <h1 className="my-5 font-bold text-green-600 text-xl">
            User Statistics
          </h1>
          <div className="grid grid-cols-2 gap-2  ">
            <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md bg-opacity-70 flex flex-col justify-between ">
              <div className="">
                <GiTwoCoins className="text-4xl text-yellow-400" />
                <h1 className=" font-semibold">
                  You currently have{" "}
                  <span className="text-xl">{currentStud_info.points}</span>{" "}
                  Points!
                </h1>
              </div>
              <p className="text-green-400 text-xs">
                More than 60% of total students
              </p>
            </div>
            <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md bg-opacity-70 flex flex-col justify-between ">
              <div className="">
                <BiSolidCoinStack className="text-4xl text-yellow-400" />
                <h1 className=" font-semibold">
                  You have earned{" "}
                  <span className="text-xl">
                    {currentStud_info.Total_Points}
                  </span>{" "}
                  Overall Points!
                </h1>
              </div>
              <p className="text-green-400 text-xs">
                More than 60% of total students
              </p>
            </div>
          </div>
        </div>
        <RewardsSection />
      </div>
    </div>
  );
};

export default Home;
