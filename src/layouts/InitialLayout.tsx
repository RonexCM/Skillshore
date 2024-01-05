import { Outlet } from "react-router-dom";
import NavbarInitial from "../components/NavbarInitial";
import Footer from "../components/Footer";

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
