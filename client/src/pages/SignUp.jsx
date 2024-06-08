import { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../store/auth";

function SignUp() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

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
        console.log(user);

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log("response data : ", response);

            if (response.ok) {
                const responseData = await response.json();
                alert("registration successful");
                storeTockenInLS(responseData.token);
                setUser({ username: "", email: "", phone: "", password: "" });
            } else {
                console.log("error inside response ", "error");
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
                            <input type="number" value={user.phone}  placeholder="Enter Phone no" required name="phone" className="form-control rounded-0" onChange={handleInput} />
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