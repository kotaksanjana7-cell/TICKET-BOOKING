import { Navigate } from "react-router-dom";
const AuthGuard = ({ requiredAuth, allowedRoles, children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If user must NOT be logged in
  if (!requiredAuth && token) {
    if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
    if (role === "user") return <Navigate to="/user/dashboard" replace />;
  }

  // If user must be logged in but not
  if (requiredAuth && !token) {
    return <Navigate to="/login" replace />;
  }

  // If logged in but role does not match
  if (requiredAuth && allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;
