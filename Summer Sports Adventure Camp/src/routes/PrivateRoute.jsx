import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading</h1>;
  } else {
    if (!user) {
      return <Navigate to="/"></Navigate>;
    } else {
      return children;
    }
  }
};

export default PrivateRoute;
