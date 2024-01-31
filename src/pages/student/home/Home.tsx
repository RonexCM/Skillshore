import { LineWave } from "react-loader-spinner";
import useCheckRole from "../../../hooks/useCheckRole";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";

const Home = () => {
  // const userDetails = useSelector((state: RootState) => state.user.data);
  const { data: userData, isLoading } = useGetUserQuery();

  useCheckRole(userData);
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
