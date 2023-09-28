import React from "react";
import { ImSpinner } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="min-h-screen text-blue-800 text-4xl flex items-center justify-center animate-spin">
      <ImSpinner />
    </div>
  );
};

export default Spinner;
