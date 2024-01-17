import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";
import Register from "./pages/student/Register";
import "./index.css";
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
            <Route path="/register" element={<RegistrationForm />} />
            {/* ----------register form goes here---------- */}
          </Route>
          <Route path="/userProfile">
            <Route index element={<UserProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>

          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
