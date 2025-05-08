import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-backend-4me4.onrender.com" : "/api",
  withCredentials: true,
});
