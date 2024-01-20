import { Outlet } from "react-router-dom";
import NavbarInitial from "./NavbarInitial";
import Footer from "./Footer";

const InitialLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen items-center">
      <NavbarInitial />
      <Outlet />
      <Footer />
    </div>
  );
};

export default InitialLayout;
