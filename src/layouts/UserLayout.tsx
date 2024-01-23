import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div>
      <div className="flex flex-col justify-between min-h-screen ">
        <UserNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
