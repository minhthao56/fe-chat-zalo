import axiosClient from "./axiosClient";

const apiNotification = {
  postSendNotification: (data) => {
    const url = "notification";
    return axiosClient.post(url, data);
  }
 
};
export default apiNotification;