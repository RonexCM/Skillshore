import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import InitialLayout from "./layouts/InitialLayout";
import Register from "./pages/Register";
import User from "./pages/student/User";
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
          <Route path="user" element={<User />} />
          {/* ----------admin pages goes here as protected route----------- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
