import { Navigate } from "react-router";

interface IProtectedRouteProps {
    children: React.ReactNode;
}

function ProtectedRoute({ children }: IProtectedRouteProps) {
    const user = localStorage.getItem("token");

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
