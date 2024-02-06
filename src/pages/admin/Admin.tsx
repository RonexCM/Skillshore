import { NavLink } from "react-router-dom";
import { setInitialData } from "../../redux/slice/userSlice";
import { logOut } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(setInitialData());
    dispatch(logOut());
  };

  return (
    <div className="block justify-center h-[600px] w-[800px] text-lg text-primary">
      <h1>Admin page coming soon</h1>
      <NavLink
          to="/"
          onClick={LogOut}
          className="font-bold cursor-pointer dark:text-white hover:underline"
          >
          Logout
        </NavLink>
    </div>
  );
};

export default Admin;