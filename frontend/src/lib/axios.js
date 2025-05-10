import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:  "https://chat-application-backend-4me4.onrender.com" ,
  withCredentials: true,
});
