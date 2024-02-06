import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  EnterNewPassword,
  ForgotPassword,
  ResetPassword,
} from "./pages/auth/forgotPassword";
import { AuthWrapper } from "./routes";
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
import QuizDashboard from "./pages/student/quiz/QuizDashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<CommonLayout layoutFor="auth" />}>
              <Route index element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="enter-new-password" element={<EnterNewPassword />} />
            </Route>
            {/* ----------user pages goes here as protected route---------- */}
            <Route element={<CommonLayout layoutFor="user" />}>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/create-profile" element={<CreateProfile />} />
              <Route path="/quiz" element={<QuizDashboard />} />
            </Route>
            {/* ----------admin pages goes here as protected route----------- */}
            <Route path="/admin">
              <Route index element={<Admin />} />
            </Route>
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
