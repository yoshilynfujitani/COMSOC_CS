import React, { useState } from "react";
import { useLogin } from "./useLogin";

import CCIS_LOGO from "/CCIS_LOGO.webp";
import Banner from "../../ui/Banner";

const Login = () => {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("administrator@comsoc.com");
  const [password, setPassword] = useState("COMSOC20232024");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: email + "@comsoc.com", password });
  };

  return (
    <div className="flex justify-center items-center px-5 bg-slate-50 min-h-screen">
      <div className="bg-white p-5 w-full  shadow-lg rounded-md md:max-w-[500px] md:py-10">
        <div className="flex flex-col items-center justify-center my-10">
          <img src={CCIS_LOGO} alt="" className="w-60 h-60" />
          <h1 className="text-xs text-center text-gray-400">
            College of Computing and Information Sciences
          </h1>
        </div>
        <Banner
          BannerMessage={"This website is still under development"}
          type={"Warning"}
        />
        <div className="flex flex-col">
          {" "}
          <label htmlFor="" className="text-sm">
            Student Number <span className="text-slate-300">(23-000000)</span>
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="" className="text-sm">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <button
          disabled={isLoading}
          onClick={handleLogin}
          className="text-center mt-5 mb-2 bg-blue-700 w-full rounded-full py-2 text-white font-semibold shadow-md active:bg-blue-900"
        >
          Login
        </button>
        <h1 className="w-full text-center text-sm text-gray-400">
          Need Help? Email us at <span>comsoc@mmsu.edu.ph</span>
        </h1>
      </div>
    </div>
  );
};

export default Login;
