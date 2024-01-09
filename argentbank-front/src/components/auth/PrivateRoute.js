import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  return isAuthenticated ? <Component /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
