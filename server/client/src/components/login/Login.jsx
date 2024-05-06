import React, { useState } from "react";
import Input from "../input/Input";
import "./Login.css";
import SignUp from "../register/Register";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../helperFunctions/userControl";
import swal from "sweetalert";
import Alert from "../alert/Alert";

const Login = () => {
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(null);

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userDetails;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle toggle
  const toggleLog = () => {
    setLogged(!logged);
  };

  // Handle Input Change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Login
  const loginBtn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await userLogin(username, password);
      setLoading(false);
      if (res) {
        swal({
          title: `Welcome ${res.data.username}`,
          text: `Login successful!`,
          icon: `success`,
        });
        navigate("/chat");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      {logged ? (
        <SignUp />
      ) : (
        <div id="login-main">
          <div id="login-Container">
            <h1>Welcome Back!</h1>

            {loading ? <p>Logging in...</p> : error && <Alert msg={error} />}

            <form action="" onSubmit={loginBtn} method="POST">
              <Input
                type={"text"}
                id={"Username"}
                placeholder={"Enter Username"}
                value={username}
                name={"username"}
                onChange={handleChange}
              />

              <Input
                type={"password"}
                id={"Password"}
                placeholder={"Enter Password"}
                value={password}
                name={"password"}
                onChange={handleChange}
              />
              <button type="submit">LOGIN</button>
            </form>

            <div id="login-bottomDiv">
              <h5>Don't have an account?</h5>
              <button id="login-btn" onClick={toggleLog}>
                Register here
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
