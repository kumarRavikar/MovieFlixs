import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
  const {user, loading} = useSelector(state=>state.auth);
    if (loading) {
    return <h2>Loading...</h2>;   // waiting for firebase
  }

  return user ? children : <Navigate to="/login" replace/>;
};

export default ProtectedRoute;