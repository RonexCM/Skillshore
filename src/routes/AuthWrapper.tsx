import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { LineWave } from "react-loader-spinner";
import { accessibleRoutes, defaultRoutes } from "../configs/routeConstants";

const AuthWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state: RootState) => state.user.data);
    const token = useSelector((state: RootState) => state.auth.data.token);

    useEffect(() => {
        handleRouteAuthentication();
    }, [token, userData]);

    const handleRouteAuthentication = () => {
        const {
            publicRoute,
            adminRoute,
            userWithNoProfileRoute,
            userWithProfileRoute,
        } = accessibleRoutes;

        if (!token) {
            handleUnauthenticatedUser(publicRoute);
            return;
        }

        let allowedRoutes: string[] = [];
        let user: string = "";

        if (userData.role === "admin") {
            allowedRoutes = adminRoute;
            user = "adminRoute";
        } else {
            allowedRoutes = userData.profile
                ? userWithProfileRoute
                : userWithNoProfileRoute;
            user = userData.profile
                ? "userWithProfileRoute"
                : "userWithNoProfileRoute";
        }

        handleUnauthorizedRoutes(allowedRoutes, user);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    };

    const handleUnauthenticatedUser = (publicRoute: string[]) => {
        if (!publicRoute.includes(pathname)) {
            navigate("/");
        }
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    };

    const handleUnauthorizedRoutes = (
        allowedRoutes: string[],
        user: string
    ) => {
        if (!allowedRoutes.includes(pathname)) {
            navigate(defaultRoutes[user]);
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <LineWave />
            </div>
        );
    }

    return children;
};

export default AuthWrapper;