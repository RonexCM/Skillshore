import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthNavbar from "./AuthNavbar";
import UserNavbar from "./UserNavbar";
import { ToastContainer } from "react-toastify";

type Props = {
  layoutFor: string;
};
/**
 * Layout for login, register and forgot password page
 *
 */
export const CommonLayout = ({ layoutFor }: Props) => {
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
