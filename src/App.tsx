import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { AuthLayout } from "./layouts";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgotPassword";
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/student/profile/UserProfile";
import EditProfile from "./pages/student/profile/EditProfile";
import { Home } from "./pages/student/home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            {/* ----------register form goes here---------- */}
            <Route path="register" element={<Register />} />
            {/* ----------register form goes here---------- */}
            <Route path="forgotPassword" element={<ForgotPassword />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Route>
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
