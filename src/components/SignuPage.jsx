import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignuPage = () => {
  const [passwordType, setPasswordType] = useState(false);

  function handleTooglePasswordType() {
    setPasswordType((Prev) => !Prev);
  }

  return (
    <div className="py-[120px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col w-[275px]">
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              It's nice having you here!
            </h1>
            <p className="text-center text-slate-300 font-semibold text-[20px] capitalize mb-3">
              signup with your email
            </p>
            <form className="flex flex-col gap-5">
              {/* <label htmlFor="email">Email</label> */}
              <input
                autoComplete="name"
                type="name"
                placeholder="Noman Ahmed"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />
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
                    onClick={handleTooglePasswordType}
                  />
                ) : (
                  <BsEyeSlash
                    size={22}
                    className="absolute inset-y-0 top-3 right-3 flex items-center text-gray-500 cursor-pointer hover:text-black"
                    onClick={handleTooglePasswordType}
                  />
                )}
              </div>
              <button
                type="submit"
                className="bg-green-500 p-2 rounded font-bold"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-white mt-6">
              Already have an account?{" "}
              <Link to="/login" className="uppercase font-bold">
                LOG IN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignuPage;
