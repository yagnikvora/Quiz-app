import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));


    const storeTockenInLS = (serverTocken) => {
        localStorage.setItem('token', serverTocken);
        setToken(localStorage.getItem('token'));
    }

    let isLoggedIn = token ? true : false;


    const logoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    const [user, setUser] = useState("");

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userAuthentication();
    }, []);


    return (
        <AuthContext.Provider value={{ storeTockenInLS, isLoggedIn, logoutUser, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContextValue;
}