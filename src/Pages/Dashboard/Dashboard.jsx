import React, { useEffect } from "react";
import { useUsers } from "./useUsers";
import Spinner from "../../ui/Spinner";
import { Toaster } from "react-hot-toast";

import { useLogout } from "../Auth/useLogout";
import Banner from "../../ui/Banner";
import Table from "../../ui/Table";

import { BiLogOut } from "react-icons/bi";
const Dashboard = () => {
  const { students_info, isLoading } = useUsers();

  const { logout } = useLogout();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center px-5">
      <Toaster position="top-left" reverseOrder={false} />
      <Banner
        BannerMessage={"You are currently on Administrative Mode"}
        type={"Reminder"}
      />
      <div className="self-start my-2 ">
        <button
          onClick={logout}
          className="transition-all flex items-center text-md gap-2 border rounded-md px-2 py-1 text-gray-600 hover:text-red-500 hover:border-red-400 "
        >
          <BiLogOut />
          Logout
        </button>
      </div>
      <h1 className="self-start text-sm text-gray-400 italic">
        Currently showing latest 50 records...
      </h1>
      <Table data={students_info} />
    </div>
  );
};

export default Dashboard;
