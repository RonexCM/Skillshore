import NavbarAdmin from "../components/admin/NavbarAdmin";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavbarAdmin />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
