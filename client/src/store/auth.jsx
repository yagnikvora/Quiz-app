import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem('token'));
    const storeTockenInLS = (serverTocken)=>{
        return localStorage.setItem('token', serverTocken);
    }

    let isLoggedIn = !!token;

    const logoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ storeTockenInLS, isLoggedIn, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const authContextValue =  useContext(AuthContext);
    if (!authContextValue){
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContextValue;
}