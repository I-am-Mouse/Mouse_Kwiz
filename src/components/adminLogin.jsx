
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swl from "sweetalert";

const AdminLogin = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiLogin({ email, password });
      setEmail(response.data.email);
      setPassword(response.data.password);

      const user = response.data.user;
      sessionStorage.setItem("User", user.firstName)

      const token = response.data.token;
      sessionStorage.setItem("Token", token)
      navigate("/profile");
    } catch (error) {
      swl(error.response.data.message);
    }
  };

  const apiLogin = async ({email, password, user, token}) => {
    const url = "http://localhost:5000/login";
    const config = {
      method: "POST",
      url,
      data: {
            email,
            password,
            user,
            token
        },

    };
    return axios(config);
  };

  return (
    <>
      <h1>LOGIN</h1>
      <div className="login">
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Email:</label><br />
            <input type="email" value={email} placeholder="justme@gmail.com" name="email" required onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Password:</label><br />
            <input type="password" value={password} id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div id="nope">
            <input type="submit" value="Login" />
          </div>
        </form>
            <Link to={"/signup"} id="signup">
                Signup
            </Link>
      </div>
    </>
  );
};

export default AdminLogin;