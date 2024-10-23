import { Axios } from "axios";




export const signinUser = async ({ password, email }) => {
  try {
    // we can perform total 4 request GET, POST, PATCH,DELETE   // RESTAPI
    const { data } = await Axios.post(`${USER_URL}/user/signin`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "An error occurred");
  }
};
