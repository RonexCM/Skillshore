import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TUserProfile } from "../pages/student/types";

const useCheckRole = (userData: TUserProfile) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) return;
    const { data } = userData;
    if (data.role === "admin") {
      return navigate("/admin");
    }
    if (data.role === "student" && data.profile === null) {
      return navigate("/create-profile");
    }
  }, [userData]);
};


export default useCheckRole;
