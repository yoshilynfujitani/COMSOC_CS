import React, { useState } from "react";
import { useUser } from "../Auth/useUser";

import { useLogout } from "../Auth/useLogout";
import { useUsers } from "../Dashboard/useUsers";
import Spinner from "../../ui/Spinner";
import Logout from "../../ui/Logout";
import Banner from "../../ui/Banner";

import { GiTwoCoins } from "react-icons/gi";
import { BiSolidCoinStack } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidKey } from "react-icons/bi";

import RewardsSection from "./RewardsSection";
import CCIS_LOGO from "/CCIS_LOGO.webp";
import COIN_BG from "/COIN_BG.webp";
import BANK_BG from "/BANK_BG.webp";
import TROPHY_BG from "/TROPHY_BG.webp";
import { useUpdatePassword } from "./useUpdatePassword";
import { Toaster } from "react-hot-toast";
import Scoreboard from "./Scoreboard";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../../components/Modal";

const Home = () => {
  const { updatePassword, isChangingPassword } = useUpdatePassword();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const { user } = useUser();

  const { students_info, isLoading: Loading } = useUsers();

  const [openModal, setOpenModal] = useState(false);

  function handleCloseModal() {
    setOpenModal((currentVal) => !currentVal);
  }
  function handleUpdatePassword(passwords) {
    if (password !== password2) return setError(true);
    updatePassword(passwords);
    if (!isChangingPassword) return onClose();
  }

  if (Loading) return <Spinner />;

  const currentStud_info = students_info?.find(
    (stud) => stud.user_id === user.id
  );

  // Replace with your user ID

  const rankingStudents = students_info
    .slice()
    .sort((a, b) => b.points - a.points);

  const currentIndex = rankingStudents.findIndex(
    (student) => student.user_id === currentStud_info.user_id
  );
  console.log(currentIndex);
  return (
    <div className="container w-full  p-5  min-h-screen md:px-32 lg:px-52 xl:px-96">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="relative  ">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "></div>
        <div className="absolute top-0 -right-8 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
        <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden md:block absolute -bottom-18 -right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        <div className="hidden md:block absolute top-56 right-64 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>

        <div className="relative">
          {" "}
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-clip bg-white  rounded-md p-5 shadow-lg   md:min-h-[200px]"
          >
            <div className="absolute opacity-20 -right-12 top-8 md:-top-2">
              <img
                src={CCIS_LOGO}
                alt=""
                className="w-52 h-52 md:h-80 md:w-80"
              />
            </div>
            <div className="relative my-2 ">
              <div className="flex flex-col justify-between min-h-[100px]">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold bg-gradient-to-b from-slate-800 to-blue-700 text-transparent bg-clip-text md:text-3xl">
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
              </div>
              <div className="flex items-center gap-2 mt-5">
                <Logout />
                {/* <button
                  className="border rounded-md px-2 py-1 flex items-center gap-2 text-gray-600 bg-white hover:text-yellow-500 hover:border-yellow-400"
                  onClick={() => updatePassword("123qwe")}
                  disabled={isChangingPassword}
                >
                  <BiSolidKey />
                  Update Password
                </button> */}
                <button
                  className="border rounded-md px-2 py-1 flex items-center gap-2 text-gray-600 bg-white hover:text-yellow-500 hover:border-yellow-400"
                  onClick={() => setOpenModal((currentVal) => !currentVal)}
                >
                  <BiSolidKey />
                  Update Password
                </button>
                <AnimatePresence>
                  <Modal visible={openModal} onClose={handleCloseModal}>
                    {" "}
                    <div className="text-center">
                      <h1 className="text-sm py-1 px-2 bg-red-200 rounded-md text-red-700 font-semibold my-2">
                        You will now permanently update your password!
                      </h1>

                      <h2>Enter New Password</h2>
                      <input
                        type="password"
                        className="border rounded-md px-2 py-1"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <h2>Confirm Password</h2>
                      <input
                        type="password"
                        className="border rounded-md px-2 py-1"
                        onChange={(e) => setPassword2(e.target.value)}
                      />

                      <button
                        className="px-2 py-1 bg-gray-700 text-white rounded my-2"
                        onClick={() => handleUpdatePassword(password)}
                      >
                        Update Password
                      </button>
                      <div
                        className="cursor-pointer"
                        onClick={handleCloseModal}
                      >
                        Close
                      </div>
                    </div>
                  </Modal>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
          <h1 className="my-5 font-semibold text-blue-700 text-lg flex items-center gap-2">
            <span className="text-yellow-500">
              <ImStatsDots />{" "}
            </span>
            User Statistics
          </h1>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75 }}
            className="grid grid-cols-2 gap-2 md:grid-cols-3 z-10 "
          >
            <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md bg-opacity-90  relative overflow-clip">
              <div className="absolute opacity-10 -right-12 top-8 md:-top-2">
                <img
                  src={COIN_BG}
                  alt=""
                  className="w-52 h-52 md:h-80 md:w-80"
                />
              </div>
              <div className="relative">
                <GiTwoCoins className="text-4xl text-yellow-400" />
                <h1 className=" font-semibold ">
                  You currently have{" "}
                  <span className="text-xl text-blue-900">
                    {currentStud_info.points}
                  </span>{" "}
                  Points!
                </h1>
              </div>
              <p className="text-blue-400 text-xs">
                More than 60% of total students
              </p>
            </div>
            <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md bg-opacity-90 relative overflow-clip ">
              <div className="absolute opacity-10 -right-12 top-10 md:top-10 lg:-top-4">
                <img
                  src={BANK_BG}
                  alt=""
                  className="w-42 h-42 md:h-48 md:w-48"
                />
              </div>
              <div className="relative">
                <BiSolidCoinStack className="text-4xl text-yellow-400" />
                <h1 className=" font-semibold">
                  You've earned{" "}
                  <span className="text-xl text-blue-900">
                    {currentStud_info.Total_Points}
                  </span>{" "}
                  points in total!
                </h1>
              </div>
              <p className="text-blue-400 text-xs">
                More than 60% of total students
              </p>
            </div>
            <div className="bg-white rounded-md p-5 min-h-[150px] shadow-md bg-opacity-90 relative overflow-clip ">
              <div className="absolute opacity-10 -right-12 top-10 md:top-10 lg:-top-4">
                <img
                  src={TROPHY_BG}
                  alt=""
                  className="w-42 h-42 md:h-48 md:w-48"
                />
              </div>
              <div className="">
                <BsTrophyFill className="text-4xl text-yellow-400" />
                <h1 className=" font-semibold text-sm">
                  You are currently ranked{" "}
                  <span className="text-xl text-blue-900">
                    #{currentIndex + 1}
                  </span>{" "}
                  among all students!
                </h1>
              </div>
              <p className="text-blue-400 text-xs">
                More than 60% of total students
              </p>
            </div>
          </motion.div>
        </div>
        <RewardsSection currentPoints={currentStud_info.points} />
        <Scoreboard rankingData={rankingStudents} />
      </div>
    </div>
  );
};

export default Home;
