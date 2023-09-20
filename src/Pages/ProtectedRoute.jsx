import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./Auth/useUser";
import Spinner from "../ui/Spinner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();
  console.log(isAuthenticated);
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
