import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

/**
 * Takes Component that is passed, isLoggedIn is checked, if false naviigate(/) else goes to /user path
 * @returns Component that is passed
 */
interface MyComponentProps {
  children: ReactNode;
}
const AuthRoute: React.FC<MyComponentProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.data.token);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return <div>{children}</div>;
};

export default AuthRoute;
