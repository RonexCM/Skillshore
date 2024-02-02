import { NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import skillshoreLogo from "../assets/skillshoresvg.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/slice/authSlice";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="h-[56px] shrink-0 w-full bg-[#03103F] text-white flex justify-between items-center px-5">
      <NavLink to="/admin" className="flex gap-1">
        <MdHome className="text-xl" />
        <img src={skillshoreLogo} alt="skillshore-logo" />
      </NavLink>
      <div className="flex gap-4 text-sm">
        <button className="font-normal hover:underline" onClick={LogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
