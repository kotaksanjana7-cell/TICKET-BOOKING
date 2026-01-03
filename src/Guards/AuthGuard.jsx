import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({
  children,
  requiredAuth = true,
  allowedRoles = [],
  redirect = "/login"
}) => {
  const location = useLocation();
  const authData = JSON.parse(localStorage.getItem("authData"));
  const isAuthenticated = !!authData;
  const userRole = authData?.role?.toLowerCase();

  // Not logged in
  if (requiredAuth && !isAuthenticated) {
    return <Navigate to={redirect} state={{ from: location }} replace />;
  }

  // Logged in but shouldn't access auth pages
  if (!requiredAuth && isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Role not allowed
  if (allowedRoles.length && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthGuard;
