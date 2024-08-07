import { Link, NavLink } from 'react-router-dom';
import './css/Header.css';
import {useAuth} from '../store/auth'

const Header = () => {

    const { isLoggedIn, user } = useAuth();

    return (
        <header className="header1">
            <nav className="navbar navbar-expand-lg w-100" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="./">QuizMaster</Link>
                <button className="navbar-toggler" to="/" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./contact" aria-disabled="true">Contact</Link>
                        </li>
                    </ul>
                    <div className='cta'>
                            {user.isAdmin ? <NavLink to="/admin" className="login-btn">Admin Deshboard</NavLink> : <></>}
                             {isLoggedIn ? (
                                 <NavLink to="/logout" className="login-btn">Logout</NavLink>
                             ) : (
                                 <>
                                     <NavLink to="/login" className="login-btn">Login</NavLink>
                                     <NavLink to="/signup" className="login-btn">Sign Up</NavLink>
                                 </>
                             )}
                     </div>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default Header;
