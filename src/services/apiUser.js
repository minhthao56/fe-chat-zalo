import axiosClient from "./axiosClient";

const apiUser = {
  getAllUser: () => {
    const url = "users";
    return axiosClient.get(url);
  },
  getOneUser: (id) => {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },
};
export default apiUser;
