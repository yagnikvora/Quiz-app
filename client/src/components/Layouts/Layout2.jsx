import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaHome, FaBook } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Layout2 = () => {
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