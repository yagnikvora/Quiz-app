import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    
    const [data,setData] = useState([]);
    const fetchData = async (sub,no) => {
        try {
            if (sub === "data-structure") {
                sub = "ds";
            }
            let url = "http://localhost:5001/quiz/" + sub + "/" + no;
            const response = fetch(url)

            if(response.ok){
                const Quiz_data = await response.json();
                setData(Quiz_data);
            }
            return data;
        } catch (error) {
            console.lor({error:error.massage});
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);


    return (
        <AuthContext.Provider value={{ storeTockenInLS, isLoggedIn, logoutUser, user, fetchData }}>
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