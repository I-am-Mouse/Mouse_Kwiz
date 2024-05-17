
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const AdminSignup = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiSignUp({ fname, lname, email, password });
            swal("Account created successfully")
            navigate("/login")
        } catch (error) {
            swal(error.response.data.message);
        }
    };

    const apiSignUp = async ({fname, lname, email, password}) => {
        const url = "http://localhost:5000/signup";
        const config = {
        method: "POST",
        url,
        data: {
                fname,
                lname,
                email,
                password
            },
        };
        return axios(config);
    };

    return (
        <>
            <h1>SIGN-UP</h1>
            <div className="signup">
                <form method="post" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name:</label><br/>
                        <input type="text" id="firstName" name="fname" onChange={(e) => setFname(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label><br/>
                        <input type="text" id="lastName" name="lname" onChange={(e) => setLname(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label><br/>
                        <input type="email" id="email" placeholder="justme@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label><br/>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    <div id="nope">
                        <label htmlFor="submit">Submit:</label><br/>
                        <input type="submit" value="signup " />
                    </div>
                </form>
            </div>
        </>
    )
}
export default AdminSignup;