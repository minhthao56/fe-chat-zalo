import axios from "axios";
import queryString from "query-string";

const token = localStorage.getItem("token");
// const URL_BE = process.env.REACT_APP_URL_BE;

const axiosClient = axios.create({
  baseURL: "/api/",
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);
export default axiosClient;
