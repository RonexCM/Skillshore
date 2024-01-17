import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/student/HomePage";
import UserProfile from "./pages/student/UserProfile";
import EditProfile from "./pages/student/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="userProfile">
            <Route index element={<UserProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
