import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";


//this Node protects routes from non authorized users.
export default function ProtectedNode() {
    const auth = useAuth();

    if (!auth.isAuthenticated) {
        console.log('Access denied please log in first');
        //if user isn'nt authorized will redirect to login page
        return <Navigate to="/login" />;
    }

    // Else outlet wil redirect to the pretended node.
    return <Outlet />;
}