import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

/**
 * Takes Component that is passed, isLoggedIn is checked, if false naviigate(/) else goes to /user path
 * @returns Component that is passed
 */

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const cookie = new Cookies();
  const token = cookie.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return <div>{token ? children : null}</div>;
};

export default ProtectedRoute;
