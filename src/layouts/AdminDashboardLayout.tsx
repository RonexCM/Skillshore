import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/SidebarAdmin";

const AdminDashboardLayout = () => {
  return (
    <div className="flex h-full w-screen">
      <SidebarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
