import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import InitialLayout from "./layouts/Auth/InitialLayout";
import Register from "./pages/auth/register";
import User from "./pages/student/User";
import ForgotPassword from "./pages/auth/forgotPassword";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route index element={<Login />} />
            {/* ----------register form goes here---------- */}
            <Route path="register" element={<Register />} />
            {/* ----------register form goes here---------- */}
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route path="user" element={<User />} />
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
