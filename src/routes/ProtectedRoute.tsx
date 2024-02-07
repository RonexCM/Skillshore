import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state: RootState) => state.user.data);
  const token = useSelector((state: RootState) => state.auth.data.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    if (token && userData && userData.role === "admin") {
      navigate("/admin");
    }

    if (token && userData && userData.role === "student") {
      navigate("/home");
    }

    if (token && userData && userData.role === "student") {
      navigate("/quiz");
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LineWave />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
