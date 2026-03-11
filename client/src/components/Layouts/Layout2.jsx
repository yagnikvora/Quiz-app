import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaUser, FaHome, FaBook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Layout2 = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user.isAdmin){
            toast.warning("You don't have asscess to admin panel")
            navigate("/");
        }

    },[])
    
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users">
                                    <FaUser /> users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts">
                                    <FaMessage /> Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/quiz">
                                    <FaBook /> Quizs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/">
                                    <FaHome /> Home
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};
export default Layout2;