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
  getListUserSendRequest: (id) => {
    const url = `friends/sendrequest/${id}`;
    return axiosClient.get(url);
  },
  getFriendIncludeAll: (id) => {
    const url = `friend/${id}`;
    return axiosClient.get(url);
  },
};
export default apiFriends;
