import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  EnterNewPassword,
  ForgotPassword,
  ResetPassword,
} from "./pages/auth/forgotPassword";
import { AuthWrapper, ProtectedRoute } from "./routes";
import {
  UserProfile,
  EditProfile,
  CreateProfile,
} from "./pages/student/profile";
import { Home } from "./pages/student/home";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import CommonLayout from "./layouts/CommonLayout";
import Admin from "./pages/admin/Admin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<ProtectedRoute><CommonLayout layoutFor="auth" /></ProtectedRoute> }>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="enter-new-password" element={<EnterNewPassword />} />
            </Route>
            {/* ----------user pages goes here as protected route---------- */}
            <Route element={<CommonLayout layoutFor="user" />}>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
              <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
              <Route path="/create-profile" element={<ProtectedRoute><CreateProfile /></ProtectedRoute>} />
            </Route>
            {/* ----------admin pages goes here as protected route----------- */}
            <Route path="/admin">
                <Route index element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            </Route>
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
