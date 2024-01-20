import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useLoadingState } from "./AdminLayout";
const AdminDashboardLayout = () => {
  const { showLoader, setShowLoader } = useLoadingState();
  return (
    <div className="flex grow">
      <AdminSidebar />
      <Outlet context={{ showLoader, setShowLoader }} />
    </div>
  );
};

export default AdminDashboardLayout;
