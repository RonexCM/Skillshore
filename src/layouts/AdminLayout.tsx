import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";
import { Outlet, useOutletContext } from "react-router-dom";
import { Spinner } from "flowbite-react";

type ContextType = {
  showLoader: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
};

const AdminLayout = () => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    if (showLoader) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLoader]);

  return (
    <div className="flex flex-col justify-between h-screen">
      {showLoader && (
        <div className="fixed inset-0 bg-dark bg-opacity-[30%] z-50 flex items-center justify-center">
          <div className="">
            <Spinner aria-label="Extra large spinner example" size="xl" />
          </div>
        </div>
      )}
      <AdminNavbar />
      <Outlet context={{ showLoader, setShowLoader } satisfies ContextType} />
      <Footer />
    </div>
  );
};

export default AdminLayout;

export const useLoadingState = () => {
  return useOutletContext<ContextType>();
};
