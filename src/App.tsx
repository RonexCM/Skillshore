import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";
import Register from "./pages/student/Register";
import "./index.css";
import Layout from "./layout/Layout";
import UserProfile from "./pages/student/UserProfile";
import RegistrationForm from "./pages/student/Registration";
import EditProfile from "./pages/student/EditProfile";

const App = () => {
  return (
    <div>
      {/* ----------user pages goes here as protected route---------- */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<InitialLayout />}>
              <Route index element={<Login />} />
              {/* ----------register form goes here---------- */}
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/userProfile">
              <Route index element={<UserProfile />} />
              <Route path="editProfile" element={<EditProfile />} />
            </Route>

            <Route path="/register" element={<RegistrationForm />} />
          </Route>
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
