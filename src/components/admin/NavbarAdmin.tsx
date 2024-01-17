import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import skillshoreLogo from "../../assets/skillshoresvg.svg";

const NavbarAdmin = () => {
  const handleLogout = () => {
    // show a modal saying confirm logout?
  };
  return (
    <div className="h-[56px] shrink-0 w-full bg-[#03103F] text-white flex justify-between items-center px-5">
      <NavLink to="/admin" className="flex gap-1">
        <MdHome className="text-xl" />
        <img src={skillshoreLogo} alt="skillshore-logo" />
      </NavLink>
      <div className="flex gap-4 text-sm">
        <NavLink to="profile" className="font-bold hover:underline">
          Profile
        </NavLink>
        <button className="font-normal hover:underline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarAdmin;
