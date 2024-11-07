import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) =>
  isAuth ? <Outlet /> : <Navigate to={"/login"} replace />;

export default ProtectedRoute;
