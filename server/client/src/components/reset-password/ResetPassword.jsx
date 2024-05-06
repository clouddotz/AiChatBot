import React, { useState } from "react";
import Input from "../input/Input";
import { useNavigate, Link } from "react-router-dom";
import { userPasswordReset } from "../../helperFunctions/userControl";
import Alert from "../alert/Alert";
import { assets } from "../../assets/assets";
import "./ResetPassword.css";

const ResetPassword = () => {
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
  const navigate = useNavigate();

  // Handle SignUp
  const resetBtn = async (e) => {
    e.preventDefault();
    console.log(`reset...`);
    console.log(userDetails);
    if (username === "" || password === "" || confirm_Password === "") {
      setError("Provide all fields");
      console.log(`Err: `, error);
      return;
    }
    if (password !== confirm_Password) {
      setError("Password does not match");
      return;
    }
    try {
      setLoading(true);
      const res = await userPasswordReset(username, password);
      setLoading(false);
      if (res) {
        setError(null);
        await swal({
          title: `Password changed successfully!`,
          text: `Please login to continue`,
          icon: `success`,
        });
        navigate("/user");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <>
      <div id="reset-main">
        <nav>
          <div id="img-div">
            <img id="sail_logo" src={assets.sail_logo} alt="logo" />
          </div>
          <h1>SAIL ChatBot</h1>
          <Link to={"/"} id="reset-nav-Link">
            <p>Go Back Home</p>
          </Link>
        </nav>

        <div id="reset-Container">
          <h1 id="reset-title">Reset Password</h1>

          {loading ? (
            <p>Reseting password...</p>
          ) : (
            error && <Alert msg={error} />
          )}
          <form id="reset-form" method="POST" onSubmit={resetBtn}>
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
              id={"New-Password"}
              placeholder={"Enter New Password"}
              value={password}
              name={"password"}
              onChange={handleChange}
            />
            <Input
              type={"password"}
              id={"Confirm-Password"}
              placeholder={"Re-enter Password"}
              value={confirm_Password}
              name={"confirm_Password"}
              onChange={handleChange}
            />
            <button id="reset-submitBtn" type="submit">
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
