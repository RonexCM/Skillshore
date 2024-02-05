import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer, RootState } from "../redux/store";

const useCheckRole = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.data);
  const token = useSelector((state: RootReducer) => state.auth.data.token);

  useEffect(() => {
    if (!userData.role) return;

    if (userData.profile && token) {
      navigate("/home");
    }
    if (userData.role === "admin" && token) {
      return navigate("/admin");
    } else if (
      userData.role === "student" &&
      userData.profile === null &&
      token
    ) {
      return navigate("/create-profile");
    }
  }, [userData, token]);
};

export default useCheckRole;
