import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useCheckRole = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (!userData) return;

    if (userData.role === "admin") {
      return navigate("/admin");
    }
    if (userData.role === "student" && userData.profile === null) {
      return navigate("/create-profile");
    }
  }, [userData]);
};

export default useCheckRole;
