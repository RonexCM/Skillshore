import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";
import Register from "./pages/student/Register";
import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/student/HomePage";
import UserProfile from "./pages/student/UserProfile";
import RegistrationForm from "./pages/student/Registration";
import EditProfile from "./pages/student/EditProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route index element={<Login />} />
            {/* ----------register form goes here---------- */}
            <Route path="register" element={<Register />} />
          </Route>
          {/* ----------user pages goes here as protected route---------- */}
          <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/userProfile">
            <Route index element={<UserProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>

          <Route path="/registration" element={<RegistrationForm />} />
        </Route>
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
