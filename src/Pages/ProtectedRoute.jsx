import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Auth/useUser";
import Spinner from "../ui/Spinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user } = useUser();
  console.log(isAuthenticated);
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      if (user?.id !== "9acf50e6-9112-4711-b371-64ba2bae1aec")
        navigate("/home");
    },
    [isAuthenticated, isLoading, navigate, user]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated && user?.id === "9acf50e6-9112-4711-b371-64ba2bae1aec")
    return children;
};

export default ProtectedRoute;
