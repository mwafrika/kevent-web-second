// booking APIs
import axios from "axios";
const baseUrl = "https://kevent.onrender.com/api/v1/";

// bookExpeditions
export const CreateMessage = async (data, id) => {
  const response = await axios({
    method: "post",
    url: `${baseUrl}expeditions/${id}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const CreateMessagePackage = async (data, id) => {
  const response = await axios({
    method: "post",
    url: `${baseUrl}packages/${id}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
