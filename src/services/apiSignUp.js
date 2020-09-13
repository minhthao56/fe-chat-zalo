import axiosClient from "./axiosClient";

const apiSignUp = {
  postSignUp: (data) => {
    const url = "users";
    return axiosClient.post(url, data);
  },
};
export default apiSignUp;
