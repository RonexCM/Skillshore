import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

/**
 * Takes Component that is passed, isLoggedIn is checked, if false naviigate(/) else goes to /user path
 * @returns Component that is passed
 */

interface ProtectedRouteProps {
  Component: React.ComponentType<unknown>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const navigate = useNavigate();
  const { Component } = props;

  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  return <div>{token ? <Component /> : null}</div>;
};

export default ProtectedRoute;
