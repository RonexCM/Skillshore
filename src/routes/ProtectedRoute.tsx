import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  // const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.data.token);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  });

  return <div>{token ? children : null}</div>;
};

export default ProtectedRoute;
