import { NavLink } from 'react-router-dom';
import './css/Header.css';
import {useAuth} from '../store/auth'

const Header = () => {

    const { isLoggedIn } = useAuth();

    return (
        <header className="header1">
            <div className="logo">
                <NavLink to="/">QuizMaster</NavLink>
            </div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className='cta'>
                {isLoggedIn ? (
                    <NavLink to="/logout" className="login-btn">Logout</NavLink>
                ) : (
                    <>
                        <NavLink to="/login" className="login-btn">Login</NavLink>
                        <NavLink to="/signup" className="login-btn">Sign Up</NavLink>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
