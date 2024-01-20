import { Outlet } from "react-router-dom";
import AuthNavbar from "./AuthNavbar";
import Footer from "./Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen items-center">
      <AuthNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
