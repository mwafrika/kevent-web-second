// booking APIs
import axios from "axios";
const baseUrl = "https://kevent.onrender.com/api/v1/";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return user.token;
  } else {
    return {};
  }
};

export const bookPackages = async (data, packageId) => {
  const response = await axios({
    method: "post",
    url: `${baseUrl}${packageId}/bookPackage`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const getAllBooking = async () => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}bookPackages`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const getOneBooking = async (id) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}bookPackages/${id}`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const updateBooking = async (data, id) => {
  const response = await axios({
    method: "put",
    url: `${baseUrl}bookPackages/${id}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const deleteBooking = async (id) => {
  const response = await axios({
    method: "delete",
    url: `${baseUrl}bookPackages/${id}`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

// bookExpeditions
export const bookExpeditions = async (data, expeditionId) => {
  const response = await axios({
    method: "post",
    url: `${baseUrl}${expeditionId}/bookExpedition`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const getAllExpeditions = async () => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}bookExpeditions`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const getOneExpedition = async (id) => {
  const response = await axios({
    method: "get",
    url: `${baseUrl}bookExpeditions/${id}`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const updateExpedition = async (data, id) => {
  const response = await axios({
    method: "put",
    url: `${baseUrl}bookExpeditions/${id}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};

export const deleteExpedition = async (id) => {
  const response = await axios({
    method: "delete",
    url: `${baseUrl}bookExpeditions/${id}`,
    headers: {
      "Content-Type": "application/json",
      auth: authHeader(),
    },
  });
  return response;
};
