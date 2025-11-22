import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContext } from "../src/context/LoginContext";

export default function ProtectedRoute({ children }) {
    const { login } = useContext(LoginContext);
    const location = useLocation();

    if (!login) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
