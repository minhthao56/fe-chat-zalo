import axiosClient from "./axiosClient";

const apiUser = {
  getAllUser: () => {
    const url = "users";
    return axiosClient.get(url);
  },
};
export default apiUser;
