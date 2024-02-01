import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
// import { useNavigate, useLocation } from "react-router-dom";
/**
 * Takes Component that is passed, isLoggedIn is checked, if false naviigate(/) else goes to /user path
 * @returns Component that is passed
 */
interface MyComponentProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<MyComponentProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.data.token);
  const data = useSelector((state: RootState) => state.user.data);
  const location = useLocation();
  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  });

  useEffect(() => {
    if (!data.profile && location.pathname === "/home") {
      return navigate("/create-profile");
    } else if (data.profile && location.pathname === "/create-profile") {
      return navigate("/home");
    }
  }, [location.pathname, data]);

  return <div>{children}</div>;
};

export default ProtectedRoute;
