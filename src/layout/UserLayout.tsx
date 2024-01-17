import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

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
