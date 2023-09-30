import React, { useState } from "react";
import { motion } from "framer-motion";
import { useUpdatePassword } from "../Pages/UserPage/useUpdatePassword";
import Banner from "../ui/Banner";
const Modal = ({ visible, onClose }) => {
  if (!visible) return;
  const { updatePassword, isChangingPassword } = useUpdatePassword();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);

  function handleUpdatePassword(passwords) {
    if (password !== password2) return setError(true);
    updatePassword(passwords);
    if (!isChangingPassword) return onClose();
  }
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-20">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
        exit={{ duration: 1 }}
        className="bg-white p-5 rounded w-72"
      >
        <div className="text-center">
          <h1 className="text-sm py-1 px-2 bg-red-200 rounded-md text-red-700 font-semibold my-2">
            You will now permanently update your password!
          </h1>

          <h2>Enter New Password</h2>
          <input
            type="password"
            className="border rounded-md px-2 py-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h2>Confirm Password</h2>
          <input
            type="password"
            className="border rounded-md px-2 py-1"
            onChange={(e) => setPassword2(e.target.value)}
          />

          <button
            className="px-2 py-1 bg-gray-700 text-white rounded my-2"
            onClick={() => handleUpdatePassword(password)}
          >
            Update Password
          </button>
          <div className="cursor-pointer" onClick={onClose}>
            Close
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
