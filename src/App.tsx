import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";
import User from "./pages/student/User";
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/student/profile/UserProfile";
import EditProfile from "./pages/student/profile/EditProfile";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Route>
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
