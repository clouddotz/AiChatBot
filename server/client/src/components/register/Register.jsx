import React, { useState } from "react";
import Input from "../input/Input";
import Login from "../login/Login";

const SignUp = () => {
  const [logged, setLogged] = useState(false);

  const toggleLog = () => {
    setLogged(!logged);
  };

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    confirm_Password: "",
  });

  const signUpBtn = (e) => {
    e.preventDefault();
    console.log(`Signing Up...`);
    console.log(userDetails);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const authCheck = () => {
    if (
      userDetails.username === "" ||
      userDetails.password === "" ||
      userDetails.confirm_Password === ""
    ) {
      alert("Provide all fields");
    } else if (userDetails.password !== userDetails.confirm_Password) {
      alert("Password does not match");
    } else if (userDetails.password.length < 6) {
      alert("Password length is less than 6 characters");
    } else {
      alert("Registration Successful");
      location.reload();
    }
  };

  return (
    <>
      {logged ? (
        <Login />
      ) : (
        <div id="signUp-Container">
          <h1>Sign-up Page</h1>

          <form action="" method="POST" onSubmit={signUpBtn}>
            <Input
              type={"text"}
              id={"Username"}
              placeholder={"Enter Username"}
              value={userDetails.username}
              name={"username"}
              onchange={handleChange}
            />

            <Input
              type={"password"}
              id={"Password"}
              placeholder={"Enter Password"}
              value={userDetails.password}
              name={"password"}
              onchange={handleChange}
            />
            <Input
              type={"password"}
              id={"Confirm-Password"}
              placeholder={"Enter Password"}
              value={userDetails.confirm_Password}
              name={"confirm_Password"}
              onchange={handleChange}
            />
            <button type="submit" onClick={authCheck}>
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
      )}
    </>
  );
};

export default SignUp;
