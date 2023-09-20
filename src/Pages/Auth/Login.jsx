import React, { useState } from "react";
import { login } from "../../Services/apiAuth";
import { useLogin } from "./useLogin";

const Login = () => {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("yosbi52@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div>
      <label htmlFor="">Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="">Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button disabled={isLoading} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
