import { NavLink, useLocation } from "react-router-dom";
import skillshoreLogo from "../assets/skillshoresvg.svg";
import Cookies from "universal-cookie";
import { logOut } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { FaHouse } from "react-icons/fa6";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logOut());
    new Cookies().remove("token");
  };
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="h-[56px] shrink-0 w-full bg-[#03103F] text-white flex justify-between items-center px-12">
      <div className="flex items-center gap-3 cursor-pointer">
        <NavLink to="." className="login-nav flex gap-2">
          <FaHouse className="h-6 w-6 ml-5 text-gray-200" />
          <img src={skillshoreLogo} alt="skillshore-logo" />
        </NavLink>
      </div>

      <div className="flex gap-[46px] text-sm">
        {pathname !== "/createProfile" && (
          <NavLink
            to="/profile"
            className="cursor-pointer dark:text-white font-bold hover:underline"
          >
            Profile
          </NavLink>
        )}
        <NavLink
          to="/"
          onClick={LogOut}
          className="cursor-pointer dark:text-white font-bold hover:underline"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default UserNavbar;
