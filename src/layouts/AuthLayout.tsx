import { Outlet } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Footer from "./Footer";

/**
 * Layout for login, register and forgot password page
 *
 */
export const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-start min-h-screen items-center">
      <AuthNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
