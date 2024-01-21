import { NavLink } from "react-router-dom";
import skillshoreLogo from "../assets/skillshoresvg.svg";
import { FaHouse } from "react-icons/fa6";

const UserNavbar = () => {
  return (
    <nav className="h-[56px] shrink-0 w-full bg-[#03103F] text-white flex justify-between items-center px-12">
      <div className="flex items-center gap-3 cursor-pointer">
        <FaHouse className="ml-5 text-gray-200" />
        <NavLink to="/profile" className="login-nav flex gap-2">
          <img src={skillshoreLogo} alt="skillshore-logo" />
        </NavLink>
      </div>

      <div className="flex gap-[46px] text-sm">
        <NavLink
          to="/profile"
          className="cursor-pointer dark:text-white font-bold hover:underline"
        >
          Profile
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer dark:text-white font-bold hover:underline"
        >
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default UserNavbar;
