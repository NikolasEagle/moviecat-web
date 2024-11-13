import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
