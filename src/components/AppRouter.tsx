import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router";
import Login from "./pages/Login";
import User from "./pages/User";
import ProtectedRoute from "./pages/ProtectedRoute";
import Logout from "./pages/Logout";
import LogoutMock from "./pages/LogoutMock";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";

const titles: Record<string, string> = {
    "/": "Home",
    "/login": "Login",
    "/logout": "Logout",
    "/about": "About",
    "/user": "User",
};

function AppRouter() {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState<string>();

    useEffect(() => {
        document.title = `${titles[location.pathname]} page`;
        setCurrentPage(`${titles[location.pathname]} page was loaded`);
        setTimeout(() => {
            setCurrentPage("");
        }, 500);
    }, [location]);

    return (
        <>
            <p aria-live="polite" id="current-page" className="sr-only">
                {currentPage}
            </p>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logoutMock" element={<LogoutMock />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/user/*"
                    element={
                        <ProtectedRoute>
                            <Routes>
                                <Route index element={<User />} />
                            </Routes>
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default AppRouter;
