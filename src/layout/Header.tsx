import homeIcon from "../assets/images/home.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-auto h-14 dark:bg-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-2 p-4">
        <nav className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={homeIcon} className="h-6 w-6" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-nav1">
            Skill<span className="dark:text-nav2 cursor-pointer">Shore</span>
          </span>
        </nav>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex items-center justify-end space-x-2">
            <li>
              <NavLink
                to="/userProfile"
                className=" py-2 px-3 mx-4 cursor-pointer rounded md:bg-transparent md:p-0 dark:text-white"
              >
                Profile
              </NavLink>
              <NavLink
                to="/"
                className=" py-2 px-3 rounded cursor-pointer md:bg-transparent md:p-0 dark:text-white"
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
