import { TAccessibleRoutes, TAllowedRoute } from "../pages/auth/types";

export const accessibleRoutes: TAccessibleRoutes = {
    publicRoute: ["/", "/register", "/forgot-password", "/forgotPassword", "/enterNewPassword", "/reset-password"],
    adminRoute: ["/admin", "/reset-password"],
    userWithNoProfileRoute: ["/create-profile", "/reset-password"],
    userWithProfileRoute: [
        "/home",
        "/profile",
        "/edit-profile",
        "/reset-password",
    ],
};

export const defaultRoutes: TAllowedRoute = {
    adminRoute: "/admin",
    userWithNoProfileRoute: "/create-profile",
    userWithProfileRoute: "/home",
};