import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import "./css/Admin.css"
import { toast } from "react-toastify";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                toast.success("User deleted successfully")
                getAllUsersData();
            }else{
                toast.error("You can not delete yourself")
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <h1>Admin Users Data </h1>
                </div>
                <div className="container">
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => {
                                return (
                                    <tr  key={index}>
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td>
                                            <Link className="btn btn-warning "  to={`/admin/users/edit/${curUser._id}`}>Edit</Link>
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-primary"
                                                onClick={() => deleteUser(curUser._id)}
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};