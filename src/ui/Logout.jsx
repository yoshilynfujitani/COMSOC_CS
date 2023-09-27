import React from "react";
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../Pages/Auth/useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="transition-all flex items-center text-md gap-2 border rounded-md px-2 py-1 bg-white text-gray-600 hover:text-red-500 hover:border-red-400 "
    >
      <BiLogOut />
      Logout
    </button>
  );
};

export default Logout;
