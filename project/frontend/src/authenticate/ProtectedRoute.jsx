import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated"; // Path to your auth utility

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />; // Redirect to login page
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
