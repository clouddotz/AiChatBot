import React, { useState } from "react";
import Input from "../input/Input";
import Login from "../login/Login";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import Alert from "../alert/Alert";
import { userSignUp } from "../../helperFunctions/userControl";
import "./SignUp.css";
import { assets } from "../../assets/assets";

const SignUp = () => {
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // User state
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirm_Password: "",
  });

  // Destructure userDetails
  const { username, password, confirm_Password } = userDetails;

  // Handle toggle
  const toggleLog = () => {
    setLogged(!logged);
  };

  // Handle Input Change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Navigation hook
  // const navigate = useNavigate();

  // Handle SignUp
  const signUpBtn = async (e) => {
    e.preventDefault();
    console.log(`Signing Up...`);
    console.log(userDetails);
    if (username === "" || password === "" || confirm_Password === "") {
      setError("Provide all fields");
      return;
    }
    if (password !== confirm_Password) {
      setError("Password does not match");
      return;
    }
    try {
      setLoading(true);
      const res = await userSignUp(username, password);
      setLoading(false);
      if (res) {
        setError(null);
        await swal({
          title: `Registration successful!`,
          text: `Please login to continue`,
          icon: `success`,
        });
        // navigate("/user");
        location.reload();
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      {logged ? (
        <Login />
      ) : (
        <div id="signUp-main">
          <nav>
            <div id="img-div">
              <img id="sail_logo" src={assets.sail_logo} alt="logo" />
            </div>
            <h1>SAIL ChatBot</h1>
            <Link to={"/"} id="signUp-nav-Link">
              <p>Go Back Home</p>
            </Link>
          </nav>

          <div id="signUp-Container">
            <h1 id="signUp-title">Sign-up</h1>

            {loading ? <p>Signing up...</p> : error && <Alert msg={error} />}

            <form id="signUp-form" method="POST" onSubmit={signUpBtn}>
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
              <Input
                type={"password"}
                id={"Confirm-Password"}
                placeholder={"Enter Password"}
                value={confirm_Password}
                name={"confirm_Password"}
                onChange={handleChange}
              />
              <button id="signUp-submitBtn" type="submit">
                SIGN UP
              </button>
            </form>

            <div id="signUp-bottomDiv">
              <h5>Already have an account?</h5>
              <button id="signUp-btn" onClick={toggleLog}>
                Sign in here
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
