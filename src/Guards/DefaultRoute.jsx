import { Navigate } from "react-router-dom";

const DefaultRoute = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  const role = authData?.role?.toLowerCase();

  if (!authData) {
    return <Navigate to="/login" replace />;
  }

  if (role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  // Fallback
  return <Navigate to="/login" replace />;
};

export default DefaultRoute;
