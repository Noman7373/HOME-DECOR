import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../../Api/Query/userQuery";

const LoginPage = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [passwordType, setPasswordType] = useState(false);

  const validate = () => {
    const newError = {};
    if (!email) {
      newError.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.Email = "Email is not valid";
    }
    if (!password) {
      newError.Password = "Password is requried";
    }
    return newError;
  };

  const handeLogin = async (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
    } else {
      try {
        const user = await signinUser({ email, password });
        if (user) {
          navigate("/");
        }
      } catch (error) {
        throw new Error("User not found");
      }
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handlePasswordType() {
    setPasswordType((prev) => !prev);
  }
  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col gap-6 w-[275px]">
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              Welcome Back!
            </h1>
            <form className="flex flex-col gap-5" onSubmit={handeLogin}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                ref={inputRef}
                autoComplete="email"
                type="email"
                placeholder="officialnomanahmed@gamilcom"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />
              {/* <label htmlFor="password">password</label> */}
              <div className="relative">
                <input
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="Password"
                  type={`${passwordType ? "email" : "password"}`}
                  placeholder={`${passwordType ? "Password" : "********"}`}
                  className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
                  autoComplete="current-password"
                  autoCapitalize="off"
                />
                {passwordType ? (
                  <IoEyeOutline
                    size={22}
                    className="absolute inset-y-0 top-3 right-3 flex items-center text-gray-500 cursor-pointer hover:text-black"
                    onClick={handlePasswordType}
                  />
                ) : (
                  <BsEyeSlash
                    size={22}
                    className="absolute inset-y-0 top-3 right-3 flex items-center text-gray-500 cursor-pointer hover:text-black"
                    onClick={handlePasswordType}
                  />
                )}
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-300 flex justify-end hover:text-white"
              >
                Forget Password?
              </Link>
              <button
                type="submit"
                className="bg-green-500 p-2 text-white rounded font-bold"
              >
                Login
              </button>
            </form>
            <p className="text-center text-white mt-6">
              Don't have account yet?{" "}
              <Link to="/signup" className="uppercase font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
