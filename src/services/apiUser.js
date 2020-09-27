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
  updateUser: (id, data) => {
    const url = `users/${id}`;
    return axiosClient.put(url, data);
  },
  updateIamgeAvatar: (id, imageAvatar) => {
    const url = `cloudinary/${id}`;
    return axiosClient.put(url, imageAvatar);
  },
  updateImageBanner: (id, imageBanner) => {
    const url = `/cloudinary/banner/${id}`;
    return axiosClient.put(url, imageBanner);
  },
};
export default apiUser;
