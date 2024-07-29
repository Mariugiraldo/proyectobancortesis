import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser } from "../services/AuthService";

// Contexto para autenticación
const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    getToken: () => {},
    saveSessionInfo: (data) => {},
    logOut: () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (token && user === null) {
            saveUserData(token);
        }
    }, [user]);

    useEffect(() => {
        console.log('User state updated:', user);
        console.log('Authenticated state updated:', isAuthenticated);
    }, [user, isAuthenticated]);


    function getToken() {
        return sessionStorage.getItem('token') || null;
    }

    async function saveUserData(token) {
        console.log('Sending request with token:', token);
        try {
            const userData = await fetchUser(token);
            console.log('Response from fetchUser:', userData);
            
            if (userData) {
                setUser(userData);
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    function logOut() {
        sessionStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null); // Usa null en lugar de {}
        console.log('Logout exiting');
    }

    function saveSessionInfo(data) {
        const { jwt } = data;
        if (jwt) {
            sessionStorage.setItem('token', jwt);
            saveUserData(jwt);
            console.log('Token successfully saved!');
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, saveSessionInfo, logOut, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);