import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/student/profile/UserProfile";
import EditProfile from "./pages/student/profile/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="Profile">
            <Route index element={<UserProfile />} />
            <Route path="editProfile" element={<EditProfile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
