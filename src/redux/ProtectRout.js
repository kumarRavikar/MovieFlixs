import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./AuthSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
    if (user === undefined) {
    return <h2>Loading...</h2>;   // waiting for firebase
  }

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;