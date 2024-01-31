import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthNavbar from "./AuthNavbar";
import UserNavbar from "./UserNavbar";
import { ToastContainer } from "react-toastify";
import { LineWave } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useGetUserRoleMutation } from "../redux/services/myUserProfileEndpoints";
import useCheckRole from "../hooks/useCheckRole";
import { setUserData } from "../redux/slice/userSlice";

type Props = {
  layoutFor: string;
};

export const CommonLayout = ({ layoutFor }: Props) => {
  const [getUserRole, { isLoading }] = useGetUserRoleMutation();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.data.token);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const { data } = await getUserRole();
        dispatch(setUserData(data));
      }
    };
    fetchData();
  }, [token, getUserRole]);
  useCheckRole();

  return (
    <div className="flex flex-col justify-start min-h-screen ">
      {layoutFor === "auth" ? <AuthNavbar /> : <UserNavbar />}
      <ToastContainer
        className="top-16"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        limit={1}
      />
      {isLoading ? (
        <div className="flex justify-center h-[800px]">
          <LineWave color="#1a2b48" height={100} />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default CommonLayout;
