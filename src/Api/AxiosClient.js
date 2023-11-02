import axios from "axios";

export const env = import.meta.env;
const axiosClient = axios.create({
  // @ts-ignore
  baseURL: env.VITE_APP_API_URL,
  headers: {
    'Accept': 'application/json',
  }
});

export default axiosClient;
