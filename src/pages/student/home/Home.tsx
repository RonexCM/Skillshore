import { useEffect } from "react";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/slice/userSlice";
import { LineWave } from "react-loader-spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { data: userData, isSuccess, isLoading } = useGetUserQuery();

  useEffect(() => {
    if (userData && isSuccess) {
      dispatch(setUserData(userData));
    }
  }, [isSuccess, userData]);

  if (isLoading) {
    return (
      <div className="flex justify-center h-[800px]">
        <LineWave color="#1a2b48" height={100} />
      </div>
    );
  }
  return <div className="text-center">Student Homepage</div>;
};

export default Home;
