import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
  return (
    <div>
      <div className="flex flex-col justify-between ">
        <UserNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
