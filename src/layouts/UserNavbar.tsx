import { NavLink, useLocation } from "react-router-dom";
import skillshoreLogo from "../assets/skillshoresvg.svg";
import { logOut } from "../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { FaHouse } from "react-icons/fa6";

const UserNavbar = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logOut());
  };
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="h-[56px] shrink-0 w-full bg-[#03103F] text-white flex justify-between items-center px-12">
      <div className="flex items-center gap-3 cursor-pointer">
        <NavLink to="/profile" className="flex gap-2 login-nav">
          <FaHouse className="w-6 h-6 ml-5 text-gray-200" />
          <img src={skillshoreLogo} alt="skillshore-logo" />
        </NavLink>
      </div>

      <div className="flex gap-[46px] text-sm">
        {pathname !== "/create-profile" && (
          <NavLink
            to="/profile"
            className="font-bold cursor-pointer dark:text-white hover:underline"
          >
            Profile
          </NavLink>
        )}
        <NavLink
          to="/"
          onClick={LogOut}
          className="font-bold cursor-pointer dark:text-white hover:underline"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default UserNavbar;
