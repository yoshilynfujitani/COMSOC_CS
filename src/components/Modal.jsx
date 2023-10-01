import React, { Children, useState } from "react";
import { motion } from "framer-motion";
import { useUpdatePassword } from "../Pages/UserPage/useUpdatePassword";
import Banner from "../ui/Banner";
import { Outlet } from "react-router-dom";
const Modal = ({ visible, children }) => {
  if (!visible) return;

  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-20">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        exit={{ duration: 1 }}
        className="bg-white p-5 rounded w-72"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
