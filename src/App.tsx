import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EnterNewPassword, ForgotPassword } from "./pages/auth/forgotPassword";
import { AuthWrapper} from "./routes";
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
                        <Route path="/admin" element={<Admin />} />
                        <Route
                            path="/"
                            element={<CommonLayout layoutFor="auth" />}
                        >
                            <Route index element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="forgotPassword"
                                element={<ForgotPassword />}
                            />
                            <Route
                                path="enterNewPassword"
                                element={<EnterNewPassword />}
                            />
                        </Route>
                        {/* ----------user pages goes here as protected route---------- */}
                        <Route element={<CommonLayout layoutFor="user" />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/profile" element={<UserProfile />} />
                            <Route
                                path="/edit-profile"
                                element={<EditProfile />}
                            />
                            <Route
                                path="/create-profile"
                                element={<CreateProfile />}
                            />
                        </Route>
                        {/* ----------admin pages goes here as protected route----------- */}
                    </Routes>
                </AuthWrapper>
            </BrowserRouter>
        </div>
    );
};

export default App;
