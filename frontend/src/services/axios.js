import axios from "axios";
import { URL } from "../constants"
const axiosInstance = axios.create({
  baseURL: URL,
});

/*axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    Promise.reject(
      (error.response && error.response.data) || "Algo salió mal"
    )
  }
);*/

export default axiosInstance;
