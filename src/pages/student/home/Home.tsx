import useCheckRole from "../../../hooks/useCheckRole";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";

const Home = () => {
  // const userDetails = useSelector((state: RootState) => state.user.data);
  const { data: userData, isLoading } = useGetUserQuery();

  useCheckRole(userData);
  if (isLoading) {
    return <div>LOADING..........</div>;
  }
  return <div className="text-center">Student Homepage</div>;
};

export default Home;
