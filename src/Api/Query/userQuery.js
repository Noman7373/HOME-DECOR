import Axios from "../axios";

const USER_URL = import.meta.env.VITE_BACKEND_URL;

export const signUpUser = async ({ Name, Email, Password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/api/user/register`, {
      Name,
      Email,
      Password,
    });
    return data;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};

export const signinUser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/api/user/login`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
