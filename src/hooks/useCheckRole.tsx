import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TUserProfile } from "../pages/student/types";

const useCheckRole = (userData: TUserProfile) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (userData) {
      if (userData.data.role === "admin") {
        return navigate("/admin");
      } else if (
        userData.data.role === "student" &&
        userData.data.profile != null
      ) {
        navigate("/profile");
      } else if (userData.data.profile === null) {
        return navigate("/create-profile");
      } else {
        console.error(`Unknown role: ${userData.data.role}`);
      }
    }
  }, [userData]);
};

// if (!userData.data.profile) {
//   navigate("/create-profile");
// }

export default useCheckRole;
