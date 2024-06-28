import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();

    const { storeTockenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success("SignUp and Login successful");
                storeTockenInLS(responseData.token);
                // window.location.reload();
                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/");
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails[0] : responseData.message);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };
    
    return (
        <div className="container-fluid" >
            <div className="row d-flex justify-content-center align-items-center bg-dark vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" value={user.username} placeholder="Enter Name" required  name="username" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" value={user.email} placeholder="Enter Email" required name="email" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone"><strong>Phone </strong></label>
                            <input type="number" maxLength="10" value={user.phone}  placeholder="Enter Phone no" required name="phone" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" value={user.password} placeholder="Enter Password" required name="password" className="form-control rounded-0" onChange={handleInput} />
                        </div>

                
                        <button type="submit" className="btn btn-success w-100 rounded-1">Register</button>
                    </form>

                    <p>Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-1 text-direction-none">Login</Link>
                </div>
            </div>
        </div>
    );
} export default SignUp