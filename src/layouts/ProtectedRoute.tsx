import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { token } from "../redux/services/myUserProfileEndpoints";

/**
 * Takes Component that is passed, isLoggedIn is checked, if false naviigate(/) else goes to /user path
 * @returns Component that is passed
 */

// interface ProtectedRouteProps {
//   Component: React.ComponentType<unknown>;
// }

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return <div>{token ? children : null}</div>;
};

export default ProtectedRoute;
