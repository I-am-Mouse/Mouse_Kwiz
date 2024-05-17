import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AdminProfile = () => {
    const user = sessionStorage.getItem("User")
    const [token, setToken] = useState(sessionStorage.getItem("Token"));
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem("Token");
        navigate("/login");
    }
    
    return (
            <>
                {token ? 
                    (<admin>
                        <h1>Profile Page</h1>
                        <div>
                            <h3>Welcome, Mr <span>{user}</span>.</h3>
                            <Link to={"/questioncreation"}>Create-Question</Link>
                            <button
                                onClick={logout}>Logout
                            </button>
                        </div>
                    </admin>) : (<h3>You don't have access to this page, go <Link to={'/'}>back</Link></h3>)
                }
            </>
        )
}

export default AdminProfile;