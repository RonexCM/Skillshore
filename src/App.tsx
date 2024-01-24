import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EnterNewPassword, ForgotPassword } from "./pages/auth/forgotPassword";
import {  ProtectedRoute } from "./layouts";
import { UserProfile, EditProfile } from "./pages/student/profile";
import { Home } from "./pages/student/home";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import CommonLayout from "./layouts/CommonLayout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout layoutFor="auth" />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />

            <Route path="enterNewPassword" element={<EnterNewPassword />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route element={<CommonLayout layoutFor="user" />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={<ProtectedRoute Component={UserProfile} />}
            />
            <Route
              path="/editProfile"
              element={<ProtectedRoute Component={EditProfile} />}
            />
          </Route>
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
