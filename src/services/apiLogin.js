import axiosClient from "./axiosClient";

const apiLogin = {
  postLogin: (data) => {
    const url = "auth/login";
    return axiosClient.post(url, data);
  },
  getCheckLogin: () => {
    const url = "auth";
    return axiosClient.get(url);
  },
  postLoginGoogle: (data) => {
    const url = "auth/google";
    return axiosClient.post(url, data);
  },
};
export default apiLogin;
