import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthNavbar from "./AuthNavbar";
import UserNavbar from "./UserNavbar";
import { ToastContainer } from "react-toastify";
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
  const [getUserRole, { isSuccess }] = useGetUserRoleMutation();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.data.token);

  useEffect(() => {
    if (token) {
      getUserRole;
    }
  }, [token]);

  useEffect(() => {
    if (isSuccess) {
      const { data } = getUserRole();
      dispatch(setUserData(data));
    }
  });

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
      <Outlet />
      <Footer />
    </div>
  );
};

export default CommonLayout;
