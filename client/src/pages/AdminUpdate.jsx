import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();
    const params = useParams();
    console.log("params single user: ", params);
    const { authorizationToken } = useAuth();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users single data:  ${data}`);
            setData(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/users/update/${params.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("Updated successfully");
                navigate("/admin/users");

            } else {
                toast.error("Not Updated ");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="main-heading">Update User Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row mt-5">
                    <label htmlFor="username" className="col-1 d-inline">username</label>
                    <input
                        className="col mx-5 form-input d-inline"
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        value={data.username}
                        onChange={handleInput}
                        required
                    />
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-1 d-inline">email</label>
                    <input
                        className="col mx-5 form-input d-inline"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={data.email}
                        onChange={handleInput}
                        required
                    />
                </div>

                <div className="form-group row">
                    <label htmlFor="phone" className="col-1 d-inline">Mobile</label>
                    <input
                        className="col mx-5 form-input d-inline"
                        type="phone"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        value={data.phone}
                        onChange={handleInput}
                        required
                    />
                </div>
                <div className="m-3" >
                    <button className="btn btn-success" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};