// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoutes;
