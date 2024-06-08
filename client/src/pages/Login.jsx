import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="container-fluid" >
            <div className="row d-flex justify-content-center align-items-center bg-dark vh-100">

                <div className="bg-white p-3 rounded w-25">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" value={user.email} placeholder="Enter Email" required autoComplete="off" name="email" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" value={user.password} placeholder="Enter Password" required autoComplete="off" name="password" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                        <button type="submit" className="btn btn-success w-100 rounded-1">Login</button>
                    </form>

                    <p>Do not Have any Account</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-1 text-direction-none">Sign Up</Link>
                </div>
            </div>
        </div>
    );
} export default Login