import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthNavbar from "./AuthNavbar";
import UserNavbar from "./UserNavbar";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useGetUserMutation } from "../redux/services/myUserProfileEndpoints";
import { setUserData } from "../redux/slice/userSlice";

type Props = {
  layoutFor: string;
};

export const CommonLayout = ({ layoutFor }: Props) => {
  const [getUserRole, { isSuccess, data }] = useGetUserMutation();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.data.token);

  useEffect(() => {
    if (token) {
      getUserRole();
    }
  }, [token]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data));
    }
  }, [isSuccess]);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex flex-col justify-start min-h-screen">
=======
    <div className="flex flex-col justify-start min-h-screen ">
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
=======
    <div className="flex flex-col justify-between items-center min-h-screen">
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
      {layoutFor === "auth" ? <AuthNavbar /> : <UserNavbar />}
      <ToastContainer
        className="top-16 absolute"
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
