import axiosClient from "./axiosClient";

const apiFriends = {
  getsRequetsAddFriend: (id) => {
    const url = `friends/request/${id}`;
    return axiosClient.get(url);
  },
  updateStatusOfRequest: (id) => {
    const url = `friends/${id}`;
    return axiosClient.put(url, { status: 2 });
  },
  getListFriends: (id) => {
    const url = `friends/list/${id}`;
    return axiosClient.get(url);
  },
  searchFriends: (params) => {
    const url = "users/find";

    return axiosClient.get(url, { params });
  },
  postAddFriend: (data) => {
    const url = "friends";
    return axiosClient.post(url, data);
  },
};
export default apiFriends;
