import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const { authorizationToken } = useAuth();

    const getContactsData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            toast.success(response.ok)
            if (response.ok) {
                setContactData(contactData.filter(contact => contact._id !== id))
                toast.success("deleted successfully");
            } else {
                toast.error("Not Deleted ");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <>
            <section>
                <h1 className="container-fluid d-flex justify-content-center align-items-center">Admin Contact Data </h1>

                <div className="container  admin-users">
                    {contactData.map((curContactData, index) => {
                        const { username, email, message, _id } = curContactData;

                        return (
                            <div key={index}>
                                <p>Username :- {username}</p>
                                <p>Email Id :- {email}</p>
                                <p>Message :- {message}</p>
                                <button className="btn" onClick={() => deleteContactById(_id)}>
                                    delete
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};