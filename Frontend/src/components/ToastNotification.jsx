// src/components/ToastNotification.js
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

const ToastNotification = () => {
  // Helper to trigger different toast types
  const notify = (message, type = "success") => {
    if (type === "success") {
      console.log("Success toast triggered");
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else if (type === "info") {
      toast.info(message);
    } else {
      toast.warn(message);
    }
  };

  return (
    <>
      {/* This will render the toast container on the screen */}
      <ToastContainer />
    </>
  );
};

export default ToastNotification;
