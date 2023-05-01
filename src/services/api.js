import axios from "axios";

const baseUrl = process.env.VUE_APP_API_BASE_URL;
console.log("baseUrl", baseUrl);

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;