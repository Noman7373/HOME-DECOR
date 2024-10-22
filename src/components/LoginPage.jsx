import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState(false);

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
            <form className="flex flex-col gap-5">
              {/* <label htmlFor="email">Email</label> */}
              <input
                autoComplete="email"
                type="email"
                placeholder="officialnomanahmed@gamilcom"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />
              {/* <label htmlFor="password">password</label> */}
              <div className="relative">
                <input
                  type={`${passwordType ? "email" : "password"}`}
                  placeholder="******"
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
              <button
                type="submit"
                className="bg-green-500 p-2 rounded font-bold"
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
