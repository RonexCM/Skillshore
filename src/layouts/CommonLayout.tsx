import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthNavbar from "./AuthNavbar";
import UserNavbar from "./UserNavbar";

type Props = {
  layoutFor: string;
};
/**
 * Layout for login, register and forgot password page
 *
 */
export const CommonLayout = ({ layoutFor }: Props) => {
  return (
    <div className="flex flex-col justify-start min-h-screen items-center">
      {layoutFor === "auth" ? <AuthNavbar /> : <UserNavbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default CommonLayout;
