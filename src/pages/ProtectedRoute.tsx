import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
