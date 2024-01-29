import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./pages/auth/forgotPassword";
import { ProtectedRoute } from "./routes";
import {
  UserProfile,
  EditProfile,
  CreateProfile,
} from "./pages/student/profile";
import { Home } from "./pages/student/home";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import CommonLayout from "./layouts/CommonLayout";
import ResetPassword from "./pages/auth/forgotPassword/ResetPassword";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout layoutFor="auth" />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />

            <Route path="password-reset/:token" element={<ResetPassword />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route element={<CommonLayout layoutFor="user" />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={<ProtectedRoute>{<UserProfile />}</ProtectedRoute>}
            />
            <Route
              path="/edit-profile"
              element={<ProtectedRoute>{<EditProfile />}</ProtectedRoute>}
            />
            <Route
              path="/create-profile"
              element={<ProtectedRoute>{<CreateProfile />}</ProtectedRoute>}
            />
          </Route>
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
