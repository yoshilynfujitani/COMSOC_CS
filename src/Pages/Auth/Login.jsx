import React, { useState } from "react";
import { useLogin } from "./useLogin";

import MMSU_LOGO from "/MMSU_LOGO.png";
import Banner from "../../ui/Banner";

const Login = () => {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("yosbi52@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex justify-center items-center px-5 bg-slate-50 min-h-screen">
      <div className="bg-white px-5 w-full md:max-w-[500px] md:py-32">
        <div className="flex justify-center my-10">
          <img src={MMSU_LOGO} alt="" className="w-48 h-48" />
        </div>
        <Banner
          BannerMessage={"This website is still under development"}
          type={"Warning"}
        />
        <div className="flex flex-col">
          {" "}
          <label htmlFor="" className="text-sm">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
        </div>
        <button
          disabled={isLoading}
          onClick={handleLogin}
          className="text-center mt-5 mb-2 bg-green-700 w-full rounded-full py-2 text-white font-semibold"
        >
          Login
        </button>
        <h1 className="w-full text-center text-sm text-gray-400">
          Need Help? Email Us.
        </h1>
      </div>
    </div>
  );
};

export default Login;
