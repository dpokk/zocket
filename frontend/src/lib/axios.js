import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001" // Local backend URL
  : "https://realtime-chatapp-git-main-dpokk-projects.vercel.app/"; // Replace with your backend's production URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensure cookies are sent
});