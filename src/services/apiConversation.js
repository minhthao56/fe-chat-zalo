import axiosClient from "./axiosClient";

const apiConversations = {
  postCreateConversation: (data) => {
    const url = "theater";
    return axiosClient.post(url, data);
  },
  getConversationOfUser: (id) => {
    const url = `theater/user/${id}`;

    return axiosClient.get(url);
  },
};
export default apiConversations;
