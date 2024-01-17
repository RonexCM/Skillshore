import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/admin/SidebarAdmin";

const AdminDashboardLayout = () => {
  return (
    <div className="flex grow">
      <SidebarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminDashboardLayout;
