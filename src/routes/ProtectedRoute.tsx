import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

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
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  });
  return <div>{loggedIn ? <Component /> : null}</div>;
};

export default ProtectedRoute;
