import { NavLink } from "react-router-dom";
import logoIcon from "../assets/images/SKILLSHORE.svg";
import { FaHouse } from "react-icons/fa6";

const UserNavbar = () => {
  return (
    <nav className="w-auto h-15 dark:bg-dark flex justify-between">
      <div className="flex items-center gap-3 cursor-pointer">
        <FaHouse className="h-6 w-6 ml-5 text-gray-200" />
        <img src={logoIcon} className="h-6 w-32" />
      </div>

      <ul className="font-medium px-10 py-4 flex space-x-5 cursor-pointer justify-end">
        <li>
          <NavLink
            to="Profile"
            className="cursor-pointer mr-5 dark:text-white font-bold"
          >
            Profile
          </NavLink>
          <NavLink
            to="/"
            className="cursor-pointer font-normal dark:text-white"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
