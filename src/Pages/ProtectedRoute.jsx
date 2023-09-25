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
      if (user?.id !== "9bd8b4de-7c56-43ea-88fa-ccabe115a401")
        navigate("/home");
    },
    [isAuthenticated, isLoading, navigate, user]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated && user?.id === "9bd8b4de-7c56-43ea-88fa-ccabe115a401")
    return children;
};

export default ProtectedRoute;
