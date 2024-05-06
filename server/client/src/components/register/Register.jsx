import React, { useState } from "react";
import Login from "../login/Login";
import Logo from '../../assets/sail_logo.jpeg';

const SignUp = () => {
  const [logged, setLogged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleLog = () => {
    setLogged(!logged);
  };

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
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
      userDetails.email === "" ||
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

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {logged ? (
        <Login />
      ) : (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-[#EEF7FF] sm:px-4">
          <img src={Logo} width={50} className="mb-2 absolute top-0 left-0 mt-7 ml-4" />
          <h1 className="text-2xl font-semibold absolute top-0 left-1/2 transform -translate-x-1/2 mt-8">Sail ChatBot</h1>
          <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div className="text-center">
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Create an account
                </h3>
                <p className="flex items-center justify-center">
                  Already have an account?{" "}
                  <div
                    className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer ml-2"
                    onClick={toggleLog}
                  >
                    Log in
                  </div>
                </p>
              </div>
            </div>
            <div className="bg-[#E9F8F9] shadow p-4 py-6 sm:p-6 sm:rounded-lg">
              <form onSubmit={signUpBtn} className="space-y-5">
              <div>
                  <label className="font-medium">Username</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={handleChange}
                    name="username"
                    value={userDetails.username}
                  />
                </div>
                <div>
                  <label className="font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={handleChange}
                      name="password"
                      value={userDetails.password}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-indigo-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="font-medium">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      onChange={handleChange}
                      name="confirm_Password"
                      value={userDetails.confirm_Password}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-indigo-600"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={authCheck}>
                  Create account
                </button>
              </form>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default SignUp;
