import React, { useEffect, useRef, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../Api/Query/userQuery";

const SignuPage = () => {
  const navigate = useNavigate();
  const InputRef = useRef(null);
  const [passwordType, setPasswordType] = useState(false);
  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    InputRef.current.focus();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formValues.Name) {
      newErrors.Name = "Name is requried";
    }
    if (!formValues.Email) {
      newErrors.Email = "Email is requried";
    } else if (!/\S+@\S+\.\S+/.test(formValues.Email)) {
      newErrors.Email = "Email is invalid";
    }
    if (!formValues.Password) {
      newErrors.Password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      try {
        const user = await signUpUser({
          Name: formValues.Name,
          Email: formValues.Email,
          Password: formValues.Password,
        });
        if (user) {
          navigate("/"); // Redirect to home or any page on success
        }
      } catch (error) {
        // Log the error message for debugging
        console.error("Sign-up failed:", error.message);
  
        // Optionally set a form-level error to display to the user
        setErrors({ submit: error.message });
      }
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function handleTooglePasswordType() {
    setPasswordType((Prev) => !Prev);
  }

  return (
    <div className="py-[100px] px-[20px]">
      <div className="flex flex-row justify-center">
        <div className="bg-slate-900 md:px-[70px] flex flex-col p-[20px] rounded shadow-2xl">
          <div className="flex flex-col w-[275px] h-full">
            <h1 className="text-center text-slate-50 font-semibold text-[20px] capitalize mb-3">
              It's nice having you here!
            </h1>
            <p className="text-center text-slate-300 font-semibold text-[20px] capitalize mb-3">
              signup with your email
            </p>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                ref={InputRef}
                name="Name"
                autoComplete="name"
                type="name"
                value={formValues.Name}
                onChange={handleChange}
                placeholder="Noman Ahmed"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />
              {errors.Name && (
                <div className="text-red-500 text-sm">{errors.Name}</div>
              )}
              <input
                name="Email"
                autoComplete="email"
                type="email"
                value={formValues.Email}
                onChange={handleChange}
                placeholder="officialnomanahmed@gamilcom"
                className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
              />

              {errors.Email && (
                <div className="text-red-500 text-sm">{errors.Email}</div>
              )}
              {/* <label htmlFor="password">password</label> */}
              <div className="relative">
                <input
                  name="Password"
                  type={`${passwordType ? "email" : "password"}`}
                  placeholder={`${passwordType ? "Password" : "********"}`}
                  className="bg-white text-slate-800 p-3 rounded shadow w-full outline-0"
                  autoComplete="current-password"
                  autoCapitalize="off"
                  value={formValues.Password}
                  onChange={handleChange}
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

              {errors.Password && (
                <div className="text-red-500 text-sm">{errors.Email}</div>
              )}
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded font-bold"
              >
                Sign Up
              </button>
            </form>

            {errors.submit && (
  <div className="text-red-500 text-sm">{errors.submit}</div>
)}

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
