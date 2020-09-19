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
};
export default apiFriends;
