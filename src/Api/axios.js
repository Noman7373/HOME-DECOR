import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Make sure this is correctly set in your environment
  withCredentials: true,
});

export default Axios;
