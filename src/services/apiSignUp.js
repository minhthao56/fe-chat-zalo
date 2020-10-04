import axiosClient from "./axiosClient";

const apiSignUp = {
  postSignUp: (data) => {
    const url = "auth/register";
    return axiosClient.post(url, data);
  },
};
export default apiSignUp;
